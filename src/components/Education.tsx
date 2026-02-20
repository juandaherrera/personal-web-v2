"use client";

import { useLanguage } from "@/context/LanguageContext";
import { education, certifications } from "@/data/content";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Education() {
  const { isEn } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative section-py-lg overflow-hidden" ref={ref}>
      <div className="section-number absolute -top-4 left-0 select-none pointer-events-none">
        05
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs text-[#FF6B6B] uppercase tracking-widest mb-4">
              {isEn ? "Education" : "Educación"}
            </p>
            <h2 className="font-syne font-extrabold text-4xl text-[#fafaf9] leading-tight mb-10">
              {isEn ? "Academic background" : "Formación académica"}
            </h2>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-[#1f1f28] bg-[#111117]"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#18181f] border border-[#1f1f28] flex items-center justify-center overflow-hidden">
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={36}
                      height={36}
                      className="w-9 h-9 object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-base text-[#fafaf9]">
                      {isEn ? edu.degreeEn : edu.degree}
                    </h3>
                    <p className="font-figtree text-sm text-[#71717a]">
                      {edu.institution}
                    </p>
                    <p className="font-mono text-xs text-[#FF6B6B]/70 mt-0.5">
                      {edu.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="font-mono text-xs text-[#FF6B6B] uppercase tracking-widest mb-4">
              {isEn ? "Certifications" : "Certificaciones"}
            </p>
            <h2 className="font-syne font-extrabold text-4xl text-[#fafaf9] leading-tight mb-10">
              {isEn ? "Credentials" : "Credenciales"}
            </h2>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-[#1f1f28] bg-[#111117] hover:border-[#FF6B6B]/30 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#18181f] border border-[#1f1f28] flex items-center justify-center overflow-hidden">
                    <Image
                      src={cert.instituteLogo}
                      alt={cert.institute}
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain brightness-0 invert"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-syne font-bold text-sm text-[#fafaf9] truncate group-hover:text-[#FF6B6B] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="font-figtree text-xs text-[#71717a]">
                      {cert.institute} · {cert.year}
                    </p>
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-1 font-mono text-xs text-[#71717a] hover:text-[#FF6B6B] transition-colors"
                  >
                    {isEn ? "View" : "Ver"}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
