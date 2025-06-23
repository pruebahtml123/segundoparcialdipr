document.addEventListener('DOMContentLoaded', () => {
    // Banco de preguntas masivo y limpio.
    const questionBank = [
        // --- TEMA 1: Restitución Internacional de Menores (25 preguntas) ---
        { topic: "Restitución Internacional de Menores", question: "¿Cuál es la finalidad esencial de la restitución internacional de menores?", answer: "Lograr el retorno inmediato del niño a su residencia habitual cuando fue trasladado o retenido ilícitamente, para que los jueces de esa residencia decidan sobre el fondo de la custodia." },
        { topic: "Restitución Internacional de Menores", question: "¿Qué tratado es el instrumento fundamental en esta materia para Argentina?", answer: "La Convención de La Haya de 1980 sobre los Aspectos Civiles de la Sustracción Internacional de Menores (CH 1980), aprobada por Ley 23.857." },
        { topic: "Restitución Internacional de Menores", question: "¿Qué es la 'residencia habitual' y qué se requiere de la intención de los progenitores para cambiarla?", answer: "Es el centro de gravedad de la vida del menor, que presupone estabilidad. Requiere una intención clara y compartida de los progenitores para establecer un nuevo hogar, no una simple ambigüedad." },
        { topic: "Restitución Internacional de Menores", question: "Mencione tres excepciones comunes para denegar una restitución según el Art. 13 de la CH 1980.", answer: "1) Grave riesgo físico o psíquico para el menor; 2) Oposición del menor con edad y madurez suficientes; 3) Aquerenciamiento (integración al nuevo entorno tras más de un año)." },
        { topic: "Restitución Internacional de Menores", question: "¿Qué enseñó el caso 'V., M. c. S. Y., C. R.' sobre el concepto de residencia habitual?", answer: "Enseñó que una corta estadía y la ambigüedad en la intención de los padres no configuran una nueva residencia habitual, revocando una restitución a Francia." },
        { topic: "Restitución Internacional de Menores", question: "¿Cuál es la diferencia entre un traslado ilícito y una retención ilícita?", answer: "El traslado ilícito es llevar al menor a otro Estado violando un derecho de custodia. La retención ilícita es cuando el menor permanece más tiempo del consentido." },
        { topic: "Restitución Internacional de Menores", question: "¿Qué rol cumple el Ministerio Público (Fiscal y Pupilar) en los procesos de restitución?", answer: "Su rol es esencial para proteger los intereses del menor, y su omisión puede invalidar las decisiones judiciales." },
        { topic: "Restitución Internacional de Menores", question: "¿Cómo se relaciona la Convención de La Haya de 1980 con la Convención sobre los Derechos del Niño (CDN)?", answer: "No hay incompatibilidad; ambas protegen el interés superior del niño, que es un principio de jerarquía constitucional (Art. 75 inc. 22 CN)." },
        { topic: "Restitución Internacional de Menores", question: "¿Qué establece el CCCN en su Art. 2642 para los casos de restitución?", answer: "Adapta los principios de los convenios si no son directamente aplicables, siempre bajo la primacía del interés superior del niño." },
        { topic: "Restitución Internacional de Menores", question: "¿Puede el orden público internacional ser una causa para denegar la restitución?", answer: "Sí, puede denegarse la restitución si viola principios fundamentales del Estado requerido en materia de derechos humanos." },
        { topic: "Restitución Internacional de Menores", question: "Además del grave riesgo o la oposición del menor, ¿qué otra excepción contempla el Art. 13 de la CH 1980 respecto al progenitor reclamante?", answer: "La falta de ejercicio efectivo del derecho de custodia por parte del progenitor o su consentimiento/aceptación posterior al traslado." },
        { topic: "Restitución Internacional de Menores", question: "¿Por qué es fundamental la celeridad procesal en estos casos?", answer: "Porque es un mandato central para proteger el interés del niño y su demora compromete la responsabilidad del Estado argentino." },
        { topic: "Restitución Internacional de Menores", question: "La 'residencia habitual' ¿es un concepto de hecho o de derecho?", answer: "Es un concepto de hecho, que presupone estabilidad y permanencia, y no se asimila al domicilio legal." },
        { topic: "Restitución Internacional de Menores", question: "El proceso de restitución, ¿resuelve el fondo de la controversia familiar (la tenencia definitiva)?", answer: "No, el proceso es urgente y acotado, enfocado únicamente en el retorno del menor, no en el fondo de las disputas familiares." },
        { topic: "Restitución Internacional de Menores", question: "¿Qué es el 'aquerenciamiento'?", answer: "Es la integración del menor en su nuevo entorno tras un período de tiempo (generalmente un año o más), que puede ser una excepción a la restitución." },
        { topic: "Restitución Internacional de Menores", question: "En el caso 'V., M.', ¿qué factor fue decisivo para negar la existencia de una residencia habitual en Francia?", answer: "La corta estadía de la niña en Burdeos y la ambigüedad en la intención de los progenitores de establecerse allí permanentemente." },
        { topic: "Restitución Internacional de Menores", question: "¿Qué significa que el objetivo de la restitución es restablecer el 'statu quo' anterior?", answer: "Significa que se busca volver a la situación de hecho previa al acto ilícito, para que los jueces de la residencia habitual del niño sean los que decidan." },
        { topic: "Restitución Internacional de Menores", question: "¿Qué convención internacional tiene jerarquía constitucional en Argentina y es relevante en estos casos?", answer: "La Convención sobre los Derechos del Niño (CDN), por el Art. 75 inc. 22 de la Constitución Nacional." },
        { topic: "Restitución Internacional de Menores", question: "La oposición del menor a ser restituido, ¿es siempre vinculante para el juez?", answer: "No, el juez debe evaluarla teniendo en cuenta la edad y madurez del menor para formar un juicio propio." },
        { topic: "Restitución Internacional de Menores", question: "¿Qué es una situación 'intolerable' como excepción a la restitución?", answer: "Es una situación que expone al menor a un peligro de tal gravedad que va más allá de los simples inconvenientes de una adaptación a un nuevo medio." },
        { topic: "Restitución Internacional de Menores", question: "Si los padres se mudan con la intención de probar la vida en otro país, pero sin un acuerdo claro de permanencia, ¿se establece una nueva residencia habitual?", answer: "No, la jurisprudencia (como en el caso 'V., M.') indica que una intención ambigua o de prueba no es suficiente para cambiar la residencia habitual." },
        { topic: "Restitución Internacional de Menores", question: "El derecho de custodia que protege la CH 1980, ¿debe estar conferido por una sentencia judicial?", answer: "No necesariamente, puede derivar de la ley, de una decisión judicial o administrativa, o de un acuerdo vigente según la ley del Estado de residencia habitual." },
        { topic: "Restitución Internacional de Menores", question: "¿El proceso de restitución es de naturaleza contenciosa o voluntaria?", answer: "Es de naturaleza contenciosa y urgente, tramitado por un proceso sumarísimo." },
        { topic: "Restitución Internacional de Menores", question: "La Convención de La Haya de 1980, ¿se aplica si no hay un derecho de custodia violado?", answer: "No, el presupuesto esencial es que el traslado o retención se haya producido en violación a un derecho de custodia existente." },
        { topic: "Restitución Internacional de Menores", question: "¿Qué principio guía toda la interpretación y aplicación de las normas de restitución?", answer: "El principio rector del 'interés superior del niño'." },

        // --- TEMA 2: Adopción Internacional (25 preguntas) ---
        { topic: "Adopción Internacional", question: "¿Cuál es la postura general de Argentina y en qué principio se basa?", answer: "Tiene una postura contraria y desfavorable. Se basa en el Principio de Subsidiariedad, que prioriza la colocación del niño en su Estado de origen." },
        { topic: "Adopción Internacional", question: "Según el CCCN (Art. 2635), ¿qué jueces tienen jurisdicción para la adopción de un niño domiciliado en Argentina?", answer: "Los jueces argentinos son exclusivamente competentes para la declaración de adoptabilidad, guarda y otorgamiento de la adopción." },
        { topic: "Adopción Internacional", question: "¿Qué ley rige los requisitos y efectos de la adopción en Argentina según el Art. 2636 del CCCN?", answer: "Se rigen por el derecho del domicilio del adoptado al tiempo del otorgamiento de la adopción." },
        { topic: "Adopción Internacional", question: "¿Qué exige el Art. 600 del CCCN a los extranjeros para poder adoptar en Argentina?", answer: "Exige 5 años de residencia permanente en el país, lo que limita de hecho la adopción internacional." },
        { topic: "Adopción Internacional", question: "En 'S., F. A. c. L., C. L.', ¿por qué la CSJN enfatizó el control del orden público internacional?", answer: "Lo enfatizó como límite al reconocimiento de la sentencia, especialmente ante denuncias de adopciones irregulares en el lugar de origen (Colima, México)." },
        { topic: "Adopción Internacional", question: "¿Es posible convertir una adopción simple extranjera en plena? ¿Qué se requiere?", answer: "Sí (Art. 2638 CCCN). Se requiere que cumpla los requisitos argentinos y se cuente con el consentimiento del adoptante y adoptado (y Ministerio Público si es menor)." },
        { topic: "Adopción Internacional", question: "¿Cuál es la finalidad de la postura cautelosa de Argentina en la adopción internacional?", answer: "Busca evitar el tráfico, la explotación internacional de niños y el desarraigo." },
        { topic: "Adopción Internacional", question: "Para reconocer una adopción extranjera (Art. 2637 CCCN), ¿qué debe tenerse en cuenta además del interés superior del niño?", answer: "Se deben tener en cuenta los vínculos estrechos del caso con la República, lo que se conoce como 'orden público de proximidad'." },
        { topic: "Adopción Internacional", question: "¿Qué establece el Tratado de Montevideo de 1940 (Art. 23) sobre la ley aplicable a la adopción?", answer: "Somete la adopción a las leyes de los domicilios de las partes 'en cuanto sean concordantes', lo que es una conexión acumulativa y restrictiva." },
        { topic: "Adopción Internacional", question: "En el proceso de exequátur de una adopción, ¿se revisa el fondo del asunto?", answer: "No, no se revisa el fondo. Solo se evalúa la idoneidad para producir efectos, controlando la autenticidad, legalidad y el resguardo del orden público internacional." },
        { topic: "Adopción Internacional", question: "¿Qué significa el 'Principio de Subsidiariedad'?", answer: "Significa que la adopción internacional solo se considera como una alternativa después de haber agotado las posibilidades de colocación del niño en una familia en su país de origen." },
        { topic: "Adopción Internacional", question: "En el fallo 'S., F. A. c. L., C. L.', ¿cuál fue la consecuencia de la falta de debida intervención del Ministerio Público en la instancia de Cámara?", answer: "La CSJN revocó la decisión de Cámara, destacando que la omisión de esta intervención puede acarrear la invalidez de los pronunciamientos." },
        { topic: "Adopción Internacional", question: "¿Qué ley rige la anulación o revocación de una adopción?", answer: "Se rige por el derecho del lugar de su otorgamiento o por el del domicilio del adoptado." },
        { topic: "Adopción Internacional", question: "El requisito de 5 años de residencia del Art. 600 CCCN, ¿se aplica a ciudadanos argentinos?", answer: "No, el artículo aclara que no se exige a quienes sean de nacionalidad argentina o naturalizados." },
        { topic: "Adopción Internacional", question: "¿Qué es el 'orden público de proximidad'?", answer: "Es un control que verifica si el caso tiene vínculos suficientemente estrechos con Argentina como para justificar la aplicación de ciertos principios fundamentales del derecho argentino." },
        { topic: "Adopción Internacional", question: "El caso 'C., P. N.' de Rosario es un ejemplo de reconocimiento y conversión exitosa de una adopción de qué país?", answer: "De una adopción haitiana, que se convirtió en adopción plena en Argentina." },
        { topic: "Adopción Internacional", question: "¿Qué es el 'exequátur'?", answer: "Es el procedimiento judicial por el cual se le concede a una sentencia dictada en el extranjero la misma fuerza ejecutoria que a las sentencias dictadas en Argentina." },
        { topic: "Adopción Internacional", question: "El 'interés superior del niño' en adopción internacional, ¿qué implica?", answer: "Implica que todas las decisiones deben priorizar el bienestar y la protección integral del niño, siendo el principio rector de toda la materia." },
        { topic: "Adopción Internacional", question: "¿Qué se busca evitar con el principio que impide el desarraigo del niño?", answer: "Se busca evitar que el niño sea separado de su cultura, idioma y entorno social de origen, lo cual es considerado perjudicial para su desarrollo." },
        { topic: "Adopción Internacional", question: "¿Cuál es el rol del Ministerio Público en un proceso de exequátur de adopción?", answer: "Es esencial para garantizar el debido proceso, controlar la legalidad y defender los intereses del menor, especialmente si hay sospechas de irregularidades." },
        { topic: "Adopción Internacional", question: "La jurisdicción exclusiva de los jueces argentinos (Art. 2635 CCCN), ¿se basa en la nacionalidad del niño?", answer: "No, se basa en el domicilio del niño en la República Argentina." },
        { topic: "Adopción Internacional", question: "Para la conversión de una adopción simple en plena, ¿se necesita el consentimiento del niño?", answer: "Sí, se necesita el consentimiento del adoptado. Si es menor de edad, debe intervenir el Ministerio Público." },
        { topic: "Adopción Internacional", question: "¿Por qué el fallo 'S., F. A.' es emblemático para el exequátur en Argentina?", answer: "Porque ilustra el riguroso control judicial que se aplica para asegurar la compatibilidad de la sentencia extranjera con los principios del derecho argentino." },
        { topic: "Adopción Internacional", question: "¿El control de orden público es estático o dinámico?", answer: "Es dinámico, mutable y variable, adaptándose a los principios fundamentales de Argentina en un momento histórico determinado." },
        { topic: "Adopción Internacional", question: "La 'conexión acumulativa' de los Tratados de Montevideo, ¿facilita o restringe las adopciones?", answer: "Las restringe, ya que exige la concordancia de las leyes de los domicilios de ambas partes, lo cual es más difícil de cumplir." },

        // --- TEMA 3: Alimentos (25 preguntas) ---
        { topic: "Alimentos", question: "¿Qué principio rige la regulación de los alimentos a nivel internacional y qué busca proteger?", answer: "Se rige por el principio *Favor Creditoris*, que busca proteger al acreedor alimentario, considerado la parte más vulnerable de la relación." },
        { topic: "Alimentos", question: "¿Cómo se determina el derecho aplicable a una obligación alimentaria según el Art. 2630 del CCCN?", answer: "Se aplica el derecho del domicilio del acreedor o el del deudor, el que resulte más favorable al interés del acreedor, lo que implica una tarea comparativa para el juez." },
        { topic: "Alimentos", question: "¿Qué es y cuándo se aplica el 'Foro de Necesidad' (Art. 2602 CCCN)?", answer: "Permite a jueces argentinos intervenir excepcionalmente para evitar la denegación de justicia, aunque no tengan jurisdicción, si hay contacto suficiente con el país." },
        { topic: "Alimentos", question: "¿Cómo debe un juez argentino aplicar el derecho extranjero en un caso de alimentos?", answer: "Debe interpretarlo como lo harían los jueces del Estado al que ese derecho pertenece, considerándolo un verdadero derecho y no un simple hecho (Teoría del Uso Jurídico)." },
        { topic: "Alimentos", question: "¿Por qué se dice que las obligaciones alimentarias son una 'categoría autónoma' en el DIPR?", answer: "Porque tienen un tratamiento y reglas propias que buscan específicamente proteger al acreedor, diferenciándose de otras obligaciones civiles." },
        { topic: "Alimentos", question: "Además de los foros generales, ¿qué jurisdicción especial se abre para cónyuges o convivientes que reclaman alimentos?", answer: "Pueden demandar ante el juez del último domicilio conyugal o convivencial efectivo, o el que entendió en la disolución del vínculo." },
        { topic: "Alimentos", question: "Mencione tres fuentes convencionales clave en materia de alimentos.", answer: "1) Convención de Nueva York de 1956; 2) Convención Interamericana sobre Obligaciones Alimentarias (CIDIP IV) de 1989; 3) Tratados de Montevideo (1889 y 1940)." },
        { topic: "Alimentos", question: "El Art. 2629 CCCN sobre jurisdicción, ¿ofrece foros alternativos o concurrentes?", answer: "Ofrece foros concurrentes a elección del actor (el acreedor), para garantizar la tutela judicial efectiva." },
        { topic: "Alimentos", question: "¿Qué ley rige los acuerdos alimentarios celebrados entre las partes?", answer: "A elección de las partes, puede ser el derecho del domicilio o residencia habitual de cualquiera de ellas al momento de celebrar el acuerdo." },
        { topic: "Alimentos", question: "La elección de la ley en un acuerdo alimentario, ¿es ilimitada?", answer: "No, tiene como límite que no se pueden dejar de lado los objetivos y la naturaleza protectora de la institución alimentaria." },
        { topic: "Alimentos", question: "En el ejemplo del matrimonio que se traslada a Alemania, ¿por qué se aplicó la ley alemana a pesar de que la madre y los hijos regresaron a Argentina?", answer: "Porque en ese caso hipotético, se determinó que la ley alemana era la más favorable para los menores (los acreedores)." },
        { topic: "Alimentos", question: "El principio del 'Interés Superior del Niño', ¿es aplicable en materia alimentaria?", answer: "Sí, es un principio rector y primordial, que asegura el mayor bienestar y protección especial del niño o adolescente acreedor." },
        { topic: "Alimentos", question: "¿Qué significa la 'flexibilidad de conexiones' en materia alimentaria?", answer: "Significa que las normas utilizan conexiones múltiples, alternativas o subsidiarias para maximizar las posibilidades de protección del acreedor." },
        { topic: "Alimentos", question: "La 'Teoría del Uso Jurídico' para aplicar derecho extranjero, ¿qué implica para el juez?", answer: "Implica que el juez argentino debe actuar como si fuera un juez del país de origen de la norma, estableciendo su contenido e interpretándola como tal." },
        { topic: "Alimentos", question: "El 'Foro de Necesidad' ¿es una regla de jurisdicción ordinaria?", answer: "No, es un criterio excepcional de jurisdicción, de carácter protectorio, para casos donde no hay una jurisdicción ordinaria clara." },
        { topic: "Alimentos", question: "Para que un juez argentino asuma jurisdicción por 'foro de necesidad', ¿qué dos condiciones deben cumplirse?", answer: "1) Que no sea razonable exigir la demanda en el extranjero; y 2) que el caso tenga contacto suficiente con Argentina." },
        { topic: "Alimentos", question: "¿Cuál es el objetivo de ofrecer múltiples foros jurisdiccionales al acreedor?", answer: "Facilitar el acceso a la justicia y garantizar la tutela judicial efectiva de la parte más vulnerable." },
        { topic: "Alimentos", question: "La tarea 'comparativa' del juez al aplicar el Art. 2630 CCCN, ¿en qué consiste?", answer: "Consiste en analizar el derecho del domicilio del acreedor y el del deudor, y elegir aplicar aquel que resulte más beneficioso para el acreedor alimentario." },
        { topic: "Alimentos", question: "¿Qué convención específica sobre alimentos rige en el ámbito interamericano?", answer: "La Convención Interamericana sobre Obligaciones Alimentarias de 1989 (CIDIP IV)." },
        { topic: "Alimentos", question: "Si el deudor tiene bienes en Argentina pero no reside aquí, ¿se puede demandar por alimentos en el país?", answer: "Sí, el Art. 2629 CCCN lo permite, si es razonable en función de las circunstancias del caso." },
        { topic: "Alimentos", question: "El principio 'favor creditoris' ¿se aplica también a la elección de la ley aplicable?", answer: "Sí, se refleja directamente en el Art. 2630 CCCN, que ordena aplicar la ley que más favorezca al interés del acreedor." },
        { topic: "Alimentos", question: "¿Qué protege la Convención de Nueva York de 1956?", answer: "Protege la obtención de los alimentos en el extranjero, facilitando el reconocimiento y ejecución de sentencias alimentarias." },
        { topic: "Alimentos", question: "La jurisdicción en alimentos, ¿puede ser elegida por el deudor?", answer: "No, las opciones de jurisdicción son a elección exclusiva del acreedor." },
        { topic: "Alimentos", question: "El carácter protectorio del régimen alimentario, ¿es una manifestación del orden público internacional?", answer: "Sí, los principios fundamentales de la obligación alimentaria, como la protección del vulnerable, forman parte del orden público." },
        { topic: "Alimentos", question: "La autonomía de la voluntad en los acuerdos alimentarios, ¿permite pactar la renuncia a los alimentos futuros?", answer: "No, porque eso iría en contra de los objetivos de la institución y la protección de la parte vulnerable." },

        // --- TEMA 4: Matrimonio y Divorcio (25 preguntas) ---
        { topic: "Matrimonio y Divorcio", question: "Según el CCCN (Art. 2626), ¿qué ley y qué jurisdicción se aplican para regir el divorcio?", answer: "Tanto la jurisdicción como el derecho aplicable se rigen por el del último domicilio de los cónyuges, siendo una conexión rígida." },
        { topic: "Matrimonio y Divorcio", question: "¿Qué ley rige los efectos patrimoniales del matrimonio (régimen de bienes) si no hay convención, según el Art. 2625 del CCCN?", answer: "Se rigen por el derecho del primer domicilio conyugal." },
        { topic: "Matrimonio y Divorcio", question: "¿Qué reafirmó el fallo 'Z., A. A. y otros' respecto al orden público argentino en materia matrimonial?", answer: "Reafirmó que la monogamia y el impedimento de ligamen (no poder casarse si ya se está casado) integran el orden público internacional argentino." },
        { topic: "Matrimonio y Divorcio", question: "¿Qué es el orden público internacional y por qué se dice que es un concepto 'variable'?", answer: "Es un límite a la aplicación de leyes extranjeras. Es variable porque se adapta a los principios de un Estado en un momento dado, como lo demuestra el fallo 'Solá'." },
        { topic: "Matrimonio y Divorcio", question: "¿Qué ley rige los efectos personales del matrimonio, según el Art. 2624 del CCCN?", answer: "Se rigen por el derecho del domicilio conyugal efectivo." },
        { topic: "Matrimonio y Divorcio", question: "Mencione tres instrumentos de DDHH con jerarquía constitucional que consagran derechos vinculados a la familia.", answer: "La Declaración Universal de Derechos Humanos (DUDH), el Pacto Internacional de Derechos Civiles y Políticos (PIDCP) y la Convención Americana sobre Derechos Humanos (CADH)." },
        { topic: "Matrimonio y Divorcio", question: "Las convenciones matrimoniales celebradas antes del matrimonio, ¿por qué ley se rigen?", answer: "Se rigen por el derecho del primer domicilio conyugal." },
        { topic: "Matrimonio y Divorcio", question: "La conexión del 'último domicilio conyugal' para el divorcio, ¿es flexible o rígida?", answer: "Es una conexión rígida." },
        { topic: "Matrimonio y Divorcio", question: "El fallo 'Solá' de la CSJN, ¿con qué concepto del DIPR se relaciona principalmente?", answer: "Se relaciona con la variabilidad y mutabilidad del contenido del orden público internacional." },
        { topic: "Matrimonio y Divorcio", question: "En materia de familia, ¿la autonomía de la voluntad es amplia o limitada?", answer: "Tradicionalmente ha sido muy limitada. El CCCN la amplió en aspectos patrimoniales, pero siempre con un rol protector." },
        { topic: "Matrimonio y Divorcio", question: "Para reconocer una sentencia de divorcio extranjera, ¿se revisa si la causal de divorcio es admitida en Argentina?", answer: "No, en el proceso de exequátur no se revisa el fondo del asunto, solo la legalidad, autenticidad y que no viole el orden público." },
        { topic: "Matrimonio y Divorcio", question: "¿Qué es el concepto de 'residencia habitual' en el DIPR?", answer: "Es una conexión que alude al centro de gravedad de la vida de una persona, considerado un punto intermedio entre nacionalidad y domicilio." },
        { topic: "Matrimonio y Divorcio", question: "En el caso 'Z., A. A.', ¿quiénes solicitaron la nulidad del último matrimonio del causante?", answer: "Los hijos de un matrimonio anterior, actuando por vía sucesoria." },
        { topic: "Matrimonio y Divorcio", question: "El impedimento de ligamen, ¿qué significa?", answer: "Significa la prohibición de contraer un nuevo matrimonio mientras subsista uno anterior válido." },
        { topic: "Matrimonio y Divorcio", question: "¿Cuáles son las fuentes del DIPR para el matrimonio y divorcio en Argentina?", answer: "Tratados internacionales como los de Montevideo, y en su defecto, las normas internas del Código Civil y Comercial de la Nación." },
        { topic: "Matrimonio y Divorcio", question: "Las convenciones matrimoniales celebradas durante el matrimonio, ¿por qué ley se rigen?", answer: "Se rigen por el derecho del domicilio conyugal al momento de su celebración." },
        { topic: "Matrimonio y Divorcio", question: "El principio de no discriminación, ¿es relevante en el derecho matrimonial internacional?", answer: "Sí, es un principio de Derechos Humanos con jerarquía constitucional que prohíbe cualquier tipo de discriminación en el acceso y los efectos del matrimonio." },
        { topic: "Matrimonio y Divorcio", question: "El CCCN, ¿permite mayor autonomía de la voluntad en los efectos personales o patrimoniales del matrimonio?", answer: "Permite un mayor margen en los aspectos patrimoniales, a través de las convenciones matrimoniales." },
        { topic: "Matrimonio y Divorcio", question: "En el fallo 'Z., A. A.', ¿la validez del matrimonio se analizó con las leyes vigentes al momento de su celebración o al momento del fallo?", answer: "Se analizó preservando los principios de orden público internacional vigentes al momento del fallo." },
        { topic: "Matrimonio y Divorcio", question: "¿Qué se entiende por 'domicilio conyugal efectivo'?", answer: "Es el lugar donde los cónyuges viven de consuno, desarrollando su vida familiar de manera estable." },
        { topic: "Matrimonio y Divorcio", question: "El reconocimiento de una sentencia extranjera, ¿es automático?", answer: "No, requiere un proceso de exequátur ante el juez competente para verificar que cumple con los requisitos formales y no afecta el orden público." },
        { topic: "Matrimonio y Divorcio", question: "¿La igualdad de derechos de los cónyuges es un principio de orden público argentino?", answer: "Sí, la igualdad y no discriminación entre los cónyuges es un principio fundamental del ordenamiento jurídico argentino." },
        { topic: "Matrimonio y Divorcio", question: "Si los cónyuges nunca tuvieron un domicilio conyugal en común, ¿dónde se podría plantear el divorcio?", answer: "La ley no prevé este caso explícitamente, lo que genera un vacío legal que la doctrina y jurisprudencia deben resolver, posiblemente usando foros alternativos." },
        { topic: "Matrimonio y Divorcio", question: "¿Qué rol juega el principio de libertad en el derecho matrimonial?", answer: "Juega un rol fundamental, consagrando el derecho de toda persona a casarse y a no ser obligado a permanecer casado (derecho al divorcio)." },
        { topic: "Matrimonio y Divorcio", question: "El orden público, ¿es una defensa que el juez puede aplicar de oficio?", answer: "Sí, el control de compatibilidad de una ley o sentencia extranjera con el orden público internacional argentino es una facultad y deber del juez." },

        // --- TEMA 5: Contratos Internacionales (25 preguntas) ---
        { topic: "Contratos Internacionales", question: "¿Cuál es el principio rector en materia de contratos internacionales?", answer: "El principio rector es la autonomía de la voluntad, que permite a las partes celebrar contratos, determinar su contenido y elegir el derecho que los regirá." },
        { topic: "Contratos Internacionales", question: "Si las partes no eligen un derecho aplicable, ¿qué ley rige el contrato según el Art. 2652 del CCCN?", answer: "El contrato se rige por las leyes y usos del país del lugar de cumplimiento." },
        { topic: "Contratos Internacionales", question: "En el caso 'Gobierno de Perú c. SIFAR', ¿por qué la cláusula FOB fue decisiva?", answer: "Porque transfería todos los riesgos al comprador desde el embarque, constituyendo el convenio libremente pactado como la ley aplicable entre las partes." },
        { topic: "Contratos Internacionales", question: "Diferencie la autonomía de la voluntad 'conflictual' de la 'material'.", answer: "La 'conflictual' es elegir el derecho aplicable. La 'material' permite crear disposiciones contractuales que desplacen normas coactivas del derecho elegido." },
        { topic: "Contratos Internacionales", question: "¿Qué son las normas internacionalmente imperativas o 'de policía'?", answer: "Son normas de orden público que se aplican a una relación jurídica sin importar cuál sea la ley que rija el contrato, prevaleciendo sobre cualquier otra." },
        { topic: "Contratos Internacionales", question: "¿Qué reglas especiales establece el CCCN para los contratos de consumo internacionales?", answer: "Establece reglas protectorias por la desigualdad de las partes, ofreciendo foros a elección del consumidor y limitando la elección de foro." },
        { topic: "Contratos Internacionales", question: "En ausencia de elección de foro, ¿qué opciones jurisdiccionales tiene el actor según el Art. 2650 CCCN?", answer: "Puede demandar ante el juez del domicilio del demandado, del lugar de cumplimiento de cualquiera de las obligaciones, o del lugar de la agencia que participó en la negociación." },
        { topic: "Contratos Internacionales", question: "Defina la cláusula INCOTERM 'FOB' (Free on Board).", answer: "Es una regla internacional que, una vez pactada, pone los riesgos por pérdida o avería de la mercadería a cargo del comprador desde el momento del embarque." },
        { topic: "Contratos Internacionales", question: "Mencione tres fuentes del derecho para los contratos internacionales.", answer: "1) Tratados de Montevideo; 2) Convención de Viena sobre Compraventa (CISG); 3) Principios UNIDROIT." },
        { topic: "Contratos Internacionales", question: "Si no se puede determinar el lugar de cumplimiento, ¿qué ley se aplica subsidiariamente?", answer: "Se aplica la ley del domicilio actual del deudor de la prestación más característica del contrato." },
        { topic: "Contratos Internacionales", question: "¿Qué son los INCOTERMS?", answer: "Son reglas internacionales uniformes que facilitan la interpretación de los términos comerciales más utilizados en las compraventas internacionales." },
        { topic: "Contratos Internacionales", question: "¿Qué permite la 'cláusula de excepción' del Art. 2653 CCCN?", answer: "Permite al juez, a pedido de parte, aplicar excepcionalmente el derecho del Estado con vínculos más estrechos, si las partes no eligieron el derecho." },
        { topic: "Contratos Internacionales", question: "¿Por qué el fallo 'Gobierno de Perú c. SIFAR' es un ejemplo de autonomía de la voluntad material?", answer: "Porque la Corte consideró que la cláusula FOB, libremente pactada, constituía en sí misma el derecho aplicable, desplazando otras normas." },
        { topic: "Contratos Internacionales", question: "Las normas 'de policía', ¿pueden ser de un tercer Estado?", answer: "Sí, el CCCN (Art. 2599) permite tener en cuenta las normas imperativas de Estados que presenten vínculos económicos preponderantes con el caso." },
        { topic: "Contratos Internacionales", question: "En un contrato de consumo, ¿la elección de foro por las partes es siempre válida?", answer: "No, el Art. 2654 del CCCN la limita, y no es válida si se pactó en abuso de una posición dominante o si priva al consumidor de su derecho a la justicia." },
        { topic: "Contratos Internacionales", question: "¿Qué son los Principios UNIDROIT?", answer: "Son un conjunto de reglas y principios sobre contratos comerciales internacionales, no vinculantes, pero que pueden ser elegidos por las partes como ley del contrato." },
        { topic: "Contratos Internacionales", question: "La jurisprudencia argentina sobre 'lugar de cumplimiento', ¿ha sido restrictiva o amplia?", answer: "Ha sido amplia, permitiendo que sea el lugar de cumplimiento de cualquiera de las obligaciones, lo que favorece al actor." },
        { topic: "Contratos Internacionales", question: "¿Qué significa que la autonomía de la voluntad es la 'piedra angular' en esta materia?", answer: "Significa que es el principio fundamental y más importante, que da libertad a las partes para regular sus propias relaciones comerciales." },
        { topic: "Contratos Internacionales", question: "¿Qué es la prestación 'más característica' de un contrato?", answer: "Generalmente es la prestación no dineraria. Por ejemplo, en una compraventa es la entrega de la cosa, y en un contrato de servicios, la prestación del servicio." },
        { topic: "Contratos Internacionales", question: "¿Qué es el Protocolo de Buenos Aires sobre Jurisdicción Internacional?", answer: "Es un tratado del Mercosur que regula la jurisdicción internacional en materia contractual, permitiendo la prórroga de jurisdicción." },
        { topic: "Contratos Internacionales", question: "El fallo 'Tactician Int. Corp.' ¿qué reafirmó?", answer: "Reafirmó la validez de la autonomía de la voluntad material, permitiendo a las partes crear disposiciones que desplacen normas coactivas." },
        { topic: "Contratos Internacionales", question: "Las normas de protección al consumidor, ¿son consideradas 'de policía'?", answer: "Sí, las normas que protegen a la parte débil, como el consumidor, son consideradas normas internacionalmente imperativas o de policía." },
        { topic: "Contratos Internacionales", question: "¿Una vez que las partes pactan un INCOTERM, este se vuelve obligatorio?", answer: "Sí, una vez pactado, el INCOTERM se incorpora al contrato y constituye el derecho aplicable entre las partes para la cuestión que regula." },
        { topic: "Contratos Internacionales", question: "¿El Foro de Necesidad es aplicable en materia contractual?", answer: "Sí, el Art. 2602 CCCN es un principio general que permite a los jueces intervenir excepcionalmente para evitar la denegación de justicia en materia patrimonial." },
        { topic: "Contratos Internacionales", question: "¿La Convención de Viena sobre Compraventa (CISG) se aplica a todos los contratos?", answer: "No, se aplica a los contratos de compraventa internacional de mercaderías entre partes que tengan sus establecimientos en Estados diferentes." },

        // --- TEMA 6: Sociedades Extranjeras (25 preguntas) ---
        { topic: "Sociedades Extranjeras", question: "¿Qué debe hacer una sociedad extranjera para realizar 'actos aislados' en Argentina según el Art. 118 de la LGS?", answer: "No necesita inscribirse, pero debe estar habilitada por las leyes de su país y cumplir las formalidades de la ley argentina para el acto." },
        { topic: "Sociedades Extranjeras", question: "¿Qué sucede si una sociedad constituida en el extranjero tiene su sede o principal objeto en Argentina (Art. 124 LGS)?", answer: "Se la considerará como una sociedad local a los efectos de su constitución, reforma y contralor, sometiéndose al régimen argentino." },
        { topic: "Sociedades Extranjeras", question: "¿Qué criterio aplica el juez si el tipo societario extranjero es desconocido en Argentina (Art. 119 LGS)?", answer: "El juez determina las formalidades aplicando el criterio de máximo rigor, usualmente asimilándolo a una sociedad anónima." },
        { topic: "Sociedades Extranjeras", question: "¿Qué responsabilidad asumen los representantes de sociedades extranjeras en Argentina según el Art. 121 LGS?", answer: "Asumen las mismas responsabilidades que los administradores de las sociedades constituidas en el país." },
        { topic: "Sociedades Extranjeras", question: "Según la LGS (Art. 123), ¿qué debe hacer una sociedad extranjera para ejercer habitualmente actos de su objeto social?", answer: "Debe acreditar su existencia, fijar un domicilio en Argentina, publicar e inscribir sus documentos y designar un representante." },
        { topic: "Sociedades Extranjeras", question: "¿Qué ley rige la 'capacidad genérica' (existencia, constitución) de una sociedad extranjera?", answer: "Se rige por la ley del lugar de constitución (lex societatis), según la CIDIP II." },
        { topic: "Sociedades Extranjeras", question: "¿Qué obligación contable impone el Art. 120 de la LGS a las sociedades extranjeras con sucursal en Argentina?", answer: "Deben llevar contabilidad separada en Argentina y someterse al contralor correspondiente." },
        { topic: "Sociedades Extranjeras", question: "Diferencie capacidad genérica y específica de una sociedad extranjera.", answer: "La genérica se refiere a su existencia y constitución, regida por la ley del lugar de constitución. La específica se refiere a actos puntuales, regida por la ley del lugar donde se realiza el acto." },
        { topic: "Sociedades Extranjeras", question: "¿Cómo puede ser emplazada en juicio una sociedad extranjera en Argentina (Art. 122 LGS)?", answer: "Puede ser emplazada a través del apoderado de un acto aislado o del representante de la sucursal o representación permanente." },
        { topic: "Sociedades Extranjeras", question: "El fallo 'Hierro Patagónico' es relevante para la interpretación de qué artículo de la LGS?", answer: "Es relevante para la interpretación del Artículo 123 de la Ley General de Sociedades (LGS), sobre los requisitos para constituir una filial." },
        { topic: "Sociedades Extranjeras", question: "¿Qué postura ha tendido a adoptar la jurisprudencia respecto a la exigencia de inscripción del Art. 123 LGS?", answer: "Ha tendido a suavizarla, dispensando la inscripción si el objetivo de control de la ley ya se satisface por otras vías." },
        { topic: "Sociedades Extranjeras", question: "La ley del lugar de constitución de la sociedad, ¿cómo se denomina en latín?", answer: "Se denomina *lex societatis*." },
        { topic: "Sociedades Extranjeras", question: "Una sociedad extranjera que solo quiere estar en juicio en Argentina, ¿necesita inscribirse?", answer: "No, para realizar un acto aislado como estar en juicio, no necesita inscribirse, solo cumplir las formalidades del acto." },
        { topic: "Sociedades Extranjeras", question: "El establecimiento de una sucursal, ¿es considerado un acto aislado o un ejercicio habitual?", answer: "Es considerado un ejercicio habitual de la actividad, y por lo tanto, requiere cumplir con los requisitos del Art. 123 LGS." },
        { topic: "Sociedades Extranjeras", question: "La 'teoría del máximo rigor' para tipos desconocidos, ¿qué busca?", answer: "Busca proteger a los terceros que contratan con la sociedad, aplicando el régimen de la sociedad local que impone mayores formalidades y responsabilidades (como la S.A.)." },
        { topic: "Sociedades Extranjeras", question: "Los Tratados de Montevideo, ¿qué ley designan para regir la capacidad genérica de la sociedad?", answer: "Designan la ley del domicilio comercial de la sociedad." },
        { topic: "Sociedades Extranjeras", question: "La fijación de un domicilio en Argentina por una sociedad extranjera, ¿para qué sirve?", answer: "Sirve para que la sociedad pueda ser notificada y emplazada en juicio en el país, y para determinar la jurisdicción de los tribunales." },
        { topic: "Sociedades Extranjeras", question: "El Art. 124 de la LGS, ¿es una norma de policía?", answer: "Sí, es una norma de policía o de aplicación inmediata que busca evitar el fraude a la ley argentina, impidiendo que se constituyan sociedades en el extranjero para eludir la legislación local." },
        { topic: "Sociedades Extranjeras", question: "Si un representante de una sociedad extranjera actúa sin poder suficiente, ¿quién responde?", answer: "El representante asume responsabilidad personal e ilimitada por los actos realizados, al igual que los administradores de sociedades locales." },
        { topic: "Sociedades Extranjeras", question: "¿Qué es una 'filial' de una sociedad extranjera?", answer: "Es una nueva sociedad constituida en Argentina, cuyo capital es total o mayoritariamente propiedad de la sociedad extranjera (sociedad madre)." },
        { topic: "Sociedades Extranjeras", question: "La CIDIP II sobre Sociedades Mercantiles, ¿qué regula?", answer: "Regula el reconocimiento de la existencia y capacidad de las sociedades constituidas en un Estado parte, y su actuación en otros Estados parte." },
        { topic: "Sociedades Extranjeras", question: "La ley argentina sobre sociedades (LGS), ¿es de orden público?", answer: "Sí, gran parte de sus disposiciones son de orden público, especialmente las que regulan la constitución, el control y la responsabilidad para proteger a terceros." },
        { topic: "Sociedades Extranjeras", question: "La interpretación flexible de la jurisprudencia en 'Hierro Patagónico' ¿qué principios equilibra?", answer: "Equilibra la facilitación del comercio internacional con la protección del ordenamiento jurídico local y los intereses de los terceros." },
        { topic: "Sociedades Extranjeras", question: "¿Para qué sirve la publicación de la inscripción de una sociedad extranjera?", answer: "Sirve para dar publicidad y oponibilidad a terceros sobre la existencia y representación de la sociedad en el país." },
        { topic: "Sociedades Extranjeras", question: "¿Una sociedad constituida en el extranjero puede tener su sede real en Argentina?", answer: "Sí, y si eso ocurre, el Art. 124 LGS la considerará una sociedad local a efectos de su control y formalidades." },

        // --- TEMA 7: Responsabilidad Civil (25 preguntas) ---
        { topic: "Responsabilidad Civil", question: "¿Qué opciones de jurisdicción tiene la víctima en un caso de responsabilidad civil internacional (Art. 2656 CCCN)?", answer: "Puede elegir demandar ante los jueces del domicilio del demandado, del lugar donde se produjo el hecho generador, o del lugar donde el daño produce sus efectos directos." },
        { topic: "Responsabilidad Civil", question: "¿Qué ley se aplica como regla general en un caso de responsabilidad civil internacional (Art. 2657 CCCN)?", answer: "Como regla general, se aplica el derecho del país donde se produjo el daño (*lex loci damni*)." },
        { topic: "Responsabilidad Civil", question: "En 'Aguinda Salazar c/ Chevron', ¿por qué la CSJN rechazó ejecutar la sentencia ecuatoriana?", answer: "Porque Chevron Corp. no tenía presencia jurídica ni bienes en Argentina, y ejecutar la sentencia violaría el orden público y el debido proceso consagrados en la Constitución." },
        { topic: "Responsabilidad Civil", question: "¿Cuál es la excepción a la regla general de la ley aplicable en responsabilidad civil?", answer: "Si el responsable y la víctima tienen su domicilio en el mismo país al momento del daño, se aplica el derecho de dicho país." },
        { topic: "Responsabilidad Civil", question: "Diferencie la 'Teoría de la Ubicuidad' de la 'Teoría del Mosaico'.", answer: "La de la Ubicuidad (preferida en Argentina) permite a un juez decidir sobre la totalidad del daño. La del Mosaico exige una sentencia en cada país afectado para reparar el daño ocurrido en ese territorio." },
        { topic: "Responsabilidad Civil", question: "¿Por qué se dice que las normas sobre derecho aplicable en responsabilidad civil son 'normas de conflicto'?", answer: "Porque no dan la solución directa al caso, sino que remiten al ordenamiento jurídico de otro Estado para encontrar la solución." },
        { topic: "Responsabilidad Civil", question: "En el rechazo del exequátur en 'Aguinda Salazar', ¿qué normas específicas se citaron para fundar la violación al orden público?", answer: "El Artículo 18 de la Constitución Nacional y el Artículo 12 de la Convención Interamericana sobre Cumplimiento de Medidas Cautelares (CIDIP II)." },
        { topic: "Responsabilidad Civil", question: "¿Cuándo un caso de responsabilidad civil adquiere carácter 'internacional'?", answer: "Cuando presenta elementos extranjeros, como domicilios de las partes en diferentes países o producción de efectos dañinos en múltiples jurisdicciones." },
        { topic: "Responsabilidad Civil", question: "La multiplicidad de foros en el Art. 2656 CCCN, ¿cómo se denomina y qué busca?", answer: "Se denomina jurisdicción concurrente, y busca facilitar el acceso a la justicia de la víctima." },
        { topic: "Responsabilidad Civil", question: "El caso 'Vázquez, Demetrio Jorge' (sucesiones), ¿qué principio general del DIPR ilustra?", answer: "Ilustra la aplicación del 'Foro de Necesidad' para evitar la denegación de justicia." },
        { topic: "Responsabilidad Civil", question: "La regla de la ley aplicable (Art. 2657), ¿a qué consecuencias del daño se refiere?", answer: "Se refiere al lugar donde se producen los efectos dañinos directos, independientemente de las consecuencias indirectas." },
        { topic: "Responsabilidad Civil", question: "El 'fraude a la ley' como problema general del DIPR, ¿podría aplicarse en responsabilidad civil?", answer: "Sí, si las partes manipulan artificialmente los puntos de conexión (ej. cambiando su domicilio) para eludir la aplicación de una ley imperativa." },
        { topic: "Responsabilidad Civil", question: "Para que el juez argentino aplique la excepción de la ley del domicilio común, ¿quién debe solicitarla?", answer: "La norma no lo especifica, por lo que podría ser de oficio o a pedido de parte, dependiendo de las circunstancias." },
        { topic: "Responsabilidad Civil", question: "La 'Teoría de la Ubicuidad', ¿se aplica para determinar la jurisdicción o la ley aplicable?", answer: "Se aplica para determinar la jurisdicción, permitiendo que tanto el juez del lugar del hecho como el de sus consecuencias sean competentes." },
        { topic: "Responsabilidad Civil", question: "¿Qué es la 'cuestión previa' en DIPR?", answer: "Es una cuestión preliminar que debe resolverse para poder decidir la cuestión principal, y que puede tener su propio punto de conexión a una ley diferente." },
        { topic: "Responsabilidad Civil", question: "El fallo 'Aguinda Salazar', ¿es un ejemplo de control de orden público en la etapa de reconocimiento de sentencia o de aplicación de derecho extranjero?", answer: "Es un ejemplo de control de orden público en la etapa de reconocimiento y ejecución de una sentencia extranjera (exequátur)." },
        { topic: "Responsabilidad Civil", question: "¿Qué significa 'lex loci damni'?", answer: "Es la expresión en latín para 'la ley del lugar donde se produjo el daño', que es la regla general de ley aplicable en el CCCN." },
        { topic: "Responsabilidad Civil", question: "La efectividad de una decisión transfronteriza en materia de responsabilidad civil, ¿de qué depende?", answer: "Depende del reconocimiento y ejecución de la sentencia en el país donde se la quiere hacer valer, a través del proceso de exequátur." },
        { topic: "Responsabilidad Civil", question: "El 'Foro de Necesidad', ¿es la primera opción para determinar la jurisdicción?", answer: "No, es un criterio excepcional y de último recurso, para cuando las reglas generales no ofrecen una solución justa." },
        { topic: "Responsabilidad Civil", question: "Si un daño se produce en varios países (ej. contaminación de un río), ¿qué teoría facilita una reparación integral en un solo juicio?", answer: "La Teoría de la Ubicuidad, ya que permite que un solo juez se declare competente para la totalidad del daño transfronterizo." },
        { topic: "Responsabilidad Civil", question: "¿El orden público que se controla en el exequátur es el mismo que el orden público interno?", answer: "No, es el orden público internacional, que es un concepto más restringido y se refiere a los principios fundamentales e inderogables del ordenamiento." },
        { topic: "Responsabilidad Civil", question: "En el caso 'Aguinda Salazar', ¿la CSJN Argentina revisó si la condena a Chevron en Ecuador fue correcta?", answer: "No, la Corte no revisó el fondo de la cuestión, sino que analizó si la ejecución de esa sentencia en Argentina era compatible con el orden público argentino." },
        { topic: "Responsabilidad Civil", question: "El Art. 2656 CCCN, al dar la opción al actor, ¿a qué parte del proceso busca proteger?", answer: "Busca proteger a la víctima del daño (el actor), que es considerada la parte más débil en la relación de responsabilidad." },
        { topic: "Responsabilidad Civil", question: "La excepción de la ley del domicilio común, ¿cuándo se aplica?", answer: "Se aplica cuando tanto la persona que causó el daño como la persona que lo sufrió tienen su domicilio en el mismo país en el momento del hecho." },
        { topic: "Responsabilidad Civil", question: "¿Qué son las 'calificaciones' en DIPR?", answer: "Es el proceso de definir la naturaleza jurídica de una relación (ej. si es contractual o extracontractual) para determinar qué norma de conflicto se debe aplicar." }
    ];

    const finalMessages = [
        "Tu conocimiento del derecho extranjero es un hecho a probar y, francamente, no lo probaste. ¡Necesitas un exequatur urgente para estas respuestas!", "Esto es un claro caso de fraude a la ley... ¡le estás escapando al aprobado! A aplicar la *lex fori* (del estudio).", "Tus respuestas tienen un vicio de forma que afecta el orden público internacional de mi corrección. ¡Nulidad absoluta!", "La conexión entre tus respuestas y la correcta es manifiestamente la más débil. Hay que aplicar la cláusula de excepción y estudiar más.", "Parece que aplicaste la 'Teoría del Mosaico'. Aciertos dispersos en un mar de jurisdicciones incorrectas.", "Estás en el umbral. Ni prórroga de jurisdicción ni foro de necesidad, solo te queda el recurso de estudiar un poco más. ¡Mitad de camino!", "Lograste la capacidad específica para aprobar, pero falta la capacidad de ejercicio habitual. ¡A seguir así!", "¡Buen trabajo! Estás aplicando el principio *favor creditoris*, pero el acreedor es tu nota. ¡Ya casi lo tienes!", "Tu conocimiento tiene autonomía de la voluntad conflictual y material. Eliges bien la ley aplicable y el contenido. ¡Excelente!", "Tus respuestas son normas internacionalmente imperativas. Se aplican sin importar la pregunta. ¡Prácticamente un jurista de la CSJN!", "¡Perfección! Eres la 'Teoría de la Ubicuidad' del conocimiento. Competente en el lugar del hecho y en el de todos sus efectos. ¡Felicitaciones, colega!"
    ];

    // Referencias a elementos del DOM
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartBtn = document.getElementById('restart-btn');
    const answerBtn = document.getElementById('answer-btn');
    const correctBtn = document.getElementById('correct-btn');
    const incorrectBtn = document.getElementById('incorrect-btn');
    const backBtn = document.getElementById('back-btn');
    const homeBtn = document.getElementById('home-btn');
    const selectAllTopicsCheckbox = document.getElementById('select-all-topics');
    
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const endScreen = document.getElementById('end-screen');
    
    const topicSelectionContainer = document.getElementById('topic-selection-container');
    const questionText = document.getElementById('question-text');
    const answerText = document.getElementById('answer-text');
    const answerArea = document.getElementById('answer-area');
    const questionCounterText = document.getElementById('question-counter');
    const ratingControls = document.getElementById('rating-controls');
    const topicText = document.getElementById('topic-text');
    
    const finalScoreText = document.getElementById('final-score');
    const finalMessageText = document.getElementById('final-message');

    // Variables de estado del juego
    let masterQuestionPool = [];
    let sessionHistory = [];
    let currentQuestionIndex = -1;
    let TOTAL_QUESTIONS = 10;
    
    // --- LÓGICA DE SELECCIÓN DE TEMAS ---
    const topics = [...new Set(questionBank.map(item => item.topic))];
    
    function populateTopicSelection() {
        topicSelectionContainer.innerHTML = '';
        topics.forEach((topic, index) => {
            const topicItem = document.createElement('div');
            topicItem.classList.add('topic-item');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `topic-${index}`;
            checkbox.value = topic;
            checkbox.classList.add('topic-checkbox');
            
            const label = document.createElement('label');
            label.htmlFor = `topic-${index}`;
            label.textContent = topic;
            
            topicItem.appendChild(checkbox);
            topicItem.appendChild(label);
            topicSelectionContainer.appendChild(topicItem);
        });
    }

    function handleSelectAll() {
        const topicCheckboxes = document.querySelectorAll('.topic-checkbox');
        topicCheckboxes.forEach(checkbox => {
            checkbox.checked = selectAllTopicsCheckbox.checked;
        });
    }
    
    // --- LÓGICA DEL QUIZ ---
    function setupAndStartQuiz() {
        const selectedTopics = [];
        document.querySelectorAll('.topic-checkbox:checked').forEach(checkbox => {
            selectedTopics.push(checkbox.value);
        });

        if (selectedTopics.length === 0) {
            alert("Por favor, selecciona al menos un tema para comenzar.");
            return;
        }

        let filteredPool = questionBank.filter(q => selectedTopics.includes(q.topic));
        
        // Barajar el pool de preguntas filtrado
        masterQuestionPool = filteredPool.sort(() => Math.random() - 0.5);
        
        TOTAL_QUESTIONS = Math.min(10, masterQuestionPool.length);
        if (TOTAL_QUESTIONS < 1) {
             alert("No hay preguntas disponibles para los temas seleccionados. Por favor, elige otros temas.");
            return;
        }

        startScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        
        sessionHistory = [];
        currentQuestionIndex = -1;
        
        advanceToNextQuestion();
    }
    
    function restartQuiz() {
        quizScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        selectAllTopicsCheckbox.checked = false;
        document.querySelectorAll('.topic-checkbox').forEach(cb => cb.checked = false);
    }

    function advanceToNextQuestion() {
        if (currentQuestionIndex >= TOTAL_QUESTIONS - 1) {
            endGame();
            return;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex >= sessionHistory.length) {
            const newQuestion = masterQuestionPool[currentQuestionIndex];
            sessionHistory.push({ question: newQuestion, userAnswer: null });
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
        
        questionCounterText.innerText = `Pregunta ${currentQuestionIndex + 1} de ${TOTAL_QUESTIONS}`;
        questionText.innerText = state.question.question;
        topicText.innerText = state.question.topic;
        answerText.innerText = state.question.answer;
        
        backBtn.disabled = currentQuestionIndex === 0;

        if (state.userAnswer === null) {
            answerArea.classList.add('hidden');
            ratingControls.classList.add('hidden');
            answerBtn.classList.remove('hidden');
        } else {
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
        
        const correctCount = sessionHistory.filter(item => item.userAnswer === 'correct').length;
        const incorrectCount = sessionHistory.length - correctCount;
        
        finalScoreText.innerText = `Puntuación Final: ${correctCount} Correctas, ${incorrectCount} Incorrectas de ${sessionHistory.length}.`;
        
        const messageIndex = Math.min(correctCount, finalMessages.length - 1);
        finalMessageText.innerText = finalMessages[messageIndex];
    }

    // --- INICIALIZACIÓN Y EVENT LISTENERS ---
    populateTopicSelection();
    startQuizBtn.addEventListener('click', setupAndStartQuiz);
    restartBtn.addEventListener('click', restartQuiz);
    homeBtn.addEventListener('click', restartQuiz);
    selectAllTopicsCheckbox.addEventListener('change', handleSelectAll);
    answerBtn.addEventListener('click', showAnswer);
    backBtn.addEventListener('click', goBack);
    correctBtn.addEventListener('click', () => handleAnswer(true));
    incorrectBtn.addEventListener('click', () => handleAnswer(false));
});