function Hero() {
  return (
      <div id="about" class="scroll-mt-24 mt-24 mb-10 mx-4 border border-line rounded-md bg-surface px-6 py-8">
        <div class="flex flex-col gap-4 text-center">
          <div class="w-full flex items-center justify-center">
            <img class="rounded-full size-48 sm:size-56 md:size-70 object-cover ring-2 ring-primary" src="/assets/edited.jpg" alt="Image of Jagger Hershey" fetchpriority="high" />
          </div>
          <div>
            <h1 class="text-4xl sm:text-6xl">Jagger Hershey</h1>
            <p class="my-1 text-lg text-primary">Software Developer</p>
          </div>
        </div>

        <p class="py-6 px-6 text-center max-w-2xl mx-auto">Computer Science graduate from the University of Pittsburgh who likes building things end to end. I've built web apps with Flask and React, a multiplayer game in Rust, and data pipelines in Python that turn messy datasets into answers. Most recently, as a computational biology research assistant, I unified four toxicology databases and mined over 125 million chemical-gene-disease interactions.</p>

        {/* Main actions */}
        <div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            class="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center font-medium text-canvas hover:opacity-90 sm:w-auto"
          >
            Contact me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="flex w-full items-center justify-center gap-2 rounded-md border border-primary px-6 py-3 font-medium text-primary hover:bg-primary hover:text-canvas sm:w-auto"
          >
            <img src="/assets/footer/resume.svg" alt="" class="size-5" />
            View Resume
          </a>
        </div>

        {/* Secondary links */}
        <div class="mt-6 flex justify-center gap-4">
          <a href="https://github.com/JaggerHershey" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" class="size-8">
            <img src="/assets/footer/github.svg" alt="" class="size-full" />
          </a>
          <a href="https://www.linkedin.com/in/jaggerhershey/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" class="size-8">
            <img src="/assets/footer/linkedin.svg" alt="" class="size-full" />
          </a>
        </div>
      </div>
  )
}

export default Hero