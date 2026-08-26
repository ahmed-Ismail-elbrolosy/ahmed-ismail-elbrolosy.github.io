---
order: 8
title: Self-Balancing Robot / PID Control
navTitle: Self-Balancing Robot
previewTitle: Self-Balancing Robot
description: A Control II team project that turned an unstable robot into a direct lesson about motor response, sensing, timing, PID control, and the cost of expanding scope too early.
category: Control Systems / Robotics
year: Jan. 2026
type: Control II course project
role: Team member — individual contribution to be confirmed
stack: [PID Control, State-Space Modeling, Embedded Control]
heroMedia:
  type: image
  src: project-assets/self-balancing-robot/final-demo-poster.jpg
  alt: Physical self-balancing robot prototype during its final demonstration
  label: Final physical prototype
  caption: The completed course-project robot used for the qualitative balancing demonstration.
sections:
  - title: Why Balance Exposes Everything
    description: An unstable plant makes mechanical, sensing, timing, and actuator assumptions visible in the same physical response.
    body:
      - >-
        The team selected a self-balancing robot to apply Control II concepts beyond an analytical exercise. A controller could only react to the attitude reported by the sensors and the motion the motors could actually produce.
      - >-
        That coupling made hardware selection part of the control problem. The project notes identify motor response speed and accuracy as major constraints during physical tuning.
  - title: Modeling the Plant
    description: The project report linearizes the robot around the upright equilibrium and records the state-space model used to reason about its pitch dynamics.
    body:
      - >-
        The report documents body and wheel masses, wheel radius, center-of-mass assumptions, pitch inertia, and continuous-time matrices. The component table and the final center-of-mass value still need reconciliation before the model can be described as validated.
      - >-
        The original derivation is embedded here instead of being rewritten as a long page of equations.
    media:
      - type: document
        src: project-assets/self-balancing-robot/Control_Project_modeling.pdf
        label: Plant-modeling report
        caption: Original model derivation and state-space record; model validation and the center-of-mass discrepancy remain open.
  - title: Control Before Autonomy
    description: PID balancing was the delivered core; sensor fusion, obstacle avoidance, and LQR expanded the concept beyond what the deadline allowed.
    body:
      - >-
        The project notes record a PID implementation, but the gains, loop frequency, filtering, saturation handling, and tuning sequence are not preserved in the supplied materials. Those details remain pending rather than being reconstructed from memory.
      - >-
        An ultrasonic sensor was added as part of an attempted broader sensing architecture with the IMU. The deadline prevented that fusion and the proposed obstacle-avoidance and LQR scope from becoming validated features.
  - title: The Final Video Is Qualitative Evidence
    description: The robot remains approximately upright in the final clip, while visible stationary jitter keeps the limitations of the result in view.
    body:
      - >-
        The team considered the result acceptable for the course project. The clip does not establish settling time, disturbance rejection, steady-state error, or a maximum recoverable angle because no synchronized telemetry accompanies it.
      - >-
        The strongest lesson was practical: stabilize and measure the core loop before layering autonomy on top, and select actuators for dynamic response rather than nominal torque alone.
    media:
      - type: video
        src: "project-assets/self-balancing-robot/WhatsApp Video 2026-08-21 at 07.37.43.mp4"
        label: Final balancing demonstration
        caption: Qualitative prototype footage showing upright behavior and the stationary jitter discussed in the project notes.
        poster: project-assets/self-balancing-robot/final-demo-poster.jpg
        ratio: portrait
---
