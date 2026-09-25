export default function Navbar() {
    return (
      <header className="fixed w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

          
        <a href="/" className="inline-block">
          <h1 className="text-2xl font-bold text-emerald-400">
            TerTechSolutions
          </h1>
        </a>
  
          <nav className="hidden md:flex gap-8 text-gray-300">
            <a href="#services" className="hover:text-white transition">
                Services
            </a>

            <a href="#projects" className="hover:text-white transition">
                Showcase
            </a>

            <a href="#pricing" className="hover:text-white transition">
                Pricing
            </a>

            <a href="#contact" className="hover:text-white transition">
                Let's Talk
            </a>

           {/*  <a
              href="/Resume_Paul_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="..."
            >
              Resume
            </a> */}
          </nav>
  
          <a
            href="#contact"
            className="bg-emerald-400 text-black hover:bg-emerald-300 px-5 py-3 rounded-full font-semibold transition"
            >
            Start a Project
          </a>
        </div>
      </header>
    );
  }