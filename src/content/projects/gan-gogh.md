---
order: 9
title: GAN Gogh
navTitle: GAN Gogh
description: A three-person Samsung Innovation Campus project that carried CycleGAN from unpaired landscape data to qualitative failure analysis and a Flask image-upload workflow.
category: Machine Learning / Computer Vision
year: Nov. 2024
type: Samsung Innovation Campus AI603 graduation project
role: Team member — individual contribution to be confirmed
stack: [CycleGAN, PyTorch, Flask, Kaggle]
repository: https://github.com/ahmed-Ismail-elbrolosy/Gan-Gogh
heroMedia:
  type: image
  src: project-assets/gan-gogh/frame_0001.png
  alt: Landscape photograph transformed into a Monet-style image by the GAN Gogh model
  label: Generated landscape
  caption: A supplied CycleGAN output showing the project's Monet-style translation target.
sections:
  - title: Bound the Translation Problem
    description: The project focused on one source domain of landscape photographs and one target domain of Monet paintings rather than arbitrary artistic generation.
    body:
      - >-
        CycleGAN made that scope possible without requiring paired examples of the same scene in photographic and painted form. The team could train mappings between two collections while using cycle consistency to preserve enough source structure for reconstruction.
      - >-
        The narrow domain also made failure analysis clearer. Familiar landscape structure transferred more consistently than scenes containing objects or compositions outside the target distribution.
  - title: Build the Full Pipeline
    description: The workflow connected image preparation, bidirectional generators and discriminators, post-processing, and an inference interface.
    body:
      - >-
        The checked-in notebook resizes images to 256 by 256 pixels, normalizes them, and applies horizontal flipping. The presentation also describes random cropping, but that operation is not present in the repository implementation.
      - >-
        The repository records convolutional generators with residual blocks, domain discriminators, a Kaggle training workflow, model inference code, and a Flask upload interface.
  - title: Compare the Source and Result
    description: The supplied pair makes the transformation visible without substituting aesthetic judgment for a quantitative metric.
    body:
      - >-
        The model transfers color and texture toward the artistic domain while retaining the broad landscape composition. The current record does not include a user study or image-quality metric, so the output remains qualitative evidence.
    media:
      - type: image
        src: project-assets/gan-gogh/original-frame0028.png
        alt: Original mountain landscape and flower-field photograph before style translation
        label: Original photograph
        caption: Source landscape supplied to the translation pipeline.
      - type: image
        src: project-assets/gan-gogh/frame_0001.png
        alt: Monet-style generated version of the mountain landscape and flower field
        label: Generated result
        caption: CycleGAN output for the corresponding landscape scene.
  - title: The Weak Cases Matter
    description: The team's conclusion separates where the model worked visually from where the bounded training domain became a limitation.
    body:
      - >-
        Results were stronger for landscape frames similar to the Monet examples and weaker when unfamiliar objects or scene structures appeared. The delivered model also exposed only one artistic domain rather than a selectable library of styles.
      - >-
        Future work would expand the data, add style domains, compare image-translation architectures, and define reproducible criteria for content preservation and style transfer.
  - title: From Notebook to Upload Interface
    description: A Flask application connected model inference to an interface that accepts an image and displays the original and transformed outputs.
    body:
      - >-
        The public repository contains the application and interface code, but the required model weights are absent. The deployment therefore documents integration work without being reproducible from the repository alone.
      - >-
        The original team presentation is embedded as the project record rather than rewritten slide by slide.
    media:
      - type: document
        src: project-assets/gan-gogh/gan-gough-presentation.pdf
        label: GAN Gogh project presentation
        caption: Original Samsung Innovation Campus team presentation covering the workflow, architecture, outputs, deployment, and retrospective.
---
