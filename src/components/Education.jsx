function Education() {
  return (
      <div id="education" class="mt-2 mb-10 mx-4 scroll-mt-24">
        <div class="flex items-center gap-2 mb-4 mx-2">
            <h1 class="text-3xl">Education</h1>
            <img src="/assets/education.svg" alt="Education Icon" class="size-10" />
        </div> 
        <div class="border border-line rounded-md mb-4 bg-surface">       
          <div class="flex items-start justify-between gap-4 p-4">
            <div>
              <h3 class="text-lg font-semibold">University of Pittsburgh</h3>
              <p class="text-sm text-ink-muted">Bachelor of Science in Computer Science</p>
            </div>
            <div>
              <p class="font-medium">May 2026</p>
              <p class="shrink-0 text-sm font-medium">GPA: 3.60</p>
            </div>
          </div>
          <div class="border-t border-line p-4">
            <h4 class="text-sm font-semibold uppercase tracking-wide text-ink-muted mb-3">Relevant Courses</h4>
            <ul class="flex flex-wrap gap-2">
              <li class="border border-line rounded-md px-2 py-1 text-sm">Principles of Computer Game Design and Implementation</li>
              <li class="border border-line rounded-md px-2 py-1 text-sm">Software Engineering</li>
              <li class="border border-line rounded-md px-2 py-1 text-sm">Computer Graphics</li>
              <li class="border border-line rounded-md px-2 py-1 text-sm">Math Foundations of Machine Learning</li>
              <li class="border border-line rounded-md px-2 py-1 text-sm">Intro to Data Science</li>
              <li class="border border-line rounded-md px-2 py-1 text-sm">Intro to Systems Software</li>
              <li class="border border-line rounded-md px-2 py-1 text-sm">Algorithms and Data Structures</li>
              <li class="border border-line rounded-md px-2 py-1 text-sm">Formal Methods</li>
              <li class="border border-line rounded-md px-2 py-1 text-sm">Programming Languages for Web Applications</li>
              <li class="border border-line rounded-md px-2 py-1 text-sm">Discrete Structures</li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Education