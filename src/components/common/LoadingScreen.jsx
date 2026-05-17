export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[1200] grid place-items-center bg-[#070A13] text-center">
      <div className="space-y-6">
        <div className="mx-auto h-24 w-24 rounded-full border-[6px] border-cyan-300/20 border-t-cyan-400 animate-spin" />
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Preparing portfolio</p>
          <p className="mt-3 max-w-sm text-base leading-7 text-slate-300">Loading animations, projects, and content for a premium experience.</p>
        </div>
      </div>
    </div>
  );
}
