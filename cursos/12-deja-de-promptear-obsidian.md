# Dejá de promptear: Claude Cowork + Obsidian

> Cómo configurar Claude Cowork con Obsidian (y dejar atrás la ingeniería de prompts).

**Nivel:** Avanzado | **Duración:** 10 minutos

---

La peor forma de usar Claude: un prompt vago → resultados mediocres → le echás la culpa a Claude.

La solución: tus archivos SON el prompt. Para siempre.

## Repaso rápido de la configuración de Cowork

Si todavía no tenés Cowork armado:

1. Claude Cowork solo está en la app de escritorio.
2. Necesitás una cuenta paga.
3. Creá una carpeta "Claude Cowork" con 3 subcarpetas: `sobre-mi`, `resultados-claude`, `plantillas`.
4. Configurá las Instrucciones Globales (Configuración > Cowork > Instrucciones Globales).

## Obsidian: la pieza que falta

**El problema:** Cowork trabaja con archivos de texto (.md). Pero vos no sos programador. Manejar archivos .md es demasiado complejo — los abrís, cuesta leerlos y editarlos, terminás sin editarlos nunca.

**La solución: Obsidian** — una app gratuita que abre tu carpeta de Cowork y la convierte en una base de conocimiento simple.

### Cómo instalarlo

1. Descargalo gratis en **obsidian.md** (Mac, Windows, Linux).
2. Clic en "Abrir carpeta como bóveda".
3. Seleccioná tu carpeta de Cowork.

Ahora podés: ver cada archivo con formato correcto (títulos, negrita, viñetas), editar ahí mismo — se edita tu carpeta real de Cowork, buscar en todo el contenido.

## Cómo trabajan juntos Obsidian y Cowork

### 1. Dejá de promptear

Flujo de ejemplo:

1. Abrí Obsidian → andá al archivo sobre-mi.
2. Sumá una regla: "Recordá [nueva preferencia]" o "Reemplazá [hábito viejo] por [hábito nuevo]".
3. Obsidian se sincroniza solo con tu carpeta de Cowork.
4. Abrí una sesión nueva de Cowork → ya sabe la actualización.

**Le prompteaste a Claude una vez. Se acuerda para siempre.** Literalmente tu segundo cerebro.

### 2. Editar tus archivos de contexto

Cuando tu sobre-mi.md necesita una actualización (nuevo puesto, nuevos objetivos, algo nuevo que odiás de cómo escribe Claude):

1. Abrí Obsidian.
2. Editá el documento.
3. Ya está sincronizado con Cowork.
4. Iniciá una sesión nueva de Cowork → ya lo sabe.

### 3. Encontrar cosas

Obsidian busca en todo lo que escribieron vos y Claude en tu carpeta. El buscador interno de Claude es malo — Obsidian resuelve eso.

### 4. Leer tus resultados

Todos los resultados anteriores se leen bien formateados en Obsidian — como un documento normal.

### 5. El flujo diario

- **Abrí Obsidian** para navegar, buscar, leer y editar tus archivos.
- **Abrí Cowork** para crear trabajo nuevo, generar resultados, armar entregables.
- Los dos apuntan a la misma carpeta. Siempre sincronizados.

## La carpeta de SKILLS (avanzado)

Tus archivos de "sobre mí" le cuentan a Claude tu estilo y tus reglas. Pero repetís algunas tareas cada semana (post de LinkedIn, newsletter, brief de cliente). Las Skills son tus flujos guardados — un archivo por tarea, invocado con un `/comando`.

### Cómo crear una skill

1. Abrí Cowork. Iniciá una tarea nueva.
2. Prompt:

```
Creá una skill llamada "negociacion".
Entrevistame sobre el tipo de acuerdos que negocio a diario. Armá la mejor
skill de negociación para ayudarme a crear distintos escenarios.
Después guardala como una skill que pueda invocar con /negociacion.
```

3. Respondé las preguntas.
4. Hacé clic en "Permitir siempre" cuando lo pida.
5. Claude crea el archivo de la skill → va a la carpeta de resultados.
6. Movela a tu carpeta SKILLS en Obsidian.
7. Menú izquierdo > Personalizar > Skills > + > Subir una skill.

Ahora cuando escribís `/negociacion` en cualquier chat de Claude, sabe qué hacer.

### Cómo volver a subir una skill editada

Editá la skill en Obsidian → Menú izquierdo > Personalizar > Skills > + > Subir.

## Por qué Obsidian (y no otras herramientas)

| Herramienta | Problema |
|---|---|
| Notion | Basado en la nube, no se sincroniza solo con la carpeta de Cowork |
| Google Drive | Los Google Docs no son archivos .md, hay que convertir todo el tiempo |
| Apple Notes | Formato cerrado, no puede apuntar a una carpeta |
| VS Code / Cursor | Excelente, pero pensado para developers |
| GitHub | Requiere git, commits, pushes |
| Typora | Un archivo a la vez, sin navegación por carpetas |
| **Obsidian** | ✓ Lee la carpeta existente, gratis, pensado para no programadores |

Obsidian nunca toca tus archivos de una forma que rompa Cowork. Tus .md siguen siendo .md.

## El sistema completo

```
Claude Cowork/
├── SOBRE MI/
│   ├── sobre-mi.md (quién sos, tu estilo)
│   ├── estilo-anti-ia.md (lo que odiás)
│   └── mi-empresa.md (objetivos, estrategia)
├── RESULTADOS/ (el trabajo de Claude, organizado por proyecto)
├── PLANTILLAS/ (tu mejor trabajo, para reusar)
└── SKILLS/ (tus flujos guardados con comando)
```

---

*Contenido adaptado de la guía "Stop Prompting Claude" de Ruben Hassid ([claude101.com](https://claude101.com)).*
