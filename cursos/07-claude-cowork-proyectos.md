# Claude Cowork + Proyectos

> Cómo configurar Claude con Proyectos de la mejor forma.

**Nivel:** Intermedio | **Duración:** 10 minutos

---

Los Proyectos ahora viven dentro de Cowork. La memoria persiste entre sesiones, las instrucciones a medida quedan incorporadas, hay carpetas dedicadas y tareas programadas — todo dentro de Cowork.

## 1. Qué es Cowork con Proyectos, en concreto

**Antes (dos cosas separadas):**
- Proyectos de Claude (navegador) = carpeta de chats, subes archivos, escribes instrucciones. No podía crear archivos ni correr código.
- Claude Cowork (escritorio) = el agente que hace el trabajo real. Pero cada sesión empezaba de cero.

**Ahora:** Cowork tiene sus propios Proyectos con:
- Carpeta propia (Claude lee y escribe ahí)
- Instrucciones a medida (tono, reglas, formato, límites)
- Memoria acotada (Claude recuerda lo que hizo dentro de ese Proyecto)
- Tareas programadas (trabajo recurrente)
- Historial de tareas (cada corrida queda guardada localmente)

> **Memoria acotada:** le dices "sigue con el informe de la semana pasada" y Claude sabe cuál era. Solo dentro de ese Proyecto. No se filtra a tu otro trabajo.

## 2. Cómo crear tu primer Proyecto de Cowork

Abre la app de escritorio → menú izquierdo → Proyectos → clic en "+".

**Opción 1: empezar de cero**
- Crea una carpeta local nueva.
- Cowork > Proyectos > + > Empezar de cero.
- Suma instrucciones y archivos.
- Ponle nombre.

**Opción 2: importar un Proyecto existente** (mejor si ya seguiste la guía de equipos)
- Cowork > Proyectos > + > Importar un Proyecto.
- Busca tus Proyectos del navegador.
- Los archivos e instrucciones se transfieren.

**Opción 3: usar una carpeta existente** (mejor si ya seguiste la guía de Cowork)
- Elige una carpeta que ya tengas.
- Nombra el Proyecto.
- Suma instrucciones y archivos extra.

### Prompt de arranque para cada Proyecto nuevo

```
Acabo de crear este Proyecto. Lee todos los archivos de la carpeta. Después
resúmeme qué sabes de este espacio de trabajo: qué hay, para qué lo uso
probablemente, y qué instrucciones vas a seguir. Si algo no está claro,
usa AskUserQuestion.
```

## 3. Flujos de trabajo reales

### Flujo 1: Newsletter semanal
- **La carpeta contiene:** sobre-mi.md, guía anti-IA, 5 newsletters anteriores, material de referencia de otros creadores (guías paso a paso a medio hacer), documentación oficial de las empresas que cubres.
- **Instrucciones:** "Lee SOBRE MÍ/ y estilo-anti-ia.md antes de cada tarea. Iguala exactamente esta voz. Nunca uses las palabras prohibidas. Párrafos de máximo 3 frases. Usa siempre AskUserQuestion antes de escribir."
- **Prompt semanal:** "Quiero escribir mi próxima newsletter sobre [tema]. Empieza con AskUserQuestion para afinar el ángulo antes de escribir nada." Claude recuerda tu voz de semanas anteriores y qué ángulos funcionaron, te tira 5-6 preguntas para hacer clic, y después escribe el borrador completo directo en la carpeta.
- **Aplica a:** equipos de marketing, agencias, escritores freelance, cualquiera que produzca contenido recurrente.

> ✓ Tip: para investigar información reciente en la web, Grok suele dar mejores resultados que Claude — combínalos: investiga con uno, escribe con el otro.

### Flujo 2: Entregables para clientes
- **La carpeta contiene:** plantilla de informe, 2 ejemplos sólidos, brief del cliente, documentos de referencia que te mande el cliente.
- **Instrucciones:** "Incluye siempre un resumen ejecutivo. Nunca superes las 15 páginas. Usa la terminología que aparece en el brief del cliente. Estructura: resumen ejecutivo → hallazgos → recomendaciones → próximos pasos → anexo. Formato .docx. Usa AskUserQuestion antes de escribir."
- **Por qué funciona:** la estructura queda consistente entre informes, la plantilla y los ejemplos están siempre disponibles como contexto, y para el tercer informe Claude ya aprendió tu nivel de detalle y formato preferido.
- **Aplica a:** estudios de abogados, consultoras, contadores, agencias.

### Flujo 3: Propuestas comerciales
- **La carpeta contiene:** lista de precios, 3 propuestas ganadoras, casos de éxito, manual de objeciones, notas de llamadas de descubrimiento (se agregan antes de cada corrida).
- **Instrucciones:** "Empieza siempre por el dolor del prospecto. Nunca nombres competidores. Termina siempre con un cronograma propuesto. Iguala el tono de las propuestas ganadoras de la carpeta. Formato .docx. Usa AskUserQuestion antes de escribir."
- **Por qué funciona:** el manual y los ejemplos quedan siempre disponibles, las notas de cada llamada nueva se convierten en propuesta terminada sin partir de cero, y la memoria acotada te enseña con el tiempo qué lenguaje cierra tratos.
- **Aplica a:** equipos de ventas, desarrollo de negocio, partnerships, agencias que cotizan a clientes nuevos.

> ✓ Tip: conecta Granola (graba tus llamadas), Gmail y Slack como conectores de Claude para tener todo el contexto de la negociación a mano al escribir la propuesta.

### Flujo 4: Informe operativo semanal
- **La carpeta contiene:** las últimas 4 minutas semanales, plantilla de formato, insumos crudos de cada líder de equipo.
- **Instrucciones:** "Cada lunes, combina todos los insumos en un informe ejecutivo. Máximo 1 página. Secciones: logros, obstáculos, prioridades de la próxima semana. Marca cualquier obstáculo que se repita en más de un equipo."
- **Tarea programada:** todos los lunes a las 8am — corre sola.

> ★ Para recordar: la memoria acotada detecta patrones entre semanas — por ejemplo, "tercera semana seguida que ingeniería marca demoras de contratación". Es el tipo de insight que antes necesitaba a alguien en un rol de chief of staff.

## 4. Los Proyectos viejos todavía importan (compartir en equipo)

Los Proyectos de Cowork son **locales** — todavía no se pueden compartir con compañeros.

**Configuración actual:**
- **Proyectos de Claude (navegador)** = manuales compartidos del equipo, fuente de verdad accesible para todos.
- **Proyectos de Cowork** = espacios personales de ejecución donde de verdad produces el trabajo.

Anthropic ya anunció que viene compartir en equipo para los Proyectos de Cowork. Cuando llegue, es probable que los Proyectos viejos del navegador dejen de ser necesarios.

## 5. Configuración en 15 minutos

- **Minutos 0-1:** actualiza la app de escritorio de Claude.
- **Minutos 1-8:** crea tu primer Proyecto de Cowork. Elige una tarea semanal recurrente. Escribe instrucciones de 5 a 8 líneas.
- **Minutos 8-12:** corre la primera tarea dentro del Proyecto: "Lee todo lo de esta carpeta. Después [tu tarea]. Empieza con AskUserQuestion para alinearnos antes de ejecutar."
- **Minutos 12-15:** configura una tarea programada (si es semanal): Proyecto → Tareas programadas → Nueva → escribe el prompt → elige frecuencia.

## 6. Dónde se queda corto (con honestidad)

- **Sin compartir en equipo (todavía):** los Proyectos de Cowork son locales a tu máquina. Para trabajo compartido sigues necesitando los Proyectos del navegador.
- **Solo almacenamiento local:** no sincroniza entre dispositivos. Si trabajas desde varias máquinas necesitas otra solución (Dispatch te deja asignar tareas desde el celular, pero los archivos y la memoria se quedan en el escritorio).
- **Consume el límite de uso rápido:** una sola sesión de un Proyecto de Cowork puede gastar lo mismo que 20+ chats normales. El plan Pro (US$20/mes) se llena rápido; para uso intensivo conviene el plan Max (US$100/mes).
- **Sigue siendo versión preliminar:** la ejecución agéntica se equivoca, sobre todo en tareas complejas de varios pasos, y a veces malinterpreta archivos. Revisa siempre el resultado antes de mandarlo a un cliente.
- **Depende de la app abierta:** las tareas programadas se detienen si cierras la app de escritorio o se duerme la computadora.
- **Memoria acotada por Proyecto:** Claude recuerda todo dentro de un Proyecto, pero nada se cruza entre Proyectos distintos. Es intencional (evita interferencias no deseadas), aunque a veces te gustaría poder conectar ideas entre espacios de trabajo.

---

*Contenido adaptado de la guía "Claude Cowork + Projects" de Ruben Hassid ([claude101.com](https://claude101.com)).*
