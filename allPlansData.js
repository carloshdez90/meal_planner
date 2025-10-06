// Diet plans and snacks data for the Diet Planner app
// Exported as a module for use in app.js

const allPlansData = {
    "octubre2024": {
        name: "October",
        planTagClass: "plan-tag-octubre",
        cardClass: "meal-card-octubre",
        data: {
            monday: {
                desayuno: { name: "HUEVOS PICADOS", items: ["5 claras + 1 lasca de jamón", "90 gr de plátano", "vegetales al gusto"], calories: "~215 kcal" },
                almuerzo: { name: "CARNE A LA PLANCHA", items: ["6 onzas de carne a la plancha", "180 gr de papa en cubos con 1 cdta de aceite de oliva", "1 taza de chimol"], calories: "~540 kcal" },
                cena: { name: "ATÚN", items: ["1 galleta sanissima", "1 lata de atún en agua", "con limón + sal + 1 cda de yogurt natural", "1/3 taza de elotitos amarillos", "1 taza de pepino, tomate, cebolla y vegetales al gusto"], calories: "~285 kcal" }
            },
            tuesday: {
                desayuno: { name: "BOWL DE AVENA", items: ["1/3 taza de avena en hojuelas", "1 taza de leche de almendras silk baja en calorías", "1/2 taza de fruta", "1 huevo + 2 claras con vegetales"], calories: "~310 kcal" },
                almuerzo: { name: "PASTA DE POLLO", items: ["6 onzas de pollo en tiras", "2/3 taza de pasta", "salsa de tomate natural al gusto"], calories: "~610 kcal" },
                cena: { name: "SANDWICH", items: ["2 rebanadas de pan integral", "1 lasca de queso mozzarella", "4 claras", "vegetales al gusto"], calories: "~330 kcal" }
            },
            wednesday: {
                desayuno: { name: "RAPIDITAS DE ESPINACA", items: ["2 tortillas de rapiditas de quinoa", "1/2 taza de espinaca", "2 lascas de jamón de pavo + 1 huevo picado"], calories: "~315 kcal" },
                almuerzo: { name: "TORTITAS DE CARNE", items: ["6 onzas de carne molida magra", "salsa de tomate natural", "1/2 taza de quinoa o arroz", "15 gr de aguacate"], calories: "~515 kcal" },
                cena: { name: "BOWL MEXICANO", items: ["1 taza de pepino", "1/3 taza de elotitos", "2 huevos duros picados", "1 onza de jamón de pavo", "30 gr de aguacate", "1 galleta sanissima"], calories: "~380 kcal" }
            },
            thursday: {
                desayuno: { name: "HUEVOS PICADOS", items: ["5 claras + 1 lasca de jamón", "90 gr de plátano", "vegetales al gusto"], calories: "~215 kcal" },
                almuerzo: { name: "POLLO AL LIMÓN", items: ["6 onzas de pollo en tiras + 1 cdta de aceite de oliva con limón y eneldo", "1/2 taza de arroz", "1 taza de zucchini asado"], calories: "~455 kcal" },
                cena: { name: "OMELETTE", items: ["2 huevos con 1 lasca de jamón de pavo al gusto", "saltear con 1 cdta de aceite de oliva", "90 gr de plátano salcochado", "tomatada al gusto"], calories: "~310 kcal" }
            },
            friday: {
                desayuno: { name: "HUEVOS PICADOS", items: ["5 claras + 1 lasca de jamón", "90 gr de plátano", "vegetales al gusto"], calories: "~215 kcal" },
                almuerzo: { name: "PASTA DE POLLO", items: ["6 onzas de pollo en tiras", "2/3 taza de pasta", "usar salsa de tomate natural al gusto"], calories: "~610 kcal" },
                cena: { name: "SANDWICH", items: ["2 rebanadas de pan integral", "1 lasca de queso mozzarella", "4 claras", "vegetales al gusto"], calories: "~330 kcal" }
            },
            saturday: {
                desayuno: { name: "RAPIDITAS DE ESPINACA", items: ["2 tortillas de rapiditas de quinoa", "1/2 taza de espinaca", "2 lascas de jamón de pavo + 1 huevo picado"], calories: "~315 kcal" },
                almuerzo: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" },
                cena: { name: "BOWL MEXICANO", items: ["1 taza de pepino", "1/3 taza de elotitos", "2 huevos duros picados", "1 onza de jamón de pavo", "30 gr de aguacate", "1 galleta sanissima"], calories: "~380 kcal" }
            },
            sunday: {
                desayuno: { name: "BOWL DE AVENA", items: ["1/3 taza de avena en hojuelas", "1 taza de leche de almendras silk baja en calorías", "1/2 taza de fruta", "1 huevo + 2 claras con vegetales"], calories: "~310 kcal" },
                almuerzo: { name: "TORTITAS DE PAVO", items: ["6 onzas de carne molida de pavo", "180 gr de papa en puré", "1 taza de vegetales salteados"], calories: "~490 kcal" },
                cena: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" }
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
                desayuno: { name: "TOSTADA", items: ["1 rebanada de pan integral", "30 gr de aguacate", "2 cucharadas de requesón", "2 huevos duros en rodajas", "tomatada al gusto"], calories: "~330 kcal" },
                almuerzo: { name: "TACOS DE CARNE", items: ["6 onzas de carne en tiras", "4 tortillas para tacos", "1 taza de chimol"], calories: "~560 kcal" },
                cena: { name: "SANDWICH", items: ["2 rebanadas de pan integral", "1 lasca de queso mozzarella", "4 claras", "vegetales al gusto"], calories: "~330 kcal" }
            },
            tuesday: {
                desayuno: { name: "BOWL DE AVENA", items: ["1/3 taza de avena en hojuelas", "1 taza de leche de almendras silk baja en calorías", "1/2 taza de fruta", "1 huevo + 2 claras con vegetales"], calories: "~310 kcal" },
                almuerzo: { name: "PASTA DE POLLO", items: ["6 onzas de pollo en tiras", "2/3 taza de pasta", "usar salsa de tomate natural al gusto"], calories: "~610 kcal" },
                cena: { name: "ATÚN", items: ["1 galleta sanissima", "1 lata de atún en agua", "con limón + sal + 1 cucharada de yogurt natural", "1/3 taza de elotitos amarillos", "1 taza de pepino, tomate, cebolla y vegetales al gusto"], calories: "~285 kcal" }
            },
            wednesday: {
                desayuno: { name: "TÍPICO", items: ["90 gr de plátano salcochado", "1 onza de queso mozzarella o 2 cucharadas de requesón", "2 huevos picados"], calories: "~270 kcal" },
                almuerzo: { name: "PICADO DE CARNE", items: ["6 onzas de carne molida magra", "mezclar con 120 gr de papa", "salsa de tomate natural", "1 taza de ensalada fresca", "15 gr de aguacate"], calories: "~520 kcal" },
                cena: { name: "PIZZA CASERA", items: ["1 flatbread Joseph's", "vegetales al gusto", "2 lascas de jamón de pavo", "1 onza de queso mozzarella", "1 taza de ensalada fresca con limón y sal"], calories: "~280 kcal" }
            },
            thursday: {
                desayuno: { name: "TOSTADA", items: ["1 rebanada de pan integral", "30 gr de aguacate", "2 cucharadas de requesón", "2 huevos duros en rodajas", "tomatada al gusto"], calories: "~330 kcal" },
                almuerzo: { name: "POLLO A LA PLANCHA", items: ["6 onzas de pollo a la plancha con mostaza, sal, pimienta", "1/2 taza de arroz", "1 taza de vegetales salteados con 1 cucharadita de aceite de oliva"], calories: "~450 kcal" },
                cena: { name: "OMELETTE", items: ["2 huevos con 1 lasca de jamón de pavo al gusto", "saltear con 1 cucharadita de aceite de oliva", "90 gr de plátano salcochado", "tomatada al gusto"], calories: "~310 kcal" }
            },
            friday: {
                desayuno: { name: "OMELETTE", items: ["4 claras + 1 lasca de jamón de pavo", "vegetales al gusto o 1/2 taza de hongos", "1 rebanada de pan integral", "15 gr de aguacate"], calories: "~210 kcal" },
                almuerzo: { name: "PASTA DE POLLO", items: ["6 onzas de pollo en tiras", "2/3 taza de pasta", "usar salsa de tomate natural al gusto"], calories: "~610 kcal" },
                cena: { name: "SANDWICH", items: ["2 rebanadas de pan integral", "1 lasca de queso mozzarella", "4 claras", "vegetales al gusto"], calories: "~330 kcal" }
            },
            saturday: {
                desayuno: { name: "RAPIDITAS DE ESPINACA", items: ["2 tortillas de rapiditas de quinoa", "1/2 taza de espinaca", "2 lascas de jamón de pavo + 1 huevo picado"], calories: "~315 kcal" },
                almuerzo: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" },
                cena: { name: "PIZZA CASERA", items: ["1 flatbread Joseph's", "vegetales al gusto", "2 lascas de jamón de pavo", "1 onza de queso mozzarella", "1 taza de ensalada fresca con limón y sal"], calories: "~280 kcal" }
            },
            sunday: {
                desayuno: { name: "BOWL DE AVENA", items: ["1/3 taza de avena en hojuelas", "1 taza de leche de almendras silk baja en calorías", "1/2 taza de fruta", "1 huevo + 2 claras con vegetales"], calories: "~310 kcal" },
                almuerzo: { name: "TORTITAS DE PAVO", items: ["6 onzas de carne molida de pavo", "180 gr de papa en puré", "1 taza de vegetales salteados"], calories: "~490 kcal" },
                cena: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" }
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
                desayuno: { name: "TÍPICO", items: ["1/3 taza de frijoles cocidos", "1 rebanada de pan integral", "2 huevos enteros", "1 manzana pequeña"], calories: "~350 kcal" },
                almuerzo: { name: "QUINOA CON VERDURAS ASADAS", items: ["1/2 taza de quinoa cocida", "berenjena, pimientos asados", "espinaca, tomate cherry", "1 onza de queso feta", "vinagreta (1 cdita de aceite de oliva, vinagre balsámico, sal y pimienta)", "4 onzas de pechuga de pollo"], calories: "~495 kcal" },
                cena: { name: "TORTILLA DE ESPINACA Y CLARAS", items: ["4 claras de huevo", "1/3 taza de espinacas frescas", "1/3 taza de tofu", "1 cucharadita de aceite", "sal y pimienta al gusto"], calories: "~195 kcal" }
            },
            tuesday: {
                desayuno: { name: "YOGURT CON GRANOLA Y FRUTA", items: ["150g. De yogurt griego (Pricemark)", "1/3 taza de granola", "6 fresas cortadas en cuadros"], calories: "~305 kcal" },
                almuerzo: { name: "BOWL DE QUINOA CON GARBANZOS Y TOFU", items: ["1/2 taza de quinoa cocida", "1/3 taza de garbanzos cocidos", "100 g de tofu en cubos", "zanahoria rallada", "espinacas", "curry, limón"], calories: "~350 kcal" },
                cena: { name: "OMELETTE DE ESPINACAS Y CHAMPIÑONES", items: ["3 huevos enteros", "1/2 taza de espinacas frescas", "1 cucharadita de aceite de oliva", "1 rebanada de pan integral"], calories: "~340 kcal" }
            },
            wednesday: {
                desayuno: { name: "CEREAL Y LECHE", items: ["1 taza de leche descremada deslactosada", "2 tazas de corn flakes", "1 guineo pequeño"], calories: "~380 kcal" },
                almuerzo: { name: "ENSALADA DE LENTEJAS Y VEGETALES", items: ["1/2 taza de lentejas cocidas", "1/2 taza de zucchini asados", "berenjena asada", "pimientos rojos", "1 cucharadita de semillas de girasol", "6 onzas de salmón a la plancha"], calories: "~535 kcal" },
                cena: { name: "SALTEADO DE EDAMAMES Y VEGETALES", items: ["1/2 taza de edamames cocidos", "1/2 taza de tofu", "1/2 taza de brócoli", "1/3 taza de zanahorias", "salsa de soja", "jengibre al gusto"], calories: "~210 kcal" }
            },
            thursday: {
                desayuno: { name: "TÍPICO", items: ["1/3 taza de frijoles cocidos", "1 rebanada de pan integral", "1 huevo entero con 1 lasca de jamón de pavo", "1 manzana pequeña"], calories: "~330 kcal" },
                almuerzo: { name: "QUINOA CON VERDURAS ASADAS", items: ["1/2 taza de quinoa cocida", "berenjena, pimientos asados", "espinaca, tomate cherry", "1 onza de queso feta", "vinagreta (1 cdita de aceite de oliva, vinagre balsámico, sal y pimienta)", "(Proteína no especificada, añadir según preferencia)"], calories: "~310 kcal + Proteína" },
                cena: { name: "TORTILLA DE ESPINACA Y CLARAS", items: ["4 claras de huevo", "1/3 taza de espinacas frescas", "1/3 taza de tofu", "1 cucharadita de aceite", "sal y pimienta al gusto"], calories: "~195 kcal" }
            },
            friday: {
                desayuno: { name: "YOGURT CON GRANOLA Y FRUTA", items: ["150g. De yogurt griego (Pricemark)", "1/3 taza de granola", "6 fresas cortadas en cuadros"], calories: "~305 kcal" },
                almuerzo: { name: "BOWL DE QUINOA CON GARBANZOS Y TOFU", items: ["1/2 taza de quinoa cocida", "1/3 taza de garbanzos cocidos", "100 g de tofu en cubos", "zanahoria rallada", "espinacas", "curry, limón"], calories: "~350 kcal" },
                cena: { name: "OMELETTE DE ESPINACAS Y CHAMPIÑONES", items: ["3 huevos enteros", "1/2 taza de espinacas frescas", "1 cucharadita de aceite de oliva", "1 rebanada de pan integral"], calories: "~340 kcal" }
            },
            saturday: {
                desayuno: { name: "CEREAL Y LECHE", items: ["1 taza de leche descremada deslactosada", "2 tazas de corn flakes", "1 guineo pequeño"], calories: "~380 kcal" },
                almuerzo: { name: "ENSALADA DE LENTEJAS Y VEGETALES", items: ["1/2 taza de lentejas cocidas", "1/2 taza de zucchini asados", "berenjena asada", "pimientos rojos", "1 cucharadita de semillas de girasol", "6 onzas de salmón a la plancha"], calories: "~535 kcal" },
                cena: { name: "SALTEADO DE EDAMAMES Y VEGETALES", items: ["1/2 taza de edamames cocidos", "1/2 taza de tofu", "1/2 taza de brócoli", "1/3 taza de zanahorias", "salsa de soja", "jengibre al gusto"], calories: "~210 kcal" }
            },
            sunday: {
                desayuno: { name: "TOSTADA DE AGUACATE CON HUEVO", items: ["1 rebanada de pan integral", "100g de aguacate", "1 huevo duro"], calories: "~300 kcal" },
                almuerzo: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" },
                cena: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" }
            },
            meriendas: [ 
                { name: "Merienda AM", type: "am", items: ["1 scoop de whey protein + 1 taza de leche de almendras"], calories: "~150-180 kcal" },
                { name: "Merienda PM", type: "pm", items: ["1 yogurt Dos Pinos Protein Plus"], calories: "~100-120 kcal" }
            ]
        }
    },
    "agosto2025": {
        name: "August",
        planTagClass: "plan-tag-agosto",
        cardClass: "meal-card-agosto",
        data: {
            monday: {
                desayuno: { name: "TOSTADA DE AGUACATE CON HUEVO", items: ["2 rebanadas de pan integral", "2 huevos duros"], calories: "~300 kcal" },
                almuerzo: { name: "TACOS DE RES", items: ["6 onzas de carne molida magra", "4 tortillas de maíz para taco", "chirimol"], calories: "~550 kcal" },
                cena: { name: "ENSALADA DE ATÚN", items: ["1 lata de atún en agua", "1 taza de lechuga, arugula y espinaca", "1 tomate grande cortado en cubos", "1/2 pepino en cubos", "2 cucharadas de aderezo de vinagre balsámico", "1 rebanada de pan integral"], calories: "~280 kcal" }
            },
            tuesday: {
                desayuno: { name: "WRAP DE ESPINACA Y PAVO", items: ["1 tortilla integral grande", "2 lascas de jamón de pavo", "1/3 taza de espinacas", "1/3 de aguacate en rodajas"], calories: "~275 kcal" },
                almuerzo: { name: "TILAPIA A LA PLANCHA", items: ["6 onzas de tilapia con limón, sal, pimienta y paprica + perejil y cilantro", "2 tortillas salvadoreñas", "1 taza de vegetales salteados"], calories: "~390 kcal" },
                cena: { name: "OMELETTE DE ESPINACAS Y CHAMPIÑONES", items: ["4 claras de huevo", "1/2 taza de espinacas frescas", "1 cucharadita de aceite de oliva", "2 rebanadas de pan integral"], calories: "~275 kcal" }
            },
            wednesday: {
                desayuno: { name: "TÍPICO", items: ["2 rebanadas de pan integral", "4 cucharadas de queso cottage", "1 taza de fruta variada"], calories: "~320 kcal" },
                almuerzo: { name: "SANDWICH INTEGRAL", items: ["2 rebanadas de pan integral", "2 lascas de jamón de pavo", "2 lascas de queso mozzarella", "lechuga y tomate"], calories: "~320 kcal" },
                cena: { name: "SUBWAY INTEGRAL DE ROAST BEEF", items: ["Subway integral de roast beef"], calories: "~400 kcal" }
            },
            thursday: {
                desayuno: { name: "TOSTADA DE AGUACATE CON HUEVO", items: ["2 rebanadas de pan integral", "2 huevos duros"], calories: "~300 kcal" },
                almuerzo: { name: "TACOS DE RES", items: ["6 onzas de carne molida magra", "4 tortillas de maíz para taco", "chirimol"], calories: "~550 kcal" },
                cena: { name: "ENSALADA DE ATÚN", items: ["1 lata de atún en agua", "1 taza de lechuga, arugula y espinaca", "1 tomate grande cortado en cubos", "1/2 pepino en cubos", "2 cucharadas de aderezo de vinagre balsámico", "1 rebanada de pan integral"], calories: "~280 kcal" }
            },
            friday: {
                desayuno: { name: "WRAP DE ESPINACA Y PAVO", items: ["1 tortilla integral grande", "2 lascas de jamón de pavo", "1/3 taza de espinacas", "1/3 de aguacate en rodajas"], calories: "~275 kcal" },
                almuerzo: { name: "TILAPIA A LA PLANCHA", items: ["6 onzas de tilapia con limón, sal, pimienta y paprica + perejil y cilantro", "2 tortillas salvadoreñas", "1 taza de vegetales salteados"], calories: "~390 kcal" },
                cena: { name: "OMELETTE DE ESPINACAS Y CHAMPIÑONES", items: ["4 claras de huevo", "1/2 taza de espinacas frescas", "1 cucharadita de aceite de oliva", "2 rebanadas de pan integral"], calories: "~275 kcal" }
            },
            saturday: {
                desayuno: { name: "TÍPICO", items: ["2 rebanadas de pan integral", "4 cucharadas de queso cottage", "1 taza de fruta variada"], calories: "~320 kcal" },
                almuerzo: { name: "SANDWICH INTEGRAL", items: ["2 rebanadas de pan integral", "2 lascas de jamón de pavo", "2 lascas de queso mozzarella", "lechuga y tomate"], calories: "~320 kcal" },
                cena: { name: "SUBWAY INTEGRAL DE ROAST BEEF", items: ["Subway integral de roast beef"], calories: "~400 kcal" }
            },
            sunday: {
                desayuno: { name: "TOSTADA DE AGUACATE CON HUEVO", items: ["2 rebanadas de pan integral", "2 huevos duros"], calories: "~300 kcal" },
                almuerzo: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" },
                cena: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" }
            },
            meriendasAM: [
                { name: "Merienda AM", type: "am", items: ["1 barra de granola natural valley o 1 galleta salmas"], calories: "~90-100 kcal" }
            ],
            meriendasPM: [
                { name: "Merienda PM", type: "pm", items: ["1 paquetito de granola natural valley o 1 galleta tosh"], calories: "~90-100 kcal" }
            ]
        }
    },
    "ia1": {
        name: "IA 1",
        planTagClass: "plan-tag-ia1",
        cardClass: "meal-card-ia1",
        data: {
            monday: {
                desayuno: { name: "CASAMIENTO CON HUEVO", items: ["1/3 taza de frijoles rojos", "1/3 taza de arroz", "2 huevos revueltos", "1 rebanada de queso fresco", "chimol al gusto"], calories: "~385 kcal" },
                almuerzo: { name: "POLLO GUISADO", items: ["6 onzas de pollo en trozos guisado con tomate y cebolla", "1/2 taza de arroz blanco", "ensalada de pepino y rábano"], calories: "~485 kcal" },
                cena: { name: "QUESADILLA LIGHT", items: ["2 tortillas de maíz", "1 onza de quesillo o queso mozzarella", "1 taza de loroco (opcional) o espinaca", "chimol"], calories: "~260 kcal" }
            },
            tuesday: {
                desayuno: { name: "PLÁTANO CON FRIJOLES Y CREMA", items: ["90 gr de plátano maduro asado", "1/4 taza de frijoles molidos", "2 cucharadas de crema salvadoreña light", "1 huevo duro"], calories: "~310 kcal" },
                almuerzo: { name: "PESCADO FRITO CON ENSALADA", items: ["6 onzas de pescado (tilapia) a la plancha", "ensalada mixta (lechuga, tomate, pepino, rábano)", "2 tortillas salvadoreñas", "limón al gusto"], calories: "~380 kcal" },
                cena: { name: "SOPA DE POLLO CON VEGETALES", items: ["4 onzas de pechuga de pollo desmenuzada", "1 taza de caldo con güisquil, zanahoria y papa (120gr total)", "1 rebanada de pan integral"], calories: "~295 kcal" }
            },
            wednesday: {
                desayuno: { name: "LICUADO DE GUINEO CON AVENA", items: ["1 guineo mediano", "1 taza de leche descremada", "2 cucharadas de avena", "1 huevo cocido aparte"], calories: "~330 kcal" },
                almuerzo: { name: "CARNE ASADA CON CHIMOL", items: ["6 onzas de carne de res asada", "1 taza de chimol", "2 tortillas de maíz", "ensalada verde"], calories: "~535 kcal" },
                cena: { name: "TORTILLA DE HUEVO CON VEGETALES", items: ["3 huevos con tomate, cebolla y chile verde picado", "1 tortilla de maíz", "aguacate (30gr)"], calories: "~335 kcal" }
            },
            thursday: {
                desayuno: { name: "PAN CON PAVO Y AGUACATE", items: ["2 rebanadas de pan integral", "2 lascas de jamón de pavo", "30 gr de aguacate", "tomate en rodajas"], calories: "~285 kcal" },
                almuerzo: { name: "ARROZ CON POLLO SALVADOREÑO", items: ["6 onzas de pollo desmenuzado", "1/2 taza de arroz con vegetales (arvejas, zanahoria)", "ensalada fresca"], calories: "~470 kcal" },
                cena: { name: "ATÚN CON VEGETALES", items: ["1 lata de atún en agua", "ensalada de lechuga, tomate, pepino, cebolla", "1 tortilla salvadoreña", "limón y sal"], calories: "~245 kcal" }
            },
            friday: {
                desayuno: { name: "CASAMIENTO CON HUEVO", items: ["1/3 taza de frijoles rojos", "1/3 taza de arroz", "2 huevos revueltos", "1 rebanada de queso fresco", "chimol al gusto"], calories: "~385 kcal" },
                almuerzo: { name: "PESCADO EN ESCABECHE", items: ["6 onzas de pescado con cebolla, tomate y chile verde", "1/2 taza de arroz", "ensalada de repollo"], calories: "~450 kcal" },
                cena: { name: "QUESADILLA LIGHT", items: ["2 tortillas de maíz", "1 onza de quesillo o queso mozzarella", "1 taza de loroco (opcional) o espinaca", "chimol"], calories: "~260 kcal" }
            },
            saturday: {
                desayuno: { name: "PLÁTANO CON FRIJOLES Y CREMA", items: ["90 gr de plátano maduro asado", "1/4 taza de frijoles molidos", "2 cucharadas de crema salvadoreña light", "1 huevo duro"], calories: "~310 kcal" },
                almuerzo: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" },
                cena: { name: "SOPA DE POLLO CON VEGETALES", items: ["4 onzas de pechuga de pollo desmenuzada", "1 taza de caldo con güisquil, zanahoria y papa (120gr total)", "1 rebanada de pan integral"], calories: "~295 kcal" }
            },
            sunday: {
                desayuno: { name: "LICUADO DE GUINEO CON AVENA", items: ["1 guineo mediano", "1 taza de leche descremada", "2 cucharadas de avena", "1 huevo cocido aparte"], calories: "~330 kcal" },
                almuerzo: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" },
                cena: { name: "TORTILLA DE HUEVO CON VEGETALES", items: ["3 huevos con tomate, cebolla y chile verde picado", "1 tortilla de maíz", "aguacate (30gr)"], calories: "~335 kcal" }
            },
            meriendasAM: [
                { name: "Merienda AM", type: "am", items: ["1 mango pequeño o 1 taza de papaya"], calories: "~90-100 kcal" }
            ],
            meriendasPM: [
                { name: "Merienda PM", type: "pm", items: ["1 porción de jocote o 2 nísperos"], calories: "~60-80 kcal" }
            ]
        }
    },
    "ia2": {
        name: "IA 2",
        planTagClass: "plan-tag-ia2",
        cardClass: "meal-card-ia2",
        data: {
            monday: {
                desayuno: { name: "HUEVOS RANCHEROS LIGHT", items: ["2 huevos estrellados", "2 tortillas de maíz", "salsa ranchera casera", "frijoles volteados (1/4 taza)"], calories: "~340 kcal" },
                almuerzo: { name: "PECHUGA A LA PLANCHA CON YUCA", items: ["6 onzas de pechuga de pollo", "150 gr de yuca cocida", "curtido de repollo", "chimol"], calories: "~460 kcal" },
                cena: { name: "ENSALADA DE POLLO", items: ["4 onzas de pollo desmenuzado", "lechuga, tomate, pepino, rábano", "1 cucharada de aderezo light", "1 rebanada de pan integral"], calories: "~280 kcal" }
            },
            tuesday: {
                desayuno: { name: "MOLLETES SALVADOREÑOS", items: ["2 rebanadas de pan francés integral", "1/4 taza de frijoles molidos", "2 cucharadas de queso fresco rallado", "pico de gallo"], calories: "~320 kcal" },
                almuerzo: { name: "CARNE DESHILACHADA", items: ["6 onzas de carne de res deshilachada guisada", "1/2 taza de arroz", "ensalada de pepino con limón"], calories: "~510 kcal" },
                cena: { name: "RIGUAS CON QUESO", items: ["2 riguas de elote", "1 onza de quesillo", "crema light (1 cucharada)"], calories: "~315 kcal" }
            },
            wednesday: {
                desayuno: { name: "EMPANADAS DE PLÁTANO CON FRIJOL", items: ["1 empanada de plátano con frijol", "1 vaso de leche descremada", "1 porción de fruta (mango o papaya)"], calories: "~365 kcal" },
                almuerzo: { name: "GALLINA GUISADA", items: ["6 onzas de gallina o pollo guisado con papa y zanahoria", "1/2 taza de arroz", "ensalada verde"], calories: "~495 kcal" },
                cena: { name: "SOPA DE FRIJOLES CON CERDO MAGRO", items: ["1 taza de sopa de frijoles", "2 onzas de cerdo magro", "1 tortilla de maíz", "aguacate (20gr)"], calories: "~340 kcal" }
            },
            thursday: {
                desayuno: { name: "ATOL DE ELOTE CON HUEVO", items: ["1 taza de atol de elote (sin azúcar o con stevia)", "2 huevos duros", "1 rebanada de pan integral"], calories: "~310 kcal" },
                almuerzo: { name: "TILAPIA AL AJO", items: ["6 onzas de tilapia con ajo y limón", "ensalada mixta grande", "2 tortillas salvadoreñas"], calories: "~390 kcal" },
                cena: { name: "PUPUSAS REVUELTAS LIGHT", items: ["2 pupusas de revueltas (pequeñas, hechas en casa con masa integral si es posible)", "curtido", "salsa"], calories: "~380 kcal" }
            },
            friday: {
                desayuno: { name: "HUEVOS RANCHEROS LIGHT", items: ["2 huevos estrellados", "2 tortillas de maíz", "salsa ranchera casera", "frijoles volteados (1/4 taza)"], calories: "~340 kcal" },
                almuerzo: { name: "SALPICÓN SALVADOREÑO", items: ["6 onzas de carne de res cocida y picada", "rábano, pepino, cebolla, hierbabuena", "2 tortillas de maíz"], calories: "~465 kcal" },
                cena: { name: "ENSALADA DE POLLO", items: ["4 onzas de pollo desmenuzado", "lechuga, tomate, pepino, rábano", "1 cucharada de aderezo light", "1 rebanada de pan integral"], calories: "~280 kcal" }
            },
            saturday: {
                desayuno: { name: "MOLLETES SALVADOREÑOS", items: ["2 rebanadas de pan francés integral", "1/4 taza de frijoles molidos", "2 cucharadas de queso fresco rallado", "pico de gallo"], calories: "~320 kcal" },
                almuerzo: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" },
                cena: { name: "RIGUAS CON QUESO", items: ["2 riguas de elote", "1 onza de quesillo", "crema light (1 cucharada)"], calories: "~315 kcal" }
            },
            sunday: {
                desayuno: { name: "EMPANADAS DE PLÁTANO CON FRIJOL", items: ["1 empanada de plátano con frijol", "1 vaso de leche descremada", "1 porción de fruta (mango o papaya)"], calories: "~365 kcal" },
                almuerzo: { name: "LIBRE CON MODERACIÓN", items: ["Disfruta de tu comida preferida con control"], calories: "Variable" },
                cena: { name: "SOPA DE FRIJOLES CON CERDO MAGRO", items: ["1 taza de sopa de frijoles", "2 onzas de cerdo magro", "1 tortilla de maíz", "aguacate (20gr)"], calories: "~340 kcal" }
            },
            meriendasAM: [
                { name: "Merienda AM", type: "am", items: ["1 marañón (10 unidades) o 1 guineo pequeño"], calories: "~85-95 kcal" }
            ],
            meriendasPM: [
                { name: "Merienda PM", type: "pm", items: ["1 taza de pepino con limón y sal o ensalada de frutas"], calories: "~50-80 kcal" }
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