# Capacitive Super-Resolution — Portfolio Storyline Draft

Status: narrative and image-planning draft. This is not yet webpage copy.

## One-sentence project framing

Can a small number of capacitive channels recover touch location at a resolution finer than the physical electrode layout?

This project combines electrode geometry, a repeatable robotic data-collection system, signal processing, and machine learning to test that question—and to identify where the apparent resolution gain does and does not generalise.

---

## Recommended narrative

### 01 — Hero: three channels, a continuous surface

**Story**

A conventional touch surface often increases spatial resolution by adding more electrodes and routing complexity. This project explores the opposite direction: using three interleaved self-capacitive electrodes, then learning position from the combined response pattern.

**Keep the copy short**

> Three sensing channels. One continuous touch surface. A study of how electrode geometry and learned signal patterns can recover spatial information beyond the physical channel count.

**Best visual**

- A strong physical hero photograph showing the circular electrode, fingertip or probe, and measurement apparatus together.
- If no suitable photograph exists, use the coloured three-channel spiral electrode as a temporary hero, but redraw it without chart titles or debugging annotations.

**Current candidate**

- `03_实验档案/01_早期研究及原始实验包/pythoncode/test3/generated_pattern_report.png`
- Use only the left electrode graphic; the repeated-centre and phase charts are too technical for the opening image.

### 02 — The problem: resolution usually costs hardware

**Story**

Explain the trade-off in one visual comparison: a dense matrix gains spatial resolution through many sensing nodes, while this project asks whether three overlapping fields can encode position through their relative responses.

**Suggested copy**

> More touch points normally mean more electrodes, traces, scanning channels, and fabrication complexity. I investigated whether spatially varying signal ratios could provide a different path: fewer channels, richer inference.

**Best visual**

- A new, clean explanatory diagram: dense electrode matrix on the left; three interleaved electrodes and three signal values on the right.
- Avoid using a literature screenshot. This should be a portfolio-native diagram.

### 03 — Electrode as a spatial code

**Story**

The geometry is not decoration: each position overlaps the three channels differently. The design task was to create a manufacturable pattern with sufficiently distinctive local response combinations while managing gaps, dead zones, and routing.

**Suggested copy**

> I treated electrode geometry as a spatial code. At each touch location, the three channels produce a different response mixture. The design process searched for patterns that were continuous, manufacturable, and less prone to ambiguous “alias” locations.

**Best visuals**

- Large clean three-colour electrode graphic.
- Two or three small iteration thumbnails: early spiral, manufacturable revision, alias/dead-zone analysis.
- Optional overlay showing locations with similar response ratios.

**Current candidates**

- `03_实验档案/01_早期研究及原始实验包/pythoncode/test3/generated_pattern_plain.png`
- `05_电极设计与几何分析/理想比例与撞码分析/ideal_ratio_alias_heatmap_outputs/electrode_overlay_green_red_alias_density_eps_0.010.png`
- `05_电极设计与几何分析/理想比例与撞码分析/ideal_ratio_alias_heatmap_outputs/normal_score_green_red_alias_density_eps_0.010.png`

### 04 — Building a repeatable measurement system

**Story**

The central research contribution is not only a model. A repeatable XY/Z acquisition system was developed to control position and depth, establish baselines, detect timeouts, and collect multiple rounds under consistent conditions.

**Suggested copy**

> Hand touches are too variable for early-stage spatial validation. I built an automated acquisition workflow that controlled XY position and Z depth, separated baseline and contact readings, and recorded repeated presses across a circular test area.

**Key facts worth visualising**

- 69 complete grid positions in the 5 mm dataset.
- Five repeated rounds.
- 345 press-level samples used in the later validation set.
- Multiple depth and timing experiments preceded the formal run.

**Best visuals**

- One wide photograph of the complete XY/Z rig.
- One close-up photograph of the probe touching the electrode.
- One simple acquisition-flow diagram: move → baseline → approach → sample → retract → repeat.
- PCB or electronics image only as a small supporting detail.

**Current candidates**

- There is no obvious strong rig photograph among the indexed PNG files; check the Word report’s embedded media and original phone-photo folders.
- `pcb板/AD7147-ESP32-R1/docs/assembly-1.png` is suitable as a secondary engineering image, not the main apparatus image.

### 05 — From raw capacitance to position features

**Story**

Show the transformation rather than listing every feature. Three raw channel deltas become normalised ratios and stability descriptors; press-level aggregation reduces frame noise and treats one physical press as the meaningful unit.

**Suggested copy**

> Each press produced a short time series from three capacitive channels. I compared raw deltas, normalised channel ratios, temporal stability measures, and press-level summaries before mapping the resulting feature vector to XY position.

**Best visual**

- A new three-step diagram: three channel traces → feature vector → predicted XY point.
- One real signal trace from a press, if a clean plot can be regenerated from the CSV data.
- Do not lead with a large feature table; it is accurate but visually weak.

### 06 — Calibration result: strong repeatability at known locations

**Story**

On the 69-point, five-round 5 mm grid, leave-one-round-out evaluation shows that the sensor can recover previously calibrated positions consistently across repeated rounds.

**Suggested copy**

> When the test round used the same calibrated locations as training, a 1-NN model recovered 339 of 345 presses at the correct grid point, with a mean positional error of 0.205 mm. The result demonstrates strong repeatability of the learned position signatures across repeated acquisition rounds.

**Important qualifier**

This is recovery of known calibrated positions—not proof of arbitrary continuous interpolation.

**Best visuals**

- A clean results graphic showing 339 / 345 correct and 0.205 mm mean error.
- A predicted-vs-actual grid plot or error vectors.
- A small spatial heatmap can support the result, but should not be the only result image.

**Current evidence**

- `04_机器学习与数据分析/svr_5mm_20260904/结果说明.md`
- `04_机器学习与数据分析/svr_5mm_20260904/summary.csv`
- Existing KNN result-table PNGs can be used as source data, but should be redesigned for the webpage.

### 07 — The critical test: does it generalise to unseen positions?

**Story**

This is the intellectual turn in the case study. A stricter position-held-out evaluation prevents any test coordinate from appearing during training. Performance falls sharply, revealing that the current system memorises calibrated spatial signatures better than it interpolates across unseen space.

**Suggested copy**

> I then removed entire positions from training. Under this stricter test, mean error rose to 13.48 mm for the three-ratio SVR model. The contrast exposed the project’s central limitation: high repeatability at calibrated points did not yet translate into reliable spatial interpolation.

**Why this belongs in the portfolio**

- It demonstrates correct experimental reasoning.
- It distinguishes calibration accuracy from true super-resolution.
- It creates a credible next design question instead of overstating the result.

**Best visuals**

- Side-by-side comparison: “known positions” versus “unseen positions.”
- Use one concise metric for each condition.
- Spatial error heatmap for unseen positions.

**Current candidate**

- `03_实验档案/03_机采多深度与动态实验包/figures/11_2p5_prediction_error_heatmap.png`
- For the final page, regenerate a heatmap from the 5 mm position-held-out results so the visual matches the quoted 13.48 mm result.

### 08 — What the study established

**Story**

End with what is actually supported, then frame the next iteration.

**Suggested copy**

> The prototype established that three interleaved capacitive channels can form repeatable, location-specific signatures across a calibrated surface. It also showed that electrode uniqueness, environmental drift, contact mechanics, and spatial sampling density remain critical barriers to generalisation.

**Next steps**

- Redesign electrode geometry to reduce ambiguous response regions.
- Increase spatial sampling density and include deliberately unseen intermediate locations.
- Separate day-to-day drift from position effects.
- Test user fingers after the robotic baseline is stable.
- Compare interpolation-aware models against nearest calibrated-point recovery.

**Best visual**

- One final synthesis diagram connecting geometry, acquisition, model, and limitations.
- Or a full-bleed photograph of the current prototype with three concise next-step labels.

---

## Recommended page rhythm

1. Full-screen hero with physical system photograph.
2. Short problem statement plus one simple comparison diagram.
3. Large electrode design image with iteration strip.
4. Full-width apparatus photograph and compact acquisition flow.
5. Signal-to-feature-to-position diagram.
6. Calibration result: one large metric and one supporting plot.
7. Generalisation test: direct comparison and error heatmap.
8. Honest conclusion and next-step roadmap.

Aim for roughly 60% visual material and 40% text. Each section should communicate one idea; avoid reproducing the 22-page technical report on the webpage.

## Images to locate or create next

Highest priority:

1. A high-resolution hero photograph of the complete sensor and test rig.
2. A close-up showing probe/finger contact with the electrode.
3. A clean export of the final electrode layout without debugging charts.
4. A predicted-versus-actual result graphic for calibrated locations.
5. A matching error graphic for unseen-position validation.

Useful supporting images:

6. XY/Z acquisition flow diagram.
7. Three-channel signal trace from one press.
8. Compact PCB/electronics photograph or rendering.
9. Three-stage electrode iteration strip.

Avoid as primary visuals:

- Screenshots of dense CSV tables.
- Full report pages.
- Charts whose evaluation split cannot be explained in one sentence.
- Claims of “1 mm super-resolution” without specifying whether positions were seen during training.

---

# Page Blueprint — Recommended Final Structure

This section defines the actual desktop page rhythm. The page should feel like a visual research case study rather than a compressed academic report. Use a white background, black text, generous margins, and only one restrained accent system: the three electrode-channel colours.

## Global layout rules

- Desktop content width: approximately 1440–1600 px, while photographs may extend to the right edge of the viewport.
- Main text column: 5–6 grid columns; visual column: 7–8 grid columns.
- Body copy should normally stay below 80 English words per section.
- Use 16:9 for documentary photographs and result composites; use 1:1 or 4:3 for electrode graphics and heatmaps.
- Alternate dense and quiet sections. Do not place more than two technical diagrams back-to-back.
- Preserve the homepage typography and navigation so the project page still feels like the same portfolio.
- Use the electrode colours only inside diagrams, metrics, small rules, or labels—not as large background blocks.

## 00 — Project identity / Hero

**Purpose**

Immediately communicate that this is a physical sensing system, not only a machine-learning exercise.

**Layout**

- First viewport, approximately `min-height: 100vh`.
- Left 38%: index, title, one-sentence proposition, role/year/status.
- Right 62%: one large 16:9 hero image, flush to the right edge.
- A thin three-colour channel key sits below the project metadata.

**English content hierarchy**

- Eyebrow: `01 · SENSING / RESEARCH`
- Title: `Capacitive Super-Resolution`
- Standfirst: `Three sensing channels are used to recover location-specific touch signatures across a continuous surface.`
- Metadata: `Electrode Design · Robotic Data Collection · Signal Processing · Machine Learning`

**Image**

- Preferred: complete measurement rig with the circular electrode visible.
- Temporary fallback: a clean electrode layout on white, composited with a small apparatus crop.
- Do not open with a heatmap or results table.

## 01 — Research question

**Purpose**

Explain the hardware–resolution trade-off in under ten seconds.

**Layout**

- Quiet white section, about 75–85vh.
- Large question across the top, maximum two lines.
- Below it, a 2-column comparison occupying the full width:
  - left: conventional dense matrix;
  - right: three interleaved electrodes plus three signal values.
- Use a short caption under each side rather than paragraphs.

**Headline**

`Can fewer electrodes still encode where a touch occurs?`

**Visual treatment**

- Build one portfolio-native explanatory graphic.
- Conventional side in neutral grey; proposed side in the three channel colours.
- A small arrow between them reads `hardware density → signal inference`.

## 02 — Electrode geometry as spatial code

**Purpose**

Show that the geometry is the core sensing idea.

**Layout**

- Asymmetric 45/55 split.
- Left: short headline and 50–70 words of explanation.
- Right: one large square final-electrode visual.
- Under the main visual: a three-image horizontal iteration strip with short labels.
- On desktop, the strip may overlap the lower edge of the main visual by 24–32 px to add depth without becoming decorative.

**Primary asset**

- `03_实验档案/01_早期研究及原始实验包/pythoncode/test3/generated_pattern_plain.png`

**Supporting assets**

- `03_实验档案/01_早期研究及原始实验包/pythoncode/manufacturable_ring_phase_output/generated_pattern_smooth_preview.png`
- `05_电极设计与几何分析/理想比例与撞码分析/ideal_ratio_alias_heatmap_outputs/electrode_overlay_green_red_alias_density_eps_0.010.png`
- `05_电极设计与几何分析/理想比例与撞码分析/ideal_ratio_alias_heatmap_outputs/normal_score_green_red_alias_density_eps_0.010.png`

**Suggested labels**

`Early geometry` · `Manufacturable revision` · `Alias-risk analysis`

## 03 — From pattern to physical prototype

**Purpose**

Bridge computational geometry and the fabricated sensing system.

**Layout**

- Full-width, 16:9 documentary image or a two-image 2:1 mosaic.
- Preferred mosaic:
  - left two-thirds: physical electrode / full assembly;
  - right upper: PCB rendering;
  - right lower: close-up of the probe or fingertip contact.
- Keep text as an overlay card only if the photograph has a quiet area; otherwise place a caption below.

**Supporting asset**

- `pcb板/AD7147-ESP32-R1/docs/assembly-1.png`

**Copy focus**

Briefly explain that the three patterned electrodes connect to a capacitive front end and are read as a combined response rather than as separate touch buttons.

## 04 — A repeatable robotic experiment

**Purpose**

Establish experimental credibility and show your role as a system builder.

**Layout**

- First row: large 16:9 rig photograph, edge-to-edge within the content frame.
- Second row: four compact steps on one line:
  `Move to XY` → `Capture baseline` → `Press to depth` → `Sample and retract`
- Third row: three large data points with ample whitespace:
  `69 positions` · `5 repeated rounds` · `345 press samples`
- The metrics should not be boxed; let typography provide hierarchy.

**Image selection**

- Use the clearest full-rig photograph from the Figma canvas or original photo folders.
- Add only one close-up. Avoid multiple near-identical machine photographs.
- The acquisition-flow diagram should be newly drawn for the website, not taken from a report screenshot.

## 05 — Reading one press

**Purpose**

Make the signal-processing logic understandable to a non-engineering reviewer.

**Layout**

- Horizontal three-stage visual occupying the upper two-thirds:
  1. three channel traces;
  2. compact feature vector;
  3. predicted XY location.
- Below: a narrow explanatory paragraph on the left and a small timing diagram on the right.
- The visual should move left-to-right like a pipeline, with one highlight colour per channel.

**Evidence to translate visually**

- Frames 1–9: transient contact response.
- Frames 10–29: 20 stable touch frames.
- Multiple depths: 5.00, 5.40, 5.80, and 6.10 mm.
- Feature families: channel deltas, ratios, sumD, temporal statistics, slopes, correlation, and SNR.

**Do not use directly as a large image**

- `04_机器学习与数据分析/图1_一次按压帧数构成表.png`
- Dense feature tables.

These can serve as factual references for a newly designed diagram.

## 06 — Stable signatures across the surface

**Purpose**

Show the reader what the sensor actually “sees” spatially before presenting model accuracy.

**Layout**

- Dark text on white; three square heatmaps in a single row.
- First heatmap is large (50% width); the other two stack vertically or share the remaining width.
- Place one concise observation beside the largest image: different positions generate structured, repeatable response patterns.

**Candidate assets**

- `03_实验档案/03_机采多深度与动态实验包/figures/01_5mm_formal_sumD_heatmap.png`
- `03_实验档案/03_机采多深度与动态实验包/figures/05_2p5_r1_mean_heatmap.png`
- `03_实验档案/03_机采多深度与动态实验包/figures/08_5mm_ratio_shift_heatmap.png`

**Editing note**

Re-export these with a shared colour scale, font, and crop. Do not mix incompatible legends without explanation.

## 07 — Calibrated-position performance

**Purpose**

Deliver the strongest result clearly, while defining what was tested.

**Layout**

- One visually dominant metric block on the left:
  - `339 / 345`
  - `correct calibrated positions`
  - `0.205 mm mean error`
- Right: predicted-versus-actual grid or error-vector plot, roughly 4:3.
- Bottom: a thin five-round strip showing per-round stability.
- Include a visible qualifier directly below the metric, not hidden in a footnote.

**Qualifier**

`Evaluation used positions represented during calibration; it measures repeatability across rounds, not arbitrary continuous interpolation.`

**Alternative metric set from the later Figma analysis**

- Three ratios: 95.92%
- Seven base features: 96.47%
- Raw 128-dimensional features: 97.01%
- Offline centre calibration: 98.10%

Use this set only if the final selected experiment and split are documented consistently. Do not combine it with the 339/345 result as though both came from the same evaluation.

## 08 — The harder test: unseen positions

**Purpose**

Create the narrative turn and demonstrate rigorous research judgment.

**Layout**

- Two-column comparison with identical visual grammar:
  - left: `Calibrated positions`;
  - right: `Unseen positions`.
- Each column contains one metric, one mini spatial plot, and one sentence.
- The right column may use a pale warm-grey background to mark the harder condition; avoid red “failure” styling.
- Under both columns, place a full-width error heatmap.

**Primary message**

`The system learned repeatable calibrated signatures more reliably than it interpolated across new spatial locations.`

**Current candidate**

- `03_实验档案/03_机采多深度与动态实验包/figures/11_2p5_prediction_error_heatmap.png`

**Metric discipline**

The quoted 13.48 mm value must be paired with a plot generated from the same three-ratio, position-held-out SVR experiment. If that matching plot is unavailable, show the limitation qualitatively until it is regenerated.

## 09 — Reliability, drift, and what changed

**Purpose**

Briefly explain why sensing performance changes over time and why calibration matters.

**Layout**

- Compact editorial section, no more than 60vh.
- Left: two short observations.
- Right: one line chart or before/after heatmap pair.
- Keep this subordinate to the main location result; it is supporting evidence, not a second case study.

**Evidence from the research canvas**

- Across early rounds, sum increased by approximately 1.25% then 0.73%.
- Power cycling reduced the previous multi-round drift magnitude by about 60%, but did not fully return the signal to the same baseline.
- The first-frame extra sumD bias was small relative to a typical touch response (approximately 0.26%).

**Candidate assets**

- `03_实验档案/03_机采多深度与动态实验包/figures/09_5mm_sumD_diff_heatmap.png`
- A newly drawn drift line chart using the recorded round statistics.

## 10 — What the project established

**Purpose**

End with a precise contribution rather than a promotional claim.

**Layout**

- Large concluding statement occupying the top half of the viewport.
- Below it, four linked items in a single horizontal flow:
  `Geometry` → `Acquisition` → `Inference` → `Generalisation`
- Final row: three next steps, each with a small line icon or cropped visual.
- Finish with project navigation: `Next project — Breatho`.

**Closing statement**

`Three interleaved capacitive channels produced stable, location-specific signatures over a calibrated surface. The study also revealed that electrode uniqueness, contact mechanics, drift, and sampling density remain the central barriers to true continuous super-resolution.`

## Recommended visual count

- 1 hero photograph or composite.
- 1 explanatory comparison graphic.
- 1 large electrode visual plus 3 iteration thumbnails.
- 2–3 prototype and apparatus photographs.
- 1 acquisition-flow diagram.
- 1 signal-processing pipeline graphic.
- 3 spatial heatmaps.
- 1 calibrated-position result plot.
- 1 calibrated-versus-unseen comparison.
- 1 drift graphic.
- 1 concluding synthesis diagram.

Total: approximately 15–18 visual elements, but only 8–10 major visual moments. This is enough to feel rich without turning the page into an archive.

## Assets that should be newly designed for the website

1. Dense matrix versus three-channel sensing comparison.
2. Acquisition workflow.
3. Three-channel trace → feature vector → XY prediction pipeline.
4. Calibrated-position result summary.
5. Matched calibrated-versus-unseen evaluation graphic.
6. Final geometry/acquisition/inference/generalisation synthesis.

## Assets that can be used after light cleanup

1. Final electrode layout.
2. Electrode iteration previews.
3. Alias-density analysis.
4. PCB assembly rendering.
5. SumD and ratio heatmaps.
6. Prediction-error heatmap, provided its experiment matches the caption.
7. Original rig and probe photographs from the Figma canvas or local photo folders.

## Mobile adaptation

- All split sections become a single vertical column: text first, image second.
- Hero image remains 16:9 and follows the title rather than sitting beside it.
- Three-image strips become horizontally scrollable with one full image and part of the next visible.
- Result comparisons stack vertically but retain identical scales.
- Large metrics should remain on one line where possible; supporting qualifiers must stay immediately below them.
