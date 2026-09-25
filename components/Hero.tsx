export default function Hero() {
    return (
      <section className="min-h-screen flex items-center relative">
  
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-500/20 blur-3xl" />
  
        <div className="max-w-7xl mx-auto px-6 relative pt-24">
  
          <span className="text-emerald-400 uppercase tracking-widest">
            Software Solutions Agency
          </span>
  
          <h1 className="text-6xl md:text-8xl font-black mt-6 leading-none">
            We Build Software That
            <span className="text-blue-400"> Grows Businesses.</span>
          </h1>
  
          <p className="mt-8 text-xl text-gray-400 max-w-3xl">
            Websites, mobile apps, client portals, dashboards, and custom
            software engineered to help businesses move faster.
          </p>
  
          <div className="mt-12 flex gap-4 flex-wrap">
            <a href="#contact" className="bg-emerald-500 px-8 py-4 rounded-full font-bold">
              Book Consultation
            </a>
  
            <a
              href="#projects"
              className="border border-white/20 px-8 py-4 rounded-full"
            >
              View Projects
            </a>
          </div>
  
        </div>
      </section>
    );
  }