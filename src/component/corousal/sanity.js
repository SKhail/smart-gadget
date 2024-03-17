import { createClient } from '@sanity/client';
// import {data} from 'autoprefixer'


export const client = createClient({
  projectId: '26pxy6vx',
  dataset: 'production', 
  useCdn: false,
  apiVersion: '2023-05-03',
});

export default client

export async function getHomepage() {
  const data = await client.fetch('*[_type == "homepage"][0]');
  return data;
}
