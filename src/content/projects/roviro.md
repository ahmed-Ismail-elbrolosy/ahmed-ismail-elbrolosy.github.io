---
order: 1
title: ROViro
navTitle: ROViro
description: A simulation-first marine robotics platform for underwater dynamics, operator video, control research, and stereo reconstruction.
category: Marine Robotics / Research Platform
featured: true
year: 2025 — Present
type: Independent research project
role: Former Software Lead / Independent Researcher
stack: [ROS 2 Lyrical, Gazebo Jetty, C++20, GStreamer, WebRTC, MAVLink]
heroMedia: COCKPIT OPERATOR VIEW
sections:
  - title: From Team Project to Research Platform
    description: ROViro grew from my work as software lead in the EJUST Robotics Club into a long-term independent research platform. It connects marine dynamics, mechatronic design, control, simulation, perception, and operator tooling instead of treating them as isolated subsystems.
    media: []
  - title: Kami in Simulation
    description: Kami is modeled with seven thrusters, seven cameras, buoyancy, hydrodynamic drag, IMU data, odometry, grippers, and ArduSub-oriented control mappings. The intended physical stereo sensor is a ZED2i, but current development is simulation-first while the vehicle hardware is remote.
    media: [KAMI IN GAZEBO]
  - title: System Architecture
    description: ROS-Gazebo bridges carry simulation state and control commands. A custom C++ plugin pairs the stereo cameras and packs side-by-side frames, while GStreamer, H264, RTSP, MediaMTX, and WebRTC deliver operator video to Blue Robotics Cockpit. Raw ROS image bridges remain available for perception, but the operator feed does not rely on ROS image transport.
    media: [SYSTEM ARCHITECTURE DIAGRAM]
  - title: Control and Thruster Analysis
    description: The vehicle's mass distribution and thruster placement provide a deliberately difficult control case. Seven command paths support allocation experiments, while a terminal view is being prepared to inspect commands in real time. These values are commanded outputs, not calibrated measurements of delivered thrust.
    media: [REAL-TIME THRUSTER COMMAND TUI]
  - title: Stereo Mapping
    description: The perception workflow being completed will use the simulated stereo pair to build an RTAB-Map reconstruction and inspect it in RViz. The goal is closed-loop mapping for underwater scanning; quantitative accuracy will be published only after the full reference comparison is complete.
    media: [RTAB-MAP RECONSTRUCTION IN RVIZ]
  - title: Dimensional Validation
    description: A known feature is measured in the Blender source scene, reconstructed from simulated images, and measured again in MeshLab. The paired captures will document the reference and reconstructed values before any accuracy claim is made.
    media: [REFERENCE DISTANCE IN BLENDER, RECONSTRUCTED DISTANCE IN MESHLAB]
  - title: Choosing the Simulator
    description: Gazebo offers the broader ROS 2, SDF, plugin, and asset ecosystem. It derives buoyancy from collision geometry but normally uses configured hydrodynamic coefficients. Stonefish uses physical mesh faces for geometry-informed drag and surface buoyancy, with simplified geometry-based added-mass estimates and integrated marine rendering. Both remain real-time approximations rather than CFD.
    media: []
  - title: Lyrical and Jetty Migration
    description: The platform is moving from ROS 2 Jazzy and Gazebo Harmonic to the official Ubuntu 26.04 pairing of ROS 2 Lyrical Luth and Gazebo Jetty. The migration covers the custom Gazebo plugins, ros_gz bridges, C++20 packages, launch system, media pipeline, telemetry, and repeatable runtime validation.
    media: []
---
