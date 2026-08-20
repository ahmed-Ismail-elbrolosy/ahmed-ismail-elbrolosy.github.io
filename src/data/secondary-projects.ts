export interface SecondaryProject {
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
  status: 'Ongoing' | 'Completed';
  image?: string;
  imageAlt?: string;
}

export const secondaryProjects: SecondaryProject[] = [
  {
    title: 'Graduation Project — Autonomous Lifting AGV for Warehouse Automation',
    description: 'Autonomous mecanum-wheel AGV for lifting and relocating warehouse racks.',
    category: 'Robotics / Warehouse Automation',
    date: '2026 — Present',
    tags: ['ROS2', 'Mecanum Drive', 'Embedded Systems', 'Autonomous Navigation', 'SolidWorks'],
    status: 'Ongoing',
  },
  {
    title: 'Foldable Magnetic Product Box',
    description: 'Mechanical product design and physical prototyping project.',
    category: 'Product Design',
    date: 'Feb. 2026',
    tags: ['SolidWorks', 'DFM', 'Cardboard Prototyping'],
    status: 'Completed',
  },
  {
    title: 'Autonomous Guided Vehicle (AGV) System',
    description: 'Vision-guided AGV platform with QR-code localization, line tracking, and a 2-DOF robotic arm.',
    category: 'Robotics / Automation',
    date: 'Jan. 2024',
    tags: ['Python', 'Raspberry Pi', 'OpenCV', 'ROS', 'Embedded C'],
    status: 'Completed',
  },
  {
    title: 'AgriBot',
    description: 'Autonomous agricultural robot. Further project details pending.',
    category: 'Robotics / Agriculture',
    date: 'Mar. 2025',
    tags: ['Robotics', 'ROS2'],
    status: 'Completed',
  },
  {
    title: 'GAN Gogh',
    description: 'Neural style-transfer project. Further project details pending.',
    category: 'Machine Learning',
    date: 'Nov. 2024',
    tags: ['Deep Learning'],
    status: 'Completed',
  },
];
