export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-900/10"></div>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span className="text-sm text-purple-300">AI-Powered Operations</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
              Zoo AI
            </h1>

            <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
              Your intelligent assistant for multiple operations.<br />
              Automate workflows, boost productivity, get more done.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-lg transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                Get Started Free
              </button>
              <button className="px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold text-lg transition-all border border-white/10">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-24 bg-neutral-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            The Old Way vs The Zoo AI Way
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Problem */}
            <div className="p-8 rounded-2xl bg-red-950/20 border border-red-900/30">
              <div className="text-red-400 text-5xl mb-4">😓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Without Zoo AI</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Scattered tools and platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Manual, repetitive tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Wasted time context-switching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Inconsistent workflows</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-2xl bg-purple-950/20 border border-purple-500/30 shadow-lg shadow-purple-500/10">
              <div className="text-purple-400 text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">With Zoo AI</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>One unified AI assistant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Automated intelligent workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Seamless multi-task handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Consistent, reliable results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-neutral-400">
              Everything you need to supercharge your operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Automation</h3>
              <p className="text-neutral-400">
                AI-powered automation that learns and adapts to your workflow patterns
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-neutral-400">
                Execute complex operations in seconds, not hours
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure & Private</h3>
              <p className="text-neutral-400">
                Enterprise-grade security with end-to-end encryption
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Easy Integration</h3>
              <p className="text-neutral-400">
                Connect with your existing tools and platforms instantly
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-time Analytics</h3>
              <p className="text-neutral-400">
                Track performance and insights with live dashboards
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Operation</h3>
              <p className="text-neutral-400">
                Handle multiple tasks simultaneously with precision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-neutral-900/50 relative overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-purple-900/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-sm text-purple-300 font-medium">Flexible Pricing</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Start free, scale as you grow. All plans include a 14-day trial with full access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 lg:p-10 rounded-3xl bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 h-full flex flex-col">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <p className="text-neutral-400">Perfect for individuals getting started</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-transparent">$29</span>
                    <span className="text-neutral-400 text-lg">/mo</span>
                  </div>
                  <p className="text-sm text-purple-400">Billed monthly</p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>Up to 100 operations/month</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>5 integrations</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>Basic automation workflows</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>Email support</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>Community access</span>
                  </li>
                </ul>

                <button className="w-full px-6 py-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 text-white font-semibold transition-all duration-300 border border-neutral-700 hover:border-neutral-600 group-hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>

            {/* Professional Plan - Featured */}
            <div className="group relative md:-mt-4 md:scale-105">
              {/* Animated Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-3xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 animate-pulse"></div>

              <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 h-full flex flex-col">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-bold shadow-lg shadow-purple-500/50 animate-pulse">
                    ⭐ MOST POPULAR
                  </div>
                </div>

                <div className="mb-8 mt-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 mb-6 shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <p className="text-neutral-400">For growing teams and businesses</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-purple-200 via-white to-purple-200 bg-clip-text text-transparent">$99</span>
                    <span className="text-neutral-400 text-lg">/mo</span>
                  </div>
                  <p className="text-sm text-purple-400">Billed monthly • Save 20% yearly</p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/30">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="font-medium">Unlimited operations</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/30">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="font-medium">Unlimited integrations</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/30">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="font-medium">Advanced AI automation</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/30">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="font-medium">Priority support (24/7)</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/30">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="font-medium">Real-time analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/30">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="font-medium">Team collaboration tools</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/30">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="font-medium">API access</span>
                  </li>
                </ul>

                <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105">
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 lg:p-10 rounded-3xl bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 h-full flex flex-col">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-neutral-400">For large-scale organizations</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-transparent">Custom</span>
                  </div>
                  <p className="text-sm text-purple-400">Tailored to your needs</p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>Custom AI model training</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>White-label options</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>Custom SLA & compliance</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>On-premise deployment</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <span>SSO & advanced security</span>
                  </li>
                </ul>

                <button className="w-full px-6 py-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 text-white font-semibold transition-all duration-300 border border-neutral-700 hover:border-neutral-600 group-hover:scale-105">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <p className="text-neutral-500 text-sm mb-6">Trusted by over 10,000+ teams worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
              <div className="text-neutral-600 font-bold text-lg">TECHCORP</div>
              <div className="text-neutral-600 font-bold text-lg">STARTUPHUB</div>
              <div className="text-neutral-600 font-bold text-lg">GROWTHLABS</div>
              <div className="text-neutral-600 font-bold text-lg">INNOVATE CO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Loved by Teams Worldwide
            </h2>
            <p className="text-xl text-neutral-400">
              See what our users have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-purple-400">★</span>
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "Zoo AI transformed how our team operates. We've saved 20+ hours per week on routine tasks and can focus on what really matters."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-white">Sarah Mitchell</div>
                  <div className="text-sm text-neutral-400">Head of Operations, TechCorp</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-purple-400">★</span>
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "The automation capabilities are mind-blowing. It's like having an extra team member who never sleeps and never makes mistakes."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-white">James Chen</div>
                  <div className="text-sm text-neutral-400">CTO, StartupHub</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-purple-400">★</span>
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "Zoo AI is the secret weapon our competitors don't have. The ROI has been incredible – we're more productive than ever."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
                  MP
                </div>
                <div>
                  <div className="font-semibold text-white">Maria Patel</div>
                  <div className="text-sm text-neutral-400">CEO, Growth Labs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Join thousands of teams already using Zoo AI to work smarter
            </p>
            <button className="px-10 py-5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xl transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-neutral-400">
            <p className="text-lg font-semibold text-white mb-2">Zoo AI</p>
            <p>© 2026 Zoo AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
