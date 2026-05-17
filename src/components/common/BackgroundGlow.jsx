export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-8%] top-[20%] h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
    </div>
  );
}
