# WattWatch AU — Appliance Energy Consumption Site

A small demonstration website for COS30045, exploring appliance energy
consumption in the Australian market. Built with plain HTML, CSS and
JavaScript (no framework, no build step).

## Structure

- `index.html` — all three "pages" (Home, Televisions, About Us), built as
  `<section>` elements that JavaScript shows/hides.
- `style.css` — all styling, colours matched to the logo (navy/amber/cream).
- `script.js` — handles page swapping, the active nav state, and the URL hash.
- `assets/logo.svg` — the bolt logo used in the top-left of the nav.

## Running locally

Just open `index.html` in a browser, or use the VS Code "Live Server"
extension for auto-reload while editing.

## Deployment

Hosted on Vercel: `https://your-project-name.vercel.app/` (replace with your
actual link once deployed).

## Use of GitHub Copilot / GenAI

> Fill this section in yourself as you work — it needs to reflect your own
> experience, not a generic statement. Some prompts to answer:

- **What did you use Copilot/GenAI for?** (e.g. scaffolding the nav JS,
  suggesting CSS layout, writing placeholder copy...)
- **What did you have to fix or reject?** Copilot suggestions are often
  slightly wrong, outdated, or over-engineered — note a concrete example.
- **What did you learn or do differently because of it?**
- **Reflection:** a few honest sentences on how it changed (or didn't change)
  your workflow, and anything you'd do differently next time.

## Notes on requirements coverage

- [x] Three pages: Home, Televisions, About Us
- [x] Top nav swaps pages via JavaScript (`showPage()` in `script.js`)
- [x] Logo top-left returns to Home when clicked
- [x] Hover feedback on nav links (CSS `:hover`)
- [x] Active page indicated with amber underline + colour
- [x] CSS styling matches logo colours (navy / amber / cream)
- [x] Footer with year, name, GenAI acknowledgement
- [x] Placeholder content on appliance energy consumption (AU market)
