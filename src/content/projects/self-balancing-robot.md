---
order: 6
title: Self-Balancing Robot / PID Control
navTitle: Self-Balancing Robot
previewTitle: Self-Balancing Robot
description: A physical PID balancing project that exposed actuator response, sensor estimation, loop timing, and scope as coupled control constraints.
category: Control Systems / Robotics
year: Jan. 2026
type: Control II course project
role: Team member; individual subsystem ownership was not recorded
stack: [PID Control, State-Space Modeling, Embedded Control]
heroMedia:
  type: image
  src: project-assets/self-balancing-robot/final-demo-poster.jpg
  alt: Physical self-balancing robot during its final demonstration
  label: Final prototype
  caption: Completed robot used for the qualitative balancing demonstration.
sections:
  - title: Core Objective & Constraints
    description: Stabilize an unstable two-wheel robot around the upright equilibrium within a Control II course deadline.
    body:
      - Mechanical alignment, center-of-mass assumptions, angle estimation, loop timing, motor response, saturation, and controller tuning all affect the same visible pitch motion.
      - The original scope also considered ultrasonic sensing, obstacle avoidance, and LQR. Those additions were not completed and are excluded from the delivered system.
  - title: System Architecture & Schematics
    description: A linearized plant model supports reasoning around the upright equilibrium; a physical embedded loop applies PID correction through the wheel motors.
    body:
      - The report records body and wheel masses, wheel radius, center-of-mass assumptions, pitch inertia, and continuous-time state-space matrices.
      - The component table and final center-of-mass calculation disagree. The state definition, input units, measurement procedure, MCU, IMU, motor driver, and power source are not preserved in the supplied notes.
  - title: Control, Algorithm, or Mechanical Implementation
    description: PID was implemented on the physical prototype, but the information required to reproduce the loop is incomplete.
    body:
      - Controller gains, tuning sequence, loop frequency, measured latency, angle filter, output saturation, anti-windup behavior, and motor limits are not available.
      - The team associated visible jitter with motor response, but sensor noise, backlash, timing, estimation, and gain selection remain competing explanations. The video cannot isolate them.
  - title: Quantitative Results & Failure Modes
    description: The prototype remains approximately upright in the final clip while stationary jitter exposes the limit of the result.
    body:
      - No settling time, steady-state angle error, disturbance rejection, maximum recoverable angle, control effort, or repeated success rate is claimed because synchronized telemetry was not recorded.
      - >-
        The project established a practical scope lesson: stabilize and instrument the core feedback loop before adding autonomy, and select actuators for dynamic response rather than nominal torque alone.
    media:
      - type: video
        src: "project-assets/self-balancing-robot/WhatsApp Video 2026-08-21 at 07.37.43.mp4"
        label: Final balancing demonstration
        caption: Qualitative upright behavior with visible stationary jitter; no numerical benchmark is inferred.
        poster: project-assets/self-balancing-robot/final-demo-poster.jpg
        ratio: portrait
  - title: Code, CAD & Documentation Links
    description: The plant-modeling report is available; controller source and measured logs are not.
    body:
      - The report documents the linearized plant derivation but does not validate the physical parameters or preserve the implemented PID controller.
      - Reproducible publication requires corrected center-of-mass data, full hardware identification, source code, gains, loop timing, and synchronized pitch and command logs.
    media:
      - type: document
        src: project-assets/self-balancing-robot/Control_Project_modeling.pdf
        label: Plant-modeling report
        caption: Original state-space derivation with the unresolved center-of-mass discrepancy noted above.
---
