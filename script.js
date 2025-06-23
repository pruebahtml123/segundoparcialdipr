document.addEventListener('DOMContentLoaded', () => {
    // Banco de preguntas y respuestas basado en el documento
    const questionBank = [
        { question: "¿Cuál es la finalidad esencial de la restitución internacional de menores?", answer: "La finalidad es lograr el retorno inmediato de un niño a su país de residencia habitual cuando ha sido trasladado o retenido de forma ilícita, para que los jueces de esa residencia decidan sobre el fondo. " },
        { question: "¿Qué tratado es el instrumento fundamental en materia de restitución de menores para Argentina?", answer: "La Convención de La Haya de 1980 sobre los Aspectos Civiles de la Sustracción Internacional de Menores (CH 1980). " },
        { question: "¿Qué es la 'residencia habitual' y por qué es un concepto tan importante?", answer: "Es el centro de gravedad de la vida del menor, que implica estabilidad y permanencia. Es crucial porque determina si un traslado o retención es ilícito. " },
        { question: "Mencione dos excepciones comunes para denegar un pedido de restitución.", answer: "1) Que exista un grave riesgo físico o psíquico para el menor. 2) Que el menor, con edad y madurez suficientes, se oponga a la restitución. " },
        { question: "¿Qué enseñó el caso 'V., M. c. S. Y., C. R.' de la CSJN sobre la residencia habitual?", answer: "Enseñó que una corta estadía y la ambigüedad en la intención de los padres de mudarse no son suficientes para configurar una nueva residencia habitual. " },
        { question: "¿Cuál es la postura de Argentina respecto a la adopción internacional de niños que residen en el país?", answer: "Argentina mantiene una posición contraria y desfavorable, dando prioridad a la adopción nacional, basado en el Principio de Subsidiariedad. " },
        { question: "Según el CCCN, ¿qué jueces tienen jurisdicción para decidir sobre la adopción de un niño con domicilio en Argentina?", answer: "Los jueces argentinos son exclusivamente competentes. " },
        { question: "¿Qué ley se aplica a los requisitos y efectos de la adopción en Argentina?", answer: "Se aplica el derecho del domicilio que tenía el adoptado al momento de otorgarse la adopción. " },
        { question: "En el caso 'S., F. A. c. L., C. L.', ¿qué rol destacó la Corte Suprema como crucial en los procesos de adopción?", answer: "La Corte destacó que la intervención del Ministerio Público (Fiscal y Pupilar) es necesaria y su omisión puede invalidar los pronunciamientos. " },
        { question: "¿Qué principio rige la regulación de los alimentos a nivel internacional y qué busca proteger?", answer: "Se rige por el principio 'Favor Creditoris', que busca proteger al acreedor alimentario, considerado la parte más vulnerable. " },
        { question: "¿Cómo se determina el derecho aplicable a una obligación alimentaria internacional?", answer: "Se aplica el derecho del domicilio del acreedor o el del deudor, según cuál de los dos resulte más favorable al interés del acreedor. " },
        { question: "¿Qué es y cuándo se aplica el 'Foro de Necesidad'?", answer: "Es un principio que permite a jueces argentinos intervenir excepcionalmente para evitar una denegación de justicia, cuando no es razonable exigir que la demanda se presente en el extranjero. " },
        { question: "Según el CCCN, ¿qué ley se aplica para regir el divorcio?", answer: "El divorcio se rige por el derecho del último domicilio de los cónyuges. " },
        { question: "¿Qué reafirmó el fallo 'Z., A. A. y otros' respecto al orden público argentino?", answer: "Reafirmó que la monogamia y el impedimento de ligamen (no poder casarse si ya se está casado) integran el orden público internacional argentino. " },
        { question: "¿Cuál es el principio rector en materia de contratos internacionales?", answer: "El principio rector es la autonomía de la voluntad, que permite a las partes elegir el derecho que regirá el contrato. " },
        { question: "Si las partes no eligen un derecho aplicable, ¿qué ley rige un contrato internacional según el CCCN?", answer: "Se rige por las leyes y usos del país del lugar de cumplimiento. " },
        { question: "En el caso 'Gobierno de Perú c. SIFAR', ¿por qué la Corte rechazó la demanda de Perú?", answer: "Porque las partes habían pactado la cláusula FOB, la cual transfería los riesgos al comprador (Perú) desde el embarque. El convenio libremente pactado fue considerado el derecho aplicable. " },
        { question: "¿Qué debe hacer una sociedad extranjera para ejercer su actividad de forma 'habitual' en Argentina?", answer: "Debe acreditar su existencia, fijar un domicilio en Argentina, inscribir su contrato y designar un representante legal. " },
        { question: "¿Qué sucede si una sociedad constituida en el extranjero tiene su sede principal o cumple su objeto principal en Argentina?", answer: "Se la considerará como una sociedad local a los fines de cumplir con las formalidades de constitución y control. " },
        { question: "¿Qué opciones de jurisdicción tiene la víctima en un caso de responsabilidad civil internacional?", answer: "Puede elegir demandar ante los jueces del domicilio del demandado, del lugar donde ocurrió el hecho, o del lugar donde el daño produjo sus efectos directos. " },
        { question: "¿Qué ley se aplica como regla general en un caso de responsabilidad civil internacional?", answer: "Como regla general, se aplica el derecho del país donde se produce el daño. " },
        { question: "En 'Aguinda Salazar c/ Chevron', ¿por qué la CSJN rechazó ejecutar la sentencia ecuatoriana?", answer: "Porque la empresa condenada no tenía bienes ni presencia jurídica en Argentina, y ejecutar la sentencia violaría el orden público y el debido proceso. " },
        { question: "¿Qué es la autonomía de la voluntad 'material' en los contratos internacionales?", answer: "Es la facultad de las partes para crear disposiciones contractuales propias que pueden incluso desplazar normas coactivas del derecho que eligieron. " },
        { question: "¿Qué son las normas internacionalmente imperativas o 'de policía'?", answer: "Son normas de orden público que se aplican a una relación jurídica sin importar cuál sea la ley que rige el contrato, prevaleciendo sobre cualquier otra. " }
    ];

    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const answerBtn = document.getElementById('answer-btn');
    const nextBtn = document.getElementById('next-btn');

    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const endScreen = document.getElementById('end-screen');

    const questionText = document.getElementById('question-text');
    const answerText = document.getElementById('answer-text');
    const answerArea = document.getElementById('answer-area');
    const questionCounterText = document.getElementById('question-counter');

    let questionPool = [];
    let currentQuestion = {};
    let questionCounter = 0;
    const TOTAL_QUESTIONS = 10;

    function startGame() {
        startScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        
        questionCounter = 0;
        // Hacemos una copia del banco de preguntas para poder manipularlo
        questionPool = [...questionBank];
        
        displayNextQuestion();
    }

    function displayNextQuestion() {
        if (questionCounter >= TOTAL_QUESTIONS) {
            endGame();
            return;
        }

        questionCounter++;
        questionCounterText.innerText = `Pregunta ${questionCounter} de ${TOTAL_QUESTIONS}`;

        // Seleccionar y remover una pregunta al azar para no repetirla
        const questionIndex = Math.floor(Math.random() * questionPool.length);
        currentQuestion = questionPool.splice(questionIndex, 1)[0];

        questionText.innerText = currentQuestion.question;
        answerText.innerText = currentQuestion.answer;

        answerArea.classList.add('hidden');
        nextBtn.classList.add('hidden');
        answerBtn.classList.remove('hidden');
    }

    function showAnswer() {
        answerArea.classList.remove('hidden');
        answerBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    }
    
    function endGame() {
        quizScreen.classList.add('hidden');
        endScreen.classList.remove('hidden');
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', startGame);
    answerBtn.addEventListener('click', showAnswer);
    nextBtn.addEventListener('click', displayNextQuestion);
});