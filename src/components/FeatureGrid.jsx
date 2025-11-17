import React from "react";

const features = [
  {
    title: "Multi‑language support",
    desc: "Use the same SDK experience across Python, Node, .NET, Rust, Java, PHP and more.",
    icon: "🌐",
  },
  {
    title: "Low‑code ready",
    desc: "Prototype with OpenRPA and Node‑RED, then harden and scale in OpenCore.",
    icon: "⚡",
  },
  {
    title: "Observability",
    desc: "300+ metrics, centralized logging, distributed tracing — out of the box.",
    icon: "📈",
  },
  {
    title: "Enterprise‑grade security",
    desc: "ACLs, encryption, audit trail, version history and least‑privilege by default.",
    icon: "🔒",
  },
  {
    title: "Workitem queues",
    desc: "Break work into scalable units with retries, visibility and orchestration.",
    icon: "📦",
  },
  {
    title: "Modular by design",
    desc: "Ship small, independent packages that are easy to test and scale.",
    icon: "🧩",
  },
];

const FeatureCard = ({ title, desc, icon }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
    <div className="text-2xl">{icon}</div>
    <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600 text-sm">{desc}</p>
  </div>
);

const FeatureGrid = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">What you get with OpenCore</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">A simple platform that removes DevOps friction and lets every team ship faster across cloud, edge and on‑prem.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
