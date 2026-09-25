const services = [
    {
      title: "Business Websites",
      desc: "Fast, SEO-ready websites designed to convert visitors into customers.",
    },
    {
      title: "Mobile Apps",
      desc: "iOS and Android apps built with React Native.",
    },
    {
      title: "Custom Software",
      desc: "Dashboards, CRMs, portals, and internal tools.",
    },
    {
      title: "AI Automation",
      desc: "Workflows and integrations that save businesses time.",
    },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="py-32 max-w-7xl mx-auto px-6">
  
        <h2 className="text-5xl font-bold mb-16">
          What We Build
        </h2>
  
        <div className="grid md:grid-cols-2 gap-8">
  
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-emerald-400 transition"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
  
        </div>
      </section>
    );
  }