import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const ContactPage = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  //   useEffect(() => {
  //     gsap.from(formRef.current, {
  //       opacity: 1,
  //       y: 40,
  //       duration: 1,
  //       ease: "power3.out",
  //     });
  //   }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with your submission logic (Formspree, HeroTofu, etc.)
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    console.log(form);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-5"
      id="contact"
    >
      <div
        ref={formRef}
        className="w-full max-w-lg bg-slate-900/80 rounded-3xl shadow-2xl mt-8 p-8 md:p-10 border border-slate-700 relative overflow-hidden"
      >
        {/* Animated Background Accent */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
          Let's Connect!
        </h2>
        <p className="text-slate-300 mb-8">
          Have a project in mind or just want to say hi? Fill out the form below
          or reach out via social links.
        </p>
        {submitted ? (
          <div className="text-cyan-400 font-semibold text-center py-8">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-5 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-cyan-400 transition text-white font-extrabold text-lg shadow-lg"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-10 text-center text-slate-300">
          Or email me at{" "}
          <a
            href="mailto:sudharsan6078@gmail.com"
            className="text-cyan-400 underline font-semibold"
          >
            sudharsan6078@gmail.com
          </a>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://linkedin.com/in/sudharsan6078"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-purple-400 text-3xl transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-purple-400 text-3xl transition"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-purple-400 text-3xl transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
