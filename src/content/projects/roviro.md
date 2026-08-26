---
order: 1
title: ROViro
navTitle: ROViro
description: "Simulation-first marine robotics platform: Gazebo Jetty hydrodynamics, ArduSub control, stereo VSLAM with RTAB-Map, and GStreamer/WebRTC operator video transport."
category: Marine Robotics / Research
featured: true
year: 2025 — Present
type: Independent research project
role: Former Software Lead / Independent Researcher
stack: [ROS 2 Lyrical, Gazebo Jetty, C++20, Python, ArduSub, RTAB-Map, GStreamer, WebRTC, Rerun]
heroMedia:
  type: image
  src: project-assets/roviro/thumbnail.jpg
  alt: ROViro marine robotics simulation and perception platform overview
  label: ROViro research platform
  caption: Simulation-first platform combining Gazebo Jetty marine dynamics, BlueROV2 Heavy validation, ArduSub control, and stereo VSLAM reconstruction.
sections:
  - title: Research Objective & Problem Formulation
    description: Determine which control and perception results survive a mechanically inefficient ROV geometry, limited workstation resources, and absence of physical stereo hardware.
    body:
      - "Kami is a seven-thruster ROV whose mass distribution and actuator placement make thrust allocation non-trivial. Mechanical redesign is the baseline solution; the research question is how much feedback control and allocation optimization can recover, and at what control effort cost."
      - "The intended ZED2i stereo hardware is remote, so development follows a simulation-first methodology. Gazebo results are treated as software and experiment validation — not as proof of physical underwater performance."
    media:
      - type: image
        src: project-assets/roviro/heavybluerov-gazebo.jpg
        alt: BlueROV2 Heavy model simulated in Gazebo Jetty
        label: Gazebo simulation baseline
        caption: BlueROV2 Heavy model in the underwater Gazebo scene used to isolate baseline control and VSLAM validation from asymmetric thruster tuning.
  - title: System Architecture & Video Transport
    description: ROS 2 coordinates control and perception graphs while operator video uses a separate H.264 transport path to avoid loading the control pipeline with display traffic.
    body:
      - "The Gazebo model includes seven thrusters, seven cameras, buoyancy, configured hydrodynamic drag and added-mass terms, IMU, odometry, grippers, ros_gz bridges, and ArduSub-oriented actuator mappings."
      - "A custom C++ Gazebo plugin pairs stereo frames and encodes H.264 through GStreamer to an RTSP server. MediaMTX exposes WebRTC streams to Blue Robotics Cockpit for operator display; raw ROS image topics remain available only where perception nodes require them."
    media:
      - type: image
        src: project-assets/roviro/system-architecture.png
        alt: ROViro architecture connecting simulation, vehicle control, stereo mapping, streaming, and the operator station
        label: System architecture
        caption: Separate vehicle-control, simulation, stereo-processing, video-transport, and operator-interface signal paths.
  - title: Control Baseline & Stereo Reconstruction Pipeline
    description: Experiments separate the asymmetric Kami allocation problem from validation of the conventional ArduSub and stereo-mapping pipeline using a symmetric reference vehicle.
    body:
      - "Direct ArduSub control of Kami remains under evaluation because its asymmetric seven-thruster geometry requires custom mixer tuning. A BlueROV2 Heavy model carrying the same camera layout provides a symmetric reference for verifying the standard control and VSLAM pipeline before attributing failures to Kami's geometry."
      - "The BlueROV2 Heavy baseline used phone-based Wi-Fi control. ArduSub Stabilize and AltHold modes provide baseline attitude and heave behavior for later comparison with custom state-feedback controllers."
      - "The mapping pipeline records stereo data, replays at 0.3× speed with 2× spatial downscaling, and processes through RTAB-Map. Rerun visualizes camera feeds, attitude and heave traces, estimated trajectory, and the reconstructed point cloud."
    media:
      - type: image
        src: project-assets/roviro/cockpit-operator-view.jpg
        alt: Blue Robotics Cockpit operator view with multiple camera streams and vehicle telemetry
        label: Operator cockpit interface
        caption: Blue Robotics Cockpit aggregating GStreamer/MediaMTX RTSP streams, primary camera feed, and live vehicle telemetry.
      - type: image
        src: project-assets/roviro/cockpit-inside-plane.jpg
        alt: Vehicle cockpit view exploring the interior of a submerged aircraft wreck
        label: Underwater scene navigation
        caption: Interior navigation within the submerged aircraft model during stereo mapping and trajectory recording.
  - title: Current Results & Known Limitations
    description: Resource constraints produced a reproducible offline pipeline. No control-accuracy or reconstruction-error claim is quantitatively supported yet.
    body:
      - "Stereo frames were reduced from 1280×720 to 1280×540 (25% pixel reduction retaining horizontal FOV). Processing uses 2× downscaling and 0.3× replay because the workstation could not sustain the full simulator, control stack, and live stereo mapping concurrently."
      - "Command traces represent requested thrust, not measured force. Simulated trajectories are not physical vehicle accuracy. Reconstruction quality remains qualitative until Blender reference geometry and MeshLab dimensional measurements yield absolute and percentage error."
      - "Gazebo provides ROS integration and configured marine dynamics; Stonefish is retained for future geometry-informed marine simulation comparison. Neither environment is treated as CFD or as an automatically calibrated physical model."
  - title: Repository & Publication Status
    description: Architecture and validation methodology are documented. Source publication and measured datasets are separate release targets.
    body:
      - "The active workspace targets Ubuntu 26.04, ROS 2 Lyrical Luth, Gazebo Jetty, C++20, and Python. Vehicle description uses URDF/SDF with ros_gz bridges and MAVLink/ArduSub mappings."
      - "Public technical references include Gazebo Hydrodynamics and Buoyancy systems, Project DAVE, Stonefish theory documentation, RTAB-Map, ArduSub, and Blue Robotics Cockpit. No public repository is claimed in this revision."
---
