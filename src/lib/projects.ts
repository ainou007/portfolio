import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import { TProject } from './types';

export async function getProjects() {
  const query = groq`*[_type=="projects"]{_id, label, description, gallery, tags, demoLink, repoLink, isCompleted,isResponsive }`;
  const projects = (await client.fetch(query)) as TProject[];
  return projects;
}
