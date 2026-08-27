export interface Experience {
  org: string;
  role: string;
  location?: string;
  period: string;
  type: string;
  bullets: string[];
  tags: string[];
  pending?: boolean;
  logo?: string;
  logoAlt?: string;
}

export const personal = {
  name: 'Ahmed Ismail Elbrolosy',
  displayName: 'Ahmed Elbrolosy',
  location: 'Alexandria, Egypt',
  phone: '+20 155 200 5007',
  email: 'ahmedismailahmed2004@gmail.com',
  academicEmail: 'ahmed.elbrolosy@ejust.edu.eg',
  linkedin: 'https://linkedin.com/in/ahmed-ismail-elbrolosy',
  github: 'https://github.com/ahmed-Ismail-elbrolosy',
};

export const education = {
  institution: 'Egypt Japan University of Science and Technology (EJUST)',
  location: 'Burj El-Arab, Alexandria',
  degree: 'Bachelor of Engineering in Mechatronics and Robotics',
  gpa: '3.54 / 4.0',
  period: 'Oct. 2022 — Feb. 2027',
  year: '4th year',
  expectedGraduation: 'Feb. 2027',
};

export const experiences: Experience[] = [
  {
    org: 'Nokia x ODC',
    role: 'Trainee — Network Infrastructure & Industrial AI',
    location: 'Hybrid',
    period: 'Aug. 3 — Sep. 7, 2026',
    type: 'Experience',
    bullets: [
      'Completed a multi-phase technical program covering advanced 5G network infrastructure, RAN/core architecture, and M2M communication protocols.',
      'Analyzed industrial data analytics and AI integration strategies for network performance optimization and automated fault detection.',
      'Participated in cross-functional deployment exercises spanning network planning, site engineering, and system-level integration.',
    ],
    tags: ['5G', 'Network Architecture', 'Industrial AI', 'M2M', 'Data Analytics'],
    logo: '/images/companies/nokia-odc.webp',
    logoAlt: 'Nokia and Orange Digital Center',
  },
  {
    org: 'Trophy Technologies',
    role: 'Embedded & Electronics R&D Engineer',
    period: 'Jul. 20 — Aug. 23, 2026',
    type: 'Internship',
    bullets: [
      'Designed and prototyped an ESP32-based vehicle control unit handling lock actuation, speed regulation, and operating-mode transitions over Bluetooth and cellular links.',
      'Implemented geofenced and time-scheduled operational constraints with GPS telemetry acquisition and real-time state reporting.',
      'Integrated power decoupling, peripheral arbitration, and edge communication firmware for a field-deployable IoT product.',
    ],
    tags: ['Embedded C/C++', 'ESP32', 'Bluetooth', 'MQTT', 'GPS Telemetry', 'R&D'],
    logo: '/images/companies/trophy-technologies.webp',
    logoAlt: 'Trophy Technologies',
  },
  {
    org: 'ROV Team',
    role: 'Software Team Member (VSLAM and Simulation)',
    location: 'EJUST, Alexandria',
    period: 'Oct. 2025 — Present',
    type: 'Research team',
    bullets: [
      'Developing an RTAB-Map pipeline for closed-loop underwater reconstruction and dimensional comparison against a reference scene.',
      'Converted mechanical assemblies into URDF models for ROS 2 and Gazebo simulation.',
      'Integrated ROS 2 autonomy components with embedded vehicle interfaces.',
    ],
    tags: ['ROS2', 'SLAM', 'RTAB-Map', 'Gazebo', 'Embedded'],
    logo: '/images/companies/ejust-robotics.webp',
    logoAlt: 'EJUST Robotics Club',
  },
  {
    org: 'Self-Employed',
    role: 'Freelance Academic Instructor',
    location: 'Online',
    period: '2024 — Present',
    type: 'Freelance',
    bullets: [
      'Deliver online tutoring in Physics, Digital Logic, Mathematics, and Engineering Mechanics to university students.',
      'Adapt explanations and pacing for one-on-one and small-group sessions.',
    ],
    tags: ['Teaching', 'Physics', 'Digital Logic', 'Mathematics', 'Mechanics'],
  },
  {
    org: 'Alexandria Development Authority',
    role: 'Mechanical Engineer — Firefighting & HVAC',
    location: 'Alexandria, Egypt',
    period: 'Jul. 2025 — Aug. 2025',
    type: 'Internship',
    bullets: [
      'Supported design and site review of firefighting suppression systems and HVAC installations.',
      'Reviewed mechanical drawings and coordinated with site engineers on system compliance.',
    ],
    tags: ['HVAC', 'Firefighting', 'Construction', 'MEP'],
    logo: '/images/companies/acon.webp',
    logoAlt: 'A.CON',
  },
  {
    org: 'Samsung Innovation Campus (SIC)',
    role: 'AI/ML Training Program — Deep Learning Track',
    location: 'Remote',
    period: 'Sep. 2024 — Nov. 2024',
    type: 'Training',
    bullets: [
      'Completed a structured curriculum progressing from classical machine learning and feature engineering through convolutional neural architectures to deep generative models.',
      'Implemented CNN-based image classification pipelines (AlexNet, custom architectures) with systematic hyperparameter evaluation on benchmark datasets.',
      'Delivered a capstone project (GAN-Gogh) applying CycleGAN adversarial training for unpaired image-to-image translation, addressing cycle-consistency loss formulation and training stability.',
    ],
    tags: ['Deep Learning', 'CNN', 'GAN', 'CycleGAN', 'PyTorch'],
    logo: '/images/companies/samsung-innovation-campus.webp',
    logoAlt: 'Samsung Innovation Campus and Life Makers Egypt',
  },
  {
    org: 'Tech Maker (ITIDA EME)',
    role: 'Mechatronics & Embedded Systems Intern',
    location: 'Onsite',
    period: 'Sep. 2024 — Nov. 2024',
    type: 'Internship',
    bullets: [
      'Designed and fabricated multi-layer PCBs using Altium Designer, from schematic capture through assembly and testing.',
      'Developed a BMS prototype using Arduino and ESP32 with MQTT and HTTP monitoring.',
      'Built IoT prototypes using I2C, SPI, UART, and Bluetooth communication.',
    ],
    tags: ['Altium Designer', 'PCB', 'ESP32', 'Arduino', 'MQTT', 'BMS'],
    logo: '/images/companies/eme-itida.webp',
    logoAlt: 'Egypt Makes Electronics Innovation Hub',
  },
  {
    org: 'Digital Egypt Pioneer Initiative (DEPI)',
    role: 'Data Engineer Trainee',
    location: 'Hybrid',
    period: 'Apr. 2024 — Oct. 2024',
    type: 'Training',
    bullets: [
      'Built SQL and data pipeline work using Azure Databricks and Apache Spark.',
      'Integrated MLflow for experiment tracking and model versioning.',
    ],
    tags: ['SQL', 'Azure Databricks', 'Apache Spark', 'MLflow'],
    logo: '/images/companies/depi.webp',
    logoAlt: 'Digital Egypt Pioneers Initiative (DEPI)',
  },
  {
    org: 'Orascom Construction',
    role: 'Mechanical & Electrical Construction Engineer (Rotational Trainee)',
    location: 'Egypt',
    period: 'Jul. 2024',
    type: 'Internship',
    bullets: [
      'Completed a cross-functional rotation on the Cairo Monorail Mega Project covering electrical power systems, mechanical infrastructure, project management, and site safety.',
      'Participated in mechanical and electrical installation inspections under active construction conditions for urban transit infrastructure.',
    ],
    tags: ['Mechanical', 'Electrical', 'Monorail Transit', 'MEP', 'Infrastructure'],
    logo: '/images/companies/orascom.webp',
    logoAlt: 'Orascom Construction Industries',
  },
];

export interface SkillTool {
  name: string;
  icon?: string;
  iconText?: string;
  description: string;
}

export interface SkillGroup {
  tools: SkillTool[];
  tags: string[];
}

export const skills: Record<string, SkillGroup> = {
  'Robotics & AI': {
    tools: [
      { name: 'ROS 2', icon: 'images/skills/ros2.svg', description: 'Robot middleware' },
      { name: 'OpenCV', icon: 'images/skills/opencv.svg', description: 'Computer vision' },
    ],
    tags: ['Nav2', 'VSLAM', 'SLAM', 'RTAB-Map', 'MoveIt2', 'YOLO'],
  },
  'Mechanical & CAD': {
    tools: [
      { name: 'SolidWorks', icon: 'images/skills/solidworks.svg', description: 'CAD and assemblies' },
      { name: 'Altium Designer', iconText: 'AD', description: 'PCB design' },
    ],
    tags: ['CSWP', 'FEA', 'GD&T', 'DFM', '3D Printing', 'Mechanism Design', 'Kinematics'],
  },
  Programming: {
    tools: [
      { name: 'Python', icon: 'images/skills/python.svg', description: 'Automation and robotics' },
      { name: 'Git', icon: 'images/skills/git.svg', description: 'Version control' },
      { name: 'MATLAB / Simulink', icon: 'images/skills/matlab.svg', description: 'Modeling and simulation' },
      { name: 'Linux', icon: 'images/skills/linux.svg', description: 'Development environment' },
    ],
    tags: ['Embedded C/C++', 'SQL'],
  },
  'Embedded Systems': {
    tools: [
      { name: 'Arduino', icon: 'images/skills/arduino.svg', description: 'Rapid prototyping' },
      { name: 'ESP32', icon: 'images/skills/esp32.svg', description: 'Wireless embedded systems' },
      { name: 'STM32', icon: 'images/skills/stm32.svg', description: 'MCU development' },
      { name: 'FreeRTOS', iconText: 'RTOS', description: 'Real-time scheduling' },
      { name: 'micro-ROS', icon: 'images/skills/micro-ros.svg', description: 'ROS on microcontrollers' },
    ],
    tags: ['MQTT', 'I2C', 'SPI', 'UART', 'BMS Design', 'Real-Time Systems', 'Sensor Fusion'],
  },
  // 'MEP & Site Engineering': {
  //   tools: [],
  //   tags: ['HVAC Systems', 'Firefighting Systems', 'Plumbing', 'MEP Coordination', 'Site Engineering', 'Construction Safety'],
  // },
};
