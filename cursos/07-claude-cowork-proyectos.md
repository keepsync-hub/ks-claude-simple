# Claude Cowork + Proyectos

> Cómo configurar Claude con Proyectos de la mejor forma.

**Nivel:** Intermedio | **Duración:** 10 minutos

---

Los Proyectos ahora viven dentro de Cowork. La memoria persiste entre sesiones, las instrucciones a medida quedan incorporadas, hay carpetas dedicadas y tareas programadas — todo dentro de Cowork.

## 1. Qué es Cowork con Proyectos, en concreto

**Antes (dos cosas separadas):**
- Proyectos de Claude (navegador) = carpeta de chats, subís archivos, escribís instrucciones. No podía crear archivos ni correr código.
- Claude Cowork (escritorio) = el agente que hace el trabajo real. Pero cada sesión empezaba de cero.

**Ahora:** Cowork tiene sus propios Proyectos con:
- Carpeta propia (Claude lee y escribe ahí)
- Instrucciones a medida (tono, reglas, formato, límites)
- Memoria acotada (Claude recuerda lo que hizo dentro de ese Proyecto)
- Tareas programadas (trabajo recurrente)
- Historial de tareas (cada corrida queda guardada localmente)

> **Memoria acotada:** le decís "segui con el informe de la semana pasada" y Claude sabe cuál era. Solo dentro de ese Proyecto. No se filtra a tu otro trabajo.

## 2. Cómo crear tu primer Proyecto de Cowork

Abrí la app de escritorio → menú izquierdo → Proyectos → clic en "+".

**Opción 1: empezar de cero**
- Creá una carpeta local nueva.
- Cowork > Proyectos > + > Empezar de cero.
- Sumá instrucciones y archivos.
- Ponele nombre.

**Opción 2: importar un Proyecto existente** (mejor si ya seguiste la guía de equipos)
- Cowork > Proyectos > + > Importar un Proyecto.
- Buscá tus Proyectos del navegador.
- Los archivos e instrucciones se transfieren.

**Opción 3: usar una carpeta existente** (mejor si ya seguiste la guía de Cowork)
- Elegí una carpeta que ya tengas.
- Nombrá el Proyecto.
- Sumá instrucciones y archivos extra.

### Prompt de arranque para cada Proyecto nuevo

```
Acabo de crear este Proyecto. Leé todos los archivos de la carpeta. Después
resumime qué sabés de este espacio de trabajo: qué hay, para qué lo uso
probablemente, y qué instrucciones vas a seguir. Si algo no está claro,
usá AskUserQuestion.
```

## 3. Flujos de trabajo reales

### Flujo 1: Newsletter semanal
- **La carpeta contiene:** sobre-mi.md, guía anti-IA, 5 newsletters anteriores, material de referencia.
- **Instrucciones:** "Leé SOBRE MÍ/ y estilo-anti-ia.md antes de cada tarea. Igualá exactamente esta voz. Nunca uses las palabras prohibidas. Usá siempre AskUserQuestion antes de escribir."
- **Prompt semanal:** "Quiero escribir mi próxima newsletter sobre [tema]. Empezá con AskUserQuestion para afinar el ángulo antes de escribir nada."

### Flujo 2: Entregables para clientes
- **La carpeta contiene:** plantilla de informe, 2 ejemplos sólidos, brief del cliente.
- **Instrucciones:** "Incluí siempre un resumen ejecutivo. Nunca superes las 15 páginas. Estructura: resumen ejecutivo → hallazgos → recomendaciones → próximos pasos → anexo. Formato .docx."

### Flujo 3: Propuestas comerciales
- **La carpeta contiene:** lista de precios, 3 propuestas ganadoras, casos de éxito, manual de objeciones, notas de llamadas de descubrimiento.
- **Instrucciones:** "Empezá siempre por el dolor del prospecto. Nunca nombres competidores. Terminá siempre con un cronograma propuesto. Formato .docx."

### Flujo 4: Informe operativo semanal
- **La carpeta contiene:** las últimas 4 minutas semanales, plantilla de formato, insumos crudos de cada líder de equipo.
- **Instrucciones:** "Cada lunes, combiná todos los insumos en un informe ejecutivo. Máximo 1 página. Secciones: logros, obstáculos, prioridades de la próxima semana."
- **Tarea programada:** todos los lunes a las 8am — corre sola.

## 4. Los Proyectos viejos todavía importan (compartir en equipo)

Los Proyectos de Cowork son **locales** — todavía no se pueden compartir con compañeros.

**Configuración actual:**
- **Proyectos de Claude (navegador)** = manuales compartidos del equipo, fuente de verdad accesible para todos.
- **Proyectos de Cowork** = espacios personales de ejecución donde de verdad producís el trabajo.

## 5. Configuración en 15 minutos

- **Minutos 0-1:** actualizá la app de escritorio de Claude.
- **Minutos 1-8:** creá tu primer Proyecto de Cowork. Elegí una tarea semanal recurrente. Escribí instrucciones de 5 a 8 líneas.
- **Minutos 8-12:** corré la primera tarea dentro del Proyecto: "Leé todo lo de esta carpeta. Después [tu tarea]. Empezá con AskUserQuestion para alinearnos antes de ejecutar."
- **Minutos 12-15:** configurá una tarea programada (si es semanal): Proyecto → Tareas programadas → Nueva → escribí el prompt → elegí frecuencia.

## 6. Dónde se queda corto (con honestidad)

Sin compartir en equipo todavía, almacenamiento solo local (sin sincronizar entre dispositivos), consume el límite de uso más rápido, sigue siendo una versión preliminar (revisá siempre los resultados), la app tiene que quedar abierta para las tareas programadas, la memoria está acotada por Proyecto.

---

*Contenido adaptado de la guía "Claude Cowork + Projects" de Ruben Hassid ([claude101.com](https://claude101.com)).*
