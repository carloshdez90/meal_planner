// Diet plans and snacks data for the Diet Planner app
// Exported as a module for use in app.js

const allPlansData = {
    "octubre2024": {
        name: "October",
        planTagClass: "plan-tag-octubre",
        cardClass: "meal-card-octubre",
        data: {
            monday: {
                desayuno: { name: "HUEVOS PICADOS", items: ["5 claras + 1 lasca de jamón", "90 gr de plátano", "vegetales al gusto"], calories: "~230 kcal" },
                almuerzo: { name: "CARNE A LA PLANCHA", items: ["6 onzas de carne a la plancha", "180 gr de papa en cubos con 1 cdta de aceite de oliva", "1 taza de chimol"], calories: "~540 kcal" },
                cena: { name: "ATÚN", items: ["1 galleta sanissima", "1 lata de atún en agua", "con limón + sal + 1 cda de yogurt natural", "1/3 taza de elotitos amarillos", "1 taza de pepino, tomate, cebolla y vegetales al gusto"], calories: "~230 kcal" }
            },
            tuesday: {
                desayuno: { name: "BOWL DE AVENA", items: ["1/3 taza de avena en hojuelas", "1 taza de leche de almendras silk baja en calorías", "1/2 taza de fruta", "1 huevo + 2 claras con vegetales"], calories: "~350 kcal" },
                almuerzo: { name: "PASTA DE POLLO", items: ["6 onzas de pollo en tiras", "2/3 taza de pasta", "salsa de tomate natural al gusto"], calories: "~460 kcal" },
                cena: { name: "SANDWICH", items: ["2 rebanadas de pan integral", "1 lasca de queso mozzarella", "4 claras", "vegetales al gusto"], calories: "~380 kcal" }
            },
            wednesday: {
                desayuno: { name: "RAPIDITAS DE ESPINACA", items: ["2 tortillas de rapiditas de quinoa", "1/2 taza de espinaca", "2 lascas de jamón de pavo + 1 huevo picado"], calories: "~300 kcal" },
                almuerzo: { name: "TORTITAS DE CARNE", items: ["6 onzas de carne molida magra", "salsa de tomate natural", "1/2 taza de quinoa o arroz", "15 gr de aguacate"], calories: "~500 kcal" },
                cena: { name: "BOWL MEXICANO", items: ["1 taza de pepino", "1/3 taza de elotitos", "2 huevos duros picados", "1 onza de jamón de pavo", "30 gr de aguacate", "1 galleta sanissima"], calories: "~350 kcal" }
            },
            thursday: {
                desayuno: { name: "HUEVOS PICADOS", items: ["5 claras + 1 lasca de jamón", "90 gr de plátano", "vegetales al gusto"], calories: "~230 kcal" },
                almuerzo: { name: "POLLO AL LIMÓN", items: ["6 onzas de pollo en tiras + 1 cdta de aceite de oliva con limón y eneldo", "1/2 taza de arroz", "1 taza de zucchini asado"], calories: "~450 kcal" },
                cena: { name: "OMELETTE", items: ["2 huevos con 1 lasca de jamón de pavo al gusto", "saltear con 1 cdta de aceite de oliva", "90 gr de plátano salcochado", "tomatada al gusto"], calories: "~360 kcal" }
            },
            friday: {
                desayuno: { name: "HUEVOS PICADOS", items: ["5 claras + 1 lasca de jamón", "90 gr de plátano", "vegetales al gusto"], calories: "~230 kcal" },
                almuerzo: { name: "PASTA DE POLLO", items: ["6 onzas de pollo en tiras", "2/3 taza de pasta", "usar salsa de tomate natural al gusto"], calories: "~460 kcal" },
                cena: { name: "SANDWICH", items: ["2 rebanadas de pan integral", "1 lasca de queso mozzarella", "4 claras", "vegetales al gusto"], calories: "~380 kcal" }
            },
            saturday: {
                desayuno: { name: "RAPIDITAS DE ESPINACA", items: ["2 tortillas de rapiditas de quinoa", "1/2 taza de espinaca", "2 lascas de jamón de pavo + 1 huevo picado"], calories: "~300 kcal" },
                almuerzo: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Varies" },
                cena: { name: "BOWL MEXICANO", items: ["1 taza de pepino", "1/3 taza de elotitos", "2 huevos duros picados", "1 onza de jamón de pavo", "30 gr de aguacate", "1 galleta sanissima"], calories: "~350 kcal" }
            },
            sunday: {
                desayuno: { name: "BOWL DE AVENA", items: ["1/3 taza de avena en hojuelas", "1 taza de leche de almendras silk baja en calorías", "1/2 taza de fruta", "1 huevo + 2 claras con vegetales"], calories: "~350 kcal" },
                almuerzo: { name: "TORTITAS DE PAVO", items: ["6 onzas de carne molida de pavo", "180 gr de papa en puré", "1 taza de vegetales salteados"], calories: "~480 kcal" },
                cena: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Varies" }
            },
            meriendasAM: [
                { name: "Opción 1 AM", type: "am", items: ["1 rebanada de pan integral + 15 gr de aguacate"], calories: "~105 kcal" },
                { name: "Opción 2 AM", type: "am", items: ["2 galletas de arroz + 1 guineo pequeño"], calories: "~150 kcal" },
                { name: "Opción 3 AM", type: "am", items: ["10 almendras + 1 taza de fruta"], calories: "~150 kcal" }
            ],
            meriendasPM: [
                { name: "Opción 1 PM", type: "pm", items: ["1 taza de fruta variada"], calories: "~80-100 kcal" },
                { name: "Opción 2 PM", type: "pm", items: ["1 cda de mantequilla de maní Tosh + 1 rebanada de pan integral"], calories: "~180 kcal" },
                { name: "Opción 3 PM", type: "pm", items: ["1 taza de pepino con limón y sal"], calories: "~20 kcal" },
                { name: "Opción 4 PM", type: "pm", items: ["1 taza de gelatina light + 1/2 taza de fruta"], calories: "~60 kcal" },
                { name: "Opción 5 PM", type: "pm", items: ["4 galletas de arroz con mermelada light"], calories: "~160 kcal" }
            ]
        }
    },
    "noviembre2024": {
        name: "November",
        planTagClass: "plan-tag-noviembre",
        cardClass: "meal-card-noviembre",
        data: {
            monday: {
                desayuno: { name: "TOSTADA", items: ["1 rebanada de pan integral", "30 gr de aguacate", "2 cucharadas de requesón", "2 huevos duros en rodajas", "tomatada al gusto"], calories: "~380 kcal" },
                almuerzo: { name: "TACOS DE CARNE", items: ["6 onzas de carne en tiras", "4 tortillas para tacos", "1 taza de chimol"], calories: "~550 kcal" },
                cena: { name: "SANDWICH", items: ["2 rebanadas de pan integral", "1 lasca de queso mozzarella", "4 claras", "vegetales al gusto"], calories: "~380 kcal" }
            },
            tuesday: {
                desayuno: { name: "BOWL DE AVENA", items: ["1/3 taza de avena en hojuelas", "1 taza de leche de almendras silk baja en calorías", "1/2 taza de fruta", "1 huevo + 2 claras con vegetales"], calories: "~350 kcal" },
                almuerzo: { name: "PASTA DE POLLO", items: ["6 onzas de pollo en tiras", "2/3 taza de pasta", "usar salsa de tomate natural al gusto"], calories: "~460 kcal" },
                cena: { name: "ATÚN", items: ["1 galleta sanissima", "1 lata de atún en agua", "con limón + sal + 1 cucharada de yogurt natural", "1/3 taza de elotitos amarillos", "1 taza de pepino, tomate, cebolla y vegetales al gusto"], calories: "~230 kcal" }
            },
            wednesday: {
                desayuno: { name: "TÍPICO", items: ["90 gr de plátano salcochado", "1 onza de queso mozzarella o 2 cucharadas de requesón", "2 huevos picados"], calories: "~370 kcal" },
                almuerzo: { name: "PICADO DE CARNE", items: ["6 onzas de carne molida magra", "mezclar con 120 gr de papa", "salsa de tomate natural", "1 taza de ensalada fresca", "15 gr de aguacate"], calories: "~480 kcal" },
                cena: { name: "PIZZA CASERA", items: ["1 flatbread Joseph's", "vegetales al gusto", "2 lascas de jamón de pavo", "1 onza de queso mozzarella", "1 taza de ensalada fresca con limón y sal"], calories: "~350 kcal" }
            },
            thursday: {
                desayuno: { name: "TOSTADA", items: ["1 rebanada de pan integral", "30 gr de aguacate", "2 cucharadas de requesón", "2 huevos duros en rodajas", "tomatada al gusto"], calories: "~380 kcal" },
                almuerzo: { name: "POLLO A LA PLANCHA", items: ["6 onzas de pollo a la plancha con mostaza, sal, pimienta", "1/2 taza de arroz", "1 taza de vegetales salteados con 1 cucharadita de aceite de oliva"], calories: "~470 kcal" },
                cena: { name: "OMELETTE", items: ["2 huevos con 1 lasca de jamón de pavo al gusto", "saltear con 1 cucharadita de aceite de oliva", "90 gr de plátano salcochado", "tomatada al gusto"], calories: "~360 kcal" }
            },
            friday: {
                desayuno: { name: "OMELETTE", items: ["4 claras + 1 lasca de jamón de pavo", "vegetales al gusto o 1/2 taza de hongos", "1 rebanada de pan integral", "15 gr de aguacate"], calories: "~280 kcal" },
                almuerzo: { name: "PASTA DE POLLO", items: ["6 onzas de pollo en tiras", "2/3 taza de pasta", "usar salsa de tomate natural al gusto"], calories: "~460 kcal" },
                cena: { name: "SANDWICH", items: ["2 rebanadas de pan integral", "1 lasca de queso mozzarella", "4 claras", "vegetales al gusto"], calories: "~380 kcal" }
            },
            saturday: {
                desayuno: { name: "RAPIDITAS DE ESPINACA", items: ["2 tortillas de rapiditas de quinoa", "1/2 taza de espinaca", "2 lascas de jamón de pavo + 1 huevo picado"], calories: "~300 kcal" },
                almuerzo: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Varies" },
                cena: { name: "PIZZA CASERA", items: ["1 flatbread Joseph's", "vegetales al gusto", "2 lascas de jamón de pavo", "1 onza de queso mozzarella", "1 taza de ensalada fresca con limón y sal"], calories: "~350 kcal" }
            },
            sunday: {
                desayuno: { name: "BOWL DE AVENA", items: ["1/3 taza de avena en hojuelas", "1 taza de leche de almendras silk baja en calorías", "1/2 taza de fruta", "1 huevo + 2 claras con vegetales"], calories: "~350 kcal" },
                almuerzo: { name: "TORTITAS DE PAVO", items: ["6 onzas de carne molida de pavo", "180 gr de papa en puré", "1 taza de vegetales salteados"], calories: "~480 kcal" },
                cena: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Varies" }
            },
            meriendasAM: [
                { name: "Opción 1 AM", type: "am", items: ["1 rebanada de pan integral + 15 gr de aguacate"], calories: "~105 kcal" },
                { name: "Opción 2 AM", type: "am", items: ["2 galletas de arroz + 1 guineo pequeño"], calories: "~150 kcal" },
                { name: "Opción 3 AM", type: "am", items: ["10 almendras + 1 taza de fruta"], calories: "~150 kcal" }
            ],
            meriendasPM: [
                { name: "Opción 1 PM", type: "pm", items: ["1 taza de fruta variada"], calories: "~80-100 kcal" },
                { name: "Opción 2 PM", type: "pm", items: ["1 cucharada de mantequilla de maní Tosh + 1 rebanada de pan integral"], calories: "~180 kcal" },
                { name: "Opción 3 PM", type: "pm", items: ["1 manzana con limón y sal"], calories: "~80 kcal" },
                { name: "Opción 4 PM", type: "pm", items: ["1 taza de gelatina light + 1/2 taza de fruta"], calories: "~60 kcal" },
                { name: "Opción 5 PM", type: "pm", items: ["4 galletas de arroz con mermelada light"], calories: "~160 kcal" }
            ]
        }
    },
    "febrero2025": {
        name: "February",
        planTagClass: "plan-tag-febrero",
        cardClass: "meal-card-febrero",
        data: {
            monday: {
                desayuno: { name: "TÍPICO", items: ["1/3 taza de frijoles cocidos", "1 rebanada de pan integral", "2 huevos enteros", "1 manzana pequeña"], calories: "~400 kcal" },
                almuerzo: { name: "QUINOA CON VERDURAS ASADAS", items: ["1/2 taza de quinoa cocida", "berenjena, pimientos asados", "espinaca, tomate cherry", "1 onza de queso feta", "vinagreta (1 cdita de aceite de oliva, vinagre balsámico, sal y pimienta)", "4 onzas de pechuga de pollo"], calories: "~450 kcal" },
                cena: { name: "TORTILLA DE ESPINACA Y CLARAS", items: ["4 claras de huevo", "1/3 taza de espinacas frescas", "1/3 taza de tofu", "1 cucharadita de aceite", "sal y pimienta al gusto"], calories: "~200 kcal" }
            },
            tuesday: {
                desayuno: { name: "YOGURT CON GRANOLA Y FRUTA", items: ["150g. De yogurt griego (Pricemark)", "1/3 taza de granola", "6 fresas cortadas en cuadros"], calories: "~300 kcal" },
                almuerzo: { name: "BOWL DE QUINOA CON GARBANZOS Y TOFU", items: ["1/2 taza de quinoa cocida", "1/3 taza de garbanzos cocidos", "100 g de tofu en cubos", "zanahoria rallada", "espinacas", "curry, limón"], calories: "~420 kcal" },
                cena: { name: "OMELETTE DE ESPINACAS Y CHAMPIÑONES", items: ["3 huevos enteros", "1/2 taza de espinacas frescas", "1 cucharadita de aceite de oliva", "1 rebanada de pan integral"], calories: "~350 kcal" }
            },
            wednesday: {
                desayuno: { name: "CEREAL Y LECHE", items: ["1 taza de leche descremada deslactosada", "2 tazas de corn flakes", "1 guineo pequeño"], calories: "~300 kcal" },
                almuerzo: { name: "ENSALADA DE LENTEJAS Y VEGETALES", items: ["1/2 taza de lentejas cocidas", "1/2 taza de zucchini asados", "berenjena asada", "pimientos rojos", "1 cucharadita de semillas de girasol", "6 onzas de salmón a la plancha"], calories: "~550 kcal" },
                cena: { name: "SALTEADO DE EDAMAMES Y VEGETALES", items: ["1/2 taza de edamames cocidos", "1/2 taza de tofu", "1/2 taza de brócoli", "1/3 taza de zanahorias", "salsa de soja", "jengibre al gusto"], calories: "~300 kcal" }
            },
            thursday: {
                desayuno: { name: "TÍPICO", items: ["1/3 taza de frijoles cocidos", "1 rebanada de pan integral", "1 huevo entero con 1 lasca de jamón de pavo", "1 manzana pequeña"], calories: "~380 kcal" },
                almuerzo: { name: "QUINOA CON VERDURAS ASADAS", items: ["1/2 taza de quinoa cocida", "berenjena, pimientos asados", "espinaca, tomate cherry", "1 onza de queso feta", "vinagreta (1 cdita de aceite de oliva, vinagre balsámico, sal y pimienta)", "(Proteína no especificada, añadir según preferencia)"], calories: "~300 kcal + Protein" },
                cena: { name: "TORTILLA DE ESPINACA Y CLARAS", items: ["4 claras de huevo", "1/3 taza de espinacas frescas", "1/3 taza de tofu", "1 cucharadita de aceite", "sal y pimienta al gusto"], calories: "~200 kcal" }
            },
            friday: {
                desayuno: { name: "YOGURT CON GRANOLA Y FRUTA", items: ["150g. De yogurt griego (Pricemark)", "1/3 taza de granola", "6 fresas cortadas en cuadros"], calories: "~300 kcal" },
                almuerzo: { name: "BOWL DE QUINOA CON GARBANZOS Y TOFU", items: ["1/2 taza de quinoa cocida", "1/3 taza de garbanzos cocidos", "100 g de tofu en cubos", "zanahoria rallada", "espinacas", "curry, limón"], calories: "~420 kcal" },
                cena: { name: "OMELETTE DE ESPINACAS Y CHAMPIÑONES", items: ["3 huevos enteros", "1/2 taza de espinacas frescas", "1 cucharadita de aceite de oliva", "1 rebanada de pan integral"], calories: "~350 kcal" }
            },
            saturday: {
                desayuno: { name: "CEREAL Y LECHE", items: ["1 taza de leche descremada deslactosada", "2 tazas de corn flakes", "1 guineo pequeño"], calories: "~300 kcal" },
                almuerzo: { name: "ENSALADA DE LENTEJAS Y VEGETALES", items: ["1/2 taza de lentejas cocidas", "1/2 taza de zucchini asados", "berenjena asada", "pimientos rojos", "1 cucharadita de semillas de girasol", "6 onzas de salmón a la plancha"], calories: "~550 kcal" },
                cena: { name: "SALTEADO DE EDAMAMES Y VEGETALES", items: ["1/2 taza de edamames cocidos", "1/2 taza de tofu", "1/2 taza de brócoli", "1/3 taza de zanahorias", "salsa de soja", "jengibre al gusto"], calories: "~300 kcal" }
            },
            sunday: {
                desayuno: { name: "TOSTADA DE AGUACATE CON HUEVO", items: ["1 rebanada de pan integral", "100g de aguacate", "1 huevo duro"], calories: "~350 kcal" },
                almuerzo: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Varies" },
                cena: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Varies" }
            },
            meriendas: [ 
                { name: "Merienda AM", type: "am", items: ["1 scoop de whey protein + 1 taza de leche de almendras"], calories: "~150-180 kcal" },
                { name: "Merienda PM", type: "pm", items: ["1 yogurt Dos Pinos Protein Plus"], calories: "~100-120 kcal" }
            ]
        }
    },
    "meriendasFitAdicionales": {
        name: "Fit Snacks (Additional)",
        planTagClass: "plan-tag-merienda",
        cardClass: "meal-card-merienda",
        items: [
            { name: "Opción 1", type: "all", items: ["1 yogurt griego Dos Pinos Plus + 2 cucharadas de arándanos"], calories: "~140 kcal" },
            { name: "Opción 2", type: "all", items: ["Enrollados de jamón de pavo con queso cottage (2 lascas de jamón de pavo con 1 cada. De queso cottage cada uno, acompañar con pepino y tomate)"], calories: "~150 kcal" },
            { name: "Opción 3", type: "all", items: ["Batido de proteína con avena y cacao: 1 scoop de whey protein + 1/3 taza de avena + 1 cucharadita de cacao"], calories: "~280 kcal" },
            { name: "Opción 4", type: "all", items: ["1 barrita de proteína Quest (GNC)"], calories: "~180-210 kcal" },
            { name: "Opción 5", type: "all", items: ["Manzana con mantequilla de maní (1 manzana pequeña + 1 cucharada de mantequilla de maní)"], calories: "~180 kcal" }
        ]
    }
};

// Export for use in app.js
export { allPlansData }; 