---
order: 3
title: "TIP: Triple Inverted Pendulum"
navTitle: Inverted Pendulum
previewTitle: TIP
description: "Euler-Lagrange dynamics derivation, state-space linearization, and feedback stabilization of single-, double-, and triple-link cart-pendulum systems in MuJoCo."
category: Control Theory / Research
featured: true
year: Present
type: Ongoing research project
role: Sole Researcher — Analytical Derivation, Controller Synthesis, Simulation Validation
stack: [MuJoCo, Euler-Lagrange Dynamics, State-Space Modeling, LQR, PID, Control Theory, Python]
heroMedia:
  type: image
  src: project-assets/inverted-pendulum/triple_iso.png
  alt: Triple inverted pendulum cart model in MuJoCo
  label: Triple-link MuJoCo plant
  caption: The triple-link configuration defining the active research frontier for multi-variable nonlinear control.
sections:
  - title: Research Objective & Problem Formulation
    description: Derive, linearize, and stabilize progressively coupled inverted pendulum systems as a benchmark for comparing classical, optimal, and learning-based control strategies.
    body:
      - "The cart-pendulum family provides an under-actuated, inherently unstable nonlinear system whose dimensionality scales with each added link. A single cart-force input must stabilize 2n coupled state variables (n link angles and angular velocities), making the problem increasingly demanding for feedback controller design."
      - "The research proceeds in three stages: (1) analytical derivation and numerical verification of the nonlinear and linearized plant models, (2) classical and optimal feedback controller synthesis (PID, LQR) with simulation validation, and (3) planned extensions to reinforcement learning (PPO) and neuro-fuzzy control on the triple-link configuration."
  - title: Analytical Dynamics & State-Space Modeling
    description: Generalized Euler-Lagrange equations yield the nonlinear equations of motion, which are then linearized about the all-upright equilibrium for state-feedback controller design.
    body:
      - "Center-of-mass kinematics, kinetic energy, and gravitational potential energy are formulated in generalized coordinates (cart position plus absolute link angles from the vertical). The Euler-Lagrange equations produce the full nonlinear M(q)q̈ + C(q,q̇)q̇ + G(q) = Bu dynamics for each configuration."
      - "Jacobian linearization about the unstable upright equilibrium (all angles = 0) yields the continuous-time state-space representation ẋ = Ax + Bu. The A and B matrices are computed symbolically and verified numerically for the single-, double-, and triple-link plants."
      - "MuJoCo rigid-body models share identical generalized coordinates, link masses, lengths, and inertia parameters with the analytical derivation, enabling direct comparison of simulated and predicted behavior."
    media:
      - type: image
        src: project-assets/inverted-pendulum/single_iso.png
        alt: Single inverted pendulum cart model
        label: Single-link plant
        caption: Baseline 2-state plant for analytical-to-simulation comparison.
      - type: image
        src: project-assets/inverted-pendulum/double_iso.png
        alt: Double inverted pendulum cart model
        label: Double-link plant
        caption: Four coupled state variables used for multi-variable state-feedback controller validation.
  - title: Controller Synthesis & Simulation Validation
    description: PID and LQR controllers stabilize the single- and double-link configurations; the triple-link plant defines the current research frontier.
    body:
      - "For the single-link system, a digital PID controller regulates the cart force to maintain upright equilibrium. Gain tuning follows linearized root-locus analysis, with closed-loop pole placement verified against the MuJoCo step response."
      - "For the double-link system, full-state feedback via LQR provides stabilization. The Q and R weight matrices are tuned to balance link-angle regulation against cart-force expenditure, and the resulting gain vector K is validated through initial-condition perturbation tests in MuJoCo."
      - "The triple-link configuration is the active research target. Its 6×6 linearized dynamics present significantly tighter controllability margins, and ongoing work investigates LQR pole sensitivity, swing-up trajectory optimization, and disturbance rejection under variable joint damping."
  - title: Completed Results & Ongoing Experiments
    description: Classical controllers stabilize single and double pendulums in simulation. Triple-link stabilization, PPO, and neuro-fuzzy comparisons are in progress.
    body:
      - "Single-link PID and double-link LQR controllers achieve sustained upright stabilization from initial angular perturbations in MuJoCo, confirming consistency between the analytical linearization and the rigid-body simulation."
      - "Planned extensions: triple-link LQR/MPC stabilization with formal controllability verification, PPO reinforcement learning for swing-up and stabilization, and neuro-fuzzy control for robustness comparison across the three plant complexities."
  - title: Documentation & Publication Plan
    description: The analytical modeling report is complete. Controller code and simulation results target a structured technical publication.
    body:
      - "The modeling report documents the generalized Euler-Lagrange derivation, linearization procedure, and numerical state-space matrices for all three configurations."
      - "Public release of MuJoCo model files, controller source, and quantitative comparison data is planned alongside a technical report comparing classical, optimal, and learning-based control performance."
    media:
      - type: document
        src: project-assets/inverted-pendulum/sys_modeling.pdf
        label: System modeling report
        caption: Euler-Lagrange derivation and state-space matrices for single-, double-, and triple-link configurations.
---
