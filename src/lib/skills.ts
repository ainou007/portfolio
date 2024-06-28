import { client } from '../../sanity/lib/client';
import { TSkill } from './types';

export async function getSkills() {
  const query = `*[_type=="skills"]{_id, label, purcent, image, description, microsysteme}`;
  const data = (await client.fetch(query)) as TSkill[];
  return data;
}
