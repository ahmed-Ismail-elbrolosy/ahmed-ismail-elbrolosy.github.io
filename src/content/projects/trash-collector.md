---
order: 5
title: Trash Collector
navTitle: Trash Collector
description: An Introduction to Mechatronics course project combining a mobile collection prototype with a team-trained vision model for trash detection.
category: School Project / Robotics
year: Jan. 2026
type: School project
role: Mechanical and electronics development
stack: [OpenCV, Computer Vision, AI Model Training]
heroMedia:
  type: image
  src: project-assets/trash-collector/unassembled-chassis.jpeg
  alt: White mobile robot chassis with collection mechanism parts laid out before final assembly
  label: Collection robot under assembly
  caption: The supplied build photograph shows the chassis, electronics, wheels, and unassembled mechanism links.
sections:
  - title: Course Project
    description: The prototype was built for an Introduction to Mechatronics course to detect trash and attempt physical collection.
    body:
      - The project used OpenCV with an AI model trained by the team. The supplied detection capture shows the running interface identifying a bottle; it is evidence of one model output, not a measured accuracy result.
      - The original objective, team size, individual ownership boundaries, training dataset, collection-mechanism sequence, constraints, and validated results remain to be documented.
    media:
      - type: image
        src: project-assets/trash-collector/trash-detection.jpeg
        alt: Trash Detection application drawing a bounding box around a plastic bottle
        label: Detection output
        caption: Supplied application capture with a bottle enclosed by the model's detection overlay.
  - title: Physical Prototype
    description: Two supplied recordings show the assembled mobile platform during indoor demonstrations from different viewpoints.
    body:
      - The recordings make the prototype's chassis, electronics, motion, and large front collection structure visible. They do not establish collection reliability, repeatability, or model performance.
      - A verified explanation of how the mechanism picks up and retains waste is still pending in the project record.
    media:
      - type: video
        src: project-assets/trash-collector/collection-demo-side.mp4
        label: Side-view demonstration
        caption: Controlled playback of the assembled prototype moving during an indoor test.
        poster: project-assets/trash-collector/collection-demo-side-poster.jpg
        ratio: cinematic
        silent: true
      - type: video
        src: project-assets/trash-collector/collection-demo-overhead.mp4
        label: Overhead demonstration
        caption: Controlled playback showing the platform and front collection structure from above.
        poster: project-assets/trash-collector/collection-demo-overhead-poster.jpg
        ratio: landscape
---
