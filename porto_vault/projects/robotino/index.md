# Robotino

## Site status

Dedicated project page

## Summary

A Mobile Robots course project that built a Robotino-like omnidirectional platform from the ground up, joining custom wheel fabrication, wireless micro-ROS teleoperation, camera localization, inverse kinematics, and global-frame control.
## Date

January 2026

## Role

Mechanical, embedded, and software development

## Technologies

SolidWorks, 3D printing, silicone molding, inverse kinematics, ESP32, micro-ROS, OpenCV, ArUco

## Overview

Robotino is a three-wheel omnidirectional mobile robot developed through mechanical fabrication, embedded integration, visual localization, and frame-aware motion control.

## Kinematics and mechanical design

The frame was 3D printed. The team formed the wheel rollers from a molded silicone mix, then assembled the custom omnidirectional wheels around the three-wheel platform.

## Embedded and perception stack

An ESP32 running micro-ROS connected the platform wirelessly to the ROS system for teleoperation. Wheel encoders were outside the available budget, so the team used camera-based localization instead.

## Simulation and integration

Two ArUco markers defined a global frame in the camera view, allowing changes in camera position and angle to be compensated. A third marker mounted on the robot exposed its pose within that frame. A control node used inverse kinematics to assign motor direction and power from commands expressed in the global frame rather than the vehicle frame.

## Notes for website update

Use the supplied fabrication, wheel, URDF, localization, and teleoperation media. Quantitative localization accuracy, control error, latency, and repeatability remain to be documented.
