# Self-Balancing Robot and PID Control

## Site status

Dedicated project page

## Summary

A **Control II course project** that applied feedback-control concepts to a physical self-balancing robot. The team reached a qualitatively acceptable balancing result, but the final prototype also exposed how motor response, sensor architecture, and project scope can limit controller performance.

## Project facts

- **Date:** January 2026
- **Type:** Control II course project
- **Team role:** Team member
- **Individual contribution:** [TODO: Describe Ahmed's responsibilities]
- **Confirmed method:** PID control
- **Available evidence:** Plant-modeling report and final prototype video

The course context, use of PID, interpretation of the final behavior, and unfinished scope below come from the project owner's notes. The supplied PDF documents the plant model, not the controller implementation.

## Why this system

A self-balancing robot makes integration errors visible. Mechanical alignment, motor response, angle estimation, loop timing, and controller tuning all appear in the same physical motion.

The team selected the platform to move beyond a purely analytical exercise and apply course concepts to an unstable real system.

## Modeling the plant

The supplied report develops a linearized state-space model of the robot around the upright equilibrium. It documents:

- Body and wheel masses.
- Wheel radius and center-of-mass assumptions.
- Pitch-inertia calculation.
- Continuous-time state-space matrices.

The full derivation should be presented through the original PDF rather than duplicated in the portfolio narrative.

The component table implies a center-of-mass height that differs from the value used in the report's final calculation.

- [TODO: Reconcile the center-of-mass value before describing the model as validated]
- [TODO: Define the state vector, input variable, units, and modeling assumptions]
- [TODO: Document how the physical parameters were measured]

## Controller implementation

The project notes state that the team implemented PID control to stabilize the physical prototype. The available materials do not yet preserve the controller gains, tuning sequence, filtering method, loop frequency, or actuator limits.

- [TODO: Add PID gains and tuning method]
- [TODO: Add control-loop frequency and measured latency]
- [TODO: Identify the MCU, IMU, motors, motor driver, and power source]
- [TODO: Explain angle estimation, filtering, saturation, and anti-windup]

## What the final video reveals

The available video shows the completed prototype remaining approximately upright while exhibiting visible stationary jitter. This is useful qualitative evidence, but it does not establish settling time, steady-state error, disturbance rejection, or a maximum recoverable angle.

The team associated the jitter with motor selection and motor response. That remains an engineering diagnosis to verify rather than a measured conclusion; timing, sensor noise, mechanical backlash, and tuning may also contribute.

## Scope decisions

The original concept expanded beyond balancing:

- Combine an **IMU** and **ultrasonic sensor** in a broader sensing architecture.
- Add obstacle avoidance.
- Explore LQR control.

Deadline pressure prevented the team from completing that expanded scope. The final lesson was not that those ideas lacked value, but that they distracted from validating the unstable core system first.

## Lessons learned

- Select motors for dynamic response and controllability, not nominal torque alone.
- Isolate hardware limitations before interpreting controller behavior.
- Stabilize and measure the core feedback loop before adding perception or autonomy.
- Keep course-project scope aligned with the available integration and testing time.

## Media and document plan

- **Final video:** `WhatsApp Video 2026-08-21 at 07.37.43.mp4`
- **Modeling document:** `Control_Project_modeling.pdf`
- **Website treatment:** Embed the PDF with an accessible open/download fallback.
- **Video caption:** Describe it as a qualitative final demonstration, not a quantitative benchmark.

## Confirmation needed

- [TODO: Confirm Ahmed's individual contribution]
- [TODO: Confirm the project completion date and the video's recording date]
- [TODO: Confirm whether the visible cable supplied power, programming, or telemetry]
- [TODO: Confirm the hardware list and PID implementation details]
- [TODO: Provide logs or plots before publishing quantitative control claims]
