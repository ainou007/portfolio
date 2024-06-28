import type { Image } from 'sanity';

export type TSkill = {
  _id: string;
  label: string;
  purcent: number;
  description: string;
  image: Image;
  microsysteme: Image[];
};

export type TProject = {
  _id: string;
  label: string;
  description: string;
  gallery: Image[];
  tags: string[];
  demoLink: string;
  repoLink: string;
  isCompleted: boolean;
  isResponsive: boolean;
};
