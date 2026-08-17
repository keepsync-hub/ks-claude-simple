# Claude Cowork

> Si no programas, necesitas conocer Claude Cowork.

**Nivel:** Intermedio | **Duración:** 18 minutos

---

Claude Cowork es lo mejor que le pasó a la IA desde ChatGPT. Si no programas, ya deberías estar usándolo.

**Cómo acceder:**

1. Anda a claude.com/download y descarga la app en tu computadora.
2. Necesitas cuenta Pro (~US$20/mes).
3. Abre la app → pestaña Cowork (entre Chat y Code).
4. Selecciona una carpeta de tu computadora.
5. Elige siempre el modelo Opus (la versión más reciente, ej. Opus 4.6) para tareas complejas.

## I — Cómo armar tu carpeta de Cowork

Crea una carpeta nueva: **Claude Cowork** con 3 subcarpetas: **(1) SOBRE MÍ**, **(2) RESULTADOS**, **(3) PLANTILLAS**.

### Paso 1: Tres archivos clave en SOBRE MÍ

**Archivo 1 — sobre-mi.md**

Quién eres, cómo piensas, cómo quieres que Claude escriba por ti. Mantenlo bajo las 2.000 palabras (por eficiencia de tokens).

> ★ Para recordar: el archivo original de Ruben Hassid tenía más de 22.000 palabras. Lo redujo a menos de 2.000 quitando las transcripciones crudas y quedándose solo con los patrones. Esa diferencia es la que decide si Claude lee tu archivo completo o empieza a resumirlo por arriba.

**Si ya tienes un archivo viejo y largo:** súbelo en una sesión nueva y dile: "Este es mi archivo sobre-mi y necesito ahorrar tokens. Hazme preguntas hasta que quede recortado y perfecto."

**Para crearlo desde cero**, abre una sesión nueva con Opus + pensamiento extendido y usa un prompt como este:

```
Estás armando mi archivo sobre-mi.md para mi carpeta de Cowork. Este
archivo lo vas a leer al inicio de cada sesión para ayudarme mejor.
Tiene que ser conciso y de alta señal.

Tu trabajo: entrevístame con AskUserQuestion (15-20 preguntas, una a
la vez, dejándome usar "Otro" para dictar respuestas largas) y
después compila todo en un sobre-mi.md de menos de 2.000 tokens.

Si te doy una respuesta vaga, insiste: pide un ejemplo concreto. No
aceptes "me gusta que sea claro" sin saber qué significa "claro"
para mí. Si algo inesperado aparece, profundiza antes de seguir.

Cubre estos temas (adapta según mi rubro):
- Quién soy: mi rol, mi empresa, con quién trabajo, cómo se ve una
  buena semana de trabajo para mí.
- Cómo trabajo: mis herramientas del día a día, cómo empiezo una
  tarea de cero, cómo reviso y qué significa "terminado".
- Qué es un buen trabajo: muéstrame tu mejor entregable reciente y
  qué lo hizo bueno; qué separa lo excelente de lo promedio.
- Qué odio: un ejemplo de mal trabajo en mi rubro y qué lo hace
  malo; qué patrones o atajos me dan vergüenza ajena.
- Mis reglas: qué nunca hago, cuáles son mis 2-3 no-negociables.
- Mis opiniones: qué creo sobre mi rubro que mis colegas
  cuestionarían; qué está sobrevalorado o subvalorado.

Al terminar, compílalo en un solo archivo markdown con estas
secciones: Quién soy / Cómo trabajo / Qué es un buen trabajo / Qué
odio / Mis reglas / Instrucciones para Claude (una lista numerada de
qué SÍ y qué NO hacer conmigo). No guardes la transcripción cruda de
preguntas y respuestas: extrae los patrones y escríbelos en prosa
condensada. Meta: menos de 2.000 tokens en total.

Guarda el archivo como sobre-mi.md en mi carpeta SOBRE MÍ/.
```

**Archivo 2 — estilo-anti-ia.md**

Reglas que prohíben los patrones típicos de escritura de IA. Prohíbe más de 80 palabras "de IA" (profundizar, aprovechar, tapiz), elimina los patrones de contraste forzado, limita los párrafos a 3 frases.

**Archivo 3 — mi-empresa.md**

Tus objetivos, tu estrategia, en qué estás enfocado, a qué le dices que no. Cortito (menos de 1.000 tokens). Actualízalo cada trimestre.

> ✓ Tip: pídele a Claude que también te entreviste para este archivo (6-8 preguntas): tus 2-3 metas del año con números concretos, qué plataformas o mercados importan ahora, qué dejaste de hacer hace poco y a qué le estás diciendo que no. No lo actualices por calendario, solo cuando cambien tus prioridades de verdad.

### Paso 2: Carpeta RESULTADOS

Donde Cowork guarda su trabajo. Una subcarpeta por proyecto. Cowork se organiza solo y nunca lee esta carpeta por su cuenta (así no gastas tokens de más). Cuando necesites un entregable anterior, dile: "Lee el informe en RESULTADOS/nombre-del-proyecto."

### Paso 3: Carpeta PLANTILLAS

Tu mejor trabajo, para que Claude lo reutilice. Al final de una sesión dile: "guarda esto como plantilla en PLANTILLAS/". Claude quita el contenido y guarda solo el esqueleto (secciones, orden, formato, extensión). La próxima vez que necesites algo parecido, dile: "usa la plantilla de PLANTILLAS/[nombre del archivo]" y Cowork sigue esa estructura.

## II — Instrucciones globales

Anda a: **Configuración → Cowork → Editar instrucciones globales**. Pega algo así:

```
Normalmente empiezo mi sesión de Cowork señalándote mi carpeta de Cowork.

Antes de cualquier tarea, tienes que leer todos los archivos de SOBRE MÍ/:
- sobre-mi: quién soy, qué amo y qué odio
- estilo-anti-ia: odio cómo escribe Claude por defecto
- mi-empresa: dónde trabajo, mi rol.

Nunca leas RESULTADOS/ ni PLANTILLAS/ salvo que te señale un archivo puntual.
Guarda todos los entregables en RESULTADOS/ en una subcarpeta con el nombre del proyecto.
Si el pedido no es claro, usa AskUserQuestion. No completes los vacíos por tu cuenta.
```

Cowork lee tus archivos de SOBRE MÍ antes de cada tarea, sin excepción. Si esos 3 archivos suman menos de 6.000 tokens en total, Claude los lee completos, siempre.

> ⚠ Aviso: si tus archivos son muy grandes, Cowork empieza a resumirlos por arriba en vez de leerlos con cuidado. La ventana de contexto es para tu tarea, no para tu perfil. Mantén los archivos livianos.

## III — Tu cuello de botella en Cowork: eres tú

Una sesión típica se ve así: escribes tu prompt (30 segundos), Cowork lee tus archivos y arma un plan (unos 25 segundos), te hace preguntas de aclaración (5 segundos)... y ahí te demoras tú: 60+ segundos por cada respuesta, hasta 2 minutos si es algo específico. Con 8 preguntas, son 8 a 15 minutos donde tú eres la parte lenta.

Cowork puede leer 100.000 palabras en 15 segundos. Puede armar una planilla en 90 segundos. Pero tú escribes a 60 palabras por minuto — hablando, en cambio, promedias unas 150 palabras por minuto. Y no es solo velocidad: cuando hablas en vez de escribir, tu cerebro suelta más contexto de forma natural (somos "habladores" por naturaleza), y más contexto significa mejores resultados.

**Solución: dictado por voz (gratis, con herramientas como Wispr Flow)**

- Mantienes apretada una tecla → hablas → sueltas → tus palabras aparecen donde esté el cursor, en cualquier app, incluido el chat de Cowork.
- Precisión casi perfecta.

Tres formas de usarlo:

1. **Para el prompt inicial:** en vez de escribir "necesito un post de LinkedIn", dicta algo como: "me acabo de enterar de... y quiero contar más sobre... pero primero necesito asegurarme de que... así que quizás deberíamos partir cubriendo... y terminar con... como conclusión". Más contexto de entrada = mejor resultado.
2. **Para responder AskUserQuestion:** haz clic en la mayoría de las opciones, y dicta el contexto extra: "hazlo más directo, ella es CEO y odia la paja, y menciona los datos de ROI de la última llamada".
3. **Para dar feedback y pivotear:** en vez de escribir "el tono está mal, hazlo menos formal", dicta: "el tono es muy tieso, quiero que suene como si le estuviera escribiendo a un amigo que dirige una empresa de 200 personas. Mantén los datos pero hazlo más casual. Rehaz solo la sección 2".

**Para instalarlo:** anda a wispr.ai, descarga e instala la app, elige la tecla que vas a usar para activarlo (el autor usa Shift) y listo — funciona en cualquier app sin configuración extra. El plan gratis tiene un tope de 2.000 palabras por semana.

## IV — Cómo ahorrar créditos (tokens)

1. **Reinicia la conversación en vez de seguir con más mensajes** — Claude no cuenta mensajes, cuenta tokens. Cada mensaje nuevo relee toda la conversación anterior: el mensaje 30 cuesta 31 veces más tokens que el mensaje 1. Una conversación de 20 mensajes ya quemó unos 105.000 tokens; a los 30 mensajes son ~232.000. Usa "Reiniciar la conversación desde aquí" sobre un mensaje anterior (en Cowork no puedes editar un mensaje pasado, así que si algo se desvió temprano, reinicia desde más arriba o abre una sesión nueva).
2. **Empieza de cero cada 20 mensajes** — un desarrollador midió su uso y encontró que el 98,5% de sus tokens se iban en releer el historial; solo el 1,5% era el resultado real. Antes de cortar, pídele a Claude que resuma todo, copia el resumen y pégalo como primer mensaje de la sesión nueva.
3. **Agrupa tareas en un solo mensaje** — 3 pedidos por separado = 3 recargas de contexto. Un mensaje con 3 tareas = 1 sola recarga. En vez de pedir por separado "resume este artículo", luego "lista los puntos principales", luego "sugiere un titular", escribe: "resume este artículo, lista los puntos principales y sugiere un titular".
4. **Usa Sonnet (no Opus) para tareas simples** — Sonnet sirve de sobra para revisar gramática, hacer lluvia de ideas, dar formato o respuestas cortas, por una fracción del costo de Opus. Haiku es todavía más barato. Deja Opus + pensamiento extendido para el trabajo que de verdad lo necesita: usar Sonnet/Haiku en lo simple libera entre 30% y 70% de tu presupuesto para el trabajo profundo.
5. **Mantén los archivos de SOBRE MÍ cortos** — menos de 2.000 palabras cada uno, y menos de 6.000 tokens entre los tres juntos.
6. **Reparte el trabajo durante el día** — Claude usa una ventana móvil de 5 horas. Si quemas todo tu límite en una sesión de mañana, la mayor parte de tu capacidad diaria queda sin usar. Divide el trabajo en 2-3 sesiones (mañana, tarde, noche); cuando vuelvas, el uso anterior ya se habrá "caído" de la ventana. Si puedes, evita las horas punta (5-11 AM hora del Pacífico en días de semana), cuando la misma consulta cuesta más contra tu límite.

## V — Tus primeros 20 minutos

- **Minutos 0-5:** arma la estructura de carpetas. Crea SOBRE MÍ con los 3 archivos, más RESULTADOS y PLANTILLAS vacías.
- **Minutos 5-6:** pega las instrucciones globales (Configuración > Cowork > Instrucciones globales).
- **Minutos 6-8:** instala una herramienta de dictado por voz.
- **Minutos 8-15:** corre tu primera sesión por voz. Abre Cowork. Di una tarea: "quiero que leas mi carpeta y me ayudes a escribir [algo que necesites esta semana]. Pregúntame antes de empezar." Vas a sentir la diferencia en los primeros 3 minutos.
- **Minutos 15-20:** pídele a Cowork que cree una plantilla en la carpeta PLANTILLAS.

---

*Contenido adaptado de la guía "Claude Cowork" de Ruben Hassid ([claude101.com](https://claude101.com)).*
