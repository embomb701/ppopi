export type Product = {
  name: string;
  strength: string;
  price: number;
};

export type ProductCategory = {
  name: string;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    name: "Weight Management",
    products: [
      { name: "Retatrutide", strength: "10mg", price: 80 },
      { name: "Retatrutide", strength: "20mg", price: 110 },
      { name: "Retatrutide", strength: "30mg", price: 150 },
      { name: "Tirzepatide", strength: "30mg", price: 120 },
      { name: "Tirzepatide", strength: "120mg", price: 200 },
      { name: "Cagrilintide", strength: "5mg", price: 100 },
    ],
  },
  {
    name: "Growth Hormone / Body Composition",
    products: [
      { name: "Tesamorelin", strength: "10mg", price: 60 },
      { name: "CJC / Ipamorelin", strength: "10mg", price: 60 },
    ],
  },
  {
    name: "Recovery / Repair",
    products: [
      { name: "Wolverine (BPC-157 / TB-500)", strength: "10mg", price: 55 },
      { name: "Wolverine (BPC-157 / TB-500)", strength: "20mg", price: 85 },
      { name: "KPV", strength: "10mg", price: 30 },
      { name: "GHK-Cu", strength: "50mg", price: 50 },
      { name: "GHK-Cu", strength: "100mg", price: 100 },
      { name: "KLOW", strength: "80mg", price: 90 },
    ],
  },
  {
    name: "Mitochondrial / Performance",
    products: [
      { name: "MOTS-C", strength: "10mg", price: 55 },
      { name: "MOTS-C", strength: "40mg", price: 85 },
      { name: "SS-31", strength: "10mg", price: 50 },
      { name: "SS-31", strength: "50mg", price: 80 },
    ],
  },
  {
    name: "Cognitive / Nootropic",
    products: [
      { name: "Semax", strength: "5mg", price: 35 },
      { name: "Semax", strength: "10mg", price: 50 },
      { name: "Selank", strength: "5mg", price: 35 },
      { name: "Semax IN (Intranasal)", strength: "—", price: 50 },
      { name: "Selank IN (Intranasal)", strength: "—", price: 50 },
    ],
  },
  {
    name: "Wellness & Energy",
    products: [
      { name: "Glutathione", strength: "1500mg", price: 40 },
      { name: "NAD+", strength: "500mg", price: 60 },
      { name: "Vitamin B12", strength: "—", price: 35 },
    ],
  },
  {
    name: "Sexual Health / Hormonal",
    products: [
      { name: "Testosterone Cypionate (Test C)", strength: "250mg", price: 70 },
      { name: "HCG", strength: "5000 IU", price: 50 },
      { name: "Kisspeptin-10", strength: "10mg", price: 50 },
      { name: "Oxytocin", strength: "5mg", price: 35 },
    ],
  },
  {
    name: "Supplies & Accessories",
    products: [
      { name: "Bacteriostatic Water", strength: "10ml", price: 10 },
      { name: "V2 Peptide Pens", strength: "—", price: 20 },
    ],
  },
];
