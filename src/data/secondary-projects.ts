export type SecondaryMedia = {
  type: 'image';
  src: string;
  alt: string;
  caption: string;
} | {
  type: 'video';
  src: string;
  poster: string;
  label?: string;
  caption: string;
};

export interface SecondaryProject {
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
  status: 'Ongoing' | 'Completed';
  media?: SecondaryMedia;
}

export const secondaryProjects: SecondaryProject[] = [
  {
    title: 'Foldable Magnetic Product Box',
    description: 'A freelance luxury-packaging concept developed as a niche foldable magnetic box ready for production handoff.',
    category: 'Product Design / Freelance',
    date: 'Feb. 2026',
    tags: ['Luxury Packaging', 'Product Design', 'Cardboard Prototyping'],
    status: 'Completed',
    media: {
      type: 'image',
      src: 'project-assets/foldable-magnetic-product-box/closed-box.webp',
      alt: 'Closed foldable luxury packaging box with magnetic lid and front drawer opening',
      caption: 'Supplied closed-box view showing the magnetic lid, side handle, and front opening.',
    },
  },
  {
    title: 'Autonomous Guided Vehicle (AGV) System',
    description: 'Vision-guided AGV platform with QR-code localization, line tracking, and a 2-DOF robotic arm.',
    category: 'Robotics / Automation',
    date: 'Jan. 2024',
    tags: ['Python', 'Raspberry Pi', 'OpenCV', 'ROS', 'Embedded C'],
    status: 'Completed',
    media: {
      type: 'video',
      src: 'project-assets/autonomous-guided-vehicle/navigation-preview.mp4',
      poster: 'project-assets/autonomous-guided-vehicle/navigation-preview-poster.jpg',
      label: 'Muted looping preview of the autonomous guided vehicle test',
      caption: 'Portrait test recording showing the white AGV beside a floor line and QR marker while its arm mechanism moves.',
    },
  },
  {
    title: 'AgriBot',
    description: 'Autonomous agricultural robot. Further project details pending.',
    category: 'Robotics / Agriculture',
    date: 'Mar. 2025',
    tags: ['Robotics', 'ROS2'],
    status: 'Completed',
  },
];
