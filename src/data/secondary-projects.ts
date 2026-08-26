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
    description: 'Foldable cardboard packaging with a magnetic closure, developed as a freelance product-design handoff. Materials, dimensions, and production results were not recorded.',
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
    description: 'Raspberry Pi AGV combining OpenCV line tracking, QR-code localization, and a 2-DOF arm. Payload and navigation error were not measured.',
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
];
