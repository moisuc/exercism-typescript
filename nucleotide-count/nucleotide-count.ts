export function nucleotideCounts(dna: string) {
  let nucleoids: { [key: string]: number } = { A: 0, C: 0, G: 0, T: 0 };
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] in nucleoids) {
      nucleoids[dna[i]]++;
    } else {
      throw new Error("Invalid nucleotide in strand");
    }
  }
  return nucleoids;
}
