---
order: 2
title: Autonomous Lifting AGV
navTitle: Graduation Project
previewTitle: Autonomous Lifting AGV
description: "Dual 2D LiDAR SLAM, multi-stage Nav2 docking planner with real-time leg tracking, dynamic costmap footprint expansion, and a lead-screw scissor lift tested at ~10 kg."
category: Graduation Project / Warehouse Robotics
featured: true
year: 2026 — Present
type: Graduation project / Ongoing
role: Software & Control Lead (SLAM, Nav2 Architecture, Docking Planner & Footprint Resizing)
stack: [ROS 2, SLAM Toolbox, Nav2, Dual 2D LiDAR, Mecanum Drive, Lead-Screw Scissor Lift, SolidWorks]
heroMedia:
  type: image
  src: project-assets/graduation-project/navigation-system-poster.jpg
  alt: Navigation development view for the autonomous lifting AGV
  label: Navigation & docking architecture
  caption: Dual-LiDAR ROS 2 navigation stack executing global warehouse routing and precision under-rack docking.
sections:
  - title: Problem Statement & System Requirements
    description: Autonomously navigate a warehouse floor, execute precision multi-stage docking beneath target racks, engage a scissor lift, and transport the elevated payload to a designated station.
    body:
      - "The AGV combines omnidirectional mecanum mobility with a custom 4-scissor lift mechanism. Software scope covers the complete ROS 2 autonomy pipeline: dual-LiDAR SLAM, global path planning, precision sub-rack alignment via real-time leg tracking, and dynamic costmap footprint resizing after payload acquisition."
      - "Primary constraints include tight rack-leg clearances requiring sub-centimeter docking accuracy, mecanum wheel slip in constrained spaces, and real-time compute management during simultaneous dual-LiDAR SLAM and docking controller execution."
  - title: Navigation Architecture & Dual-LiDAR Perception
    description: Two 2D LiDARs provide 360° spatial coverage while a multi-planner Nav2 pipeline separates global transport from precision docking.
    body:
      - "Front and rear 2D LiDARs provide continuous 360° SLAM mapping and obstacle detection, eliminating sensor blind spots that would compromise both open-floor navigation and under-rack alignment."
      - "Global navigation uses Nav2 to plan and execute routes from arbitrary warehouse nodes to a staged approach checkpoint positioned directly in front of the target rack."
      - "Upon arrival, the system transitions to a specialized local docking controller that drives the AGV beneath the rack in two phases: (1) entry between the front two legs using real-time LiDAR leg-position tracking, and (2) geometric centering of the AGV footprint at the rack's centroid computed from all four leg positions."
      - "After scissor-lift engagement, the autonomy stack dynamically expands the Nav2 costmap footprint polygon to match the elevated rack's physical outer boundary, preventing collisions during payload transport."
  - title: Mechanical System & Lift Validation
    description: A 4-scissor linkage driven by a lead-screw actuator provides the vertical lift stroke. CAD motion studies preceded physical fabrication and load testing.
    body:
      - "SolidWorks kinematic motion studies verified 4-scissor linkage travel, clearance envelopes, and mechanical interference before fabrication."
      - "The physical chassis and lead-screw scissor lift were fabricated and tested under a ~10 kg prototype rack payload, confirming lift stroke, structural integrity, and actuator torque margin."
    media:
      - type: video
        src: project-assets/graduation-project/navigation-system-silent.mp4
        label: Autonomous navigation & docking workflow
        caption: Dual-LiDAR ROS 2 navigation stack demonstrating global path planning and precision docking alignment.
        poster: project-assets/graduation-project/navigation-system-poster.jpg
        ratio: landscape
        silent: true
      - type: video
        src: "project-assets/graduation-project/M6 4scissor_Motion.mp4"
        label: Four-scissor lift motion study
        caption: SolidWorks kinematic motion study verifying scissor linkage travel and lead-screw actuation clearance.
        poster: project-assets/graduation-project/scissor-lift-poster.jpg
        ratio: landscape
        silent: true
  - title: Subsystem Validation Summary
    description: Verified perception, docking, lift, and costmap subsystem capabilities.
    body:
      - "Dual 2D LiDAR configuration eliminates sensor blind spots during both open-floor navigation and constrained under-rack docking."
      - "The 2-phase docking controller (front-leg entry → 4-leg geometric centering) achieves repeatable under-rack positioning verified through repeated trial runs before lift engagement."
      - "The physical 4-scissor lead-screw lift mechanism sustained a ~10 kg prototype payload across multiple lift-lower cycles."
      - "Automated Nav2 footprint expansion correctly prevents collision during transport by incorporating the elevated rack's outer boundary into both global and local costmaps."
  - title: Repository & Publication Status
    description: Source repositories, CAD files, and full payload benchmarking will be released upon graduation project completion.
    body:
      - "The active workspace targets ROS 2, SLAM Toolbox, Nav2, SolidWorks, and embedded motor control firmware."
      - "Public release of source code, navigation configuration, and quantitative docking accuracy data is planned for the graduation project submission."
---
