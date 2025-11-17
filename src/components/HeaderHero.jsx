import React from "react";

const HeaderHero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-300 via-teal-400 to-emerald-700" />
            <span className="text-slate-900 font-semibold tracking-wide">OpenIAP</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-slate-600">
            <a href="#" className="hover:text-slate-900">OpenCore</a>
            <a href="#" className="hover:text-slate-900">OpenRPA</a>
            <a href="#" className="hover:text-slate-900">Use cases</a>
            <a href="#" className="hover:text-slate-900">Pricing</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-600 hover:text-slate-900">GitHub</a>
            <button className="inline-flex items-center rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm font-medium shadow hover:bg-emerald-700 transition">Login</button>
          </div>
        </div>
      </div>

      <div className="pt-24 pb-16 sm:pt-28 sm:pb-24 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 h-64 w-[80rem] bg-gradient-to-r from-emerald-300/30 via-teal-400/20 to-emerald-700/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-block rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold ring-1 ring-emerald-200 mb-4">
            Abstracting away DevOps complexity
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Deploy secure, scalable apps anywhere
          </h1>
          <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-base sm:text-lg">
            With OpenCore by OpenIAP you can deploy code and applications across cloud, edge, and on‑prem environments—without traditional DevOps overhead.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-5 py-3 font-medium shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition">
              Try OpenCore for free
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-slate-300 text-slate-700 px-5 py-3 font-medium hover:bg-slate-50 transition">
              Get started
            </a>
          </div>
          <div className="mt-12 mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="h-64 sm:h-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left text-sm text-slate-200/90 w-full px-8">
                <div>
                  <p className="text-emerald-300 font-semibold">Multi‑language SDK</p>
                  <p className="mt-1 text-slate-300">Python, Node.js, .NET, Rust, C/C++, PHP, Java…</p>
                </div>
                <div>
                  <p className="text-emerald-300 font-semibold">Low‑code friendly</p>
                  <p className="mt-1 text-slate-300">Build with OpenRPA or Node‑RED, then scale.</p>
                </div>
                <div>
                  <p className="text-emerald-300 font-semibold">Observability built‑in</p>
                  <p className="mt-1 text-slate-300">Central logs, tracing, and 300+ metrics.</p>
                </div>
                <div>
                  <p className="text-emerald-300 font-semibold">Enterprise security</p>
                  <p className="mt-1 text-slate-300">ACLs, encryption, audit trails, least privilege.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHero;
