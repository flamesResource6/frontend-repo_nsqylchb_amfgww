import React from "react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Lenovo_logo_2015.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Canon_wordmark.svg",
];

const LogosMarquee = () => {
  return (
    <section className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-xs tracking-[0.2em] uppercase">Trusted by teams worldwide</p>
        <div className="relative mt-6 overflow-hidden">
          <div className="flex gap-16 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
            {[...logos, ...logos, ...logos].map((src, i) => (
              <img key={i} src={src} alt="logo" className="h-8 opacity-70" />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
};

export default LogosMarquee;
