// Species metadata + filesize report.
// Filesizes come from the actual files on disk (computed once via run_script).

window.SPECIES = [
  { id: "agaricus-arvensis",          file: "agaricus arvensis.svg",          latin: "Agaricus arvensis",          de: "Schaf-Champignon",         en: "Horse mushroom" },
  { id: "amanita-caesarea",           file: "amanita caesarea.svg",           latin: "Amanita caesarea",           de: "Kaiserling",               en: "Caesar's mushroom" },
  { id: "amanita-muscaria",           file: "amanita muscaria.svg",           latin: "Amanita muscaria",           de: "Fliegenpilz",              en: "Fly agaric" },
  { id: "amanita-phalloides",         file: "amanita phalloides.svg",         latin: "Amanita phalloides",         de: "Grüner Knollenblätterpilz", en: "Death cap" },
  { id: "armillaria-mellea",          file: "armillaria mellea.svg",          latin: "Armillaria mellea",          de: "Hallimasch",               en: "Honey fungus" },
  { id: "boletus-edulis",             file: "boletus edulis.svg",             latin: "Boletus edulis",             de: "Steinpilz",                en: "Porcini" },
  { id: "calocybe-gambosa",           file: "calocybe gambosa.svg",           latin: "Calocybe gambosa",           de: "Maipilz",                  en: "St. George's mushroom" },
  { id: "calvatia-gigantea",          file: "calvatia gigantea.svg",          latin: "Calvatia gigantea",          de: "Riesenbovist",             en: "Giant puffball" },
  { id: "cantharellus-cibarius",      file: "cantharellus cibarius.svg",      latin: "Cantharellus cibarius",      de: "Pfifferling",              en: "Chanterelle" },
  { id: "cantharellus-cornucopoides", file: "cantharellus cornucopoides.svg", latin: "Craterellus cornucopioides", de: "Totentrompete",            en: "Black trumpet" },
  { id: "cantharellus-lutescens",     file: "cantharellus lutescens.svg",     latin: "Cantharellus lutescens",     de: "Starkriech. Pfifferling",  en: "Golden chanterelle" },
  { id: "cantharellus-tubaeformis",   file: "cantharellus tubaeformis.svg",   latin: "Cantharellus tubaeformis",   de: "Trompetenpfifferling",     en: "Yellow-foot" },
  { id: "chalciporus-piperatus",      file: "chalciporus piperatus.svg",      latin: "Chalciporus piperatus",      de: "Pfeffer-Röhrling",          en: "Peppery bolete" },
  { id: "clitocybe-geotropa",         file: "clitocybe geotropa.svg",         latin: "Clitocybe geotropa",         de: "Mönchskopf",                en: "Trooping funnel" },
  { id: "clitopilus-prunulus",        file: "clitopilus prunulus.svg",        latin: "Clitopilus prunulus",        de: "Mehlräsling",               en: "The miller" },
  { id: "coprinus-comatus",           file: "coprinus comatus.svg",           latin: "Coprinus comatus",           de: "Schopftintling",           en: "Shaggy ink cap" },
  { id: "cortinarius-caperatus",      file: "cortinarius caperatus.svg",      latin: "Cortinarius caperatus",      de: "Reifpilz",                 en: "Gypsy mushroom" },
  { id: "cortinarius-praestans",      file: "cortinarius praestans.svg",      latin: "Cortinarius praestans",      de: "Schleiereule",             en: "Goliath webcap" },
  { id: "disciotis-venosa",           file: "disciotis venosa.svg",           latin: "Disciotis venosa",           de: "Aderkelchbecher",          en: "Bleach cup" },
  { id: "gomphidius-glutinosus",      file: "gomphidius glutinosus.svg",      latin: "Gomphidius glutinosus",      de: "Kuhmaul",                  en: "Slimy spike" },
  { id: "gomphus-clavatus",           file: "gomphus clavatus.svg",           latin: "Gomphus clavatus",           de: "Schweinsohr",              en: "Pig's ear" },
  { id: "hericium-erinaceum",         file: "hericium erinaceum.svg",         latin: "Hericium erinaceum",         de: "Löwenmähne",                en: "Lion's mane" },
  { id: "hydnum-repandum",            file: "hydnum repandum.svg",            latin: "Hydnum repandum",            de: "Semmelstoppelpilz",        en: "Hedgehog" },
  { id: "hygrocybe",                  file: "hygrocybe.svg",                  latin: "Hygrocybe spp.",             de: "Saftling",                  en: "Waxcap" },
  { id: "hypholoma-capnoides",        file: "hypholoma capnoides.svg",        latin: "Hypholoma capnoides",        de: "Graubl. Schwefelkopf",     en: "Conifer tuft" },
  { id: "imleria-badia",              file: "imleria badia.svg",              latin: "Imleria badia",              de: "Maronen-Röhrling",         en: "Bay bolete" },
  { id: "kuehneromyces-mutabilis",    file: "kuehneromyces mutabilis.svg",    latin: "Kuehneromyces mutabilis",    de: "Stockschwämmchen",          en: "Sheathed woodtuft" },
  { id: "lactarius-deliciosus",       file: "lactarius deliciosus.svg",       latin: "Lactarius deliciosus",       de: "Edel-Reizker",             en: "Saffron milkcap" },
  { id: "leccinum-aurantiacum",       file: "leccinum aurantiacum.svg",       latin: "Leccinum aurantiacum",       de: "Rotkappe",                 en: "Orange birch bolete" },
  { id: "leccinum-scabrum",           file: "leccinum scabrum.svg",           latin: "Leccinum scabrum",           de: "Birkenpilz",               en: "Birch bolete" },
  { id: "lycoperdon-perlatum",        file: "lycoperdon perlatum.svg",        latin: "Lycoperdon perlatum",        de: "Flaschenbovist",           en: "Common puffball" },
  { id: "lyophyllum-decastes",        file: "lyophyllum decastes.svg",        latin: "Lyophyllum decastes",        de: "Bräunl. Büschelrasling",    en: "Fried-chicken mushroom" },
  { id: "macrolepiota-procera",       file: "macrolepiota procera.svg",       latin: "Macrolepiota procera",       de: "Riesenschirmpilz",         en: "Parasol" },
  { id: "morchella-elata",            file: "morchella elata.svg",            latin: "Morchella elata",            de: "Spitzmorchel",             en: "Black morel" },
  { id: "morchella-esculenta",        file: "morchella esculenta.svg",        latin: "Morchella esculenta",        de: "Speisemorchel",            en: "Common morel" },
  { id: "neoboletus-luridiformis",    file: "neoboletus luridiformis.svg",    latin: "Neoboletus luridiformis",    de: "Flockenst. Hexenröhrling", en: "Scarletina bolete" },
  { id: "pleurotus-ostreatus",        file: "pleurotus ostreatus.svg",        latin: "Pleurotus ostreatus",        de: "Austernseitling",          en: "Oyster mushroom" },
  { id: "psilocybe-semilanceata",     file: "psilocybe semilanceata.svg",     latin: "Psilocybe semilanceata",     de: "Spitzkegel. Kahlkopf",     en: "Liberty cap" },
  { id: "russula",                    file: "russula.svg",                    latin: "Russula spp.",               de: "Täubling",                 en: "Brittlegill" },
  { id: "sarcodon-imbricatus",        file: "sarcodon imbricatus.svg",        latin: "Sarcodon imbricatus",        de: "Habichtspilz",             en: "Shingled hedgehog" },
  { id: "sparassis-crispa",           file: "sparassis crispa.svg",           latin: "Sparassis crispa",           de: "Krause Glucke",            en: "Cauliflower fungus" },
  // Generic fallback — rendered for any species with no dedicated icon.
  { id: "generic-species",            file: "generic-species.svg",            latin: "Fungi sp.",                  de: "Andere Art",               en: "Generic species" },
];

// Special-purpose markers (not species). `whites: "bg-only"` keeps inner white
// detail (the "?" glyph, the disc behind the prohibition sign) and strips only
// the full-canvas background. These render after all species in every sheet.
window.MARKERS = [
  { id: "unknown-species",            file: "unknown-species.svg",            latin: "Unbestimmt",                 de: "Unbestimmte Art",          en: "Unknown species", special: true, whites: "bg-only" },
  { id: "nullfund",                   file: "nullfund.svg",                   latin: "Nullfund",                   de: "Kein Fund",                en: "No mushrooms",    special: true, whites: "bg-only" },
];

// Sheets iterate the species list followed by the markers.
window.ALL_ICONS = window.SPECIES.concat(window.MARKERS);

// Sizes in bytes — measured on disk after simplification.
window.SIZES = {
  "sparassis crispa.svg":           { orig: 321464, simp: 125686, sq:  86300, uo: 309220 },
  "lycoperdon perlatum.svg":        { orig: 301113, simp: 108366, sq:  76117, uo: 278936 },
  "hericium erinaceum.svg":         { orig: 253844, simp:  92507, sq:  63973, uo: 234924 },
  "lactarius deliciosus.svg":       { orig: 245668, simp:  97760, sq:  68179, uo: 239418 },
  "leccinum scabrum.svg":           { orig: 105234, simp:  41057, sq:  28986, uo: 102703 },
  "morchella elata.svg":            { orig: 212888, simp:  84922, sq:  58928, uo: 207741 },
  "morchella esculenta.svg":        { orig: 198078, simp:  77979, sq:  54214, uo: 192489 },
  "pleurotus ostreatus.svg":        { orig: 170375, simp:  69586, sq:  47700, uo: 167524 },
  "kuehneromyces mutabilis.svg":    { orig: 165600, simp:  54708, sq:  38242, uo: 151266 },
  "cantharellus lutescens.svg":     { orig: 157462, simp:  60251, sq:  41552, uo: 147714 },
  "gomphus clavatus.svg":           { orig: 157223, simp:  62746, sq:  43778, uo: 152362 },
  "gomphidius glutinosus.svg":      { orig: 141888, simp:  49960, sq:  35333, uo: 138431 },
  "agaricus arvensis.svg":          { orig: 139655, simp:  56945, sq:  39270, uo: 136061 },
  "macrolepiota procera.svg":       { orig: 125128, simp:  46327, sq:  32012, uo: 117219 },
  "chalciporus piperatus.svg":      { orig: 117498, simp:  48291, sq:  33847, uo: 114985 },
  "hypholoma capnoides.svg":        { orig: 115474, simp:  40800, sq:  28830, uo: 109220 },
  "sarcodon imbricatus.svg":        { orig: 103718, simp:  43890, sq:  30696, uo: 102213 },
  "armillaria mellea.svg":          { orig: 103367, simp:  32815, sq:  23033, uo:  93291 },
  "lyophyllum decastes.svg":        { orig:  98574, simp:  32860, sq:  23167, uo:  92088 },
  "cantharellus cibarius.svg":      { orig:  88704, simp:  36201, sq:  24853, uo:  85013 },
  "calvatia gigantea.svg":          { orig:  86000, simp:  28960, sq:  20122, uo:  74839 },
  "cantharellus tubaeformis.svg":   { orig:  79320, simp:  26650, sq:  18457, uo:  68967 },
  "amanita muscaria.svg":           { orig:  77188, simp:  29577, sq:  20608, uo:  73260 },
  "amanita phalloides.svg":         { orig:  42432, simp:  15627, sq:  10863, uo:  38818 },
  "coprinus comatus.svg":           { orig:  75085, simp:  27136, sq:  18933, uo:  68544 },
  "hygrocybe.svg":                  { orig:  72577, simp:  26142, sq:  18344, uo:  68677 },
  "cortinarius caperatus.svg":      { orig:  58252, simp:  20939, sq:  14604, uo:  53785 },
  "disciotis venosa.svg":           { orig:  57925, simp:  23495, sq:  15971, uo:  54721 },
  "russula.svg":                    { orig:  56475, simp:  21075, sq:  14567, uo:  53049 },
  "clitocybe geotropa.svg":         { orig:  55642, simp:  21950, sq:  15132, uo:  52820 },
  "cantharellus cornucopoides.svg": { orig:  51385, simp:  18655, sq:  12832, uo:  46041 },
  "clitopilus prunulus.svg":        { orig:  46292, simp:  17365, sq:  12085, uo:  43462 },
  "leccinum aurantiacum.svg":       { orig:  37760, simp:  13930, sq:   9528, uo:  34615 },
  "psilocybe semilanceata.svg":     { orig:  34457, simp:  11237, sq:   7731, uo:  29798 },
  "cortinarius praestans.svg":      { orig:  29308, simp:  10689, sq:   7382, uo:  26924 },
  "hydnum repandum.svg":            { orig:  27375, simp:   8274, sq:   5690, uo:  22399 },
  "amanita caesarea.svg":           { orig:  21435, simp:   7047, sq:   4972, uo:  19092 },
  "neoboletus luridiformis.svg":    { orig:  16347, simp:   5393, sq:   3717, uo:  14431 },
  "boletus edulis.svg":             { orig:  13956, simp:   4192, sq:   2869, uo:  11350 },
  "calocybe gambosa.svg":           { orig:  10838, simp:   3191, sq:   2153, uo:   8616 },
  "imleria badia.svg":              { orig:  10395, simp:   2981, sq:   2051, uo:   8101 },
  "generic-species.svg":            { orig:   5585, simp:   3860, sq:   2723, uo:   5612 },

  // Special-purpose markers (not species)
  "unknown-species.svg":            { orig:  14748, simp:   6732, sq:   4652, uo:  13979 },
  "nullfund.svg":                   { orig:  14082, simp:   6191, sq:   4279, uo:  13318 },
};

window.fmtKB = (b) => (b/1024).toFixed(1) + " KB";
