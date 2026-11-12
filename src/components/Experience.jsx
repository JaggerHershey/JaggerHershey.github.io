function Experience() {
  return (
      <div id="experience" class="mt-2 mx-4 mb-10 scroll-mt-24">
        <div class="flex items-center gap-2 mb-4 mx-2">
          <h1 class="text-3xl">Experience</h1>
          <img src="/assets/work.svg" alt="Work Icon" class="size-10" loading="lazy" />
        </div> 
        <div class="border border-line rounded-md bg-surface mb-4">
          <div class="flex items-center justify-between gap-4 p-4">
            <div class="flex min-w-0 items-center gap-4">
              <img src="/assets/university-of-pittsburgh-logo-vector.svg" alt="University of Pittsburgh Logo" class="size-14 shrink-0 object-contain" loading="lazy" />
              <div>
                <h3 class="text-lg font-semibold">University of Pittsburgh</h3>
                <p class="text-sm text-ink-muted">Computational Biology Research Assistant</p>
              </div>
            </div>
            <p class="shrink-0 text-sm font-medium">May - July 2026</p>
          </div>
          <div class="border-t border-line p-4">
            <h4 class="text-sm font-semibold uppercase tracking-wide text-ink-muted mb-3">Responsibilities</h4>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li>Unified 4 toxicology databases (CTD, ChEMBL, BindingDB, ATSDR) into one DuckDB schema using a custom CAS/name/InChIKey chemical-matching pipeline.</li>
              <li>Mined 125M+ chemical-gene-disease interactions in CTD to surface protein targets and disease links shared across 35 DoD-flagged toxic chemicals.</li>
              <li>Synthesized bioactivity, gene-evidence, and network data into an automated per-chemical report, delivering candidate counteracting compounds to the research sponsor across the full chemical list.</li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Experience
