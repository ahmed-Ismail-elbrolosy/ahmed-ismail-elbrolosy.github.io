---
order: 2
title: Autonomous Lifting AGV
navTitle: Graduation Project
previewTitle: Autonomous Lifting AGV
description: An ongoing mecanum AGV that must navigate beneath a selected warehouse rack, lift it, and transport it without manual alignment.
category: Graduation Project / Warehouse Robotics
featured: true
year: 2026 — Present
type: Graduation project / Ongoing
role: Mechanical design, navigation, and control software
stack: [ROS 2, Mecanum Drive, Autonomous Navigation, Embedded Systems, SolidWorks]
heroMedia:
  type: image
  src: project-assets/graduation-project/navigation-system-poster.jpg
  alt: Navigation development view for the autonomous lifting AGV
  label: Navigation development
  caption: Current navigation evidence; final under-rack alignment and integrated lifting remain unmeasured.
sections:
  - title: Core Objective & Constraints
    description: Convert a rack selection into autonomous approach, under-rack alignment, lifting, transport, and placement as one recoverable sequence.
    body:
      - The final navigation pose is constrained by the lift interface, not only by collision-free arrival. Lateral offset, heading error, rack clearance, payload, and aisle geometry must eventually be tested together.
      - The project is ongoing. Lift capacity, required lift height, final-pose tolerance, and mission repeatability are not yet published because the integrated tests are incomplete.
  - title: System Architecture & Schematics
    description: A ROS 2 autonomy stack commands an omnidirectional base whose final pose must satisfy the mechanical scissor-lift geometry.
    body:
      - The system joins rack selection, path planning, localization, mecanum motion control, embedded motor interfaces, lift actuation, and mission-state handling.
      - Mecanum kinematics provide lateral correction in constrained aisles, but wheel slip, actuator mismatch, changing load, and floor condition remain part of the positioning error budget.
  - title: Control, Algorithm, or Mechanical Implementation
    description: Navigation and lift development currently proceed as bounded subsystems before integrated rack-transfer testing.
    body:
      - The navigation recording documents the developing motion and control workflow. It is not presented as a final-pose benchmark because no synchronized ground-truth measurement accompanies it.
      - A four-scissor SolidWorks motion study checks mechanism travel and interference. The model does not establish structural capacity, stiffness, actuator sizing, or physical load performance.
    media:
      - type: video
        src: project-assets/graduation-project/navigation-system-silent.mp4
        label: Navigation-system development
        caption: Current mecanum navigation workflow before measured under-rack alignment tests.
        poster: project-assets/graduation-project/navigation-system-poster.jpg
        ratio: landscape
        silent: true
      - type: video
        src: "project-assets/graduation-project/M6 4scissor_Motion.mp4"
        label: Four-scissor lift motion study
        caption: Geometric motion study before actuator, payload, and stiffness validation.
        poster: project-assets/graduation-project/scissor-lift-poster.jpg
        ratio: landscape
        silent: true
  - title: Quantitative Results & Failure Modes
    description: Available artifacts verify subsystem development only; the measurements that decide mission success remain open.
    body:
      - No final-pose error, payload capacity, lift time, path-tracking error, mission duration, or success rate is claimed in the current record.
      - Expected failure modes include mecanum slip, accumulated localization error, poor rack approach geometry, lift interference, frame deflection, actuator saturation, and loss of safe recovery between mission states.
  - title: Code, CAD & Documentation Links
    description: Current public evidence consists of the navigation recording and SolidWorks lift study.
    body:
      - System schematics, embedded interfaces, frozen CAD dimensions, and a source repository will be linked only after the team approves publication.
      - The next evidence release should include the integrated vehicle, lift specifications, test geometry, raw pose data, payload protocol, and observed failure cases.
---
