import { Globe2 } from "lucide-react";

export function PlatformBadge({ platform }) {
  const isFiverr = platform === "Fiverr";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${isFiverr ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-200" : "border-cyan-300/25 bg-cyan-300/10 text-cyan-200"}`}>
      <Globe2 className="h-3.5 w-3.5" />
      {platform} review
    </span>
  );
}
