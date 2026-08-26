---
order: 6
title: Self-Balancing Robot
navTitle: Self-Balancing Robot
previewTitle: Self-Balancing Robot
description: "Physical inverted-pendulum stabilization: linearized plant modeling, IMU-based state estimation, and embedded PID feedback control on a two-wheel prototype."
category: Control Systems / Robotics
year: Jan. 2026
type: Control II course project
role: Full End-to-End Development (Physical Build, IMU State Estimation & Filtering, PID Control Tuning)
stack: [PID Control, State-Space Modeling, IMU Filtering, Embedded Control]
heroMedia:
  type: image
  src: project-assets/self-balancing-robot/final-demo-poster.jpg
  alt: Physical self-balancing robot during its final demonstration
  label: Final prototype
  caption: Two-wheel inverted-pendulum prototype during the qualitative stabilization demonstration.
sections:
  - title: Problem Statement & Control Objective
    description: Stabilize an inherently unstable two-wheel inverted-pendulum robot around the upright equilibrium using embedded PID feedback control.
    body:
      - "The system couples mechanical alignment, center-of-mass geometry, IMU pitch estimation, control loop timing, motor saturation, and gain tuning into a single observable output — visible pitch regulation. Isolating individual contributions requires synchronized telemetry that was not recorded during this project."
      - "The original scope included ultrasonic obstacle sensing and LQR state-feedback as extensions. Neither was completed within the course deadline and is excluded from the delivered system."
  - title: Plant Modeling & State-Space Formulation
    description: A linearized dynamic model supports analysis around the upright equilibrium; an embedded control loop closes the feedback path through wheel motor actuation.
    body:
      - "The modeling report documents body and wheel masses, wheel radius, pitch inertia, center-of-mass assumptions, and continuous-time state-space matrices (A, B, C, D) for the linearized plant."
      - "A discrepancy between the component-level mass table and the computed center-of-mass position remains unresolved in the report. Physical parameter identification was not performed independently."
  - title: Embedded Control Implementation
    description: PID feedback control was implemented on the physical prototype. Documented parameters are incomplete.
    body:
      - "The IMU provides pitch angle estimates that drive the PID error signal. The controller outputs wheel motor commands to counteract angular deviation from the vertical reference."
      - "Controller gains, tuning methodology, loop frequency, measured latency, complementary filter parameters, output saturation limits, and anti-windup configuration are not preserved in the project records."
  - title: Experimental Results & Observed Limitations
    description: The prototype achieves qualitative upright stabilization with visible stationary oscillation.
    body:
      - "Quantitative performance metrics (settling time, steady-state error, disturbance rejection) were not recorded during the course project. The demonstration video provides qualitative evidence of upright stabilization with visible oscillation."
      - "The project established a practical scope constraint: instrument and validate the core feedback loop before adding perception or autonomy layers, and select actuators for dynamic bandwidth rather than nominal torque specifications alone."
    media:
      - type: video
        src: "project-assets/self-balancing-robot/WhatsApp Video 2026-08-21 at 07.37.43.mp4"
        label: Stabilization demonstration
        caption: Qualitative upright stabilization with visible oscillation. No numerical performance metric is inferred from video.
        poster: project-assets/self-balancing-robot/final-demo-poster.jpg
        ratio: portrait
  - title: Documentation & Reproducibility
    description: The plant-modeling report is available. Controller source code and experimental logs are not.
    body:
      - "The report documents the linearized plant derivation with the noted center-of-mass discrepancy. Full reproducibility requires corrected physical parameters, hardware identification, controller source, gain values, loop timing, and synchronized telemetry logs."
    media:
      - type: document
        src: project-assets/self-balancing-robot/Control_Project_modeling.pdf
        label: Plant-modeling report
        caption: Linearized state-space derivation with unresolved center-of-mass discrepancy noted.
---
