export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Tailwind v4 Hex Colors Demo
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Exploring using hex codes for semantic design tokens and arbitrary
            values
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Design tokens
            </h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-mono text-gray-600 dark:text-gray-400">
                  primary: #5c28e7
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-sm font-mono text-gray-600 dark:text-gray-400">
                  secondary: #f13200
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Color Swatches */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Color palette</h2>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 ring-1 ring-gray-950/10 dark:ring-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-3">
                <h3 className="text-sm/6 font-mono text-gray-700 dark:text-gray-300">
                  Primary
                </h3>
                <div className="space-y-2">
                  <div className="bg-primary h-12 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">100%</span>
                  </div>
                  <div className="bg-primary/80 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">80%</span>
                  </div>
                  <div className="bg-primary/60 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">60%</span>
                  </div>
                  <div className="bg-primary/40 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">40%</span>
                  </div>
                  <div className="bg-primary/20 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-gray-700 dark:text-gray-300 text-xs font-mono">
                      20%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm/6 font-mono text-gray-700 dark:text-gray-300">
                  Secondary
                </h3>
                <div className="space-y-2">
                  <div className="bg-secondary h-12 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">100%</span>
                  </div>
                  <div className="bg-secondary/80 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">80%</span>
                  </div>
                  <div className="bg-secondary/60 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">60%</span>
                  </div>
                  <div className="bg-secondary/40 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">40%</span>
                  </div>
                  <div className="bg-secondary/20 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-gray-700 dark:text-gray-300 text-xs font-mono">
                      20%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm/6 font-mono text-gray-700 dark:text-gray-300">
                  Arbitrary Primary
                </h3>
                <div className="space-y-2">
                  <div className="bg-[#5c28e7] h-12 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">100%</span>
                  </div>
                  <div className="bg-[#5c28e7]/80 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">80%</span>
                  </div>
                  <div className="bg-[#5c28e7]/60 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">60%</span>
                  </div>
                  <div className="bg-[#5c28e7]/40 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">40%</span>
                  </div>
                  <div className="bg-[#5c28e7]/20 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-gray-700 dark:text-gray-300 text-xs font-mono">
                      20%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm/6 font-mono text-gray-700 dark:text-gray-300">
                  Arbitrary Secondary
                </h3>
                <div className="space-y-2">
                  <div className="bg-[#f13200] h-12 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">100%</span>
                  </div>
                  <div className="bg-[#f13200]/80 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">80%</span>
                  </div>
                  <div className="bg-[#f13200]/60 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">60%</span>
                  </div>
                  <div className="bg-[#f13200]/40 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono">40%</span>
                  </div>
                  <div className="bg-[#f13200]/20 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-gray-700 dark:text-gray-300 text-xs font-mono">
                      20%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solid Buttons */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Solid buttons</h2>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 ring-1 ring-gray-950/10 dark:ring-white/10">
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-mono shadow-xs transition-colors">
                bg-primary
              </button>
              <button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg text-sm font-mono shadow-xs transition-colors">
                bg-secondary
              </button>
              <button className="bg-[#5c28e7] hover:bg-[#4c1fd1] text-white px-4 py-2 rounded-lg text-sm font-mono shadow-xs transition-colors">
                bg-[#5c28e7]
              </button>
              <button className="bg-[#f13200] hover:bg-[#943300] text-white px-4 py-2 rounded-lg text-sm font-mono shadow-xs transition-colors">
                bg-[#f13200]
              </button>
            </div>
          </div>
        </section>

        {/* Outline Buttons */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Outline buttons</h2>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 ring-1 ring-gray-950/10 dark:ring-white/10">
            <div className="flex flex-wrap gap-4">
              <button className="rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-mono text-primary shadow-xs inset-ring inset-ring-primary hover:bg-primary/5 transition-colors">
                inset-ring-primary
              </button>
              <button className="rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-mono text-secondary shadow-xs inset-ring inset-ring-secondary hover:bg-secondary/5 transition-colors">
                inset-ring-secondary
              </button>
              <button className="rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-mono text-[#5c28e7] shadow-xs inset-ring inset-ring-[#5c28e7] hover:bg-[#5c28e7]/5 transition-colors">
                inset-ring-[#5c28e7]
              </button>
              <button className="rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-mono text-[#f13200] shadow-xs inset-ring inset-ring-[#f13200] hover:bg-[#f13200]/5 transition-colors">
                inset-ring-[#f13200]
              </button>
            </div>
          </div>
        </section>

        {/* Subtle Buttons */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Subtle buttons</h2>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 ring-1 ring-gray-950/10 dark:ring-white/10">
            <div className="flex flex-wrap gap-4">
              <button className="rounded-md bg-primary/10 px-3 py-2 text-sm font-mono text-primary shadow-xs hover:bg-primary/20 transition-colors">
                bg-primary/10
              </button>
              <button className="rounded-md bg-secondary/10 px-3 py-2 text-sm font-mono text-secondary shadow-xs hover:bg-secondary/20 transition-colors">
                bg-secondary/10
              </button>
              <button className="rounded-md bg-[#5c28e7]/10 px-3 py-2 text-sm font-mono text-[#5c28e7] shadow-xs hover:bg-[#5c28e7]/20 transition-colors">
                bg-[#5c28e7]/10
              </button>
              <button className="rounded-md bg-[#f13200]/10 px-3 py-2 text-sm font-mono text-[#f13200] shadow-xs hover:bg-[#f13200]/20 transition-colors">
                bg-[#f13200]/10
              </button>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Shadows</h2>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 ring-1 ring-gray-950/10 dark:ring-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg shadow-primary/25">
                <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                  shadow-primary/25
                </div>
                <div className="text-xs text-gray-500">
                  Primary colored shadow
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg shadow-secondary/25">
                <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                  shadow-secondary/25
                </div>
                <div className="text-xs text-gray-500">
                  Secondary colored shadow
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg shadow-[#5c28e7]/25">
                <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                  shadow-[#5c28e7]/25
                </div>
                <div className="text-xs text-gray-500">
                  Arbitrary hex shadow
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Borders, Outlines, and Rings */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Borders, outlines, and rings</h2>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 ring-1 ring-gray-950/10 dark:ring-white/10">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Borders</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-primary ring-1 ring-gray-950/10 dark:ring-white/10">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">border-primary</div>
                    <div className="text-xs text-gray-500">Primary border</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-secondary ring-1 ring-gray-950/10 dark:ring-white/10">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">border-secondary</div>
                    <div className="text-xs text-gray-500">Secondary border</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-[#5c28e7] ring-1 ring-gray-950/10 dark:ring-white/10">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">border-[#5c28e7]</div>
                    <div className="text-xs text-gray-500">Arbitrary hex border</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Ring utilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-gray-800">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                      ring-primary
                    </div>
                    <div className="text-xs text-gray-500">Primary ring</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-2 ring-secondary ring-offset-2 ring-offset-white dark:ring-offset-gray-800">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                      ring-secondary
                    </div>
                    <div className="text-xs text-gray-500">Secondary ring</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-2 ring-[#5c28e7] ring-offset-2 ring-offset-white dark:ring-offset-gray-800">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                      ring-[#5c28e7]
                    </div>
                    <div className="text-xs text-gray-500">
                      Arbitrary hex ring
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Ring opacity
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-2 ring-primary/50 ring-offset-2 ring-offset-white dark:ring-offset-gray-800">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                      ring-primary/50
                    </div>
                    <div className="text-xs text-gray-500">
                      50% opacity ring
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-2 ring-secondary/30 ring-offset-2 ring-offset-white dark:ring-offset-gray-800">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                      ring-secondary/30
                    </div>
                    <div className="text-xs text-gray-500">
                      30% opacity ring
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-2 ring-[#f13200]/40 ring-offset-2 ring-offset-white dark:ring-offset-gray-800">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                      ring-[#f13200]/40
                    </div>
                    <div className="text-xs text-gray-500">
                      40% opacity ring
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Outline utilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 outline outline-2 outline-primary outline-offset-2">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                      outline-primary
                    </div>
                    <div className="text-xs text-gray-500">Primary outline</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 outline outline-2 outline-secondary outline-offset-2">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                      outline-secondary
                    </div>
                    <div className="text-xs text-gray-500">
                      Secondary outline
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 outline outline-2 outline-[#5c28e7] outline-offset-2">
                    <div className="text-sm font-mono text-gray-900 dark:text-white mb-1">
                      outline-[#5c28e7]
                    </div>
                    <div className="text-xs text-gray-500">
                      Arbitrary hex outline
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Text Decorations */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Text decorations</h2>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 ring-1 ring-gray-950/10 dark:ring-white/10">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Underlines
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                    <p className="text-lg underline decoration-primary decoration-2 mb-2">
                      This text has a primary underline decoration
                    </p>
                    <div className="text-sm font-mono text-gray-500">
                      decoration-primary
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                    <p className="text-lg underline decoration-secondary decoration-2 mb-2">
                      This text has a secondary underline decoration
                    </p>
                    <div className="text-sm font-mono text-gray-500">
                      decoration-secondary
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                    <p className="text-lg underline decoration-[#5c28e7] decoration-2 mb-2">
                      This text has an arbitrary hex underline decoration
                    </p>
                    <div className="text-sm font-mono text-gray-500">
                      decoration-[#5c28e7]
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Line-through
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                    <p className="text-lg line-through decoration-primary decoration-2 mb-2">
                      This text has a primary line-through decoration
                    </p>
                    <div className="text-sm font-mono text-gray-500">
                      decoration-primary
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                    <p className="text-lg line-through decoration-secondary decoration-2 mb-2">
                      This text has a secondary line-through decoration
                    </p>
                    <div className="text-sm font-mono text-gray-500">
                      decoration-secondary
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                    <p className="text-lg line-through decoration-[#f13200] decoration-2 mb-2">
                      This text has an arbitrary hex line-through decoration
                    </p>
                    <div className="text-sm font-mono text-gray-500">
                      decoration-[#f13200]
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Overlines
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                    <p className="text-lg overline decoration-primary decoration-2 mb-2">
                      This text has a primary overline decoration
                    </p>
                    <div className="text-sm font-mono text-gray-500">
                      decoration-primary
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                    <p className="text-lg overline decoration-secondary decoration-2 mb-2">
                      This text has a secondary overline decoration
                    </p>
                    <div className="text-sm font-mono text-gray-500">
                      decoration-secondary
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                    <p className="text-lg overline decoration-[#5c28e7] decoration-2 mb-2">
                      This text has an arbitrary hex overline decoration
                    </p>
                    <div className="text-sm font-mono text-gray-500">
                      decoration-[#5c28e7]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Text Colors */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Text colors</h2>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 ring-1 ring-gray-950/10 dark:ring-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Large heading example
                  </h3>
                  <p className="text-sm font-mono text-gray-500">
                    text-primary
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    Large heading example
                  </h3>
                  <p className="text-sm font-mono text-gray-500">
                    text-secondary
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                  <h3 className="text-2xl font-bold text-[#5c28e7] mb-2">
                    Large heading example
                  </h3>
                  <p className="text-sm font-mono text-gray-500">
                    text-[#5c28e7]
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                  <h3 className="text-2xl font-bold text-[#f13200] mb-2">
                    Large heading example
                  </h3>
                  <p className="text-sm font-mono text-gray-500">
                    text-[#f13200]
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                  <p className="text-primary/70 mb-2">
                    This is muted text with 70% opacity for subtle content and
                    secondary information.
                  </p>
                  <p className="text-sm font-mono text-gray-500">
                    text-primary/70
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                  <p className="text-secondary/70 mb-2">
                    This is muted text with 70% opacity for subtle content and
                    secondary information.
                  </p>
                  <p className="text-sm font-mono text-gray-500">
                    text-secondary/70
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                  <p className="text-[#5c28e7]/70 mb-2">
                    This is muted text with 70% opacity for subtle content and
                    secondary information.
                  </p>
                  <p className="text-sm font-mono text-gray-500">
                    text-[#5c28e7]/70
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 ring-1 ring-gray-950/10 dark:ring-white/10">
                  <p className="text-[#f13200]/70 mb-2">
                    This is muted text with 70% opacity for subtle content and
                    secondary information.
                  </p>
                  <p className="text-sm font-mono text-gray-500">
                    text-[#f13200]/70
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Gradients</h2>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 ring-1 ring-gray-950/10 dark:ring-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white">
                <div className="text-sm font-mono mb-2">
                  from-primary to-secondary
                </div>
                <div className="text-xs opacity-90">
                  Semantic color gradient
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#5c28e7] to-[#f13200] rounded-lg p-6 text-white">
                <div className="text-sm font-mono mb-2">
                  from-[#5c28e7] to-[#f13200]
                </div>
                <div className="text-xs opacity-90">Arbitrary hex gradient</div>
              </div>
              <div className="bg-gradient-to-t from-primary/20 to-primary/80 rounded-lg p-6 text-white">
                <div className="text-sm font-mono mb-2">
                  from-primary/20 to-primary/80
                </div>
                <div className="text-xs opacity-90">Opacity gradient</div>
              </div>
              <div className="bg-gradient-to-bl from-[#5c28e7]/20 to-[#5c28e7]/80 rounded-lg p-6 text-white">
                <div className="text-sm font-mono mb-2">
                  from-[#5c28e7]/20 to-[#5c28e7]/80
                </div>
                <div className="text-xs opacity-90">
                  Arbitrary opacity gradient
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dividers */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Dividers</h2>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 ring-1 ring-gray-950/10 dark:ring-white/10">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Solid dividers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm font-mono text-gray-700 dark:text-gray-300 mb-3">
                      divide-primary
                    </div>
                    <div className="divide-y divide-primary bg-white dark:bg-gray-800 rounded-lg ring-1 ring-gray-950/10 dark:ring-white/10">
                      <div className="p-3">First item</div>
                      <div className="p-3">Second item</div>
                      <div className="p-3">Third item</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-mono text-gray-700 dark:text-gray-300 mb-3">
                      divide-secondary
                    </div>
                    <div className="divide-y divide-secondary bg-white dark:bg-gray-800 rounded-lg ring-1 ring-gray-950/10 dark:ring-white/10">
                      <div className="p-3">First item</div>
                      <div className="p-3">Second item</div>
                      <div className="p-3">Third item</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-mono text-gray-700 dark:text-gray-300 mb-3">
                      divide-[#5c28e7]
                    </div>
                    <div className="divide-y divide-[#5c28e7] bg-white dark:bg-gray-800 rounded-lg ring-1 ring-gray-950/10 dark:ring-white/10">
                      <div className="p-3">First item</div>
                      <div className="p-3">Second item</div>
                      <div className="p-3">Third item</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Subtle dividers (30% opacity)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm font-mono text-gray-700 dark:text-gray-300 mb-3">
                      divide-primary/30
                    </div>
                    <div className="divide-y divide-primary/30 bg-white dark:bg-gray-800 rounded-lg ring-1 ring-gray-950/10 dark:ring-white/10">
                      <div className="p-3">First item</div>
                      <div className="p-3">Second item</div>
                      <div className="p-3">Third item</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-mono text-gray-700 dark:text-gray-300 mb-3">
                      divide-secondary/30
                    </div>
                    <div className="divide-y divide-secondary/30 bg-white dark:bg-gray-800 rounded-lg ring-1 ring-gray-950/10 dark:ring-white/10">
                      <div className="p-3">First item</div>
                      <div className="p-3">Second item</div>
                      <div className="p-3">Third item</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-mono text-gray-700 dark:text-gray-300 mb-3">
                      divide-[#5c28e7]/30
                    </div>
                    <div className="divide-y divide-[#5c28e7]/30 bg-white dark:bg-gray-800 rounded-lg ring-1 ring-gray-950/10 dark:ring-white/10">
                      <div className="p-3">First item</div>
                      <div className="p-3">Second item</div>
                      <div className="p-3">Third item</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
