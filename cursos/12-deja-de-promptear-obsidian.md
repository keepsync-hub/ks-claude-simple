# Deja de promptear: Claude Cowork + Obsidian

> Cómo configurar Claude Cowork con Obsidian (y dejar atrás la ingeniería de prompts).

**Nivel:** Avanzado | **Duración:** 10 minutos

---

La peor forma de usar Claude: un prompt vago → resultados mediocres → le echas la culpa a Claude.

¿Por qué pasa? Porque nadie quiere escribir 500 palabras de instrucciones solo para conseguir un primer borrador. Entonces escribes poco, y Claude te devuelve algo genérico que "suena como cualquier otro".

Los Proyectos de Claude (subir archivos una vez para reusarlos en varios chats) ayudan, pero no alcanzan: igual tienes que crear un proyecto por tema, volver a subir materiales parecidos y repetir las mismas reglas una y otra vez. Eso no es un verdadero segundo cerebro.

La solución real: tus archivos SON el prompt. Para siempre.

## Repaso rápido de la configuración de Cowork

Si todavía no tienes Cowork armado:

1. Claude Cowork solo está en la app de escritorio.
2. Necesitas una cuenta paga.
3. Crea una carpeta "Claude Cowork" con 3 subcarpetas: `sobre-mi`, `resultados-claude`, `plantillas`.
4. Configura las Instrucciones Globales (Configuración > Cowork > Instrucciones Globales).

## Obsidian: la pieza que falta

**El problema:** Cowork trabaja con archivos de texto (.md). Pero tú no eres programador. Manejar archivos .md es demasiado complejo — los abres, cuesta leerlos y editarlos, terminas sin editarlos nunca.

**La solución: Obsidian** — una app gratuita que abre tu carpeta de Cowork y la convierte en una base de conocimiento simple.

### Cómo instalarlo

1. Descárgalo gratis en **obsidian.md** (Mac, Windows, Linux).
2. Clic en "Abrir carpeta como bóveda".
3. Selecciona tu carpeta de Cowork.

Ahora puedes: ver cada archivo con formato correcto (títulos, negrita, viñetas), editar ahí mismo — se edita tu carpeta real de Cowork, buscar en todo el contenido.

## Cómo trabajan juntos Obsidian y Cowork

### 1. Deja de promptear

Flujo de ejemplo:

1. Abre Obsidian → ve al archivo sobre-mi.
2. Suma una regla: "Recuerda [nueva preferencia]" o "Reemplaza [hábito viejo] por [hábito nuevo]".
3. Obsidian se sincroniza solo con tu carpeta de Cowork.
4. Abre una sesión nueva de Cowork → ya sabe la actualización.

**Le escribiste el prompt a Claude una vez. Se acuerda para siempre.** Literalmente tu segundo cerebro.

### 2. Editar tus archivos de contexto

Cuando tu sobre-mi.md necesita una actualización (nuevo puesto, nuevos objetivos, algo nuevo que odias de cómo escribe Claude):

1. Abre Obsidian.
2. Edita el documento.
3. Ya está sincronizado con Cowork.
4. Inicia una sesión nueva de Cowork → ya lo sabe.

### 3. Encontrar cosas

Obsidian busca en todo lo que escribieron tú y Claude en tu carpeta. El buscador interno de Claude es malo — Obsidian resuelve eso.

### 4. Leer tus resultados

Todos los resultados anteriores se leen bien formateados en Obsidian — como un documento normal.

### 5. El flujo diario

- **Abre Obsidian** para navegar, buscar, leer y editar tus archivos.
- **Abre Cowork** para crear trabajo nuevo, generar resultados, armar entregables.
- Los dos apuntan a la misma carpeta. Siempre sincronizados.

## La carpeta de SKILLS (avanzado)

Tus archivos de "sobre mí" le cuentan a Claude tu estilo y tus reglas. Pero repites algunas tareas cada semana (post de LinkedIn, newsletter, brief de cliente). Las Skills son tus flujos guardados — un archivo por tarea, invocado con un `/comando`.

### Cómo crear una skill

1. Abre Cowork. Inicia una tarea nueva.
2. Prompt:

```
Crea una skill llamada "negociacion".
Entrevístame sobre el tipo de acuerdos que negocio a diario. Arma la mejor
skill de negociación para ayudarme a crear distintos escenarios.
Después guárdala como una skill que pueda invocar con /negociacion.
```

3. Responde las preguntas.
4. Haz clic en "Permitir siempre" cuando lo pida.
5. Claude crea el archivo de la skill → va a la carpeta de resultados.
6. Muévela a tu carpeta SKILLS en Obsidian.
7. Menú izquierdo > Personalizar > Skills > + > Subir una skill.

Ahora cuando escribes `/negociacion` en cualquier chat de Claude, sabe qué hacer.

Otros ejemplos de skills que puedes armar: `/newsletter`, `/brief-cliente`, `/email-ventas`, `/reporte-semanal`, `/notas-reunion`.

### Cómo volver a subir una skill editada

Edita la skill en Obsidian → Menú izquierdo > Personalizar > Skills > + > Subir.

## Por qué Obsidian (y no otras herramientas)

Ruben probó seis herramientas contra tres criterios: que sean gratis, que vivan dentro de tu computador (no en la nube) y que sean fáciles de usar, con un diseño limpio.

| Herramienta | Problema |
|---|---|
| Notion | Basado en la nube, no se sincroniza solo con la carpeta de Cowork |
| Google Drive | Los Google Docs no son archivos .md, hay que convertir todo el tiempo |
| Apple Notes | Formato cerrado, no puede apuntar a una carpeta |
| VS Code / Cursor | Excelente, pero pensado para developers |
| GitHub | Requiere git, commits, pushes |
| Typora | Editor lindo, pero USD 15 de pago único, un archivo a la vez, sin navegación por carpetas |
| MarkEdit | Gratis, pero solo Mac — mismas limitaciones que Typora |
| **Obsidian** | ✓ Lee la carpeta existente, gratis en un dispositivo (USD 4/mes si quieres sincronizar con el celular), pensado para no programadores |

Obsidian nunca toca tus archivos de una forma que rompa Cowork. Tus .md siguen siendo .md.

> ⚠ Aviso: herramientas como Notion pueden corromper el formato de tus .md sin que te des cuenta — y ahí Claude deja de leer instrucciones que antes le funcionaban perfecto. Obsidian nunca hace eso.

## El sistema completo

```
Claude Cowork/
├── SOBRE MI/
│   ├── sobre-mi.md (quién eres, tu estilo)
│   ├── estilo-anti-ia.md (lo que odias)
│   └── mi-empresa.md (objetivos, estrategia)
├── RESULTADOS/ (el trabajo de Claude, organizado por proyecto)
├── PLANTILLAS/ (tu mejor trabajo, para reusar)
└── SKILLS/ (tus flujos guardados con comando)
```

> ✓ Tip: no te pongas a poner al día años de notas pasadas. Bloquea dos sesiones de 20 minutos por semana y enfócate en lo que vas a crear de ahora en adelante, no en migrar todo tu archivo histórico.

---

*Contenido adaptado de la guía "Stop Prompting Claude" de Ruben Hassid ([claude101.com](https://claude101.com)).*
