const tools = [
    {name: "python", image: "/assets/carousel/Python-logo.svg"},
    {name: "flask", image: "/assets/carousel/Flask-logo.svg"},
    {name: "c", image: "/assets/carousel/C_Programming_Language.svg"},
    {name: "opengl", image: "/assets/carousel/opengl.svg"},
    {name: "react", image: "/assets/carousel/react.svg"},
    {name: "tailwind", image: "/assets/carousel/tailwind.svg"},
    {name: "sqlite", image: "/assets/carousel/sqlite.svg"},
    {name: "rust", image: "/assets/carousel/rust.svg"},
    {name: "git", image: "/assets/carousel/git.svg"}
  ]

function ToolCarousel() {
  return (
      <div id="toolcarousel" class="mb-10 mt-2">
        <div class="mb-4 text-center">
          <h2 class="font-heading text-3xl tracking-tight">Tech Stack</h2>
          <span class="mx-auto mt-2 block h-1 w-12 rounded bg-primary"></span>
        </div>

        <div class="w-full overflow-hidden relative border-y border-line py-6">
          <div class="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[0, 1, 2, 3].map((copy) => (
            <ul key={copy} aria-hidden={copy > 0} class="flex shrink-0 items-center gap-12 pr-12 lg:gap-16 lg:pr-16">
              {tools.map((tool) => (
                <li key={tool.name} class="shrink-0">
                  <img src={tool.image} alt={tool.name} class="h-12 w-auto max-w-none md:h-14 lg:h-16" />
                </li>
              ))}
            </ul>
          ))}
          </div>

          <div class="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-canvas to-transparent" />
          <div class="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-canvas to-transparent" />
        </div>
      </div>
  )
}

export default ToolCarousel