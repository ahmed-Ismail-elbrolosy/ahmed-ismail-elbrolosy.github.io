---
order: 4
title: Rocker-Bogie Rover
navTitle: Rocker-Bogie Rover
description: "A six-wheel PVC rover: SolidWorks articulation study, passive rocker-bogie linkage fabrication, and physical stair and incline traversal validation."
category: School Project / Robotics
year: May 2025
type: MTE 321 project-based learning
role: SolidWorks simulation and analysis, electrical circuit, and final assembly
stack: [SolidWorks, Motion Study, PVC Fabrication, Servo Actuation, ESP8266, Differential Steering]
heroMedia:
  type: image
  src: "project-assets/Rocker-Bogie/WhatsApp Image 2026-08-14 at 4.09.40 PM (1).jpeg"
  alt: Completed six-wheel PVC rocker-bogie rover viewed from the side
  label: Completed rover
  caption: Six-wheel PVC prototype used for stair ascent, descent, and incline traversal trials.
sections:
  - title: Design Objective & Constraints
    description: Convert coupled rocker-bogie linkage geometry into a low-cost physical platform capable of negotiating stair-height obstacles without sprung suspension.
    body:
      - "The five-person course team designed a passive rocker-bogie suspension that maintains all six wheels in ground contact across step transitions, distributing load through coupled linkage geometry rather than springs or active control."
      - "Physical constraints absent from the CAD model — PVC compliance under load, servo torque mismatch, wheel-surface traction variation, and fabrication tolerances — drove iterative modifications during the build phase."
  - title: System Architecture & Mechanical Design
    description: Passive rocker-bogie articulation maintains wheel contact while six wheel-mounted servos provide differential drive through an ESP8266 wireless interface.
    body:
      - "The chassis uses PVC links with reinforced loaded joints. Custom 3D-printed adapters couple servo horns to 13 cm wheels (upsized from the original design after smaller wheels failed to clear step edges). A buck converter regulates the servo power rail."
      - "An ESP8266 provides wireless differential-steering commands. My contribution covered the SolidWorks kinematics study, electrical circuit design, and final mechanical assembly."
    media:
      - type: image
        src: "project-assets/Rocker-Bogie/WhatsApp Image 2026-08-14 at 4.09.40 PM.jpeg"
        alt: Rocker-bogie rover during assembly on a workshop bench
        label: Mechanical assembly
        caption: PVC links, pivots, wheel adapters, and mounted servos during fabrication.
  - title: Kinematics Simulation & Pre-Fabrication Analysis
    description: A SolidWorks Motion Study verified linkage articulation geometry before physical fabrication.
    body:
      - "The kinematic simulation checked rocker-bogie articulation angles over separated obstacles, confirming geometric clearance and link travel. It did not model traction, frame deflection, impact loading, or servo response — constraints that required iterative correction during the physical build."
    media:
      - type: video
        src: "project-assets/Rocker-Bogie/Simulation with motion study.mp4"
        label: SolidWorks motion study
        caption: Pre-fabrication kinematic articulation study. Not a physical traversal result.
        poster: project-assets/Rocker-Bogie/motion-study-poster.jpg
        ratio: cinematic
        silent: true
  - title: Mobility Demonstration & Traversal Validation
    description: Physical traversal trials demonstrating stair ascent, descent, and incline negotiation.
    body:
      - "The recorded trials verify successful individual traversals with visible passive articulation under changing terrain geometry. Stair dimensions, ramp angle, traversal time, success rate, and structural margin were not measured consistently."
      - "Observed failure risks during testing included PVC flex at loaded joints, servo synchronization lag, traction variation between wheel pairs, and impact loading at step edges."
    media:
      - type: video
        src: "project-assets/Rocker-Bogie/Stair climbing up.mp4"
        label: Stair ascent
        caption: Recorded stair ascent demonstrating passive rocker-bogie articulation.
        poster: project-assets/Rocker-Bogie/stair-up-poster.jpg
        ratio: portrait
        silent: true
      - type: video
        src: "project-assets/Rocker-Bogie/Stair climbing down.mp4"
        label: Stair descent
        caption: Recorded stair descent with visible linkage compliance.
        poster: project-assets/Rocker-Bogie/stair-down-poster.jpg
        ratio: portrait
        silent: true
      - type: video
        src: "project-assets/Rocker-Bogie/Moving on a ramp.mp4"
        label: Incline traversal
        caption: Incline traversal without a measured ramp angle.
        poster: project-assets/Rocker-Bogie/ramp-poster.jpg
        ratio: portrait
        silent: true
  - title: Documentation & Source Artifacts
    description: The public record includes the kinematic simulation and physical test media.
    body:
      - "CAD source files, ESP8266 firmware, circuit schematics, and raw test logs are not published."
---
