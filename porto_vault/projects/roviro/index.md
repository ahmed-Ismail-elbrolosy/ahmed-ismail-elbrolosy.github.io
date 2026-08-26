# ROViro

## Site status

Dedicated project page

## Summary

An independent marine-robotics research platform built around Kami, a seven-thruster ROV model, to study simulation, operator interfaces, perception, control, and underwater dimensional reconstruction.

## Date

2025 to present

## Role

Former Software Lead, EJUST Robotics Club; Independent Researcher and Developer

## Project origin

ROViro grew from my work as software lead in the EJUST Robotics Club. I expanded the original team project into a long-term personal research platform to move beyond software integration and study marine dynamics, mechatronic design, control, simulation, and underwater perception as one connected system.

The current vehicle is intentionally useful as a difficult control case. Its mass distribution and thruster placement create a research question: how far can control and allocation compensate for a mechanically inefficient design, and where does redesign remain the better engineering answer? This is a control hypothesis to test, not a claim that software can make every poor mechanical design equivalent to a well-designed vehicle.

## Implemented simulation platform

The current workspace models Kami in ROS 2 and Gazebo with seven thrusters, seven cameras, buoyancy, hydrodynamic drag, IMU data, odometry, grippers, ROS-Gazebo bridges, and ArduSub-oriented control mappings. The platform now targets ROS 2 Lyrical Luth and Gazebo Jetty on Ubuntu 26.04.

The intended physical stereo sensor is a ZED2i. The hardware is currently remote, so development and validation are simulation-first. The simulation pipeline reproduces the intended media topology without claiming that the Gazebo plugin itself is hardware-ready ZED code.

## Camera and operator architecture

I built a custom C++ Gazebo camera plugin that pairs the simulated stereo feeds, packs side-by-side frames, and sends H264 through GStreamer to an embedded RTSP server. MediaMTX can proxy those streams to WebRTC for the Blue Robotics Cockpit interface. The dashboard combines the primary camera with gripper, side, bottom, and rear views plus vehicle telemetry.

Raw ROS image bridges remain available for perception tools, but the operator video path does not rely on ROS image transport. This keeps high-bandwidth viewing traffic outside the main ROS graph while retaining ROS topics when an algorithm needs image data.

## Gazebo, DAVE, and Stonefish research

Gazebo provides the stronger general ROS 2, SDF, plugin, asset, and visualization ecosystem. Its modern buoyancy system computes displaced volume from collision geometry, while its standard marine hydrodynamics normally applies user-supplied six-degree-of-freedom drag and added-mass coefficients. Project DAVE extends the Gazebo ecosystem with underwater scenarios, currents, bathymetry, and specialized marine sensors.

Stonefish takes a more marine-specific approach. It uses physical mesh faces for surface buoyancy and geometry-informed drag, then estimates added mass through fitted primitive approximations. It also integrates underwater optical effects and marine sensors. Neither simulator is CFD, and neither is automatically physically exact. ROViro uses this comparison to study calibration effort, model assumptions, and which simulator best supports each experiment rather than reducing the choice to a claim that one simulator has "real physics."

## Perception and dimensional validation

The original perception mission is to reconstruct an underwater target from stereo images and compare a measured feature against the reference scene. The working validation sequence is: establish the reference distance in Blender, reconstruct the scene with RTAB-Map, inspect the map in RViz, and compare the scanned distance in MeshLab. Until this run is complete, the page presents the workflow as active validation rather than a measured-accuracy result.

## Thruster analysis

Kami exposes seven ROS-to-Gazebo thruster command paths and seven ArduPilot control mappings. A real-time terminal view is being added to inspect per-thruster commands during control experiments. Command visualization must not be described as measured thrust feedback unless a separate feedback signal is implemented and calibrated.

## Technologies

ROS 2 Lyrical Luth, Gazebo Jetty, C++20, Python, URDF/SDF, ros_gz, GStreamer, H264, RTSP, MediaMTX, WebRTC, MAVLink, ArduSub, Blue Robotics Cockpit, RViz, RTAB-Map, Blender, MeshLab, Stonefish

## Media to capture

- Cockpit operator view
- System architecture diagram
- Kami in Gazebo
- Real-time thruster command TUI
- RTAB-Map reconstruction in RViz
- Reference distance in Blender
- Reconstructed distance in MeshLab

## Evidence rule

Replace placeholders only with captures from the working system. Add quantitative mapping or control results only with the corresponding configuration, units, reference measurement, and error calculation.

## Research sources

- [Gazebo Sim Hydrodynamics system](https://gazebosim.org/api/sim/10/classgz_1_1sim_1_1systems_1_1Hydrodynamics.html)
- [Gazebo Sim Buoyancy system](https://gazebosim.org/api/sim/10/classgz_1_1sim_1_1systems_1_1Buoyancy.html)
- [Gazebo and ROS compatibility](https://gazebosim.org/docs/jetty/ros_installation/)
- [Stonefish theory and hydrodynamic approximations](https://github.com/patrykcieslak/stonefish/blob/master/docs/theory.rst)
- [Project DAVE documentation](https://field-robotics-lab.github.io/dave.doc/)
- [ROS 2 Lyrical Luth release](https://docs.ros.org/en/lyrical/Releases/Release-Lyrical-Luth.html)


> new updates 26th august
> after migrating to lyrical luth with jetty, i tried controlling kami with ardusub but i do not know if it is gonna work directly or not because it is unsemmetric and needs more tuning, so to confirm on the vslam and the conventional control stack i use bluerov2_heavy with attaching the same cameras layout and for control i used my phone with controlling it over wifi, because my laptop resources got used that i even dropped the idea of runnign a live vslam (sgm not deep model) i stored a long run then i replayed it with reduced rate so that my laptop can preform better stereo camera pov is 1280*540 i know that is not a standard but i needed it to be wide and i did not need to see every thing in the height actually so i reduced it from 720 to save some resources in the future runs about 25% approx, any way i replay it with 0.3 rate and downscale 2. then i use rerun to view the camera feed and plot the angle change and another for heave, ardusub already has a hold_alt mode and stableizer but that to evaluate my future customized control, also rerun offers a 3d view for the trajectory and the point cloud of the rtab.
> currently i do not have an updated version of the phone control but i will add an older one for now,
> the project folders are there "/home/orca/prjs/ROV/vsim_ws/" so feel free to go there discover the docs and the code to provide a proper and correctly decumented data for the project
> as