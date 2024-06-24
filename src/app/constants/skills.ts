import { IconType } from 'react-icons';
import { BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaSass } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiReacthookform, SiReactrouter, SiShadcnui } from 'react-icons/si';

export type TSkill = {
  label: string;
  description: {
    message: string;
    micro: { icon: IconType; color: string }[];
  };
  icon: IconType;
  purcent: number;
  projects: number;
  color: string;
};
export const Skills: TSkill[] = [
  {
    label: 'HTML',
    description: {
      message:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste hic dignissimos rerum!  ',
      micro: [],
    },
    icon: FaHtml5,
    purcent: 86,
    projects: 4,
    color: '#e34f26',
  },
  {
    label: 'CSS',
    description: {
      message:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste hic dignissimos rerum!  ',
      micro: [
        { icon: RiTailwindCssFill, color: '#639dcf' },
        { icon: FaBootstrap, color: '#681be6' },
        { icon: FaSass, color: '#b96992' },
      ],
    },
    icon: FaCss3Alt,
    purcent: 88,
    projects: 4,
    color: '#4f9fd4',
  },
  {
    label: 'JS/TS',
    description: {
      message:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste hic dignissimos rerum!  ',
      micro: [],
    },
    icon: BiLogoTypescript,
    purcent: 72,
    projects: 4,
    color: '#4f9fd4',
  },

  {
    label: 'ReactJs',
    description: {
      message:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste hic dignissimos rerum!  ',
      micro: [
        { icon: BiLogoRedux, color: '#5d5093' },
        { icon: SiReactrouter, color: '#b92727' },
        { icon: SiReacthookform, color: '#d4608b' },
        { icon: SiShadcnui, color: '#111111' },
      ],
    },
    icon: GrReactjs,
    purcent: 88,
    projects: 4,
    color: '#4f9fd4',
  },
];
