export const images = [
    // Add the remaining images up to image_151
    ...Array.from({ length: 143 }, (_, i) => ({
      id: `image_${i}`,
      w: 1920,
      h: 1080,
      u: "",
      p: `./frames/moto-${String(i).padStart(3, '0')}.webp`,
      e: 1
    }))
  ];
