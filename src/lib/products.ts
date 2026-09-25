export type Product = {
  name: string;
  strength: string;
  price: number;
  description?: string;
  plainDescription?: string;
};

export type ProductCategory = {
  name: string;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    name: "Weight Management",
    products: [
      { 
        name: "Retatrutide", 
        strength: "10mg", 
        price: 80, 
        description: "Synthetic triple-receptor agonist (GIP/GLP-1/glucagon) under investigation for simultaneous activity at multiple metabolic receptors. Studied in research models for incretin signaling, energy expenditure, and regulation of glucose and lipid metabolism.", 
        plainDescription: "researchers are studying it as a triple-action compound that may help regulate appetite, energy use, and body weight in experimental models."
      },
      { 
        name: "Retatrutide", 
        strength: "20mg", 
        price: 110, 
        description: "Synthetic triple-receptor agonist (GIP/GLP-1/glucagon) under investigation for simultaneous activity at multiple metabolic receptors. Studied in research models for incretin signaling, energy expenditure, and regulation of glucose and lipid metabolism.", 
        plainDescription: "researchers are studying it as a triple-action compound that may help regulate appetite, energy use, and body weight in experimental models."
      },
      { 
        name: "Retatrutide", 
        strength: "30mg", 
        price: 150, 
        description: "Synthetic triple-receptor agonist (GIP/GLP-1/glucagon) under investigation for simultaneous activity at multiple metabolic receptors. Studied in research models for incretin signaling, energy expenditure, and regulation of glucose and lipid metabolism.", 
        plainDescription: "researchers are studying it as a triple-action compound that may help regulate appetite, energy use, and body weight in experimental models."
      },
      { 
        name: "Tirzepatide", 
        strength: "30mg", 
        price: 120, 
        description: "Dual GIP and GLP-1 receptor agonist studied for its effects on glucose-dependent insulinotropic pathways and central appetite regulation. Research focuses on metabolic homeostasis and body weight modulation in experimental models.", 
        plainDescription: "it's being researched for how it might influence blood sugar responses and hunger signals to support weight management studies."
      },
      { 
        name: "Tirzepatide", 
        strength: "120mg", 
        price: 200, 
        description: "Dual GIP and GLP-1 receptor agonist studied for its effects on glucose-dependent insulinotropic pathways and central appetite regulation. Research focuses on metabolic homeostasis and body weight modulation in experimental models.", 
        plainDescription: "it's being researched for how it might influence blood sugar responses and hunger signals to support weight management studies."
      },
      { 
        name: "Cagrilintide", 
        strength: "5mg", 
        price: 100, 
        description: "Long-acting amylin receptor agonist examined in combination research with GLP-1 agonists. Investigated for effects on satiety signaling and energy balance in metabolic study models.", 
        plainDescription: "researchers look at it for helping create a feeling of fullness and supporting energy balance when studied alongside other compounds."
      },
    ],
  },
  {
    name: "Growth Hormone / Body Composition",
    products: [
      { 
        name: "Tesamorelin", 
        strength: "10mg", 
        price: 60, 
        description: "Growth hormone-releasing hormone (GHRH) analog studied for its ability to stimulate endogenous growth hormone secretion. Research examines its impact on visceral fat distribution and body composition parameters.", 
        plainDescription: "it's studied for encouraging the body to produce more of its own growth hormone, with research interest in changes to belly fat and overall body composition."
      },
      { 
        name: "CJC / Ipamorelin", 
        strength: "10mg", 
        price: 60, 
        description: "Combination of a modified GHRH analog and a selective ghrelin mimetic (GHRP). Used in research to study synergistic effects on pulsatile growth hormone release and related anabolic pathways.", 
        plainDescription: "this blend is examined for its potential to support natural growth hormone release in pulses for body composition research."
      },
    ],
  },
  {
    name: "Recovery / Repair",
    products: [
      { 
        name: "Wolverine (BPC-157 / TB-500)", 
        strength: "10mg", 
        price: 55, 
        description: "Blend containing BPC-157 (a stable pentadecapeptide derived from gastric juice) and TB-500 (thymosin beta-4 fragment). Preclinical research explores roles in angiogenesis (VEGFR2), tissue remodeling, EGR-1 transcription, and focal adhesion kinase (FAK) signaling in injury models.", 
        plainDescription: "this combination is being researched for supporting tissue repair, healing processes, and recovery from injury in laboratory studies."
      },
      { 
        name: "Wolverine (BPC-157 / TB-500)", 
        strength: "20mg", 
        price: 85, 
        description: "Blend containing BPC-157 (a stable pentadecapeptide derived from gastric juice) and TB-500 (thymosin beta-4 fragment). Preclinical research explores roles in angiogenesis (VEGFR2), tissue remodeling, EGR-1 transcription, and focal adhesion kinase (FAK) signaling in injury models.", 
        plainDescription: "this combination is being researched for supporting tissue repair, healing processes, and recovery from injury in laboratory studies."
      },
      { 
        name: "KPV", 
        strength: "10mg", 
        price: 30, 
        description: "C-terminal tripeptide fragment of alpha-melanocyte-stimulating hormone (α-MSH). Studied in research for potential modulation of inflammatory cascades and maintenance of epithelial barrier integrity.", 
        plainDescription: "it's looked at for helping calm inflammatory responses and supporting the body's barrier functions (like skin or gut lining) in research models."
      },
      { 
        name: "GHK-Cu", 
        strength: "50mg", 
        price: 50, 
        description: "Copper-binding tripeptide (glycyl-L-histidyl-L-lysine) naturally present in human plasma. Investigated for involvement in extracellular matrix remodeling, collagen deposition, and wound healing processes in laboratory models.", 
        plainDescription: "In simple terms, this copper peptide is studied for its role in skin repair, building collagen, and supporting wound healing research."
      },
      { 
        name: "GHK-Cu", 
        strength: "100mg", 
        price: 100, 
        description: "Copper-binding tripeptide (glycyl-L-histidyl-L-lysine) naturally present in human plasma. Investigated for involvement in extracellular matrix remodeling, collagen deposition, and wound healing processes in laboratory models.", 
        plainDescription: "In simple terms, this copper peptide is studied for its role in skin repair, building collagen, and supporting wound healing research."
      },
      { 
        name: "KLOW", 
        strength: "80mg", 
        price: 90, 
        description: "Multi-component blend featuring KPV and related sequences. Examined in research for combined effects on inflammatory modulation and tissue recovery signaling pathways.", 
        plainDescription: "it's a blend researched for combined effects on reducing inflammation and aiding recovery processes."
      },
    ],
  },
  {
    name: "Mitochondrial / Performance",
    products: [
      { 
        name: "MOTS-C", 
        strength: "10mg", 
        price: 55, 
        description: "16-amino acid peptide encoded by the mitochondrial 12S rRNA gene. Research focuses on its activation of AMPK, effects on insulin sensitivity, and regulation of metabolic gene expression in cellular and animal models.", 
        plainDescription: "it's a peptide from the mitochondria being studied for how it might help cells manage energy and respond better to insulin."
      },
      { 
        name: "MOTS-C", 
        strength: "40mg", 
        price: 85, 
        description: "16-amino acid peptide encoded by the mitochondrial 12S rRNA gene. Research focuses on its activation of AMPK, effects on insulin sensitivity, and regulation of metabolic gene expression in cellular and animal models.", 
        plainDescription: "it's a peptide from the mitochondria being studied for how it might help cells manage energy and respond better to insulin."
      },
      { 
        name: "SS-31", 
        strength: "10mg", 
        price: 50, 
        description: "Mitochondria-targeting tetrapeptide (elamipretide) that binds cardiolipin. Studied for protection against oxidative stress and support of electron transport chain function in bioenergetics research.", 
        plainDescription: "researchers are looking at it for protecting the cell's energy factories (mitochondria) from damage and supporting energy production."
      },
      { 
        name: "SS-31", 
        strength: "50mg", 
        price: 80, 
        description: "Mitochondria-targeting tetrapeptide (elamipretide) that binds cardiolipin. Studied for protection against oxidative stress and support of electron transport chain function in bioenergetics research.", 
        plainDescription: "researchers are looking at it for protecting the cell's energy factories (mitochondria) from damage and supporting energy production."
      },
    ],
  },
  {
    name: "Cognitive / Nootropic",
    products: [
      { 
        name: "Semax", 
        strength: "5mg", 
        price: 35, 
        description: "Synthetic heptapeptide analog of ACTH(4-10). Examined in research for neuroprotective effects, modulation of BDNF expression, and influence on cognitive performance pathways.", 
        plainDescription: "it's studied for potential brain-protective effects and supporting pathways involved in learning, memory, and cognitive function."
      },
      { 
        name: "Semax", 
        strength: "10mg", 
        price: 50, 
        description: "Synthetic heptapeptide analog of ACTH(4-10). Examined in research for neuroprotective effects, modulation of BDNF expression, and influence on cognitive performance pathways.", 
        plainDescription: "it's studied for potential brain-protective effects and supporting pathways involved in learning, memory, and cognitive function."
      },
      { 
        name: "Selank", 
        strength: "5mg", 
        price: 35, 
        description: "Synthetic heptapeptide with anxiolytic properties in research models. Studied for effects on GABAergic and serotonergic systems and regulation of stress-related responses.", 
        plainDescription: "researchers examine it for its potential to help with anxiety-like responses and balancing stress in behavioral research models."
      },
      { 
        name: "Semax IN (Intranasal)", 
        strength: "—", 
        price: 50, 
        description: "Synthetic heptapeptide analog of ACTH(4-10) in intranasal format. Examined in research for neuroprotective effects, modulation of BDNF expression, and influence on cognitive performance pathways.", 
        plainDescription: "it's studied for potential brain-protective effects and supporting pathways involved in learning, memory, and cognitive function (via nasal delivery in research)."
      },
      { 
        name: "Selank IN (Intranasal)", 
        strength: "—", 
        price: 50, 
        description: "Synthetic heptapeptide with anxiolytic properties in research models (intranasal). Studied for effects on GABAergic and serotonergic systems and regulation of stress-related responses.", 
        plainDescription: "researchers examine it for its potential to help with anxiety-like responses and balancing stress in behavioral research models (nasal format)."
      },
    ],
  },
  {
    name: "Wellness & Energy",
    products: [
      { 
        name: "Glutathione", 
        strength: "1500mg", 
        price: 40, 
        description: "Tripeptide (glutamate-cysteine-glycine) that serves as a primary cellular antioxidant. Widely studied for its role in glutathione peroxidase activity, detoxification processes, and redox homeostasis research.", 
        plainDescription: "In simple terms, it's the body's master antioxidant being researched for protecting cells from oxidative damage and supporting detox pathways."
      },
      { 
        name: "NAD+", 
        strength: "500mg", 
        price: 60, 
        description: "Nicotinamide adenine dinucleotide coenzyme central to cellular respiration. Investigated in research for its role as a substrate for sirtuins and PARPs, and effects on mitochondrial function and aging pathways.", 
        plainDescription: "it's a key molecule studied for its role in cellular energy production and processes associated with aging research."
      },
      { 
        name: "Vitamin B12", 
        strength: "—", 
        price: 35, 
        description: "Cobalamin essential for one-carbon metabolism. Studied in research as a cofactor in methionine synthesis, DNA methylation, and neurological function models.", 
        plainDescription: "it's an essential vitamin researched for its critical role in energy metabolism and supporting nerve and blood cell function in studies."
      },
    ],
  },
  {
    name: "Sexual Health / Hormonal",
    products: [
      { 
        name: "Testosterone Cypionate (Test C)", 
        strength: "250mg", 
        price: 70, 
        description: "Long-acting ester of the endogenous androgen testosterone. Used in research to study androgen receptor signaling, muscle protein synthesis, and hypothalamic-pituitary-gonadal axis feedback (regulated compound).", 
        plainDescription: "it's a form of testosterone studied for its effects on muscle protein synthesis and hormone regulation in controlled research settings."
      },
      { 
        name: "HCG", 
        strength: "5000 IU", 
        price: 50, 
        description: "Human chorionic gonadotropin glycoprotein hormone. Studied for luteinizing hormone receptor activation and support of gonadal steroid production in reproductive endocrinology research.", 
        plainDescription: "it's researched for mimicking signals that help support the body's own production of certain reproductive hormones."
      },
      { 
        name: "Kisspeptin-10", 
        strength: "10mg", 
        price: 50, 
        description: "Decapeptide fragment of the kisspeptin protein. Potent stimulator of GnRH release examined in research for regulation of the reproductive axis and puberty-related signaling.", 
        plainDescription: "it's studied for its strong effect on triggering the release of hormones that control reproductive function and related signaling."
      },
      { 
        name: "Oxytocin", 
        strength: "5mg", 
        price: 35, 
        description: "Nonapeptide neuropeptide and hormone. Studied extensively for its roles in social bonding, trust, stress attenuation, and modulation of amygdala and reward circuitry in behavioral research.", 
        plainDescription: "researchers investigate it for its involvement in social bonding, feelings of trust, and how the body handles stress in behavioral studies."
      },
    ],
  },
  {
    name: "Supplies & Accessories",
    products: [
      { 
        name: "Bacteriostatic Water", 
        strength: "10ml", 
        price: 10, 
        description: "Sterile solution of water for injection containing 0.9% benzyl alcohol as a preservative. Standard laboratory reagent for reconstitution and dilution of lyophilized research peptides.", 
        plainDescription: "This is sterile water with a preservative used in the lab to safely mix and dilute research peptides for experiments."
      },
      { 
        name: "V2 Peptide Pens", 
        strength: "—", 
        price: 20, 
        description: "Precision-engineered injection device for consistent subcutaneous delivery of research compounds. Designed for accuracy and repeatability in controlled laboratory environments.", 
        plainDescription: "These are precision devices used in research labs for accurate and repeatable delivery of compounds during studies."
      },
    ],
  },
];

export type CompoundSource = {
  url: string;
  label: string;
  note?: string;
};

export const compoundSources: Record<string, CompoundSource> = {
  Retatrutide: {
    url: "https://www.lilly.com/news/stories/what-to-know-about-retatrutide",
    label: "Lilly (official)",
    note: "Investigational; not FDA approved for these uses.",
  },
  Tirzepatide: {
    url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tirzepatide",
    label: "DailyMed (FDA labels)",
    note: "FDA-approved (Mounjaro/Zepbound).",
  },
  Cagrilintide: {
    url: "https://clinicaltrials.gov/search?term=cagrilintide",
    label: "ClinicalTrials.gov",
    note: "Investigational.",
  },
  Tesamorelin: {
    url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tesamorelin",
    label: "DailyMed (Egrifta)",
    note: "FDA-approved for specific indication.",
  },
  "CJC / Ipamorelin": {
    url: "https://clinicaltrials.gov/search?term=CJC-1295+ipamorelin",
    label: "ClinicalTrials.gov",
    note: "Investigational blend.",
  },
  "Wolverine (BPC-157 / TB-500)": {
    url: "https://clinicaltrials.gov/search?term=BPC-157",
    label: "ClinicalTrials.gov (BPC-157)",
    note: "Investigational; limited human trial data for these uses. Not FDA approved.",
  },
  KPV: {
    url: "https://clinicaltrials.gov/search?term=KPV",
    label: "ClinicalTrials.gov",
    note: "Investigational.",
  },
  "GHK-Cu": {
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=GHK-Cu",
    label: "PubMed (GHK-Cu)",
    note: "Research on copper peptides; primary literature.",
  },
  KLOW: {
    url: "https://clinicaltrials.gov/search?term=KPV",
    label: "ClinicalTrials.gov (related)",
    note: "Investigational blend; limited registry data.",
  },
  "MOTS-C": {
    url: "https://clinicaltrials.gov/study/NCT07505745",
    label: "ClinicalTrials.gov (Phase 2a)",
    note: "Investigational.",
  },
  "SS-31": {
    url: "https://clinicaltrials.gov/study/NCT02693119",
    label: "ClinicalTrials.gov (Phase 2)",
    note: "Investigational (elamipretide).",
  },
  Semax: {
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=Semax",
    label: "PubMed (Semax)",
    note: "Not FDA-approved.",
  },
  Selank: {
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=Selank",
    label: "PubMed (Selank)",
    note: "Not FDA-approved.",
  },
  "Semax IN (Intranasal)": {
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=Semax",
    label: "PubMed (Semax)",
    note: "Not FDA-approved.",
  },
  "Selank IN (Intranasal)": {
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=Selank",
    label: "PubMed (Selank)",
    note: "Not FDA-approved.",
  },
  Glutathione: {
    url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=glutathione",
    label: "DailyMed",
    note: "Antioxidant; specific regulated uses.",
  },
  "NAD+": {
    url: "https://clinicaltrials.gov/search?term=NAD%2B+OR+%22nicotinamide+adenine+dinucleotide%22",
    label: "ClinicalTrials.gov",
    note: "Investigational for many uses; supplement forms available.",
  },
  "Vitamin B12": {
    url: "https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/",
    label: "NIH ODS Fact Sheet",
    note: "Essential nutrient; approved vitamin forms.",
  },
  "Testosterone Cypionate (Test C)": {
    url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=testosterone+cypionate",
    label: "DailyMed",
    note: "FDA-approved prescription medication.",
  },
  HCG: {
    url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=chorionic+gonadotropin",
    label: "DailyMed (HCG)",
    note: "FDA-approved for specific indications.",
  },
  "Kisspeptin-10": {
    url: "https://clinicaltrials.gov/search?term=kisspeptin",
    label: "ClinicalTrials.gov",
    note: "Investigational.",
  },
  Oxytocin: {
    url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=oxytocin",
    label: "DailyMed (Oxytocin)",
    note: "FDA-approved for specific medical uses.",
  },
  "Bacteriostatic Water": {
    url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=bacteriostatic+water",
    label: "DailyMed",
    note: "Sterile diluent for parenteral research use.",
  },
  "V2 Peptide Pens": {
    url: "https://www.fda.gov/medical-devices/general-hospital-devices-and-supplies/pen-injectors-and-related-devices",
    label: "FDA (pen injectors)",
    note: "Medical device accessory. Follow all applicable regulations.",
  },
};
