const usedIds = new Set<string>();

export function getUniqueRandomId(arr: string[]): string | null {
  if (usedIds.size >= arr.length) {
    return null; // ie all ids have been used up...
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  const id = arr[randomIndex];

  if (usedIds.has(id)) {
    return getUniqueRandomId(arr); // try again recursively...
  }

  usedIds.add(id);
  return id;
}
