# Rocker-Bogie Rover

## Site status

Dedicated project page

## Summary

A five-person **MTE 321 Project-Based Learning** team developed a six-wheel rocker-bogie rover for a stair-climbing competition. The team moved from linkage design and a **SolidWorks Motion Study** to a PVC prototype, then tested the physical mechanism on stairs and an incline.

## Project facts

- **Date:** May 2025
- **Type:** School robotics project
- **Team:** Five students
- **Role:** I helped in Solidworks simulation and analysis then the final electric circuit and assembly
- **Technologies:** SolidWorks, Motion Study, PVC fabrication, servo actuation, ESP8266, differential steering

## The challenge

The project began with a mechanical question: could an articulated six-wheel frame negotiate repeated height changes without a conventional sprung suspension?

The rocker-bogie geometry was central to the answer. Each link affected the posture and wheel contact of the remaining structure, so the team first used CAD to examine articulation before committing to a physical build.

## From CAD to hardware

The SolidWorks motion study provided a qualitative check of linkage motion over separated obstacles. It helped the team inspect the mechanism before fabrication, but it did not prove that the rover would retain traction or survive impacts on physical terrain.

The prototype introduced constraints that the animation could not settle:

- **Structure:** The team built a lightweight frame from PVC pipe and reinforced loaded joints.
- **Actuation:** Six wheel-mounted servo motors drove the rover.
- **Mechanical interfaces:** Custom adapters connected the wheels to the servo horns.
- **Iteration:** The team revised the wheel selection after smaller wheels failed to provide sufficient clearance; the final wheels were 13 cm in diameter.
- **Power:** A buck converter regulated the servo supply.
- **Control:** An ESP8266 provided the wireless interface and differential-steering commands.
## Physical testing

The physical tests were the decisive stage because they exposed contact, traction, frame flex, and synchronization as coupled problems.

### Stair ascent and descent

The available videos show the rover traversing a stair sequence in both directions. These clips provide qualitative evidence of the articulated frame responding to repeated edges and changing body attitude.

- **Stair ascent:** `Stair climbing up.mp4`
- **Stair descent:** `Stair climbing down.mp4`
- **Website layout:** Present both videos side by side.

### Ramp traversal

The incline run provided a simpler baseline before the discontinuous geometry of the stairs.

- **Ramp test:** `Moving on a ramp.mp4`
- **Website layout:** Present separately after the stair comparison.

The videos document successful recorded runs. They do not independently verify obstacle dimensions, incline angle, traversal time, or repeatability.

## Outcome and lessons

The project produced a working physical rover and demonstrated the value of testing a mechanism beyond its CAD animation.

Key lessons reported by the team were:

- Reinforce compliant prototype structures at high-load joints.
- Treat servo synchronization as part of mechanical performance.
- Validate wheel clearance on the actual obstacle rather than relying only on nominal geometry.
- Use simulation to prepare physical questions, not replace physical testing.

## Evidence boundaries

The report contains conflicting values for the controller, wheel diameter, ramp angle, stair geometry, and chassis-tilt limits. It also includes simulation and performance claims without the underlying plots or raw measurements.

Until those details are confirmed, the portfolio should use the conservative statements above and present the videos as **qualitative traversal evidence**.

## Media for the website

- Hero candidate: `WhatsApp Image 2026-08-14 at 4.09.40 PM (1).jpeg`
- Linkage or fabrication detail: select from the remaining three photographs.
- CAD evidence: `Simulation with motion study.mp4`
- Physical evidence: stair ascent and descent side by side, followed by the ramp video.
- **Do not publish, link, or embed `PBL_Report.pdf`.** Use it only as an internal source.

## Confirmation needed

- [x] Individual contribution recorded in the project facts.
- [x] Final controller confirmed as ESP8266 with differential steering.
- [x] Final wheel diameter confirmed as 13 cm.
- [x] The three supplied physical videos are approved as qualitative product evidence.
- [ ] Exact stair geometry and ramp angle remain unpublished; “almost 20 cm” does not identify a specific dimension.
- [ ] Timing and repeatability are not project claims and should not be inferred from the prototype videos.
