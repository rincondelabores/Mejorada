// ====================================================================
// 1. DATOS Y MEDIDAS ANTROPOMÉTRICAS (Adulto CORREGIDO y CONSOLIDADO)
// ====================================================================

const MEDIDAS_ANTROPOMETRICAS = {
    // Tallas de Bebé (Se mantienen los datos anteriores)
    '00 (Prematuro)': { CP: 37.0, CC: 20.0, CA: 12.0, 'C Puño': 11.0, LT: 20.0, LM: 10.0, PSisa: 9.0, AE: 14.0, CED: 3.0 },
    '0 meses': { CP: 39.0, CC: 21.0, CA: 13.0, 'C Puño': 12.0, LT: 22.0, LM: 12.0, PSisa: 10.0, AE: 16.0, CED: 3.5 },
    '1-3 meses': { CP: 40.0, CC: 22.0, CA: 14.0, 'C Puño': 12.0, LT: 23.0, LM: 14.0, PSisa: 11.0, AE: 18.0, CED: 4.0 },
    '3-6 meses': { CP: 44.0, CC: 23.0, CA: 16.0, 'C Puño': 12.5, LT: 24.0, LM: 16.0, PSisa: 12.0, AE: 20.0, CED: 4.5 },
    '6-9 meses': { CP: 48.0, CC: 27.0, CA: 17.0, 'C Puño': 12.5, LT: 26.0, LM: 18.0, PSisa: 12.5, AE: 22.0, CED: 5.0 },
    '9-12 meses': { CP: 52.0, CC: 25.0, CA: 18.0, 'C Puño': 12.5, LT: 28.0, LM: 20.0, PSisa: 13.0, AE: 24.0, CED: 5.5 },
    '12-15 meses': { CP: 56.0, CC: 25.0, CA: 19.0, 'C Puño': 13.0, LT: 30.0, LM: 22.0, PSisa: 13.5, AE: 26.0, CED: 6.0 },
    '15-18 meses': { CP: 60.0, CC: 26.0, CA: 20.0, 'C Puño': 13.5, LT: 32.0, LM: 25.0, PSisa: 14.0, AE: 28.0, CED: 6.5 },
    '18-24 meses': { CP: 61.0, CC: 26.0, CA: 22.0, 'C Puño': 14.0, LT: 34.0, LM: 27.0, PSisa: 15.0, AE: 30.0, CED: 7.0 },

    // Tallas de Niños (Se mantienen los datos anteriores)
    '3 años': { CP: 62.0, CC: 28.5, CA: 23, 'C Puño': 15.5, LT: 36.0, LM: 28.5, PSisa: 16.0, AE: 31.0, CED: 7.3 }, 
    '4 años': { CP: 63.0, CC: 30.0, CA: 24.0, 'C Puño': 16.0, LT: 38.0, LM: 32.0, PSisa: 17.0, AE: 32.0, CED: 7.5 },
    '6 años': { CP: 66.0, CC: 31.0, CA: 25.0, 'C Puño': 16.5, LT: 42.0, LM: 35.5, PSisa: 18.0, AE: 34.0, CED: 8.0 },
    '8 años': { CP: 68.0, CC: 32.0, CA: 26.0, 'C Puño': 17.0, LT: 47.0, LM: 39.0, PSisa: 19.0, AE: 36.0, CED: 8.5 },
    '10 años': { CP: 72.0, CC: 33.0, CA: 26.5, 'C Puño':18.0, LT: 50.0, LM: 43.0, PSisa: 20.0, AE: 38.0, CED: 9.0 },
    
    // Tallas de Mujer (Adulto)
    '36': { CP: 81.0, CC: 35.0, CA: 30.0, 'C Puño':19.3, LT: 58.0, LM: 47.0, PSisa: 22.0, AE: 35.0, CED: 11.0 }, 
    '38': { CP: 86.0, CC: 36.0, CA: 32.0, 'C Puño': 19.5, LT: 60.0, LM: 48.0, PSisa: 22.5, AE: 36.0, CED: 11.5 }, 
    '40': { CP: 92.0, CC: 37.0, CA: 33.0, 'C Puño': 20.6, LT: 61.0, LM: 48.5, PSisa: 23.0, AE: 36.8, CED: 12.0 }, 
    '42': { CP: 100.0, CC: 38.0, CA: 35.0, 'C Puño': 20.8, LT: 62.0, LM: 49.0, PSisa: 24.0, AE: 37.6, CED: 12.5 }, 
    '44': { CP: 104.0, CC: 40.0, CA: 37.0, 'C Puño': 21.5, LT: 63.0, LM: 50.0, PSisa: 25.0, AE: 38.6, CED: 13.0 }, 
    '46': { CP: 108.0, CC: 39.0, CA: 38.0, 'C Puño': 22.2, LT: 64.0, LM: 51.0, PSisa: 26.0, AE: 39.6, CED: 13.5 }, 
    '48': { CP: 112.0, CC: 40.0, CA: 39.0, 'C Puño': 23.4, LT: 66.0, LM: 52.0, PSisa: 27.0, AE: 40.6, CED: 14.0 }, 
    '50': { CP: 116.0, CC: 41.0, CA: 40.0, 'C Puño': 23.6, LT: 68.0, LM: 54.0, PSisa: 28.0, AE: 41.6, CED: 14.5 } 
};

// ====================================================================
// 1.1. MEDIDAS PARA CUBRE PAÑAL (C/P)
// ====================================================================
// CC: Contorno Cintura / AL: Altura Lateral / EP: EntrePierna / TR: Tramo Recto / LCD: Línea Cierre Delantero
const MEDIDAS_CUBRE_PAÑAL = {
    '0 RN ': { CC: 38, AL: 10, EP: 7, TR: 1, LCD: 1 },
    '1 mes ': { CC: 40, AL: 11, EP: 7, TR: 1.5, LCD: 1.5 },
    '3 meses ': { CC: 42, AL: 11, EP: 8, TR: 2, LCD: 2 }, 
    '6 meses ': { CC: 44, AL: 12, EP: 8, TR: 2, LCD: 2 }, 
    '9 meses ': { CC: 46, AL: 12, EP: 9, TR: 2.5, LCD: 3 }, 
    '12 meses ': { CC: 48, AL: 13, EP: 10, TR: 2.5, LCD: 3 } 
};

// ====================================================================
// 1.2. MEDIDAS PARA GORRO (Hat) <--- NUEVO
// ====================================================================
// CC: Contorno de Cabeza / ALT: Altura Total / COR: Coronilla / REC: Tejido Recto / VUE: Vuelta/Borde
const MEDIDAS_GORRO = {
    'Recién Nacido (0 meses)': { CC: 32, ALT: 12, COR: 4, REC: 7, VUE: 2 },
    '1 a 3 meses': { CC: 35, ALT: 14, COR: 4.5, REC: 9, VUE: 2 },
    '3 a 6 meses': { CC: 36, ALT: 17, COR: 5, REC: 9.5, VUE: 2 },
    '6 meses a 2 años': { CC: 41, ALT: 19, COR: 6.5, REC: 10.5, VUE: 2.5 },
    'Niños': { CC: 48, ALT: 21, COR: 7, REC: 12, VUE: 3 },
    'Adolescentes': { CC: 52, ALT: 23, COR: 8, REC: 13, VUE: 4 },
    'Adultos': { CC: 54, ALT: 25, COR: 9, REC: 13.5, VUE: 5 }
};


// Mapeo para poblar las tallas
const MAPA_MEDIDAS = {
    'Bebé (Prematuro a 24m)': MEDIDAS_ANTROPOMETRICAS,
    'Niños (3 a 10 años)': MEDIDAS_ANTROPOMETRICAS,
    'Adulto (36 a 50)': MEDIDAS_ANTROPOMETRICAS,
    'Cubre Pañal (0 a 12m)': MEDIDAS_CUBRE_PAÑAL,
    'Gorros': MEDIDAS_GORRO // <--- ACTUALIZADO
};

// Nueva estructura de ORDEN_TALLAS incluyendo el Cubre Pañal y Gorro
const ORDEN_TALLAS = {
    'Bebé (Prematuro a 24m)': ['00 (Prematuro)', '0 meses', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses', '12-15 meses', '15-18 meses', '18-24 meses'],
    'Niños (3 a 10 años)': ['3 años', '4 años', '6 años', '8 años', '10 años'],
    'Adulto (36 a 50)': ['36', '38', '40', '42', '44', '46', '48', '50'],
    'Cubre Pañal (0 a 12m)': ['0 RN ', '1 mes ', '3 meses ', '6 meses ', '9 meses ', '12 meses '],
    'Gorros': ['Recién Nacido (0 meses)', '1 a 3 meses', '3 a 6 meses', '6 meses a 2 años', 'Niños', 'Adolescentes', 'Adultos'] // <--- ACTUALIZADO
};


// ====================================================================
// 2. FUNCIONES DE UTILIDAD Y LÓGICA DE INTERFAZ
// ====================================================================

function poblarTallas() {
    const select = document.getElementById('talla_seleccionada');
    const tipoPrenda = document.getElementById('tipo_prenda').value;

    select.innerHTML = '<option value="">Selecciona una Talla...</option>';
    
    // Si no es un tipo de prenda que requiera tallas antropométricas, no poblamos.
    if (tipoPrenda === 'CM_DESEADOS' || !tipoPrenda) {
        return;
    }

    let gruposATejer = [];

    // Lógica para filtrar las tallas según el tipo de prenda
    if (tipoPrenda === 'CUBRE_PAÑAL') {
        gruposATejer = [['Cubre Pañal (0 a 12m)', ORDEN_TALLAS['Cubre Pañal (0 a 12m)']]];
    } else if (tipoPrenda === 'GORRO') { // <--- MODIFICADO
        gruposATejer = [['Gorros', ORDEN_TALLAS['Gorros']]];
    } else {
        // Tallas para Jersey o Chaqueta (antropométricas)
        gruposATejer = [
            ['Bebé (Prematuro a 24m)', ORDEN_TALLAS['Bebé (Prematuro a 24m)']],
            ['Niños (3 a 10 años)', ORDEN_TALLAS['Niños (3 a 10 años)']],
            ['Adulto (36 a 50)', ORDEN_TALLAS['Adulto (36 a 50)']]
        ];
    }

    gruposATejer.forEach(([label, tallas]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = label;
        
        tallas.forEach(tallaKey => {
            // Determinar de qué objeto de medidas sacar la información
            const medidasSource = MAPA_MEDIDAS[label];
            if (medidasSource && tallaKey in medidasSource) { 
                const option = document.createElement('option');
                option.value = tallaKey;
                option.textContent = `Talla ${tallaKey}`;
                optgroup.appendChild(option);
            }
        });
        
        select.appendChild(optgroup);
    });
}

function manejarVisibilidadCampos() {
    const tipoPrenda = document.getElementById('tipo_prenda').value;
    const metodoGroup = document.getElementById('metodo-group');
    const cmGroup = document.getElementById('cm-group');
    const tallaSelect = document.getElementById('talla_seleccionada');
    const holguraGroup = document.getElementById('holgura-group');
    const caidaEscoteGroup = document.getElementById('caida-escote-group');
    
    // Repoblar las tallas cada vez que se cambia la prenda
    poblarTallas();

    // 1. Manejar CM_DESEADOS (sin tallas)
    if (tipoPrenda === 'CM_DESEADOS') {
        metodoGroup.style.display = 'none';
        cmGroup.style.display = 'block';
        tallaSelect.removeAttribute('required');
        tallaSelect.style.display = 'none';
        document.querySelector('label[for="talla_seleccionada"]').style.display = 'none';
        holguraGroup.style.display = 'none';
        caidaEscoteGroup.style.display = 'none';
    
    // 2. Manejar JERSEY/CHAQUETA (necesitan método y holgura)
    } else if (tipoPrenda === 'JERSEY' || tipoPrenda === 'CHAQUETA') {
        metodoGroup.style.display = 'block';
        cmGroup.style.display = 'none';
        tallaSelect.setAttribute('required', 'required');
        tallaSelect.style.display = 'block';
        document.querySelector('label[for="talla_seleccionada"]').style.display = 'block';
        holguraGroup.style.display = 'block';
        caidaEscoteGroup.style.display = 'block';
    
    // 3. Manejar CUBRE_PAÑAL / GORRO (no necesitan método ni holgura) <--- MODIFICADO
    } else if (tipoPrenda === 'CUBRE_PAÑAL' || tipoPrenda === 'GORRO') {
        metodoGroup.style.display = 'none'; 
        cmGroup.style.display = 'none';
        tallaSelect.setAttribute('required', 'required');
        tallaSelect.style.display = 'block';
        document.querySelector('label[for="talla_seleccionada"]').style.display = 'block';
        holguraGroup.style.display = 'none';
        caidaEscoteGroup.style.display = 'none';
    
    // 4. Default / Nada seleccionado
    } else {
        metodoGroup.style.display = 'none';
        cmGroup.style.display = 'none';
        tallaSelect.setAttribute('required', 'required');
        tallaSelect.style.display = 'block';
        document.querySelector('label[for="talla_seleccionada"]').style.display = 'block';
        holguraGroup.style.display = 'block'; // Mostrar holgura por defecto, aunque no se use en el cálculo
        caidaEscoteGroup.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // El DOMContentLoaded ya no llama a poblarTallas, sino que lo hace manejarVisibilidadCampos()
    const tipoPrendaSelect = document.getElementById('tipo_prenda');
    if (tipoPrendaSelect) {
        tipoPrendaSelect.addEventListener('change', manejarVisibilidadCampos);
    }
    // Llama al inicio para inicializar la visibilidad y las tallas por defecto (si hay)
    manejarVisibilidadCampos(); 
    
    // Se añade el evento click al botón de calcular (si no está en el HTML)
    // const calcularBtn = document.querySelector('button');
    // if (calcularBtn) {
    //     calcularBtn.addEventListener('click', calcularPuntos);
    // }
});


// ====================================================================
// 3. LÓGICA CENTRAL DE CÁLCULO
// ====================================================================

// La función 'generarCierresProgresivosNuevo' y 'calcularCubrePanal' se asume que están aquí (omitido por espacio).

/**
 * Calcula las instrucciones para tejer un gorro. <--- NUEVA FUNCIÓN
 */
function calcularGorro(puntosMuestra, hilerasMuestra, tallaSeleccionada) {
    let resultado = '<h4>🧶 Instrucciones para Gorro (Talla ' + tallaSeleccionada + ')</h4>\n';
    
    // 1. Obtener Medidas
    const medidas = MEDIDAS_GORRO[tallaSeleccionada];
    const CC = medidas.CC; // Contorno de Cabeza
    const ALT = medidas.ALT; // Altura Total
    const COR = medidas.COR; // Coronilla
    const REC = medidas.REC; // Tejido Recto
    const VUE = medidas.VUE; // Vuelta/Borde

    const densidadP = puntosMuestra / 10.0;
    const densidadH = (hilerasMuestra && hilerasMuestra > 0) ? hilerasMuestra / 10.0 : null;

    // 2. CÁLCULOS PRINCIPALES
    
    // Puntos de Montaje (CC)
    const puntosMontaje = Math.round(CC * densidadP);
    
    // Puntos Finales (Coronilla)
    const puntosCoronilla = Math.round(COR * densidadP);

    // Puntos a menguar (Totales)
    const puntosAMenguar = puntosMontaje - puntosCoronilla;
    
    // Altura y pasadas de menguado
    const alturaMenguarCm = ALT - REC;
    const pasadasMenguar = densidadH ? Math.round(alturaMenguarCm * densidadH) : null;
    
    // Número de vueltas de menguado (cada 2 pasadas)
    let vueltasMenguado = 0;
    if (densidadH && alturaMenguarCm > 0 && pasadasMenguar > 0) {
        // Se asegura que haya al menos una vuelta de menguado si hay pasadas de menguado.
        vueltasMenguado = Math.max(1, Math.floor(pasadasMenguar / 2));
    }
    
    let instruccionMenguados = '';

    if (puntosAMenguar <= 0) {
        instruccionMenguados = 'No es necesario hacer menguados según los cálculos, ya que los puntos de Coronilla y Contorno de Cabeza resultan en el mismo número de puntos. Simplemente cerrar los puntos al llegar a la altura total.';
    } else if (vueltasMenguado > 0) {
        // Puntos a menguar por vuelta de menguado (promedio)
        const puntosPorVuelta = Math.max(1, Math.round(puntosAMenguar / vueltasMenguado));
        
        // CÁLCULO DE DISTRIBUCIÓN EN LA PRIMERA VUELTA (para dar la instrucción de "cada x puntos")
        const ptsEntreMengua = Math.floor(puntosMontaje / puntosPorVuelta);
        const restantes = puntosMontaje % puntosPorVuelta;
        
        // Instrucción detallada de menguados
        instruccionMenguados = `En esta sección hay que menguar un total de **${puntosAMenguar} puntos** a lo largo de **${alturaMenguarCm.toFixed(1)} cm** ${pasadasMenguar !== null ? `(**${pasadasMenguar} pasadas**)` : ''}.`;
        instruccionMenguados += `\n\n- Se sugiere realizar **${vueltasMenguado} vueltas/pasadas de menguado** (1 vuelta/pasada de menguado y 1 vuelta/pasada recta, es decir, **cada dos pasadas**).`;
        instruccionMenguados += `\n\n- **Puntos a menguar por vuelta (Aprox.):** **${puntosPorVuelta} puntos** (Para una distribución uniforme).`;
        
        instruccionMenguados += `\n\n- **Inicio de Menguados (1ª Vuelta):** Para menguar **${puntosPorVuelta} puntos** desde **${puntosMontaje} puntos** de manera uniforme, deberá: Tejer **1 menguado** cada **${ptsEntreMengua} puntos** (Repetir ${puntosPorVuelta} veces) ${restantes > 0 ? `y le sobrarán ${restantes} puntos.` : ''}`;
        
        instruccionMenguados += `\n\n- **Menguados Sucesivos:** Continuar menguando **${puntosPorVuelta} puntos** de forma distribuida en la vuelta de menguado (es decir, **cada 2 pasadas**), hasta que en la aguja queden solo **${puntosCoronilla} puntos**.`;

    } else {
        // Si no se puede calcular pasadasMenguar o vueltasMenguado, se da la instrucción en cm.
         instruccionMenguados = `En esta sección hay que menguar un total de **${puntosAMenguar} puntos** a lo largo de **${alturaMenguarCm.toFixed(1)} cm**.`;
         instruccionMenguados += `\n\n- La frecuencia de menguado es: **Cada dos pasadas/vueltas**, reduciendo los puntos de forma distribuida en cada vuelta de menguado, hasta que en la aguja queden solo **${puntosCoronilla} puntos** o un número mínimo para el cierre.`;
    }
    
    // 3. GENERAR INSTRUCCIONES
    
    // Instrucción de Montaje
    resultado += `* **Talla Seleccionada (${tallaSeleccionada}) (Contorno de cabeza):** **${CC.toFixed(1)} cm**.\n`;
    resultado += `* **Puntos a Montar:** Montar **${puntosMontaje} puntos**.\n\n`;

    // 4. Vuelta/Borde (VUE)
    const pasadasVUE = densidadH ? Math.round(VUE * densidadH) : null;
    resultado += `<u>1. Vuelta/Borde (Opcional)</u>\n`;
    resultado += `* **Medida de Borde/Vuelta:** **${VUE.toFixed(1)} cm** ${pasadasVUE !== null ? `(**${pasadasVUE} pasadas**)` : ''}.\n`;
    resultado += `* **Instrucción:** Puede tejer este borde (elástico o punto bobo, por ejemplo) y debe añadir esas pasadas al principio de su gorro.\n\n`;

    // 5. Tejido Recto (REC)
    const pasadasREC = densidadH ? Math.round(REC * densidadH) : null;
    resultado += `<u>2. Tramo Recto (REC)</u>\n`;
    resultado += `* **Medida de Tramo Recto:** **${REC.toFixed(1)} cm**.\n`;
    resultado += `* **Instrucción:** Continuar tejiendo recto después del borde (si lo hizo) durante **${REC.toFixed(1)} cm** ${pasadasREC !== null ? `(**${pasadasREC} pasadas**)` : ''}.\n\n`;
    
    // 6. Menguados (ALT - REC)
    resultado += `<u>3. Menguados (ALTURA TOTAL: ${ALT.toFixed(1)} cm)</u>\n`;
    resultado += `* **Objetivo de Puntos:** Reducir de **${puntosMontaje} puntos** a **${puntosCoronilla} puntos**.\n`;
    resultado += `* **Puntos a Menguar (Totales):** **${puntosAMenguar} puntos**.\n`;
    resultado += `* **Altura de la Disminución:** **${alturaMenguarCm.toFixed(1)} cm** ${pasadasMenguar !== null ? `(**${pasadasMenguar} pasadas**)` : ''}.\n\n`;
    resultado += instruccionMenguados + '\n\n';

    // 7. Cierre Final
    resultado += `<u>4. Cierre y Acabado</u>\n`;
    resultado += `* **Cierre de Coronilla:** Cuando el gorro mida **${ALT.toFixed(1)} cm** de altura total y solo queden **${puntosCoronilla} puntos** en la aguja:\n`;
    resultado += `<p style="padding-left: 20px;">- **Cortar la lana** dejando una hebra suficientemente larga para coser todo el lateral del gorro (si se tejió en plano).\n`;
    resultado += `- **Enhebrar** la aguja lanera y pasarla por el interior de los **${puntosCoronilla} puntos** restantes.\n`;
    resultado += `- **Tirar de la lana** y cerrar la parte de arriba de la coronilla. Debe pasar la aguja una o dos veces por los puntos para asegurar el cierre.\n`;
    resultado += `- **Coser el lateral** hasta el borde del gorro (si se tejió en plano). Si se tejió en circular, solo tendrá que rematar el cierre.\n`;
    resultado += `- **Toque final:** Si quiere, puede añadirle un pompón.</p>\n\n`;

    resultado += `<hr style="margin-top: 25px; border-color: #d6a4a4;">`;
    resultado += `<p style="font-size:0.9em; text-align: center;">💡 **Nota:** Si no introdujo las pasadas (hileras) de la muestra, las instrucciones de altura se basan en centímetros.</p>`;

    return resultado;
}

// Aquí deben ir las funciones 'generarCierresProgresivosNuevo', 'calcularCubrePanal' y 'calcularJerseyChaquet' completas
// si quieres que toda la lógica anterior funcione correctamente.

function calcularPuntos() {
    const puntosMuestra = parseFloat(document.getElementById('puntos_muestra').value);
    const hilerasMuestra = parseFloat(document.getElementById('hileras_muestra').value);
    const tipoPrenda = document.getElementById('tipo_prenda').value;
    const tallaSeleccionada = document.getElementById('talla_seleccionada').value;
    const metodoTejido = document.getElementById('metodo_tejido').value; // Solo para Jersey/Chaqueta
    const cmDeseados = parseFloat(document.getElementById('cm_deseados').value); // Solo para CM_DESEADOS
    const holguraDeseadaCm = parseFloat(document.getElementById('holgura_deseada').value); // Solo para Jersey/Chaqueta
    const caidaEscoteDeseadaCm = parseFloat(document.getElementById('caida_escote_deseada').value); // Solo para Jersey/Chaqueta
    
    const resultadoDiv = document.getElementById('resultado');
    let resultado = '';
    
    // 1. VALIDACIONES
    // ... (El código de validación existente se mantiene)

    // Parámetros obligatorios (validación para la mayoría de los casos)
    if (isNaN(puntosMuestra) || puntosMuestra <= 0) {
        resultadoDiv.innerHTML = '<p class="error">Error: Debe introducir los **puntos de la muestra** de tensión (en 10 cm).</p>';
        return;
    }
    if (!tipoPrenda) {
        resultadoDiv.innerHTML = '<p class="error">Error: Debe seleccionar un **tipo de prenda**.</p>';
        return;
    }

    const densidadP = puntosMuestra / 10.0; 
    const densidadH = (hilerasMuestra && hilerasMuestra > 0) ? hilerasMuestra / 10.0 : null;

    // Cálculo simple de CM Deseados
    if (tipoPrenda === 'CM_DESEADOS') {
        if (isNaN(cmDeseados) || cmDeseados <= 0) {
            resultadoDiv.innerHTML = '<p class="error">Error: Debe introducir la medida deseada en cm.</p>';
            return;
        }
        const puntosCalculados = Math.round(cmDeseados * densidadP);
        resultado = `<h4>Cálculo de Puntos para ${cmDeseados.toFixed(1)} cm</h4>
* **Densidad de Puntos (1 cm):** ${densidadP.toFixed(2)} puntos.
* **Puntos a Montar:** **${puntosCalculados} puntos** para un ancho de ${cmDeseados.toFixed(1)} cm.`;
        resultadoDiv.innerHTML = resultado;
        return;
    } else if (tipoPrenda === 'CUBRE_PAÑAL') {
        if (!tallaSeleccionada) {
            resultadoDiv.innerHTML = '<p class="error">Error: Debe seleccionar una **Talla** para el cubre pañal.</p>';
            return;
        }
        // Para que el código sea completo, si tuvieras la función calcularCubrePanal, se usaría:
        // resultadoDiv.innerHTML = calcularCubrePanal(puntosMuestra, hilerasMuestra, tallaSeleccionada);
        // Marcador (sustituir por la función real si la tienes):
        resultadoDiv.innerHTML = '<h4>Cálculo para Cubre Pañal (Lógica Compleja)</h4><p>El cálculo para **Cubre Pañal** requiere una función compleja (**calcularCubrePanal**) que se omite por espacio, pero la estructura ya está lista. Si tienes el código de esta función, pégalo en este archivo.</p>';
        return;

    } else if (tipoPrenda === 'GORRO') { // <--- NUEVA LÓGICA IMPLEMENTADA
        if (!tallaSeleccionada) {
            resultadoDiv.innerHTML = '<p class="error">Error: Debe seleccionar una **Talla** para el gorro.</p>';
            return;
        }
        resultadoDiv.innerHTML = calcularGorro(puntosMuestra, hilerasMuestra, tallaSeleccionada);
        return;
    } else { // JERSEY o CHAQUETA
        if (!tallaSeleccionada || !metodoTejido) {
            resultadoDiv.innerHTML = '<p class="error">Error: Por favor, complete todos los campos obligatorios: **Puntos de Muestra**, **Talla** y **Método de Tejido**.</p>';
            return;
        }
        // Para que el código sea completo, si tuvieras la función calcularJerseyChaquet, se usaría:
        // resultadoDiv.innerHTML = calcularJerseyChaquet(puntosMuestra, hilerasMuestra, tipoPrenda, tallaSeleccionada, metodoTejido, holguraDeseadaCm, caidaEscoteDeseadaCm);
        // Marcador (sustituir por la función real si la tienes):
        resultadoDiv.innerHTML = '<h4>Cálculo para Jersey/Chaqueta (Lógica Compleja)</h4><p>El cálculo para **Jersey** o **Chaqueta** requiere una función compleja (**calcularJerseyChaquet**) que se omite por espacio, pero la estructura ya está lista. Si tienes el código de esta función, pégalo en este archivo.</p>';
        return;
    }
    
    // Esta validación final se dejará inactiva si los "placeholders" de arriba se usan.
    // if (tipoPrenda !== 'CUBRE_PAÑAL' && tipoPrenda !== 'JERSEY' && tipoPrenda !== 'CHAQUETA' && tipoPrenda !== 'GORRO') {
    //      resultadoDiv.innerHTML = '<p class="error">Error: Por favor, complete todos los campos obligatorios: **Puntos de Muestra** y selección de **Tipo de Prenda**.</p>';
    //      return;
    // }

    resultadoDiv.innerHTML = resultado;
}
