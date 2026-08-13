export interface SecondaryProject {
  title: string;
  description: string;
  date: string;
  tags: string[];
  status: 'Ongoing' | 'Completed';
}

export const secondaryProjects: SecondaryProject[] = [
  {
    title: 'Graduation Project — Autonomous Lifting AGV for Warehouse Automation',
    description: 'Autonomous mecanum-wheel AGV for lifting and relocating warehouse racks.',
    date: '2026 — Present',
    tags: ['ROS2', 'Mecanum Drive', 'Embedded Systems', 'Autonomous Navigation', 'SolidWorks'],
    status: 'Ongoing',
  },
  {
    title: 'Foldable Magnetic Product Box',
    description: 'Mechanical product design and physical prototyping project.',
    date: 'Feb. 2026',
    tags: ['SolidWorks', 'DFM', 'Cardboard Prototyping'],
    status: 'Completed',
  },
  {
    title: '3-Wheeled Mecanum Mobile Robot',
    description: 'Omnidirectional mobile robot developed from kinematics through fabrication and embedded integration.',
    date: 'Jan. 2026',
    tags: ['SolidWorks', 'Kinematics', 'micro-ROS', 'ESP32', 'OpenCV', 'Simulation'],
    status: 'Completed',
  },
  {
    title: 'Autonomous Guided Vehicle (AGV) System',
    description: 'Vision-guided AGV platform with localization, line tracking, and a robotic arm.',
    date: 'Jan. 2024',
    tags: ['Python', 'Raspberry Pi', 'OpenCV', 'ROS', 'Embedded C'],
    status: 'Completed',
  },
  {
    title: 'AgriBot',
    description: 'Autonomous agricultural robot. Further project details pending.',
    date: 'Mar. 2025',
    tags: ['Robotics', 'ROS2'],
    status: 'Completed',
  },
  {
    title: 'GAN Gogh',
    description: 'Neural style transfer project. Further project details pending.',
    date: 'Nov. 2024',
    tags: ['Deep Learning'],
    status: 'Completed',
  },
];
