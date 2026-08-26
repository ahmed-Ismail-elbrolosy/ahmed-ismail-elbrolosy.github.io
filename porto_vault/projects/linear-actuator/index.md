# Linear Actuator Reverse Engineering and Control

## Site status

> remove it completly from the portofolio not my proudest

## Summary

Reverse engineering and PD control of an old linear actuator using LabVIEW and reed-switch rotation feedback.
## Date

To be documented

## Role

To be documented

## Technologies

LabVIEW, PD control, reed-switch feedback

## Overview

A reed-switch encoder counted motor rotations. LabVIEW compared the accumulated feedback with the requested target and drove the actuator from the resulting error, forming a negative-feedback position loop.

## Characterization and control

The controller used the proportional and derivative terms of a PID structure. Integral action was unnecessary for this application, so the implemented controller remained PD rather than adding complexity without a demonstrated need.

## Notes for website update

The supplied report may be used as supporting documentation. Do not publish numerical performance claims until the corresponding measurements and plots are independently verified.
