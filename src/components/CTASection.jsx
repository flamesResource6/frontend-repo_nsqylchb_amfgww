import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Ready to see it in action?</h3>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Join thousands of developers and operators who run secure, observable and scalable apps with OpenCore.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-5 py-3 font-medium shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition">
            Start free
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-xl border border-slate-300 text-slate-700 px-5 py-3 font-medium hover:bg-slate-50 transition">
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
