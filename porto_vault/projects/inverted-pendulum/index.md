# Inverted Pendulum Control Study

## Site status

Dedicated project page

## Summary

An ongoing control-systems study built around single, double, and triple inverted pendulums. The project deliberately starts from a well-established benchmark so the work can focus on modeling discipline, controller comparison, and intelligent-control experiments rather than inventing a new plant.

## Project facts

- **Status:** Ongoing
- **Role:** Researcher
- **Simulator:** MuJoCo
- **Completed:** Mechanical simulation models, analytical dynamics, upright linearization, and numerical state-space models
- **Planned:** PID, LQR, fuzzy PID, PPO, ANFIS, and Fuzzy-PPO control studies
- **Date:** [TODO: Add project start date]

The simulator rationale, controller roadmap, mixed-angle objectives, and robustness scope below come from the researcher's project notes. The supplied PDF and renders currently substantiate the modeling stage only.

## Why an established benchmark

The inverted pendulum was chosen because it has a large body of existing theory, implementations, and comparison points. That support is an advantage: the project can reproduce known baselines before asking harder questions.

The progression from one to three links increases the coupling and instability while preserving a common experimental structure.

## Choosing the simulation environment

**MuJoCo** was selected as the common environment for classical and learning-based control experiments.

- **Isaac Sim was rejected** because the available machine could not support it and it offered no clear advantage for this study.
- **Simulink Multibody was not selected** because the project needs one environment that can support both conventional controllers and later intelligent-control experiments consistently.
- **MuJoCo provides** a focused rigid-body simulation environment without adding unrelated platform complexity.

This was a scope decision, not a claim that one simulator is universally superior.

## Completed modeling work

The project currently includes cart-mounted models for:

- A single inverted pendulum.
- A double serial inverted pendulum.
- A triple serial inverted pendulum.

The supplied mathematical report documents:

- Generalized coordinates for an arbitrary number of links.
- Link center-of-mass kinematics.
- Kinetic and potential energy.
- Euler-Lagrange equations.
- Nonlinear mechanical form.
- Linearization around the all-upright equilibrium.
- Continuous-time state-space models for one, two, and three links.

The full derivation should be embedded as a PDF on the website rather than rewritten as a long page of equations.

## Current assumptions

The documented model uses:

- Planar motion in the vertical plane.
- Rigid links and clearance-free joints.
- Horizontal cart force as the input.
- Absolute link angles measured from the upward vertical.
- Linearization around the all-upright equilibrium.
- Zero numerical damping and friction in the current state-space matrices.

The report derives the equations, but no supplied artifact yet validates analytical trajectories against MuJoCo.

## Planned control progression

The planned comparison follows increasing methodological complexity:

1. **PID and LQR** as conventional baselines.
2. **Fuzzy PID** as a rule-based extension.
3. **PPO** for reinforcement-learning control.
4. **ANFIS and Fuzzy-PPO** as later neuro-fuzzy and hybrid investigations.

These are research goals, not completed results.

The intended controller objectives include cart-position regulation and link-angle control. For the double pendulum, the broader scope also considers combinations where each absolute link angle is either zero or pi. The current linear model only covers the all-zero upright operating point, so other configurations require separate treatment.

## Robustness question

A later phase will evaluate controllers under variable damping and friction. The current numerical matrices set both effects to zero; no robustness result should be claimed until ranges, experiments, and comparison criteria are defined.

## Evidence and validation plan

- Compare analytical accelerations or trajectories with MuJoCo.
- Record initial conditions, solver settings, constraints, and input signals.
- Evaluate each controller under the same starting conditions.
- Report angle response, cart position, control effort, settling time, overshoot, and failure cases.
- Keep swing-up, upright stabilization, and mixed zero/pi configurations as separate tasks.

## Media and document plan

- **Single pendulum:** `single_iso.png`
- **Double pendulum:** `double_front.png` and `double_iso.png`
- **Triple pendulum:** `triple_iso.png`
- **Mathematical model:** `sys_modeling.pdf`
- **Website treatment:** Use the renders as system evidence and embed the PDF with an accessible open/download fallback.

## Confirmation needed

- [TODO: Add the project start date]
- [TODO: Add the MuJoCo version and model-source location]
- [TODO: Confirm whether any controller implementations already exist outside this folder]
- [TODO: Define cart travel and actuator-force limits]
- [TODO: Define damping and friction ranges for robustness tests]
- [TODO: Add simulation videos, response plots, and controller results only after validation]
