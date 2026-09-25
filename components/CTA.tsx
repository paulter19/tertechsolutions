import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-medium mb-4">
            Let&apos;s Talk
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Have a project in mind?
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell me a little about what you&apos;re looking to build.
            Whether it&apos;s a website, mobile app, or custom software,
            let&apos;s talk about it.
          </p>
        </div>

        {/* Contact Form */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-10">
          <form
            action="https://formspree.io/f/xyeylbpn"
            method="POST"
            className="space-y-5"
          >
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 outline-none transition focus:border-emerald-400/60 focus:bg-white/[0.04]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 outline-none transition focus:border-emerald-400/60 focus:bg-white/[0.04]"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-gray-400 mb-2"
              >
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 555-5555"
                className="w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 outline-none transition focus:border-emerald-400/60 focus:bg-white/[0.04]"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-400 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Tell me about your project..."
                required
                className="w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 outline-none transition focus:border-emerald-400/60 focus:bg-white/[0.04] resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-emerald-400 text-black font-semibold py-4 px-6 hover:bg-emerald-300 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-400/10"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {/* GitHub */}
          <a
            href="https://github.com/paulter19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:bg-white/[0.07] hover:border-white/20 transition"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/paulter19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:bg-white/[0.07] hover:border-white/20 transition"
          >
            <FaLinkedinIn size={18} />
            <span>LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="mailto:YOUR_EMAIL_HERE"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:bg-white/[0.07] hover:border-white/20 transition"
          >
            <Mail size={18} strokeWidth={2} />
            <span>Email Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}