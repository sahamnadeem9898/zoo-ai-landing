export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm text-purple-300 font-medium">Now Available</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
            Zoo AI
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 mb-4 max-w-3xl mx-auto font-medium">
            Your AI assistant for multiple operations
          </p>

          <p className="text-lg text-neutral-500 mb-12 max-w-2xl mx-auto">
            Streamline your workflow with intelligent automation that handles everything from scheduling to data analysis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg transition-all border border-neutral-700">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="px-6 py-24 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            The old way vs. <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">the Zoo AI way</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Without Zoo AI</h3>
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Juggling multiple disconnected tools and platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Repetitive manual tasks eating up valuable time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Context switching slowing down productivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Complex workflows requiring technical expertise</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-600/10 border border-purple-500/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/40 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">With Zoo AI</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>One intelligent assistant that connects everything</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Automated workflows that run in the background</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Stay focused with seamless multi-operation handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Natural language interface—no coding required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Everything you need, <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">all in one place</span>
            </h2>
            <p className="text-xl text-neutral-400">Powerful features designed for modern workflows</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-neutral-400">Process requests in milliseconds with our optimized AI engine</p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Operation</h3>
              <p className="text-neutral-400">Handle scheduling, emails, data analysis, and more simultaneously</p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure & Private</h3>
              <p className="text-neutral-400">Enterprise-grade security with end-to-end encryption</p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Learning</h3>
              <p className="text-neutral-400">Adapts to your preferences and workflow patterns over time</p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Team Collaboration</h3>
              <p className="text-neutral-400">Share workflows and insights across your entire team</p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Analytics & Insights</h3>
              <p className="text-neutral-400">Track productivity gains with detailed performance metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-24 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Loved by <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">teams worldwide</span>
            </h2>
            <p className="text-xl text-neutral-400">See what our customers have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "Zoo AI has completely transformed how our team operates. We're saving 10+ hours a week on routine tasks and can focus on what really matters."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SM
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Mitchell</div>
                  <div className="text-neutral-500 text-sm">Product Manager, TechCorp</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "The multi-operation capability is a game changer. I can handle emails, schedule meetings, and analyze data all in one place. It's like having a personal assistant."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JC
                </div>
                <div>
                  <div className="text-white font-semibold">James Chen</div>
                  <div className="text-neutral-500 text-sm">CEO, StartupXYZ</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "The learning curve was practically zero. Zoo AI just works. Our productivity has increased by 40% since implementation. Couldn't be happier!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  ER
                </div>
                <div>
                  <div className="text-white font-semibold">Emily Rodriguez</div>
                  <div className="text-neutral-500 text-sm">Operations Lead, GlobalCo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <p className="text-neutral-500 mb-8">Trusted by 10,000+ teams worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="text-neutral-600 font-bold text-xl">TECHCORP</div>
              <div className="text-neutral-600 font-bold text-xl">STARTUPXYZ</div>
              <div className="text-neutral-600 font-bold text-xl">GLOBALCO</div>
              <div className="text-neutral-600 font-bold text-xl">INNOVATE</div>
              <div className="text-neutral-600 font-bold text-xl">NEXUS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-purple-900/20 to-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-neutral-400 mb-10">
            Join thousands of teams already using Zoo AI to work smarter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-purple-500/30 text-lg">
              Start Free Trial
            </button>
            <button className="px-10 py-5 bg-transparent hover:bg-neutral-800 text-white font-semibold rounded-lg transition-all border-2 border-neutral-700 text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto text-center text-neutral-500">
          <p>© 2026 Zoo AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
