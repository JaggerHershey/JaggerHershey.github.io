import { useState, useEffect } from "react";   {/* NEW */}

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
  // NEW: count loaded images and only start scrolling when all are in
  const total = tools.length * 4;
  const [loaded, setLoaded] = useState(0);
  const ready = loaded >= total;
  const done = () => setLoaded((n) => n + 1);

  // NEW: safety net so a stuck image can never leave the strip hidden
  useEffect(() => {
    const t = setTimeout(() => setLoaded(total), 4000);
    return () => clearTimeout(t);
  }, [total]);

  return (
      <div id="toolcarousel" class="mb-10 mt-2">
        <div class="mb-4 text-center">
          <h2 class="font-heading text-3xl tracking-tight">Tech Stack</h2>
          <span class="mx-auto mt-2 block h-1 w-12 rounded bg-primary"></span>
        </div>

        <div class="w-full overflow-hidden relative border-y border-line py-6">
          {/* animation + fade-in only once ready */}
          <div class={`flex w-max transition-opacity duration-500 hover:[animation-play-state:paused] motion-reduce:animate-none ${ready ? "animate-marquee opacity-100" : "opacity-0"}`}>
            {[0, 1, 2, 3].map((copy) => (
            /* NEW: fixed heights reserve the strip's space before images load */
            <ul key={copy} aria-hidden={copy > 0} class="flex h-12 shrink-0 items-center gap-12 pr-12 md:h-14 lg:h-16 lg:gap-16 lg:pr-16">
              {tools.map((tool) => (
                <li key={tool.name} class="shrink-0">
                  <img src={tool.image} alt={tool.name} onLoad={done} onError={done} class="h-12 w-auto max-w-none md:h-14 lg:h-16" />
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