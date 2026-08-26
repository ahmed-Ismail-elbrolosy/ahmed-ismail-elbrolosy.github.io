---
order: 3
title: Inverted Pendulum Control Study
navTitle: Inverted Pendulum
previewTitle: Inverted Pendulum
description: A MuJoCo study deriving and validating one-, two-, and three-link cart-pendulum models before controller comparison.
category: Control / Research
featured: false
year: Present
type: Ongoing research project
role: Researcher
stack: [MuJoCo, Euler-Lagrange Dynamics, Linearization, State-Space Modeling, Control Theory]
heroMedia:
  type: image
  src: project-assets/inverted-pendulum/double_iso.png
  alt: Double inverted pendulum model in MuJoCo
  label: Double-link MuJoCo plant
  caption: The middle plant in a common one-, two-, and three-link modeling progression.
sections:
  - title: Core Objective & Constraints
    description: Reproduce a well-understood unstable benchmark before comparing classical, fuzzy, reinforcement-learning, and neuro-fuzzy control methods.
    body:
      - The plant family preserves a common cart-force input while increasing dynamic coupling from one to three serial links. Established theory provides comparison points and reduces ambiguity in the model itself.
      - Current scope covers planar rigid links, clearance-free joints, absolute angles from the upward vertical, and linearization at the all-upright equilibrium. Cart travel and actuator-force limits are not yet defined.
  - title: System Architecture & Schematics
    description: Analytical models and MuJoCo plants share generalized coordinates, physical parameters, initial conditions, and input definitions.
    body:
      - The derivation records center-of-mass kinematics, kinetic and potential energy, Euler-Lagrange equations, nonlinear mechanical form, upright linearization, and continuous-time state-space matrices.
      - MuJoCo was selected as one rigid-body environment for both conventional and learning-based control. Isaac Sim exceeded available hardware needs; Simulink Multibody would split the later experiment stack.
    media:
      - type: image
        src: project-assets/inverted-pendulum/single_iso.png
        alt: Single inverted pendulum cart model
        label: Single-link plant
        caption: Baseline plant for the first analytical-to-simulation comparison.
      - type: image
        src: project-assets/inverted-pendulum/triple_iso.png
        alt: Triple inverted pendulum cart model
        label: Triple-link plant
        caption: The most strongly coupled configuration in the current model set.
  - title: Control, Algorithm, or Mechanical Implementation
    description: Modeling is complete; controller implementation follows a gated progression from reproducible baselines to experimental methods.
    body:
      - PID and LQR form the conventional baseline. Planned extensions are fuzzy PID, PPO, ANFIS, and Fuzzy-PPO, all evaluated under the same plant and initial-condition protocol.
      - Mixed zero-or-pi link targets, swing-up, upright stabilization, and robustness to damping or friction are separate tasks. The current all-upright linear model cannot be reused as evidence for every operating point.
  - title: Quantitative Results & Failure Modes
    description: State-space models exist for all three plants, but trajectory agreement and controller benchmarks have not yet been demonstrated.
    body:
      - Current numerical matrices set damping and friction to zero. No settling time, overshoot, angle error, cart-position error, control effort, or success rate is published before analytical trajectories agree with MuJoCo under recorded solver settings.
      - Each controller test will report initial conditions, angle and cart responses, control effort, settling behavior, constraint violations, and failure cases. Robustness claims require explicit damping and friction ranges.
  - title: Code, CAD & Documentation Links
    description: The mathematical report is the primary completed artifact for this stage.
    body:
      - The report contains the generalized derivation, assumptions, linearization, and numerical state-space records for one, two, and three links.
      - MuJoCo model sources and controller code are not yet linked publicly; publication follows analytical-to-simulation validation.
    media:
      - type: document
        src: project-assets/inverted-pendulum/sys_modeling.pdf
        label: Pendulum modeling report
        caption: Mathematical derivation and numerical state-space models for the three configurations.
---
