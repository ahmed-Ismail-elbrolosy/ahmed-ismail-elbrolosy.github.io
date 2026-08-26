---
order: 6
title: Robotino
navTitle: Robotino
description: A Mobile Robots course project built from the ground up, joining custom omnidirectional hardware, wireless micro-ROS teleoperation, camera localization, and global-frame control.
category: Robotics / Product Development
year: Jan. 2026
type: School project
role: Mechanical, embedded, and software development
stack: [SolidWorks, 3D Printing, Silicone Molding, ESP32, micro-ROS, OpenCV, ArUco, Inverse Kinematics]
heroMedia:
  type: image
  src: project-assets/robotino/localization-overlay.jpeg
  alt: Three-wheel omnidirectional robot beside two floor-mounted ArUco markers with coordinate overlays
  label: Robotino localization test
  caption: The camera view shows the two global-frame markers, the marker mounted on the robot, and the resulting pose overlay.
sections:
  - title: Overview
    description: The team manufactured a Robotino-like omnidirectional platform from the ground up for a Mobile Robots course.
    body:
      - The project connected fabrication, embedded communication, camera-based pose estimation, and inverse-kinematics control on one physical robot rather than using a purchased mobile base.
    media:
      - type: image
        src: project-assets/robotino/urdf-model.jpeg
        alt: Robot model showing a triangular frame and three omnidirectional wheels
        label: Robot model
        caption: Supplied model view of the three-wheel layout used to represent the platform.
  - title: Ground-Up Manufacture
    description: The frame was 3D printed, while the wheel rollers were formed from a molded silicone mix and assembled into custom omnidirectional wheels.
    body:
      - Producing the rollers and wheel assemblies made traction hardware part of the course work. The supplied photographs document the molded pieces and completed wheels without asserting measured wheel performance.
    media:
      - type: image
        src: project-assets/robotino/molded-silicone-rollers.jpeg
        alt: Batch of orange molded silicone wheel rollers
        label: Molded rollers
        caption: Silicone rollers after removal from the team's mold.
      - type: image
        src: project-assets/robotino/assembled-wheels.jpeg
        alt: Three assembled black and orange omnidirectional wheels on a workbench
        label: Assembled wheels
        caption: The three completed custom wheel assemblies before installation.
  - title: Wireless Embedded Control
    description: An ESP32 running micro-ROS connected the robot wirelessly to the ROS system for teleoperation.
    body:
      - The embedded link carried motor commands from the wider ROS graph to the physical platform. The recording provides qualitative evidence of wireless motion, not a latency or tracking measurement.
    media:
      - type: video
        src: project-assets/robotino/wireless-teleoperation.mp4
        label: Wireless teleoperation
        caption: Controlled playback of the physical robot moving while the floor markers remain in the camera view.
        poster: project-assets/robotino/wireless-teleoperation-poster.jpg
        ratio: portrait
  - title: Camera-Defined Global Frame
    description: A camera observed two ArUco markers that defined the global frame and a marker mounted on the robot that exposed its pose within that frame.
    body:
      - Defining the frame from the two visible markers allowed the localization calculation to account for changes in camera position and angle instead of treating the camera itself as a fixed origin.
      - A node used inverse kinematics to determine motor direction and power. Commands were expressed relative to the global frame rather than the robot's local frame.
    media:
      - type: image
        src: project-assets/robotino/global-frame-proof.jpeg
        alt: Camera application detecting ArUco marker groups during a global-frame proof of concept
        label: Global-frame proof of concept
        caption: Supplied capture showing the marker groups detected by the camera pipeline.
  - title: Engineering Decisions
    description: The project joined custom fabrication, embedded networking, visual localization, inverse kinematics, and frame-aware control in one course prototype.
    body:
      - Wheel encoders were outside the available budget, so the team used the camera-and-marker arrangement for pose information. Quantitative localization and control results remain pending until supporting measurements are added.
    media: []
---
