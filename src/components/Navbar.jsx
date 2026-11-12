import { Spin } from "hamburger-react";
import { useEffect, useState } from "react";

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
      <div>
        <nav class="fixed top-0 left-0 z-50 border-b border-line shadow-lg p-2 bg-nav backdrop-blur-md shadow-slate-950/5 w-full">
            <div class="flex flex-wrap items-center justify-between px-4 py-2">
                <a href="#about" class="flex items-center gap-3" aria-label="Jagger Hershey, home">
                    <span class="grid size-9 place-items-center rounded-md border border-primary bg-surface font-heading text-sm font-bold text-primary">JH</span>
                    <span class="font-heading text-xl">Jagger<span class="border-primary">.</span>Dev</span>
                </a>
                <div class="md:hidden">
                    <Spin
                        toggled={isOpen} 
                        toggle={setOpen} 
                        size={32}
                        color="currentColor"
                        duration={0.7}
                        rounded
                        label="Toggle menu"
                    />
                </div>

                <div class="hidden md:block" id="navbar-default">
                    <ul class="flex gap-6 justify-end pr-4">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div id="mobile-menu" class={`md:hidden w-full grid transition-[grid-template-rows,visibility] duration-300 ease-in-out ${isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"}`}>
                    <div class="overflow-hidden" id="mobile-menu">
                        <ul class="flex flex-col gap-4 p-4">
                            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
                            <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
                            <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
                            <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
                            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
      </div>
  )
}

export default Navbar
