---
order: 5
title: Trash Collector
navTitle: Trash Collector
description: A mobile waste-collection prototype combining a physical pickup mechanism with team-trained bottle detection.
category: School Project / Robotics
year: Jan. 2026
type: Introduction to Mechatronics course project
role: Mechanical and electronics development
stack: [OpenCV, Object Detection, Mobile Robotics, Mechanism Design]
heroMedia:
  type: image
  src: project-assets/trash-collector/unassembled-chassis.jpeg
  alt: Mobile robot chassis, electronics, wheels, and mechanism parts before final assembly
  label: Prototype assembly
  caption: Chassis and collection components before final integration.
sections:
  - title: Core Objective & Constraints
    description: Detect waste in the camera view and demonstrate a mobile mechanism intended to collect it within an introductory mechatronics course schedule.
    body:
      - The chassis reused a modular platform developed approximately two years earlier for an AGV seminar project, reducing mechanical scope for the course build.
      - Dataset size, model architecture, target classes, collection sequence, team size, and complete ownership boundaries were not preserved in the available record.
  - title: System Architecture & Schematics
    description: A mobile chassis carries the drive electronics, camera-based detection pipeline, and a large front collection structure.
    body:
      - OpenCV displays the output of an object-detection model trained by the team. Mechanical and electronics development were my recorded responsibilities.
      - The available notes do not identify the processor, camera, actuators, power system, communication buses, or mechanism state sequence, so those details are not reconstructed from imagery.
  - title: Control, Algorithm, or Mechanical Implementation
    description: Vision output and physical collection were demonstrated as separate observable parts of the prototype.
    body:
      - The supplied capture shows a bottle enclosed by the detector overlay. It proves one inference output, not general detection accuracy.
      - Two recordings show the assembled chassis moving with the front mechanism installed. They do not expose enough detail to claim how waste is acquired, retained, or released.
    media:
      - type: image
        src: project-assets/trash-collector/trash-detection.jpeg
        alt: Detection application drawing a box around a plastic bottle
        label: Bottle detection output
        caption: One recorded model output; no confidence or dataset benchmark is attached.
  - title: Quantitative Results & Failure Modes
    description: The record contains qualitative demonstrations but no accuracy, reliability, timing, or repeatability measurements.
    body:
      - Detection precision, recall, inference latency, collection success rate, payload, battery endurance, and repeated-trial results are not available.
      - Likely integration risks include false detections, camera viewpoint changes, mechanism alignment, waste geometry, motor loading, and synchronization between detection and collection; none is presented as a measured failure rate.
    media:
      - type: video
        src: project-assets/trash-collector/collection-demo-side.mp4
        label: Side-view demonstration
        caption: Assembled platform moving during an indoor qualitative test.
        poster: project-assets/trash-collector/collection-demo-side-poster.jpg
        ratio: cinematic
        silent: true
      - type: video
        src: project-assets/trash-collector/collection-demo-overhead.mp4
        label: Overhead demonstration
        caption: Chassis and front collection structure viewed from above.
        poster: project-assets/trash-collector/collection-demo-overhead-poster.jpg
        ratio: landscape
        silent: true
  - title: Code, CAD & Documentation Links
    description: No source, CAD, model weights, dataset, or technical report is currently published.
    body:
      - A reproducible release would require the detector configuration, labeled dataset split, inference hardware, mechanism drawings, electronics schematic, and repeated collection protocol.
      - The current photographs and videos remain the complete public evidence set.
---
