// ====================================================================
// 1. DATOS Y MEDIDAS ANTROPOMÉTRICAS 
// ====================================================================

const MEDIDAS_ANTROPOMETRICAS = {
    // Tallas de Bebé (Añadido CCab)
    '00 (Prematuro)': { CP: 37.0, CC: 20.0, CA: 12.0, 'C Puño': 11.0, LT: 20.0, LM: 10.0, PSisa: 9.0, AE: 14.0, CED: 3.0, CCab: 32.0 },
    '0 meses': { CP: 39.0, CC: 21.0, CA: 13.0, 'C Puño': 12.0, LT: 22.0, LM: 12.0, PSisa: 10.0, AE: 16.0, CED: 3.5, CCab: 32.0 },
    '1-3 meses': { CP: 40.0, CC: 22.0, CA: 14.0, 'C Puño': 12.0, LT: 23.0, LM: 14.0, PSisa: 11.0, AE: 18.0, CED: 4.0, CCab: 35.0 }, 
    '3-6 meses': { CP: 44.0, CC: 23.0, CA: 16.0, 'C Puño': 12.5, LT: 24.0, LM: 16.0, PSisa: 12.0, AE: 20.0, CED: 4.5, CCab: 36.0 }, 
    '6-9 meses': { CP: 48.0, CC: 27.0, CA: 17.0, 'C Puño': 12.5, LT: 26.0, LM: 18.0, PSisa: 12.5, AE: 22.0, CED: 5.0, CCab: 41.0 }, 
    '9-12 meses': { CP: 52.0, CC: 25.0, CA: 18.0, 'C Puño': 12.5, LT: 28.0, LM: 20.0, PSisa: 13.0, AE: 24.0, CED: 5.5, CCab: 41.0 }, 
    '12-15 meses': { CP: 56.0, CC: 25.0, CA: 19.0, 'C Puño': 13.0, LT: 30.0, LM: 22.0, PSisa: 13.5, AE: 26.0, CED: 6.0, CCab: 41.0 }, 
    '15-18 meses': { CP: 60.0, CC: 26.0, CA: 20.0, 'C Puño': 13.5, LT: 32.0, LM: 25.0, PSisa: 14.0, AE: 28.0, CED: 6.5, CCab: 41.0 }, 
    '18-24 meses': { CP: 61.0, CC: 26.0, CA: 22.0, 'C Puño': 14.0, LT: 34.0, LM: 27.0, PSisa: 15.0, AE: 30.0, CED: 7.0, CCab: 41.0 }, 

    // Tallas de Niños (Añadido CCab)
    '3 años': { CP: 62.0, CC: 28.5, CA: 23, 'C Puño': 15.5, LT: 36.0, LM: 28.5, PSisa: 16.0, AE: 31.0, CED: 7.3, CCab: 48.0 }, 
    '4 años': { CP: 63.0, CC: 30.0, CA: 24.0, 'C Puño': 16.0, LT: 38.0, LM: 32.0, PSisa: 17.0, AE: 32.0, CED: 7.5, CCab: 48.0 },
    '6 años': { CP: 66.0, CC: 31.0, CA: 25.0, 'C Puño': 16.5, LT: 42.0, LM: 35.5, PSisa: 18.0, AE: 34.0, CED: 8.0, CCab: 48.0 },
    '8 años': { CP: 68.0, CC: 32.0, CA: 26.0, 'C Puño': 17.0, LT: 47.0, LM: 39.0, PSisa: 19.0, AE: 36.0, CED: 8.5, CCab: 48.0 },
    '10 años': { CP: 72.0, CC: 33.0, CA: 26.5, 'C Puño':18.0, LT: 50.0, LM: 43.0, PSisa: 20.0, AE: 38.0, CED: 9.0, CCab: 48.0 },
    
    // Tallas de Mujer (Adulto) (Añadido CCab)
    '36': { CP: 81.0, CC: 35.0, CA: 30.0, 'C Puño':19.3, LT: 58.0, LM: 47.0, PSisa: 22.0, AE: 35.0, CED: 11.0, CCab: 54.0 }, 
    '38': { CP: 86.0, CC: 36.0, CA: 32.0, 'C Puño': 19.5, LT: 60.0, LM: 48.0, PSisa: 22.5, AE: 36.0, CED: 11.5, CCab: 54.0 }, 
    '40': { CP: 92.0, CC: 37.0, CA: 33.0, 'C Puño': 20.6, LT: 61.0, LM: 48.5, PSisa: 23.0, AE: 36.8, CED: 12.0, CCab: 54.0 }, 
    '42': { CP: 100.0, CC: 38.0, CA: 35.0, 'C Puño': 20.8, LT: 62.0, LM: 49.0, PSisa: 24.0, AE: 37.6, CED: 12.5, CCab: 54.0 }, 
    '44': { CP: 104.0, CC: 40.0, CA: 37.0, 'C Puño': 21.5, LT: 63.0, LM: 50.0, PSisa: 25.0, AE: 38.6, CED: 13.0, CCab: 54.0 }, 
    '46': { CP: 108.0, CC: 39.0, CA: 38.0, 'C Puño': 22.2, LT: 64.0, LM: 51.0, PSisa: 26.0, AE: 39.6, CED: 13.5, CCab: 54.0 }, 
    '48': { CP: 112.0, CC: 40.0, CA: 39.0, 'C Puño': 23.4, LT: 66.0, LM: 52.0, PSisa: 27.0, AE: 40.6, CED: 14.0, CCab: 54.0 }, 
    '50': { CP: 116.0, CC: 41.0, CA: 40.0, 'C Puño': 23.6, LT: 68.0, LM: 54.0, PSisa: 28.0, AE: 41.6, CED: 14.5, CCab: 54.0 } 
};

// 1.1. MEDIDAS PARA CUBRE PAÑAL (CC: Contorno Cintura, AL: Altura Lateral, EP: EntrePierna, TR: Tramo Recto, LCD: Línea Cierre Delantero)
const MEDIDAS_CUBRE_PAÑAL = {
    '0 RN ': { CC: 38, AL: 10, EP: 7, TR: 1, LCD: 1 },
    '1 mes ': { CC: 40, AL: 11, EP: 7, TR: 1.5, LCD: 1.5 },
    '3 meses ': { CC: 42, AL: 11, EP: 8, TR: 2, LCD: 2 }, 
    '6 meses ': { CC: 44, AL: 12, EP: 8, TR: 2, LCD: 2 }, 
    '9 meses ': { CC: 46, AL: 12, EP: 9, TR: 2.5, LCD: 3 }, 
    '12 meses ': { CC: 48, AL: 13, EP: 10, TR: 2.5, LCD: 3 } 
};

// 1.2. MEDIDAS PARA GORRO (CC: Contorno de Cabeza, ALT: Altura Total, COR: Coronilla, REC: Tejido Recto, VUE: Vuelta/Borde)
const MEDIDAS_GORRO = {
   
     'RN- 0': { CC: 32.0, ALT: 12.0, COR: 4.0, REC: 7.0, VUE: 2.0 }, 
     '1-3 meses': { CC: 35.0, ALT: 14.0, COR: 4.0, REC: 9.0, VUE: 2.0 }, 
     '3-6 meses': { CC: 36.0, ALT: 17.0, COR: 5.0, REC: 9.5, VUE: 2.0 }, 
     '6 meses-2 años': { CC: 41.0, ALT: 19.0, COR: 5.0, REC: 10.5, VUE: 2.5 }, 
     'Niños': { CC: 48.0, ALT: 21.0, COR: 5.0, REC: 12.0, VUE: 3.0 }, 
     'Adolescentes': { CC: 52.0, ALT: 23.0, COR: 6.0, REC: 13.0, VUE: 4.0 }, 
     'Adultos': { CC: 54.0, ALT: 25.0, COR: 6.0, REC: 13.5, VUE: 5.0 }
};


// Mapeo unificado para referencias
const MAPA_MEDIDAS = {
    'Bebé (Prematuro a 24m)': MEDIDAS_ANTROPOMETRICAS,
    'Niños (3 a 10 años)': MEDIDAS_ANTROPOMETRICAS,
    'Adulto (36 a 50)': MEDIDAS_ANTROPOMETRICAS,
    'Cubre Pañal (0 a 12m)': MEDIDAS_CUBRE_PAÑAL,
    'Gorro (Tallas)': MEDIDAS_GORRO 
};

// ====================================================================
// 2. FUNCIONES DE UTILIDAD
// ====================================================================

/**
 * Función para generar la secuencia de cierres progresivos para la sisa/manga.
 */
function generarCierresProgresivosNuevo(totalPuntos, numPasadas) {
    if (totalPuntos <= 0 || numPasadas <= 0) {
        return "No requiere cierres/menguados o datos insuficientes.";
    }

    let cierres = [];
    let pasadasRestantes = numPasadas;
    let puntosRestantes = totalPuntos;

    if (totalPuntos <= 4) {
        const pasadasPorCierre = Math.max(1, Math.round(numPasadas / totalPuntos));
        return `Menguar 1 punto cada ${pasadasPorCierre} pasadas (total ${totalPuntos} veces).`;
    }

    // 1. Cierres/menguados grandes al inicio (para la curva más pronunciada)
    let puntosGrandes = Math.min(Math.floor(totalPuntos * 0.25), 6); 
    
    let secuenciaInicial = [];
    let puntosInicialesCerrados = 0;
    
    while (puntosInicialesCerrados < puntosGrandes) {
        let puntosCerrar = (puntosGrandes - puntosInicialesCerrados >= 3) ? 3 : 2;
        if (puntosCerrar > (puntosRestantes / 3) ) puntosCerrar = 2;

        secuenciaInicial.push(puntosCerrar);
        puntosInicialesCerrados += puntosCerrar;
        puntosRestantes -= puntosCerrar;
        pasadasRestantes -= 2; 
        if (puntosRestantes <= 0 || pasadasRestantes <= 0) break;
    }
    
    // 2. Cierres/menguados progresivos (el resto de la curva)
    if (puntosRestantes > 0 && pasadasRestantes > 0) {
        const pasadasPorPunto = pasadasRestantes / puntosRestantes;
        
        let contador = 0;
        let acumPasadas = 0;
        
        for (let i = 0; i < puntosRestantes; i++) {
            acumPasadas += pasadasPorPunto;
            const pasadasRedondeadas = Math.round(acumPasadas);
            const diferencia = pasadasRedondeadas - contador;
            
            if (diferencia > 0) {
                cierres.push(diferencia);
                contador += diferencia;
            } 
        }
        
        const sumaMenguados = cierres.reduce((sum, val) => sum + val, 0);
        const diferenciaFinal = pasadasRestantes - sumaMenguados;
        if (cierres.length > 0) {
            cierres[cierres.length - 1] += diferenciaFinal;
            if (cierres[cierres.length - 1] < 1) cierres[cierres.length - 1] = 1; // Asegurar un mínimo de 1 pasada
        }
    } else if (puntosRestantes > 0) {
        secuenciaInicial.push(puntosRestantes);
        puntosRestantes = 0;
    }

    // Formatear el resultado final
    let resultadoFinal = '';
    if (secuenciaInicial.length > 0) {
        resultadoFinal += `- **Curva Inicial:** Cerrar ${secuenciaInicial.map(p => `${p}`).join(', ')} puntos (al inicio de las siguientes vueltas).\n`;
    }
    if (cierres.length > 0) {
        const secuenciaProgresivaStr = cierres.map(p => `1 punto cada ${p} pasadas`).join(', luego ');
        resultadoFinal += `- **Curva Progresiva:** Menguar ${secuenciaProgresivaStr} (total ${puntosRestantes} veces).`;
    }
    
    if (puntosRestantes === 0 && secuenciaInicial.length > 0 && cierres.length === 0) {
        return `- **Cierre total:** Cerrar ${secuenciaInicial.map(p => `${p}`).join(', ')} puntos (al inicio de las siguientes vueltas).`;
    }
    
    return resultadoFinal.trim();
}

// ====================================================================
// 3. LÓGICA CENTRAL DE CÁLCULO
// ====================================================================

/**
 * Función principal para calcular el patrón de tejido.
 */
function calcularPatron() {
    // 1. OBTENER VALORES DE ENTRADA
    const puntosMuestra = parseFloat(document.getElementById('puntos_muestra').value);
    const hilerasMuestra = parseFloat(document.getElementById('hileras_muestra').value);
    const tallaSeleccionada = document.getElementById('talla_seleccionada').value; 
    const tipoPrenda = document.getElementById('tipo_prenda').value;
    const metodoTejido = document.getElementById('metodo_tejido').value;
    
    // Asumiendo valores de holgura y largo opcional (no presentes en HTML, se usan 0)
    const holguraCM = parseFloat(document.getElementById('holgura_cm')?.value) || 0;
    const largoDeseadoCM = parseFloat(document.getElementById('largo_deseado_cm')?.value) || 0;
    const largoMangaCM = parseFloat(document.getElementById('largo_manga_cm')?.value) || 0;
    
    const resultadoDiv = document.getElementById('resultado');

    // 2. VALIDACIONES BÁSICAS
    if (!puntosMuestra || isNaN(puntosMuestra) || tipoPrenda === "") {
        resultadoDiv.innerHTML = '<p class="error">Error: Por favor, complete los campos obligatorios: **Puntos de Muestra** y selección de **Tipo de Prenda**.</p>';
        return;
    }
    
    // Validación de Talla (si no es CM_DESEADOS)
    if (tipoPrenda !== "CM_DESEADOS" && tallaSeleccionada === "") {
        resultadoDiv.innerHTML = '<p class="error">Error: Por favor, seleccione una **Talla a tejer**.</p>';
        return;
    }

    // Densidad de Puntos y Hileras (por cm)
    const densidadP = puntosMuestra / 10;
    const densidadH = hilerasMuestra ? hilerasMuestra / 10 : null;
    
    let resultado = '';

    // --- LÓGICA PARA CM DESEADOS (Ancho Libre) ---
    if (tipoPrenda === "CM_DESEADOS") {
        const cmDeseados = parseFloat(document.getElementById('cm_deseados').value);
        if (!cmDeseados || isNaN(cmDeseados) || cmDeseados <= 0) {
            resultadoDiv.innerHTML = '<p class="error">Error: Por favor, ingrese un **Ancho Deseado (cm)** válido.</p>';
            return;
        }

        const puntosMontaje = Math.round(cmDeseados * densidadP);

        resultado += `<h3>📏 Cálculo por Ancho Deseado</h3>\n`;
        resultado += `<p>✅ **Densidad de Puntos:** ${densidadP.toFixed(2)} p/cm</p>`;
        resultado += `<hr>`;
        resultado += `<h4>🎯 Resultado:</h4>\n`;
        resultado += `* Para un ancho de **${cmDeseados.toFixed(1)} cm**, necesitas montar **${puntosMontaje} puntos**.\n`;
        resultado += `* ¡Perfecto para bufandas, chales o mantas!`;
        
    } else {
        // --- LÓGICA PARA PRENDAS CON TALLA (GORRO, CUBRE_PAÑAL, JERSEY, CHAQUETA) ---
        
        let medidas;
        const [categoria, nombreTalla] = tallaSeleccionada.split('|');

        if (MAPA_MEDIDAS[categoria] && MAPA_MEDIDAS[categoria][nombreTalla]) {
            medidas = MAPA_MEDIDAS[categoria][nombreTalla];
        }

        if (!medidas) {
            resultadoDiv.innerHTML = '<p class="error">Error: No se encontraron medidas para la talla seleccionada.</p>';
            return;
        }
        
        // --- LÓGICA PARA GORRO ---
        if (tipoPrenda === "GORRO") {
            if (!densidadH) {
                 resultadoDiv.innerHTML = '<p class="error">Para calcular un **GORRO**, debe indicar las **Pasadas en 10 cm** (Muestra de Tensión).</p>';
                 return;
            }
            
            const ccGorro = medidas.CC;
            const altGorro = medidas.ALT;
            const corGorro = medidas.COR;
            const recGorro = medidas.REC;
            const vueGorro = medidas.VUE;

            const puntosMontaje = Math.round(ccGorro * densidadP);
            const hilerasTotal = Math.round(altGorro * densidadH);
            const hilerasBorde = Math.round(vueGorro * densidadH);
            const hilerasRecto = Math.round(recGorro * densidadH);
            const hilerasCoronilla = Math.round(corGorro * densidadH);


            resultado += `<h3>👒 Patrón de Gorro (Talla: ${nombreTalla})</h3>\n`;
            resultado += `<p>✅ **Densidad:** ${densidadP.toFixed(2)} p/cm | ${densidadH.toFixed(2)} pasadas/cm</p>`;
            resultado += `<hr>`;
            resultado += `<h4>🧶 Instrucciones de Tejido:</h4>\n`;
            resultado += `<u>1. Montaje y Borde (Vuelta/Borde)</u>\n`;
            resultado += `* **Montar:** **${puntosMontaje} puntos**.\n`;
            resultado += `* Tejer recto el elástico (o borde) durante **${hilerasBorde} pasadas** (${vueGorro.toFixed(1)} cm).\n\n`;

            resultado += `<u>2. Cuerpo (Tejido Recto)</u>\n`;
            resultado += `* Cambiar al punto principal.\n`;
            resultado += `* Tejer recto durante **${hilerasRecto} pasadas** (${recGorro.toFixed(1)} cm).\n\n`;
            
            resultado += `<u>3. Coronilla (Menguados)</u>\n`;
            resultado += `* Realizar los menguados para la coronilla durante **${hilerasCoronilla} pasadas** (${corGorro.toFixed(1)} cm).\n`;
            resultado += `* La secuencia más habitual es: **Menguar ${Math.round(puntosMontaje / 8)} puntos** cada 2 vueltas, hasta que queden 8 puntos (o los suficientes para cerrar la parte superior).\n`;
            resultado += `* **Cierre Final:** Cuando la pieza mida ${altGorro.toFixed(1)} cm (o **${hilerasTotal} pasadas**), cortar la hebra y pasarla por los puntos restantes para cerrar la coronilla.\n`;
            
        } else if (tipoPrenda === "CUBRE_PAÑAL") {
            // --- LÓGICA PARA CUBRE PAÑAL ---
            
            const ccCubre = medidas.CC; // Contorno Cintura
            const alCubre = medidas.AL; // Altura Lateral
            const epCubre = medidas.EP; // EntrePierna
            const trCubre = medidas.TR; // Tramo Recto
            const lcdCubre = medidas.LCD; // Línea Cierre Delantero

            const puntosCintura = Math.round(ccCubre * densidadP);
            const anchoCinturaCm = (puntosCintura / densidadP).toFixed(1); 
            const puntosTramoRecto = Math.round(trCubre * densidadP);
            
            resultado += `<h3>👶 Patrón de Cubre Pañal (Talla: ${nombreTalla})</h3>\n`;
            resultado += `<p>✅ **Densidad:** ${densidadP.toFixed(2)} p/cm ${densidadH ? `| ${densidadH.toFixed(2)} pasadas/cm` : ''}</p>`;
            resultado += `<hr>`;
            resultado += `<h4>🧶 Instrucciones de Tejido:</h4>\n`;
            
            // CINTURA
            resultado += `<u>1. Cintura (Borde)</u>\n`;
            resultado += `* **Montar:** **${puntosCintura} puntos** (${anchoCinturaCm} cm de ancho).\n`;
            resultado += `* Tejer en elástico 1/1 o 2/2 la altura deseada para la cinturilla.\n\n`;

            // CUERPO (AUMENTOS TRASEROS)
            resultado += `<u>2. Cuerpo (Espalda: Aumentos y Forma)</u>\n`;
            const puntosAumentarCuerpo = Math.round((medidas.CP / 2) * densidadP) - Math.round((ccCubre / 2) * densidadP);
            resultado += `* Tejer la altura lateral **${alCubre.toFixed(1)} cm** con aumentos progresivos para llegar a la mitad del contorno de pecho (total ${puntosAumentarCuerpo} puntos a aumentar, distribuidos en el largo).\n`;
            
            // ENTRE PIERNA Y TRAMO RECTO
            resultado += `<u>3. Entrepierna</u>\n`;
            resultado += `* **Tramo Recto de Entrepierna (T.R.):** Tejer recto **${trCubre.toFixed(1)} cm** (${puntosTramoRecto} puntos de ancho en ese tramo).\n`;
            resultado += `* **Cierre Progresivo (LCD):** Luego cerrar progresivamente hasta la **Línea de Cierre Delantero (${lcdCubre.toFixed(1)} cm)**.\n`;
        
        } else {
            // --- LÓGICA GENERAL PARA JERSEY/CHAQUETA ---
            
            let holguraCm = holguraCM; 
            let holguraMangaCm = holguraCM / 2; 

            // CÁLCULO DE PUNTOS Y CM FINALES 
            const cpAjustadoCm = medidas.CP + holguraCm;
            const cpPts = Math.round(cpAjustadoCm * densidadP); 
            const anchoPrendaCm = (cpPts / densidadP).toFixed(1); 
            
            const ccAjustadoCm = medidas.CC + holguraCm; 
            const anchoSisaMangaCm = medidas.CA + holguraMangaCm; 
            const puntosSisaManga = Math.round(anchoSisaMangaCm * densidadP);
            const tiraCuelloCm = 2.5; 
            const tiraCuelloPts = densidadH ? Math.round(tiraCuelloCm * densidadH) : null;
            
            const raglanCmBase = medidas.PSisa; 

            resultado += `<h3>👕 Patrón Base (Talla: ${nombreTalla})</h3>\n`;
            resultado += `<p>✅ **Densidad:** ${densidadP.toFixed(2)} p/cm ${densidadH ? `| ${densidadH.toFixed(2)} pasadas/cm` : ''}</p>`;
            resultado += `<p>📏 **Holgura Aplicada:** **${holguraCm.toFixed(1)} cm**</p>`;
            resultado += `<hr>`;
            resultado += `<h4>📐 Medidas Finales de la Prenda:</h4>\n`;
            resultado += `* **Contorno de Pecho (CP):** **${cpAjustadoCm.toFixed(1)} cm** (${cpPts} puntos).\n`;
            resultado += `* **Largo Total (LT):** ${largoDeseadoCM > 0 ? largoDeseadoCM.toFixed(1) : medidas.LT.toFixed(1)} cm.\n`;
            resultado += `* **Largo Manga (LM):** ${largoMangaCM > 0 ? largoMangaCM.toFixed(1) : medidas.LM.toFixed(1)} cm.\n\n`;


            // --- LÓGICA BOTTOM-UP (Del Bajo al Hombro) ---
            if (metodoTejido === "BAJO") {
                if (!densidadH) {
                     resultadoDiv.innerHTML = '<p class="error">Para el método **BAJO** (Bottom-Up), debe indicar las **Pasadas en 10 cm** (Muestra de Tensión).</p>';
                     return;
                }
                
                const largoTotalCm = largoDeseadoCM > 0 ? largoDeseadoCM : medidas.LT;
                const largoMangaCm = largoMangaCM > 0 ? largoMangaCM : medidas.LM;
                const sisaCm = medidas.PSisa;
                const puntosCerrarSisa = Math.round(medidas.CA * densidadP);
                const hilerasSisa = Math.round(sisaCm * densidadH);
                
                resultado += `<h4>🧶 Resultados de Tejido desde el Bajo (Bottom-Up)</h4>\n`;
                resultado += `<u>1. Espalda/Delantero (Cuerpo)</u>\n`;
                resultado += `* **Montar:** **${cpPts} puntos** para el bajo de la espalda y delantero (${anchoPrendaCm} cm de ancho).\n`;
                resultado += `* **Largo Cuerpo:** Tejer recto **${largoTotalCm.toFixed(1)} cm** (${Math.round(largoTotalCm * densidadH)} pasadas) hasta la sisa.\n`;
                resultado += `* **Sisa (Cierre):** Cerrar **${puntosCerrarSisa} puntos** de una vez, o hacer cierres progresivos en **${sisaCm.toFixed(1)} cm** (${hilerasSisa} pasadas):\n`;
                resultado += generarCierresProgresivosNuevo(puntosCerrarSisa, hilerasSisa) + "\n\n";

                resultado += `<u>2. Mangas</u>\n`;
                const puntosPuño = Math.round(medidas['C Puño'] * densidadP);
                const puntosAumentarManga = puntosSisaManga - puntosPuño;
                const hilerasManga = Math.round(largoMangaCm * densidadH);
                
                resultado += `* **Montar:** **${puntosPuño} puntos** para el puño.\n`;
                resultado += `* **Aumentos:** Aumentar progresivamente **${puntosAumentarManga} puntos** en **${largoMangaCm.toFixed(1)} cm** (${hilerasManga} pasadas) hasta alcanzar **${puntosSisaManga} puntos** de sisa.\n`;
                resultado += `* **Tejer Manga:** La manga medirá **${largoMangaCm.toFixed(1)} cm** de largo total.\n`;


            // --- LÓGICA TOP-DOWN (Escote al Bajo - Raglán) ---
            } else if (metodoTejido === "ESCOTE") {
                if (!densidadH) {
                     resultadoDiv.innerHTML = '<p class="error">Para el método **ESCOTE** (Top-Down/Raglán), debe indicar las **Pasadas en 10 cm** (Muestra de Tensión).</p>';
                     return;
                }
                
                const hilerasRaglan = densidadH ? Math.round(raglanCmBase * densidadH) : null;
                
                resultado += `<h4>🧶 Resultados de Tejido desde el Escote (Raglán)</h4>\n`;
                resultado += `<p>El ancho total de la prenda será de **${anchoPrendaCm} cm**.</p>\n\n`;
                
                // 1. REPARTO INICIAL
                const ccabMinimoCm = medidas.CCab / 1.2;
                const contornoEscoteMontajeCm = Math.max(medidas.CC, ccabMinimoCm); 
                const puntosMontaje = Math.round(contornoEscoteMontajeCm * densidadP); 
                
                const puntosBase = puntosMontaje - 4; // Los 4 puntos de los marcadores Raglán
                const pEspalda = Math.round(puntosBase * 0.33);
                const pManga = Math.round((puntosBase * 0.33) / 2); 
                let pDelanteroBase = puntosBase - pEspalda - (pManga * 2);
                const puntosRestantes = puntosBase - pEspalda - (pManga * 2) - pDelanteroBase;
                pDelanteroBase += puntosRestantes;
                
                let repartoStr;
                if (tipoPrenda === "JERSEY") {
                    repartoStr = `**Delantero/Frente** (**${pDelanteroBase} puntos**), **Manga 1** (**${pManga} puntos**), **Espalda** (**${pEspalda} puntos**), **Manga 2** (**${pManga} puntos**).`;
                } else if (tipoPrenda === "CHAQUETA") {
                    const pDelChaqueta = Math.round(pDelanteroBase / 2);
                    repartoStr = `**Delantero 1** (**${pDelChaqueta} puntos**), **Manga 1** (**${pManga} puntos**), **Espalda** (**${pEspalda} puntos**), **Manga 2** (**${pManga} puntos**), **Delantero 2** (**${pDelChaqueta} puntos**).`;
                } else {
                     repartoStr = `**Delantero** (**${pDelanteroBase} puntos**), **Manga 1** (**${pManga} puntos**), **Espalda** (**${pEspalda} puntos**), **Manga 2** (**${pManga} puntos**).`;
                }

                // OUTPUT MONTAJE 
                resultado += `<u>1. Empezamos a tejer con el escote:</u>\n`;
                resultado += `* **Montamos:** **${puntosMontaje} puntos** (**${contornoEscoteMontajeCm.toFixed(1)} cm** de contorno).\n`; 
                resultado += `* **A continuación:** Tejer **${tiraCuelloPts} pasadas** (**${tiraCuelloCm.toFixed(1)} cm**) para la tira del cuello.\n`;
                resultado += `* **Repartir los puntos de la siguiente manera: (4 puntos marcados para el Raglán):** ${repartoStr}\n\n`;

                // 2. AUMENTOS RAGLÁN
                const largoMangaCm = largoMangaCM > 0 ? largoMangaCM : medidas.LM;
                const puntosMangaFinal = puntosSisaManga; 

                resultado += `<u>2. Indicaciones para tejer los aumentos (Raglán)</u>\n`;
                resultado += `* **Largo de Línea Raglán:** **${raglanCmBase.toFixed(1)} cm** ${hilerasRaglan !== null ? `(**${hilerasRaglan} pasadas**)` : ''}.\n`;
                resultado += `* **Ritmo de Aumentos:** Debe realizar **aumentos** antes y después de cada marcador de Raglán en las vueltas de derecho/ida, hasta alcanzar las **${hilerasRaglan} pasadas**.\n\n`;

                // 3. SEPARACIÓN DE CUERPO Y MANGAS
                const puntosAnadirSisaPts = Math.round(medidas.AE * densidadP);
                const largoTotalCm = largoDeseadoCM > 0 ? largoDeseadoCM : medidas.LT;
                const finalLargoCuerpoCm = largoTotalCm - raglanCmBase - tiraCuelloCm;
                const largoCuerpoRestanteH = densidadH ? Math.round(finalLargoCuerpoCm * densidadH) : null;

                resultado += `<u>3. Separación de Cuerpo y Mangas</u>\n`;
                resultado += `* **Puntos de Sisa (Bajo Manga):** Añadir **${puntosAnadirSisaPts} puntos** para el bajo de la sisa de cada manga (total ${puntosAnadirSisaPts * 2} puntos añadidos al cuerpo).\n`;
                
                // Instrucciones para el Cuerpo
                let puntosTotalCuerpoFinal;
                if (tipoPrenda === "JERSEY") {
                    puntosTotalCuerpoFinal = pDelanteroBase + pEspalda + puntosAnadirSisaPts * 2;
                     resultado += `* **Puntos Totales (Cuerpo):** Continuar tejiendo en circular (cerrando las mangas) con un total de **${puntosTotalCuerpoFinal} puntos**.\n`;
                } else if (tipoPrenda === "CHAQUETA") {
                    const pDelantero1 = Math.round(pDelanteroBase / 2);
                    const pDelantero2 = pDelanteroBase - pDelantero1;
                    puntosTotalCuerpoFinal = pDelantero1 + pDelantero2 + pEspalda + puntosAnadirSisaPts * 2;
                     resultado += `* **Puntos Totales (Cuerpo):** Continuar tejiendo en plano (cerrando las mangas) con un total de **${puntosTotalCuerpoFinal} puntos**.\n`;
                }
                
                resultado += `* **Largo del Cuerpo (desde Sisa a Bajo):** Continuar recto **${finalLargoCuerpoCm.toFixed(1)} cm** ${largoCuerpoRestanteH !== null ? `(**${largoCuerpoRestanteH} pasadas**)` : ''}.\n\n`;
                
                // 4. MANGAS
                const puntosPuño = Math.round(medidas['C Puño'] * densidadP);
                const puntosMenguarManga = (puntosMangaFinal * 2) + puntosAnadirSisaPts - puntosPuño; 
                const hilerasManga = Math.round(largoMangaCm * densidadH);
                
                resultado += `<u>4. Mangas</u>\n`;
                resultado += `* **Montar** los puntos de la manga (${pManga} puntos), más los puntos añadidos de la sisa (${puntosAnadirSisaPts}), y tejer en circular (o plano).\n`;
                resultado += `* **Menguados:** Menguar progresivamente **${puntosMenguarManga} puntos** en **${largoMangaCm.toFixed(1)} cm** (${hilerasManga} pasadas) hasta alcanzar los **${puntosPuño} puntos** de puño.\n`;
            }
        }
    }
    
    // AÑADIR NOTA DE CROCHET/GANCHILLO (MODIFICACIÓN FINAL)
    resultado += `<hr style="margin-top: 25px; border-color: #d6a4a4;">`;
    resultado += `<p style="font-size:0.9em; text-align: center;">💡 **Nota:** Esta calculadora es válida tanto para **tejido en dos agujas** como para **Ganchillo/Crochet**.</p>`;

    resultadoDiv.innerHTML = resultado.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}

// ====================================================================
// 4. INICIALIZACIÓN Y EVENT LISTENERS (Corregidos IDs y Lógica de Filtrado)
// ====================================================================

/**
 * Función para poblar el dropdown de tallas con categorías y nombres,
 * filtrando por una lista de categorías proporcionada.
 * @param {string[]} categoriasAMostrar Array de claves del MAPA_MEDIDAS a mostrar.
 */
function poblarTallas(categoriasAMostrar) {
    const tallaSelect = document.getElementById('talla_seleccionada');
    if (!tallaSelect) return; 

    // Limpiar opciones anteriores
    tallaSelect.innerHTML = '<option value="">Selecciona una talla</option>';

    // Si no hay categorías que mostrar, solo mostramos el placeholder
    if (!categoriasAMostrar || categoriasAMostrar.length === 0) {
        return;
    }

    for (const categoria of categoriasAMostrar) {
        // La comprobación de hasOwnProperty ya está cubierta por el loop for...of
        if (MAPA_MEDIDAS.hasOwnProperty(categoria)) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = categoria;

            for (const nombreTalla in MAPA_MEDIDAS[categoria]) {
                if (MAPA_MEDIDAS[categoria].hasOwnProperty(nombreTalla)) {
                    const option = document.createElement('option');
                    option.value = `${categoria}|${nombreTalla}`;
                    option.textContent = nombreTalla;
                    optgroup.appendChild(option);
                }
            }
            tallaSelect.appendChild(optgroup);
        }
    }
}

/**
 * Función para actualizar la interfaz (tallas, métodos de tejido y CM deseados)
 * según el tipo de prenda.
 */
function actualizarInterfaz() {
    const tipoPrenda = document.getElementById('tipo_prenda').value;
    const metodoTejidoDiv = document.getElementById('metodo-group');
    const metodoTejidoSelect = document.getElementById('metodo_tejido');
    // Usamos el padre para ocultar el bloque completo del selector de talla
    const tallaSelectDiv = document.getElementById('talla_seleccionada').parentNode; 
    const cmGroup = document.getElementById('cm-group');
    
    let categoriasTalla = [];
    
    // 1. Resetear visibilidad de elementos dinámicos
    if (metodoTejidoDiv) metodoTejidoDiv.style.display = 'none';
    if (cmGroup) cmGroup.style.display = 'none';
    if (tallaSelectDiv) tallaSelectDiv.style.display = 'block';

    // 2. Lógica de filtrado y visibilidad
    switch (tipoPrenda) {
        case 'JERSEY':
        case 'CHAQUETA':
            // Mostrar Tallas y Método. Ocultar CM.
            if (metodoTejidoDiv) {
                metodoTejidoDiv.style.display = 'block';
                metodoTejidoSelect.innerHTML = `
                    <option value="ESCOTE">Desde el Escote (Raglán / Top-Down)</option>
                    <option value="BAJO">Desde el Bajo (Bottom-Up)</option>
                `;
            }
            // Tallas de ropa (Bebé, Niños, Adulto)
            categoriasTalla = [
                'Bebé (Prematuro a 24m)',
                'Niños (3 a 10 años)',
                'Adulto (36 a 50)'
            ];
            break;

        case 'CUBRE_PAÑAL':
            // Mostrar Tallas (Cubre Pañal). Ocultar Método y CM.
            categoriasTalla = ['Cubre Pañal (0 a 12m)'];
            break;
            
        case 'GORRO':
            // Mostrar Tallas (Gorro). Ocultar Método y CM.
            categoriasTallas = ['Gorro (Tallas)'];
            break;
            
        case 'CM_DESEADOS':
            // Mostrar CM Deseados. Ocultar Tallas y Método.
            if (tallaSelectDiv) tallaSelectDiv.style.display = 'none';
            if (cmGroup) cmGroup.style.display = 'block';
            categoriasTalla = []; // No cargar ninguna talla
            break;
            
        default:
            // Opción "Selecciona..."
            categoriasTalla = [];
            break;
    }
    
    // 3. Poblar tallas con el filtro
    poblarTallas(categoriasTalla);
}

// Inicialización de los Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el filtro de tallas y la interfaz al cargar
    actualizarInterfaz(); 
    
    const tipoPrendaSelect = document.getElementById('tipo_prenda');
    if(tipoPrendaSelect) tipoPrendaSelect.addEventListener('change', actualizarInterfaz);
});
