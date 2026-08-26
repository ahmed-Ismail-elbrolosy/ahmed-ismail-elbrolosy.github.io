---
order: 8
title: GAN Gogh
navTitle: GAN Gogh
description: A three-person CycleGAN project for unpaired landscape-to-Monet translation, qualitative failure analysis, and Flask inference.
category: Machine Learning / Computer Vision
year: Nov. 2024
type: Samsung Innovation Campus AI603 graduation project
role: Team member; individual subsystem ownership was not recorded
stack: [CycleGAN, PyTorch, Flask, Kaggle]
repository: https://github.com/ahmed-Ismail-elbrolosy/Gan-Gogh
heroMedia:
  type: image
  src: project-assets/gan-gogh/frame_0001.png
  alt: Landscape photograph transformed into a Monet-style image by CycleGAN
  label: Generated landscape
  caption: Qualitative CycleGAN output from the project pipeline.
sections:
  - title: Core Objective & Constraints
    description: Translate landscape photographs into one Monet-style target domain without paired source and painted images.
    body:
      - The bounded task used one photographic domain and one artistic domain rather than arbitrary style generation. Cycle consistency was used to preserve source structure across bidirectional translation.
      - The three-person project did not record individual ownership in the available notes. No claim is made about my sole implementation of a subsystem.
  - title: System Architecture & Schematics
    description: The pipeline connects preprocessing, two generators, two discriminators, cycle-consistency training, post-processing, and a Flask upload interface.
    body:
      - The generator uses convolutional downsampling, residual blocks, and transposed-convolution upsampling. Domain discriminators distinguish generated images from examples in each target set.
      - The notebook resizes to 256 × 256 pixels, normalizes inputs, and applies horizontal flips. Random cropping appears in the presentation but not in the checked-in implementation.
  - title: Control, Algorithm, or Mechanical Implementation
    description: The repository contains model code, a Kaggle notebook, sample outputs, and web inference code, but the retained training record is incomplete.
    body:
      - The notebook references Kaggle's GAN Getting Started data, limits the photo domain to 7,000 images, uses batch size 1 and a learning rate of 1e-5, and is configured for 25 epochs on a T4 environment.
      - Retained outputs do not prove that all 25 epochs completed. The README says pretrained weights were used while the notebook sets LOAD_MODEL to false; no training-history claim resolves that contradiction.
  - title: Quantitative Results & Failure Modes
    description: Available results support qualitative domain comparison, not an image-quality or user-study benchmark.
    body:
      - Landscapes resembling the target distribution produced stronger visual transfer. Unfamiliar objects and scene structures produced weaker results, and the delivered interface supports only one artistic domain.
      - The public Flask code requires a genM.pth.tar weights file that is absent from the repository, so inference is not reproducible from the published files alone.
    media:
      - type: image
        src: project-assets/gan-gogh/original-frame0028.png
        alt: Original mountain and flower-field landscape photograph
        label: Source photograph
        caption: Input to the unpaired translation pipeline.
      - type: image
        src: project-assets/gan-gogh/frame_0001.png
        alt: Generated Monet-style mountain and flower-field landscape
        label: Generated result
        caption: Corresponding CycleGAN output; evaluated qualitatively.
  - title: Code, CAD & Documentation Links
    description: Source code is public; model weights and a reproducible completed-run record are not.
    body:
      - The linked repository contains the notebook, architecture code, sample images, Flask application, and interface files.
      - The Samsung-branded presentation was removed from this site because its template prohibits reproduction without permission. A clean project-owned report is required before the slides can be republished.
---
