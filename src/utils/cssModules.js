// Apply the classes exported by one or more CSS Modules to an existing class list.
// A class may be defined in both a shared and a page module.
export function createClassNames(...modules) {
  return (names) =>
    names
      .split(/\s+/)
      .filter(Boolean)
      .flatMap((name) => {
        const matches = modules.map((module) => module[name]).filter(Boolean);
        return matches.length ? matches : name;
      })
      .join(' ');
}
