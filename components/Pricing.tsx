
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$999",
    description: "For small businesses that need a professional web presence.",
    features: [
      "Custom responsive website",
      "Up to 5 pages",
      "Mobile optimized",
      "Contact form",
      "Basic SEO setup",
      "Deployment & hosting setup",
    ],
  },
  {
    name: "Business",
    price: "$1,999",
    description: "For growing businesses that need a stronger online presence.",
    features: [
      "Custom responsive website",
      "Up to 10 pages",
      "Mobile optimized",
      "Contact forms & integrations",
      "Advanced SEO setup",
      "Analytics integration",
      "AWS deployment",
      "30 days post-launch support",
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "For businesses that need custom software or more advanced functionality.",
    features: [
      "Custom web applications",
      "Database integration",
      "User authentication",
      "API integrations",
      "Cloud infrastructure",
      "Custom dashboards",
      "Scalable architecture",
      "Ongoing development available",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[#070B14] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Pricing
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Simple pricing.{" "}
            <span className="text-emerald-400">Built around your needs.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Whether you need a simple business website or a custom application,
            we build solutions around your goals, budget, and requirements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-emerald-400/60 bg-slate-900/90 shadow-[0_0_40px_rgba(52,211,153,0.08)]"
                  : "border-slate-800 bg-slate-900/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>

                <p className="mt-3 min-h-[56px] text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>

                <div className="mt-8">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>

                  {plan.price !== "Let's Talk" && (
                    <span className="ml-2 text-sm text-slate-500">
                      starting at
                    </span>
                  )}
                </div>
              </div>

              <div className="my-8 h-px bg-slate-800" />

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                      strokeWidth={2.5}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                    : "border border-slate-700 bg-slate-800 text-white hover:border-slate-600 hover:bg-slate-700"
                }`}
              >
                {plan.price === "Let's Talk"
                  ? "Discuss Your Project"
                  : "Get Started"}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Every project is different. Final pricing depends on scope,
            functionality, integrations, and project requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
