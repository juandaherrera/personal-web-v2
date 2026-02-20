export function TechBadge({ label }: { label: string }) {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[#4DBFB9]/8 border border-[#4DBFB9]/20 text-[#4DBFB9]/70 hover:bg-[#4DBFB9]/15 hover:border-[#4DBFB9]/50 hover:text-[#4DBFB9] transition-all duration-200 cursor-default select-none">
      {label}
    </span>
  );
}
