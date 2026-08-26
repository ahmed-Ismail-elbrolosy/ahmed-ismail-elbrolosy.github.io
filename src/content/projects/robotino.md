---
order: 5
title: Robotino
navTitle: Robotino
description: A three-wheel omnidirectional robot built with custom molded rollers, wireless micro-ROS control, and camera-defined global localization.
category: Mobile Robotics / Course Project
year: Jan. 2026
type: Mobile Robots course project
role: Mechanical, embedded, and software development
stack: [SolidWorks, 3D Printing, Silicone Molding, ESP32, micro-ROS, OpenCV, ArUco, Inverse Kinematics]
heroMedia:
  type: image
  src: project-assets/robotino/thumbnail.jpg
  alt: Top view of the assembled three-wheel Robotino platform with an ArUco marker mounted at its center
  label: Assembled Robotino platform
  caption: Three custom omnidirectional wheels, ESP32 electronics, and the robot-mounted localization marker.
sections:
  - title: Core Objective & Constraints
    description: Build a Robotino-like omnidirectional platform from component fabrication through frame-aware physical control rather than using a purchased mobile base.
    body:
      - The course project joined custom wheel manufacture, a 3D-printed frame, embedded motor commands, visual localization, and inverse kinematics on one physical robot.
      - Wheel encoders were outside the project budget. The team therefore used an external camera and ArUco markers for pose estimation instead of claiming wheel odometry.
  - title: System Architecture & Schematics
    description: An ESP32 running micro-ROS receives wheel commands while an external camera estimates robot pose in a marker-defined global frame.
    body:
      - Two fixed ArUco markers define the global coordinate frame. A third marker on the robot provides its pose in that frame, allowing camera position and angle changes to be compensated by the frame construction.
      - A ROS control node transforms global-frame motion commands through three-wheel inverse kinematics into motor direction and power commands sent wirelessly to the ESP32.
    media:
      - type: image
        src: project-assets/robotino/urdf-model.jpeg
        alt: Robot model with a triangular frame and three omnidirectional wheels
        label: Three-wheel model
        caption: Model of the platform geometry used by the robotics stack.
      - type: image
        src: project-assets/robotino/global-frame-proof.jpeg
        alt: Camera application detecting ArUco marker groups for the global frame
        label: Global-frame proof
        caption: Fixed and robot-mounted marker detections used by the localization pipeline.
  - title: Control, Algorithm, or Mechanical Implementation
    description: Mechanical fabrication and global-frame control were developed as one chain from roller contact to commanded chassis velocity.
    body:
      - The frame was 3D printed. Wheel rollers were cast from a silicone mix in a custom mold and assembled around three omnidirectional wheel hubs.
      - Wireless micro-ROS connected the physical ESP32 controller to the ROS graph. Inverse kinematics assigned individual wheel direction and power for commands expressed in the global frame.
    media:
      - type: image
        src: project-assets/robotino/molded-silicone-rollers.jpeg
        alt: Orange silicone rollers removed from their mold
        label: Molded rollers
        caption: Custom contact rollers after molding.
      - type: image
        src: project-assets/robotino/assembled-wheels.jpeg
        alt: Three assembled omnidirectional wheels with orange rollers
        label: Assembled wheels
        caption: Completed wheel assemblies before installation on the frame.
  - title: Quantitative Results & Failure Modes
    description: Physical teleoperation and marker-relative motion were demonstrated; tracking error, localization accuracy, and network latency were not logged.
    body:
      - The video verifies wireless motion of the assembled platform. No ground-truth path, timestamped command trace, or repeated trial set is available for a numerical control claim.
      - Camera occlusion, marker perspective, calibration error, wireless delay, open-loop wheel response, roller variation, and floor slip remain the principal unmeasured failure modes.
    media:
      - type: video
        src: project-assets/robotino/wireless-teleoperation.mp4
        label: Wireless teleoperation
        caption: Physical motion over micro-ROS; presented without a latency or path-error claim.
        poster: project-assets/robotino/wireless-teleoperation-poster.jpg
        ratio: portrait
  - title: Code, CAD & Documentation Links
    description: The public record contains the model, fabrication photographs, localization captures, and teleoperation video.
    body:
      - Firmware, ROS nodes, camera calibration, inverse-kinematics derivation, CAD sources, and test logs are not currently linked publicly.
      - A complete validation package would add timestamped pose and command data, calibration procedure, marker geometry, repeated trajectories, and localization error against ground truth.
---
