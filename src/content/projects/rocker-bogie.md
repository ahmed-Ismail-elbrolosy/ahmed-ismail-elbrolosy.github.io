---
order: 4
title: Rocker-Bogie Rover
navTitle: Rocker-Bogie Rover
description: A five-person team developed a six-wheel PVC rover from a SolidWorks articulation study through physical stair and incline tests.
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
  caption: Six-wheel PVC prototype used for stair ascent, descent, and incline trials.
sections:
  - title: Core Objective & Constraints
    description: Build an articulated six-wheel chassis that could negotiate repeated height changes without a conventional sprung suspension.
    body:
      - The five-person course team had to convert coupled rocker-bogie geometry into a low-cost physical platform suitable for a stair-climbing competition.
      - PVC compliance, servo synchronization, wheel clearance, traction, impact loading, and limited fabrication precision were physical constraints absent from the CAD animation.
  - title: System Architecture & Schematics
    description: Passive rocker-bogie articulation maintains wheel contact while six wheel-mounted servos provide differential drive.
    body:
      - The structure uses PVC links and reinforced loaded joints. Custom adapters connect servo horns to the wheels, and a buck converter regulates the servo supply.
      - An ESP8266 provides the wireless interface and differential-steering commands. The final wheel diameter is 13 cm after smaller wheels failed to provide sufficient obstacle clearance.
    media:
      - type: image
        src: "project-assets/Rocker-Bogie/WhatsApp Image 2026-08-14 at 4.09.40 PM.jpeg"
        alt: Rocker-bogie rover during assembly on a workshop bench
        label: Mechanical assembly
        caption: PVC links, pivots, wheel adapters, and mounted servos during fabrication.
  - title: Control, Algorithm, or Mechanical Implementation
    description: A SolidWorks Motion Study reduced linkage uncertainty before fabrication, then the physical build forced wheel and joint revisions.
    body:
      - The motion study checked articulation over separated obstacles. It did not model traction, frame flex, impacts, servo mismatch, or electrical loading.
      - During assembly, the team reinforced high-load joints and replaced the original wheels. My contribution covered the SolidWorks study and analysis, final electrical circuit, and assembly.
    media:
      - type: video
        src: "project-assets/Rocker-Bogie/Simulation with motion study.mp4"
        label: SolidWorks motion study
        caption: Pre-fabrication articulation study; not a physical traversal result.
        poster: project-assets/Rocker-Bogie/motion-study-poster.jpg
        ratio: cinematic
        silent: true
  - title: Quantitative Results & Failure Modes
    description: Recorded trials show successful stair ascent, descent, and incline traversal; geometry, timing, and repeatability were not measured consistently.
    body:
      - The videos verify individual successful runs and visible articulation under changing terrain. They do not establish stair dimensions, ramp angle, traversal time, success rate, or structural margin.
      - Observed design risks were PVC flex at loaded joints, servo synchronization, insufficient initial wheel clearance, traction changes, and impact loads. Conflicting internal report values are excluded.
    media:
      - type: video
        src: "project-assets/Rocker-Bogie/Stair climbing up.mp4"
        label: Stair ascent
        caption: Qualitative evidence of a successful recorded ascent.
        poster: project-assets/Rocker-Bogie/stair-up-poster.jpg
        ratio: portrait
        silent: true
      - type: video
        src: "project-assets/Rocker-Bogie/Stair climbing down.mp4"
        label: Stair descent
        caption: Qualitative evidence of a successful recorded descent.
        poster: project-assets/Rocker-Bogie/stair-down-poster.jpg
        ratio: portrait
        silent: true
  - title: Code, CAD & Documentation Links
    description: The public record contains the CAD motion study and physical test media, not the contradictory internal report.
    body:
      - The incline recording provides an additional terrain baseline without claiming an angle inferred from the camera view.
      - CAD source, ESP8266 firmware, circuit drawing, and raw test logs are not available as public links.
    media:
      - type: video
        src: "project-assets/Rocker-Bogie/Moving on a ramp.mp4"
        label: Incline traversal
        caption: Recorded incline run without an asserted ramp angle.
        poster: project-assets/Rocker-Bogie/ramp-poster.jpg
        ratio: portrait
        silent: true
---
