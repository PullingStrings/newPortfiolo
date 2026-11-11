import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { featuredProjectsById, projects } from '../src/data/homepage.js';

const expectedIds = ['dreamzone', 'finance', 'contact', 'repair'];
const mediaPath = (path) =>
  fileURLToPath(new URL(`../public${path}`, import.meta.url));

function checkMedia(path) {
  assert.match(path, /^\/[^/]/, `Expected a local public media path: ${path}`);
  assert.ok(existsSync(mediaPath(path)), `Missing local media: ${path}`);
}

assert.deepEqual(
  projects.map(({ id }) => id),
  expectedIds,
  'Featured project IDs or order changed',
);
assert.deepEqual(
  projects.map(({ index }) => index),
  ['01', '02', '03', '04'],
  'Featured display numbers changed',
);

const routes = new Set();
for (const project of projects) {
  assert.equal(featuredProjectsById[project.id], project);
  assert.match(project.caseStudyPath, /^\/case-studies\/[^/]+$/);
  assert.ok(
    !routes.has(project.caseStudyPath),
    `Duplicate route: ${project.caseStudyPath}`,
  );
  routes.add(project.caseStudyPath);
  checkMedia(project.media.src);
  if (project.secondaryMedia) checkMedia(project.secondaryMedia.src);
}

const indexSource = readFileSync(
  new URL('../src/pages/CaseStudyLanding/CaseStudies.jsx', import.meta.url),
  'utf8',
);
for (const [, path] of indexSource.matchAll(/\b(?:src|poster)="(\/[^"]+)"/g)) {
  checkMedia(path);
}

console.log('Featured project metadata and local media references are valid.');
