# Capacitive Super-Resolution

Sensing · Ongoing Research

## Finding more spatial information in fewer sensing channels.

Capacitive Super-Resolution is an ongoing research project exploring whether a touch surface can recognise distinct locations without being divided into a dense grid of sensing elements. Instead of assigning one sensor to every point, the project investigates how a small number of overlapping channels can create different response relationships across a continuous surface.

The work brings together electrode design, physical prototyping, controlled measurement, and machine learning. Its central question is not simply whether a model can predict a position, but how the physical design of a surface can make spatial information easier to sense in the first place.

*Selected visuals and technical details have been simplified or obscured because this research is ongoing and unpublished.*

---

## Designing the signal

### The geometry of the surface becomes part of how location is described.

A touch affects every sensing channel differently depending on where it occurs. I used this relationship as a starting point for the electrode design, developing patterns intended to create recognisable combinations of responses across the surface.

The process moved repeatedly between drawing, simulation, fabrication, and testing. Some patterns produced strong signals but made distant locations difficult to distinguish. Others were visually continuous but impractical to manufacture. Each iteration helped clarify how geometry, physical construction, and spatial ambiguity influence one another.

The current electrode design is still being developed, so the complete pattern and fabrication details are not shown publicly. The images presented here communicate the design principle and progression without revealing the final geometry.

[Full-width image: abstracted electrode pattern]

[Image pair: early pattern study / spatial ambiguity study]

---

## Building a repeatable experiment

### Controlled contact made it possible to separate spatial behaviour from the variability of a hand.

Early tests showed that manual touch introduced too many changing conditions at once. Position, contact area, pressure, angle, and timing could all affect the signal, making it difficult to understand whether a difference came from the electrode design or from the way the surface had been touched.

To create a more dependable baseline, I built an automated measurement workflow that moved a probe across the sensing area and repeated contact under controlled conditions. At each location, the system established a baseline, recorded the response during contact, and returned to a neutral state before continuing. This made it possible to compare positions and design iterations through a consistent process.

The exact sampling layout, contact settings, calibration routine, and dataset are withheld while the research is in progress.

[Large image: measurement rig, sensitive regions masked]

[Small process graphic: position → baseline → contact → record → repeat]

---

## Reading a touch as a relationship

### Location emerges from how the channels change together, rather than from one isolated value.

Each contact produces a short response across the sensing channels. I examined how those signals changed together, how stable they became during contact, and how their relative contributions varied across the surface. The responses were then converted into a compact spatial signature that could be compared with patterns recorded elsewhere.

This approach revealed organised differences across the sensing area. Locations within a calibrated region produced recognisable response relationships across repeated trials, suggesting that a low-channel surface can contain more spatial information than its channel count alone might imply.

At the same time, the experiments exposed how strongly the result depends on calibration, contact conditions, and gradual changes in the sensing baseline. These effects became part of the design problem rather than noise to be hidden at the end of the process.

[Wide diagram: channel responses → spatial signature → estimated area]

[Image pair: sanitised response maps without coordinates or values]

---

## What the prototype shows

### Repeatable recognition inside a calibrated space is promising—but it is not yet the same as continuous localisation.

The current prototype can distinguish a set of calibrated locations consistently across controlled trials. This supports the core premise of the project: carefully designed geometry can allow a small number of capacitive channels to carry meaningful spatial information.

The more demanding test is what happens between or beyond those calibrated locations. When unfamiliar regions are withheld from the learning process, the task becomes significantly harder. This distinction redirected the research from improving a single performance figure toward improving the continuity and uniqueness of the surface itself.

Because these experiments are ongoing, detailed results, model settings, and error maps are not included in the public portfolio. The project is presented as an investigation in progress rather than as a finished sensing technology.

[Comparison image: within calibration / beyond calibration]

---

## Current direction

### The next iteration connects geometry, calibration, and real-world contact more closely.

The work so far has established a repeatable experimental foundation and identified the limits that matter most: areas with similar response patterns, changes in the sensing baseline, variations in physical contact, and the distribution of calibration data.

The next stage focuses on making neighbouring locations vary more predictably, reducing ambiguous regions, and moving from controlled contact toward realistic interaction. The goal is not only to recognise more points, but to understand what a low-channel sensing surface must become in order to behave reliably outside the laboratory setup.

Role: Research, electrode design, physical prototyping, experimental design, data analysis, and visual communication.

Ongoing and unpublished research. Further technical details will be added when the work is ready for public release.

Next project — Breatho
