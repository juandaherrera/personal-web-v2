"use client";

import type { FinalWordData, WordRendererData } from "@isoterik/react-word-cloud";
import { AnimatedWordRenderer, WordCloud as WC } from "@isoterik/react-word-cloud";
import type { Ref } from "react";
import { useEffect, useRef, useState } from "react";

interface WordCloudProps {
  words: Array<{ text: string; value: number }>;
}

const ACCENT = "#FF6B6B";
const ACCENT_2 = "#FFB3B3";

export default function WordCloud({ words }: WordCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      setSize({ w, h: Math.round(w * 0.58) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const maxValue = words[0]?.value ?? 1;

  const fill = (word: { text: string; value: number }) => {
    const ratio = word.value / maxValue;
    if (ratio >= 0.7) return ACCENT;
    if (ratio >= 0.45) return ACCENT_2;
    const opacity = 0.3 + ratio * 0.7;
    return `rgba(250, 250, 249, ${opacity.toFixed(2)})`;
  };

  const fontSize = (word: { text: string; value: number }) => {
    const ratio = word.value / maxValue;
    const min = 13;
    const max = size ? Math.min(56, size.w * 0.07) : 52;
    return Math.round(min + ratio * (max - min));
  };

  const fontWeight = (word: { text: string; value: number }) => {
    const ratio = word.value / maxValue;
    if (ratio >= 0.7) return 800;
    if (ratio >= 0.45) return 700;
    if (ratio >= 0.25) return 500;
    return 400;
  };

  const rotate = (_: FinalWordData, index: number) => {
    return index % 5 === 0 ? 90 : 0;
  };

  const renderWord = (data: WordRendererData, ref?: Ref<SVGTextElement>) => (
    <AnimatedWordRenderer
      ref={ref}
      data={data}
      animationDelay={(_: unknown, i: number) => i * 25}
      textStyle={{
        fontFamily: "var(--font-syne-var), 'Roboto Condensed', sans-serif",
        cursor: "default",
        userSelect: "none",
      }}
    />
  );

  return (
    <div
      ref={containerRef}
      className="w-full border border-border-dark rounded-2xl bg-surface/50 overflow-hidden min-h-110 flex items-center justify-center"
    >
      {size ? (
        <WC
          words={words}
          width={size.w}
          height={size.h}
          fill={fill}
          fontSize={fontSize}
          fontWeight={fontWeight}
          rotate={rotate}
          padding={5}
          spiral="archimedean"
          renderWord={renderWord}
          svgProps={{
            style: { display: "block" },
          }}
        />
      ) : (
        <div className="h-110" />
      )}
    </div>
  );
}
