// ====================================================================
// 1. DATOS Y MEDIDAS ANTROPOMÉTRICAS (Igual que antes)
// ====================================================================

const MEDIDAS_ANTROPOMETRICAS = {
    // Tallas de Bebé (Se añade CCa - Contorno de Cabeza)
    '00 (Prematuro)': { CP: 37.0, CC: 20.0, CA: 11.0, 'C Puño': 11.0, LT: 20.0, LM: 10.0, PSisa: 7.0, AE: 14.0, CED: 3.0, CCa: 32.0 },
    '0 meses': { CP: 38.0, CC: 20.0, CA: 12.0, 'C Puño': 11.0, LT: 22.0, LM: 12.0, PSisa: 8.0, AE: 16.0, CED: 3.5, CCa: 33.0 },
    '1-3 meses': { CP: 40.0, CC: 21.0, CA: 13.0, 'C Puño': 11.0, LT: 23.0, LM: 14.0, PSisa: 8.75, AE: 18.0, CED: 4.0, CCa: 35.0 },
    '3-6 meses': { CP: 42.0, CC: 22.0, CA: 14.0, 'C Puño': 12.0, LT: 24.0, LM: 16.0, PSisa: 9.0, AE: 20.0, CED: 4.5, CCa: 37.0 },
    '6-9 meses': { CP: 44.0, CC: 23.0, CA: 15.0, 'C Puño': 12.0, LT: 26.0, LM: 18.0, PSisa: 9.5, AE: 22.0, CED: 5.0, CCa: 40.0 },
    '9-12 meses': { CP: 46.0, CC: 24.0, CA: 16.0, 'C Puño': 12.5, LT: 28.0, LM: 20.0, PSisa: 10.0, AE: 24.0, CED: 5.5, CCa: 42.0 },
    '12-15 meses': { CP: 48.0, CC: 25.0, CA: 16.0, 'C Puño': 13.0, LT: 30.0, LM: 22.0, PSisa: 10.5, AE: 26.0, CED: 6.0, CCa: 43.0 },
    '15-18 meses': { CP: 49.0, CC: 25.0, CA: 17.0, 'C Puño': 13.5, LT: 32.0, LM: 25.0, PSisa: 11.0, AE: 28.0, CED: 6.5, CCa: 44.0 },
    '18-24 meses': { CP: 50.0, CC: 26.0, CA: 18.0, 'C Puño': 14.0, LT: 34.0, LM: 27.0, PSisa: 11.5, AE: 30.0, CED: 7.0, CCa: 45.0 },

    // Tallas de Niños (Se añade CCa)
    '3 años': { CP: 56.0, CC: 26.5, CA: 19, 'C Puño': 15.5, LT: 36.0, LM: 28.5, PSisa: 13.0, AE: 31.0, CED: 7.3, CCa: 46.0 }, 
    '4 años': { CP: 57.0, CC: 27.0, CA: 20.0, 'C Puño': 16.0, LT: 38.0, LM: 32.0, PSisa: 14.0, AE: 32.0, CED: 7.5, CCa: 48.0 },
    '6 años': { CP: 60.0, CC: 28.0, CA: 24.0, 'C Puño': 16.5, LT: 42.0, LM: 35.5, PSisa: 15.0, AE: 34.0, CED: 8.0, CCa: 59.0 },
    '8 años': { CP: 64.0, CC: 29.0, CA: 24.0, 'C Puño': 17.0, LT: 47.0, LM: 39.0, PSisa: 16.0, AE: 36.0, CED: 8.5, CCa: 50.0 },
    '10 años': { CP: 68.0, CC: 30.0, CA: 25.0, 'C Puño':18.0, LT: 50.0, LM: 43.0, PSisa: 17.0, AE: 38.0, CED: 9.0, CCa: 52.0 },
    
    // Tallas de Mujer (Adulto) (Se añade CCa)
    '36': { CP: 81.0, CC: 35.0, CA: 30.0, 'C Puño': 19.3, LT: 58.0, LM: 47.0, PSisa: 18.0, AE: 35.0, CED: 11.0, CCa: 54.0 }, 
    '38': { CP: 86.0, CC: 35.0, CA: 32.0, 'C Puño': 19.5, LT: 60.0, LM: 48.0, PSisa: 19.0, AE: 36.0, CED: 11.5, CCa: 54.5 }, 
    '40': { CP: 92.0, CC: 35.0, CA: 33.0, 'C Puño': 20.6, LT: 61.0, LM: 48.5, PSisa: 20.0, AE: 36.8, CED: 12.0, CCa: 54.0 }, 
    '42': { CP: 100.0, CC: 36.0, CA: 35.0, 'C Puño': 20.8, LT: 62.0, LM: 49.0, PSisa: 21.0, AE: 37.6, CED: 12.5, CCa: 55.5 }, 
    '44': { CP: 104.0, CC: 36.0, CA: 37.0, 'C Puño': 21.5, LT: 63.0, LM: 50.0, PSisa: 22.0, AE: 38.6, CED: 13.0, CCa: 55.0 }, 
    '46': { CP: 108.0, CC: 37.0, CA: 38.0, 'C Puño': 22.2, LT: 64.0, LM: 51.0, PSisa: 23.0, AE: 39.6, CED: 13.5, CCa: 56.0 }, 
    '48': { CP: 112.0, CC: 37.0, CA: 39.0, 'C Puño': 23.4, LT: 66.0, LM: 52.0, PSisa: 24.0, AE: 40.6, CED: 14.0, CCa: 56.0 }, 
    '50': { CP: 116.0, CC: 38.0, CA: 40.0, 'C Puño': 23.6, LT: 68.0, LM: 54.0, PSisa: 25.0, AE: 41.6, CED: 14.5, CCa: 57.0 } 
};


// ====================================================================
// 1.1. MEDIDAS PARA CUBRE PAÑAL (C/P) (Igual que antes)
// ====================================================================
const MEDIDAS_CUBRE_PAÑAL = {
    '0 RN ': { CC: 38, AL: 10, EP: 7, TR: 1, LCD: 1 },
    '1 mes ': { CC: 40, AL: 11, EP: 7, TR: 1.5, LCD: 1.5 },
    '3 meses ': { CC: 42, AL: 11, EP: 8, TR: 2, LCD: 2 }, 
    '6 meses ': { CC: 44, AL: 12, EP: 8, TR: 2, LCD: 2 }, 
    '9 meses ': { CC: 46, AL: 12, EP: 9, TR: 2.5, LCD: 3 }, 
    '12 meses ': { CC: 48, AL: 13, EP: 10, TR: 2.5, LCD: 3 } 
};

// ====================================================================
// 1.2. ESTRUCTURAS DE TALLAS (Actualizado)
// ====================================================================
const ORDEN_TALLAS = {
    'BEBE': ['00 (Prematuro)', '0 meses', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses', '12-15 meses', '15-18 meses', '18-24 meses'],
    'NIÑO': ['3 años', '4 años', '6 años', '8 años', '10 años'],
    'ADULTO': ['36', '38', '40', '42', '44', '46', '48', '50'],
    'CUBRE_PAÑAL': ['0 RN ', '1 mes ', '3 meses ', '6 meses ', '9 meses ', '12 meses ']
};

const FUENTE_MEDIDAS = {
    'BEBE': MEDIDAS_ANTROPOMETRICAS,
    'NIÑO': MEDIDAS_ANTROPOMETRICAS,
    'ADULTO': MEDIDAS_ANTROPOMETRICAS,
    'CUBRE_PAÑAL': MEDIDAS_CUBRE_PAÑAL
};


// ====================================================================
// 2. NUEVA LÓGICA DE INTERFAZ (UI)
// ====================================================================

// Al cargar la página, se oculta todo menos el paso 1
document.addEventListener('DOMContentLoaded', () => {
    manejarVisibilidadCampos(null); // Oculta todo
});

function seleccionarProyecto(tipo) {
    // 1. Guardar el valor
    document.getElementById('tipo_prenda').value = tipo;

    // 2. Actualizar el estado visual de los botones
    document.querySelectorAll('.project-button').forEach(btn => {
        btn.classList.remove('active');
    });
    // CORRECCIÓN DE ERROR ANTERIOR: IDs ahora coinciden (ej. btn_cubre_pañal)
    document.getElementById(`btn_${tipo.toLowerCase()}`).classList.add('active');

    // 3. Mostrar los campos relevantes
    manejarVisibilidadCampos(tipo);
}

function manejarVisibilidadCampos(tipo) {
    // Ocultar todos los grupos de detalles
    document.getElementById('paso_detalles').style.display = 'block';
    document.getElementById('group_talla_categoria').style.display = 'none';
    document.getElementById('group_talla_especifica').style.display = 'none';
    document.getElementById('group_metodo').style.display = 'none';
    document.getElementById('group_cm_deseados').style.display = 'none';

    if (tipo === 'JERSEY' || tipo === 'CHAQUETA') {
        document.getElementById('group_talla_categoria').style.display = 'block';
        document.getElementById('group_talla_especifica').style.display = 'block';
        document.getElementById('group_metodo').style.display = 'block';
        // Poblar tallas y métodos (se llama desde el HTML con onchange)
        poblarTallas();
        
    } else if (tipo === 'CUBRE_PAÑAL') {
        document.getElementById('group_talla_categoria').style.display = 'none'; // Oculta el selector de BEBE/NIÑO/ADULTO
        document.getElementById('group_talla_especifica').style.display = 'block';
        poblarTallas('CUBRE_PAÑAL'); // Llama a poblar tallas con un parámetro
        
    } else if (tipo === 'CM_DESEADOS') {
        document.getElementById('group_cm_deseados').style.display = 'block';
        
    } else {
        // Estado inicial (nada seleccionado)
        document.getElementById('paso_detalles').style.display = 'none';
    }
}

function poblarTallas(categoriaForzada = null) {
    const select = document.getElementById('talla_seleccionada');
    const categoriaTalla = categoriaForzada || document.getElementById('talla_categoria').value;
    
    select.innerHTML = '<option value="">Selecciona una Talla...</option>';

    if (!categoriaTalla) {
        poblarMetodos(); // Limpia los métodos si no hay categoría
        return;
    }

    const tallas = ORDEN_TALLAS[categoriaTalla];
    const medidasSource = FUENTE_MEDIDAS[categoriaTalla];
    
    if (!tallas || !medidasSource) return;

    tallas.forEach(tallaKey => {
        if (medidasSource[tallaKey]) {
            const option = document.createElement('option');
            option.value = tallaKey;
            option.textContent = `Talla ${tallaKey}`;
            select.appendChild(option);
        }
    });

    // Actualizar los métodos de tejido disponibles DESPUÉS de poblar las tallas
    poblarMetodos(categoriaTalla);
}

function poblarMetodos(categoriaTalla) {
    const selectMetodo = document.getElementById('metodo_tejido');
    selectMetodo.innerHTML = ''; // Limpiar opciones

    if (!categoriaTalla) return;

    // Lógica condicional que pediste
    if (categoriaTalla === 'BEBE' || categoriaTalla === 'NIÑO') {
        selectMetodo.innerHTML = `
            <option value="ESCOTE_REDONDO">Desde el Escote (Canesú Redondo)</option>
            <option value="ESCOTE_RAGLAN">Desde el Escote (Raglán)</option>
            <option value="BAJO">Desde el Bajo (Por Piezas)</option>
        `;
    } else if (categoriaTalla === 'ADULTO') {
        selectMetodo.innerHTML = `
            <option value="ESCOTE_REDONDO">Desde el Escote (Canesú Redondo)</option>
            <option value="BAJO">Desde el Bajo (Por Piezas)</option>
        `;
    }
}


// ====================================================================
// 3. LÓGICA CENTRAL DE CÁLCULO (Actualizada)
// ====================================================================

// (Función 'generarCierresProgresivosNuevo' no se usa en Raglán ni Redondo, pero sí en Bottom-Up. Se mantiene igual)
function generarCierresProgresivosNuevo(puntosAFormar) {
    let puntosRestantes = puntosAFormar;
    const cierres = [];
    if (puntosRestantes >= 3) { cierres.push(3); puntosRestantes -= 3; }
    if (puntosRestantes >= 2) { cierres.push(2); puntosRestantes -= 2; }
    while (puntosRestantes > 0) { cierres.push(1); puntosRestantes -= 1; }
    const cierresAgrupados = [];
    if (cierres.length > 0) {
        let actual = cierres[0];
        let contador = 1;
        for (let i = 1; i < cierres.length; i++) {
            if (cierres[i] === actual) {
                contador++;
            } else {
                cierresAgrupados.push(`${actual}p, ${contador} ${contador > 1 ? 'veces' : 'vez'}`); 
                actual = cierres[i];
                contador = 1;
            }
        }
        cierresAgrupados.push(`${actual}p, ${contador} ${contador > 1 ? 'veces' : 'vez'}`);
    }
    return { secuencia: cierresAgrupados, totalDisminuciones: cierres.length };
}

/**
 * Función principal para calcular el patrón de tejido.
 */
function calcularPatron() {
    // 1. OBTENER VALORES
    const puntosMuestra = parseFloat(document.getElementById('puntos_muestra').value);
    const hilerasMuestra = parseFloat(document.getElementById('hileras_muestra').value);
    const tallaSeleccionada = document.getElementById('talla_seleccionada').value;
    const tipoPrenda = document.getElementById('tipo_prenda').value; // CHAQUETA, JERSEY, CUBRE_PAÑAL, CM_DESEADOS
    const metodoTejido = document.getElementById('metodo_tejido').value; // ESCOTE_REDONDO, ESCOTE_RAGLAN, BAJO
    const cmDeseados = parseFloat(document.getElementById('cm_deseados').value);
    
    // CORRECCIÓN: Obtener la categoría de talla correcta
    let categoriaTalla = document.getElementById('talla_categoria').value; // BEBE, NIÑO, ADULTO
    if (tipoPrenda === 'CUBRE_PAÑAL') {
        categoriaTalla = 'CUBRE_PAÑAL'; // Forzar categoría si es cubre pañal
    }
    
    const caidaEscoteInput = document.getElementById('caida_escote_deseada');
    const caidaEscoteDeseadaCm = caidaEscoteInput ? parseFloat(caidaEscoteInput.value) : null;

    const resultadoDiv = document.getElementById('resultado');

    // 2. VALIDACIONES BÁSICAS
    if (isNaN(puntosMuestra) || puntosMuestra <= 0) {
        resultadoDiv.innerHTML = '<p class="error">Error: Debes introducir los **puntos de la muestra** de tensión (en 10 cm).</p>';
        return;
    }
    if (!tipoPrenda) {
        resultadoDiv.innerHTML = '<p class="error">Error: Debes seleccionar un **proyecto**.</p>';
        return;
    }
    
    const densidadP = puntosMuestra / 10.0;
    const densidadH = (hilerasMuestra && hilerasMuestra > 0) ? hilerasMuestra / 10.0 : null; 
    
    // 3. RUTAS DE CÁLCULO
    
    // --- RUTA 1: CM DESEADOS (La más simple) ---
    if (tipoPrenda === 'CM_DESEADOS') {
        if (isNaN(cmDeseados) || cmDeseados <= 0) {
            resultadoDiv.innerHTML = '<p class="error">Error: Debes introducir la cantidad de **cm deseados**.</p>';
            return;
        }
        const puntosTotales = Math.round(cmDeseados * densidadP);
        resultadoDiv.innerHTML = `<h4>🧶 Cálculo de Ancho</h4><p>Los puntos necesarios para un ancho de **${cmDeseados} cm** son: **${puntosTotales} puntos**.</p>`;
        return;
    }

    // El resto de lógica requiere la talla
    if (!tallaSeleccionada) {
         resultadoDiv.innerHTML = '<p class="error">Error: Debes seleccionar una **talla**.</p>';
        return;
    }

    let medidas;
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

    // --- RUTA 2: CUBRE PAÑAL (Intocable) ---
    if (tipoPrenda === 'CUBRE_PAÑAL') {
        
        // ... (INICIO CÓDIGO CUBRE PAÑAL - CAMBIO DE TONO) ...
        
        const CC = medidas.CC; // Contorno de Cintura
        const AL = medidas.AL; // Altura Lateral
        const EP = medidas.EP; // EntrePierna
        const TR = medidas.TR; // Tramo Recto
        const LCD = medidas.LCD; // Línea Cierre Delantero
        
        const puntosMontar = Math.round((CC / 2) * densidadP);
        const puntosEP = Math.round(EP * densidadP);
        const hilerasAL = densidadH ? Math.round(AL * densidadH) : null;
        const hilerasTR = densidadH ? Math.round(TR * densidadH) : null;

        // 2. Línea de Disminuciones (Espalda)
        const menguadosTotales = puntosMontar - puntosEP;
        const menguadosPorLado = Math.round(menguadosTotales / 2);
        
        let hilerasDisminucion = null;
        let cmDisminucion = null;
        if (menguadosPorLado > 0) {
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
             hilerasAumento = aumentosPorLado * 2;
             if (densidadH) {
                 cmAumento = (hilerasAumento / densidadH).toFixed(1);
             }
        }
        
        // 8. Instrucciones de elástico/pasacintas
        let elásticoCm = (CC <= 40) ? 2 : 3;
        
        // =================================== OUTPUT CUBRE PAÑAL ===================================
        resultado += `<h4>🧶 Instrucciones para Cubre Pañal - Talla ${tallaSeleccionada}</h4>\n`;
        resultado += `<p>Se tejerá en una sola pieza desde la espalda hasta el delantero.</p>\n`;

         resultado += `\n<u>4. Consejos de Terminación</u>\n`;
        resultado += `* **Cinturilla:** En la cintura te sugerimos tejer  **${elásticoCm} cm** ** en punto elástico** o añadir una vuelta de **pasacintas** (*2p juntos al derecho, hebra*, repetir de *a* toda la pasada) cuando estés tejiendo en la mitad de esos cm.  El ancho es orientativo, puedes hacerlo más ancho o estrecho, según te guste.\n`;
        resultado += `* **Bordes:** Para un borde rematado al mismo tiempo que tejes la pierna, haces los aumentos y disminuciones a 3 o 4 puntos de la orilla. Otra opción es recoger después los puntos del borde de las piernas y tejer una tira de terminación en el punto que te guste.\n`;

        
        resultado += `<u>¡Manos a la obra!:</u>\n`;
        resultado += `* **Comienzas montando:** **${puntosMontar} puntos** (corresponde a ${CC / 2} cm de cintura).\n`;
       
        resultado += `<u>1. Espalda (Cintura a Entrepierna)</u>\n`;
        resultado += `* **Tejes recto **${AL} cm** ${hilerasAL !== null ? `(**${hilerasAL} pasadas**)` : ''}.\n`;
        
        resultado += `* **Ahora has llegado al muslo y hay que empezar a disminuir:** Disminuyes **${menguadosPorLado} veces 1 punto a cada lado.**\n`;
        if (densidadH && cmDisminucion) {
             resultado += `<p style="padding-left: 20px;">- Haces: **1 disminución a cada lado cada 2 pasadas**.\n`;
             resultado += `- La linea de disminuciones medirá **${cmDisminucion} cm** (**${hilerasDisminucion} pasadas**). (Quedarán en la aguja **${puntosEP} puntos**).</p>\n`;
        } else if (menguadosPorLado > 0) {
             resultado += `<p style="padding-left: 20px;">- Haces: **1 disminución a cada lado cada 2 pasadas** hasta tener **${puntosEP} puntos** en la aguja.</p>\n`;
        }
        
        resultado += `* **Has llegado a la entrepierna, ahora hay que hacer unas pasadas rectas antes de empezar el delantero:** Tejes recto los **${puntosEP} puntos** durante **${TR} cm** ${hilerasTR !== null ? `(**${hilerasTR} pasadas**)` : ''}.\n\n`;

        resultado += `<u>2. Delantero (Entrepierna a Cintura)</u>\n`;
        
        resultado += `* **Ahora tienes que ** aumentar **${aumentosPorLado} veces 1 punto a cada lado.**\n`;
        if (densidadH && cmAumento) {
             resultado += `<p style="padding-left: 20px;">- Haces: **1 aumento a cada lado cada 2 pasadas**.\n`;
             resultado += `- La linea de aumentos medirá **${cmAumento} cm** (**${hilerasAumento} pasadas**). (Llegará a **${puntosObjetivoDelantero} puntos**).</p>\n`;
        } else if (aumentosPorLado > 0) {
             resultado += `<p style="padding-left: 20px;">- Haces: **1 aumento a cada lado cada 2 pasadas** hasta tener **${puntosObjetivoDelantero} puntos** en la aguja.</p>\n`;
        } else {
             resultado += `<p style="padding-left: 20px;">- No necesitas aumentos en este tramo.</p>\n`;
        }
        
        resultado += `* **Acabados los aumentos **, antes de empezar a tejer las ultimas pasadas para llegar a la cintura tendrás que aumentar de una vez **${puntosLCD} puntos a cada lado**. (Tendrás **${puntosMontar} puntos, los mismos puntos con los que empezaste a tejer**).\n`;
        
        resultado += `* Ahora debes ** continuar tejiendo recto ** **${AL} cm** ${hilerasAL !== null ? `(**${hilerasAL} pasadas**)` : ''}.\n`;
        
        resultado += `\n<u>3. Acabado</u>\n`;
        resultado += `* ** Cierras los **${puntosMontar} puntos** de la cintura delantera.\n`;
        resultado += `* **Coses ** los laterales.\n`;
        
        // ... (FIN CÓDIGO CUBRE PAÑAL) ...

    } else {
        // --- RUTA 3: JERSEY O CHAQUETA (La lógica compleja) ---
        
        // ******************************************************************
        // INICIO: CÁLCULOS GENERALES (Usados por BAJO, RAGLÁN y REDONDO)
        // ******************************************************************
        
        // ====================================================================
        // 1. Holgura de Cuerpo (MODIFICADO: 10% Bebé/Niño, 6% Adulto)
        // ====================================================================
        let holguraCm;
        if (categoriaTalla === 'BEBE' || categoriaTalla === 'NIÑO') {
            holguraCm = medidas.CP * 0.10; // 10% para Bebé/Niño
        } else {
            holguraCm = medidas.CP * 0.06; // 6% original para Adulto
        }
        const anchoPrendaCm = medidas.CP + holguraCm;
        const cpPts = Math.round(anchoPrendaCm * densidadP); // Puntos de contorno de pecho total
        
        // 2. Tira de Cuello (Dinámica por talla)
        let tiraCuelloCm;
        if (categoriaTalla === 'BEBE') {
            tiraCuelloCm = 1.5;
        } else if (categoriaTalla === 'NIÑO') {
            tiraCuelloCm = 2.0;
        } else if (categoriaTalla === 'ADULTO') {
            tiraCuelloCm = 2.5;
        } else {
            tiraCuelloCm = 2.0; // Valor por defecto
        }
        const tiraCuelloPts = densidadH ? Math.round(tiraCuelloCm * densidadH) : null;
        
        // 3. Raglán / Sisa
        const raglanCmBase = medidas.PSisa; // Raglan = Altura de Sisa (PSisa)
        
        // 4. Tapeta 
        let calculatedTapetaPts = Math.max(3, Math.ceil(tiraCuelloCm * densidadP));
        if (calculatedTapetaPts % 2 === 0) {
            calculatedTapetaPts += 1; // Asegurar que sea impar
        }
        const puntosTapeta = calculatedTapetaPts;

        // ====================================================================
        // 5. Holgura de Sisa (MODIFICADO: 10% Bebé/Niño, 20% Adulto)
        // ====================================================================
        let holguraAxilaCm;
        if (categoriaTalla === 'BEBE' || categoriaTalla === 'NIÑO') {
            holguraAxilaCm = medidas.CA * 0.10; // 10% para Bebé/Niño
        } else {
            holguraAxilaCm = medidas.CA * 0.20; // 20% para Adulto
        }
        
        // Puntos a añadir bajo la sisa (holgura)
        let puntosAnadirSisaPts = Math.round(holguraAxilaCm * densidadP);
        // Asegurar que sea un número par para simetría, si es mayor que 0
        puntosAnadirSisaPts = (puntosAnadirSisaPts > 0 && puntosAnadirSisaPts % 2 !== 0) ? puntosAnadirSisaPts + 1 : puntosAnadirSisaPts;


        // 6. Ancho de Sisa
        const anchoSisaMangaCm = medidas.CA + holguraAxilaCm; 
        
        // 7. Puntos de Sisa (Objetivo)
        const puntosSisaManga = Math.round(anchoSisaMangaCm * densidadP);
        
        // 8. Variables declaradas
        let ccPts; // Puntos de contorno de cuello
        
        // ******************************************************************
        // FIN: CÁLCULOS GENERALES
        // ******************************************************************

    
        // --- LÓGICA BOTTOM-UP (Del Bajo al Hombro) --- (CAMBIO DE TONO)
        if (metodoTejido === "BAJO") {
            
            // ... (INICIO CÓDIGO BOTTOM-UP - CAMBIO DE TONO) ...
            
            // CÁLCULOS VERTICALES CONDICIONALES A DENSIDADH
            const largoCuerpoCm = medidas.LT - medidas.PSisa;
            const hilerasBajoSisa = densidadH ? Math.round(largoCuerpoCm * densidadH) : null; 
            const hilerasSisaHombro = densidadH ? Math.round(medidas.PSisa * densidadH) : null;
            const hilerasTotalEspalda = (hilerasBajoSisa !== null && hilerasSisaHombro !== null) ? (hilerasBajoSisa + hilerasSisaHombro) : null;
            
            // PUNTOS OBJETIVO BOTTOM-UP
            const puntosEspalda = Math.round(cpPts / 2);
            let puntosTotalDelantero; 
            
            if (tipoPrenda === "CHAQUETA") {
                puntosTotalDelantero = Math.round(cpPts / 4); // Puntos por cada delantero
            } else { // JERSEY
                puntosTotalDelantero = Math.round(cpPts / 2); // Puntos para el delantero único
            }

            // --- CÁLCULO DE CAÍDA DE ESCOTE MODIFICADO ---
            let cedFinalCm = caidaEscoteDeseadaCm || medidas.CED; 
            let cedRealCm;
            if (cedFinalCm > tiraCuelloCm) { // tiraCuelloCm es dinámico
                 cedRealCm = cedFinalCm - tiraCuelloCm;
            } else {
                 cedRealCm = medidas.CED; 
            }
            
            const escoteCmDesdeSisa = medidas.PSisa - cedRealCm;
            const hilerasInicioEscote = densidadH ? Math.round(escoteCmDesdeSisa * densidadH) : null;
            
            // --- LÓGICA DE ESCOTE (30.56% Hombro, 38.88% Escote Central, 30.56% Hombro) ---
            
            // Puntos de referencia para el escote (Espalda para Jersey, Delantero para Chaqueta)
            const puntosReferenciaEscote = (tipoPrenda === "CHAQUETA") ? puntosTotalDelantero : puntosEspalda;

            const puntosHombroBase = Math.round(puntosReferenciaEscote * 0.3056); 
            let puntosEscoteTotal = puntosReferenciaEscote - (puntosHombroBase * 2);
            if (puntosEscoteTotal < 3) {
                puntosEscoteTotal = 3; 
                puntosHombroBase = Math.floor((puntosReferenciaEscote - puntosEscoteTotal) / 2);
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
            
            let cmCurva = 0;
            if (densidadH) {
                 cmCurva = pasadasCurva / densidadH;
            }
            
            const cmRectoAFormar = medidas.PSisa - escoteCmDesdeSisa - cmCurva;
            const cmRectoOutput = cmRectoAFormar > 0 ? cmRectoAFormar.toFixed(1) : (0).toFixed(1);
            
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
            resultado += `* **Ancho Total de la Prenda (Contorno de pecho + Holgura):** **${anchoPrendaCm.toFixed(1)} cm** (**${cpPts} puntos**).\n`;
            if (caidaEscoteDeseadaCm) {
                 resultado += `* **Profundidad de Escote Final Deseada (Tira Incluida):** **${cedFinalCm.toFixed(1)} cm** (El patrón se calcula con una caída de **${cedRealCm.toFixed(1)} cm** para el cuerpo).\n\n`;
            } else {
                 resultado += `* **Caída de Escote:** **${medidas.CED.toFixed(1)} cm**.\n\n`;
            }
            
            // 1. ESPALDA
            resultado += `<u>1. Espalda</u>\n`;
            resultado += `* **Montas:** **${puntosEspalda} puntos**.\n`;
            resultado += `* **Tejes hasta la Sisa:** **${largoCuerpoCm.toFixed(1)} cm** ${hilerasBajoSisa !== null ? `(**${hilerasBajoSisa} pasadas**)` : ''}.\n`; 
            resultado += `* **Continúas tejiendo de Sisa a Hombro (Recto):** **${medidas.PSisa.toFixed(1)} cm** ${hilerasSisaHombro !== null ? `(**${hilerasSisaHombro} pasadas**)` : ''}.\n`; 
            resultado += `* **Total Tejido (De bajo a Hombro):** **${medidas.LT.toFixed(1)} cm** ${hilerasTotalEspalda !== null ? `(**${hilerasTotalEspalda} pasadas**)` : ''}. Cierras todos los puntos al finalizar.\n\n`;

            // 2. DELANTERO(S)
            resultado += `<u>2. Delantero(s)</u>\n`;
            if (tipoPrenda === "JERSEY") {
                resultado += `* **Montas:** **${puntosTotalDelantero} puntos**.\n`;
            } else { // CHAQUETA
                resultado += `* **Montas:** **${puntosTotalDelantero} puntos** (por cada Delantero).\n`;
                // puntosTapeta y tiraCuelloCm son dinámicos
                resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tapeta Opcional:** Te sugerimos añadir **${puntosTapeta} puntos** extra para la tapeta, que serán **${tiraCuelloCm.toFixed(1)} cm** de ancho (puntos impares para ojal).</p>\n`;
            }
            resultado += `* **Tejes hasta la Sisa:** **${largoCuerpoCm.toFixed(1)} cm** ${hilerasBajoSisa !== null ? `(**${hilerasBajoSisa} pasadas**)` : ''} (igual que la espalda).\n`; 
          
            // INSTRUCCIONES DE ESCOTE
            resultado += `<u>Indicaciones para el Escote (Delantero)</u>\n`;
            resultado += `* **1. Tejes el Escote ** a los **${escoteCmDesdeSisa.toFixed(1)} cm** desde el inicio de la sisa. ${hilerasInicioEscote !== null ? `(En la pasada **${hilerasInicioEscote}**).` : ''}\n`;
            
            if (tipoPrenda === "JERSEY") {
                 resultado += `* **2. Cierre Central (Recto):** Cierras los **${puntosEscoteCentral} puntos** centrales. Esto divide el tejido en dos lados.\n`;
                 resultado += `* **3. Curva de Escote (Ambos lados):** Continúas tejiendo y cierras en el borde del escote de la siguiente manera: **${cierresEscote.join(', ')}** (un total de **${puntosAFormarEscotePts} puntos** a cerrar por lado).\n`;
                 resultado += `* **4.  Hombro:** Continúas recto los **${cmRectoOutput} cm** ${hilerasRestantesStr} restantes. Cierras los **${puntosHombro} puntos** restantes por hombro al llegar a la altura total de sisa (**${medidas.PSisa.toFixed(1)} cm** ${hilerasSisaHombro !== null ? `(**${hilerasSisaHombro} pasadas**)` : ''}).\n\n`; 
            } else { // CHAQUETA
                const totalCierreLateral = puntosEscoteCentral + puntosAFormarEscotePts;
                const secuenciaTotal = generarCierresProgresivosNuevo(totalCierreLateral).secuencia;
                
                const puntosCierreInicial = puntosEscoteCentral;
                const puntosCierreInicialConTapeta = puntosCierreInicial + puntosTapeta; // puntosTapeta es dinámico e impar
                
                const avisoTapetaEnCierre = ` (Ten en cuenta que si añadiste la tapeta sugerida de **${puntosTapeta} puntos**, el cierre inicial será de **${puntosCierreInicialConTapeta} puntos** en total).`;
                
                resultado += `* **2. Cierre Central (Escote):** Cierras **${puntosCierreInicial} puntos**${avisoTapetaEnCierre} y luego continúas disminuyendo de la siguiente manera: **${secuenciaTotal.join(', ')}** (un total de **${totalCierreLateral} puntos** a disminuir).\n`;
                resultado += `* **3. Hombro:** Continúas recto y cierras los **${puntosHombro} puntos** restantes en el hombro al llegar a los **${medidas.PSisa.toFixed(1)} cm** de altura total de sisa ${hilerasSisaHombro !== null ? `(**${hilerasSisaHombro} pasadas**)` : ''}.\n\n`; 
            }

            // 3. MANGAS
            resultado += `<u>3. Mangas</u>\n`;
            const puntosPuño = Math.round(medidas['C Puño'] * densidadP);
            // puntosSisaManga (EL OBJETIVO) está calculado arriba en la sección general
            const largoMangaSisaPuñoCm = medidas.LM; 
            const largoMangaH = densidadH ? Math.round(largoMangaSisaPuñoCm * densidadH) : null;
            
            const totalAumentos = puntosSisaManga - puntosPuño;
            const aumentosPorLado = Math.floor(totalAumentos / 2);
            
            resultado += `* **Montas:** **${puntosPuño} p.** (Puño de **${medidas['C Puño'].toFixed(1)} cm**).\n`;
            resultado += `* **Tejes:** **${largoMangaSisaPuñoCm.toFixed(1)} cm** (Largo de Sisa a Puño). ${largoMangaH !== null ? `(**${largoMangaH} pasadas**)` : ''}\n`;
            
            if (aumentosPorLado > 0 && largoMangaSisaPuñoCm > 0) {
                const frecuenciaCm = largoMangaSisaPuñoCm / aumentosPorLado;
                const cmSisaFinal = anchoSisaMangaCm.toFixed(1); 

                let frecuenciaStr = `cada **${frecuenciaCm.toFixed(1)} cm**`;
                if (densidadH && largoMangaH > 0 && aumentosPorLado > 0) {
                    const frecuenciaAumentos = Math.round(largoMangaH / aumentosPorLado);
                     if (frecuenciaAumentos > 0) {
                        frecuenciaStr = `cada **${frecuenciaAumentos} pasadas** (aprox. **${frecuenciaCm.toFixed(1)} cm**)`
                     }
                }
                
                resultado += `* **Aumentos:** Aumentas **1 punto a cada lado** **${aumentosPorLado} veces** con una frecuencia de **${frecuenciaStr}**. Esto lleva la manga a **${puntosSisaManga} puntos** (**${cmSisaFinal} cm** de ancho en la sisa, que incluye **${holguraAxilaCm.toFixed(1)} cm** de holgura).\n\n`;
            } else {
                resultado += `* **Aumentos:** No necesitas aumentos. Tejes recto.\n\n`;
            }

            // ... (FIN CÓDIGO BOTTOM-UP) ...


        // --- LÓGICA TOP-DOWN (RAGLÁN) --- (Solo para Bebés/Niños)
        } else if (metodoTejido === "ESCOTE_RAGLAN") {
            
            // =================================================================================
            // INICIO: BLOQUE TOP-DOWN RAGLÁN (CAMBIO DE TONO)
            // =================================================================================
            
            // 0. VALIDACIÓN DENSIDAD
            if (!densidadH) {
                resultadoDiv.innerHTML = '<p class="error">Error: Para calcular desde el Escote (Raglán) de forma equilibrada, es **imprescindible** que introduzcas el dato de **"Pasadas en 10 cm"**.<br>Esto permite a la calculadora balancear el ancho de la prenda con la profundidad de sisa (Psisa) mínima requerida.</p>';
                return;
            }

            // 1. CÁLCULO ESCOTE
            if (!medidas.CCa || !medidas.CC) {
                resultadoDiv.innerHTML = '<p class="error">Error: La talla seleccionada no tiene las medidas de Contorno de Cabeza (CCa) y/o Contorno de Cuello (CC) definidas para calcular el escote con la fórmula personalizada.</p>';
                return;
            }
            
            const escoteCmDeseado = (medidas.CCa + medidas.CC) / 2 - 2;
            const puntosMontaje = Math.round(escoteCmDeseado * densidadP);
            const puntosBase = puntosMontaje - 4; // 4 puntos de marcadores raglán

            // 2. REPARTO 1/3
            const pBaseTercio = puntosBase / 3;
            let pInicialEspalda = Math.round(pBaseTercio);
            let pInicialDelanteroBase = Math.round(pBaseTercio);
            const pInicialMangasTotal = puntosBase - pInicialEspalda - pInicialDelanteroBase;
            let pInicialManga = Math.floor(pInicialMangasTotal / 2); 
            const sobranteManga = pInicialMangasTotal - (pInicialManga * 2);
            pInicialEspalda += sobranteManga;
            
            let pDelanteroParte1 = 0;
            let pDelanteroParte2 = 0;
            if (tipoPrenda === "CHAQUETA") {
                if (pInicialDelanteroBase % 2 !== 0) {
                    pInicialDelanteroBase--;
                    pInicialEspalda++;
                }
                pDelanteroParte1 = pInicialDelanteroBase / 2;
                pDelanteroParte2 = pInicialDelanteroBase / 2;
            }

            // 3. CÁLCULO HÍBRIDO DE RONDAS (Ancho vs. Sisa)
            
            // 3.1. CÁLCULO POR SISA (Mínimo)
            const hilerasRaglanSisa = Math.round(raglanCmBase * densidadH); 
            const rondasPorSisa = Math.floor(hilerasRaglanSisa / 2); 

            // 3.2. CÁLCULO POR ANCHO (Objetivo)
            const puntosObjetivoEspalda = Math.round(cpPts / 2);
            const puntosObjetivoDelanteroTotal = cpPts - puntosObjetivoEspalda;
            
            const targetEspalda_PreSisa = puntosObjetivoEspalda - puntosAnadirSisaPts;
            const targetDelantero_PreSisa = puntosObjetivoDelanteroTotal - puntosAnadirSisaPts;
            const targetManga_PreSisa = puntosSisaManga - puntosAnadirSisaPts; 

            const diffEspalda = Math.max(0, targetEspalda_PreSisa - pInicialEspalda);
            const diffDelantero = Math.max(0, targetDelantero_PreSisa - pInicialDelanteroBase);
            const diffManga = Math.max(0, targetManga_PreSisa - pInicialManga);

            const rondasParaEspalda = Math.ceil(diffEspalda / 2);
            const rondasParaDelantero = Math.ceil(diffDelantero / 2);
            const rondasParaManga = Math.ceil(diffManga / 2);
            
            const rondasPorAncho = Math.max(rondasParaEspalda, rondasParaDelantero, rondasParaManga);

            // 3.3. LA DECISIÓN (Método Híbrido)
            const numAumentosRondas = Math.max(rondasPorSisa, rondasPorAncho);
            const hilerasRaglan = numAumentosRondas * 2;
            
            let notaMetodo = "";
            if (numAumentosRondas === rondasPorAncho && numAumentosRondas > rondasPorSisa) {
                notaMetodo = `<b>Nota sobre el Cálculo:</b> Para alcanzar el **ancho** deseado de la talla (${rondasPorAncho} rondas), se ha añadido una holgura a la sisa (la sisa mínima requería solo ${rondasPorSisa} rondas). El patrón está equilibrado.`;
            } else if (numAumentosRondas === rondasPorSisa && numAumentosRondas > rondasPorAncho) {
                notaMetodo = `<b>Nota sobre el Cálculo:</b> Para alcanzar la **sisa mínima** de ${raglanCmBase} cm (${rondasPorSisa} rondas), la prenda quedará ligeramente más ancha que el estándar de la talla (el ancho requería solo ${rondasPorAncho} rondas). Esto asegura que la sisa no tire.`;
            } else { // Son iguales
                notaMetodo = `<b>Nota sobre el Cálculo:</b> El patrón está perfectamente equilibrado. Las rondas necesarias para el **ancho** (${rondasPorAncho}) coinciden con las rondas para la **sisa** (${rondasPorSisa}).`;
            }

            // 4. CÁLCULO DE PUNTOS RESULTANTES
            const puntosMangaFinal_PreSisa = pInicialManga + (numAumentosRondas * 2);
            const puntosEspaldaFinal_PreSisa = pInicialEspalda + (numAumentosRondas * 2);
            const puntosDelanteroFinal_PreSisa = pInicialDelanteroBase + (numAumentosRondas * 2);

            const puntosMangaConSisa = puntosMangaFinal_PreSisa + puntosAnadirSisaPts;
            const puntosTotalEspaldaConSisa = puntosEspaldaFinal_PreSisa + puntosAnadirSisaPts;
            const puntosTotalDelanteroConSisa = puntosDelanteroFinal_PreSisa + puntosAnadirSisaPts;

            // CM finales (Resultantes)
            const cmMangaFinal = (puntosMangaConSisa / densidadP).toFixed(1);
            const cmContornoTotal = ((puntosTotalEspaldaConSisa + puntosTotalDelanteroConSisa) / densidadP).toFixed(1);
            const raglanCmResultante = (hilerasRaglan / densidadH).toFixed(1);

            // CM Teóricos (Objetivos)
            const targetAnchoPrendaCm = (anchoPrendaCm).toFixed(1);
            const targetAnchoMangaCm = (anchoSisaMangaCm).toFixed(1); 

            // 5. GENERAR OUTPUT (RAGLÁN)
            resultado += `<h4>🧶 Indicaciones para tejer desde el Escote (Raglán)</h4>\n`;
            resultado += `<p style='background-color: #eef5f8; border: 1px solid #a4c7d6; padding: 10px; border-radius: 4px;'>${notaMetodo}</p>\n`;
            resultado += `\n<u>Medidas</u>\n`;
            resultado += `* **Ancho de espalda/delantero (Talla + Holgura):** ${targetAnchoPrendaCm} cm / **El ancho de la prenda será de:** **${cmContornoTotal} cm**.\n`;
            resultado += `* ** Manga (CA + Holgura):** ${targetAnchoMangaCm} cm / **La manga tejida quedará de:** **${cmMangaFinal} cm de ancha**.\n`;
            resultado += `* **Sisa:** ${raglanCmBase} cm / **La sisa medirá:** **${raglanCmResultante} cm**.\n\n`;

            resultado += `<u>1. Empezamos a tejer por el escote:</u>\n`;
            resultado += `* **Montas:** **${puntosMontaje} puntos** (para un escote de **${escoteCmDeseado.toFixed(1)} cm**).\n`;
            resultado += `* **A continuación:** Tejes **${tiraCuelloPts} pasadas** (**${tiraCuelloCm.toFixed(1)} cm**) para la tira del cuello.\n`;

            let repartoStr;
            if (tipoPrenda === "JERSEY") {
                repartoStr = `**${pInicialEspalda} p** (Espalda), **1 p** (Marcador), **${pInicialManga} p** (Manga), **1 p** (Marcador), **${pInicialDelanteroBase} p** (Delantero), **1 p** (Marcador), **${pInicialManga} p** (Manga), **1 p** (Marcador).`;
            } else { // CHAQUETA
                repartoStr = `**${pDelanteroParte1} p** (Del. 1), **1 p** (Marcador), **${pInicialManga} p** (Manga), **1 p** (Marcador), **${pInicialEspalda} p** (Espalda), **1 p** (Marcador), **${pInicialManga} p** (Manga), **1 p** (Marcador), **${pDelanteroParte2} p** (Del. 2).`;
                resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tapeta Opcional:** Te sugerimos montar **${puntosTapeta} puntos** *adicionales* a cada lado para la tapeta, que serán **${tiraCuelloCm.toFixed(1)} cm** de ancho.</p>\n`;
            }
            resultado += `* **Repartes los puntos:** ${repartoStr}\n\n`;
            
            resultado += `<u>2. Indicaciones para tejer los aumentos (Raglán)</u>\n`;
            resultado += `* Aumentas 1 punto a cada lado de los 4 marcadores (8 aumentos total) cada **2 pasadas**.\n`;
            resultado += `* **Repites** un total de **${numAumentosRondas} veces**.\n`;
            resultado += `<p style="font-size:0.9em; padding-left: 20px;">- (Esto completará un total de **${hilerasRaglan} pasadas** de raglán, logrando la altura de sisa de **${raglanCmResultante} cm**).</p>\n`;
            
            resultado += `* **Puntos al finalizar el raglán (Antes de separar):**\n`;
            resultado += `<p style="font-size:0.9em; padding-left: 20px;">- **Manga:** ${puntosMangaFinal_PreSisa} puntos.\n`;
            resultado += `- **Espalda:** ${puntosEspaldaFinal_PreSisa} puntos.\n`;
            if (tipoPrenda === "CHAQUETA") {
                 resultado += `- **Cada Delantero:** ${puntosDelanteroFinal_PreSisa / 2} puntos (Total: ${puntosDelanteroFinal_PreSisa} p.)</p>\n`;
            } else { // JERSEY
                 resultado += `- **Delantero:** ${puntosDelanteroFinal_PreSisa} puntos.</p>\n`;
            }
            
            // 6. SECCIONES 3.1 y 3.2 (Manga y Cuerpo) - (CAMBIO DE TONO)
            
            const largoMangaCm = medidas.LM; 
            const largoMangaRestanteH = densidadH ? Math.round(largoMangaCm * densidadH) : null;
            const finalLargoMangaCm = largoMangaCm > 0 ? largoMangaCm.toFixed(1) : (0.0).toFixed(1);
            
            const puntosPuño = Math.round(medidas['C Puño'] * densidadP);
            const puntosAnadirSisaPts_Media = Math.round(puntosAnadirSisaPts / 2); // Puntos a cada lado

            const largoCuerpoCm = medidas.LT - medidas.PSisa; 
            const largoCuerpoRestanteH = densidadH ? Math.round(largoCuerpoCm * densidadH) : null;
            const finalLargoCuerpoCm = largoCuerpoCm > 0 ? largoCuerpoCm.toFixed(1) : (0.0).toFixed(1);

            const puntosPiezaDelantera = puntosMangaFinal_PreSisa;
            const puntosPiezaEspalda = puntosEspaldaFinal_PreSisa;

            const puntosObjetivoEspalda_CHK = Math.round(cpPts / 2);
            const puntosObjetivoDelanteroTotal_CHK = cpPts - puntosObjetivoEspalda_CHK;

            resultado += `<u>3. Acabado el raglán, separamos las piezas así:</u>\n`;
            resultado += `<p>Acabado de tejer los aumentos para el raglán, hay que separar las mangas del delantero y de la espalda. Pones en una aguja auxiliar los puntos del delantero y espalda, y ahora vas a tejer las mangas.</p>\n`;
            
            resultado += `\n<u>3.1. Mangas (Tejer dos iguales)</u>\n`;
            resultado += `* **Manga:** Añades **${puntosAnadirSisaPts_Media} puntos** antes y después de los **${puntosMangaFinal_PreSisa} puntos** de la manga.\n`;
            
            if (puntosMangaConSisa !== puntosSisaManga) {
                 resultado += `* Ahora tendrás un total de **${puntosMangaConSisa} puntos**. (El objetivo ideal de la talla era ${puntosSisaManga} p. Esta diferencia de ${puntosMangaConSisa - puntosSisaManga} p. se debe al equilibrio de Sisa/Ancho).\n`;
            } else {
                 resultado += `* Ahora tendrás un total de **${puntosMangaConSisa} puntos** (**${targetAnchoMangaCm} cm**).\n`;
            }

            resultado += `* **Disminuciones para llegar al puño:**\n`;
            
            const disminucionesTotales = puntosMangaConSisa - puntosPuño;
            const vecesDisminuir = Math.floor(disminucionesTotales / 2);
            
            if (vecesDisminuir > 0 && largoMangaCm > 0) {
                const largoMangaParaDisminuir = largoMangaCm > tiraCuelloCm ? largoMangaCm - tiraCuelloCm : largoMangaCm;
                let frecuenciaCm = 0;
                if (vecesDisminuir > 0) { frecuenciaCm = largoMangaParaDisminuir / vecesDisminuir; }
                let freqStr = `(${frecuenciaCm.toFixed(1)} cm aprox)`;
                let frecuenciaPasadasStr = "";
                if (densidadH && largoMangaRestanteH && largoMangaRestanteH > 0 && vecesDisminuir > 0) {
                    const largoMangaRestanteHAjustado = largoMangaRestanteH > tiraCuelloPts ? largoMangaRestanteH - tiraCuelloPts : largoMangaRestanteH;
                     if (largoMangaRestanteHAjustado > 0) {
                        const frecuenciaPasadas = Math.round(largoMangaRestanteHAjustado / vecesDisminuir);
                        frecuenciaPasadasStr = `cada **${Math.max(1, frecuenciaPasadas)} pasadas** ${freqStr}`;
                     } else {
                        frecuenciaPasadasStr = `cada ${freqStr}`;
                     }
                } else {
                    frecuenciaPasadasStr = `cada ${freqStr}`; // Fallback si no hay densidadH
                }
                resultado += `<p style="font-size:0.9em; padding-left: 20px;">- Disminuyes **1 punto a cada lado** ${frecuenciaPasadasStr}, esto lo repites **${vecesDisminuir} veces** hasta conseguir tener en la aguja **${puntosPuño} puntos** (**${medidas['C Puño'].toFixed(1)} cm**).</p>\n`;
            } else {
                 resultado += `<p style="font-size:0.9em; padding-left: 20px;">- No necesitas disminuciones. Tejes recto hasta el puño.</p>\n`;
            }
            resultado += `<p style="font-size:0.9em; padding-left: 20px;">- (Desde la sisa al puño habrás tejido **${finalLargoMangaCm} cm** ${largoMangaRestanteH !== null ? `(${largoMangaRestanteH} pasadas)` : ''}).</p>\n`;
            
            // --- 3.2. CUERPO (RAGLÁN) ---
            resultado += `\n<u>3.2. Cuerpo (Delantero y Espalda)</u>\n`;
            
            if (tipoPrenda === "CHAQUETA") {
                const puntosDelanteroIndividual = puntosPiezaDelantera / 2;
                const puntosTotalDelanteroIndividualConSisa = puntosDelanteroIndividual + puntosAnadirSisaPts_Media;
                const cmTotalDelanteroIndividualConSisa = (puntosTotalDelanteroIndividualConSisa / densidadP).toFixed(1);

                resultado += `* **Ahora vas a tejer los Delanteros (por separado):**\n`;
                resultado += `<p style="padding-left: 20px;">- Coges los **${puntosDelanteroIndividual} puntos** de un delantero. Añades/recoges **${puntosAnadirSisaPts_Media} puntos** del bajo sisa.</p>\n`;
                resultado += `<p style="padding-left: 20px;">- Ahora tendrás en la aguja **${puntosTotalDelanteroIndividualConSisa} puntos** (${cmTotalDelanteroIndividualConSisa} cm). Continúas tejiendo recto durante **${finalLargoCuerpoCm} cm** ${largoCuerpoRestanteH !== null ? `(${largoCuerpoRestanteH} pasadas)` : ''}.</p>\n`;
                resultado += `<p style="padding-left: 20px;">- Tejes el otro delantero de la misma manera.</p>\n`;
                
                 const puntosObjetivoDelanteroIndividual = Math.round(puntosObjetivoDelanteroTotal_CHK / 2);
                 if (puntosTotalDelanteroIndividualConSisa !== puntosObjetivoDelanteroIndividual) {
                     resultado += `<p style="font-size:0.9em; padding-left: 20px;">(Nota: El objetivo de la talla eran ${puntosObjetivoDelanteroIndividual} puntos. La diferencia se debe al equilibrio Sisa/Ancho).</p>\n`;
                 }

            } else { // JERSEY
                resultado += `* **Ahora vas a tejer el delantero:**\n`;
                resultado += `<p style="padding-left: 20px;">- Para ello pones en la aguja los **${puntosPiezaDelantera} puntos** del delantero y, recogiendo de las mangas o añadiéndolos nuevos, **${puntosAnadirSisaPts_Media} puntos** antes y **${puntosAnadirSisaPts_Media} puntos** después de los puntos del delantero.</p>\n`;
                
                const puntosTotalDelanteroConSisaJersey = puntosPiezaDelantera + puntosAnadirSisaPts;
                const cmTotalDelanteroConSisaJersey = (puntosTotalDelanteroConSisaJersey / densidadP).toFixed(1);
                
                resultado += `<p style="padding-left: 20px;">- Ahora tendrás en la aguja **${puntosTotalDelanteroConSisaJersey} puntos** (${cmTotalDelanteroConSisaJersey} cm). Continúas tejiendo recto durante **${finalLargoCuerpoCm} cm** ${largoCuerpoRestanteH !== null ? `(${largoCuerpoRestanteH} pasadas)` : ''}.</p>\n`;
                 if (puntosTotalDelanteroConSisaJersey !== puntosObjetivoDelanteroTotal_CHK) {
                     resultado += `<p style="font-size:0.9em; padding-left: 20px;">(Nota: El objetivo de la talla eran ${puntosObjetivoDelanteroTotal_CHK} puntos. La diferencia de ${puntosTotalDelanteroConSisaJersey - puntosObjetivoDelanteroTotal_CHK} p. se debe al equilibrio Sisa/Ancho).</p>\n`;
                }
            }
            
            if (tipoPrenda === "CHAQUETA" || tipoPrenda === "JERSEY") { // Modificado para incluir Jersey
                resultado += `* **Espalda:**\n`;
                resultado += `<p style="padding-left: 20px;">- Coges los **${puntosPiezaEspalda} puntos** de la espalda y añades/recoges **${puntosAnadirSisaPts_Media} puntos** de cada lado.</p>\n`;
                const puntosTotalEspaldaConSisaCorregido = puntosPiezaEspalda + puntosAnadirSisaPts;
                const cmTotalEspaldaConSisaCorregido = (puntosTotalEspaldaConSisaCorregido / densidadP).toFixed(1);
                resultado += `<p style="padding-left: 20px;">- Tendrás en la aguja **${puntosTotalEspaldaConSisaCorregido} puntos** (${cmTotalEspaldaConSisaCorregido} cm). Tejes recto durante **${finalLargoCuerpoCm} cm** ${largoCuerpoRestanteH !== null ? `(${largoCuerpoRestanteH} pasadas)` : ''}.</p>\n`;
                if (puntosTotalEspaldaConSisaCorregido !== puntosObjetivoEspalda_CHK) {
                    resultado += `<p style="font-size:0.9em; padding-left: 20px;">(Nota: El objetivo de la talla eran ${puntosObjetivoEspalda_CHK} puntos. La diferencia de ${puntosTotalEspaldaConSisaCorregido - puntosObjetivoEspalda_CHK} p. se debe al equilibrio Sisa/Ancho).</p>\n`;
                }
            }
            
            resultado += `<p style="font-size:0.9em; padding-left: 20px; margin-top: 10px;">- Ten en cuenta, como en los puños, que si quieres hacer un acabado con otro punto o elástico, lo empieces antes de llegar a los **${finalLargoCuerpoCm} cm** de largo.</p>\n`;


        // =================================================================================
        // --- NUEVA LÓGICA TOP-DOWN (CANESÚ REDONDO) ---
        // =================================================================================
        } else if (metodoTejido === "ESCOTE_REDONDO") {
            
            // 0. VALIDACIÓN DENSIDAD
            if (!densidadH) {
                resultadoDiv.innerHTML = '<p class="error">Error: Para calcular desde el Escote (Canesú Redondo) de forma equilibrada, es **imprescindible** que introduzcas el dato de **"Pasadas en 10 cm"**.<br>Esto permite a la calculadora distribuir los aumentos a lo largo de la profundidad de sisa (Psisa) correcta.</p>';
                return;
            }

            // 1. CÁLCULO ESCOTE (Fórmula Elena, de momento única)
            if (!medidas.CCa || !medidas.CC) {
                resultadoDiv.innerHTML = '<p class="error">Error: La talla seleccionada no tiene las medidas de Contorno de Cabeza (CCa) y/o Contorno de Cuello (CC) definidas para calcular el escote con la fórmula personalizada.</p>';
                return;
            }
            
            let escoteCmDeseado;
            // De momento, usamos la Lógica A para todos:
            escoteCmDeseado = (medidas.CCa + medidas.CC) / 2 - 2; 
            
            const puntosMontaje = Math.round(escoteCmDeseado * densidadP);

            // 2. OBJETIVOS (Puntos Pre-Sisa)
            const puntosObjetivoEspalda = Math.round(cpPts / 2);
            const puntosObjetivoDelanteroTotal = cpPts - puntosObjetivoEspalda;
            
            const targetEspalda_PreSisa = puntosObjetivoEspalda - puntosAnadirSisaPts;
            const targetDelantero_PreSisa = puntosObjetivoDelanteroTotal - puntosAnadirSisaPts;
            const targetManga_PreSisa = puntosSisaManga - puntosAnadirSisaPts; 

            // Puntos totales que debe tener el círculo ANTES de separar
            const puntosTotalesCanesu = targetEspalda_PreSisa + targetDelantero_PreSisa + (targetManga_PreSisa * 2);
            const puntosTotalesAAumentar = puntosTotalesCanesu - puntosMontaje;

            // =================================================================================
            // INICIO: LÓGICA DE CANESÚ CORREGIDA (DINÁMICA + LÓGICA DE SISA "BUENA")
            // =================================================================================
            
            // 3. CÁLCULO DE RONDAS DE AUMENTOS (LÓGICA DINÁMICA)
            
            // Límite de puntos por ronda para que no haga volantes
            const maxPuntosPorRonda = 35; 
            
            // Número de rondas de aumento necesarias, basado en el límite
            const numRondasAumento = Math.max(1, Math.ceil(puntosTotalesAAumentar / maxPuntosPorRonda));
            
            // Puntos reales a aumentar en cada tanda (recalculado)
            const puntosPorRonda = Math.ceil(puntosTotalesAAumentar / numRondasAumento);
            
            // Pasadas totales de sisa OBJETIVO
            const hilerasSisa = Math.round(raglanCmBase * densidadH); 
            
            // Frecuencia: Cada cuántas pasadas hacemos un bloque (1 aum + X recto)
            const frecuenciaBloque = Math.max(1, Math.floor(hilerasSisa / numRondasAumento)); // (Ej: 60 / 9 = 6)
            
            // Pasadas rectas a tejer DESPUÉS de la pasada de aumento
            const pasadasRectas = frecuenciaBloque - 1; // (Ej: 6 - 1 = 5)

            // Recalcular la sisa resultante real con esta lógica
            const hilerasSisaResultante = numRondasAumento * frecuenciaBloque; // (Ej: 9 * 6 = 54)
            const sisaCmResultante = (hilerasSisaResultante / densidadH).toFixed(1); // (Ej: 54 / 2.6 = 20.8 cm)
            
            // =================================================================================
            // FIN: LÓGICA DE CANESÚ CORREGIDA
            // =================================================================================

            // 4. GENERAR OUTPUT (CANESÚ REDONDO)
            resultado += `<h4>🧶 Resultados de Tejido desde el Escote (Canesú Redondo)</h4>\n`;
            resultado += `<p>Este método crea un canesú circular distribuyendo los aumentos uniformemente.</p>\n`;
            
            resultado += `\n<u>Comparativa de Medidas (Objetivos)</u>\n`;
            resultado += `* **Ancho Total de Prenda:** **${anchoPrendaCm.toFixed(1)} cm** (**${cpPts} puntos**).\n`;
            resultado += `* **Ancho de Manga:** **${anchoSisaMangaCm.toFixed(1)} cm** (**${puntosSisaManga} puntos**).\n`;
            resultado += `* **Sisa:** ${raglanCmBase.toFixed(1)} cm. (Se tejerán **${sisaCmResultante} cm** para distribuir los aumentos).\n\n`;

            resultado += `<u>1. Empezamos a tejer por el escote:</u>\n`;
            resultado += `* **Montas:** **${puntosMontaje} puntos** (para un escote de **${escoteCmDeseado.toFixed(1)} cm**).\n`;
            resultado += `* **A continuación:** Tejes **${tiraCuelloPts} pasadas** (**${tiraCuelloCm.toFixed(1)} cm**) para la tira del cuello.\n`;
            if (tipoPrenda === "CHAQUETA") {
                 resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tapeta Opcional:** Te sugerimos montar **${puntosTapeta} puntos** *adicionales* a cada lado para la tapeta, que serán **${tiraCuelloCm.toFixed(1)} cm** de ancho.</p>\n`;
            }

            // =================================================================================
            // INICIO: SECCIÓN DE AUMENTOS POR PASADA (MODIFICADA CON TU EJEMPLO)
            // =================================================================================
            resultado += `<u>2. Indicaciones para tejer los aumentos (Canesú)</u>\n`;
            resultado += `* Hay que aumentar un total de **${puntosTotalesAAumentar} puntos** (de ${puntosMontaje}p. a ${puntosTotalesCanesu}p.)\n`;
            resultado += `que se distribuirán en **${numRondasAumento} pasadas de aumento**.\n\n`;

            let pasadaActual = 1;
            let puntosActuales = puntosMontaje;

            for (let i = 1; i <= numRondasAumento; i++) {
                // Calcular la frecuencia de aumento para esta ronda
                let cadaCuantosPuntos = 0;
                if (puntosPorRonda > 0 && puntosActuales > 0) { // Evitar división por cero
                     cadaCuantosPuntos = Math.floor(puntosActuales / puntosPorRonda);
                }
                
                // 1. La pasada de aumento
                resultado += `* **Pasada ${pasadaActual}:** `;
                if (cadaCuantosPuntos > 0) {
                    resultado += `Tejes *${cadaCuantosPuntos} puntos, 1 aumento*. Repite de *a* toda la pasada. `;
                } else {
                    resultado += `Aumentas ${puntosPorRonda} puntos repartidos uniformemente. `;
                }
                puntosActuales += puntosPorRonda;
                resultado += `(Tendrás **${puntosActuales} puntos**).\n`;

                // 2. Las pasadas rectas
                if (pasadasRectas > 0) {
                    const finPasadasRectas = pasadaActual + pasadasRectas;
                    resultado += `* **Pasada ${pasadaActual + 1} a ${finPasadasRectas}:** Tejes recto sin aumentos.\n`;
                    pasadaActual = finPasadasRectas + 1;
                } else {
                    pasadaActual++;
                }
            }
            
            resultado += `\n<p style="font-size:0.9em; padding-left: 20px;">(Al terminar, habrás tejido un total de **${hilerasSisaResultante} pasadas**, logrando una sisa de **${sisaCmResultante} cm**).</p>\n`;
            // =================================================================================
            // FIN: SECCIÓN DE AUMENTOS POR PASADA
            // =================================================================================


            
            // 5. REPARTO DE PUNTOS (Canesú Redondo)
            // (Esta es la parte más compleja del redondo, usamos una proporción estándar)
            let puntosMangaCanesu = Math.round(puntosTotalesCanesu * 0.20); // 20% para cada manga
            if (puntosMangaCanesu % 2 !== 0) puntosMangaCanesu++;
            let puntosCuerpoCanesu = (puntosTotalesCanesu - (puntosMangaCanesu * 2)) / 2; // El resto, dividido entre Espalda y Delantero
            puntosCuerpoCanesu = Math.floor(puntosCuerpoCanesu);
            
            const puntosMangaFinal_PreSisa = puntosMangaCanesu;
            const puntosEspaldaFinal_PreSisa = puntosCuerpoCanesu;
            const puntosDelanteroFinal_PreSisa = puntosTotalesCanesu - (puntosMangaCanesu * 2) - puntosCuerpoCanesu;
            
            // =================================================================================
            // INICIO: SECCIÓN DE SEPARACIÓN (MODIFICADA + CAMBIO DE LÓGICA JERSEY)
            // =================================================================================
            resultado += `<u>3. Separación de Piezas (Canesú Redondo)</u>\n`;
            resultado += `<p>Al finalizar los aumentos, tendrás **${puntosTotalesCanesu} puntos**. Ahora, repártelos de esta forma (esto es una guía estándar, ajústala si es necesario):</p>\n`;

            if (tipoPrenda === "JERSEY") {
                 resultado += `* **Delantero:** **${puntosDelanteroFinal_PreSisa} puntos**.\n`;
                 resultado += `* **Manga 1:** **${puntosMangaFinal_PreSisa} puntos**.\n`;
                 resultado += `* **Espalda:** **${puntosEspaldaFinal_PreSisa} puntos**.\n`;
                 resultado += `* **Manga 2:** **${puntosMangaFinal_PreSisa} puntos**.\n`;
            } else { // CHAQUETA
                 let pDelanteroParte = Math.floor(puntosDelanteroFinal_PreSisa / 2);
                 let pDelanteroParte2 = puntosDelanteroFinal_PreSisa - pDelanteroParte;
                 resultado += `* **Delantero 1:** **${pDelanteroParte} puntos**.\n`;
                 resultado += `* **Manga 1:** **${puntosMangaFinal_PreSisa} puntos**.\n`;
                 resultado += `* **Espalda:** **${puntosEspaldaFinal_PreSisa} puntos**.\n`;
                 resultado += `* **Manga 2:** **${puntosMangaFinal_PreSisa} puntos**.\n`;
                 resultado += `* **Delantero 2:** **${pDelanteroParte2} puntos**.\n`;
                
            }
            resultado += `<p style="margin-top: 10px;">A continuación, teje primero las dos mangas, los puntos del delantero y la espalda los puedes poner en una aguja auxiliar en espera.</p>\n`;


            // 6. SECCIONES 3.1 y 3.2 (Manga y Cuerpo) - (Lógica de texto MODIFICADA)
            const largoMangaCm = medidas.LM; 
            const largoMangaRestanteH = densidadH ? Math.round(largoMangaCm * densidadH) : null;
            const finalLargoMangaCm = largoMangaCm > 0 ? largoMangaCm.toFixed(1) : (0.0).toFixed(1);
            
            const puntosMangaConSisa = puntosMangaFinal_PreSisa + puntosAnadirSisaPts;
            const puntosPuño = Math.round(medidas['C Puño'] * densidadP);
            const puntosAnadirSisaPts_Media = Math.round(puntosAnadirSisaPts / 2); // Puntos a cada lado

            const largoCuerpoCm = medidas.LT - medidas.PSisa; 
            const largoCuerpoRestanteH = densidadH ? Math.round(largoCuerpoCm * densidadH) : null;
            const finalLargoCuerpoCm = largoCuerpoCm > 0 ? largoCuerpoCm.toFixed(1) : (0.0).toFixed(1);

            const puntosPiezaDelantera = puntosDelanteroFinal_PreSisa;
            const puntosPiezaEspalda = puntosEspaldaFinal_PreSisa;

            resultado += `\n<u>3.1. Mangas (Tejer dos iguales)</u>\n`;
            resultado += `* **Manga:** Trabaja sobre **${puntosMangaFinal_PreSisa} puntos** que serán los de la manga. Añades **${puntosAnadirSisaPts_Media} puntos** antes y **${puntosAnadirSisaPts_Media} puntos** después (para la sisa).\n`;
            resultado += `* Ahora tendrás un total de **${puntosMangaConSisa} puntos**.\n`;
            resultado += `* **Disminuciones para llegar al puño:**\n`;
            
            const disminucionesTotales = puntosMangaConSisa - puntosPuño;
            const vecesDisminuir = Math.floor(disminucionesTotales / 2);
            
            if (vecesDisminuir > 0 && largoMangaCm > 0) {
                const largoMangaParaDisminuir = largoMangaCm > tiraCuelloCm ? largoMangaCm - tiraCuelloCm : largoMangaCm;
                let frecuenciaCm = 0;
                if (vecesDisminuir > 0) { frecuenciaCm = largoMangaParaDisminuir / vecesDisminuir; }
                let freqStr = `(${frecuenciaCm.toFixed(1)} cm aprox)`;
                let frecuenciaPasadasStr = "";
                if (densidadH && largoMangaRestanteH && largoMangaRestanteH > 0 && vecesDisminuir > 0) {
                    const largoMangaRestanteHAjustado = largoMangaRestanteH > tiraCuelloPts ? largoMangaRestanteH - tiraCuelloPts : largoMangaRestanteH;
                     if (largoMangaRestanteHAjustado > 0) {
                        const frecuenciaPasadas = Math.round(largoMangaRestanteHAjustado / vecesDisminuir);
                        frecuenciaPasadasStr = `cada **${Math.max(1, frecuenciaPasadas)} pasadas** ${freqStr}`;
                     } else {
                        frecuenciaPasadasStr = `cada ${freqStr}`;
                     }
                } else {
                    frecuenciaPasadasStr = `cada ${freqStr}`; // Fallback si no hay densidadH
                }
                resultado += `<p style="font-size:0.9em; padding-left: 20px;">- Disminuyes **1 punto a cada lado** ${frecuenciaPasadasStr}, repitiendo **${vecesDisminuir} veces**.\n- (Llegarás a **${puntosPuño} puntos** para el puño de **${medidas['C Puño'].toFixed(1)} cm**).</p>\n`;
            } else {
                 resultado += `<p style="font-size:0.9em; padding-left: 20px;">- No necesitas disminuciones. Tejes recto hasta el puño.</p>\n`;
            }
            resultado += `<p style="font-size:0.9em; padding-left: 20px;">- Tejes recto hasta que la manga mida **${finalLargoMangaCm} cm** desde la sisa ${largoMangaRestanteH !== null ? `(${largoMangaRestanteH} pasadas)` : ''}.</p>\n`;


            resultado += `\n<u>3.2. Cuerpo (Delantero y Espalda)</u>\n`;
            
            if (tipoPrenda === "CHAQUETA") {
                const puntosDelanteroIndividual = Math.floor(puntosPiezaDelantera / 2);
                const puntosDelanteroIndividual2 = puntosPiezaDelantera - puntosDelanteroIndividual;
                const puntosTotalDelanteroIndividualConSisa = puntosDelanteroIndividual + puntosAnadirSisaPts_Media;
                const puntosTotalDelanteroIndividualConSisa2 = puntosDelanteroIndividual2 + puntosAnadirSisaPts_Media;
                const cmTotalDelanteroIndividualConSisa = (puntosTotalDelanteroIndividualConSisa / densidadP).toFixed(1);
                
                resultado += `* **Ahora vas a tejer el cuerpo, puedes tejerlo todo junto o separarlo por piezas, segun tu comodidad:**\n`;
                resultado += `<p style="padding-left: 20px;">- Pon en la aguja **${puntosDelanteroIndividual} puntos** que tenias en espera, recoges **${puntosAnadirSisaPts_Media} puntos** (de la sisa),  **${puntosPiezaEspalda} puntos** de la espalda, recoges **${puntosAnadirSisaPts_Media} puntos** (de la otra sisa) y los **${puntosDelanteroIndividual2} puntos** del otro delantero.</p>\n`;
                const puntosTotalCuerpo = puntosDelanteroIndividual + puntosDelanteroIndividual2 + puntosPiezaEspalda + puntosAnadirSisaPts;
                const cmTotalCuerpo = (puntosTotalCuerpo / densidadP).toFixed(1);
                resultado += `<p style="padding-left: 20px;">- Tendrás en la aguja **${puntosTotalCuerpo} puntos** (${cmTotalCuerpo} cm). Continúas tejiendo recto durante **${finalLargoCuerpoCm} cm** ${largoCuerpoRestanteH !== null ? `(${largoCuerpoRestanteH} pasadas)` : ''}.</p>\n`;

            // =================================================================================
            // INICIO: LÓGICA JERSEY EN PLANO (CORREGIDA)
            // =================================================================================
            } else { // JERSEY
                resultado += `* **Ahora vas a tejer el delantero:**\n`;
                resultado += `<p style="padding-left: 20px;">- Coges los **${puntosPiezaDelantera} puntos** del delantero. Añades/recoges **${puntosAnadirSisaPts_Media} puntos** a cada lado (bajo la sisa).</p>\n`;
                const puntosTotalDelantero = puntosPiezaDelantera + puntosAnadirSisaPts;
                const cmTotalDelantero = (puntosTotalDelantero / densidadP).toFixed(1);
                resultado += `<p style="padding-left: 20px;">- Ahora tendrás **${puntosTotalDelantero} puntos** (${cmTotalDelantero} cm). Continúas tejiendo recto durante **${finalLargoCuerpoCm} cm** ${largoCuerpoRestanteH !== null ? `(${largoCuerpoRestanteH} pasadas)` : ''}.</post>\n`;

                resultado += `* **Espalda (en plano):**\n`;
                resultado += `<p style="padding-left: 20px;">- Coges los **${puntosPiezaEspalda} puntos** de la espalda y añades/recoges **${puntosAnadirSisaPts_Media} puntos** de cada lado (bajo la sisa).</p>\n`;
                const puntosTotalEspalda = puntosPiezaEspalda + puntosAnadirSisaPts;
                const cmTotalEspalda = (puntosTotalEspalda / densidadP).toFixed(1);
                resultado += `<p style="padding-left: 20px;">- Tendrás **${puntosTotalEspalda} puntos** (${cmTotalEspalda} cm). Tejes recto durante **${finalLargoCuerpoCm} cm** ${largoCuerpoRestanteH !== null ? `(${largoCuerpoRestanteH} pasadas)` : ''}.</p>\n`;
            }
            // =================================================================================
            // FIN: LÓGICA JERSEY EN PLANO
            // =================================================================================
            
            // Esta sección de "Espalda" era redundante para el Jersey, se elimina
            /*
            if (tipoPrenda === "CHAQUETA") {
                resultado += `* **Espalda:**\n`;
                ...
            }
            */

            resultado += `<p style="font-size:0.9em; padding-left: 20px; margin-top: 10px;">- Ten en cuenta, como en los puños, que si quieres hacer un acabado con otro punto o elástico, lo empieces antes de llegar a los **${finalLargoCuerpoCm} cm** de largo.</p>\n`;
            // =================================================================================
            // FIN: SECCIÓN SEPARACIÓN Y MANGA/CUERPO (MODIFICADA)
            // =================================================================================


        } else {
            if (tipoPrenda !== 'CUBRE_PAÑAL' && tipoPrenda !== 'JERSEY' && tipoPrenda !== 'CHAQUETA') {
                 resultadoDiv.innerHTML = '<p class="error">Error: Por favor, complete todos los campos obligatorios: **Puntos de Muestra** y selección de **Talla** y **Tipo de Prenda**.</p>';
                 return;
            }
        }
    }
    
    // NOTA DE CROCHET
    resultado += `<hr style="margin-top: 25px; border-color: #d6a4a4;">`;
    resultado += `<p style="font-size:0.9em; text-align: center;">💡 **Nota:** Esta calculadora es válida tanto para **tejido en dos agujas** (donde 'puntos' = puntos y 'pasadas' = hileras) como para **Ganchillo/Crochet** (donde 'puntos' = cadenetas y 'pasadas' = vueltas). Solo tienes que sustituir la terminología.</p>`;

    resultadoDiv.innerHTML = resultado.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}
