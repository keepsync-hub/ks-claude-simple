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

## III — Tu cuello de botella en Cowork: eres tú

Cowork puede leer 100.000 palabras en 15 segundos. Puede armar una planilla en 90 segundos. Pero tú escribes a 60 palabras por minuto.

**Solución: dictado por voz (gratis, con herramientas como Wispr Flow)**

- Mantienes apretada una tecla → hablas → sueltas → tus palabras aparecen donde esté el cursor.
- Precisión casi perfecta.

## IV — Cómo ahorrar créditos (tokens)

1. **Reinicia la conversación en vez de seguir con más mensajes** — cada respuesta suma al historial. Usa "Reiniciar la conversación desde aquí" sobre un mensaje anterior.
2. **Empieza de cero cada 20 mensajes** — las conversaciones largas gastan la mayoría de los tokens releyendo el historial.
3. **Agrupa tareas en un solo mensaje** — 3 pedidos por separado = 3 recargas de contexto. Un mensaje con 3 tareas = 1 sola recarga.
4. **Usa Sonnet (no Opus) para tareas simples** — ahorra entre 30% y 70% en trabajo liviano.
5. **Mantén los archivos de SOBRE MÍ cortos** — menos de 2.000 palabras cada uno.
6. **Reparte el trabajo durante el día** — Claude usa una ventana móvil de 5 horas.

## V — Tus primeros 20 minutos

- **Minutos 0-5:** arma la estructura de carpetas. Crea SOBRE MÍ con los 3 archivos, más RESULTADOS y PLANTILLAS vacías.
- **Minutos 5-6:** pega las instrucciones globales (Configuración > Cowork > Instrucciones globales).
- **Minutos 6-8:** instala una herramienta de dictado por voz.
- **Minutos 8-15:** corre tu primera sesión por voz. Abre Cowork. Di una tarea: "quiero que leas mi carpeta y me ayudes a escribir [algo que necesites esta semana]. Pregúntame antes de empezar."
- **Minutos 15-20:** pídele a Cowork que cree una plantilla en la carpeta PLANTILLAS.

---

*Contenido adaptado de la guía "Claude Cowork" de Ruben Hassid ([claude101.com](https://claude101.com)).*
