function calcularPatron() {
    const puntosMuestra = parseFloat(document.getElementById('puntos_muestra').value);
    const hilerasMuestra = parseFloat(document.getElementById('hileras_muestra').value);
    const tallaSeleccionada = document.getElementById('talla_seleccionada').value;
    const tipoPrenda = document.getElementById('tipo_prenda').value;
    const metodoTejido = document.getElementById('metodo_tejido').value;
    const cmDeseados = parseFloat(document.getElementById('cm_deseados').value);
    
    const caidaEscoteInput = document.getElementById('caida_escote_deseada');
    const caidaEscoteDeseadaCm = caidaEscoteInput ? parseFloat(caidaEscoteInput.value) : null;

    const resultadoDiv = document.getElementById('resultado');

    // 1. Validaciones
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

    // ====================================================================
    // --- LÓGICA ESPECÍFICA PARA CUBRE PAÑAL ---
    // ====================================================================
    if (tipoPrenda === 'CUBRE_PAÑAL') {
        // ... (Lógica de CUBRE PAÑAL - Sin cambios relevantes)
        
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
        resultado += `* **Cinturilla:** En la cintura sugerimos tejer  **${elásticoCm} cm** ** en punto elástico** o añadir una vuelta de **pasacintas** (*2p juntos al derecho, hebra*, repetir de *a* toda la pasada) cuando este tejeando en la mitad de esos cm.  El ancho es orientativo, puedes hacerlo mas ancho o estrecho, segun te guste.\n`;
        resultado += `* **Bordes:** Para un borde rematado al mismo tiempo que se teje la pierna, haga los aumentos y disminuciones a 3 o 4 puntos de la orilla. Otra opción es recoger después los puntos del borde de las piernas y para tejer una tira de terminación en el punto que te guste.\n`;

        
        resultado += `<u>Manos a la obra!:</u>\n`;
        resultado += `* **Comienza montando:** **${puntosMontar} puntos** (corresponde a ${CC / 2} cm de cintura).\n`;
       
        resultado += `<u>1. Espalda (Cintura a Entrepierna)</u>\n`;
        resultado += `* ** Tejer recto **${AL} cm** ${hilerasAL !== null ? `(**${hilerasAL} pasadas**)` : ''}.\n`;
        
        resultado += `* **Ahora has llegado al muslo y hay que empezar a disminuir:** Disminuir **${menguadosPorLado} veces 1 punto a cada lado.**\n`;
        if (densidadH && cmDisminucion) {
             resultado += `<p style="padding-left: 20px;">- Haz: **1 disminución a cada lado cada 2 pasadas**.\n`;
             resultado += `- La linea de disminuciones medirá **${cmDisminucion} cm** (**${hilerasDisminucion} pasadas**). (Quedarán en la aguja **${puntosEP} puntos**).</p>\n`;
        } else if (menguadosPorLado > 0) {
             resultado += `<p style="padding-left: 20px;">- Haz: **1 disminución a cada lado cada 2 pasadas** hasta tener **${puntosEP} puntos** en la aguja.</p>\n`;
        }
        
        resultado += `* **Has llegado a la entrepierna, ahora hay que hacer unas pasadas rectas antes de empezar el delantero :** Tejer recto los **${puntosEP} puntos** durante **${TR} cm** ${hilerasTR !== null ? `(**${hilerasTR} pasadas**)` : ''}.\n\n`;

        resultado += `<u>2. Delantero (Entrepierna a Cintura)</u>\n`;
        
        resultado += `* **Ahora tienes que ** aumentar **${aumentosPorLado} veces 1 punto a cada lado.**\n`;
        if (densidadH && cmAumento) {
             resultado += `<p style="padding-left: 20px;">- Haz: **1 aumento a cada lado cada 2 pasadas**.\n`;
             resultado += `- La linea de aumentos medirá **${cmAumento} cm** (**${hilerasAumento} pasadas**). (Llegará a **${puntosObjetivoDelantero} puntos**).</p>\n`;
        } else if (aumentosPorLado > 0) {
             resultado += `<p style="padding-left: 20px;">- Haz: **1 aumento a cada lado cada 2 pasadas** hasta tener **${puntosObjetivoDelantero} puntos** en la aguja.</p>\n`;
        } else {
             resultado += `<p style="padding-left: 20px;">- No se requieren aumentos en este tramo.</p>\n`;
        }
        
        resultado += `* **Acabados los aumentos **, antes de empezar a tejer las ultimas pasadas para llegar a la cintura tendrás que aumentar de una vez **${puntosLCD} puntos a cada lado**. (Tendrás **${puntosMontar} puntos, los mismos puntos con los que empezaste a tejer**).\n`;
        
        resultado += `* ahora debes de ** continuar tejiendo recto ** **${AL} cm** ${hilerasAL !== null ? `(**${hilerasAL} pasadas**)` : ''}.\n`;
        
        resultado += `\n<u>3. Acabado</u>\n`;
        resultado += `* ** Cerrar los **${puntosMontar} puntos** de la cintura delantera.\n`;
        resultado += `* **Coser ** los laterales.\n`;

    } else {
        // --- LÓGICA JERSEY / CHAQUETA ---
        
        // ******************************************************************
        // INICIO: CÁLCULOS GENERALES (Usados por BAJO y ESCOTE)
        // ******************************************************************
        
        // 1. Holgura de Cuerpo (6% del CP)
        const holguraCm = medidas.CP * 0.06; 
        const anchoPrendaCm = medidas.CP + holguraCm;
        const cpPts = Math.round(anchoPrendaCm * densidadP); // Puntos de contorno de pecho total
        
        // 2. Tira de Cuello (Dinámica por talla)
        let tiraCuelloCm;
        if (ORDEN_TALLAS['Bebé (Prematuro a 24m)'].includes(tallaSeleccionada)) {
            tiraCuelloCm = 1.5;
        } else if (ORDEN_TALLAS['Niños (3 a 10 años)'].includes(tallaSeleccionada)) {
            tiraCuelloCm = 2.0;
        } else if (ORDEN_TALLAS['Adulto (36 a 50)'].includes(tallaSeleccionada)) {
            tiraCuelloCm = 2.5;
        } else {
            tiraCuelloCm = 2.0; // Valor por defecto
        }
        const tiraCuelloPts = densidadH ? Math.round(tiraCuelloCm * densidadH) : null;
        
        // 3. Raglán
        const raglanCmBase = medidas.PSisa; // Raglan = Altura de Sisa (PSisa)
        
        // 4. Tapeta 
        let calculatedTapetaPts = Math.max(3, Math.ceil(tiraCuelloCm * densidadP));
        if (calculatedTapetaPts % 2 === 0) {
            calculatedTapetaPts += 1; // Asegurar que sea impar
        }
        const puntosTapeta = calculatedTapetaPts;

        // ====================================================================
        // 5. CÁLCULO DE HOLGURA DE SISA (Para Puntos Bajo Manga) - CORRECCIÓN
        // ====================================================================
        let holguraSisaCm; 
        if (ORDEN_TALLAS['Bebé (Prematuro a 24m)'].includes(tallaSeleccionada)) {
            holguraSisaCm = 3.0; // Holgura bajo sisa: 3 cm
        } else if (ORDEN_TALLAS['Niños (3 a 10 años)'].includes(tallaSeleccionada)) {
            holguraSisaCm = 5.0; // Holgura bajo sisa: 5 cm
        } else if (ORDEN_TALLAS['Adulto (36 a 50)'].includes(tallaSeleccionada)) {
            holguraSisaCm = 8.0; // Holgura bajo sisa: 8 cm
        } else {
            holguraSisaCm = 8.0; // Default
        }

        // holguraAxilaCm se usa en la lógica BAJO, su valor debe ser holguraSisaCm
        const holguraAxilaCm = holguraSisaCm; 

        // 6. Ancho de Sisa (El ancho de la manga en la sisa es Contorno de Axila + la mitad del ancho de la sisa montada)
        const anchoSisaMangaCm = medidas.CA + (holguraAxilaCm / 2);
        
        // 7. Puntos de Sisa (NÚMERO OBJETIVO DE PUNTOS EN LA MANGA AL SEPARAR)
        const puntosSisaManga = Math.round(anchoSisaMangaCm * densidadP);

        // 8. Variables declaradas
        let ccPts; // Puntos de contorno de cuello
        
        // ******************************************************************
        // FIN: CÁLCULOS GENERALES
        // ******************************************************************

    
        // --- LÓGICA BOTTOM-UP (Del Bajo al Hombro) ---
        if (metodoTejido === "BAJO") {
            // ... (Lógica de BAJO - Sin cambios relevantes)
            // ... (The rest of the BAJO block remains the same)

            // CÁLCULOS VERTICALES CONDICIONALES A DENSIDADH
            const largoCuerpoCm = medidas.LT - medidas.PSisa;
            const hilerasBajoSisa = densidadH ? Math.round(largoCuerpoCm * densidadH) : null; 
            const hilerasSisaHombro = densidadH ? Math.round(medidas.PSisa * densidadH) : null;
            const hilerasTotalEspalda = (hilerasBajoSisa !== null && hilerasSisaHombro !== null) ? (hilerasBajoSisa + hilerasSisaHombro) : null;
            
            let puntosMedioPecho = Math.round(cpPts / 2);
            let puntosEspalda = puntosMedioPecho;
            let puntosTotalDelantero; 
            
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
                // puntosTapeta y tiraCuelloCm son dinámicos
                resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tapeta Opcional:** Sugerimos añadir **${puntosTapeta} puntos** extra para la tapeta, que serán **${tiraCuelloCm.toFixed(1)} cm** de ancho (puntos impares para ojal).</p>\n`;
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
                const puntosCierreInicialConTapeta = puntosCierreInicial + puntosTapeta; // puntosTapeta es dinámico e impar
                
                const avisoTapetaEnCierre = ` (Tenga en cuenta que si añadió la tapeta sugerida de **${puntosTapeta} puntos**, el cierre inicial será de **${puntosCierreInicialConTapeta} puntos** en total).`;
                
                resultado += `* **2. Cierre Central (Escote):** Cerrar **${puntosCierreInicial} puntos**${avisoTapetaEnCierre} y luego continuar disminuyendo de la siguiente manera: **${secuenciaTotal.join(', ')}** (un total de **${totalCierreLateral} puntos** a disminuir).\n`;
                resultado += `* **3. Hombro:** Continuar recto y cerrar los **${puntosHombro} puntos** restantes en el hombro al llegar a los **${medidas.PSisa.toFixed(1)} cm** de altura total de sisa ${hilerasSisaHombro !== null ? `(**${hilerasSisaHombro} pasadas**)` : ''}.\n\n`; 
            }

            // 3. MANGAS
            resultado += `<u>3. Mangas</u>\n`;
            const puntosPuño = Math.round(medidas['C Puño'] * densidadP);
            // puntosSisaManga (EL OBJETIVO) está calculado arriba en la sección general
            const largoMangaSisaPuñoCm = medidas.LM; 
            const largoMangaH = densidadH ? Math.round(largoMangaSisaPuñoCm * densidadH) : null;
            
            const totalAumentos = puntosSisaManga - puntosPuño;
            const aumentosPorLado = Math.floor(totalAumentos / 2);
            
            resultado += `* **Montar:** **${puntosPuño} p.** (Puño de **${medidas['C Puño'].toFixed(1)} cm**).\n`;
            resultado += `* **Tejer:** **${largoMangaSisaPuñoCm.toFixed(1)} cm** (Largo de Sisa a Puño). ${largoMangaH !== null ? `(**${largoMangaH} pasadas**)` : ''}\n`;
            
            if (aumentosPorLado > 0) {
                const frecuenciaCm = largoMangaSisaPuñoCm / aumentosPorLado;
                const cmSisaFinal = anchoSisaMangaCm.toFixed(1); 

                let frecuenciaStr = `cada **${frecuenciaCm.toFixed(1)} cm**`;
                if (densidadH && largoMangaH > 0 && aumentosPorLado > 0) {
                    const frecuenciaAumentos = Math.round(largoMangaH / aumentosPorLado);
                    frecuenciaStr = `cada **${frecuenciaAumentos} pasadas** (aprox. **${frecuenciaCm.toFixed(1)} cm**)`
                }
                
                resultado += `* **Aumentos:** Aumentar **1 punto a cada lado** **${aumentosPorLado} veces** con una frecuencia de **${frecuenciaStr}**. Esto lleva la manga a **${puntosSisaManga} puntos** (**${cmSisaFinal} cm** de ancho en la sisa, que incluye **${(holguraAxilaCm / 2).toFixed(1)} cm** de holgura).\n\n`;
            } else {
                resultado += `* **Aumentos:** No se requieren aumentos. Tejer recto.\n\n`;
            }


        // --- LÓGICA TOP-DOWN (Escote al Bajo - Raglán) ---
        } else if (metodoTejido === "ESCOTE") {
            
            // ** CÁLCULO DE ESCOTE PERSONALIZADO: (CCa + CC) / 2 - 2 (Fórmula de Elena) **
            if (!medidas.CCa || !medidas.CC) {
                resultadoDiv.innerHTML = '<p class="error">Error: La talla seleccionada no tiene las medidas de Contorno de Cabeza (CCa) y/o Contorno de Cuello (CC) definidas para calcular el escote con la fórmula personalizada.</p>';
                return;
            }
            
            const escoteCmDeseado = (medidas.CCa + medidas.CC) / 2 - 2;
            const puntosMontaje = Math.round(escoteCmDeseado * densidadP);
            // ** FIN CÁLCULO ESCOTE **
            
            // ====================================================================
            // CÁLCULO DE PUNTOS BAJO MANGA (puntosAnadirSisaPts) - CORRECCIÓN
            // ====================================================================
            // La holgura bajo manga se define en holguraSisaCm (3/5/8 cm)
            const puntosAnadirSisaPts = Math.round(holguraSisaCm * densidadP);


            // Puntos Objetivo (Igual que en BAJO)
            const puntosObjetivoCuerpo = cpPts;
            const puntosObjetivoManga = puntosSisaManga;
            const puntosObjetivoTotal = puntosObjetivoCuerpo + (puntosObjetivoManga * 2);
            
            // Puntos Iniciales (Base para reparto)
            const puntosBase = puntosMontaje - 4; // Restar 4 puntos para los marcadores de raglán

            
            // ================== INICIO DE LA CORRECCIÓN (Reparto Proporcional) ==================
            // 1. Calcular proporciones basadas en los puntos objetivo
            const totalProporcional = puntosObjetivoCuerpo + (puntosObjetivoManga * 2);
            
            // 2. Repartir Puntos Base (puntosMontaje - 4)
            const pManga = Math.round(puntosBase * (puntosObjetivoManga / totalProporcional));
            const pCuerpoTotal = puntosBase - (pManga * 2);
            
            let pEspalda = Math.round(pCuerpoTotal / 2);
            let pDelanteroBase = pCuerpoTotal - pEspalda;
            
            // Ajuste de simetría para Chaqueta (Si es Jersey no importa, se suma)
            if (tipoPrenda === "CHAQUETA" && pDelanteroBase % 2 !== 0) {
                 pDelanteroBase -= 1;
                 pEspalda += 1;
            }
            // ================== FIN DE LA CORRECCIÓN (Reparto Proporcional) ==================

            resultado += `<h4>🧶 Resultados de Tejido desde el Escote (Raglán)</h4>\n`;
            resultado += `* **Talla Seleccionada** (${tallaSeleccionada}) (Contorno de pecho): **${medidas.CP.toFixed(1)} cm**.\n`; 
            resultado += `* **Ancho Total de la Prenda** (Contorno de pecho + Holgura): **${anchoPrendaCm.toFixed(1)} cm** (**${cpPts} puntos**).\n\n`;
            resultado += `* ** La manga debe tener **${puntosSisaManga} puntos** en la sisa.\n\n`;

            // 1. REPARTO INICIAL
            
            let repartoStr;
            if (tipoPrenda === "JERSEY") {
                const pDelanteroFinal = pDelanteroBase;
                repartoStr = `**${pEspalda} p** (Espalda), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pDelanteroFinal} p** (Delantero), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador).`;
            } else { // CHAQUETA
                const pDelanteroParte1 = pDelanteroBase / 2;
                const pDelanteroParte2 = pDelanteroBase / 2;

                repartoStr = `**${pDelanteroParte1} p** (Del. 1), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pEspalda} p** (Espalda), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pDelanteroParte2} p** (Del. 2).`;
                // puntosTapeta y tiraCuelloCm son dinámicos
                resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tapeta Opcional:** Sugerimos montar **${puntosTapeta} puntos** *adicionales* a cada lado para la tapeta, que serán **${tiraCuelloCm.toFixed(1)} cm** de ancho (puntos impares para ojal).</p>\n`;
            }
            
            resultado += `<u>1. Empezamos a tejer por el escote (Fórmula Personalizada):</u>\n`;
            resultado += `* **Medida del Escote:** **${escoteCmDeseado.toFixed(1)} cm**.\n`;
            resultado += `* **Montamos:** **${puntosMontaje} puntos** (${escoteCmDeseado.toFixed(1)} cm de contorno).\n`;
            // tiraCuelloPts y tiraCuelloCm son dinámicos
            resultado += `* **A continuación:** Tejer **${tiraCuelloPts} pasadas** (**${tiraCuelloCm.toFixed(1)} cm**) para la tira del cuello.\n`;
            resultado += `* **Repartir los puntos de la siguiente manera: (4 puntos marcados para el Raglán):** ${repartoStr}\n\n`;

            // 2. AUMENTOS RAGLÁN
            // ================== INICIO DE LA LÓGICA (Basada en Puntos Objetivo) ==================
            
            // 1. Puntos Iniciales (Sin los 4 marcadores)
            const puntosIniciales = puntosBase; // pEspalda + pManga + pManga + pDelanteroBase
            
            // 2. Puntos Totales a Aumentar (Restando los puntos que se añaden bajo manga) - CORRECCIÓN
            const puntosTotalNecesariosRaglan = puntosObjetivoTotal - (puntosAnadirSisaPts * 2);
            const puntosAumentarTotales = puntosTotalNecesariosRaglan - puntosIniciales;

            // 3. Rondas de Aumento (Se aumentan 8 puntos por ronda)
            const numAumentosRondas = (puntosAumentarTotales > 0) ? Math.ceil(puntosAumentarTotales / 8) : 0;
            
            // 4. Puntos aumentados por pieza (son 2 por ronda)
            const puntosAumentadosPorPieza = numAumentosRondas * 2;
            
            // 5. Puntos finales REALES de cada pieza
            const puntosMangaFinal_PreSisa = pManga + puntosAumentadosPorPieza;
            const puntosEspaldaFinal_PreSisa = pEspalda + puntosAumentadosPorPieza;
            const puntosDelanteroFinal_PreSisa = pDelanteroBase + puntosAumentadosPorPieza;

            // 6. Altura de Raglán RESULTANTE (en cm)
            const hilerasRaglan = numAumentosRondas * 2;
            const raglanCmBaseCalculado = densidadH ? (hilerasRaglan / densidadH) : null;
            
            // ================== FIN DE LA CORRECCIÓN ==================
            
            resultado += `<u>2. Indicaciones para tejer los aumentos (Raglán)</u>\n`;
            
            // --- Texto de salida modificado ---
            resultado += `* **Puntos Objetivo:** El objetivo es tejer hasta tener **${puntosTotalNecesariosRaglan} puntos** en la aguja (antes de separar mangas).\n`;
            resultado += `* **Rondas de Aumento:** Se deben tejer **${numAumentosRondas}** rondas de aumentos.\n`;
            
            if (raglanCmBaseCalculado !== null) {
                // Caso 1: Sí tenemos densidadH
                resultado += `* **Altura de Sisa (Resultante):** **${raglanCmBaseCalculado.toFixed(1)} cm** (Total **${hilerasRaglan} pasadas**).\n`;
            }
            
            let instruccionRaglanStr = `Aumentar 1 punto a cada lado de los 4 marcadores (8 aumentos total) cada **2 pasadas**, repitiendo un total de **${numAumentosRondas} veces**.\n`;
            instruccionRaglanStr += `<p style="font-size:0.9em; padding-left: 20px;">- Esto añade **${puntosAumentadosPorPieza} puntos** a cada una de las 4 piezas (Manga/Delantero/Espalda).</p>`;
            
            resultado += `* **Indicaciones para los Aumentos:** ${instruccionRaglanStr}\n`;
            resultado += `* **Puntos a Añadir en la Sisa:** Al separar las mangas, añadir **${puntosAnadirSisaPts} puntos** (montados o recogidos) bajo cada sisa. \n\n`; // <-- LÍNEA CORREGIDA
            
            
            // 3. INSTRUCCIONES DE MANGA Y CUERPO
            const largoMangaCm = medidas.LM; 
            const largoMangaRestanteH = densidadH ? Math.round(largoMangaCm * densidadH) : null;
            const finalLargoMangaCm = largoMangaCm > 0 ? largoMangaCm.toFixed(1) : (0.0).toFixed(1);
            
            // Ajuste: El largo del cuerpo se mide desde la sisa (PSisa), no desde el escote.
            const largoCuerpoCm = medidas.LT - medidas.PSisa; 
            const largoCuerpoRestanteH = densidadH ? Math.round(largoCuerpoCm * densidadH) : null;
            const finalLargoCuerpoCm = largoCuerpoCm > 0 ? largoCuerpoCm.toFixed(1) : (0.0).toFixed(1);
            
            // Puntos con Sisa (CORREGIDO)
            const puntosMangaConSisa = puntosMangaFinal_PreSisa + puntosAnadirSisaPts;
            const puntosPuño = Math.round(medidas['C Puño'] * densidadP);

            const puntosCuerpoEspaldaFinal = puntosEspaldaFinal_PreSisa;
            const puntosCuerpoDelanteroFinal = puntosDelanteroFinal_PreSisa;
            const puntosTotalCuerpoFinal = puntosCuerpoEspaldaFinal + puntosCuerpoDelanteroFinal + (puntosAnadirSisaPts * 2);
            
            resultado += `<u>3. Acabado el raglán, separamos las piezas asi:</u>\n`;
            
            // --- 3.1. MANGAS ---
            resultado += `\n<u>3.1. Mangas (Tejer dos iguales)</u>\n`;
            resultado += `* ** Dejar el Cuerpo en espera. Poner los **${puntosMangaFinal_PreSisa} puntos ** de la manga a una aguja de trabajo.\n`;
            resultado += `* **Puntos Bajo Manga:** Recoger o montar los **${puntosAnadirSisaPts} puntos ** bajo la sisa. Tendrá un total de **${puntosMangaConSisa} puntos**.\n`; // <-- LÍNEA CORREGIDA

            resultado += `* **Disminuciones de Manga:**\n`;
            
            const disminucionesTotales = puntosMangaConSisa - puntosPuño;
            const vecesDisminuir = Math.floor(disminucionesTotales / 2);
            
            if (vecesDisminuir > 0) {
                // tiraCuelloCm es dinámico
                const largoMangaParaDisminuir = largoMangaCm > tiraCuelloCm ? largoMangaCm - tiraCuelloCm : largoMangaCm;
                const frecuenciaCm = largoMangaParaDisminuir / vecesDisminuir;
                let frecuenciaStr = `cada **${frecuenciaCm.toFixed(1)} cm**`;
                
                if (densidadH && largoMangaRestanteH) {
                    // tiraCuelloPts es dinámico
                    const largoMangaRestanteHAjustado = largoMangaRestanteH > tiraCuelloPts ? largoMangaRestanteH - tiraCuelloPts : largoMangaRestanteH;
                    if (vecesDisminuir > 0) {
                        const frecuenciaPasadas = Math.round(largoMangaRestanteHAjustado / vecesDisminuir);
                        frecuenciaStr = `cada **${Math.max(1, frecuenciaPasadas)} pasadas** (aprox. **${frecuenciaCm.toFixed(1)} cm**)`
                    }
                }
                
                resultado += `<p style="font-size:0.9em; padding-left: 20px;">- Disminuir **1 punto a cada lado** **${vecesDisminuir} veces** **${frecuenciaStr}**.\n`;
                resultado += `- Esto dejará **${puntosPuño} puntos** en el puño (**${medidas['C Puño'].toFixed(1)} cm**).</p>\n`;
            } else {
                resultado += `<p style="font-size:0.9em; padding-left: 20px;">- No se requieren disminuciones. Tejer recto hasta el puño.</p>\n`;
            }
            
            resultado += `* **Largo Total de Manga (desde Sisa a Puño):** **${finalLargoMangaCm} cm** ${largoMangaRestanteH !== null ? `(**${largoMangaRestanteH} pasadas**)` : ''}.\n`;


            // --- 3.2. CUERPO ---
            resultado += `\n<u>3.2. Cuerpo (Espalda y Delantero)</u>\n`;
            
            if (tipoPrenda === "JERSEY") {
                const puntosPiezaDelantera = puntosCuerpoDelanteroFinal;
                const puntosPiezaEspalda = puntosCuerpoEspaldaFinal;

                resultado += `* **Tejido en Redondo (Jersey):** Para tejer el Cuerpo en circular y evitar costuras laterales, junte las piezas restantes en la aguja en el siguiente orden:\n`;
                resultado += `<p style="padding-left: 20px;">-  **Delantero** (**${puntosPiezaDelantera} puntos**), **${puntosAnadirSisaPts} puntos** (bajo manga 1), **Espalda** (**${puntosPiezaEspalda} puntos**), **${puntosAnadirSisaPts} puntos** (bajo manga 2).\n`; // <-- LÍNEA CORREGIDA
                resultado += `- **Puntos Totales:** Continúe tejiendo con un total de **${puntosTotalCuerpoFinal} puntos**.\n`;
                
            } else { // CHAQUETA
                // pDelanteroBase ya se hizo par y pEspalda se ajustó en la CORRECCIÓN 1
                const pDelantero1 = puntosCuerpoDelanteroFinal / 2;
                const pDelantero2 = puntosCuerpoDelanteroFinal / 2;
                const puntosPiezaEspalda = puntosCuerpoEspaldaFinal;
                
                resultado += `* **Tejido en Plano (Chaqueta):** Para tejer el Cuerpo en una sola pieza (evitando costuras laterales), junte las piezas restantes en la aguja en el siguiente orden:\n`;
                resultado += `<p style="padding-left: 20px;">-  **Delantero 1** (**${pDelantero1} puntos**), **${puntosAnadirSisaPts} puntos** (bajo manga 1), **Espalda** (**${puntosPiezaEspalda} puntos**), **${puntosAnadirSisaPts} puntos** (bajo manga 2), **Delantero 2** (**${pDelantero2} puntos**).\n`; // <-- LÍNEA CORREGIDA
                resultado += `- **Puntos Totales:** Continúe tejiendo con un total de **${puntosTotalCuerpoFinal} puntos**.\n`;
            }

            resultado += `* **Largo del Cuerpo (desde Sisa a Bajo):** Continuar recto **${finalLargoCuerpoCm} cm** ${largoCuerpoRestanteH !== null ? `(**${largoCuerpoRestanteH} pasadas**)` : ''}.\n`;

        } else {
            if (tipoPrenda !== 'CUBRE_PAÑAL' && tipoPrenda !== 'JERSEY' && tipoPrenda !== 'CHAQUETA') {
                 resultadoDiv.innerHTML = '<p class="error">Error: Por favor, complete todos los campos obligatorios: **Puntos de Muestra** y selección de **Talla** y **Tipo de Prenda**.</p>';
                 return;
            }
        }
    }
    
    // NOTA DE CROCHET
    resultado += `<hr style="margin-top: 25px; border-color: #d6a4a4;">`;
    resultado += `<p style="font-size:0.9em; text-align: center;">💡 **Nota:** Esta calculadora es válida tanto para **tejido en dos agujas** (donde 'puntos' = puntos y 'pasadas' = hileras) como para **Ganchillo/Crochet** (donde 'puntos' = cadenetas y 'pasadas' = vueltas). Solo tiene que sustituir la terminología.</p>`;

    resultadoDiv.innerHTML = resultado.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}
