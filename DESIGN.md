---
name: Abhishek Shukla, Data Analyst
description: A portfolio printed as a security instrument; every case study is a serial-numbered, verifiable document.
colors:
  paper: "#eef1e8"
  paper-2: "#e2e8dc"
  paper-3: "#f6f8f2"
  ink: "#16232e"
  ink-2: "#47575f"
  line: "rgba(22, 35, 46, 0.16)"
  line-strong: "rgba(22, 35, 46, 0.42)"
  guilloche: "#2f5d62"
  bronze: "#8a6a3c"
  seal: "#7a2e2a"
  seal-hover: "#642420"
  on-seal: "#fbf3ea"
  paper-night: "#10181c"
  paper-2-night: "#17232a"
  paper-3-night: "#0c1316"
  ink-night: "#e7ebe2"
  ink-2-night: "#a9b5b0"
  line-night: "rgba(231, 235, 226, 0.14)"
  line-strong-night: "rgba(231, 235, 226, 0.4)"
  guilloche-night: "#6fa39a"
  bronze-night: "#c3a06a"
  seal-night: "#a8443d"
  seal-hover-night: "#bb4f47"
  on-seal-night: "#fff4ef"
typography:
  display:
    fontFamily: "'Old Standard TT', 'Iowan Old Style', 'Palatino Linotype', Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Old Standard TT', 'Iowan Old Style', 'Palatino Linotype', Georgia, serif"
    fontSize: "clamp(2rem, 3.6vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  statement:
    fontFamily: "'Old Standard TT', 'Iowan Old Style', 'Palatino Linotype', Georgia, serif"
    fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)"
    fontWeight: 400
    lineHeight: 1.25
  title:
    fontFamily: "'Old Standard TT', 'Iowan Old Style', 'Palatino Linotype', Georgia, serif"
    fontSize: "1.6rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Public Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  label:
    fontFamily: "'Public Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  data:
    fontFamily: "'Azeret Mono', ui-monospace, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    letterSpacing: "0.02em"
  serial:
    fontFamily: "'Azeret Mono', ui-monospace, Consolas, monospace"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.06em"
  micr:
    fontFamily: "'Azeret Mono', ui-monospace, Consolas, monospace"
    fontSize: "1.05rem"
    fontWeight: 400
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  hairline: "2px"
spacing:
  gutter: "16px"
  header: "60px"
  wrap: "1180px"
  instrument-inset: "clamp(20px, 4vw, 48px)"
  section: "clamp(72px, 10vw, 120px)"
  register-gap: "22px"
  row: "16px"
components:
  button-ink:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "0 20px"
    height: "46px"
  button-ink-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-seal:
    backgroundColor: "{colors.seal}"
    textColor: "{colors.on-seal}"
    rounded: "{rounded.hairline}"
    padding: "0 20px"
    height: "46px"
  button-seal-hover:
    backgroundColor: "{colors.seal-hover}"
    textColor: "{colors.on-seal}"
  tool-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    size: "38px"
  tool-button-hover:
    backgroundColor: "{colors.paper-2}"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.hairline}"
    padding: "5px 11px"
  filter-active:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.ink}"
  station:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "3px 10px"
  amount-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.serial}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  case-stub:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "22px 20px"
    width: "190px"
  toast:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.hairline}"
    padding: "10px 16px"
---

# Design System: Abhishek Shukla, Data Analyst

## Overview

**Creative North Star: "The Security-Printed Instrument"**

The page is printed on security paper. The opening screen is one wide bank instrument: an issuer block with the name engraved large, a serial and type at the top right, a canvas-drawn guilloche rosette seal, a payee line that carries the lead case study, an amount box for the one validated figure, and a MICR code line along the foot. Everything below is the paperwork that backs the instrument: case studies as counterfoil documents with perforated stubs, and about, experience, skills and certificates as ruled registers and statements. The contact block is a remittance slip.

The material is pale green-grey tint stock crossed by two fine diagonal line fields, with deep blue-black intaglio ink. Ornament comes from the craft of security printing itself (guilloche line fields, rosettes, microprint rules, perforations, MICR symbols), never from effects. Density is that of a financial document: ruled rows, tabular numerals, and small uppercase field captions that label values the way a printed form does. The night variant prints the same plate in pale ink on dark stock; nothing is restyled, only re-inked.

The system refuses the portfolio-category default: no dark gradient hero, no glass cards, no stat tiles, no scattered decorative effects. Figures appear in ruled tables or the single amount box, never as giant numbers.

**Key Characteristics:**
- Tint paper with two crossing hairline fields (115deg teal at 6%, 65deg bronze at 5%) on every surface.
- One engraved roman display face, one institutional sans, one data mono for serials, codes and figures.
- Hairline rules do all the structural work; corners are square or 2px.
- One oxblood seal ink, filled only on the "Open case study" action.
- Canvas guilloche (rosettes and tint fields) drawn from the project's own figures, drawn in once on load.

## Colors

A two-ink plate on tint stock: blue-black intaglio, teal and bronze security inks for ornament, and one oxblood seal.

### Primary
- **Intaglio Blue-Black** (`ink`): all text, ink buttons, section-head double-weight rules (2px), the amount box border, focus outlines, selection fill and the toast.

### Secondary
- **Oxblood Seal** (`seal`, hover `seal-hover`, text `on-seal`): the filled "Open case study" action, in the instrument and on each case. Also used as the hover colour of link underlines and contact-slip links, and as the text caret.

### Tertiary
- **Security Teal** (`guilloche`): rosette lattice, tint-field lines, microprint, list markers in registers and case outcomes.
- **Engraver's Bronze** (`bronze`): every third strand of the rosette and tint field, the rosette's centre ring, and the 65deg body tint field. Never used for text or UI.

### Neutral
- **Tint Stock** (`paper`): the page, header, station chips, the amount box and the perforation holes.
- **Counterfoil Green** (`paper-2`): case stubs, certificate frames, tool-button hover, the contact slip's side panel (at 70%).
- **Bright Plate** (`paper-3`): the raised surfaces: the instrument, case documents, contact slip, certificate mounts, the active filter.
- **Faded Ink** (`ink-2`): secondary text, intros, field captions, inactive nav and filters.
- **Hairline** (`line`) and **Ruled Line** (`line-strong`): row dividers and inner frames at 16%; outer borders, column rules, dashed perforation lines and chip borders at 42%.

Night tokens (`*-night`) apply the same roles under `prefers-color-scheme: dark` or `data-theme="dark"`.

### Named Rules
**The One Seal Rule.** Oxblood is filled on one control only: "Open case study". Every other button is an ink outline. Once a case is open, its button drops back to ink ("Close case study").

**The Security Ink Rule.** Teal and bronze are printing inks, not interface colours. They draw ornament (line fields, rosettes, microprint, list markers) and never carry text, borders of controls, or state.

## Typography

**Display Font:** Old Standard TT (with Iowan Old Style, Palatino Linotype, Georgia)
**Body Font:** Public Sans (with Segoe UI, system-ui)
**Label/Mono Font:** Azeret Mono (with ui-monospace, Consolas)

**Character:** An engraved banknote roman set against a plain civil-service sans, with a mechanical mono for anything that is a code or a number. The roman does all the ceremony; the sans and mono stay administrative.

### Hierarchy
- **Display** (700, clamp(2.75rem, 7vw, 5.5rem), 0.95): the engraved name on the instrument only. The surname drops to its own line in 400 italic.
- **Headline** (400, clamp(2rem, 3.6vw, 2.75rem), 1): section heads, the contact slip title, and the payee value (the lead case title, at 1.05 line-height).
- **Statement** (400, clamp(1.5rem, 2.8vw, 2.1rem), 1.25): the About statement.
- **Title** (700, 1.6rem, 1.15): case study titles. Register entries use the same face at 1.3rem (experience roles) and 1.15rem (certificates).
- **Body** (400, 1rem, 1.6): running text, tabular numerals set on `body` globally; intros capped at 56ch, case prose at 68ch.
- **Label** (600, 0.72rem, 0.08em, uppercase): field captions (Case no., Type, Status, Validated, Email, Tool), table headers, case detail subheads.
- **Data** (Azeret Mono 400, 0.8rem, 0.02em): codes, tool codes, periods, figure cells. Serials step up to 1.35rem (instrument) and 1.6rem (case stub); the amount figure is 1.5rem at 500; the MICR line is 1.05rem at 0.14em tracking.

### Named Rules
**The Figures Are Data Rule.** Every number that is a claim (figures, counts, serials, periods) is set in the mono, right-aligned in a ruled column, or in the single amount box. Numbers are never enlarged into display type.

**The Field Caption Rule.** Uppercase label type captions a value beside or below it, as on a printed form. It never sits above a section heading.

**The Kerned FinTech Rule.** Wherever "FinTech" is set in the display face, pull the T in by -0.07em; Old Standard TT leaves a gap between n and T.

## Layout

A single centred column (max 1180px) with safe-area-aware 16px gutters and a 60px sticky header. The header is paper-filled and gains a ruled bottom line once the page scrolls past 24px.

The instrument sits 20px under the header and spans the column. Inside it, the issuer block and the seal share a two-column grid (content, auto); below a ruled line, payee fields use a 110px caption column, and the station strip and action row are indented to align with the values (128px). The MICR line runs full-width along the foot above a dashed rule. Instrument padding is clamp(22px, 4vw, 44px) vertically and clamp(20px, 4vw, 48px) horizontally.

Sections open every clamp(72px, 10vw, 120px) with a section head: headline left, a short ink-2 note right (max 46ch), closed by a 2px ink rule and 28px of space. Case documents stack with 22px gaps; each is a 190px stub plus body. About is a two-column grid; certificates run four across.

Breakpoints: at 1000px the nav collapses into a menu button, certificates go to two columns and About stacks. At 760px the instrument reflows so the case title and its action stay in the first screen: the seal (rosette reduced to 96px) follows the body, the problem line is dropped from the instrument, case stubs move above the body with horizontal perforations, and ruled tables become stacked rows. At 480px certificates go to one column.

## Elevation & Depth

Flat, printed depth. Surfaces are separated by tone (paper, paper-2, paper-3) and by rules, not by shadow. The instrument carries a second inner frame line inset 6px, like an engraved border. The only shadow in the system is the seal button's impression, a low printed lip plus a short soft drop, which keeps the one oxblood action visibly pressed onto the plate. Overlays dim the page with a near-black scrim (78%) and present the content flat.

### Shadow Vocabulary
- **Seal impression** (`box-shadow: 0 2px 0 rgba(0, 0, 0, 0.12), 0 6px 14px -8px rgba(0, 0, 0, 0.4)`): the filled seal button only.

### Named Rules
**The Printed Plate Rule.** Nothing floats. Depth comes from paper tone and engraved double frames; the seal impression is the only shadow and belongs to the seal button alone.

## Shapes

Square documents. Panels, case documents, stubs, chips, the amount box and certificate mounts have square corners. Controls (buttons, tool buttons, filters, toast) take a 2px hairline radius, just enough to read as cut card. Borders are 1px hairlines; the amount box uses 1.5px ink; section heads close with a 2px ink rule. Dashed rules mark tear lines: the MICR foot, the case stub/body seam, the contact slip's side panel and pending placeholders. Perforations are a column of 2.6px paper-coloured holes on a 14px pitch along the stub's edge, turning horizontal on phones.

## Components

### Buttons
Ink-on-paper controls that read as stamped, not glossy.
- **Shape:** cut card (2px radius), 46px min height, 0 20px padding, 0.92rem 600, icon after the label with a 10px gap.
- **Ink (default):** transparent with a 1px ink border; on hover it fills with ink and the label turns paper (0.2s background and colour).
- **Seal:** oxblood fill and border, on-seal text, seal impression shadow; hover deepens to seal-hover. Reserved for "Open case study".
- **Tool button:** 38px square, 1px ruled border, 2px radius, icon only; hover fills with counterfoil green. Used for theme and menu.
- **Focus:** 2px ink outline, 3px offset, everywhere.

### Chips
- **Filter:** borderless 0.85rem ink-2 text with 5px 11px padding; hover adds a ruled border; pressed state is an ink border on bright plate in 600.
- **Station:** square chip, 0.8rem 600, 3px 10px, ruled border on paper, joined by 14px hairline connectors; stations always appear in pipeline order (source, clean, model, report).

### Cards / Containers
- **Case document:** bright plate with a ruled border, a 190px counterfoil-green stub (serial in 1.6rem mono, type and tool codes as a definition list) perforated along its right edge, and a dashed seam into the body. The body holds the title, prose, a ruled figures table and a footer with stations and the action. The detail opens in place with a height and opacity reveal (0.45s, cubic-bezier(0.16, 1, 0.3, 1)).
- **Contact slip:** bright plate with its own tint field, split 1.3 : 1 by a dashed seam; the address is set in mono on a ruled baseline with a copy button; the side panel lists outbound links as ruled rows that turn oxblood on hover.
- **Certificate mount:** a 6px bright-plate mat with a ruled border around a 4:3 counterfoil-green frame; hover darkens the border to ink and the cursor is zoom-in. Missing images show a rosette and a mono "Image pending" slip, never a stock image.

### Navigation
Header: the name in the display face with a mono "Data Analyst" code beside it, section links in 0.9rem 500 ink-2, current section in ink with a 1px ink underline. Below 1000px the links move into a stacked menu of display-face rows divided by hairlines.

### Ruled Registers
The workhorse for About, Experience, Skills and Certificates. Full-width tables with label-type headers over a ruled line, 16px row padding, hairline row dividers, a 190px key column in 600, mono for periods and right-aligned counts, teal list markers. On phones each row stacks into a block.

### The Instrument (signature)
A bright-plate panel with a ruled outer border and an inner hairline frame inset 6px, over a canvas tint field of wavy teal and bronze lines (9px pitch, 16% alpha). A microprint rule of repeated name and role at 5.5px runs along its top; the footer repeats it. The rosette seal (240px, 96px on phones) is drawn from the lead case's figures: one lobe per stated KPI, one ring per tool, with the legend printed beneath it. The amount box frames the single validated figure in a 1.5px ink border. The MICR line closes the instrument with drawn E-13B symbols around the case serial and tool codes.

### Iconography
One authored set on a 20px grid: 1.5px round-capped strokes in currentColor, 18px by default (arrow, external, copy, download, sun, moon, menu, close). MICR transit and on-us symbols are drawn as filled SVG rectangles rather than relying on font coverage.

## Do's and Don'ts

### Do:
- **Do** print every surface on tint stock with the two crossing hairline fields; keep raised documents on bright plate with a ruled border.
- **Do** fill oxblood only on "Open case study"; every other action is an ink outline that fills with ink on hover.
- **Do** set every claimed number in Azeret Mono inside a ruled column, the amount box or a serial.
- **Do** draw guilloche from real figures (lobes per KPI, rings per tool) and print its legend; render it once with a 1.4 to 1.8s ease-out draw-in, static under reduced motion.
- **Do** use dashed rules and perforations for tear lines between a stub and its document.
- **Do** keep corners square on documents and 2px on controls.
- **Do** keep the night variant a re-inking of the same plate: swap tokens, never layouts.

### Don't:
- **Don't** add a dark gradient hero, glass cards, stat tiles or decorative effects outside the security-printing vocabulary.
- **Don't** enlarge figures into display-sized numbers.
- **Don't** use teal or bronze for text, control borders or state.
- **Don't** add shadows to panels, cards or chips; the seal impression belongs to the seal button only.
- **Don't** fake an image: missing screenshots and certificates show a labelled pending slip.
