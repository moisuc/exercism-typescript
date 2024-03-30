const DNA_RNA: { [key: string]: string } = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export function toRna(dna_chars: string): string {
  let rna = "";
  for (const DNA of dna_chars) {
    if (!(DNA in DNA_RNA)) {
      throw new Error("Invalid input DNA.");
    }
    rna += DNA_RNA[DNA as keyof typeof DNA_RNA];
  }
  return rna;
}
