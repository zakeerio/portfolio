import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070A13]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-lg font-black text-white shadow-lg shadow-cyan-500/20">ZA</span>
          <span className="font-semibold tracking-wide text-white">Zahid Ali</span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
        <Button asChild className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-slate-950 hover:bg-cyan-100">
          <a href="#contact">Hire Me</a>
        </Button>
      </nav>
    </header>
  );
}
