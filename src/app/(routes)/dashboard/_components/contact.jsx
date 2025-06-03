'use client'
import { Mail, Phone, Instagram, Facebook, Twitter, Send, MessageSquare } from 'lucide-react'

export default function Contacts() {
  const socialLinks = [
    {
      id: 1,
      name: "Email",
      icon: <Mail className="w-6 h-6 text-red-500" />,
      url: "mailto:dcode2825@gmail.com",
      handle: "contact@example.com"
    },
    {
      id: 2,
      name: "Phone",
      icon: <Phone className="w-6 h-6 text-green-500" />,
      url: "num:+09754884910",
      handle: "+1 (234) 567-890"
    },
    {
      id: 3,
      name: "Instagram",
      icon: <Instagram className="w-6 h-6 text-pink-600" />,
      url: "https://instagram.com/dcode.hub?igsh=M2dyYnh5MHo4d3F0",
      handle: "@DCODE"
    },
    {
      id: 4,
      name: "Facebook",
      icon: <Facebook className="w-6 h-6 text-blue-600" />,
      url: "https://facebook.com/profile.php?id=61555924405854",
      handle: "DCODE"
    },
    {
      id: 5,
      name: "Twitter",
      icon: <Twitter className="w-6 h-6 text-blue-400" />,
      url: "https://twitter.com/yourhandle",
      handle: "@yourhandle"
    },
    {
      id: 6,
      name: "Telegram",
      icon: <Send className="w-6 h-6 text-blue-500" />,
      url: "https://t.me/yourhandle",
      handle: "@yourhandle"
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-md backdrop-saturate-150">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
              <MessageSquare className="w-5 h-5 text-blue-400" /> Send us a message
            </h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3f4ca0] focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Name@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3f4ca0] focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3f4ca0] focus:border-transparent transition-all duration-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#3f4ca0] hover:bg-[#3f4ca0]/90 text-white font-medium rounded-lg transition-all duration-300 hover:scale-[1.02]"
                style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="p-8 rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-md backdrop-saturate-150">
            <h3 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
              Connect With Us
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-4"
                >
                  <div className="p-2 rounded-full">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
                      {link.name}
                    </p>
                    <p className="text-xs text-white/80" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
                      {link.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}