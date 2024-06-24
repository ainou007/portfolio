import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

type TSocialMedia = { label: string; href: string; icon: IconType };

export const socialMedia: TSocialMedia[] = [
  { label: 'LinkedIn', href: '#', icon: FaLinkedin },
  { label: 'Github', href: '#', icon: FaGithub },
  { label: 'Whatssap', href: '#', icon: FaWhatsapp },
];
