# Claude con tu propia voz

> Porque en el fondo, eres un archivo de texto.

**Nivel:** Avanzado | **Duración:** 12 minutos

---

Eres un archivo de texto. Dame 2 horas. Un archivo. Y cualquier IA se convierte en ti.

## 1. Cómo extraerte a ti mismo en 2 horas

**Preparación:**

- Usa Claude + Cowork + Opus + Thinking extendido.
- Dicta las respuestas por voz con una herramienta de voz-a-texto como **Wispr Flow** (gratis) — es más rápido y más honesto que escribir.

### Prompt 1 — La entrevista

Abre un chat nuevo de Claude. Pega este prompt completo:

```
Eres un Entrevistador de Estilo — un entrevistador implacable cuyo trabajo es
extraer el ADN de cómo pienso, escribo y veo el mundo. Tu objetivo es crear
un documento completo que capture mi voz con tanta precisión que otra
instancia de Claude pueda escribir y pensar exactamente como yo.

Haz 100 preguntas en total, repartidas en estas categorías:
- CREENCIAS Y POSTURAS CONTRARIAS (15 preguntas)
- MECÁNICA DE ESCRITURA (20 preguntas)
- "CRÍMENES" ESTÉTICOS (15 preguntas)
- VOZ Y PERSONALIDAD (15 preguntas)
- PREFERENCIAS ESTRUCTURALES (15 preguntas)
- LÍMITES DUROS (10 preguntas)
- SEÑALES DE ALERTA (10 preguntas)

Reglas:
1. Una pregunta a la vez
2. Presiona ante respuestas vagas
3. Pide ejemplos concretos
4. Señala las contradicciones
5. Profundiza en los hilos interesantes

Después de las 100 preguntas, compila todo en un documento markdown completo
con: identidad central, cada sección con las preguntas y respuestas textuales,
y una tarjeta de referencia rápida (siempre / nunca / frases características /
calibración de voz).
```

Responde las 100 preguntas. Toma alrededor de 2 horas (unos 90 minutos si dictas por voz).

### Prompt 2 — Comprímelo

En la misma conversación, justo después:

```
Eres un Compilador de Voz. Convierte el archivo de voz de arriba en un archivo
sobre-mi.md compacto y de alta fidelidad para que una IA lo use como contexto
permanente.

Regla central: cada línea tiene que pasar esta prueba: "¿Si esta línea
desapareciera, la IA escribiría, editaría, juzgaría o decidiría distinto?"

Extensión objetivo: 2.000-4.000 tokens. Techo duro: 5.000 tokens.

Mantén: reglas específicas de voz y de escritura, negativas firmes, ejemplos
compactos de MALO/BUENO, frases textuales, palabras que uso/odio, formas de
frase, gustos y rechazos de estilo, reglas de decisión.

Elimina: valores genéricos, autodescripción halagadora, biografía que no cambia
el resultado.
```

El archivo comprimido suele organizarse en secciones claras: instrucciones de uso
y prioridad, contexto de identidad, huella de voz, leyes de escritura, leyes de
comunicación, rechazos duros, gustos y rechazos de estilo, banco de frases
(usar / evitar), señas propias, reglas de decisión, contradicciones productivas
(cosas que parecen opuestas pero conviven en tu forma de pensar), ejemplos de
referencia BUENO/MALO, qué NO debe inferir la IA por su cuenta, y una
instrucción final. Esa estructura es la que hace que el archivo funcione como
contexto permanente en vez de una simple biografía.

## 2. Prueba tu archivo

Abre una sesión "en blanco" sin apuntar a ninguna carpeta. Pruébalo con esto:

```
Escribe un post de LinkedIn sobre [tema] con mi voz.
```

Revisa: ¿suena a ti? Si sí, el archivo funciona.

## 3. Dónde guardarlo

Guárdalo en tu carpeta de Cowork SOBRE MÍ/ como **sobre-mi.md**.

En tus Instrucciones Globales: "Antes de cualquier tarea, lee todos los archivos de SOBRE MÍ/". Ahora Claude lo lee antes de cada sesión. Nunca más tienes que reexplicar tu estilo.

> ⚠ Aviso: un archivo que captura tu voz con tanta precisión también es un riesgo si cae en las manos equivocadas — podría usarse para suplantarte, hacer phishing dirigido o manipular a gente cercana a ti. Guárdalo con el mismo cuidado que le darías a un documento personal sensible, y piensa dos veces antes de compartirlo o subirlo a un servicio que no controlas.

## 4. Por qué te vas a resistir

1. **"Se siente reduccionista"** — pero cuando alguien que te conoce bien lee el archivo comprimido, va a decir "sí, ese eres tú".
2. **"Da miedo"** — leerte en un solo archivo significa que no queda dónde esconderse. Cada creencia se vuelve un compromiso.
3. **"El autoconocimiento lleva décadas"** — el archivo hace el mismo trabajo que la terapia, pero más rápido, porque Claude te obliga a ser específico.
4. **"Soy difícil de capturar"** — el misterio, visto de cerca, suele ser solo vaguedad.

## 5. En quién te conviertes

- **Portable** — funciona en cualquier IA: Claude, ChatGPT, Gemini, Grok, la que venga después.
- **Consistente** — dejas de redecidir cómo escribes cada lunes.
- **Compartible** — se lo das a tu equipo para que redacte con tu voz.
- **Eficiente** — la IA se convierte en una extensión de tu forma de pensar, no en una herramienta que hay que reentrenar cada vez.

## 6. Edítalo seguido (con Obsidian)

Los archivos .md son incómodos de editar en crudo. Usa **Obsidian** (gratis en obsidian.md):

1. Descarga Obsidian.
2. Abre la carpeta como bóveda → elige tu carpeta de Cowork.
3. Edita los archivos como un documento normal — se sincroniza solo con tu carpeta de Cowork.

Cuando editas en Obsidian → se edita en tu computadora → Claude Cowork queda sincronizado automáticamente.

---

*Contenido adaptado de la guía "Claude to sound like you" de Ruben Hassid ([claude101.com](https://claude101.com)).*
