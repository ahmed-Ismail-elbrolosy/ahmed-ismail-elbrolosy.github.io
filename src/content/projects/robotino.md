---
order: 5
title: Robotino
navTitle: Robotino
description: "3-wheel omnidirectional platform: custom silicone-molded rollers, ESP32 micro-ROS firmware, 120° inverse kinematics, and ArUco-based visual pose correction for open-loop drift compensation."
category: Mobile Robotics / Course Project
year: Jan. 2026
type: Mobile Robots course project
role: Full Mechatronic System Ownership (CAD, Silicone Roller Molding, ESP32 micro-ROS, Inverse Kinematics, ArUco Localization)
stack: [SolidWorks, 3D Printing, Silicone Molding, ESP32, micro-ROS, OpenCV, ArUco, Inverse Kinematics]
heroMedia:
  type: image
  src: project-assets/robotino/thumbnail.jpg
  alt: Top view of the assembled three-wheel Robotino platform with an ArUco marker mounted at its center
  label: Assembled Robotino platform
  caption: Three custom omnidirectional wheels with molded silicone rollers, ESP32 electronics, and top ArUco tracking marker.
sections:
  - title: Design Objective & System Constraints
    description: Build an omnidirectional 3-wheel mobile robot from component fabrication through wireless micro-ROS control and camera-based global-frame localization.
    body:
      - "Full-stack mechatronic development: CAD modeling, 3D-printed chassis, custom silicone omniwheel roller casting, ESP32 micro-ROS firmware, 3-wheel 120° inverse kinematics derivation, and overhead ArUco visual pose correction."
      - "Wheel encoders were excluded by budget constraints. Velocity control relied on open-loop motor PWM commands, making external visual feedback essential for global pose tracking and drift correction."
  - title: Localization Architecture & Inverse Kinematics
    description: An ESP32 running micro-ROS receives wheel velocity commands over Wi-Fi while an overhead camera provides closed-loop pose estimation in a marker-defined global coordinate frame.
    body:
      - "Two fixed ArUco ground markers establish a calibrated static coordinate frame, compensating for camera placement drift and tilt. A third marker mounted on the robot provides real-time (x, y, θ) pose estimation via OpenCV."
      - "A ROS 2 control node transforms global-frame velocity targets into robot-frame commands using the current heading θ, then applies the 3-wheel 120° inverse kinematics transformation to compute individual motor PWM outputs transmitted over micro-ROS."
    media:
      - type: image
        src: project-assets/robotino/urdf-model.jpeg
        alt: Robot model with a triangular frame and three omnidirectional wheels
        label: Three-wheel URDF model
        caption: Kinematic model of the 120° omnidirectional wheel geometry.
      - type: image
        src: project-assets/robotino/global-frame-proof.jpeg
        alt: Camera application detecting ArUco marker groups for the global frame
        label: Global-frame visual localization
        caption: Fixed ground markers and robot-mounted marker tracking used for closed-loop pose correction.
  - title: Fabrication & Embedded Integration
    description: Custom silicone roller casting, 3D-printed chassis, and micro-ROS wireless embedded control.
    body:
      - "Wheel rollers were cast from a two-part silicone compound in a custom mold, then assembled around three 3D-printed omnidirectional wheel hubs."
      - "An ESP32 running micro-ROS established a wireless ROS 2 node, parsing incoming velocity commands and applying open-loop motor power through H-bridge drivers."
    media:
      - type: image
        src: project-assets/robotino/molded-silicone-rollers.jpeg
        alt: Orange silicone rollers removed from their mold
        label: Molded silicone rollers
        caption: Custom silicone contact rollers after removal from casting molds.
      - type: image
        src: project-assets/robotino/assembled-wheels.jpeg
        alt: Three assembled omnidirectional wheels with orange rollers
        label: Assembled omniwheels
        caption: Completed three-wheel assemblies installed on the triangular chassis.
  - title: Experimental Observations
    description: Open-loop kinematics drift characterization and closed-loop visual pose correction performance.
    body:
      - "Open-loop velocity drift: without wheel encoders, physical trajectory execution exhibited cumulative position error from roller friction variations and floor slippage during rapid velocity changes."
      - "Closed-loop pose correction: the overhead ArUco vision pipeline provided absolute position and heading feedback in the global coordinate frame, successfully correcting cumulative open-loop drift."
      - "Wireless teleoperation: micro-ROS over Wi-Fi sustained real-time motor command transmission and status publishing without observable communication dropout."
    media:
      - type: video
        src: project-assets/robotino/wireless-teleoperation.mp4
        label: Wireless teleoperation demo
        caption: Physical 3-wheel omnidirectional motion under micro-ROS wireless teleoperation.
        poster: project-assets/robotino/wireless-teleoperation-poster.jpg
        ratio: portrait
  - title: Project Artifacts
    description: CAD models, silicone mold designs, micro-ROS firmware, and OpenCV localization nodes.
    body:
      - "Project artifacts include SolidWorks assembly models, silicone roller casting mold designs, micro-ROS ESP32 firmware, inverse kinematics node, and OpenCV ArUco tracking scripts."
---
