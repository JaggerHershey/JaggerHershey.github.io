function Projects() {
  return (
      <div id="projects" class="mb-10 mt-2 mx-4 scroll-mt-24">
        <div class="flex items-center gap-2 mx-2 mb-4">
          <h1 class="text-3xl">Projects</h1>
        </div>
        <div class="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:grid md:gap-4">
          
          <div class="flex flex-col border border-line rounded-md p-4 bg-surface hover:border-primary shadow-sm hover:shadow-xl hover:translate-y-1 transition-all duration-300 ease-out">
            <img src="/assets/connectome.png" alt="Image of Project 1" class="rounded-md ring-2 ring-line aspect-video w-full object-cover object-top-left" loading="lazy" />
            <h1 class="border-b border-line text-xl md:text-2xl py-4">ASD Classification Pipeline</h1>
            <p class="flex-1 text-ink-muted py-4">A machine learning pipeline that tests whether functional brain connectivity can classify ASD. I computed Spearman correlations across 200 brain regions per subject, then compared Logistic Regression, KNN, and K-Means on raw, standardized, and PCA-reduced data. Logistic Regression with recursive feature elimination (RFE) reached 70% accuracy.</p>
            {/* Potentially add Tools Used icons */}
            <div class="mt-auto flex w-full gap-3 items-end">  
              <a href="https://github.com/wpmPitt17/Brain-Connectome-Graph" class="shrink-0" target="_blank" rel="noopener noreferrer">
                <div class="min-w-2 flex flex-1 justify-center items-center border border-line rounded-md px-2 hover:bg-nav">
                  <p class="p-2">GitHub</p>
                  <img src="/assets/footer/github.svg" alt="Github Link" class="size-5 mr-2" loading="lazy" />            
                </div>
              </a>
              <ul class="min-w-0 flex flex-1 flex-wrap justify-end items-center px-2 gap-2">
                <li class="whitespace-nowrap border border-line rounded-md text-sm px-2 py-1">Python</li>
                <li class="whitespace-nowrap border border-line rounded-md text-sm px-2 py-1">Scikit-Learn</li>
                <li class="whitespace-nowrap border border-line rounded-md text-sm px-2 py-1">Pandas</li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col border border-line rounded-md p-4 bg-surface hover:border-primary shadow-sm hover:shadow-xl hover:translate-y-1 transition-all duration-300 ease-out">
            <img src="/assets/fitt-with-pitt.png" alt="Image of Project 2" class="rounded-md ring-2 ring-line aspect-video w-full object-cover object-top-left" loading="lazy" />
            <h1 class="border-b border-line text-xl md:text-2xl py-4">Full Stack Fitness Application</h1>
            <p class="flex-1 text-ink-muted py-4">A full-stack fitness app built with Flask and SQLite for tracking workouts, nutrition, and goals. Users sign up and log in securely, and the dashboard and tracking pages are only available to signed-in users. Passwords are hashed with Werkzeug and sessions are handled with Flask-Login.</p>
            {/* Potentially add Tools Used icons */}
            <div class="mt-auto flex w-full gap-3 items-end">
              <a href="https://github.com/JaggerHershey/Fitt-with-Pitt" class="shrink-0" target="_blank" rel="noopener noreferrer">
                <div class="min-w-2 flex flex-1 justify-center items-center border border-line rounded-md px-2 hover:bg-nav">
                  <p class="p-2">GitHub</p>
                  <img src="/assets/footer/github.svg" alt="Github Link" class="size-5 mr-2" loading="lazy" />            
                </div>
              </a>
              <ul class="min-w-0 flex flex-1 flex-wrap justify-end items-center px-2 gap-2">
                <li class="whitespace-nowrap border border-line rounded-md text-sm px-2 py-1">Flask</li>
                <li class="whitespace-nowrap border border-line rounded-md text-sm px-2 py-1">SQLite</li>
                <li class="whitespace-nowrap border border-line rounded-md text-sm px-2 py-1">HTML/CSS</li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col border border-line rounded-md p-4 bg-surface hover:border-primary shadow-sm hover:shadow-xl hover:translate-y-1 transition-all duration-300 ease-out">
            <img src="/assets/katsuo.png" alt="Image of Project 3" class="rounded-md ring-2 ring-line aspect-video w-full object-cover object-top" loading="lazy" />
            <h1 class="border-b border-line text-xl md:text-2xl py-4">Katsuo 2D Platformer</h1>
            <p class="flex-1 text-ink-muted py-4">A 2D multiplayer platformer written in Rust with the Bevy game engine, built by a team of 7. I built the player movement, camera, and collision systems, designed enemy behavior and a unique player ability, and worked on the client-server networking with authoritative server game state.</p>
            {/* Potentially add Tools Used icons */}
            <div class="mt-auto flex w-full gap-3 items-end">
              <a href="https://github.com/MorningDuringNight/Sherpa" class="shrink-0" target="_blank" rel="noopener noreferrer">
                <div class="min-w-2 flex flex-1 justify-center items-center border border-line rounded-md px-2 hover:bg-nav">
                  <p class="p-2">GitHub</p>
                  <img src="/assets/footer/github.svg" alt="Github Link" class="size-5 mr-2" loading="lazy" />            
                </div>
              </a>
              <ul class="min-w-0 flex flex-1 flex-wrap justify-end items-center px-2 gap-2">
                <li class="whitespace-nowrap border border-line rounded-md text-sm px-2 py-1">Rust</li>
                <li class="whitespace-nowrap border border-line rounded-md text-sm px-2 py-1">Bevy</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Projects
