import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import { TSkill } from './types';

export async function getSkills() {
  const query = groq`*[_type=="skills"]
  {
    _id,
    label,
    purcent, 
    image, 
    description, 
    microsysteme
  }`;
  const data = (await client.fetch(query)) as TSkill[];
  return data;
}
