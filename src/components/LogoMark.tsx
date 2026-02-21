export function LogoMark({ size = "text-xl" }: { size?: string }) {
  return (
    <>
      <span
        className={`font-syne font-extrabold tracking-tight ${size} text-text-primary group-hover:text-accent transition-colors duration-500`}
      >
        juanda
      </span>
      <span
        className={`font-syne font-extrabold tracking-tight ${size} text-accent group-hover:text-text-primary transition-colors duration-500`}
      >
        herrera
      </span>
    </>
  );
}
