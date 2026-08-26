# GAN Gogh

## Site status

Candidate for a dedicated project page

## Summary

A three-person **Samsung Innovation Campus AI603** graduation project that used CycleGAN to translate landscape photographs into Monet-style images. The team built an image-processing pipeline, evaluated its qualitative strengths and failure cases, and exposed the model through a Flask upload interface.

## Project facts

- **Date:** November 2024
- **Status:** Completed
- **Team:** Three members
- **Role:** [TODO: Describe Ahmed's individual contribution]
- **Architecture:** CycleGAN
- **Application:** Unpaired image-to-image translation for Monet-style landscape rendering
- **Repository:** <https://github.com/ahmed-Ismail-elbrolosy/Gan-Gogh>

## The problem

The project explored whether an unpaired image-translation model could transform real landscape photographs into images carrying visual characteristics associated with Monet paintings.

The project focused on a bounded task rather than arbitrary artistic generation: one visual domain of landscape photographs and one target domain of Monet-style artwork.

## Pipeline

The documented workflow moved through four stages:

1. **Pre-processing** prepared source and target-domain images.
2. **CycleGAN modeling** learned mappings between the photographic and artistic domains.
3. **Post-processing** converted generated tensors into presentation-ready images.
4. **Deployment** exposed the transformation through a web upload interface.

### Pre-processing

The presentation records the following operations:

- Resize images to 256 x 256 pixels.
- Normalize image values.
- Apply horizontal flipping.

The presentation also shows random cropping, but the checked-in notebook does not apply that operation. Treat it as intended pipeline design rather than confirmed implementation.

### CycleGAN architecture

CycleGAN was selected because it can learn translation between two image domains without requiring one-to-one paired examples.

The documented model uses:

- Generators to translate images in both directions between the photographic and Monet domains.
- Discriminators to distinguish generated images from examples in each target domain.
- Cycle consistency to encourage a translated image to preserve enough structure to reconstruct its source.
- Convolutional downsampling, residual blocks, and transposed-convolution upsampling in the generator pipeline.

The repository contains a training notebook, model code, sample outputs, a Flask application, and a web interface. The notebook references Kaggle's GAN Getting Started data, limits the photo domain to 7,000 images, uses batch size 1 and a learning rate of `1e-5`, and is configured for 25 epochs on a T4 environment. Its retained outputs do not establish that the full configured run completed.

The README says pretrained weights were used, while the checked-in notebook sets `LOAD_MODEL = False` and does not load a checkpoint. This conflict must be resolved before publishing a training-history claim.

- [TODO: Confirm which dataset version and image subsets were used in the completed run]
- [TODO: Add actual completed epochs, training duration, retained losses, and hardware]
- [TODO: Clarify whether training started from pretrained weights]

### Post-processing and deployment

The presentation documents de-normalization, Gaussian noise, and contrast enhancement as post-processing steps.

The Flask interface allows a user to upload an image and view the original and transformed outputs. The application requires `genM.pth.tar`, but that weights file is absent from the public repository; the linked code is therefore not reproducible as published. The presentation also shows an interface intended to accept images or video.

- [TODO: Confirm whether video transformation was fully implemented or only demonstrated as interface scope]
- [TODO: Confirm whether the Flask application was publicly hosted or only run locally]
- [TODO: Publish the required model weights or document a reproducible way to obtain them]

## Results

The available examples show the complete qualitative path from a landscape photograph to a Monet-style output.

The team's evaluation was intentionally mixed:

- **Stronger results:** Landscape scenes visually similar to the target training domain.
- **Weaker results:** Frames containing unfamiliar objects or scene structures.
- **Product limitation:** The delivered model supports one style rather than allowing users to choose among multiple artistic domains.

No quantitative image-quality or user-study metric is currently documented, so the portfolio should present these as qualitative observations rather than measured performance.

## What the project demonstrated

- A full path from data preparation to model inference.
- Practical use of CycleGAN for unpaired style translation.
- Qualitative evaluation that includes visible failure cases.
- Integration of trained model inference into a Flask upload workflow.

## Future improvements

- Expand the dataset and training resources.
- Add more artistic domains and selectable styles.
- Compare alternative image-translation architectures.
- Define reproducible evaluation criteria for content preservation and style transfer.

## Media and document plan

- **Original image:** `original-frame0028.png`
- **Generated result:** `frame_0001.png`
- **Presentation source:** `gan-gough-presentation.pdf`
- **Website treatment:** Promote GAN Gogh to a dedicated project page, show the original/result pair, and link the repository.
- **Publication block:** Do not embed the current PDF. Its Samsung template explicitly prohibits reproduction without written consent. Obtain permission or export a clean project-owned presentation before adding a document viewer.

## Confirmation needed

- [TODO: Describe Ahmed's individual contribution]
- [TODO: Confirm the completed training run and resolve the pretrained-weight contradiction]
- [TODO: Confirm the exact deployment status]
- [TODO: Confirm whether video processing was completed]
- [TODO: Obtain publication permission or export a clean project-owned PDF without restricted Samsung template material]
