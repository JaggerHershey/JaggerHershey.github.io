import { useState, useRef } from "react";

const api = import.meta.env.VITE_STATIC_KEY;

function Contact() {
  const field = "w-full min-w-0 rounded-md border border-line bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-primary scroll-mt-24";
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const loadedAt = useRef(Date.now());

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Spam layer 1: honeypot filled -> pretend success, send nothing
    if (data.honeypot) {
      setStatus("success");
      form.reset();
      return;
    }

    // Spam layer 2: submitted faster than a human could type
    if (Date.now() - loadedAt.current < 3000) {
      setStatus("error");
      return;
    }

    // Spam layer 3: cooldown so the same browser can't spam (cosmetic, but stops accidents)
    const last = Number(localStorage.getItem("lastContactSend") || 0);
    if (Date.now() - last < 60000) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok && result.success !== false) {
        localStorage.setItem("lastContactSend", String(Date.now()));
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
      <div id="contact" class="mx-4 mb-10 scroll-mt-20">
        <h1 class="text-3xl mx-2 mb-4">Contact</h1>
        <div class="border border-line rounded-md p-4 bg-surface">
          <form onSubmit={handleSubmit} class="w-full max-w-2xl mx-auto">
            <input type="text" name="honeypot" class="hidden" tabIndex="-1" autoComplete="off" />
            <input type="hidden" name="apiKey" value={api} />
            <div class="flex flex-col sm:flex-row gap-3 mt-2">
              <div class="sm:flex-1">
                <label for="name" class="sr-only">Name</label>
                <input id="name" name="name" type="text" required maxLength={100} autocomplete="name" placeholder="Name" class={field} />
              </div>
              <div class="sm:flex-1">
                <label for="email" class="sr-only">Email</label>
                <input id="email" name="email" type="email" required maxLength={100} autocomplete="email" placeholder="Email" class={field} />
              </div>
            </div>
            <label for="message" class="sr-only">Message</label>
            <textarea required id="message" name="message" maxLength={2000} placeholder="Message" rows="7" class={`${field} mt-3 resize-none`}></textarea>
            <div class="flex flex-col items-center gap-3 my-3">
              <button
                type="submit"
                disabled={status === "sending"}
                class="cursor-pointer rounded-md bg-primary px-4 py-2 text-canvas hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p role="status" class="text-sm min-h-5">
                {status === "success" && <span class="text-primary">Thanks! Your message was sent.</span>}
                {status === "error" && <span class="text-accent">Something went wrong. Please wait a moment and try again.</span>}
              </p>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Contact