---
order: 7
title: Linear Actuator Reverse Engineering & Control
navTitle: Linear Actuator
previewTitle: Linear Actuator Control
description: An old linear actuator was reverse-engineered and controlled in LabVIEW through negative feedback from its reed-switch rotation count.
category: Control Systems / Reverse Engineering
year: May 2024
type: Control systems project
role: To be documented
stack: [LabVIEW, PD Control, Reed-Switch Feedback]
heroMedia: ACTUATOR TEST SETUP
sections:
  - title: Overview
    description: The project reverse-engineered an existing linear actuator before implementing its feedback controller in LabVIEW.
    body:
      - The available actuator had to be understood through its hardware and observed signals rather than treated as a fully specified component.
      - The reed-switch encoder counted motor rotations. LabVIEW compared that accumulated position feedback with the requested target and drove the actuator from the resulting error, forming a negative-feedback loop.
    media: [ACTUATOR PHOTO]
  - title: Characterization & Control
    description: The implemented controller was PD, using the proportional and derivative parts of a PID structure because integral action was unnecessary for this application.
    body:
      - Controller gains shaped the actuator's response to position error, but no numerical performance claim is published without the corresponding measurements and plots.
      - Photographs of the actuator, the final LabVIEW interface, individual contribution, and validated response evidence remain to be documented.
    media:
      - type: document
        src: project-assets/linear-actuator/control-report.pdf
        label: Project report
        caption: The supplied course report documents the hardware and LabVIEW control structure; the page does not promote its numerical values as verified performance results.
---
