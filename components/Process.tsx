const steps = ["Discover", "Design", "Develop", "Launch"];

export default function Process() {
  return (
    <section id="process" className="py-32 max-w-7xl mx-auto px-6">

      <h2 className="text-5xl font-bold mb-16">
        Our Process
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {steps.map((step, i) => (
          <div
            key={step}
            className="rounded-3xl bg-white/5 border border-white/10 p-8"
          >
            <span className="text-emerald-400 text-3xl">
              0{i + 1}
            </span>

            <h3 className="text-2xl font-bold mt-6">
              {step}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}