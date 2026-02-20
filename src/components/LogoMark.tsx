export function LogoMark({ size = "text-xl" }: { size?: string }) {
  return (
    <>
      <span
        className={`font-syne font-extrabold tracking-tight ${size} text-[#fafaf9] group-hover:text-[#FF6B6B] transition-colors duration-500`}
      >
        juanda
      </span>
      <span
        className={`font-syne font-extrabold tracking-tight ${size} text-[#FF6B6B] group-hover:text-[#fafaf9] transition-colors duration-500`}
      >
        herrera
      </span>
    </>
  );
}
