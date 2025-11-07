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
// 1.1. NUEVAS MEDIDAS PARA CUBRE PAÑAL (C/P)
// ====================================================================
// CC: Contorno Cintura / AL: Altura Lateral / EP: EntrePierna / TR: Tramo Recto / LCD: Línea Cierre Delantero
const MEDIDAS_CUBRE_PAÑAL = {
    // Nota: Se utilizan los datos de CC proporcionados por la usuaria .
    '0 RN ': { CC: 38, AL: 10, EP: 7, TR: 1, LCD: 1 },
    '1 mes ': { CC: 40, AL: 11, EP: 7, TR: 1.5, LCD: 1.5 },
    '3 meses ': { CC: 42, AL: 11, EP: 8, TR: 2, LCD: 2 }, 
    '6 meses ': { CC: 44, AL: 12, EP: 8, TR: 2, LCD: 2 }, 
    '9 meses ': { CC: 46, AL: 12, EP: 9, TR: 2.5, LCD: 3 }, 
    '12 meses ': { CC: 48, AL: 13, EP: 10, TR: 2.5, LCD: 3 } 
};

// ====================================================================
// 1.2. NUEVAS MEDIDAS PARA GORRO
// ====================================================================
// CC: Contorno de Cabeza / ALT: Altura Total / COR: Coronilla / REC: Tejido Recto / VUE: Vuelta/Borde
const MEDIDAS_GORRO = {
   
   // MEDIDAS DE GORRO

     'RN- 0': { CC: 32.0, ALT: 12.0, COR: 4.0, REC: 7.0, VUE: 2.0 }, 
     '1-3 meses': { CC: 35.0, ALT: 14.0, COR: 4.0, REC: 9.0, VUE: 2.0 }, 
     '3-6 meses': { CC: 36.0, ALT: 17.0, COR: 5.0, REC: 9.5, VUE: 2.0 }, 
     '6 meses-2 años': { CC: 41.0, ALT: 19.0, COR: 5.0, REC: 10.5, VUE: 2.5 }, 
     'Niños': { CC: 48.0, ALT: 21.0, COR: 5.0, REC: 12.0, VUE: 3.0 }, 
     'Adolescentes': { CC: 352.0, ALT: 23.0, COR: 6.0, REC: 13.0, VUE: 4.0 }, 
     'Adultos': { CC: 54.0, ALT: 25.0, COR: 6.0, REC: 13.5, VUE: 5.0 }
};


// Mapeo para poblar las tallas
const MAPA_MEDIDAS = {
    'Bebé (Prematuro a 24m)': MEDIDAS_ANTROPOMETRICAS,
    'Niños (3 a 10 años)': MEDIDAS_ANTROPOMETRICAS,
    'Adulto (36 a 50)': MEDIDAS_ANTROPOMETRICAS,
    'Cubre Pañal (0 a 12m)': MEDIDAS_CUBRE_PAÑAL,
    'Gorro (Tallas)': MEDIDAS_GORRO // NUEVA ENTRADA
};

// Nueva estructura de ORDEN_TALLAS incluyendo el Cubre Pañal y Gorro
const ORDEN_TALLAS = {
    'Bebé (Prematuro a 24m)': ['00 (Prematuro)', '0 meses', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses', '12-15 meses', '15-18 meses', '18-24 meses'],
    'Niños (3 a 10 años)': ['3 años', '4 años', '6 años', '8 años', '10 años'],
    'Adulto (36 a 50)': ['36', '38', '40', '42', '44', '46', '48', '50'],
    'Cubre Pañal (0 a 12m)': ['0 RN ', '1 mes ', '3 meses ', '6 meses ', '9 meses ', '12 meses '],
    'Gorro (Tallas)': ['RN- 0', '1-3 meses', '3-6 meses', '6 meses-2 años', 'Niños', 'Adolescentes', 'Adultos', ]
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
    } else if (tipoPrenda === 'GORRO') { // NUEVA LÓGICA GORRO
        gruposATejer = [['Gorro (Tallas)', ORDEN_TALLAS['Gorro (Tallas)']]];
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
    
    // Repoblar las tallas cada vez que se cambia la prenda
    poblarTallas();

    if (tipoPrenda === 'CM_DESEADOS') {
        metodoGroup.style.display = 'none';
        cmGroup.style.display = 'block';
        tallaSelect.removeAttribute('required');
        tallaSelect.style.display = 'none';
        document.querySelector('label[for="talla_seleccionada"]').style.display = 'none';
    } else if (tipoPrenda === 'JERSEY' || tipoPrenda === 'CHAQUETA') {
        metodoGroup.style.display = 'block';
        cmGroup.style.display = 'none';
        tallaSelect.setAttribute('required', 'required');
        tallaSelect.style.display = 'block';
        document.querySelector('label[for="talla_seleccionada"]').style.display = 'block';
    } else if (tipoPrenda === 'CUBRE_PAÑAL' || tipoPrenda === 'GORRO') { // NUEVA LÓGICA GORRO
        metodoGroup.style.display = 'none'; // Ocultar método de tejido
        cmGroup.style.display = 'none';
        tallaSelect.setAttribute('required', 'required');
        tallaSelect.style.display = 'block';
        document.querySelector('label[for="talla_seleccionada"]').style.display = 'block';
    } else {
        metodoGroup.style.display = 'none';
        cmGroup.style.display = 'none';
        tallaSelect.setAttribute('required', 'required');
        tallaSelect.style.display = 'block';
        document.querySelector('label[for="talla_seleccionada"]').style.display = 'block';
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
    
    // Se elimina el evento del botón de calcular aquí porque ya está en el HTML
});


// ====================================================================
// 3. LÓGICA CENTRAL DE CÁLCULO
// ====================================================================

/**
 * Genera una secuencia de cierres progresivos (3p x 1, luego 2p, luego 1p)
 * para lograr el borde curvo del escote.
 */
function generarCierresProgresivosNuevo(puntosAFormar) {
    let puntosRestantes = puntosAFormar;
    const cierres = [];

    // 1. Cierre de 3 puntos, 1 vez (si es posible)
    if (puntosRestantes >= 3) {
        cierres.push(3);
        puntosRestantes -= 3;
    }

    // 2. Cierres de 2 puntos (prioridad: cierres mayores primero)
    while (puntosRestantes >= 2) {
        cierres.push(2);
        puntosRestantes -= 2;
    }

    // 3. Cierres de 1 punto (el resto)
    while (puntosRestantes > 0) {
        cierres.push(1);
        puntosRestantes -= 1;
    }

    // Agrupar cierres idénticos consecutivos y formatear para la salida
    const cierresAgrupados = [];
    if (cierres.length > 0) {
        let actual = cierres[0];
        let contador = 1;
        for (let i = 1; i < cierres.length; i++) {
            if (cierres[i] === actual) {
                contador++;
            } else {
              // CORRECCIÓN ORTOGRÁFICA: Se usa 'veces' o 'vez' según el contador.
                cierresAgrupados.push(`${actual}p, ${contador} ${contador > 1 ? 'veces' : 'vez'}`); 
                actual = cierres[i];
                contador = 1;
            }
        }
        // CORRECCIÓN ORTOGRÁFICA: Se usa 'veces' o 'vez' según el contador.
        cierresAgrupados.push(`${actual}p, ${contador} ${contador > 1 ? 'veces' : 'vez'}`);
    }
       

    return { 
        secuencia: cierresAgrupados, 
        totalDisminuciones: cierres.length 
    };
}


/**
 * Función principal para calcular el patrón de tejido.
 */
function calcularPatron() {
    const puntosMuestra = parseFloat(document.getElementById('puntos_muestra').value);
    const hilerasMuestra = parseFloat(document.getElementById('hileras_muestra').value);
    const tallaSeleccionada = document.getElementById('talla_seleccionada').value;
    const tipoPrenda = document.getElementById('tipo_prenda').value;
    const metodoTejido = document.getElementById('metodo_tejido').value;
    const cmDeseados = parseFloat(document.getElementById('cm_deseados').value);
    
    // Lectura robusta de la caída de escote deseada (No es relevante para esta versión, pero se mantiene la robustez)
    const caidaEscoteInput = document.getElementById('caida_escote_deseada');
    const caidaEscoteDeseadaCm = caidaEscoteInput ? parseFloat(caidaEscoteInput.value) : null;

    const resultadoDiv = document.getElementById('resultado');

    // 1. Validaciones (solo para campos OBLIGATORIOS)
    if (isNaN(puntosMuestra) || puntosMuestra <= 0) {
        resultadoDiv.innerHTML = '<p class="error">Error: Debe introducir los **puntos de la muestra** de tensión (en 10 cm).</p>';
        return;
    }
    if (!tipoPrenda) {
        resultadoDiv.innerHTML = '<p class="error">Error: Debe seleccionar un **tipo de prenda**.</p>';
        return;
    }
    
    const densidadP = puntosMuestra / 10.0;
    // La densidadH es opcional. Si no existe o es <= 0, será null.
    const densidadH = (hilerasMuestra && hilerasMuestra > 0) ? hilerasMuestra / 10.0 : null; 
    
    // Cálculo simple de CM Deseados
    if (tipoPrenda === 'CM_DESEADOS') {
        if (isNaN(cmDeseados) || cmDeseados <= 0) {
            resultadoDiv.innerHTML = '<p class="error">Error: Debe introducir la cantidad de **cm deseados**.</p>';
            return;
        }
        const puntosTotales = Math.round(cmDeseados * densidadP);
        resultadoDiv.innerHTML = `<h4>🧶 Cálculo de Ancho</h4><p>Los puntos necesarios para un ancho de **${cmDeseados} cm** son: **${puntosTotales} puntos**.</p>`;
        return;
    }

    // El resto de lógica requiere la talla
    if (!tallaSeleccionada) {
         resultadoDiv.innerHTML = '<p class="error">Error: Debe seleccionar una **talla**.</p>';
        return;
    }

    
    // ====================================================================
    // --- LÓGICA ESPECÍFICA PARA GORRO (CON CORRECCIÓN DE PASADAS) ---
    // ====================================================================
    if (tipoPrenda === 'GORRO') {
        
        if (densidadH === null) {
            resultadoDiv.innerHTML = `<p class="error">Error: Para calcular las instrucciones de menguado del **Gorro**, debes introducir las **Pasadas en 10 cm (Muestra de tensión)**.</p>`;
            return;
        }

        const medidasGorro = MEDIDAS_GORRO[tallaSeleccionada];
        if (!medidasGorro) {
             resultadoDiv.innerHTML = '<p class="error">Error: No se encontraron medidas para la talla seleccionada de Gorro.</p>';
             return;
        }
        
        // Medidas en cm
        const ccCm = medidasGorro.CC; // Contorno de Cabeza
        const altCm = medidasGorro.ALT; // Altura Total
        const corCm = medidasGorro.COR; // Coronilla
        const recCm = medidasGorro.REC; // Tejido Recto (original)
        const vueCm = medidasGorro.VUE; // Vuelta/Borde
        
        // Puntos/Pasadas
        const puntosMontar = Math.round(ccCm * densidadP);
        const puntosCoronilla = Math.round(corCm * densidadP);
        
        const pasadasVue = Math.round(vueCm * densidadH);
        let pasadasRec = Math.round(recCm * densidadH); // Usamos 'let' para poder ajustarla
        const pasadasAlt = Math.round(altCm * densidadH);
        let pasadasMenguar = pasadasAlt - pasadasRec; // Pasadas disponibles iniciales

        // CÁLCULO DE DISMINUCIONES
        const puntosAMenguar = puntosMontar - puntosCoronilla;
        
        if (pasadasMenguar <= 0) {
            resultadoDiv.innerHTML = `<p class="error">Error: La Altura Total (${altCm} cm) no es suficiente para la Altura de Tejido Recto (${recCm} cm) y las disminuciones. Revisa tus datos de muestra o tus medidas.</p>`;
            return;
        }

        const rondasDisponibles = Math.floor(pasadasMenguar / 2);

        if (rondasDisponibles <= 0) {
             resultadoDiv.innerHTML = `<p class="error">Error: No hay pasadas suficientes para el menguado con la restricción de **menguar cada 2 pasadas**.</p>`;
            return;
        }

        // El número de disminuciones por ronda (DPR) se redondea para dar instrucciones claras.
        const disminucionesPorRonda = Math.max(1, Math.round(puntosAMenguar / rondasDisponibles));

        // El número REAL de rondas de disminución necesarias para lograr el menguado
        const rondasDisminucionReales = Math.ceil(puntosAMenguar / disminucionesPorRonda); 

        // 1. LÓGICA DE AJUSTE DE PASADAS RECTAS (CORRECCIÓN SOLICITADA)
        let pasadasUsadas = 0; 

        if (rondasDisminucionReales > 0) {
            // El total de pasadas usadas es: (Nº Rondas * 2) - 1 (la última disminución no tiene pasada simple)
            pasadasUsadas = Math.max(1, (rondasDisminucionReales * 2) - 1);
        }
        
        // Finalmente, nos aseguramos de no exceder el total de pasadas disponibles
        pasadasUsadas = Math.min(pasadasUsadas, pasadasMenguar);
        
        // Se calculan las pasadas sobrantes y se ajusta el Tejido Recto.
        const pasadasSobrantes = pasadasMenguar - pasadasUsadas;

        let recCmNuevo = recCm.toFixed(1);

        if (pasadasSobrantes > 0) {
            pasadasRec += pasadasSobrantes; // Aumentar el tramo recto
            pasadasMenguar -= pasadasSobrantes; // Reducir las pasadas disponibles para menguar
            // Recalcular el cm del tramo recto ajustado
            recCmNuevo = (pasadasRec / densidadH).toFixed(1);
        }

        // 2. GENERAR INSTRUCCIONES
        let resultado = `<h3>🧶 Gorro - Talla ${tallaSeleccionada}</h3>`;
        resultado += `<p>Comienza montando **${puntosMontar} puntos** (para un Contorno de Cabeza de **${ccCm} cm**).</p>\n`;
        resultado += '<hr>';

        // Vuelta/Borde (Opcional)
        resultado += '<h4>1. Vuelta / Borde (Opcional)</h4>\n';
        resultado += `La medida de Vuelta/Borde (VUE) es de **${vueCm} cm** (**${pasadasVue} pasadas**). Puedes tejer esta sección o saltarla. Si la tejes, añade esas pasadas al principio de tu gorro.\n`;
        resultado += '<hr>';

        // Tejido Recto (CON AJUSTE)
        resultado += '<h4>2. Tejido Recto (REC)</h4>\n';
        if (pasadasSobrantes > 0) {
            resultado += `**AJUSTE:** Se han añadido **${pasadasSobrantes} pasadas** al tramo recto (para que las disminuciones terminen justo a la altura total).\n`;
            resultado += `Teje recto durante **${recCmNuevo} cm** (**${pasadasRec} pasadas**).\n`;
        } else {
             resultado += `Teje recto durante **${recCmNuevo} cm** (**${pasadasRec} pasadas**).\n`;
        }
        resultado += '<hr>';

        // Línea de Menguados (Coronilla)
        resultado += '<h4>3.Llegó el momento de dar forma a la coronilla</h4>\n';
        const cmRestantesMenguar = (pasadasMenguar / densidadH).toFixed(1);
        resultado += `Ahora toca menguar. Tienes que cerrar **${puntosAMenguar} puntos** en **${pasadasMenguar} pasadas** (los **${cmRestantesMenguar} cm** que faltan para acabar el gorro).\n`;
        //resultado += `En la aguja deben quedar **${puntosCoronilla} puntos** (para la Coronilla de **${corCm} cm**).\n`;
        resultado += `\n**Disminuirás de la siguiente manera:**\n`;
       // resultado += `\nPara lograr esto, harás un total de **${disminucionesPorRonda} disminuciones** por ronda, cada **2 pasadas**.\n`;
        
        // Generar la secuencia RPD
        let puntosActuales = puntosMontar;
        let Rk = Math.floor(puntosActuales / disminucionesPorRonda); // Puntos por segmento
        let rondaActual = pasadasRec; // Empieza a contar las rondas reales desde el final del tramo recto
        let secuenciaDisminucion = [];

        // El bucle ahora solo itera las rondas de disminución *necesarias*
        for (let i = 1; i <= rondasDisminucionReales; i++) { 
            
            // 1. RONDA DE DISMINUCIÓN
            rondaActual++; 
            const ptsEntreDisminucion = Math.max(1, Rk - 1); // Puntos a tejer *antes* de 1 disminución
            
            // Ajuste de puntos para la primera ronda (repartir el resto/exceso de puntos)
            let ptsExtraInicial = 0;
            if (i === 1) {
                const puntosSobran = puntosActuales - (disminucionesPorRonda * Rk);
                if (puntosSobran > 0) {
                     ptsExtraInicial = puntosSobran;
                }
            }

            let instruccionRonda = '';
            
            if (ptsExtraInicial > 0) {
                instruccionRonda += `Teje **${ptsExtraInicial}** puntos y luego empieza la secuencia: `;
            }

            instruccionRonda += `Teje **${ptsEntreDisminucion}** puntos, haz **1 disminución**. Haz esto **${disminucionesPorRonda} veces** hasta el final de la pasada.`;
            
            secuenciaDisminucion.push(`**Pasada ${rondaActual} (DISMINUCIÓN):** ${instruccionRonda} (Quedan: **${puntosActuales - disminucionesPorRonda} puntos**).`);

            // Actualizar puntos y Rk para la siguiente ronda
            puntosActuales -= disminucionesPorRonda; 
            Rk = Math.max(1, Math.floor(puntosActuales / disminucionesPorRonda));

            // 2. RONDA DE TEJIDO SIMPLE (cada 2 pasadas)
            // Solo se añade si no es la última ronda de disminución necesaria
            if (i < rondasDisminucionReales && puntosActuales > puntosCoronilla && rondaActual < (pasadasRec + pasadasMenguar)) { 
                rondaActual++;
                secuenciaDisminucion.push(`**Pasada ${rondaActual} ** Teje todos los puntos sin disminución.`);
            }

            // Condición de salida
            if (puntosActuales <= puntosCoronilla) {
                 break;
            }
        }
        
        resultado += secuenciaDisminucion.join('\n');
        
        // Manejar el cierre final si la secuencia DRP no fue perfecta (puntos > coronilla)
        if (puntosActuales > puntosCoronilla) {
            resultado += `\n**Pasada ${rondaActual + 1} (CIERRE FINAL):** Todavía quedan **${puntosActuales} puntos** en la aguja. Realiza disminuciones hasta que solo queden **${puntosCoronilla} puntos** o menos. Por ejemplo, repite: (Teje 1 punto, haz 1 disminución) toda la ronda.\n`;
            rondaActual++;
        }

        // Confirmación de la altura alcanzada
        if (rondaActual <= pasadasAlt) {
            resultado += `\n**¡ALTURA ALCANZADA!** Has terminado de menguar, ahora tendrás (${(rondaActual / densidadH).toFixed(1)} cm).\n`;
        }
        
        // 4. ACABADO
        resultado += '<hr>';
        resultado += '<h4>4. Acabado </h4>\n';
        resultado += `**1.** Ahora que tienes los puntos finales en la aguja, **corta la lana** dejando una hebra larga para coser todo el lateral del gorro.\n`;
        resultado += `**2.** Enhebra tu aguja lanera y pásala por el interior de los puntos que quedan, tira de la hebra para cerrar la parte de arriba (la coronilla). Pásala una o dos veces más para asegurar el cierre.\n`;
        resultado += `**3.** Si has tejido con agujas rectas continúa cosiendo todo el lateral del gorro hasta llegar al borde. ¡Listo!\n`;
        resultado += `**4.** Si quieres, puedes añadirle un pompón.\n`;
        
        // Finalizar y añadir nota de ganchillo
        resultado += `<hr style="margin-top: 25px; border-color: #d6a4a4;">`;
        resultado += `<p style="font-size:0.9em; text-align: center;">💡 **Nota:** Esta calculadora es válida tanto para **tejido en dos agujas** (donde 'puntos' = puntos y 'pasadas' = hileras) como para **Ganchillo/Crochet** (donde 'puntos' = cadenetas y 'pasadas' = vueltas). Solo tiene que sustituir la terminología.</p>`;

        resultadoDiv.innerHTML = resultado.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

        return; 
    }

    let medidas;
    // Se selecciona el conjunto de medidas correcto
    if (tipoPrenda === 'CUBRE_PAÑAL') {
        medidas = MEDIDAS_CUBRE_PAÑAL[tallaSeleccionada];
    } else {
        medidas = MEDIDAS_ANTROPOMETRICAS[tallaSeleccionada];
    }

    if (!medidas) {
        resultadoDiv.innerHTML = '<p class="error">Error: No se encontraron medidas para la talla seleccionada.</p>';
        return;
    }
    
    let resultado = '';

    // ====================================================================
    // --- LÓGICA ESPECÍFICA PARA CUBRE PAÑAL ---
    // ====================================================================
    if (tipoPrenda === 'CUBRE_PAÑAL') {
        const CC = medidas.CC; // Contorno de Cintura
        const AL = medidas.AL; // Altura Lateral
        const EP = medidas.EP; // EntrePierna
        const TR = medidas.TR; // Tramo Recto
        const LCD = medidas.LCD; // Línea Cierre Delantero
        
        // Puntos y medidas base
        const puntosMontar = Math.round((CC / 2) * densidadP); // Puntos para la mitad (espalda/delantero)
        const puntosEP = Math.round(EP * densidadP); // Puntos de la entrepierna
        const hilerasAL = densidadH ? Math.round(AL * densidadH) : null;
        const hilerasTR = densidadH ? Math.round(TR * densidadH) : null;

        // 2. Línea de Disminuciones (Espalda)
        const menguadosTotales = puntosMontar - puntosEP;
        const menguadosPorLado = Math.round(menguadosTotales / 2);
        
        let hilerasDisminucion = null;
        let cmDisminucion = null;
        if (menguadosPorLado > 0) {
             // 1 disminución a cada lado cada 2 pasadas -> Hileras = menguados por lado * 2
             hilerasDisminucion = menguadosPorLado * 2;
             if (densidadH) {
                 cmDisminucion = (hilerasDisminucion / densidadH).toFixed(1);
             }
        }
        
        // 4. Línea de Aumentos (Delantero)
        const puntosLCD = Math.round(LCD * densidadP);
        const puntosObjetivoDelantero = puntosMontar - (puntosLCD * 2);
        const aumentosTotales = puntosObjetivoDelantero - puntosEP;
        const aumentosPorLado = Math.round(aumentosTotales / 2);
        
        let hilerasAumento = null;
        let cmAumento = null;
        if (aumentosPorLado > 0) {
             // 1 aumento a cada lado cada 2 pasadas -> Hileras = aumentos por lado * 2
             hilerasAumento = aumentosPorLado * 2;
             if (densidadH) {
                 cmAumento = (hilerasAumento / densidadH).toFixed(1);
             }
        }
        
        // 8. Instrucciones de elástico/pasacintas
        let elásticoCm;
        if (CC <= 40) { // Tallas pequeñas (0 meses C/P y 1-3 meses C/P)
            elásticoCm = 2;
        } else { // Tallas grandes
            elásticoCm = 3;
        }
        
        
        // =================================== OUTPUT CUBRE PAÑAL ===================================
        resultado += `<h4>🧶 Instrucciones para Cubre Pañal - Talla ${tallaSeleccionada}</h4>\n`;
        resultado += `<p>Se tejerá en una sola pieza desde la espalda hasta el delantero.</p>\n`;

         resultado += `\n<u>A tener en cuenta antes de empezar a tejer:</u>\n`;
        resultado += `* **Cinturilla:** En la cintura sugerimos tejer  **${elásticoCm} cm** ** en punto elástico** o añadir una vuelta de **pasacintas** cuando este tejiendo en la mitad de esos cm (Pasacintas:*2p juntos al derecho, hebra*, repetir de *a* toda la pasada).  El ancho es orientativo, puedes hacerlo mas ancho o estrecho, segun te guste.\n`;
        resultado += `* **Bordes:** Para un borde rematado al mismo tiempo que se teje la pierna, haga los aumentos y disminuciones a 3 o 4 puntos de la orilla. Otra opción es recoger después los puntos del borde de las piernas y para tejer una tira de terminación en el punto que te guste.
        \n`;

        
        resultado += `<u>Manos a la obra!:</u>\n`;
        resultado += `* **Comienza montando:** **${puntosMontar} puntos** (corresponde a ${CC / 2} cm de cintura).
        \n`;
       

        resultado += `<u>1. Espalda (Cintura a Entrepierna)</u>\n`;
        
        // 1. Altura Lateral
        resultado += `* ** Tejer recto **${AL} cm** ${hilerasAL !== null ? `(**${hilerasAL} pasadas**)` : ''}.\n`;
        
        // 2. Línea de Disminuciones
        resultado += `* **Ahora has llegado al muslo y hay que empezar a disminuir:** Disminuir **${menguadosPorLado} veces 1 punto a cada lado.**\n`;
        if (densidadH && cmDisminucion) {
             resultado += `<p style="padding-left: 20px;">- Haz: **1 disminución a cada lado cada 2 pasadas**.\n`;
             resultado += `- La linea de disminuciones medirá **${cmDisminucion} cm** (**${hilerasDisminucion} pasadas**). (Quedarán en la aguja **${puntosEP} puntos**).</p>\n`;
        } else if (menguadosPorLado > 0) {
             resultado += `<p style="padding-left: 20px;">- Haz: **1 disminución a cada lado cada 2 pasadas** hasta tener **${puntosEP} puntos** en la aguja.</p>\n`;
        }
        
        // 3. Tramo Recto
        resultado += `* **Has llegado a la entrepierna, ahora hay que hacer unas pasadas rectas antes de empezar el delantero :** Tejer recto los **${puntosEP} puntos** durante **${TR} cm** ${hilerasTR !== null ? `(**${hilerasTR} pasadas**)` : ''}.\n\n`;

        resultado += `<u>2. Delantero (Entrepierna a Cintura)</u>\n`;
        
        // 4. Línea de Aumentos
        resultado += `* **Ahora tienes que ** aumentar **${aumentosPorLado} veces 1 punto a cada lado.**\n`;
        if (densidadH && cmAumento) {
             resultado += `<p style="padding-left: 20px;">- Haz: **1 aumento a cada lado cada 2 pasadas**.\n`;
             resultado += `- La linea de aumentos medirá **${cmAumento} cm** (**${hilerasAumento} pasadas**). (Llegará a **${puntosObjetivoDelantero} puntos**).</p>\n`;
        } else if (aumentosPorLado > 0) {
             resultado += `<p style="padding-left: 20px;">- Haz: **1 aumento a cada lado cada 2 pasadas** hasta tener **${puntosObjetivoDelantero} puntos** en la aguja.</p>\n`;
        } else {
             resultado += `<p style="padding-left: 20px;">- No se requieren aumentos en este tramo.</p>\n`;
        }
        
        // 5. Línea Cierre Delantero
        resultado += `* **Acabados los aumentos **, antes de empezar a tejer las ultimas pasadas para llegar a la cintura tendrás que aumentar de una vez **${puntosLCD} puntos a cada lado**. (Tendrás **${puntosMontar} puntos, los mismos puntos con los que empezaste a tejer**).\n`;
        
        // 6. Altura Lateral Delantero
        resultado += `* ahora debes de ** continuar tejiendo recto ** **${AL} cm** ${hilerasAL !== null ? `(**${hilerasAL} pasadas**)` : ''}.\n`;
        
        // 7. Cierre y Costura
        resultado += `\n<u>3. Acabado</u>\n`;
        resultado += `* ** Cerrar los **${puntosMontar} puntos** de la cintura delantera.\n`;
        resultado += `* **Coser ** los laterales.\n`;
        
       
     
    } else {
        // --- LÓGICA EXISTENTE PARA JERSEY, CHAQUETA, ETC. ---
        
        // Cálculos compartidos (necesarios para el resto de prendas)
        
        // ====================================================================
        // --- 1. CÁLCULO DE HOLGURAS SEGÚN LA CATEGORÍA DE TALLA (MODIFICADO) ---
        // ====================================================================
        
        let holguraCm;
        let holguraMangaCm;
        
        // Definición de las categorías de tallas para la lógica de holgura.
        // Se excluye '00 (Prematuro)' de tallasBebe ya que tiene su propia regla.
        const tallasBebe = ['0 meses', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses', '12-15 meses', '15-18 meses', '18-24 meses'];
        const tallasNinos = ['3 años', '4 años', '6 años', '8 años', '10 años'];
        const tallasAdulto = ['36', '38', '40', '42', '44', '46', '48', '50'];

        if (tallaSeleccionada === '00 (Prematuro)') {
            // Regla Prematuro: Cuerpo: 2 cm / Sisa: 1 cm
            holguraCm = 2.0;
            holguraMangaCm = 1.0;
        } else if (tallasBebe.includes(tallaSeleccionada)) {
            // Regla Bebé (no 00): Cuerpo: 4 cm / Sisa: 2 cm
            holguraCm = 4.0;
            holguraMangaCm = 2.0;
        } else if (tallasNinos.includes(tallaSeleccionada)) {
            // Regla Niños: Cuerpo: 6 cm / Sisa: 4 cm
            holguraCm = 6.0;
            holguraMangaCm = 4.0;
        } else if (tallasAdulto.includes(tallaSeleccionada)) {
            // Regla Adulto: Cuerpo: 8 cm / Sisa: 4 cm
            holguraCm = 8.0;
            holguraMangaCm = 4.0;
        } else {
             // Fallback: Si la talla no coincide con las categorías anteriores
             holguraCm = 4.0;
             holguraMangaCm = 2.0;
        }
        
        // CÁLCULO DE PUNTOS Y CM FINALES (usando la holguraCm ajustada)
        const cpAjustadoCm = medidas.CP + holguraCm;
        const cpPts = Math.round(cpAjustadoCm * densidadP); 
        const anchoPrendaCm = (cpPts / densidadP).toFixed(1); 
        
        // Cálculos secundarios
        const ccAjustadoCm = medidas.CC + holguraCm; 
        const anchoSisaMangaCm = medidas.CA + holguraMangaCm; // Usa la holguraMangaCm ajustada
        const puntosSisaManga = Math.round(anchoSisaMangaCm * densidadP);
        const tiraCuelloCm = 2.5; 
        const tiraCuelloPts = densidadH ? Math.round(tiraCuelloCm * densidadH) : null;
        
        // LÍNEA CORREGIDA A PSISA * 0.9: La línea de raglán es el 90% de Pecho a Sisa.
        const raglanCmBase = medidas.PSisa * 0.9; 
        const puntosTapeta = Math.round(tiraCuelloCm * densidadP);


        // --- LÓGICA BOTTOM-UP (Del Bajo al Hombro) ---
        if (metodoTejido === "BAJO") {
            // CÁLCULOS VERTICALES CONDICIONALES A DENSIDADH
            const largoCuerpoCm = medidas.LT - medidas.PSisa;
            const hilerasBajoSisa = densidadH ? Math.round(largoCuerpoCm * densidadH) : null; 
            const hilerasSisaHombro = densidadH ? Math.round(medidas.PSisa * densidadH) : null;
            const hilerasTotalEspalda = (hilerasBajoSisa !== null && hilerasSisaHombro !== null) ? (hilerasBajoSisa + hilerasSisaHombro) : null;
            
            let puntosMedioPecho = Math.round(cpPts / 2);
            let puntosEspalda = puntosMedioPecho;
            let puntosTotalDelantero; 
            
            // --- CÁLCULO DE CAÍDA DE ESCOTE MODIFICADO ---
            // 1. Determinar la caída de escote final deseada (CED Final)
            // Se usa la caída manual (si se da) o la estándar de la BD.
            let cedFinalCm = caidaEscoteDeseadaCm || medidas.CED; 
            
            // 2. Calcular la caída real para el tejido (cedRealCm)
            let cedRealCm;
            if (cedFinalCm > tiraCuelloCm) {
                 cedRealCm = cedFinalCm - tiraCuelloCm;
            } else {
                 // Si la caída deseada es muy pequeña o no se da, usamos el valor del modelo como caída real para el cuerpo.
                 cedRealCm = medidas.CED; 
            }
            
            // 3. Calcular el punto de inicio de la curva del escote (Escote desde Sisa)
            const escoteCmDesdeSisa = medidas.PSisa - cedRealCm;
            const hilerasInicioEscote = densidadH ? Math.round(escoteCmDesdeSisa * densidadH) : null;
            
            if (tipoPrenda === "CHAQUETA") {
                puntosTotalDelantero = Math.round(puntosMedioPecho / 2);
            } else { // JERSEY
                puntosTotalDelantero = puntosMedioPecho;
            }

            // --- LÓGICA DE ESCOTE (30.56% Hombro, 38.88% Escote Central, 30.56% Hombro) ---
            const puntosHombroBase = Math.round(puntosTotalDelantero * 0.3056); 
            let puntosEscoteTotal = puntosTotalDelantero - (puntosHombroBase * 2);
            if (puntosEscoteTotal < 3) {
                puntosEscoteTotal = 3; 
                puntosHombroBase = Math.floor((puntosTotalDelantero - puntosEscoteTotal) / 2);
            }
            
            let puntosEscoteCentral = Math.round(puntosEscoteTotal * 0.40); 
            if (tipoPrenda === "JERSEY" && puntosEscoteCentral % 2 === 0) {
                 puntosEscoteCentral = Math.max(1, puntosEscoteCentral + 1);
            }
            const puntosRestantesCurvas = puntosEscoteTotal - puntosEscoteCentral;
            let puntosAFormarEscotePts = Math.floor(puntosRestantesCurvas / 2);
            const puntosHombro = puntosHombroBase + (puntosRestantesCurvas - (puntosAFormarEscotePts * 2));
            
            const escoteCalculado = generarCierresProgresivosNuevo(puntosAFormarEscotePts);
            const cierresEscote = escoteCalculado.secuencia; 
            const pasadasCurva = escoteCalculado.totalDisminuciones * 2; 
            
            // CÁLCULO DE CM RECTOS (Siempre en CM)
            let cmCurva = 0;
            if (densidadH) {
                 cmCurva = pasadasCurva / densidadH;
            }
            
            const cmRectoAFormar = medidas.PSisa - escoteCmDesdeSisa - cmCurva;
            const cmRectoOutput = cmRectoAFormar > 0 ? cmRectoAFormar.toFixed(1) : (0).toFixed(1);
            
            // CÁLCULO DE PASADAS RECTAS (Solo si densidadH existe)
            let hilerasRestantesStr = '';
            if (densidadH) {
                const hilerasTrabajarRecto = hilerasSisaHombro - hilerasInicioEscote - pasadasCurva;
                if (hilerasTrabajarRecto > 0) {
                    hilerasRestantesStr = `(**${hilerasTrabajarRecto} pasadas**)`
                }
            }
            
            // =================================== OUTPUT BOTTOM-UP ===================================
            resultado += `<h4>🧶 Resultados de Tejido (Del Bajo al Hombro - Por Piezas)</h4>\n`;
            resultado += `* **Talla Seleccionada (${tallaSeleccionada}) (Contorno de pecho):** **${medidas.CP.toFixed(1)} cm**.\n`; 
            resultado += `* **Ancho Total de la Prenda (Contorno de pecho + Holgura):** **${anchoPrendaCm} cm** (**${cpPts} puntos**).\n`;
            if (caidaEscoteDeseadaCm) {
                 resultado += `* **Profundidad de Escote Final Deseada (Tira Incluida):** **${cedFinalCm.toFixed(1)} cm** (El patrón se calcula con una caída de **${cedRealCm.toFixed(1)} cm** para el cuerpo).\n\n`;
            } else {
                 resultado += `* **Caída de Escote:** **${medidas.CED.toFixed(1)} cm**.\n\n`;
            }
            
            // 1. ESPALDA
            resultado += `<u>1. Espalda</u>\n`;
            resultado += `* **Montar:** **${puntosEspalda} puntos**.\n`;
            resultado += `* **Tejer hasta la Sisa:** **${largoCuerpoCm.toFixed(1)} cm** ${hilerasBajoSisa !== null ? `(**${hilerasBajoSisa} pasadas**)` : ''}.\n`; 
            resultado += `* **Continuar tejiendo de Sisa a Hombro (Recto):** **${medidas.PSisa.toFixed(1)} cm** ${hilerasSisaHombro !== null ? `(**${hilerasSisaHombro} pasadas**)` : ''}.\n`; 
            resultado += `* **Total Tejido (De bajo a Hombro):** **${medidas.LT.toFixed(1)} cm** ${hilerasTotalEspalda !== null ? `(**${hilerasTotalEspalda} pasadas**)` : ''}. Cerrar todos los puntos al finalizar.\n\n`;

            // 2. DELANTERO(S)
            resultado += `<u>2. Delantero(s)</u>\n`;
            if (tipoPrenda === "JERSEY") {
                resultado += `* **Montar:** **${puntosTotalDelantero} puntos**.\n`;
            } else { // CHAQUETA
                resultado += `* **Montar:** **${puntosTotalDelantero} puntos** (por cada Delantero).\n`;
                resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tapeta Opcional:** Sugerimos añadir **${puntosTapeta} puntos** extra para la tapeta, que serán **${tiraCuelloCm.toFixed(1)} cm** de ancho.</p>\n`;
            }
            resultado += `* **Tejer hasta la Sisa:** **${largoCuerpoCm.toFixed(1)} cm** ${hilerasBajoSisa !== null ? `(**${hilerasBajoSisa} pasadas**)` : ''} (igual que la espalda).\n`; 
          
            // INSTRUCCIONES DE ESCOTE
            resultado += `<u>Indicacciones para el Escote (Delantero)</u>\n`;
            resultado += `* **1. Tejer el Escote ** a los **${escoteCmDesdeSisa.toFixed(1)} cm** desde el inicio de la sisa. ${hilerasInicioEscote !== null ? `(En la pasada **${hilerasInicioEscote}**).` : ''}\n`;
            
            if (tipoPrenda === "JERSEY") {
                 resultado += `* **2. Cierre Central (Recto):** Cerrar los **${puntosEscoteCentral} puntos** centrales. Esto divide el tejido en dos lados.\n`;
                 resultado += `* **3. Curva de Escote (Ambos lados):** Continuar tejiendo y cerrar en el borde del escote de la siguiente manera: **${cierresEscote.join(', ')}** (un total de **${puntosAFormarEscotePts} puntos** a cerrar por lado).\n`;
                 resultado += `* **4.  Hombro:** Continuar recto los **${cmRectoOutput} cm** ${hilerasRestantesStr} restantes. Cerrar los **${puntosHombro} puntos** restantes por hombro al llegar a la altura total de sisa (**${medidas.PSisa.toFixed(1)} cm** ${hilerasSisaHombro !== null ? `(**${hilerasSisaHombro} pasadas**)` : ''}).\n\n`; 
            } else { // CHAQUETA
                const totalCierreLateral = puntosEscoteCentral + puntosAFormarEscotePts;
                const secuenciaTotal = generarCierresProgresivosNuevo(totalCierreLateral).secuencia;
                
                const puntosCierreInicial = puntosEscoteCentral;
                const puntosCierreInicialConTapeta = puntosEscoteCentral + puntosTapeta;
                
                const avisoTapetaEnCierre = ` (Tenga en cuenta que si añadió la tapeta sugerida de **${puntosTapeta} puntos**, el cierre inicial será de **${puntosCierreInicialConTapeta} puntos** en total).`;
                
                // Instrucción modificada con la advertencia
                resultado += `* **2. Cierre Central (Escote):** Cerrar **${puntosCierreInicial} puntos**${avisoTapetaEnCierre} y luego continuar disminuyendo de la siguiente manera: **${secuenciaTotal.join(', ')}** (un total de **${totalCierreLateral} puntos** a disminuir).\n`;
                resultado += `* **3. Hombro:** Continuar recto y cerrar los **${puntosHombro} puntos** restantes en el hombro al llegar a los **${medidas.PSisa.toFixed(1)} cm** de altura total de sisa ${hilerasSisaHombro !== null ? `(**${hilerasSisaHombro} pasadas**)` : ''}.\n\n`; 
            }

            // 3. MANGAS
            resultado += `<u>3. Mangas</u>\n`;
            const puntosPuño = Math.round(medidas['C Puño'] * densidadP);
            // const puntosSisaManga está calculado arriba con holgura
            const largoMangaSisaPuñoCm = medidas.LM; 
            const largoMangaH = densidadH ? Math.round(largoMangaSisaPuñoCm * densidadH) : null;
            
            const totalAumentos = puntosSisaManga - puntosPuño;
            const aumentosPorLado = Math.floor(totalAumentos / 2);
            
            resultado += `* **Montar:** **${puntosPuño} p.** (Puño de **${medidas['C Puño'].toFixed(1)} cm**).\n`;
            resultado += `* **Tejer:** **${largoMangaSisaPuñoCm.toFixed(1)} cm** (Largo de Sisa a Puño). ${largoMangaH !== null ? `(**${largoMangaH} pasadas**)` : ''}\n`;
            
            if (aumentosPorLado > 0) {
                const frecuenciaCm = largoMangaSisaPuñoCm / aumentosPorLado;
                
                // CÁLCULO DE CM AÑADIDO PARA LA SISA
                const cmSisaFinal = anchoSisaMangaCm.toFixed(1);

                let frecuenciaStr = `cada **${frecuenciaCm.toFixed(1)} cm**`;
                if (densidadH) {
                    const frecuenciaAumentos = Math.round(largoMangaH / aumentosPorLado);
                    frecuenciaStr = `cada **${frecuenciaAumentos} pasadas** (aprox. **${frecuenciaCm.toFixed(1)} cm**)`
                }
                
                // LÍNEA DE OUTPUT MODIFICADA para aclarar la frecuencia y confirmar la holgura
                resultado += `* **Aumentos:** Aumentar **1 punto a cada lado** **${aumentosPorLado} veces** con una frecuencia de **${frecuenciaStr}**. Esto lleva la manga a **${puntosSisaManga} puntos** (**${cmSisaFinal} cm** de contorno en la sisa, incluyendo **${holguraMangaCm.toFixed(1)} cm** de holgura).\n\n`;
            } else {
                resultado += `* **Aumentos:** No se requieren aumentos o el cálculo es inconsistente. Tejer recto.\n\n`;
            }


        // --- LÓGICA TOP-DOWN (Escote al Bajo - Raglán) ---
        } else if (metodoTejido === "ESCOTE") {
            
            const hilerasRaglan = densidadH ? Math.round(raglanCmBase * densidadH) : null;
            
            resultado += `<h4>🧶 Resultados de Tejido desde el Escote (Raglán)</h4>\n`;
            resultado += `* **Talla Seleccionada (${tallaSeleccionada}) (Contorno de pecho):** **${medidas.CP.toFixed(1)} cm**.\n`; 
            resultado += `* **Ancho Total de la Prenda (Contorno de pecho + Holgura):** **${anchoPrendaCm} cm** (**${cpPts} puntos**).\n\n`;

            // 1. REPARTO INICIAL
            const puntosMontaje = cpPts; 
            const puntosBase = puntosMontaje - 4; 
            
            const pEspalda = Math.round(puntosBase * 0.33);
            const pManga = Math.round((puntosBase * 0.33) / 2); 
            let pDelanteroBase = puntosBase - pEspalda - (pManga * 2);
            const puntosRestantes = puntosBase - pEspalda - (pManga * 2) - pDelanteroBase;
            pDelanteroBase += puntosRestantes;
            
            let repartoStr;
            if (tipoPrenda === "JERSEY") {
                const pDelanteroFinal = pDelanteroBase;
                repartoStr = `**${pEspalda} p** (Espalda), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pDelanteroFinal} p** (Delantero), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador).`;
            } else { // CHAQUETA
                const pDelanteroParte1 = Math.floor(pDelanteroBase / 2);
                const pDelanteroParte2 = pDelanteroBase - pDelanteroParte1;
                repartoStr = `**${pDelanteroParte1} p** (Del. 1), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pEspalda} p** (Espalda), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pDelanteroParte2} p** (Del. 2).`;
                resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tapeta Opcional:** Sugerimos montar **${puntosTapeta} puntos** *adicionales* a cada lado para la tapeta, que serán **${tiraCuelloCm.toFixed(1)} cm** de ancho.</p>\n`;
            }
            
            resultado += `<u>1. Empezamos a tejer con el escote:</u>\n`;
            resultado += `* **Montamos:** **${puntosMontaje} puntos** (**${ccAjustadoCm.toFixed(1)} cm** de contorno).\n`;
            resultado += `* **A continuación:** Tejer **${tiraCuelloPts} pasadas** (**${tiraCuelloCm.toFixed(1)} cm**) para la tira del cuello.\n`;
            resultado += `* **Repartir los puntos de la siguiente manera: (4 puntos marcados para el Raglán):** ${repartoStr}\n\n`;

            // 2. AUMENTOS RAGLÁN
            const numAumentosRondas = densidadH ? Math.floor(hilerasRaglan / 2) : 0; // El número de rondas/hileras con aumentos
            const puntosAumentadosPorPieza = numAumentosRondas * 2; // Total de puntos añadidos a cada pieza (2 lados * num rondas)
            
            // Puntos finales de las piezas antes de añadir los puntos de la sisa.
            const puntosMangaFinal_PreSisa = Math.round(pManga + puntosAumentadosPorPieza); 
            const puntosEspaldaFinal_PreSisa = Math.round(pEspalda + puntosAumentadosPorPieza);
            const puntosDelanteroFinal_PreSisa = Math.round(pDelanteroBase + puntosAumentadosPorPieza);

            const puntosAnadirSisaPtsBase = Math.max(4, Math.round(puntosSisaManga * 0.2)); 
            const puntosAnadirSisaPts = puntosAnadirSisaPtsBase % 2 === 0 ? puntosAnadirSisaPtsBase : puntosAnadirSisaPtsBase + 1; 

            resultado += `<u>2. Indicaciones para tejer los aumentos (Raglán)</u>\n`;
            resultado += `* **Largo de Línea Raglán:** **${raglanCmBase.toFixed(1)} cm** ${hilerasRaglan !== null ? `(**${hilerasRaglan} pasadas**)` : ''}.\n`;
            
            let instruccionRaglanStr = "Aumentar 1 punto a cada lado de los 4 marcadores (8 aumentos total) a lo largo de los **" + raglanCmBase.toFixed(1) + " cm**.";
            if (densidadH) {
                 instruccionRaglanStr = `Aumentar 1 punto a cada lado de los 4 marcadores (8 aumentos total) cada **2 pasadas** hasta completar **${hilerasRaglan} pasadas**.\n`;
                 instruccionRaglanStr += `<p style="font-size:0.9em; padding-left: 20px;">- Esto añade **${puntosAumentadosPorPieza} puntos** a cada una de las 4 piezas (Manga/Delantero/Espalda).</p>`;
            }
            resultado += `* **Indicaciones para los Aumentos:** ${instruccionRaglanStr}\n`;
            resultado += `* **Puntos a Añadir en la Sisa:** Al separar las mangas, añadir **${puntosAnadirSisaPts} puntos** (montados o recogidos) bajo cada sisa. \n\n`;
            
            
            // 3. INSTRUCCIONES DE MANGA Y CUERPO (MODIFICADO Y DETALLADO)
            
            // CÁLCULOS PARA EL CUERPO Y LA MANGA
            const largoMangaCm = medidas.LM; 
            const largoMangaRestanteH = densidadH ? Math.round(largoMangaCm * densidadH) : null;
            const finalLargoMangaCm = largoMangaCm > 0 ? largoMangaCm.toFixed(1) : (0.0).toFixed(1);
            
            const largoCuerpoCm = medidas.LT - medidas.PSisa; 
            const largoCuerpoRestanteH = densidadH ? Math.round(largoCuerpoCm * densidadH) : null;
            const finalLargoCuerpoCm = largoCuerpoCm > 0 ? largoCuerpoCm.toFixed(1) : (0.0).toFixed(1);
            
            const puntosMangaConSisa = puntosMangaFinal_PreSisa + puntosAnadirSisaPts;
            const puntosPuño = Math.round(medidas['C Puño'] * densidadP);

            // Puntos finales que quedan en la aguja después de unir.
            const puntosCuerpoEspaldaFinal = puntosEspaldaFinal_PreSisa;
            const puntosCuerpoDelanteroFinal = puntosDelanteroFinal_PreSisa;
            const puntosTotalCuerpoFinal = puntosCuerpoEspaldaFinal + puntosCuerpoDelanteroFinal + (puntosAnadirSisaPts * 2);
            
            resultado += `<u>3. Acabado el raglán, separamos las piezas asi:</u>\n`;
            
            // --- 3.1. MANGAS (Instrucción revisada) ---
            resultado += `\n<u>3.1. Mangas (Tejer dos iguales)</u>\n`;
            resultado += `* ** Dejar el Cuerpo en espera. Poner los **${puntosMangaFinal_PreSisa} puntos** de la manga a una aguja de trabajo.\n`;
            
            // Clarificación para añadir puntos bajo manga
            resultado += `* **Puntos Bajo Manga:** Recoger o montar los **${puntosAnadirSisaPts} puntos** bajo la sisa (Esto hace  mas comoda la prenda en la zona de la sisa). Tendrá un total de **${puntosMangaConSisa} puntos**.\n`;

            if (puntosAnadirSisaPts % 2 === 0 && puntosAnadirSisaPts > 0) {
                const mitadPuntosSisa = puntosAnadirSisaPts / 2;
                resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Nota (Agujas rectas):** Si teje la manga en plano (con costura), debe dividir los **${puntosAnadirSisaPts} puntos** de la sisa en dos: **${mitadPuntosSisa} puntos** antes de la manga y **${mitadPuntosSisa} puntos** después de la manga.</p>\n`;
            }

            resultado += `* **Disminuciones de Manga:**\n`;
            
            const disminucionesTotales = puntosMangaConSisa - puntosPuño;
            const vecesDisminuir = Math.floor(disminucionesTotales / 2);
            
            if (vecesDisminuir > 0) {
                const largoMangaRemanente = (largoMangaCm - tiraCuelloCm); // Se descuenta el cuello Raglán del largo total
                const frecuenciaCm = largoMangaRemanente / vecesDisminuir;
                let frecuenciaStr = `cada **${frecuenciaCm.toFixed(1)} cm**`;
                
                if (densidadH) {
                    const largoMangaRestanteHAjustado = largoMangaRestanteH - tiraCuelloPts;
                    const frecuenciaPasadas = Math.round(largoMangaRestanteHAjustado / vecesDisminuir);
                    frecuenciaStr = `cada **${frecuenciaPasadas} pasadas** (aprox. **${frecuenciaCm.toFixed(1)} cm**)`
                }
                
                resultado += `<p style="padding-left: 20px;">- Disminuir **1 punto a cada lado** **${vecesDisminuir} veces** **${frecuenciaStr}**.\n`;
                resultado += `- Esto dejará **${puntosPuño} puntos** en el puño (**${medidas['C Puño'].toFixed(1)} cm**).</p>\n`;
            } else {
                resultado += `<p style="padding-left: 20px;">- No se requieren disminuciones. Tejer recto hasta el puño.</p>\n`;
            }
            
            resultado += `* **Largo Total de Manga (desde Sisa a Puño):** **${finalLargoMangaCm} cm** ${largoMangaRestanteH !== null ? `(**${largoMangaRestanteH} pasadas**)` : ''}.\n`;


            // --- 3.2. CUERPO (Instrucción revisada) ---
            resultado += `\n<u>3.2. Cuerpo (Espalda y Delantero)</u>\n`;
            
            // LÓGICA JERSEY (Tejer en circular)
            if (tipoPrenda === "JERSEY") {
                const puntosPiezaDelantera = puntosCuerpoDelanteroFinal;
                const puntosPiezaEspalda = puntosCuerpoEspaldaFinal;

                resultado += `* **Tejido en Redondo (Jersey):** Para tejer el Cuerpo en circular y evitar costuras laterales, junte las piezas restantes en la aguja en el siguiente orden:\n`;
                resultado += `<p style="padding-left: 20px;">-  **Delantero** (**${puntosPiezaDelantera} puntos**), **${puntosAnadirSisaPts} puntos** (bajo manga 1), **Espalda** (**${puntosPiezaEspalda} puntos**), **${puntosAnadirSisaPts} puntos** (bajo manga 2).\n`;
                resultado += `- **Puntos Totales:** Continúe tejiendo con un total de **${puntosTotalCuerpoFinal} puntos**.\n`;
                
                if (puntosAnadirSisaPts % 2 === 0 && puntosAnadirSisaPts > 0) {
                     const mitadPuntosSisa = puntosAnadirSisaPts / 2;
                     resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tejido Separado (Plano):** Si prefiere tejer el Delantero y la Espalda por separado, recuerde añadir los **${puntosAnadirSisaPts} puntos** bajo manga divididos en dos: **${mitadPuntosSisa} puntos** al inicio y final de la Espalda y **${mitadPuntosSisa} puntos** al inicio y final del Delantero.</p>\n`;
                } else {
                     resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tejido Separado (Plano):** Si prefiere tejer el Delantero y la Espalda por separado, recuerde añadir los **${puntosAnadirSisaPts} puntos** bajo manga como puntos de montaje/aumento al inicio y final de la Espalda y al inicio y final del Delantero.</p>\n`;
                }
            
            // LÓGICA CHAQUETA (Tejer en plano)
            } else { // CHAQUETA
                const pDelantero1 = Math.ceil(puntosCuerpoDelanteroFinal/2);
                const pDelantero2 = Math.floor(puntosCuerpoDelanteroFinal/2);
                const puntosPiezaEspalda = puntosCuerpoEspaldaFinal;
                
                resultado += `* **Tejido en Plano (Chaqueta):** Para tejer el Cuerpo en una sola pieza (evitando costuras laterales), junte las piezas restantes en la aguja en el siguiente orden:\n`;
                resultado += `<p style="padding-left: 20px;">-  **Delantero 1** (**${pDelantero1} puntos**), **${puntosAnadirSisaPts} puntos** (bajo manga 1), **Espalda** (**${puntosPiezaEspalda} puntos**), **${puntosAnadirSisaPts} puntos** (bajo manga 2), **Delantero 2** (**${pDelantero2} puntos**).\n`;
                resultado += `- **Puntos Totales:** Continúe tejiendo con un total de **${puntosTotalCuerpoFinal} puntos**.\n`;
            }

            resultado += `* **Largo del Cuerpo (desde Sisa a Bajo):** Continuar recto **${finalLargoCuerpoCm} cm** ${largoCuerpoRestanteH !== null ? `(**${largoCuerpoRestanteH} pasadas**)` : ''}.\n`;

        } else {
            // Validación final si los campos no estaban llenos.
            if (tipoPrenda !== 'CUBRE_PAÑAL' && tipoPrenda !== 'JERSEY' && tipoPrenda !== 'CHAQUETA' && tipoPrenda !== 'GORRO') {
                 resultadoDiv.innerHTML = '<p class="error">Error: Por favor, complete todos los campos obligatorios: **Puntos de Muestra** y selección de **Talla** y **Tipo de Prenda**.</p>';
                 return;
            }
        }
    }
    
    // AÑADIR NOTA DE CROCHET/GANCHILLO (MODIFICACIÓN FINAL)
    resultado += `<hr style="margin-top: 25px; border-color: #d6a4a4;">`;
    resultado += `<p style="font-size:0.9em; text-align: center;">💡 **Nota:** Esta calculadora es válida tanto para **tejido en dos agujas** (donde 'puntos' = puntos y 'pasadas' = hileras) como para **Ganchillo/Crochet** (donde 'puntos' = cadenetas y 'pasadas' = vueltas). Solo tiene que sustituir la terminología.</p>`;

    resultadoDiv.innerHTML = resultado.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}
