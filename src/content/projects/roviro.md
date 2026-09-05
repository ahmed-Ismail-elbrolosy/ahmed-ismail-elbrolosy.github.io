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
        alt: High-resolution ROViro architecture connecting simulation, vehicle control, stereo mapping, streaming, and the operator station
        label: System architecture
        caption: Separate vehicle-control, simulation, stereo-processing, video-transport, and operator-interface signal paths.
  - title: Control Baseline & Symmetric Vehicle Validation
    description: Experiments separate the asymmetric Kami allocation problem from validation of the conventional ArduSub and stereo-mapping pipeline using a symmetric reference vehicle.
    body:
      - "Direct ArduSub control of Kami remains under evaluation because its asymmetric seven-thruster geometry requires custom mixer tuning. A BlueROV2 Heavy model carrying the same camera layout provides a symmetric reference for verifying the standard control and VSLAM pipeline before attributing failures to Kami's geometry."
      - "The BlueROV2 Heavy baseline used phone-based Wi-Fi control. ArduSub Stabilize and AltHold modes provide baseline attitude and heave behavior for later comparison with custom state-feedback controllers."
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
  - title: Stereo VSLAM & Rerun 3D Reconstruction Pipeline
    description: Decoupled offline mapping pipeline with uncompressed SGM-HH stereo disparity (256 levels) and synchronized Rerun 3D visualization, concluding Phase 1 validation before custom controller synthesis.
    body:
      - "Due to workstation resource constraints during concurrent physics and dense visual simulation (20m 39s real time yielded ~147s simulation time), live SLAM was decoupled by capturing raw uncompressed stereo rosbags."
      - "Offline mapping leveraged RTAB-Map with Semi-Global Matching Hierarchical (SGM-HH) across 256 disparities without compression, maximizing underwater feature density and depth map precision."
      - "The recording was replayed at 0.15× rate (~3h total processing) into Rerun, visualizing synchronized 3D dense point clouds, 6-DOF vehicle trajectories, raw stereo feeds, and attitude/heave telemetry traces."
      - "In raw visual output, simulated water volume boundaries created planar depth artifacts; segmenting and filtering water-layer returns isolated the clean, high-fidelity 3D structural geometry of the seabed and submerged aircraft."
      - "With Phase 1 (Perception & VSLAM pipeline verification) complete, project focus shifts to Phase 2: custom state-space control allocation and disturbance-rejection controller synthesis for Kami's asymmetric thruster geometry."
    media:
      - type: video
        src: project-assets/roviro/vslam-rerun-visualization.mp4
        label: VSLAM & Rerun 3D reconstruction pipeline
        caption: Synchronized 3D point cloud generation, 6-DOF vehicle trajectory tracking, and live telemetry replay in Rerun.
        poster: project-assets/roviro/vslam-rerun-poster.jpg
        ratio: wide
        silent: true
      - type: image
        src: project-assets/roviro/pointcloud-without-water.jpg
        alt: Dense 3D point cloud reconstruction of the underwater environment with water surface reflection artifacts removed
        label: Segmented 3D point cloud
        caption: Dense point cloud reconstruction of the seabed and wreckage geometry, filtering out water-layer visual artifacts to isolate structural scene features.
  - title: Current Results & Known Limitations
    description: Resource constraints produced a reproducible offline pipeline. No control-accuracy or reconstruction-error claim is quantitatively supported yet.
    body:
      - "Stereo frames were reduced from 1280×720 to 1280×540 (25% pixel reduction retaining horizontal FOV). Processing uses 2× downscaling and 0.15× replay to decouple simulation throughput from dense stereo reconstruction limits."
      - "Command traces represent requested thrust, not measured force. Simulated trajectories are not physical vehicle accuracy. Reconstruction quality remains qualitative until Blender reference geometry and MeshLab dimensional measurements yield absolute and percentage error."
      - "Gazebo provides ROS integration and configured marine dynamics; Stonefish is retained for future geometry-informed marine simulation comparison. Neither environment is treated as CFD or as an automatically calibrated physical model."
  - title: Repository & Publication Status
    description: Architecture and validation methodology are documented. Source publication and measured datasets are separate release targets.
    body:
      - "The active workspace targets Ubuntu 26.04, ROS 2 Lyrical Luth, Gazebo Jetty, C++20, and Python. Vehicle description uses URDF/SDF with ros_gz bridges and MAVLink/ArduSub mappings."
      - "Public technical references include Gazebo Hydrodynamics and Buoyancy systems, Project DAVE, Stonefish theory documentation, RTAB-Map, ArduSub, and Blue Robotics Cockpit. No public repository is claimed in this revision."
---
