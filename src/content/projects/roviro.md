---
order: 1
title: ROViro
navTitle: ROViro
description: A simulation-first marine robotics platform for testing underwater control, operator video, and stereo reconstruction before hardware access.
category: Marine Robotics / Research
featured: true
year: 2025 — Present
type: Independent research project
role: Former Software Lead / Independent Researcher
stack: [ROS 2 Lyrical, Gazebo Jetty, C++20, Python, ArduSub, RTAB-Map, GStreamer, WebRTC, Rerun]
heroMedia:
  type: image
  src: project-assets/roviro/thumbnail.png
  alt: ROViro marine robotics simulation and perception platform overview
  label: ROViro research platform
  caption: ROViro simulation-first platform combining Gazebo Jetty, BlueROV2 Heavy validation, ArduSub control, and stereo VSLAM mapping.
sections:
  - title: Core Objective & Constraints
    description: Determine which control and perception results survive a mechanically inefficient ROV layout, limited workstation resources, and remote access to the intended stereo hardware.
    body:
      - Kami is a seven-thruster ROV whose mass distribution and actuator placement make control allocation non-trivial. Mechanical redesign remains the baseline; the research question is how much behavior feedback and allocation can recover, and at what control effort.
      - The intended ZED2i hardware is remote, so current development is simulation-first. Results from Gazebo are treated as software and experiment validation, not proof of physical underwater performance.
    media:
      - type: image
        src: project-assets/roviro/heavybluerov-gazebo.png
        alt: BlueROV2 Heavy model simulated in Gazebo Jetty
        label: Gazebo simulation baseline
        caption: BlueROV2 Heavy model in the underwater Gazebo scene used to isolate baseline control and VSLAM testing from asymmetric thruster tuning.
  - title: System Architecture & Schematics
    description: ROS 2 coordinates control and perception while operator video uses a separate H264 transport path to avoid loading the control graph with display traffic.
    body:
      - The Gazebo model includes seven thrusters, seven cameras, buoyancy, configured hydrodynamic terms, IMU, odometry, grippers, ros_gz bridges, and ArduSub-oriented actuator mappings.
      - A custom C++ Gazebo plugin pairs stereo frames and sends H264 through GStreamer to an RTSP server. MediaMTX exposes WebRTC streams to Blue Robotics Cockpit; raw ROS images remain available only where perception nodes require them.
    media:
      - type: image
        src: project-assets/roviro/system-architecture.png
        alt: ROViro architecture connecting simulation, vehicle control, stereo mapping, streaming, and the operator station
        label: System architecture
        caption: Separate vehicle-control, simulation, stereo-processing, video-transport, and operator-interface paths.
  - title: Control, Perception & Implementation
    description: Current experiments separate the difficult Kami allocation problem from validation of the conventional ArduSub and stereo-mapping pipeline.
    body:
      - Direct ArduSub control of Kami remains under evaluation because its asymmetric seven-thruster geometry requires custom tuning. A BlueROV2 Heavy model carrying the same camera layout is therefore used to verify the standard control and VSLAM path before attributing failures to Kami.
      - The BlueROV2 Heavy run used phone-based Wi-Fi control. ArduSub Stabilize and AltHold provide baseline attitude and heave behavior for later comparison with custom controllers.
      - The mapping path records stereo data, replays it at 0.3× speed, applies 2× downscaling, and processes it with RTAB-Map. Rerun displays camera feeds, attitude and heave traces, the estimated trajectory, and the reconstructed point cloud.
    media:
      - type: image
        src: project-assets/roviro/cockpit-operator-view.png
        alt: Blue Robotics Cockpit operator view with multiple camera streams and vehicle telemetry
        label: Operator cockpit interface
        caption: Blue Robotics Cockpit dashboard aggregating GStreamer and MediaMTX RTSP streams, primary camera, and live telemetry.
      - type: image
        src: project-assets/roviro/cockpit-inside-plane.png
        alt: Vehicle cockpit view exploring the interior of a submerged aircraft wreck
        label: Underwater scene navigation
        caption: Interior navigation within the submerged aircraft model during the stereo mapping and trajectory recording run.
  - title: Quantitative Results & Failure Modes
    description: Resource limits produced a reproducible offline pipeline, but no control-accuracy or reconstruction-error claim is complete yet.
    body:
      - Stereo frames were reduced from 1280 × 720 to 1280 × 540, cutting pixel count by 25% while retaining horizontal field of view. Processing then uses 2× downscaling and 0.3× replay because the workstation could not sustain the full simulator, control stack, and live stereo mapping together.
      - Command traces are not measured thrust. Simulated trajectories are not physical vehicle accuracy. Reconstruction quality remains qualitative until Blender reference dimensions and MeshLab measurements are reported with absolute and percentage error.
      - Gazebo provides ROS integration and configured marine dynamics; Stonefish is retained for later geometry-informed marine simulation comparison. Neither environment is treated as CFD or as an automatically calibrated model.
  - title: Code, CAD & Documentation Links
    description: The project record currently exposes the architecture and validation method; source publication and measured datasets remain separate release tasks.
    body:
      - The active workspace targets Ubuntu 26.04, ROS 2 Lyrical Luth, Gazebo Jetty, C++20, and Python. The vehicle description uses URDF/SDF with ros_gz bridges and MAVLink/ArduSub mappings.
      - Public technical references used by the project include Gazebo Hydrodynamics and Buoyancy systems, Project DAVE, Stonefish theory documentation, RTAB-Map, ArduSub, and Blue Robotics Cockpit. No public project repository is claimed in this portfolio revision.
---
