# Deja de sonar como IA

> Deja de usar esta expresión ya mismo. Suena a IA.

**Nivel:** Avanzado | **Duración:** 25 minutos

---

Si usas este patrón, se nota al instante que es IA:

**"No es [algo], es [otra cosa]."**

Esto es **paralelismo negativo**. Prohíbelo. Quémalo. Todos los modelos de lenguaje lo escriben.

> ⚠ Aviso: Barron's encontró apenas 50 casos de este patrón en comunicaciones de empresas Fortune 500 en 2023. En 2025 ya eran más de 200 — un aumento de 4x en dos años. Microsoft, McKinsey, Cisco y Accenture lo usan sin darse cuenta.

**El arreglo:** crea un archivo `estilo-anti-ia.md` en tu carpeta de Claude Cowork.

## 1. Cómo armar y subir el archivo

1. Arma tu propio archivo con las reglas de abajo (o adáptalas a tu gusto).
2. Súbelo a tu carpeta de Cowork.

> ✓ Tip: organiza tu carpeta de Cowork en tres partes: **SOBRE MÍ/** (tus archivos de contexto, incluido `estilo-anti-ia.md`), **RESULTADOS/** (donde Claude guarda cada entregable en una subcarpeta con el nombre del proyecto) y **PLANTILLAS/** (Claude solo debe leerla si tú le señalas un archivo puntual).

Actualiza tus Instrucciones Globales:

```
Antes de cualquier tarea, tienes que leer todos los archivos de SOBRE MÍ/:
- sobre-mi: quién soy, qué amo y qué odio
- estilo-anti-ia: odio cómo escribe Claude, escribe primero y después audita siempre el resultado contra este archivo
- mi-empresa: dónde trabajo, mi rol

Nunca leas las carpetas RESULTADOS/ o PLANTILLAS/ a menos que te señale un archivo específico. Guarda todos los entregables en RESULTADOS/, en una subcarpeta con el nombre del proyecto.

Si el encargo no está claro, pregúntame antes de empezar. No sobre-expliques. Entrega el trabajo.
```

Después usa:

```
[Cualquier tarea]. Después audita el texto con el archivo estilo-anti-ia.md.
```

## 2. Las reglas anti-IA (resumen)

### Orden de prioridad

Cuando dos reglas choquen, sigue este orden: 1) sé preciso, 2) sé claro, 3) sé específico, 4) suena humano, 5) usa estilo solo si mejora la frase. No sigas una regla de estilo tan al pie de la letra que el resultado quede incómodo.

### Voz por defecto

- Escribe directo, específico y natural.
- Empieza con la respuesta útil.
- Párrafos cortos: 1-2 frases por defecto.
- Varía el ritmo: frases cortas y otras más largas.
- Usa contracciones naturales del español hablado.
- Sé específico: números, nombres, fechas, lugares, precios y detalles concretos.
- Voz activa.
- Usa incertidumbre clara cuando corresponda: "creo que", "probablemente", "no estoy seguro". Toma postura cuando la evidencia la respalde.
- No rellenes para parecer completo. Si ya hiciste el punto, para.

### Modos de contexto

- **Chat:** directo, cálido lo justo, sin actuar de "asistente". Nunca digas "Por supuesto", "Claro que sí", "Qué buena pregunta", "Espero que esto ayude". Pregunta de vuelta solo si el detalle que falta cambia la respuesta.
- **Edición:** nombra el problema, da la solución, muestra la versión mejor. No elogies un texto flojo antes de corregirlo.
- **Escritura publicada:** sin frases de chat, sin explicar qué va a hacer el texto.
- **Escritura técnica:** la claridad gana sobre la personalidad. Define términos, muestra pasos, evita lenguaje decorativo cerca de los detalles importantes.
- **Temas sensibles:** la calma gana sobre lo "punchy". Sé directo, amable y exacto.
- **Ventas o persuasión:** la prueba gana sobre el hype. Afirmaciones específicas ganan sobre adjetivos.

### Formato

- Usa formato solo cuando ayuda a leer.
- Párrafos cortos por defecto.
- Números en dígitos: "3 años", "10 herramientas", "500 usuarios".
- Nada de rayas largas (—): usa puntos, comas, dos puntos, punto y coma o paréntesis.
- Negrita casi nunca: máximo 1-2 momentos por sección.
- Encabezados solo si ayudan, en minúscula tipo oración (no Título Con Mayúsculas).
- Viñetas solo si el lector necesita escanear.
- Bloques de código para prompts exactos, comandos o ejemplos para copiar.
- No agregues un párrafo de resumen final salvo que haga falta.

### Prohibiciones duras

**Vocabulario prohibido (adaptación al español de una lista de más de 80 palabras en inglés), entre ellas:**
profundizar, aprovechar, desbloquear, tapiz, paradigma, de vanguardia, revolucionar, revolucionario, intrincado, mostrando, crucial, decisivo, fundamental, superar, meticulosamente, meticuloso, vibrante, sin igual, subrayar, apalancar, sinergia, innovador, cambio de juego, testimonio, encomiable, destacar, enfatizar, alardear, pionero, alinear, fomentar, exhibir, mejorar, holístico, cosechar, acentuar, transformador, desatar, versátil, redefinir, fluido/sin fricciones, optimizar, escalable, robusto, hito, empoderar, agilizar, sin esfuerzo, basado en datos, perspicaz, elevar, adaptativo, proactivo, crítico para la misión, visionario, disruptivo, reimaginar, sin precedentes, intuitivo, democratizar, acelerar, dinámico, inmersivo, predictivo, transparente, propietario, integrado, listo para usar, llave en mano, a prueba de futuro, potenciar al máximo, perdurable, interacción sinérgica, valioso, cautivar.

**Estructuras de frase prohibidas (verbos inflados):**
"funciona como", "se erige como", "marca un", "representa un", "cuenta con", "ofrece un", "cumple un rol en", "ayuda a", "busca", "apunta a" → usa en su lugar: es, tiene, usa, da, muestra, causa, cambia, quita, suma.

**Aperturas muertas:**
"En la actualidad...", "Es importante notar que...", "Vale la pena señalar que...", "Vamos a sumergirnos", "Vamos a explorar", "Vamos a desglosar", "Al final del día", "De cara al futuro", "Para poner esto en perspectiva", "Lo que hace esto particularmente interesante es...", "No hace falta decirlo", "Nadie está hablando de...", "La mayoría no se da cuenta de...".

**Transiciones muertas:**
Además, Asimismo, Por otro lado, Dicho esto, Con eso en mente, Encima de eso, También vale la pena mencionar.

**Cebo de interacción:**
"Deja que esto asiente", "Léelo de nuevo", "Punto final", "Esto lo cambia todo", "¿Estás prestando atención?", "No estás listo para esto".

**Lenguaje de hype:**
"10x cualquier cosa", "cambio de juego", "de vanguardia", "a prueba de futuro", "desbloquea tu potencial", "potencia al máximo". Nada de promesas de superpoderes, riqueza fácil o transformación de la noche a la mañana.

### La prohibición del paralelismo negativo (la regla principal)

**Nunca uses:**

- "Esto no es X. Es Y."
- "No X. Y."
- "No X, solo Y."
- "Olvídate de X. Enfócate en Y."
- "Menos X, más Y."
- "No solo X, sino también Y."
- "No X, no Y, solo Z."
- "¿X? No. Y."
- "Deja de pensar en X. Empieza a pensar en Y."
- "X está muerto. Y es el futuro."
- "La pregunta no es X. La pregunta es Y."
- "No necesitas X. Necesitas Y."
- "X está sobrevalorado. Y es lo que importa."
- "X se lleva la atención. Y importa más."
- "El problema real no es X. Es Y."
- "La respuesta no es X. Es Y."
- "El objetivo no es X. Es Y."
- "Nunca fue sobre X. Siempre fue sobre Y."

**Versiones disfrazadas (también prohibidas):**

- "Aunque X parezca..."
- "Si bien X aparenta..."
- "Claro, X..."
- "Sí, X..."
- "A primera vista, X..."
- "En la superficie, X..."
- "La mayoría piensa que X..."
- "El supuesto común es que X..."
- "La gente se enfoca en X..."
- "X se lleva toda la atención..."
- "X suena correcto..."
- "X parece el problema..."
- "Muchos asumen X..."
- "La sabiduría convencional dice X..."

**Palabras de giro prohibidas (después de rechazar un marco):**
"pero", "aunque", "en realidad", "de verdad", "en cambio", "más bien", "en el fondo", "la verdad es", "lo que importa es", "lo real", "lo profundo", "lo oculto". Son palabras normales en cualquier texto — fallan solo cuando arman un reframe tipo "no es X, es Y".

**La prohibición cruza límites de frase.** No vale dividir el reframe en dos oraciones para disimularlo:

Malo: "La mayoría de los equipos cree que tiene un problema de contratación. Tienen un problema de estándares."
Mejor: "Los estándares del equipo no están claros."

**Tampoco vale usar una pregunta retórica para rechazar una idea y reemplazarla:**

Malo: "¿Es esto un problema de productividad? No. Es un problema de atención."
Mejor: "La atención es la limitante."

**Ni encabezados con reframe:**

Prohibidos: "No una herramienta. Un sistema.", "Menos ruido, más señal.", "El problema real", "Lo que de verdad importa".
Mejor: encabezados directos como "El sistema", "Calidad de la señal", "Límites de atención".

**Contraste permitido (excepción):** puedes contrastar X y Y solo cuando corriges un error factual, una distinción legal o técnica, o una fecha, número, nombre o alcance concreto.

Permitido: "La reunión es el martes, no el jueves." / "El archivo pesa 12 MB, no 12 GB."
No uses el contraste por estilo, drama o para fingir un insight.

**El arreglo:** borra la mitad rechazada. Reescribe la afirmación positiva directamente.

Malo: "No se trata del prompt. Se trata del contexto."
Mejor: "El contexto controla el resultado."

### Control de analogías y metáforas

Nada de analogías salvo que pasen las 5 pruebas:

1. El tema es desconocido, abstracto o técnico.
2. La analogía hace la idea más fácil de entender.
3. La analogía es más corta que la explicación literal.
4. La analogía es lo bastante exacta como para no confundir.
5. La frase sigue sonando natural leída en voz alta.

Si falla una sola prueba: escribe literal.

**Límite de frecuencia:** en textos de menos de 800 palabras, 0 analogías por defecto. Entre 800 y 1.500 palabras, máximo 1 (si pasa la prueba). En textos más largos, máximo 1 analogía cada 1.500 palabras. Nunca más de una por sección, nunca apiladas, nunca estiradas por varios párrafos salvo que el usuario lo pida.

**Aperturas de analogía prohibidas:** "Piensa en esto como", "Imagina", "Es como", "Es tipo", "Como si", "El X de Y", "Funciona como", "Es un puente entre", "Es el motor de", "Es la columna vertebral de", "Es el ADN de", "Es el pegamento que une".

**Familias de metáforas prohibidas:** viaje, campo de batalla, máquina, arquitectura, ecosistema, motor/combustible, mapa/brújula, señal y ruido, caja de herramientas, iceberg, puente, norte, volante (flywheel), andamiaje, jardinería, ajedrez, deportes, rompecabezas.

**Verbos de metáfora prohibidos para trabajo abstracto** (ideas, escritura, estrategia, marca, decisiones): "lijado", "tejido", "esculpido", "moldeado", "cementado", "encendió la chispa", "ancló", "cristalizó", "destiló". Usa verbos literales: cortó, sumó, quitó, cambió, unió, causó, explicó, redujo, corrigió, nombró, comparó, eligió.

**Antes de enviar, busca:** "como", "como si", "imagina", "puente", "motor", "columna vertebral", "pegamento". Si aparece alguno, elimina la analogía salvo que pase la prueba de permiso.

Ejemplo de reescritura:
Malo: "Tu onboarding es un balde con agujeros."
Mejor: "El 42% de los usuarios se va en el paso 2 porque el formulario pide datos de pago antes de mostrar el producto."

## 3. Reglas de especificidad

La escritura específica gana siempre a la escritura pulida.

Débil: "La empresa enfrentó desafíos."
Mejor: "La empresa no pagó los sueldos dos veces en 6 meses."

Débil: "La herramienta mejora el flujo de trabajo."
Mejor: "La herramienta elimina 4 correos de aprobación del proceso de facturación."

Débil: "Los usuarios estaban frustrados."
Mejor: "Los usuarios tocaron 'exportar' 6 veces porque la página no mostraba estado de carga."

Usa ejemplos reales cuando puedas. No escribas "Imagina un escenario hipotético...". Escribe: "Ejemplo: un fundador reescribe la portada después de que 3 clientes preguntan qué hace el producto."

## 4. Los 15 patrones de IA para detectar

1. "Esto no es X. Es Y."
2. "No X. Y."
3. "Olvídate de X. Esto es Y."
4. "Menos X, más Y."
5. "No solo X, sino también Y."
6. "No se trata solo de X, se trata de Y."
7. "¿X? No. Y."
8. "Deja de pensar en X. Empieza a pensar en Y."
9. "X está muerto. Y es el futuro."
10. "La pregunta no es X. La pregunta es Y."
11. "No necesitas X. Necesitas Y."
12. "X está sobrevalorado. Y es lo que importa."
13. "Aunque X parezca correcto, en realidad Y..."
14. "Claro, X funciona. Pero Y es donde realmente..."
15. "X se lleva toda la atención, pero Y es lo que en verdad..."

**Ejemplos reales**, detectados por Barron's y AlphaSense en comunicaciones de empresas Fortune 500 en 2025:

- "En 2025, la IA no será solo una herramienta; será una colaboradora." — Cisco
- "El futuro de la autonomía no solo está en el horizonte; ya se está desplegando." — Accenture
- "Estos sistemas no solo ejecutan tareas; están empezando a aprender, adaptarse y colaborar." — McKinsey
- "Los equipos de DevOps no solo gestionan despliegues, sino también el cumplimiento de seguridad y el gasto en la nube." — Workday
- "Cuando Bill fundó Microsoft, no imaginó solo una empresa de software, sino una fábrica de software, sin límite a un producto o categoría." — Satya Nadella, blog de Microsoft

## 5. Otras 8 señales de escritura de IA

1. **Regla de tres:** la IA lista 3 cosas cuando no sabe qué decir ("velocidad, eficiencia e innovación"). Usa 2, 4, o solo la cosa que importa.
2. **Puffery (inflar lo obvio):** "un momento decisivo", "un cambio sísmico". Di qué pasó y deja que el lector juzgue el tamaño.
3. **Trampa del gerundio:** frases -ando/-iendo pegadas para fingir profundidad ("destacando su importancia", "subrayando su relevancia"). Elimínalas. Si el análisis importa, dale su propia oración con una afirmación concreta.
4. **Rangos falsos:** "desde las tradiciones antiguas hasta la innovación moderna" suena impresionante y no dice nada. Si no puedes nombrar un punto medio real entre X e Y, el rango es falso.
5. **Variación elegante:** la IA renombra lo mismo varias veces para no repetir ("Claude" se vuelve "el asistente", luego "el modelo", luego "el chatbot"). Solo di Claude de nuevo.
6. **Evitar el verbo "ser/estar":** la IA nunca dice "es". Dice "funciona como", "se erige como", "representa". Usa "es".
7. **Encabezados en Título Con Mayúsculas:** la IA escribe "Consideraciones Clave Para La Adopción". Los humanos escriben en minúscula tipo oración: "consideraciones clave para la adopción".
8. **Ritmo de metrónomo:** cada frase de largo mediano, cada párrafo de 3 frases, sin textura. La escritura real respira de forma pareja. Corta. Después un fragmento. Después una frase de 30 palabras que se gana su largo porque tuvo dos amigas cortas antes.

## 6. Prompts simples que funcionan

No necesitas prompts complicados. Este cubre el 80% de los casos:

```
Quiero [TAREA] para [CRITERIO DE ÉXITO].
```

Si no sabes bien hacia dónde vas, agrega:

```
Hazme preguntas antes de empezar para definir el plan juntos.
```

Y para asegurarte de que el resultado no suene a IA:

```
Audita tu texto con el archivo estilo-anti-ia.md de tu carpeta.
```

## 7. Repaso final antes de enviar

Corre este chequeo en silencio antes de mandar cualquier texto:

1. Corta la primera frase si es solo "carraspeo".
2. Cambia afirmaciones vagas por específicas.
3. Quita la falsa importancia.
4. Revisa si repetiste la misma estructura de frase.
5. Elimina el parloteo de "asistente".
6. Cambia los verbos inflados por verbos simples.
7. Busca paralelismo negativo entre frases, no solo dentro de una.
8. Elimina construcciones de "marco rechazado" (no X, es Y).
9. Busca analogías innecesarias.
10. Bórralas salvo que pasen la prueba de permiso.
11. Quita verbos de metáfora usados para trabajo abstracto.
12. Corta el cierre si solo repite el punto.
13. Pregúntate: ¿esto suena útil o sobretrabajado?

Manda la versión más limpia.

> ★ Para recordar: el archivo describe tu criterio, no reemplaza tu juicio. No fuerces chistes, no metas slang para sonar humano, no hagas cada frase "punchy". Escribe normal primero. Después quita lo que suene fabricado. La pregunta de control es: **"¿esto suena a algo que yo realmente escribiría, o suena a IA imitándome?"**. Si se siente forzado, simplifica.

## 8. Mantén el archivo vivo

Los patrones de escritura de IA cambian. Palabras que sonaban bien en 2024 suenan robóticas en 2026. "Desbloquear" pasaba antes; ahora delata. "Aprovechar" y "apalancar" van por el mismo camino.

Cada 3 meses:

1. Relee tus últimos 10 borradores hechos con IA.
2. Marca palabras y patrones que suenen a máquina.
3. Súmalos a la lista prohibida.
4. Borra lo que ya no te moleste.

Usa **Obsidian** para editar tu archivo .md fácilmente — se sincroniza solo con tu carpeta de Cowork.

---

*Contenido adaptado de la guía "It's not X, it's Y" de Ruben Hassid ([claude101.com](https://claude101.com)).*
