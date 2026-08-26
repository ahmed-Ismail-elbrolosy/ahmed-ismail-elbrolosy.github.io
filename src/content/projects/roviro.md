---
order: 1
title: ROViro
navTitle: ROViro
description: Kami began as a club ROV with difficult mechanics. I turned those problems into a research platform for control, underwater perception, and operator systems.
category: Marine Robotics / Research Platform
featured: true
year: 2025 — Present
type: Independent research project
role: Former Software Lead / Independent Researcher
stack: [ROS 2 Lyrical, Gazebo Jetty, C++20, GStreamer, NVENC, WebRTC, MAVLink]
heroMedia: COCKPIT OPERATOR VIEW
sections:
  - title: The Project Refused to Stay Small
    description: >-
      ROViro began inside the EJUST Robotics Club, where my responsibility was software. The vehicle gave me a much larger question than the original assignment.
    body:
      - >-
        The club version had no simulation-first workflow and no serious control research. Once I started asking how the vehicle would behave underwater, the work stopped fitting inside a software task. Hydrodynamics, mass distribution, thruster placement, sensing, networking, and mechanical design all became part of the same problem.
      - >-
        I kept the project after my team role ended because it exposed exactly what I did not know. ROViro became the place where I could move from integrating software to thinking like a mechatronics engineer: one system, with every discipline allowed to challenge the others.
    media: []
  - title: Kami Is the Research Problem
    description: >-
      Kami is heavy, mechanically inefficient, and burdened by thruster placement that makes stable motion harder than it should be. I did not want the simulation to hide that.
    body:
      - >-
        The correct first answer to a poor vehicle is usually mechanical redesign. Better mass distribution and better actuator placement reduce wasted thrust before a controller has to intervene. ROViro keeps that truth visible rather than presenting control software as magic.
      - >-
        My research question starts after that baseline: when mission constraints force an awkward geometry, how much behavior can control allocation and feedback recover, what does that recovery cost the thrusters, and where does the design cross the line from difficult to indefensible?
    media: [KAMI IN GAZEBO]
  - title: A Cockpit Without Choking ROS
    description: >-
      The intended physical stereo sensor is a ZED2i, but the hardware is remote. I built the simulation media path so operator video could be developed and stressed without waiting for the vehicle.
    body:
      - >-
        Raw ROS image bridges still exist for perception tools. I deliberately do not rely on them for the operator feed. Seven cameras at useful resolutions can turn the ROS graph into a video transport problem, so the cockpit path leaves that traffic outside the control network.
      - >-
        A custom C++ Gazebo plugin pairs the stereo frames, creates the side-by-side image, and serves eight H264 streams through GStreamer. MediaMTX converts the local RTSP feeds to WebRTC for Blue Robotics Cockpit. On the workstation, all production stream configurations are probed together and use NVENC when the complete set can initialize; x264 remains the fallback.
    media:
      - type: image
        src: project-assets/roviro/system-architecture.png
        alt: ROViro system architecture spanning vehicle control, custom control, Gazebo simulation, stereo mapping, streaming, and the ground-station cockpit
        label: System architecture
        caption: The supplied architecture overview places vehicle control, simulation, allocation, streaming, operator, and mapping components in one working-system map.
  - title: Seven Thrusters, One Argument
    description: >-
      Kami exposes seven command paths and seven ArduPilot mappings. The next control experiments need to show what each thruster is being asked to do, not merely whether the vehicle moved.
    body:
      - >-
        A real-time terminal view is being built around commanded output so saturation, imbalance, and control effort can be seen while the vehicle responds. That distinction matters: a command is not measured thrust, and the page will not label it as feedback until a calibrated feedback signal exists.
      - >-
        This is where the mechanical question becomes visible in software. If stabilization continuously drives particular thrusters harder, the cost of compensating for the layout stops being an opinion and becomes something the experiment can expose.
    media: [REAL-TIME THRUSTER COMMAND TUI]
  - title: Reconstructing What the Cameras Saw
    description: >-
      The original perception mission was not simply to produce a point cloud. It was to recover an underwater target from stereo images and ask whether the reconstruction preserved a useful dimension.
    body:
      - >-
        The pipeline being completed uses the simulated stereo pair with RTAB-Map and inspects the reconstruction in RViz. Closed-loop mapping matters because the camera revisits the same object while the vehicle moves, giving the map a chance to correct accumulated drift.
      - >-
        I will publish accuracy only after the full comparison is reproducible. A visually convincing cloud is not yet a measurement result.
    media: [RTAB-MAP RECONSTRUCTION IN RVIZ]
  - title: Measuring the Error, Not the Screenshot
    description: >-
      The dimensional test begins in Blender, where the source scene provides the reference, and ends in MeshLab, where the same feature is measured in the reconstruction.
    body:
      - >-
        The paired captures will show both numbers, the units, and the selected landmarks. The result will include absolute and percentage error rather than asking the reader to trust two similar-looking images.
      - >-
        This workflow is still active validation. Until the run is complete, the placeholders describe the evidence that belongs here without pretending the result already exists.
    media: [REFERENCE DISTANCE IN BLENDER, RECONSTRUCTED DISTANCE IN MESHLAB]
  - title: Why Gazebo, Then Stonefish
    description: >-
      Gazebo gave me the ROS 2 ecosystem I needed to build the whole machine. Stonefish became interesting when the research moved closer to marine-specific physics and sensing.
    body:
      - >-
        Gazebo derives buoyancy from collision geometry and integrates cleanly with SDF, ros_gz, RViz, plugins, and existing robot tooling. Its standard marine dynamics normally depend on configured drag and added-mass coefficients; Project DAVE adds underwater worlds, currents, bathymetry, and marine sensors.
      - >-
        Stonefish uses physical mesh faces for geometry-informed drag and surface buoyancy, then approximates added mass from fitted primitives. It also brings underwater optics and marine sensors into one simulator. Neither is CFD and neither is automatically exact. The useful comparison is calibration effort, assumptions, and fitness for a particular experiment.
    media: []
  - title: Rebuilding the Foundation
    description: >-
      Moving from ROS 2 Jazzy and Gazebo Harmonic to Lyrical Luth and Jetty was not a version-label change. It touched the custom plugins, ABI boundaries, Python baseline, launch system, and media stack.
    body:
      - >-
        The workspace now targets Ubuntu 26.04, C++20, Python 3.14, Gazebo Sim 10, and the Lyrical vendor packages. The camera and ArduPilot plugins load through Jetty interfaces, OpenCV 4.12 executes CUDA kernels on the Quadro M1200, and the camera package passes its full test suite.
      - >-
        Migration work is part of the project story because research infrastructure also has to survive change. A simulator that only works in one old shell is not a platform.
    media: []
---
