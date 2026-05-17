export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <p className="font-bold text-white">Zahid Ali</p>
          <p className="mt-1 text-sm text-slate-400">Built with Laravel, Shopify, Webflow, React, WordPress, and modern full stack expertise.</p>
        </div>
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Zahid Ali. All rights reserved.</p>
      </div>
    </footer>
  );
}
