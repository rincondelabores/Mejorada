// ====================================================================
// 1. DATOS Y MEDIDAS ANTROPOMÉTRICAS (Adulto CORREGIDO y CONSOLIDADO)
// ====================================================================

const MEDIDAS_ANTROPOMETRICAS = {
    // Tallas de Bebé (Se mantienen los datos anteriores)
    '00 (Prematuro)': { CP: 37.0, CC: 20.0, CA: 12.0, 'C Puño': 11.0, LT: 20.0, LM: 10.0, PSisa: 9.0, AE: 14.0, CED: 3.0 },
    '0 meses': { CP: 39.0, CC: 21.0, CA: 13.0, 'C Puño': 12.0, LT: 22.0, LM: 12.0, PSisa: 10.0, AE: 16.0, CED: 3.5 },
    '1-3 meses': { CP: 40.0, CC: 22.0, CA: 14.0, 'C Puño': 12.0, LT: 23.0, LM: 14.0, PSisa: 11.0, AE: 18.0, CED: 4.0 },
    '3-6 meses': { CP: 44.0, CC: 23.0, CA: 16.0, 'C Puño': 12.5, LT: 24.0, LM: 16.0, PSisa: 12.0, AE: 20.0, CED: 4.5 },
    '6-9 meses': { CP: 46.0, CC: 24.0, CA: 16.0, 'C Puño': 13.0, LT: 25.0, LM: 18.0, PSisa: 13.0, AE: 21.0, CED: 5.0 },
    '9-12 meses': { CP: 48.0, CC: 25.0, CA: 17.0, 'C Puño': 13.0, LT: 26.0, LM: 20.0, PSisa: 14.0, AE: 22.0, CED: 5.0 },
    '12-15 meses': { CP: 50.0, CC: 26.0, CA: 18.0, 'C Puño': 14.0, LT: 28.0, LM: 22.0, PSisa: 15.0, AE: 24.0, CED: 5.5 },
    '15-18 meses': { CP: 52.0, CC: 27.0, CA: 19.0, 'C Puño': 14.0, LT: 30.0, LM: 24.0, PSisa: 16.0, AE: 25.0, CED: 5.5 },
    '18-24 meses': { CP: 54.0, CC: 28.0, CA: 20.0, 'C Puño': 15.0, LT: 32.0, LM: 26.0, PSisa: 17.0, AE: 26.0, CED: 6.0 },
    
    // Tallas de Niños (Se mantienen los datos anteriores)
    '3 años': { CP: 58.0, CC: 29.0, CA: 22.0, 'C Puño': 16.0, LT: 36.0, LM: 28.0, PSisa: 18.0, AE: 29.0, CED: 6.5 },
    '4 años': { CP: 60.0, CC: 30.0, CA: 24.0, 'C Puño': 16.0, LT: 38.0, LM: 30.0, PSisa: 19.0, AE: 30.0, CED: 6.5 },
    '6 años': { CP: 64.0, CC: 32.0, CA: 26.0, 'C Puño': 17.0, LT: 40.0, LM: 34.0, PSisa: 20.0, AE: 32.0, CED: 7.0 },
    '8 años': { CP: 68.0, CC: 34.0, CA: 28.0, 'C Puño': 17.0, LT: 44.0, LM: 38.0, PSisa: 21.0, AE: 34.0, CED: 7.5 },
    '10 años': { CP: 72.0, CC: 36.0, CA: 30.0, 'C Puño': 18.0, LT: 48.0, LM: 42.0, PSisa: 22.0, AE: 36.0, CED: 8.0 },

    // Tallas de Adulto (Se mantienen los datos anteriores)
    '36': { CP: 86.0, CC: 43.0, CA: 30.0, 'C Puño': 20.0, LT: 58.0, LM: 58.0, PSisa: 23.0, AE: 38.0, CED: 8.0 },
    '38': { CP: 90.0, CC: 45.0, CA: 31.0, 'C Puño': 21.0, LT: 58.0, LM: 59.0, PSisa: 24.0, AE: 40.0, CED: 8.0 },
    '40': { CP: 94.0, CC: 47.0, CA: 32.0, 'C Puño': 22.0, LT: 60.0, LM: 60.0, PSisa: 25.0, AE: 42.0, CED: 8.5 },
    '42': { CP: 98.0, CC: 49.0, CA: 33.0, 'C Puño': 23.0, LT: 60.0, LM: 60.0, PSisa: 26.0, AE: 44.0, CED: 8.5 },
    '44': { CP: 102.0, CC: 51.0, CA: 34.0, 'C Puño': 24.0, LT: 62.0, LM: 61.0, PSisa: 27.0, AE: 46.0, CED: 9.0 },
    '46': { CP: 106.0, CC: 53.0, CA: 35.0, 'C Puño': 25.0, LT: 62.0, LM: 61.0, PSisa: 28.0, AE: 48.0, CED: 9.0 },
    '48': { CP: 110.0, CC: 55.0, CA: 36.0, 'C Puño': 26.0, LT: 64.0, LM: 62.0, PSisa: 29.0, AE: 50.0, CED: 9.5 },
    '50': { CP: 114.0, CC: 57.0, CA: 37.0, 'C Puño': 27.0, LT: 64.0, LM: 62.0, PSisa: 30.0, AE: 52.0, CED: 9.5 }
};

const MEDIDAS_CUBRE_PAÑAL = {
    // ... (Medidas Cubre Pañal se mantienen) ...
    '0 RN ': { cintura: 36.0, alto_trasero_entrepierna: 12.0, disminuciones: 5, largo_disminuciones: 2.6, alto_entrepierna: 2.0, aumentos: 2, largo_aumentos: 1.1, ancho_final_delantero: 4.0 },
    '1 mes ': { cintura: 38.0, alto_trasero_entrepierna: 13.0, disminuciones: 6, largo_disminuciones: 3.1, alto_entrepierna: 2.0, aumentos: 2, largo_aumentos: 1.1, ancho_final_delantero: 4.0 },
    '3 meses ': { cintura: 40.0, alto_trasero_entrepierna: 14.0, disminuciones: 6, largo_disminuciones: 3.1, alto_entrepierna: 2.0, aumentos: 3, largo_aumentos: 1.6, ancho_final_delantero: 4.0 },
    '6 meses ': { cintura: 42.0, alto_trasero_entrepierna: 15.0, disminuciones: 7, largo_disminuciones: 3.7, alto_entrepierna: 2.0, aumentos: 3, largo_aumentos: 1.6, ancho_final_delantero: 4.0 },
    '9 meses ': { cintura: 44.0, alto_trasero_entrepierna: 16.0, disminuciones: 7, largo_disminuciones: 3.7, alto_entrepierna: 2.5, aumentos: 4, largo_aumentos: 2.1, ancho_final_delantero: 4.0 },
    '12 meses ': { cintura: 46.0, alto_trasero_entrepierna: 17.0, disminuciones: 8, largo_disminuciones: 4.2, alto_entrepierna: 2.5, aumentos: 4, largo_aumentos: 2.1, ancho_final_delantero: 4.0 }
};

// ====================================================================
// 1.2. NUEVAS MEDIDAS PARA GORROS
// ====================================================================
// CC: Contorno de Cabeza / ALT: Altura Total / COR: Coronilla / REC: Tejido Recto / VUE: Vuelta / Borde
const MEDIDAS_GORROS = {
    '0 meses': { CC: 32, ALT: 12, COR: 4, REC: 7, VUE: 2 },
    '1-3 meses': { CC: 35, ALT: 14, COR: 4.5, REC: 9, VUE: 2 },
    '3-6 meses': { CC: 36, ALT: 17, COR: 5, REC: 9.5, VUE: 2 },
    '6m-2 años': { CC: 41, ALT: 19, COR: 6.5, REC: 10.5, VUE: 2.5 },
    'Niños': { CC: 48, ALT: 21, COR: 7, REC: 12, VUE: 3 },
    'Adolescentes': { CC: 52, ALT: 23, COR: 8, REC: 13, VUE: 4 },
    'Adultos': { CC: 54, ALT: 25, COR: 9, REC: 13.5, VUE: 5 }
};


// ====================================================================
// 2. MAPEOS Y UTILIDADES
// ====================================================================

// Mapeo para poblar las tallas (ACTUALIZADO)
const MAPA_MEDIDAS = {
    'Bebé (Prematuro a 24m)': MEDIDAS_ANTROPOMETRICAS,
    'Niños (3 a 10 años)': MEDIDAS_ANTROPOMETRICAS,
    'Adulto (36 a 50)': MEDIDAS_ANTROPOMETRICAS,
    'Cubre Pañal (0 a 12m)': MEDIDAS_CUBRE_PAÑAL,
    'Gorros (0m a Adulto)': MEDIDAS_GORROS // AÑADIDO
};

// Nueva estructura de ORDEN_TALLAS (ACTUALIZADO)
const ORDEN_TALLAS = {
    'Bebé (Prematuro a 24m)': ['00 (Prematuro)', '0 meses', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses', '12-15 meses', '15-18 meses', '18-24 meses'],
    'Niños (3 a 10 años)': ['3 años', '4 años', '6 años', '8 años', '10 años'],
    'Adulto (36 a 50)': ['36', '38', '40', '42', '44', '46', '48', '50'],
    'Cubre Pañal (0 a 12m)': ['0 RN ', '1 mes ', '3 meses ', '6 meses ', '9 meses ', '12 meses '],
    'Gorros (0m a Adulto)': ['0 meses', '1-3 meses', '3-6 meses', '6m-2 años', 'Niños', 'Adolescentes', 'Adultos'] // AÑADIDO
};

// ... (Resto de funciones utilitarias: generarCierresProgresivos, poblarTallas, manejarVisibilidadCampos, se mantienen) ...

function generarCierresProgresivos(puntosCerrar, pasadasRestantes) {
    // ... (Se mantiene la lógica de cierres progresivos) ...
    // Esta función no se llama para el Gorro, pero se mantiene para Jersey/Chaqueta
    
    // Si necesitas esta función completa, por favor, envíame el contenido completo original.
    // Por ahora, asumo que está definida correctamente en el original no mostrado.
}

function poblarTallas() {
    // ... (Se mantiene la lógica de poblarTallas) ...
}

function manejarVisibilidadCampos() {
    // ... (Se mantiene la lógica de manejarVisibilidadCampos) ...
}

// Inicialización de la lógica de eventos
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tipo_prenda').addEventListener('change', poblarTallas);
    document.getElementById('tipo_prenda').addEventListener('change', manejarVisibilidadCampos);
    document.getElementById('talla_categoria').addEventListener('change', poblarTallas);
    // ... (event listeners se mantienen) ...
});


// ====================================================================
// 3. LÓGICA CENTRAL DE CÁLCULO
// ====================================================================

function calcularPatron() {
    const puntosMuestra = parseFloat(document.getElementById('puntos_muestra').value);
    const hilerasMuestra = parseFloat(document.getElementById('hileras_muestra').value);
    const tallaSeleccionada = document.getElementById('talla_seleccionada').value;
    const tipoPrenda = document.getElementById('tipo_prenda').value;
    const metodoTejido = document.getElementById('metodo_tejido').value;
    const cmDeseados = parseFloat(document.getElementById('cm_deseados').value);
    
    const resultadoDiv = document.getElementById('resultado');

    // 1. Validaciones
    if (!puntosMuestra || puntosMuestra <= 0 || !tipoPrenda) {
         resultadoDiv.innerHTML = '<p class="error">Error: Por favor, introduce los **Puntos de Muestra** y selecciona el **Tipo de Prenda**.</p>';
        return;
    }
    
    const densidadP = puntosMuestra / 10.0;
    // La densidad H solo se usa si se introduce un valor válido
    const densidadH = (hilerasMuestra && hilerasMuestra > 0) ? hilerasMuestra / 10.0 : null; 
    
    // Lógica para CM_DESEADOS (Se mantiene)
    if (tipoPrenda === 'CM_DESEADOS') {
        if (!cmDeseados || cmDeseados <= 0) {
            resultadoDiv.innerHTML = '<p class="error">Error: Introduce los **Centímetros Deseados**.</p>';
            return;
        }
        const puntos = Math.round(cmDeseados * densidadP);
        const pasadas = densidadH ? Math.round(cmDeseados * densidadH) : ' (No calculadas, faltan Pasadas de Muestra)';
        
        resultadoDiv.innerHTML = `<h4>Cálculo Sencillo (CM a Puntos/Pasadas)</h4>
            <p>Para **${cmDeseados} cm**:</p>
            <ul>
                <li>**Puntos a Montar:** **${puntos} puntos**</li>
                <li>**Pasadas a Tejer:** **${pasadas}**</li>
            </ul>
        `;
        return;
    }

    // El resto de lógica requiere la talla
    if (!tallaSeleccionada) {
         resultadoDiv.innerHTML = '<p class="error">Error: Debes seleccionar una **talla**.</p>';
        return;
    }

    let medidas;
    // Se selecciona el conjunto de medidas correcto
    if (tipoPrenda === 'CUBRE_PAÑAL') {
        medidas = MEDIDAS_CUBRE_PAÑAL[tallaSeleccionada];
    } else if (tipoPrenda === 'GORRO') { 
        medidas = MEDIDAS_GORROS[tallaSeleccionada];
    } else {
        medidas = MEDIDAS_ANTROPOMETRICAS[tallaSeleccionada];
    }

    if (!medidas) {
        resultadoDiv.innerHTML = '<p class="error">Error: No se encontraron medidas para la talla seleccionada.</p>';
        return;
    }
    
    let resultado = '';

    // ... (Lógica ESPECÍFICA PARA CUBRE PAÑAL se mantiene) ...

    // ====================================================================
    // --- LÓGICA ESPECÍFICA PARA GORRO --- (NUEVA FUNCIÓN)
    // ====================================================================
    if (tipoPrenda === 'GORRO') {
        const CC = medidas.CC; // Contorno de Cabeza
        const ALT = medidas.ALT; // Altura Total
        const COR = medidas.COR; // Coronilla
        const REC = medidas.REC; // Tejido Recto
        const VUE = medidas.VUE; // Vuelta / Borde
        
        // Asumiendo una holgura negativa de 4 cm para el ajuste (estándar)
        const HOLGURA_GORRO = -4; 
        const ccAjustadaCm = Math.max(CC + HOLGURA_GORRO, 10); // Mínimo 10 cm para evitar errores
        
        // Puntos necesarios
        const puntosMontar = Math.round(ccAjustadaCm * densidadP);
        const puntosCoronilla = Math.round(COR * densidadP);
        const puntosAMenguar = Math.max(0, puntosMontar - puntosCoronilla); // Puntos a eliminar
        
        // Altura y Hileras de cada sección
        const alturaMenguadoCm = Math.max(0, ALT - REC - VUE); // Altura de la sección de disminuciones
        const hilerasVUE = densidadH ? Math.round(VUE * densidadH) : null;
        const hilerasREC = densidadH ? Math.round(REC * densidadH) : null;
        const hilerasMenguado = densidadH ? Math.round(alturaMenguadoCm * densidadH) : null;
        
        // Cálculos de menguado solo si hay altura de menguado, puntos a menguar y hileras
        let pasadasDisminucion = 0;
        let menguadosPorRonda = 0;
        let frecuenciaMenguadoStr = '';
        
        if (densidadH && alturaMenguadoCm > 0 && puntosAMenguar > 0) {
            // Menguamos solo en las pasadas 'de ida' (cada 2 pasadas)
            pasadasDisminucion = Math.floor(hilerasMenguado / 2); 
            
            if (pasadasDisminucion > 0) {
                // Cuántos menguados hacer en cada pasada de disminución (se redondea hacia arriba)
                menguadosPorRonda = Math.ceil(puntosAMenguar / pasadasDisminucion);
                
                // --- Detalle de distribución de menguados ---
                const totalPuntos = puntosMontar; // Puntos iniciales de la ronda de menguado
                const pEntreMenguadosBase = Math.floor(totalPuntos / menguadosPorRonda);
                const pRestantes = totalPuntos % menguadosPorRonda; 

                let vecesMayor = pRestantes;
                let vecesMenor = menguadosPorRonda - pRestantes;

                if (vecesMayor === 0) {
                    frecuenciaMenguadoStr = `- En esta pasada, haz **1 menguado cada ${pEntreMenguadosBase} puntos** tejidos, repitiendo **${menguadosPorRonda} veces** hasta el final.`;
                } else if (vecesMenor === 0) {
                     frecuenciaMenguadoStr = `- En esta pasada, haz **1 menguado cada ${pEntreMenguadosBase + 1} puntos** tejidos, repitiendo **${menguadosPorRonda} veces** hasta el final.`;
                } else {
                    frecuenciaMenguadoStr = `En cada pasada de disminución, mengua **${menguadosPorRonda} puntos** distribuidos de la siguiente forma:\n`;
                    frecuenciaMenguadoStr += `  - Repite **${vecesMayor} veces**: Teje **${pEntreMenguadosBase + 1} puntos** y haz **1 menguado**.\n`;
                    frecuenciaMenguadoStr += `  - Repite **${vecesMenor} veces**: Teje **${pEntreMenguadosBase} puntos** y haz **1 menguado**.\n`;
                    frecuenciaMenguadoStr += `  (Nota: Los puntos a menguar en cada pasada varían ligeramente para repartir ${puntosAMenguar} puntos)`;
                }
                
            } else {
                frecuenciaMenguadoStr = 'No hay suficientes pasadas de disminución para repartir. Debes menguar los **' + puntosAMenguar + '** puntos en las pasadas que te quedan, asegurándote de terminar con **' + puntosCoronilla + '** puntos.';
            }
        } else if (puntosAMenguar > 0 && alturaMenguadoCm > 0) {
            frecuenciaMenguadoStr = 'No tienes la muestra de pasadas. Debes menguar los **' + puntosAMenguar + '** puntos de forma gradual y uniforme a lo largo de los **' + alturaMenguadoCm.toFixed(1) + '** cm, asegurándote de que al final te queden **' + puntosCoronilla + '** puntos.';
        } else if (puntosAMenguar === 0 && puntosMontar > 0) {
             frecuenciaMenguadoStr = 'Solo tienes que cerrar todos los puntos en el último cm, o continuar recto y cerrarlos.';
        }
        
        // =================================== OUTPUT GORRO ===================================
        resultado += `<h4>🧶 Instrucciones para Gorro - Talla ${tallaSeleccionada}</h4>\n`;
        resultado += `<p>El contorno de cabeza es de **${CC} cm**. Para que el gorro ajuste bien, el cálculo se basa en un contorno ajustado de **${ccAjustadaCm.toFixed(1)} cm** (**${puntosMontar} puntos**).</p>\n`;
        resultado += `<p>La altura total que **debes** alcanzar es de **${ALT} cm**.</p>\n`;
        
        resultado += `\n<u>Manos a la obra! (Tejido desde el borde hacia la coronilla)</u>\n`;
        
        // 1. Vuelta / Borde
        resultado += `* **Monta los:** **${puntosMontar} puntos**.\n`;
        resultado += `* **Borde/Vuelta (Opcional):** Si quieres añadir un borde o una vuelta de **${VUE.toFixed(1)} cm**, debes tejer **${VUE.toFixed(1)} cm** ${hilerasVUE !== null ? `(**${hilerasVUE} pasadas**)` : ''} en punto elástico o el que prefieras. Si lo tejes, estas pasadas se añaden al inicio de tu gorro. \n`;
        
        // 2. Tejido Recto
        resultado += `* **Tramo Recto (REC):** **Continúa tejiendo** recto el punto principal durante **${REC.toFixed(1)} cm** ${hilerasREC !== null ? `(**${hilerasREC} pasadas**)` : ''}.\n`;
        
        // 3. Coronilla (Menguados)
        resultado += `\n<u>Indicaciones para la Coronilla (Menguados)</u>\n`;
        resultado += `* **Puntos a cerrar:** Debes disminuir **${puntosAMenguar} puntos** para que al finalizar te queden **${puntosCoronilla} puntos** (**${COR.toFixed(1)} cm**) en la aguja.\n`;
        resultado += `* **Recorrido:** Los menguados se repartirán a lo largo de **${alturaMenguadoCm.toFixed(1)} cm** ${hilerasMenguado !== null ? `(**${hilerasMenguado} pasadas**)` : ''} que faltan para llegar a la altura total de **${ALT} cm**.\n`;
        
        if (densidadH && pasadasDisminucion > 0) {
             resultado += `* **Ritmo de Menguado:** **Mengua** en un total de **${pasadasDisminucion} pasadas** (una disminución cada dos pasadas):\n`;
             resultado += `<div style="padding-left: 20px;">${frecuenciaMenguadoStr.replace(/\n/g, '<br>')}</div>`;
        } else if (puntosAMenguar > 0 && alturaMenguadoCm > 0) {
             resultado += `<p style="font-weight: bold;">* **Ritmo de Menguado (Sugerencia):** ${frecuenciaMenguadoStr}</p>\n`;
        }
        
        // 4. Cierre y Acabado (Instrucciones finales)
        resultado += `\n<u>4. Cierre y Acabado Final</u>\n`;
        resultado += `* **Corte de Lana:** **Corta la lana** dejando una hebra suficientemente larga para coser todo el lateral del gorro. \n`;
        resultado += `* **Cierre Coronilla:** Seguidamente **enhebra** la aguja lanera y **pásala** por el interior de los **${puntosCoronilla} puntos** restantes. **Tira** de la lana y **cierra** la parte de arriba de la coronilla. Debes pasar la hebra una o dos veces para asegurarte que no se escapen los puntos.\n`;
        resultado += `* **Costura:** **Continúa** cosiendo el lateral hasta el borde del gorro. ¡Y ya estará listo!\n`;
        resultado += `* **Detalle:** Si quieres, **puedes añadirle** un pompón.\n`;
        
    } else {
        // ... (Lógica para JERSEY, CHAQUETA o CUBRE_PAÑAL se mantiene) ...
    }
    
    // AÑADIR NOTA DE CROCHET/GANCHILLO (MODIFICACIÓN FINAL)
    resultado += `<hr style="margin-top: 25px; border-color: #d6a4a4;">`;
    resultado += `<p style="font-size:0.9em; text-align: center;">💡 **Nota:** Esta calculadora es válida tanto para **Tejido en Dos Agujas** (donde 'puntos' = puntos y 'pasadas' = hileras) como para **Ganchillo/Crochet** (donde 'puntos' = cadenetas y 'pasadas' = vueltas). Solo tienes que sustituir la terminología.</p>`;
    
    // Formatear resultado
    resultadoDiv.innerHTML = resultado.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}
