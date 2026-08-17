# Claude para equipos

> Cómo implementar Claude en todo tu equipo en 7 días (y dejar ChatGPT).

**Nivel:** Intermedio | **Duración:** 11 minutos

---

Una semana para implementar Claude puertas adentro. Entre 15 y 60 minutos por día.

Muchos equipos ya comprobaron que Claude funciona a nivel individual, pero eso no se traduce solo en adopción real: mandar un newsletter, cambiar de ChatGPT a Claude sin más, o hacer un "lunch and learn" no alcanza — la gente dice que lo usa, pero en la práctica no cambia nada. Este plan día por día ataca justo eso.

## Configuración: el plan Team de Claude

Anda a claude.com/pricing/team.

- Mínimo 5 puestos, máximo 150.
- Claude **no** entrena con tus datos (como todo plan empresarial de IA; el nivel de garantías de seguridad varía según el plan que elijas).
- Se recomiendan puestos premium para quienes lo usan a diario; el plan estándar alcanza si lo vas a usar menos de dos veces por semana.
- ¿Tu empresa es más grande? Pide el plan Enterprise en claude.ai/create/enterprise/qualification.

## Lunes: armar los Proyectos (45-60 min)

El objetivo: crear un Proyecto separado para cada tarea que tu equipo repite.

### Paso 1: deja que Claude identifique qué Proyectos necesitas

```
Trabajo en [empresa + industria]. Mi equipo ayuda a [clientes] a [lograr objetivos].
Me estás ayudando a configurar Claude para mi equipo. Necesitamos identificar los
3 a 5 entregables recurrentes que produce mi equipo, para crear un Proyecto de
Claude para cada uno.

Entrevístame. Pregúntame UNA cosa a la vez sobre:
1. Qué hace mi equipo día a día
2. Qué le entregamos a clientes, a liderazgo o entre nosotros
3. Qué tareas se sienten repetitivas cada semana o mes
4. Qué trabajo alguien siempre termina rehaciendo

Cuando tengas suficiente contexto, dame:
1. Una lista numerada de 3 a 5 entregables recurrentes
2. Un nombre de Proyecto sugerido para cada uno
3. Una lista de documentos para subir a cada Proyecto
Empieza ahora. Usa AskUserQuestion.
```

### Paso 2: crea los Proyectos

Claude → Proyectos → Team → Nuevo Proyecto. Nómbralos igual que como los sugirió Claude, hazlos visibles para todo el workspace y compártelos con tu equipo.

### Paso 3: carga cada Proyecto con el contexto correcto

Sube solo lo que cada Proyecto necesita: un buen ejemplo de ese entregable (el "estándar de oro"), algún documento de contexto relevante, el brief o plantilla que sigue tu equipo hoy.

### Paso 4: genera instrucciones a medida para cada Proyecto

```
Estoy configurando este Proyecto de Claude para: [NOMBRE DEL ENTREGABLE]
Genera un set de instrucciones con:
- QUÉ ES ESTE ENTREGABLE
- PARA QUIÉN ES
- TONO Y FORMATO
- ESTÁNDAR DE CALIDAD
- LÍMITES (qué nunca hacer)
Formatéalo como un bloque de instrucciones listo para pegar.
```

### Paso 5: prueba y valida

```
Con las instrucciones y los ejemplos de este Proyecto, genera un [NOMBRE DEL
ENTREGABLE] de muestra para [un escenario reciente o ficticio].
Después critica tu propio resultado: qué cumple con nuestro estándar y qué no.
```

Si la muestra pasa la prueba, el Proyecto queda listo. Si no, ajusta las instrucciones — toma unos 2 minutos por Proyecto.

## Martes: crear plantillas de prompt (15-25 min)

La idea es que tus compañeros nunca se queden mirando un chat vacío sin saber qué escribir: les dejas un prompt ya armado, listo para copiar y pegar.

```
Con las instrucciones de este Proyecto, escríbeme el prompt más corto posible
que mis compañeros puedan copiar y pegar para producir este entregable.
Reglas:
1. Una sola frase como máximo
2. UN solo campo [ENTRADA] (notas crudas, un borrador o viñetas)
```

El resultado debería ser una sola línea, algo como: "Pega tus notas sobre [tema] y te devuelvo el/la [entregable] en nuestro estilo." Guarda cada plantilla en la carpeta de Knowledge del Proyecto correspondiente, para que quede siempre a mano.

## Miércoles: buscar el "wow" (20-30 min)

1. Elige una tarea que hiciste a mano esta semana: que haya tomado más de 30 minutos, que otros compañeros también la hagan seguido, y de la que todavía tengas el "antes" (la versión manual).
2. Córrela con tu sistema nuevo. Si quieres, grábala con una herramienta como Screen Studio.
3. Guarda la versión manual y la versión con Claude una al lado de la otra, en un documento comparativo — ese es tu momento "wow" para la adopción.

> ✓ Tip: la prueba social no nace de decir "confía en mí, Claude es bueno" — nace de mostrar evidencia visual concreta del antes y el después.

## Jueves: convierte a 1 persona (35 min en total)

**Elige bien a quién:** ni el más entusiasta de la tecnología, ni el más escéptico. La persona que está ahogada — atrasada con emails, quedándose hasta tarde.

**Mándale este mensaje:**

```
Hola [nombre] — armé algo que te puede ahorrar tiempo de verdad en [tarea
específica]. ¿Te molesta si te muestro 15 minutos? Voy a usar tu [informe/
email/brief] real de esta semana. No hace falta que prepares nada.
```

**La sesión de 15 minutos:**

1. Abre el Proyecto del lunes.
2. Copia y pega la plantilla del martes.
3. Muestra el efecto "wow" del miércoles.

> ★ Para recordar: lo que tu compañera está viendo es que Claude produce algo bueno con SU propio trabajo, en la voz de la empresa, al primer intento. Claude no "aprendió" nada — el trabajo lo hizo toda la capa de contexto que armaste de lunes a miércoles.

**Hazla co-dueña:** agrégala al Proyecto. Muéstrale dónde viven las plantillas. Pregúntale: "¿qué otras tareas deberíamos convertir en plantilla?"

## Viernes: lanzamiento al equipo (60 min)

### Chequeo previo

- ✓ Instrucciones del Proyecto validadas (lunes)
- ✓ Plantilla de prompt (martes)
- ✓ Comprobantes de antes/después listos (miércoles)
- ✓ Una persona del equipo que lo pueda avalar (jueves)

### Genera tu mensaje de lanzamiento

```
Escribe un anuncio de Slack para nuestro nuevo espacio de trabajo de Claude.
1. Empieza con UN resultado concreto de mi prueba esta semana: [PEGAR
   comparativo antes/después del miércoles]
2. Explica en una frase qué es el Proyecto compartido
3. Lista 3 cosas que pueden hacer YA MISMO con las plantillas que ya existen
4. Termina con: "Prueba [plantilla] en tu próxima [tarea]. Toma 2 minutos."
5. Cierra invitando a una llamada corta de onboarding
Máximo 150 palabras. Tono informal, no corporativo, sin signos de exclamación.
Que suene a un compañero de equipo, no a un jefe.
```

### Envía y siembra

Publica el anuncio en el canal del equipo. Después manda un mensaje directo a 2-3 personas puntuales: "Prueba [plantilla] en [tarea] hoy. Toma 2 minutos." Pide también a la persona del jueves que mande sus propios mensajes — que el impulso no salga solo de ti.

### Recoge feedback al final del día

```
Mi equipo empezó a usar el espacio de trabajo de Claude hoy. Este es el
feedback que recibí: [PEGAR mensajes de Slack, preguntas o reacciones].
Con esto dime:
1. Qué debería ajustar en las instrucciones
2. Qué plantillas nuevas deberíamos agregar
3. Cuál es el malentendido más grande que tiene la gente
Después escribe un mensaje corto de Slack para el lunes que resuelva esa
duda principal y comparta una victoria rápida del equipo.
```

## Qué pasa después

En 5 días hiciste lo que a muchas empresas les toma 5 meses y un consultor — sin tickets de IT, sin presentaciones a la gerencia, sin PowerPoints ni capacitaciones formales. Tu equipo es un poco más inteligente. Y la inteligencia se acumula.

---

*Contenido adaptado de la guía "Claude for teams" de Ruben Hassid ([claude101.com](https://claude101.com)).*
