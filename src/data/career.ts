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
  linkedin: 'https://linkedin.com/in/ahmed-ismail-elbrolosy',
  github: 'https://github.com/ahmed-Ismail-elbrolosy',
};

export const education = {
  institution: 'Egypt Japan University of Science and Technology (EJUST)',
  location: 'Burj El-Arab, Alexandria',
  degree: 'Bachelor of Engineering in Mechatronics',
  gpa: '3.54 / 4.0',
  period: 'Oct. 2022 — May 2027',
  year: '4th year',
  expectedGraduation: 'May 2027',
};

export const experiences: Experience[] = [
  {
    org: 'Nokia x ODC',
    role: 'Trainee',
    location: 'Hybrid',
    period: 'Aug. 3 — Sep. 7, 2026',
    type: 'Experience',
    bullets: [
      'Completed a multidisciplinary telecommunications program centered on 5G infrastructure and its machine-to-machine focus.',
      'Gained practical understanding of network architecture and communication protocols, including legacy IoT hardware constraints such as 2G modules (SIM800L) and their security implications.',
      'Studied how AI and computer vision are being embedded into industrial infrastructure beyond LLM-based tooling.',
    ],
    tags: ['5G', 'Telecommunications', 'IoT', 'Network Security', 'M2M'],
    logo: '/images/companies/nokia-odc.webp',
    logoAlt: 'Nokia and Orange Digital Center',
  },
  {
    org: 'Trophy Technologies',
    role: 'Embedded & Electronics R&D Engineer',
    period: 'Jul. 20 — Aug. 23, 2026',
    type: 'Internship',
    bullets: [
      'Developed an embedded board for e-scooter control over Bluetooth and internet connectivity, covering lock actuation, speed limiting, and operating-mode switching.',
      'Implemented parental-control features including zonal location restrictions and time-scheduled usage limits.',
      'Worked against real product constraints on 2G connectivity (SIM800L) with unsecured HTTP transport.',
      'Documented R&D progress day by day and practiced technical communication and work presentation within a production-oriented team.',
    ],
    tags: ['Embedded C/C++', 'ESP32', 'Bluetooth', 'MQTT', 'GPS Tracking', 'R&D'],
    logo: '/images/companies/trophy-technologies.webp',
    logoAlt: 'Trophy Technologies',
  },
  {
    org: 'ROV Team',
    role: 'Software Team Lead (VSLAM & Simulation Specialist)',
    location: 'EJUST, Alexandria',
    period: 'Oct. 2025 — Present',
    type: 'Research team',
    bullets: [
      'Developing an RTAB-Map VSLAM pipeline for closed-loop underwater object reconstruction and dimensional validation.',
      'Converted mechanical assemblies to URDF models for ROS2 and Gazebo simulation environments.',
      'Worked across ROS2 autonomy layers and low-level embedded hardware integration.',
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
    role: 'AI/ML Intern',
    location: 'Remote',
    period: 'Sep. 2024 — Nov. 2024',
    type: 'Internship',
    bullets: [
      'Built ML pipelines using AlexNet and custom CNNs for image classification and feature extraction.',
      'Deployed inference models using Flask and Streamlit with RESTful APIs.',
      'Worked on feature engineering and data preprocessing for fashion datasets.',
    ],
    tags: ['PyTorch', 'CNN', 'AlexNet', 'Flask', 'Streamlit'],
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
  },
  {
    org: 'Orascom Construction',
    role: 'Mechanical & Electrical Construction Engineer (Rotational Trainee)',
    location: 'Egypt',
    period: 'Jul. 2024',
    type: 'Internship',
    bullets: [
      'Completed a cross-functional Monorail Project rotation covering electrical, mechanical, project management, and safety departments.',
      'Participated in mechanical and electrical construction training under active site conditions.',
    ],
    tags: ['Mechanical', 'Electrical', 'HVAC', 'MEP', 'Infrastructure'],
    logo: '/images/companies/orascom.webp',
    logoAlt: 'Orascom Construction Industries',
  },
];

export interface SkillTool {
  name: string;
  icon: string;
  description: string;
}

export interface SkillGroup {
  tools: SkillTool[];
  tags: string[];
}

export const skills: Record<string, SkillGroup> = {
  'Robotics & AI': {
    tools: [
      { name: 'ROS2', icon: 'ROS', description: 'Robot middleware' },
      { name: 'PyTorch', icon: 'PT', description: 'Deep learning' },
      { name: 'TensorFlow', icon: 'TF', description: 'ML workflows' },
      { name: 'OpenCV', icon: 'CV', description: 'Computer vision' },
    ],
    tags: ['Nav2', 'VSLAM', 'SLAM', 'RTAB-Map', 'MoveIt2', 'YOLO'],
  },
  'Mechanical & CAD': {
    tools: [
      { name: 'SolidWorks', icon: 'SW', description: 'CAD and assemblies' },
      { name: 'Altium Designer', icon: 'AD', description: 'PCB design' },
    ],
    tags: ['CSWP', 'FEA', 'GD&T', 'DFM', '3D Printing', 'Mechanism Design', 'Kinematics'],
  },
  Programming: {
    tools: [
      { name: 'Python', icon: 'PY', description: 'Automation and robotics' },
      { name: 'Git', icon: 'GIT', description: 'Version control' },
      { name: 'MATLAB / Simulink', icon: 'M', description: 'Modeling and simulation' },
      { name: 'Linux', icon: 'LX', description: 'Development environment' },
      { name: 'Flask', icon: 'FL', description: 'Web APIs' },
      { name: 'Azure Databricks', icon: 'DB', description: 'Data engineering' },
      { name: 'Apache Spark', icon: 'SP', description: 'Data processing' },
    ],
    tags: ['Embedded C/C++', 'SQL'],
  },
  'Embedded Systems': {
    tools: [
      { name: 'Arduino', icon: 'AR', description: 'Rapid prototyping' },
      { name: 'ESP32', icon: 'E32', description: 'Wireless embedded systems' },
      { name: 'micro-ROS', icon: 'uR', description: 'ROS on microcontrollers' },
    ],
    tags: ['MQTT', 'I2C', 'SPI', 'UART', 'BMS Design', 'Real-Time Systems', 'Sensor Fusion'],
  },
  // 'MEP & Site Engineering': {
  //   tools: [],
  //   tags: ['HVAC Systems', 'Firefighting Systems', 'Plumbing', 'MEP Coordination', 'Site Engineering', 'Construction Safety'],
  // },
};
