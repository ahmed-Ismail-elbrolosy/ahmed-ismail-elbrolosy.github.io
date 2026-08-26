---
order: 4
title: Rocker-Bogie Rover
navTitle: Rocker-Bogie Rover
description: A five-person team moved a six-wheel rocker-bogie rover from SolidWorks articulation studies to a PVC prototype, then let stairs and an incline expose what CAD could not settle.
category: School Project / Robotics
year: May 2025
type: MTE 321 project-based learning
role: SolidWorks simulation and analysis, final electrical circuit, and assembly
stack: [SolidWorks, Motion Study, PVC Fabrication, Servo Actuation, ESP8266, Differential Steering]
heroMedia:
  type: image
  src: "project-assets/Rocker-Bogie/WhatsApp Image 2026-08-14 at 4.09.40 PM (1).jpeg"
  alt: Completed six-wheel PVC rocker-bogie rover viewed from the side
  label: Completed physical rover
  caption: The assembled six-wheel prototype used for the stair and incline demonstrations.
sections:
  - title: Keep Six Wheels Useful
    description: The mechanism had to accommodate repeated height changes without a conventional sprung suspension.
    body:
      - >-
        The rocker and bogie links form one connected geometry: changing a link changes the posture of the rest of the rover. The team therefore began by inspecting articulation in CAD before committing the dimensions to a physical frame.
      - >-
        The design question was not whether the assembly could animate. It was whether the fabricated mechanism could preserve useful wheel contact when traction, impacts, and frame compliance entered the problem.
    media:
      - type: image
        src: "project-assets/Rocker-Bogie/WhatsApp Image 2026-08-14 at 4.09.40 PM.jpeg"
        alt: Rocker-bogie rover during mechanical assembly on a workshop bench
        label: Mechanical assembly
        caption: PVC links, pivots, and wheel-mounted servos during the physical build.
  - title: CAD Prepared the Question
    description: The SolidWorks Motion Study previewed linkage motion over separated obstacles before fabrication.
    body:
      - >-
        The study provided a qualitative check of articulation and wheel motion. It did not prove traction, structural stiffness, impact response, or physical traversal.
      - >-
        That boundary made the simulation useful: it reduced geometric uncertainty while leaving the terrain questions for hardware.
    media:
      - type: video
        src: "project-assets/Rocker-Bogie/Simulation with motion study.mp4"
        label: SolidWorks motion study
        caption: Pre-fabrication articulation study over separated CAD obstacles.
        poster: project-assets/Rocker-Bogie/motion-study-poster.jpg
        ratio: cinematic
        silent: true
  - title: The Prototype Forced Iteration
    description: PVC fabrication, wheel interfaces, power delivery, and synchronization turned the mechanism into an electromechanical system.
    body:
      - >-
        The team built a lightweight PVC frame, used six wheel-mounted servos, and fabricated custom adapters between the servo horns and wheels. Smaller initial wheels lacked sufficient clearance, so the final build moved to 13 cm wheels.
      - >-
        A buck converter regulated servo power. The final control implementation used an ESP8266 and differential steering; contradictory controller descriptions in the internal report are excluded.
  - title: Stairs in Both Directions
    description: Ascent and descent exposed repeated impacts, changing body attitude, and different load transitions in the same terrain.
    body:
      - >-
        The two clips provide the strongest direct evidence in the project record. They show successful recorded traversals, but they do not independently verify stair dimensions, traversal time, or repeatability.
      - >-
        Placing the directions side by side makes the mechanical comparison visible without turning one run into a performance claim.
    media:
      - type: video
        src: "project-assets/Rocker-Bogie/Stair climbing up.mp4"
        label: Stair ascent
        caption: Physical demonstration of the rover climbing the available stair sequence.
        poster: project-assets/Rocker-Bogie/stair-up-poster.jpg
        ratio: portrait
        silent: true
      - type: video
        src: "project-assets/Rocker-Bogie/Stair climbing down.mp4"
        label: Stair descent
        caption: Physical demonstration of the articulated frame descending the same terrain.
        poster: project-assets/Rocker-Bogie/stair-down-poster.jpg
        ratio: portrait
        silent: true
  - title: The Ramp Was the Baseline
    description: The incline run provided a simpler physical comparison before the discontinuous geometry of the stairs.
    body:
      - >-
        The recorded run demonstrates incline traversal without establishing an angle from the video perspective. Conflicting report values remain excluded until the actual test geometry is confirmed.
      - >-
        Together, the three physical clips show the project journey more honestly than an unsupported table: CAD prepared the mechanism, fabrication introduced constraints, and terrain judged the result.
    media:
      - type: video
        src: "project-assets/Rocker-Bogie/Moving on a ramp.mp4"
        label: Ramp traversal
        caption: Physical incline test used as a simpler baseline before the stair demonstrations.
        poster: project-assets/Rocker-Bogie/ramp-poster.jpg
        ratio: portrait
        silent: true
---
