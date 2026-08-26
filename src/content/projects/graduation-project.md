---
order: 2
title: Autonomous Lifting AGV
navTitle: Graduation Project
previewTitle: Autonomous Lifting AGV
description: A warehouse rack should move because an operator selected it, not because someone drove a cart. I am building the AGV, lift, and autonomy stack that closes that loop.
category: Graduation Project / Warehouse Robotics
featured: true
year: 2026 — Present
type: Graduation project / Ongoing
role: Mechanical design, navigation, and control software
stack: [ROS 2, Mecanum Drive, Autonomous Navigation, Embedded Systems, SolidWorks]
heroMedia:
  type: image
  src: project-assets/graduation-project/navigation-system-poster.jpg
  alt: Navigation-system development view for the autonomous lifting AGV
  label: Navigation system in development
  caption: Current visual evidence from the AGV navigation workflow; the integrated physical system will replace this hero when documented.
sections:
  - title: The Job Is Larger Than Navigation
    description: >-
      The assignment sounds simple: select a rack and ask a robot to move it. The machine has to turn that click into a safe mechanical operation without a human driving the final metres.
    body:
      - >-
        The AGV must plan toward the selected rack, approach it with enough control to fit underneath, stop in the correct lifting position, raise the load, and transport it as one continuous sequence. Navigation cannot be developed as a detached demo because its final pose determines whether the mechanism can do its job.
      - >-
        This is why the graduation project joins mechanical lift design, an omnidirectional base, embedded control, and ROS 2 autonomy. Each subsystem constrains the next one, and the system only succeeds when the hand-offs work.
    media: [AGV SYSTEM ARCHITECTURE]
  - title: Move Sideways Before Lifting
    description: >-
      A mecanum base gives the vehicle the lateral correction that under-rack positioning demands, but it also makes control and wheel behaviour part of the precision problem.
    body:
      - >-
        The base is being developed around the ability to translate and rotate without a conventional steering arc. That freedom is useful in warehouse aisles, especially during the final alignment, but every commanded motion still has to survive wheel slip, load changes, and real actuator differences.
      - >-
        The navigation video records the current software path rather than a finished performance claim. It belongs here as evidence of progress and as a reference for the next positioning tests.
    media:
      - type: video
        src: project-assets/graduation-project/navigation-system-silent.mp4
        label: Navigation-system development
        caption: Current navigation evidence for the mecanum AGV. The clip documents the developing motion and control workflow; final under-rack accuracy remains to be measured.
        poster: project-assets/graduation-project/navigation-system-poster.jpg
        ratio: landscape
        silent: true
  - title: The Lift Has to Belong to the Robot
    description: >-
      The lifting mechanism is not an attachment added after the mobile base. Its geometry, motion, load path, and packaging determine what the AGV can carry and where it can position itself.
    body:
      - >-
        The scissor-lift motion study checks how the mechanism travels through its range before a physical load test. It is useful evidence of geometry and interference, but it does not replace structural analysis or payload validation.
      - >-
        The next record must connect this motion to actuator choice, lift height, rack interface, and the forces seen by the chassis. Those specifications will be published when the design is frozen and tested.
    media:
      - type: video
        src: "project-assets/graduation-project/M6 4scissor_Motion.mp4"
        label: Four-scissor lift motion study
        caption: SolidWorks motion evidence for the developing lifting mechanism, shown before payload and stiffness validation.
        poster: project-assets/graduation-project/scissor-lift-poster.jpg
        ratio: landscape
        silent: true
  - title: Closing the Autonomous Cycle
    description: >-
      The project is finished only when selection, planning, alignment, lifting, transport, and placement operate as one recoverable sequence.
    body:
      - >-
        The remaining work is not hidden behind a polished render: system architecture, sensor choices, lift specifications, final-pose error, payload testing, and photographs of the integrated machine still need to enter the record.
      - >-
        As those tests land, this page will replace placeholders with the exact evidence and failures that changed the design. An ongoing graduation project should show its unfinished edges without pretending they are conclusions.
    media: [INTEGRATED AGV PHOTOGRAPH, AUTONOMOUS MISSION RESULT]
---
