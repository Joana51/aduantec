
const HISTORICAL_DB = [
  {
    id: "nat-crema-2025",
    company: "Importadora Andina S.A.C.",
    product: "Crema Facial Hidratante Andina",
    category: "Cosméticos",
    group: "cuidado",
    subcategory: "cosmeticos",
    supplier: "NativaLuz Laboratories S.A.C.",
    date: "12/03/2025",
    status: "ok",
    historicalText: "Producto Crema Facial Hidratante Andina. Ingredientes INCI Aqua Glycerin Cetearyl Alcohol Niacinamide. Fabricante NativaLuz Laboratories S.A.C. País de origen Perú. Lote NL-2025-041. Vida útil 24 meses. NSO PE-COS-2025-001."
  },
  {
    id: "sol-shampoo-2025",
    company: "Importadora Andina S.A.C.",
    product: "Shampoo Nutritivo Sol",
    category: "Cosméticos",
    group: "cuidado",
    subcategory: "cosmeticos",
    supplier: "BioCare Chile Ltda.",
    date: "08/11/2025",
    status: "ok",
    historicalText: "Producto Shampoo Nutritivo Sol. Ingredientes Aqua Sodium Laureth Sulfate Cocamidopropyl Betaine. Fabricante BioCare Chile Ltda. País de origen Chile. Lote BC-5510. Vida útil 30 meses. NSO PE-COS-2025-088."
  },
  {
    id: "polo-2025",
    company: "Comercial Pacífico E.I.R.L.",
    product: "Polo algodón Classic",
    category: "Ropa",
    group: "textil",
    subcategory: "ropa",
    supplier: "Textiles del Sur S.A.",
    date: "21/09/2025",
    status: "ok",
    historicalText: "Producto Polo algodón Classic. Composición 100% algodón. Fabricante Textiles del Sur S.A. País de origen Perú. Talla M. Instrucciones de cuidado lavado a máquina."
  },
  {
    id: "peluche-2026",
    company: "Comercial Pacífico E.I.R.L.",
    product: "Peluche Oso Kusi",
    category: "Peluches",
    group: "juguetes",
    subcategory: "peluches",
    supplier: "Happy Toy Manufacturing Ltd.",
    date: "17/01/2026",
    status: "warn",
    historicalText: "Producto Peluche Oso Kusi modelo KUSI-02. Material poliéster. Fabricante Happy Toy Manufacturing Ltd. País de origen China. Edad recomendada 3 years. Warning mantener alejado del fuego. Lote HT-8891."
  },
  {
    id: "oximetro-2025",
    company: "MedSupply Perú S.A.C.",
    product: "Oxímetro Pulse X2",
    category: "Dispositivos médicos",
    group: "salud",
    subcategory: "dispositivos",
    supplier: "Shenzhen MedTech Co.",
    date: "02/12/2025",
    status: "ok",
    historicalText: "Producto Oxímetro Pulse X2. Modelo PX2. Uso medición de saturación de oxígeno. Fabricante Shenzhen MedTech Co. País de origen China. Serie SN-PX2. Registro sanitario REG-MED-2025-001."
  },
  {
    id: "galletas-2025",
    company: "Distribuciones Norte S.A.C.",
    product: "Galletas Avena Mix",
    category: "Alimentos envasados",
    group: "alimentos",
    subcategory: "envasados",
    supplier: "Alimentos del Valle SpA",
    date: "30/10/2025",
    status: "ok",
    historicalText: "Producto Galletas Avena Mix. Ingredientes avena harina azúcar aceite vegetal. Fabricante Alimentos del Valle SpA. País de origen Chile. Lote AV-501. Vida útil 12 meses. Registro sanitario RS-AL-2025-221."
  },
  {
    id: "motor-2025",
    company: "Ingeniería Qori S.A.C.",
    product: "Motor eléctrico MX400",
    category: "Maquinaria",
    group: "equipos",
    subcategory: "maquinaria",
    supplier: "Industrial Motion GmbH",
    date: "04/08/2025",
    status: "ok",
    historicalText: "Producto Motor eléctrico MX400. Modelo MX400. Fabricante Industrial Motion GmbH. País de origen Alemania. Serie MX400-7781. Uso industrial. Especificaciones voltaje 220 V potencia 4 kW."
  }
];

function genericRules(extra = []) {
  const base = [
    { label: "Identificación del producto", description: "Nombre, denominación, referencia o modelo", keywords: ["producto", "product", "nombre", "name", "modelo", "model"] },
    { label: "Fabricante / proveedor", description: "Identificación del fabricante o proveedor", keywords: ["fabricante", "manufacturer", "supplier", "proveedor"] },
    { label: "País de origen", description: "Origen de fabricación", keywords: ["país de origen", "country of origin", "made in", "origin"] }
  ];

  const extras = {
    "composición": { label: "Composición", description: "Composición o ingredientes", keywords: ["composición", "composition", "ingredientes", "ingredients", "material"] },
    "uso declarado": { label: "Uso declarado", description: "Uso, función o finalidad del producto", keywords: ["uso", "use", "intended use", "finalidad", "función"] },
    "lote": { label: "Lote / trazabilidad", description: "Lote, batch o código de trazabilidad", keywords: ["lote", "lot", "batch", "trazabilidad"] },
    "advertencias": { label: "Advertencias", description: "Advertencias o información de seguridad", keywords: ["advertencia", "warning", "seguridad", "safety"] },
    "dimensiones": { label: "Dimensiones", description: "Dimensiones, medidas o talla", keywords: ["dimensiones", "dimensions", "medidas", "size", "talla"] },
    "material": { label: "Materiales", description: "Material o composición del producto", keywords: ["material", "materials", "composición", "composition"] },
    "edad": { label: "Edad recomendada", description: "Edad o rango de uso", keywords: ["edad", "age", "years", "months", "meses"] },
    "modelo": { label: "Modelo / referencia", description: "Modelo, SKU o referencia comercial", keywords: ["modelo", "model", "sku", "reference", "referencia"] },
    "registro": { label: "Referencia regulatoria", description: "Registro, autorización o referencia regulatoria", keywords: ["registro", "registration", "autorización", "authorization", "nso"] },
    "vida útil": { label: "Vencimiento / vida útil", description: "Fecha de vencimiento o vida útil", keywords: ["vencimiento", "expiry", "expiration", "vida útil", "shelf life"] },
    "presentación": { label: "Presentación", description: "Cantidad, volumen, empaque o presentación", keywords: ["presentación", "presentation", "contenido", "volume", "volumen", "pack"] },
    "serie": { label: "Número de serie", description: "Serie o identificador unitario", keywords: ["serie", "serial"] },
    "especificaciones": { label: "Especificaciones técnicas", description: "Características o especificaciones técnicas", keywords: ["especificaciones", "specifications", "voltaje", "voltage", "potencia", "power"] },
    "código": { label: "Código / número de parte", description: "Código, SKU o part number", keywords: ["código", "code", "sku", "part number", "número de parte"] }
  };

  const seen = new Set(base.map(r => r.label));
  const final = [...base];

  extra.forEach(key => {
    const rule = extras[key];
    if (rule && !seen.has(rule.label)) {
      final.push(rule);
      seen.add(rule.label);
    }
  });

  return final;
}

const CATALOG = {
  cuidado: {
    code: "CP",
    label: "Cosmética y cuidado personal",
    summary: "Cosméticos, higiene y productos de cuidado personal.",
    subcategories: {
      cosmeticos: {
        label: "Cosméticos",
        description: "Se revisarán identificación, composición, fabricante, origen, lote, vida útil y referencia sanitaria.",
        rules: [
          { label: "Nombre del producto", description: "Nombre o denominación comercial", keywords: ["producto", "product", "nombre", "name"] },
          { label: "Composición / ingredientes", description: "Ingredientes o composición declarada", keywords: ["ingredientes", "ingredients", "inci", "composición", "composition"] },
          { label: "Fabricante", description: "Identificación del fabricante", keywords: ["fabricante", "manufacturer", "manufactured by"] },
          { label: "País de origen", description: "País donde fue fabricado", keywords: ["país de origen", "country of origin", "made in", "origin"] },
          { label: "Lote", description: "Identificación de lote o batch", keywords: ["lote", "batch", "lot"] },
          { label: "Vencimiento / vida útil", description: "Fecha de expiración o vida útil", keywords: ["vencimiento", "expiry", "expiration", "shelf life", "vida útil"] },
          { label: "Referencia sanitaria", description: "NSO, registro o referencia sanitaria cuando corresponda", keywords: ["nso", "notificación sanitaria", "registro sanitario", "sanitary"] }
        ]
      },
      higiene: {
        label: "Higiene personal",
        description: "Se revisarán identificación, composición, uso, fabricante, origen, lote y advertencias.",
        rules: genericRules(["composición", "uso declarado", "lote", "advertencias"])
      }
    }
  },
  textil: {
    code: "TM",
    label: "Ropa, textiles y calzado",
    summary: "Prendas, textiles, calzado y accesorios.",
    subcategories: {
      ropa: {
        label: "Ropa",
        description: "Se revisarán descripción, composición de fibras, talla, origen, fabricante e instrucciones de cuidado.",
        rules: [
          { label: "Descripción del producto", description: "Nombre o tipo de prenda", keywords: ["producto", "product", "prenda", "garment", "ropa"] },
          { label: "Composición de fibras", description: "Porcentajes o materiales textiles", keywords: ["algodón", "cotton", "poliéster", "polyester", "lana", "wool", "viscosa", "%"] },
          { label: "País de origen", description: "Origen de fabricación", keywords: ["país de origen", "country of origin", "made in", "origin"] },
          { label: "Fabricante / proveedor", description: "Identificación de fabricante o proveedor", keywords: ["fabricante", "manufacturer", "supplier", "proveedor"] },
          { label: "Talla / dimensiones", description: "Talla, medidas o dimensiones", keywords: ["talla", "size", "dimensiones", "dimensions"] },
          { label: "Instrucciones de cuidado", description: "Lavado, secado o planchado", keywords: ["lavado", "wash", "care", "secado", "dry", "iron"] }
        ]
      },
      textiles: { label: "Textiles", description: "Se revisarán composición, dimensiones, origen y fabricante.", rules: genericRules(["composición", "dimensiones"]) },
      calzado: { label: "Calzado", description: "Se revisarán materiales, talla, origen, fabricante y modelo.", rules: genericRules(["material", "dimensiones", "modelo"]) }
    }
  },
  juguetes: {
    code: "JI",
    label: "Juguetes y artículos infantiles",
    summary: "Peluches, juguetes y otros artículos de uso infantil.",
    subcategories: {
      peluches: {
        label: "Peluches",
        description: "Se revisarán materiales, edad recomendada, advertencias, origen, fabricante y trazabilidad.",
        rules: [
          { label: "Identificación del producto", description: "Nombre, modelo o referencia", keywords: ["producto", "product", "modelo", "model", "sku", "reference"] },
          { label: "Materiales", description: "Material exterior y/o relleno", keywords: ["material", "relleno", "filling", "polyester", "poliéster", "fabric"] },
          { label: "Fabricante", description: "Identificación del fabricante", keywords: ["fabricante", "manufacturer", "manufactured by"] },
          { label: "País de origen", description: "Origen de fabricación", keywords: ["país de origen", "country of origin", "made in", "origin"] },
          { label: "Edad recomendada", description: "Rango de edad o advertencia de uso", keywords: ["edad", "age", "years", "meses", "months"] },
          { label: "Advertencias / seguridad", description: "Advertencias o información de seguridad", keywords: ["advertencia", "warning", "seguridad", "safety", "choking"] },
          { label: "Lote / trazabilidad", description: "Identificación de lote o código", keywords: ["lote", "lot", "batch", "código", "code"] }
        ]
      },
      juguetes: { label: "Juguetes", description: "Se revisarán identificación, materiales, edad, advertencias, fabricante, origen y trazabilidad.", rules: genericRules(["material", "edad", "advertencias", "lote"]) },
      infantiles: { label: "Artículos infantiles", description: "Se revisarán identificación, material, uso, fabricante, origen y advertencias.", rules: genericRules(["material", "uso declarado", "advertencias"]) }
    }
  },
  salud: {
    code: "SM",
    label: "Equipos médicos y salud",
    summary: "Dispositivos, instrumental e insumos médicos.",
    subcategories: {
      dispositivos: { label: "Dispositivos médicos", description: "Se revisarán nombre, modelo, uso previsto, fabricante, origen, serie y referencia regulatoria.", rules: genericRules(["modelo", "uso declarado", "serie", "registro"]) },
      instrumental: { label: "Instrumental médico", description: "Se revisarán identificación, material, fabricante, origen y trazabilidad.", rules: genericRules(["material", "lote"]) },
      insumos: { label: "Insumos médicos", description: "Se revisarán especificaciones, uso, fabricante, origen, lote y vida útil.", rules: genericRules(["uso declarado", "lote", "vida útil"]) }
    }
  },
  alimentos: {
    code: "AB",
    label: "Alimentos y bebidas",
    summary: "Alimentos envasados, bebidas e ingredientes.",
    subcategories: {
      envasados: { label: "Alimentos envasados", description: "Se revisarán denominación, ingredientes, fabricante, origen, lote, vencimiento y referencia sanitaria.", rules: genericRules(["composición", "lote", "vida útil", "registro"]) },
      bebidas: { label: "Bebidas", description: "Se revisarán denominación, composición, volumen, fabricante, origen, lote y vencimiento.", rules: genericRules(["composición", "presentación", "lote", "vida útil"]) },
      ingredientes: { label: "Ingredientes alimentarios", description: "Se revisarán composición, uso, fabricante, origen, lote y especificaciones.", rules: genericRules(["composición", "uso declarado", "lote"]) }
    }
  },
  equipos: {
    code: "EM",
    label: "Equipos, electrónica y maquinaria",
    summary: "Equipos eléctricos, electrónicos, maquinaria y repuestos.",
    subcategories: {
      electronica: { label: "Electrónica", description: "Se revisarán modelo, fabricante, origen, especificaciones eléctricas y serie.", rules: genericRules(["modelo", "serie", "especificaciones"]) },
      maquinaria: { label: "Maquinaria", description: "Se revisarán modelo, fabricante, origen, especificaciones técnicas, serie y uso.", rules: genericRules(["modelo", "serie", "especificaciones", "uso declarado"]) },
      repuestos: { label: "Repuestos", description: "Se revisarán número de parte, compatibilidad, fabricante, origen e identificación.", rules: genericRules(["modelo", "código"]) }
    }
  },
  general: {
    code: "MG",
    label: "Mercancía general",
    summary: "Productos no incluidos en los grupos anteriores.",
    subcategories: {
      hogar: { label: "Hogar y consumo", description: "Checklist general de identificación, material, fabricante, origen y presentación.", rules: genericRules(["material", "presentación"]) },
      oficina: { label: "Artículos de oficina", description: "Checklist general de producto, fabricante, origen, modelo y presentación.", rules: genericRules(["modelo", "presentación"]) },
      otros: { label: "Otros productos", description: "Checklist base para productos aún no incorporados a una biblioteca especializada.", rules: genericRules(["modelo", "presentación"]) }
    }
  }
};

let selectedGroup = "cuidado";
let selectedSubcategory = "cosmeticos";
let demoText = null;

const $ = id => document.getElementById(id);

renderGroups();
renderSubcategories();
renderRules();
renderHistory();
renderDatabase(HISTORICAL_DB);
renderHistoricalSelect();

$("technicalFile").addEventListener("change", e => {
  $("technicalFileName").textContent = e.target.files[0]?.name || "Seleccionar PDF, DOCX o TXT";
  demoText = null;
});

$("referenceFile").addEventListener("change", e => {
  $("referenceFileName").textContent = e.target.files[0]?.name || "Opcional";
});

$("demoPass").addEventListener("click", () => {
  demoText = getDemoText(true);
  $("technicalFileName").textContent = "Ejemplo cargado: ficha conforme";
});

$("demoReview").addEventListener("click", () => {
  demoText = getDemoText(false);
  $("technicalFileName").textContent = "Ejemplo cargado: ficha con observaciones";
});

$("analyzeBtn").addEventListener("click", analyze);

$("dbSearch").addEventListener("input", e => {
  const q = normalize(e.target.value);
  const filtered = HISTORICAL_DB.filter(item =>
    normalize(`${item.company} ${item.product} ${item.category} ${item.supplier}`).includes(q)
  );
  renderDatabase(filtered);
});

function renderGroups() {
  const grid = $("groupGrid");
  grid.innerHTML = "";

  Object.entries(CATALOG).forEach(([key, group]) => {
    const button = document.createElement("button");
    button.className = `group-card ${key === selectedGroup ? "selected" : ""}`;
    button.innerHTML = `
      <span class="group-code">${group.code}</span>
      <strong>${group.label}</strong>
      <small>${group.summary}</small>
    `;
    button.addEventListener("click", () => {
      selectedGroup = key;
      selectedSubcategory = Object.keys(CATALOG[key].subcategories)[0];
      demoText = null;
      renderGroups();
      renderSubcategories();
      renderRules();
      renderHistoricalSelect();
    });
    grid.appendChild(button);
  });
}

function renderSubcategories() {
  const group = CATALOG[selectedGroup];
  $("selectedGroupTitle").textContent = group.label;

  const grid = $("subcategoryGrid");
  grid.innerHTML = "";

  Object.entries(group.subcategories).forEach(([key, sub]) => {
    const button = document.createElement("button");
    button.className = `subcategory-button ${key === selectedSubcategory ? "selected" : ""}`;
    button.textContent = sub.label;
    button.addEventListener("click", () => {
      selectedSubcategory = key;
      demoText = null;
      renderSubcategories();
      renderRules();
      renderHistoricalSelect();
    });
    grid.appendChild(button);
  });

  const sub = group.subcategories[selectedSubcategory];
  $("selectedPath").textContent = sub.label;
  $("routeTitle").textContent = `${group.label} / ${sub.label}`;
  $("routeDescription").textContent = sub.description;
}

function renderHistoricalSelect() {
  const select = $("historicalSelect");
  select.innerHTML = '<option value="">No comparar con historial</option>';

  HISTORICAL_DB
    .filter(item => item.group === selectedGroup && item.subcategory === selectedSubcategory)
    .forEach(item => {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = `${item.product} · ${item.company} · ${item.date}`;
      select.appendChild(option);
    });
}

function renderDatabase(items) {
  const body = $("databaseBody");
  body.innerHTML = "";

  items.forEach(item => {
    const tr = document.createElement("tr");
    const label = item.status === "ok" ? "Conforme" : item.status === "warn" ? "Revisar" : "No conforme";
    tr.innerHTML = `
      <td><strong>${item.company}</strong></td>
      <td>${item.product}</td>
      <td>${item.category}</td>
      <td>${item.supplier}</td>
      <td>${item.date}</td>
      <td><span class="result-tag ${item.status}">${label}</span></td>
    `;
    body.appendChild(tr);
  });

  $("dbProducts").textContent = HISTORICAL_DB.length;
  $("dbCompanies").textContent = new Set(HISTORICAL_DB.map(x => x.company)).size;
  $("dbApproved").textContent = HISTORICAL_DB.filter(x => x.status === "ok").length;
}

function currentRules() {
  return CATALOG[selectedGroup].subcategories[selectedSubcategory].rules;
}

function currentLabel() {
  return `${CATALOG[selectedGroup].label} / ${CATALOG[selectedGroup].subcategories[selectedSubcategory].label}`;
}

function renderRules() {
  const container = $("rulesPreview");
  container.innerHTML = "";
  currentRules().forEach(rule => {
    const chip = document.createElement("span");
    chip.className = "rule-chip";
    chip.textContent = rule.label;
    container.appendChild(chip);
  });
}

async function analyze() {
  const technicalFile = $("technicalFile").files[0];

  if (!technicalFile && !demoText) {
    alert("Carga una ficha técnica o usa uno de los ejemplos de demostración.");
    return;
  }

  $("resultsPanel").classList.add("hidden");
  $("progressWrap").classList.remove("hidden");

  try {
    setProgress(12, "Leyendo ficha técnica…");
    const technicalText = demoText || await extractText(technicalFile);

    setProgress(36, "Extrayendo información relevante…");
    await wait(220);

    const referenceFile = $("referenceFile").files[0];
    let referenceText = "";

    if (referenceFile) {
      setProgress(50, "Leyendo documento de referencia…");
      referenceText = await extractText(referenceFile);
    }

    setProgress(68, "Aplicando reglas de la categoría…");
    await wait(220);

    const results = evaluateText(technicalText, referenceText);

    setProgress(84, "Comparando con historial…");
    const historicalId = $("historicalSelect").value;
    const historical = HISTORICAL_DB.find(x => x.id === historicalId);
    const historyComparison = historical ? compareHistorical(technicalText, historical) : null;

    setProgress(94, "Generando checklist…");
    await wait(220);

    renderResults(results, historyComparison);
    saveHistory(results, technicalFile?.name || "Ejemplo de demostración");

    setProgress(100, "Validación completada");
    await wait(250);

    $("progressWrap").classList.add("hidden");
    $("resultsPanel").classList.remove("hidden");
    $("resultsPanel").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    console.error(error);
    $("progressWrap").classList.add("hidden");
    alert("No se pudo leer el archivo. Para la demostración puedes usar los ejemplos integrados.");
  }
}

function compareHistorical(newText, historical) {
  const newNorm = normalize(newText);
  const oldNorm = normalize(historical.historicalText);
  const rules = currentRules();

  const changes = [];

  rules.forEach(rule => {
    const oldHit = rule.keywords.some(k => oldNorm.includes(normalize(k)));
    const newHit = rule.keywords.some(k => newNorm.includes(normalize(k)));

    if (oldHit && !newHit) {
      changes.push(rule.label);
    }
  });

  return {
    product: historical.product,
    company: historical.company,
    date: historical.date,
    changes
  };
}

function setProgress(percent, label) {
  $("progressBar").style.width = `${percent}%`;
  $("progressPct").textContent = `${percent}%`;
  $("progressLabel").textContent = label;
}

async function extractText(file) {
  if (!file) return "";
  const ext = file.name.split(".").pop().toLowerCase();

  if (ext === "txt") return await file.text();

  if (ext === "docx") {
    const arrayBuffer = await file.arrayBuffer();
    const result = await window.mammoth.extractRawText({ arrayBuffer });
    return result.value || "";
  }

  if (ext === "pdf") {
    const pdfjsLib = await import("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs");
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs";

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      fullText += " " + content.items.map(item => item.str).join(" ");
    }

    return fullText;
  }

  throw new Error("Formato no soportado");
}

function normalize(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function evaluateText(technicalText, referenceText) {
  const tech = normalize(technicalText);
  const ref = normalize(referenceText);
  const rules = currentRules();

  const rows = rules.map(rule => {
    const techHit = rule.keywords.find(k => tech.includes(normalize(k)));
    const refHit = ref ? rule.keywords.find(k => ref.includes(normalize(k))) : null;

    let state = "fail";
    let evidence = "No detectado";

    if (techHit && (!referenceText || refHit)) {
      state = "ok";
      evidence = `Detectado: “${techHit}”`;
      if (referenceText) evidence += ` · Referencia: “${refHit}”`;
    } else if (techHit && referenceText && !refHit) {
      state = "warn";
      evidence = `Ficha: “${techHit}” · No hallado en referencia`;
    } else if (!techHit && referenceText && refHit) {
      state = "warn";
      evidence = `Referencia: “${refHit}” · Falta en ficha`;
    }

    return { ...rule, state, evidence };
  });

  const ok = rows.filter(r => r.state === "ok").length;
  const warn = rows.filter(r => r.state === "warn").length;
  const fail = rows.filter(r => r.state === "fail").length;
  const score = Math.round(((ok + warn * 0.5) / rows.length) * 100);

  let status = "fail";
  let title = "No cumple el checklist";
  let message = "Se detectaron campos relevantes ausentes en la documentación.";
  let recommendation = "Solicitar una ficha técnica corregida o completar los campos faltantes antes de continuar con el embarque.";

  if (fail === 0 && warn === 0) {
    status = "ok";
    title = "Ficha consistente";
    message = "Todos los campos evaluados fueron detectados sin observaciones.";
    recommendation = "Continuar con la revisión documental formal y conservar este reporte como evidencia preventiva.";
  } else if (score >= 60) {
    status = "warn";
    title = "Requiere revisión";
    message = "La ficha contiene información útil, pero presenta omisiones o diferencias que deberían subsanarse.";
    recommendation = "Revisar los campos marcados antes del embarque y solicitar confirmación al proveedor cuando corresponda.";
  }

  return { rows, ok, warn, fail, score, status, title, message, category: currentLabel(), recommendation };
}

function renderResults(results, historyComparison) {
  const statusPill = $("statusPill");
  statusPill.className = `status-pill ${results.status}`;
  statusPill.textContent =
    results.status === "ok" ? "CONFORME" :
    results.status === "warn" ? "REVISAR" : "NO CONFORME";

  $("resultTitle").textContent = results.title;
  $("resultMessage").textContent = `${results.category}. ${results.message}`;
  $("scoreValue").textContent = `${results.score}%`;
  $("okCount").textContent = results.ok;
  $("warnCount").textContent = results.warn;
  $("failCount").textContent = results.fail;
  $("recommendationText").textContent = results.recommendation;

  const historicalAlert = $("historicalAlert");

  if (historyComparison) {
    historicalAlert.classList.remove("hidden");

    if (historyComparison.changes.length) {
      historicalAlert.innerHTML = `
        <strong>Cambio respecto al historial</strong>
        Se comparó con <b>${historyComparison.product}</b>, última ficha registrada el ${historyComparison.date}.
        En la ficha nueva no se detectaron campos que sí estaban presentes anteriormente:
        <b>${historyComparison.changes.join(", ")}</b>.
      `;
    } else {
      historicalAlert.innerHTML = `
        <strong>Comparación histórica sin alertas básicas</strong>
        Se comparó con <b>${historyComparison.product}</b>, última ficha registrada el ${historyComparison.date}.
        Los campos principales presentes en el historial también fueron detectados en la ficha actual.
      `;
    }
  } else {
    historicalAlert.classList.add("hidden");
    historicalAlert.innerHTML = "";
  }

  const body = $("resultsBody");
  body.innerHTML = "";

  results.rows.forEach(row => {
    const tr = document.createElement("tr");
    const statusText = row.state === "ok" ? "Conforme" : row.state === "warn" ? "Revisar" : "No conforme";

    tr.innerHTML = `
      <td><strong>${row.label}</strong></td>
      <td>${row.description}</td>
      <td><span class="result-tag ${row.state}">${statusText}</span></td>
      <td>${row.evidence}</td>
    `;
    body.appendChild(tr);
  });
}

function saveHistory(results, fileName) {
  const history = JSON.parse(localStorage.getItem("aduantecHistoryV3") || "[]");

  history.unshift({
    date: new Date().toLocaleString("es-PE"),
    category: results.category,
    fileName,
    score: results.score,
    status: results.status
  });

  localStorage.setItem("aduantecHistoryV3", JSON.stringify(history.slice(0, 10)));
  renderHistory();
}

function renderHistory() {
  const container = $("historyList");
  const history = JSON.parse(localStorage.getItem("aduantecHistoryV3") || "[]");

  if (!history.length) {
    container.innerHTML = '<p class="empty-state">Aún no hay validaciones.</p>';
    return;
  }

  container.innerHTML = "";

  history.forEach(item => {
    const el = document.createElement("div");
    el.className = "history-item";

    const label =
      item.status === "ok" ? "Conforme" :
      item.status === "warn" ? "Revisar" : "No conforme";

    el.innerHTML = `
      <div>
        <strong>${item.fileName}</strong>
        <small>${item.category} · ${item.date}</small>
      </div>
      <strong>${item.score}%</strong>
      <span class="result-tag ${item.status}">${label}</span>
    `;
    container.appendChild(el);
  });
}

function getDemoText(pass) {
  const label = CATALOG[selectedGroup].subcategories[selectedSubcategory].label;

  if (selectedGroup === "cuidado" && selectedSubcategory === "cosmeticos") {
    return pass
      ? `Ficha técnica del producto. Nombre: Crema Facial Hidratante Andina. Ingredientes INCI: Aqua, Glycerin, Cetearyl Alcohol, Niacinamide. Fabricante: NativaLuz Laboratories S.A.C. País de origen: Perú. Lote: NL-2026-055. Vida útil: 24 meses. Notificación Sanitaria Obligatoria NSO: PE-COS-2025-001.`
      : `Ficha técnica del producto. Nombre: Crema Facial Hidratante Andina. Ingredientes INCI: Aqua, Glycerin. Fabricante: NativaLuz Laboratories S.A.C. País de origen: Perú. Presentación: frasco de 50 ml.`;
  }

  if (selectedGroup === "textil" && selectedSubcategory === "ropa") {
    return pass
      ? `Producto: Polo unisex. Composición: 80% algodón y 20% poliéster. Fabricante: Demo Textile Co. País de origen: Perú. Talla: M. Instrucciones de cuidado: lavado a máquina y secado a baja temperatura.`
      : `Producto: Polo unisex. Proveedor: Demo Textile Co. Talla: M. Color: azul.`;
  }

  if (selectedGroup === "juguetes" && selectedSubcategory === "peluches") {
    return pass
      ? `Producto: Peluche oso modelo OSO-01. Material exterior: poliéster. Relleno: fibra de poliéster. Fabricante: Demo Toys Ltd. Country of origin: China. Edad recomendada: 3 years. Warning: mantener alejado del fuego. Lote: TOY-1182.`
      : `Producto: Peluche oso modelo OSO-01. Fabricante: Demo Toys Ltd. Color: marrón.`;
  }

  return pass
    ? `Ficha técnica. Producto ${label}. Nombre del producto DEMO-01. Modelo DEMO-01. Fabricante Demo International Ltd. País de origen Perú. Material técnico. Composición declarada. Uso declarado. Lote L-2026-001. Vida útil 24 meses. Registro REG-DEMO-001. Presentación unidad comercial. Serie SN-0001. Especificaciones técnicas. Advertencia de seguridad. Edad 8 years. Código PART-001.`
    : `Ficha técnica. Producto ${label}. Nombre del producto DEMO-01. Fabricante Demo International Ltd.`;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
