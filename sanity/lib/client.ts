import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: projectId || 'hp0pcftm',
  dataset: dataset || 'production',
  apiVersion: apiVersion || '2024-01-01',
  useCdn: false, // Set to false for ISR and tag-based revalidation
})
