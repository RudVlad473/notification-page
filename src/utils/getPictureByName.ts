function getPictureByName(name: string): string {
  return new URL(`../assets/${name}.webp`, import.meta.url).href
}

export { getPictureByName }
