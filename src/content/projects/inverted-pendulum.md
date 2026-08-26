---
order: 3
title: Inverted Pendulum Control Study
navTitle: Inverted Pendulum
previewTitle: Inverted Pendulum
description: I am using a familiar control benchmark to build verified single-, double-, and triple-link models before comparing classical, fuzzy, and learning-based controllers.
category: Control / Research
featured: false
year: Present
type: Ongoing research project
role: Researcher
stack: [MuJoCo, Dynamics, State-Space Modeling, Control Theory]
heroMedia:
  type: image
  src: project-assets/inverted-pendulum/double_iso.png
  alt: Double inverted pendulum model displayed in MuJoCo
  label: Double-pendulum MuJoCo model
  caption: One of three cart-pendulum configurations prepared for the control study.
sections:
  - title: Start Where the Theory Is Strong
    description: The inverted pendulum was chosen because existing theory and implementations provide baselines to reproduce rather than a wheel to reinvent.
    body:
      - >-
        The progression from one link to three increases coupling and instability while preserving a common experimental structure. This keeps the research question focused on modeling discipline and controller behavior instead of novelty in the plant itself.
      - >-
        Reproducing established baselines is the first gate. More advanced methods only become meaningful after the underlying models and comparison protocol agree.
    media:
      - type: image
        src: project-assets/inverted-pendulum/single_iso.png
        alt: Single inverted pendulum cart model
        label: Single-link baseline
        caption: The least coupled model establishes the first analytical and simulation comparison point.
  - title: One Environment for the Whole Progression
    description: MuJoCo keeps classical and learning-based experiments in one rigid-body simulation environment without adding platform complexity the study does not need.
    body:
      - >-
        Isaac Sim was rejected because the available machine could not support it and it offered no clear advantage for this project. Simulink Multibody was not selected because later learning-based methods also need to operate under the same simulation assumptions.
      - >-
        This is a scope decision, not a universal simulator ranking. MuJoCo is the smallest environment that supports the planned comparison consistently.
    media:
      - type: image
        src: project-assets/inverted-pendulum/triple_iso.png
        alt: Triple inverted pendulum cart model
        label: Triple-link model
        caption: The third link extends the same plant family into a more strongly coupled configuration.
  - title: The Modeling Stage Is Complete
    description: The current record derives nonlinear dynamics and upright linearizations for cart-mounted systems with one, two, and three serial links.
    body:
      - >-
        The derivation covers generalized coordinates, center-of-mass kinematics, energy terms, Euler-Lagrange equations, nonlinear mechanical form, and continuous-time state-space models around the all-upright equilibrium.
      - >-
        The numerical matrices currently use zero damping and friction. Analytical-to-MuJoCo trajectory validation has not yet been attached, so the work is presented as completed modeling rather than validated control performance.
    media:
      - type: document
        src: project-assets/inverted-pendulum/sys_modeling.pdf
        label: Single-to-triple pendulum model
        caption: Original mathematical derivation and numerical state-space record for the three configurations.
  - title: Controllers Are the Next Experiment
    description: PID and LQR will establish conventional baselines before fuzzy PID, PPO, ANFIS, and Fuzzy-PPO are evaluated under the same conditions.
    body:
      - >-
        The planned controller ladder moves from standard feedback methods toward rule-based, reinforcement-learning, and neuro-fuzzy approaches. None of those methods is presented as a completed result yet.
      - >-
        Future comparisons must report the same initial conditions, angle and cart responses, control effort, settling behavior, and failure cases. Mixed zero-or-pi link targets and variable damping or friction require separate operating points and test definitions.
---
