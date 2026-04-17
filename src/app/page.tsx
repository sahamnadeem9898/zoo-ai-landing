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
      <section className="py-32 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950 relative overflow-hidden">
        {/* Sophisticated Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzksNjksOTYsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-8 hover:border-purple-500/40 transition-all duration-500">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 animate-pulse shadow-lg shadow-purple-500/50"></span>
              <span className="text-sm text-purple-300 font-semibold tracking-wide">Simple, Transparent Pricing</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent leading-tight tracking-tight">
              Choose Your Plan
            </h2>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Start free, scale as you grow. All plans include a 14-day trial with full access to premium features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <div className="group relative transform transition-all duration-700 hover:-translate-y-2">
              {/* Glassmorphic Card with Animated Border */}
              <div className="absolute -inset-px bg-gradient-to-b from-neutral-700/50 via-neutral-800/30 to-neutral-700/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-neutral-900/90 backdrop-blur-xl border border-neutral-800/50 group-hover:border-neutral-700/80 transition-all duration-700 shadow-2xl group-hover:shadow-neutral-900/50 h-full flex flex-col overflow-hidden">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/50 mb-6 group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-700 shadow-lg">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Starter</h3>
                  <p className="text-neutral-400 text-lg">Perfect for individuals getting started</p>
                </div>

                <div className="relative mb-10">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent tracking-tight">$29</span>
                    <span className="text-neutral-500 text-xl font-medium">/mo</span>
                  </div>
                  <p className="text-sm text-purple-400 font-medium">Billed monthly</p>
                </div>

                <ul className="space-y-5 mb-12 flex-grow">
                  {['Up to 100 operations/month', '5 integrations', 'Basic automation workflows', 'Email support', 'Community access'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-neutral-300 group/item">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5 border border-neutral-600/50 group-hover/item:border-purple-500/50 transition-all duration-300">
                        <span className="text-neutral-400 text-xs font-bold">✓</span>
                      </div>
                      <span className="text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="relative w-full px-6 py-4 rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 text-white font-semibold text-base transition-all duration-500 border border-neutral-700 hover:border-neutral-600 shadow-lg hover:shadow-xl overflow-hidden group/btn">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700"></div>
                </button>
              </div>
            </div>

            {/* Professional Plan - Premium Featured */}
            <div className="group relative md:-mt-8 transform transition-all duration-700 hover:-translate-y-3">
              {/* Multi-layer Animated Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-3xl opacity-60 group-hover:opacity-100 blur-xl transition-all duration-700 animate-pulse"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-3xl opacity-80 group-hover:opacity-100 blur transition-all duration-700"></div>

              <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 h-full flex flex-col overflow-hidden shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/40">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Premium Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-white text-sm font-bold shadow-2xl shadow-purple-500/50 border border-purple-400/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-white/20 to-purple-400/0 animate-pulse rounded-full"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-base">⭐</span>
                      MOST POPULAR
                    </span>
                  </div>
                </div>

                <div className="relative mb-8 mt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 mb-6 shadow-2xl shadow-purple-500/50 group-hover:scale-110 group-hover:shadow-purple-500/70 transition-all duration-700 border border-purple-400/30">
                    <span className="text-4xl drop-shadow-lg">⚡</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Professional</h3>
                  <p className="text-neutral-300 text-lg">For growing teams and businesses</p>
                </div>

                <div className="relative mb-10">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white via-purple-100 to-purple-200 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">$99</span>
                    <span className="text-neutral-400 text-xl font-medium">/mo</span>
                  </div>
                  <p className="text-sm text-purple-300 font-semibold">Billed monthly • Save 20% yearly</p>
                </div>

                <ul className="space-y-5 mb-12 flex-grow">
                  {['Unlimited operations', 'Unlimited integrations', 'Advanced AI automation', 'Priority support (24/7)', 'Real-time analytics dashboard', 'Team collaboration tools', 'API access'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-neutral-100 group/item">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/40 border border-purple-400/30 group-hover/item:scale-110 transition-all duration-300">
                        <span className="text-white text-xs font-bold drop-shadow">✓</span>
                      </div>
                      <span className="font-medium text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="relative w-full px-6 py-5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white font-bold text-base transition-all duration-500 shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 overflow-hidden group/btn border border-purple-400/30">
                  <span className="relative z-10 drop-shadow">Start Free Trial</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700"></div>
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="group relative transform transition-all duration-700 hover:-translate-y-2">
              {/* Glassmorphic Card with Animated Border */}
              <div className="absolute -inset-px bg-gradient-to-b from-neutral-700/50 via-neutral-800/30 to-neutral-700/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-neutral-900/90 backdrop-blur-xl border border-neutral-800/50 group-hover:border-neutral-700/80 transition-all duration-700 shadow-2xl group-hover:shadow-neutral-900/50 h-full flex flex-col overflow-hidden">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/50 mb-6 group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-700 shadow-lg">
                    <span className="text-4xl">🏢</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Enterprise</h3>
                  <p className="text-neutral-400 text-lg">For large-scale organizations</p>
                </div>

                <div className="relative mb-10">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent tracking-tight">Custom</span>
                  </div>
                  <p className="text-sm text-purple-400 font-medium">Tailored to your needs</p>
                </div>

                <ul className="space-y-5 mb-12 flex-grow">
                  {['Everything in Professional', 'Custom AI model training', 'Dedicated account manager', 'White-label options', 'Custom SLA & compliance', 'On-premise deployment', 'SSO & advanced security'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-neutral-300 group/item">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5 border border-neutral-600/50 group-hover/item:border-purple-500/50 transition-all duration-300">
                        <span className="text-neutral-400 text-xs font-bold">✓</span>
                      </div>
                      <span className="text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="relative w-full px-6 py-4 rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 text-white font-semibold text-base transition-all duration-500 border border-neutral-700 hover:border-neutral-600 shadow-lg hover:shadow-xl overflow-hidden group/btn">
                  <span className="relative z-10">Contact Sales</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="mt-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-sm mb-8">
              <span className="text-neutral-500 text-sm font-medium">Trusted by over 10,000+ teams worldwide</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 hover:opacity-50 transition-opacity duration-500">
              {['TECHCORP', 'STARTUPHUB', 'GROWTHLABS', 'INNOVATE CO'].map((company, i) => (
                <div key={i} className="text-neutral-600 font-bold text-lg tracking-wider hover:text-neutral-500 transition-colors duration-300">
                  {company}
                </div>
              ))}
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
