import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getDedicatedProjects() {
  return (await getProjects()).filter((project) => project.data.dedicated);
}

export async function getArchiveProjects() {
  return (await getProjects()).filter((project) => !project.data.dedicated);
}

export function projectNumber(order: number) {
  return order.toString().padStart(2, '0');
}
