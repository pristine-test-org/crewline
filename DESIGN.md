---
name: Crewline
colors:
  field: "#ffe14f"
  field-deep: "#f5d22a"
  ground: "#fffef8"
  surface: "#ffffff"
  ink: "#121212"
  ink-2: "#555249"
  ink-3: "#94907f"
  line: "#ebe8dc"
  on-ink: "#ffe14f"
  danger: "#b42318"
typography:
  body:
    fontFamily: "Archivo"
    fontSize: "14px"
  title:
    fontFamily: "Archivo"
    fontSize: "44px"
rounded:
  control: "999px"
  input: "8px"
  panel: "10px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
---

# Crewline

Yellow is not the accent here, it is the place. Every page opens on a yellow field that holds the masthead and the page's name, set wide and heavy like a sign on a site hoarding; the work below sits on white.

## Colour

Every colour comes from a custom property in `site/styles.css`. Because the yellow is the ground, actions are ink: a black pill with the yellow written on it. There is no second accent.

## Type

Archivo throughout. Titles are stretched to width 125, heavy and upper case; the work stays at width 100.

## Shape and space

Pills for anything you press, 8px inputs, 10px panels, and a 1.5px ink rule where a thing must be held. Space moves in fours: 4, 8, 12, 16, 24, 32, 48.

## Components

- **Button:** `.btn` is an outlined ink pill; `.btn-primary` is the filled ink pill with yellow text. Every primary action uses it, dialogs included.
- **Choice:** a yes or no is the `.check` box: a 20px square with a 1.5px ink edge that fills yellow when ticked.
- **Dialog:** `.modal` with a yellow `.modal-head`, a 24px body and a foot that ends in the primary action.

## Do's and Don'ts

- Do keep the yellow as the ground of the page head; never as a button fill.
- Do give every icon-only control an accessible name.
- Don't introduce a colour that is not a token, blue included.
- Don't use switches; Crewline asks yes-or-no questions with checkboxes.
- Don't space anything off the scale of fours.
- Don't lift a panel with a shadow; the ink rule holds it. Only the dialog lifts.
