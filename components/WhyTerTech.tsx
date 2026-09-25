export default function WhyTerTech() {
    return (
      <section className="py-32 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-10">
          Why TerTech
        </h2>
  
        <div className="grid md:grid-cols-3 gap-6">
  
          {[
            "Modern React architecture",
            "Mobile-first design",
            "Fast load speeds",
            "Scalable cloud solutions",
            "Direct communication",
            "Ongoing support",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              {item}
            </div>
          ))}
  
        </div>
      </section>
    );
  }