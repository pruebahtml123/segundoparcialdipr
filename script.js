document.addEventListener('DOMContentLoaded', () => {
    // Banco de preguntas (sin cambios, puedes usar la versión extendida)
    const questionBank = [
    // --- TEMA 1: Restitución Internacional de Menores ---
    { question: "¿Cuál es la finalidad esencial de la restitución internacional de menores?", answer: "Lograr el retorno inmediato del niño a su residencia habitual cuando fue trasladado o retenido ilícitamente, para que los jueces de esa residencia decidan sobre el fondo de la custodia." },
    { question: "¿Qué tratado es el instrumento fundamental en esta materia para Argentina?", answer: "La Convención de La Haya de 1980 sobre los Aspectos Civiles de la Sustracción Internacional de Menores (CH 1980), aprobada por Ley 23.857." },
    { question: "¿Qué es la 'residencia habitual' y qué se requiere de la intención de los progenitores para cambiarla?", answer: "Es el centro de gravedad de la vida del menor, que presupone estabilidad. Requiere una intención clara y compartida de los progenitores para establecer un nuevo hogar, no una simple ambigüedad." },
    { question: "Mencione tres excepciones comunes para denegar una restitución según el Art. 13 de la CH 1980.", answer: "1) Grave riesgo físico o psíquico para el menor; 2) Oposición del menor con edad y madurez suficientes; 3) Aquerenciamiento (integración al nuevo entorno tras más de un año)." },
    { question: "¿Qué enseñó el caso 'V., M. c. S. Y., C. R.' sobre el concepto de residencia habitual?", answer: "Enseñó que una corta estadía y la ambigüedad en la intención de los padres no configuran una nueva residencia habitual, revocando una restitución a Francia." },
    { question: "¿Cuál es la diferencia entre un traslado ilícito y una retención ilícita?", answer: "El traslado ilícito es llevar al menor a otro Estado violando un derecho de custodia. La retención ilícita es cuando el menor permanece más tiempo del consentido." },
    { question: "¿Qué rol cumple el Ministerio Público (Fiscal y Pupilar) en los procesos de restitución?", answer: "Su rol es esencial para proteger los intereses del menor, y su omisión puede invalidar las decisiones judiciales." },
    { question: "¿Cómo se relaciona la Convención de La Haya de 1980 con la Convención sobre los Derechos del Niño (CDN)?", answer: "No hay incompatibilidad; ambas protegen el interés superior del niño, que es un principio de jerarquía constitucional." },
    { question: "¿Qué establece el CCCN en su Art. 2642 para los casos de restitución?", answer: "Adapta los principios de los convenios si no son directamente aplicables, siempre bajo la primacía del interés superior del niño." },
    { question: "¿Puede el orden público internacional ser una causa para denegar la restitución?", answer: "Sí, puede denegarse la restitución si viola principios fundamentales del Estado requerido en materia de derechos humanos." },
    { question: "Además del grave riesgo o la oposición del menor, ¿qué otra excepción contempla el Art. 13 de la CH 1980 respecto al progenitor reclamante?", answer: "La falta de ejercicio efectivo del derecho de custodia por parte del progenitor o su consentimiento/aceptación posterior al traslado." },

    // --- TEMA 2: Adopción Internacional ---
    { question: "¿Cuál es la postura general de Argentina y en qué principio se basa?", answer: "Tiene una postura contraria y desfavorable. Se basa en el Principio de Subsidiariedad, que prioriza la colocación del niño en su Estado de origen." },
    { question: "Según el CCCN (Art. 2635), ¿qué jueces tienen jurisdicción para la adopción de un niño domiciliado en Argentina?", answer: "Los jueces argentinos son exclusivamente competentes para la declaración de adoptabilidad, guarda y otorgamiento de la adopción." },
    { question: "¿Qué ley rige los requisitos y efectos de la adopción en Argentina según el Art. 2636 del CCCN?", answer: "Se rigen por el derecho del domicilio del adoptado al tiempo del otorgamiento de la adopción." },
    { question: "¿Qué exige el Art. 600 del CCCN a los extranjeros para poder adoptar en Argentina?", answer: "Exige 5 años de residencia permanente en el país, lo que limita de hecho la adopción internacional." },
    { question: "En 'S., F. A. c. L., C. L.', ¿por qué la CSJN enfatizó el control del orden público internacional?", answer: "Lo enfatizó como límite al reconocimiento de la sentencia, especialmente ante denuncias de adopciones irregulares en el lugar de origen (Colima, México)." },
    { question: "¿Es posible convertir una adopción simple extranjera en plena? ¿Qué se requiere?", answer: "Sí (Art. 2638 CCCN). Se requiere que cumpla los requisitos argentinos y se cuente con el consentimiento del adoptante y adoptado (y Ministerio Público si es menor)." },
    { question: "¿Cuál es la finalidad de la postura cautelosa de Argentina en la adopción internacional?", answer: "Busca evitar el tráfico, la explotación internacional de niños y el desarraigo." },
    { question: "Para reconocer una adopción extranjera (Art. 2637 CCCN), ¿qué debe tenerse en cuenta además del interés superior del niño?", answer: "Se deben tener en cuenta los vínculos estrechos del caso con la República, lo que se conoce como 'orden público de proximidad'." },
    { question: "¿Qué establece el Tratado de Montevideo de 1940 (Art. 23) sobre la ley aplicable a la adopción?", answer: "Somete la adopción a las leyes de los domicilios de las partes 'en cuanto sean concordantes', lo que es una conexión acumulativa y restrictiva." },
    { question: "En el proceso de exequátur de una adopción, ¿se revisa el fondo del asunto?", answer: "No, no se revisa el fondo. Solo se evalúa la idoneidad para producir efectos, controlando la autenticidad, legalidad y el resguardo del orden público internacional." },

    // --- TEMA 3: Alimentos ---
    { question: "¿Qué principio rige la regulación de los alimentos a nivel internacional y qué busca proteger?", answer: "Se rige por el principio *Favor Creditoris*, que busca proteger al acreedor alimentario, considerado la parte más vulnerable de la relación." },
    { question: "¿Cómo se determina el derecho aplicable a una obligación alimentaria según el Art. 2630 del CCCN?", answer: "Se aplica el derecho del domicilio del acreedor o el del deudor, el que resulte más favorable al interés del acreedor, lo que implica una tarea comparativa para el juez." },
    { question: "¿Qué es y cuándo se aplica el 'Foro de Necesidad' (Art. 2602 CCCN)?", answer: "Permite a jueces argentinos intervenir excepcionalmente para evitar la denegación de justicia, aunque no tengan jurisdicción, si hay contacto suficiente con el país." },
    { question: "¿Cómo debe un juez argentino aplicar el derecho extranjero en un caso de alimentos?", answer: "Debe interpretarlo como lo harían los jueces del Estado al que ese derecho pertenece, considerándolo un verdadero derecho y no un simple hecho (Teoría del Uso Jurídico)." },
    { question: "¿Por qué se dice que las obligaciones alimentarias son una 'categoría autónoma' en el DIPR?", answer: "Porque tienen un tratamiento y reglas propias que buscan específicamente proteger al acreedor, diferenciándose de otras obligaciones civiles." },
    { question: "Además de los foros generales, ¿qué jurisdicción especial se abre para cónyuges o convivientes que reclaman alimentos?", answer: "Pueden demandar ante el juez del último domicilio conyugal o convivencial efectivo, o el que entendió en la disolución del vínculo." },
    { question: "Mencione tres fuentes convencionales clave en materia de alimentos.", answer: "1) Convención de Nueva York de 1956; 2) Convención Interamericana sobre Obligaciones Alimentarias (CIDIP IV) de 1989; 3) Tratados de Montevideo (1889 y 1940)." },

    // --- TEMA 4: Matrimonio y Divorcio ---
    { question: "Según el CCCN (Art. 2626), ¿qué ley y qué jurisdicción se aplican para regir el divorcio?", answer: "Tanto la jurisdicción como el derecho aplicable se rigen por el del último domicilio de los cónyuges, siendo una conexión rígida." },
    { question: "¿Qué ley rige los efectos patrimoniales del matrimonio (régimen de bienes) si no hay convención, según el Art. 2625 del CCCN?", answer: "Se rigen por el derecho del primer domicilio conyugal." },
    { question: "¿Qué reafirmó el fallo 'Z., A. A. y otros' respecto al orden público argentino en materia matrimonial?", answer: "Reafirmó que la monogamia y el impedimento de ligamen (no poder casarse si ya se está casado) integran el orden público internacional argentino." },
    { question: "¿Qué es el orden público internacional y por qué se dice que es un concepto 'variable'?", answer: "Es un límite a la aplicación de leyes extranjeras. Es variable porque se adapta a los principios de un Estado en un momento dado, como lo demuestra el fallo 'Solá'." },
    { question: "¿Qué ley rige los efectos personales del matrimonio, según el Art. 2624 del CCCN?", answer: "Se rigen por el derecho del domicilio conyugal efectivo." },
    { question: "Mencione tres instrumentos de DDHH con jerarquía constitucional que consagran derechos vinculados a la familia.", answer: "La Declaración Universal de Derechos Humanos (DUDH), el Pacto Internacional de Derechos Civiles y Políticos (PIDCP) y la Convención Americana sobre Derechos Humanos (CADH)." },

    // --- TEMA 5: Contratos Internacionales ---
    { question: "¿Cuál es el principio rector en materia de contratos internacionales?", answer: "El principio rector es la autonomía de la voluntad , que permite a las partes celebrar contratos, determinar su contenido y elegir el derecho que los regirá." },
    { question: "Si las partes no eligen un derecho aplicable, ¿qué ley rige el contrato según el Art. 2652 del CCCN?", answer: "El contrato se rige por las leyes y usos del país del lugar de cumplimiento." },
    { question: "En el caso 'Gobierno de Perú c. SIFAR', ¿por qué la cláusula FOB fue decisiva?", answer: "Porque transfería todos los riesgos al comprador desde el embarque , constituyendo el convenio libremente pactado como la ley aplicable entre las partes." },
    { question: "Diferencie la autonomía de la voluntad 'conflictual' de la 'material'.", answer: "La 'conflictual' es elegir el derecho aplicable. La 'material' permite crear disposiciones contractuales que desplacen normas coactivas del derecho elegido." },
    { question: "¿Qué son las normas internacionalmente imperativas o 'de policía'?", answer: "Son normas de orden público que se aplican a una relación jurídica sin importar cuál sea la ley que rija el contrato, prevaleciendo sobre cualquier otra." },
    { question: "¿Qué reglas especiales establece el CCCN para los contratos de consumo internacionales?", answer: "Establece reglas protectorias por la desigualdad de las partes, ofreciendo foros a elección del consumidor y limitando la elección de foro." },
    { question: "En ausencia de elección de foro, ¿qué opciones jurisdiccionales tiene el actor según el Art. 2650 CCCN?", answer: "Puede demandar ante el juez del domicilio del demandado , del lugar de cumplimiento de cualquiera de las obligaciones , o del lugar de la agencia que participó en la negociación." },
    { question: "Defina la cláusula INCOTERM 'FOB' (Free on Board).", answer: "Es una regla internacional que, una vez pactada, pone los riesgos por pérdida o avería de la mercadería a cargo del comprador desde el momento del embarque." },
    
    // --- TEMA 6: Sociedades Extranjeras ---
    { question: "¿Qué debe hacer una sociedad extranjera para realizar 'actos aislados' en Argentina según el Art. 118 de la LGS?", answer: "No necesita inscribirse, pero debe estar habilitada por las leyes de su país y cumplir las formalidades de la ley argentina para el acto." },
    { question: "¿Qué sucede si una sociedad constituida en el extranjero tiene su sede o principal objeto en Argentina (Art. 124 LGS)?", answer: "Se la considerará como una sociedad local a los efectos de su constitución, reforma y contralor, sometiéndose al régimen argentino." },
    { question: "¿Qué criterio aplica el juez si el tipo societario extranjero es desconocido en Argentina (Art. 119 LGS)?", answer: "El juez determina las formalidades aplicando el criterio de máximo rigor, usualmente asimilándolo a una sociedad anónima." },
    { question: "¿Qué responsabilidad asumen los representantes de sociedades extranjeras en Argentina según el Art. 121 LGS?", answer: "Asumen las mismas responsabilidades que los administradores de las sociedades constituidas en el país." },
    { question: "Según la LGS (Art. 123), ¿qué debe hacer una sociedad extranjera para ejercer habitualmente actos de su objeto social?", answer: "Debe acreditar su existencia, fijar un domicilio en Argentina, publicar e inscribir sus documentos y designar un representante." },
    { question: "¿Qué ley rige la 'capacidad genérica' (existencia, constitución) de una sociedad extranjera?", answer: "Se rige por la ley del lugar de constitución (lex societatis), según la CIDIP II." },
    { question: "¿Qué obligación contable impone el Art. 120 de la LGS a las sociedades extranjeras con sucursal en Argentina?", answer: "Deben llevar contabilidad separada en Argentina y someterse al contralor correspondiente." },

    // --- TEMA 7: Responsabilidad Civil ---
    { question: "¿Qué opciones de jurisdicción tiene la víctima en un caso de responsabilidad civil internacional (Art. 2656 CCCN)?", answer: "Puede elegir demandar ante los jueces del domicilio del demandado , del lugar donde se produjo el hecho generador , o del lugar donde el daño produce sus efectos directos." },
    { question: "¿Qué ley se aplica como regla general en un caso de responsabilidad civil internacional (Art. 2657 CCCN)?", answer: "Como regla general, se aplica el derecho del país donde se produce el daño." },
    { question: "En 'Aguinda Salazar c/ Chevron', ¿por qué la CSJN rechazó ejecutar la sentencia ecuatoriana?", answer: "Porque Chevron Corp. no tenía presencia jurídica ni bienes en Argentina , y ejecutar la sentencia violaría el orden público y el debido proceso consagrados en la Constitución." },
    { question: "¿Cuál es la excepción a la regla general de la ley aplicable en responsabilidad civil?", answer: "Si el responsable y la víctima tienen su domicilio en el mismo país al momento del daño, se aplica el derecho de dicho país." },
    { question: "Diferencie la 'Teoría de la Ubicuidad' de la 'Teoría del Mosaico'.", answer: "La de la Ubicuidad (preferida en Argentina) permite a un juez decidir sobre la totalidad del daño. La del Mosaico exige una sentencia en cada país afectado para reparar el daño ocurrido en ese territorio." },
    { question: "¿Por qué se dice que las normas sobre derecho aplicable en responsabilidad civil son 'normas de conflicto'?", answer: "Porque no dan la solución directa al caso, sino que remiten al ordenamiento jurídico de otro Estado para encontrar la solución." },
    { question: "En el rechazo del exequátur en 'Aguinda Salazar', ¿qué normas específicas se citaron para fundar la violación al orden público?", answer: "El Artículo 18 de la Constitución Nacional y el Artículo 12 de la Convención Interamericana sobre Cumplimiento de Medidas Cautelares (CIDIP II)." }
];

    const finalMessages = [
        "Tu conocimiento del derecho extranjero es un hecho a probar y, francamente, no lo probaste. ¡Necesitas un exequatur urgente para estas respuestas!", // 0 correctas
        "Esto es un claro caso de fraude a la ley... ¡le estás escapando al aprobado! A aplicar la *lex fori* (del estudio).", // 1 correcta
        "Tus respuestas tienen un vicio de forma que afecta el orden público internacional de mi corrección. ¡Nulidad absoluta!", // 2 correctas
        "La conexión entre tus respuestas y la correcta es manifiestamente la más débil. Hay que aplicar la cláusula de excepción y estudiar más.", // 3 correctas
        "Parece que aplicaste la 'Teoría del Mosaico'. Aciertos dispersos en un mar de jurisdicciones incorrectas.", // 4 correctas
        "Estás en el umbral. Ni prórroga de jurisdicción ni foro de necesidad, solo te queda el recurso de estudiar un poco más. ¡Mitad de camino!", // 5 correctas
        "Lograste la capacidad específica para aprobar, pero falta la capacidad de ejercicio habitual. ¡A seguir así!", // 6 correctas
        "¡Buen trabajo! Estás aplicando el principio *favor creditoris*, pero el acreedor es tu nota. ¡Ya casi lo tienes!", // 7 correctas
        "Tu conocimiento tiene autonomía de la voluntad conflictual y material. Eliges bien la ley aplicable y el contenido. ¡Excelente!", // 8 correctas
        "Tus respuestas son normas internacionalmente imperativas. Se aplican sin importar la pregunta. ¡Prácticamente un jurista de la CSJN!", // 9 correctas
        "¡Perfección! Eres la 'Teoría de la Ubicuidad' del conocimiento. Competente en el lugar del hecho y en el de todos sus efectos. ¡Felicitaciones, colega!" // 10 correctas
    ];

    // Referencias a elementos del DOM
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const answerBtn = document.getElementById('answer-btn');
    const correctBtn = document.getElementById('correct-btn');
    const incorrectBtn = document.getElementById('incorrect-btn');
    const backBtn = document.getElementById('back-btn');
    
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const endScreen = document.getElementById('end-screen');
    
    const questionText = document.getElementById('question-text');
    const answerText = document.getElementById('answer-text');
    const answerArea = document.getElementById('answer-area');
    const questionCounterText = document.getElementById('question-counter');
    const ratingControls = document.getElementById('rating-controls');
    
    const finalScoreText = document.getElementById('final-score');
    const finalMessageText = document.getElementById('final-message');

    // Variables de estado del juego
    let masterQuestionPool = [];
    let sessionHistory = [];
    let currentQuestionIndex = -1;
    const TOTAL_QUESTIONS = 10;

    function startGame() {
        startScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        
        // Reiniciar estado
        sessionHistory = [];
        currentQuestionIndex = -1;
        masterQuestionPool = [...questionBank]; // Copia maestra para no repetir preguntas
        
        // Avanzar a la primera pregunta
        advanceToNextQuestion();
    }

    function advanceToNextQuestion() {
        // Si hemos respondido las 10 preguntas, terminamos el juego
        if (sessionHistory.length >= TOTAL_QUESTIONS && currentQuestionIndex === TOTAL_QUESTIONS - 1) {
            endGame();
            return;
        }

        currentQuestionIndex++;

        // Si estamos avanzando a una pregunta nueva (no navegando hacia atrás)
        if (currentQuestionIndex >= sessionHistory.length) {
            // Seleccionar una pregunta al azar que no haya sido usada
            const questionIndex = Math.floor(Math.random() * masterQuestionPool.length);
            const newQuestion = masterQuestionPool.splice(questionIndex, 1)[0];
            
            // Añadir al historial de la sesión
            sessionHistory.push({
                question: newQuestion,
                userAnswer: null // null indica sin respuesta
            });
        }
        
        renderQuestionState();
    }

    function goBack() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestionState();
        }
    }

    function renderQuestionState() {
        const state = sessionHistory[currentQuestionIndex];
        
        // Actualizar textos
        questionCounterText.innerText = `Pregunta ${currentQuestionIndex + 1} de ${TOTAL_QUESTIONS}`;
        questionText.innerText = state.question.question;
        answerText.innerText = state.question.answer;

        // Lógica de visibilidad de botones
        backBtn.classList.remove('hidden');
        backBtn.disabled = currentQuestionIndex === 0;

        if (state.userAnswer === null) {
            // Pregunta no respondida
            answerArea.classList.add('hidden');
            ratingControls.classList.add('hidden');
            answerBtn.classList.remove('hidden');
        } else {
            // Pregunta ya respondida (navegando hacia atrás o corrigiendo)
            answerArea.classList.remove('hidden');
            ratingControls.classList.remove('hidden');
            answerBtn.classList.add('hidden');
        }
    }
    
    function showAnswer() {
        answerArea.classList.remove('hidden');
        answerBtn.classList.add('hidden');
        ratingControls.classList.remove('hidden');
    }

    function handleAnswer(isCorrect) {
        sessionHistory[currentQuestionIndex].userAnswer = isCorrect ? 'correct' : 'incorrect';
        advanceToNextQuestion();
    }
    
    function endGame() {
        quizScreen.classList.add('hidden');
        endScreen.classList.remove('hidden');

        // Calcular puntaje final desde el historial
        const correctCount = sessionHistory.filter(item => item.userAnswer === 'correct').length;
        const incorrectCount = TOTAL_QUESTIONS - correctCount;

        finalScoreText.innerText = `Puntuación Final: ${correctCount} Correctas, ${incorrectCount} Incorrectas.`;
        finalMessageText.innerText = finalMessages[correctCount];
    }

    // Event Listeners
    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', startGame);
    answerBtn.addEventListener('click', showAnswer);
    backBtn.addEventListener('click', goBack);
    correctBtn.addEventListener('click', () => handleAnswer(true));
    incorrectBtn.addEventListener('click', () => handleAnswer(false));
});
