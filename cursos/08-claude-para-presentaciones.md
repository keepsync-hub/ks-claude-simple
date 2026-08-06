# Claude para presentaciones

> Cómo usar IA para generar presentaciones (de verdad buenas).

**Nivel:** Intermedio | **Duración:** 7 minutos

---

Tres métodos para hacer presentaciones con IA. El tercero es el mejor.

## Método 1: Claude solo (3/10)

**Ideal para:** velocidad extrema y diseño de cero esfuerzo.

**Cómo:**

1. Abrí Claude Cowork.
2. Seleccioná tu carpeta.
3. Prompt:

```
Necesito un PowerPoint (.pptx) de 10 diapositivas sobre [TEMA] para [CRITERIO
DE ÉXITO]. Empezá usando AskUserQuestion. Preguntá lo necesario para tener
el panorama completo. Recién ahí, creá el .pptx.
```

También existe un complemento de Claude dentro de PowerPoint (Insertar > Obtener complementos > buscar "Claude by Anthropic").

**El problema:** Claude escribe bien, pero el diseño visual queda básico. Alcanza para una sincronización de equipo, se queda corto para una reunión con clientes.

## Método 2: Gamma (8/10)

**Ideal para:** presentaciones rápidas y prolijas, cuando importan la velocidad y el diseño juntos.

**Cómo:**

1. Andá a gamma.app (cuenta gratis).
2. Clic en "Crear nuevo" → "Generar".
3. Escribí el tema y el criterio de éxito.
4. Gamma muestra un esquema → ajustalo → elegí tema visual → generá.
5. 60 segundos. Listo.

**Lo que Gamma hace bien:** layouts, espaciado y tipografía prolijos automáticamente, imágenes generadas por IA con más de 20 modelos, link web compartible con analíticas, exportación a PowerPoint, PDF o Google Slides.

**El problema:** el contenido es tan bueno como tu prompt de una línea. Sé específico.

## Método 3: Claude + Gamma (el mejor para lo que importa)

Presentaciones para clientes. Reuniones de directorio. Presentaciones de estrategia.

Claude piensa. Gamma diseña. Vos decidís qué queda.

### Paso 1 — Investigación

```
Estoy armando una presentación. No generes diapositivas todavía.
Investigá [tema] para [criterio de éxito].
1. Leé todos los archivos de esta carpeta.
2. Buscá en la web con al menos 5 búsquedas variadas (tendencias, datos,
   opiniones de expertos, casos, contraargumentos).
3. Revisá los hallazgos contra el criterio de éxito. Identificá vacíos.
   Volvé a buscar para cubrirlos.
4. Guardá un brief de investigación estructurado en brief-investigacion.md
   — organizado por tema, con URLs y datos clave.
Priorizá fuentes de 2025-2026. Empezá usando AskUserQuestion.
```

### Paso 2 — Guion

```
Leé brief-investigacion.md y convertilo en un esquema de presentación listo
para Gamma.
Objetivo de la presentación: [qué debería lograr]
Audiencia: [quién la va a ver]
1. Escribí un esquema diapositiva por diapositiva. Cada una con: título,
   2-3 puntos clave, algún dato de la investigación.
2. Máximo [X] diapositivas.
3. NO escribas párrafos completos — eso lo genera Gamma.
4. Guardá el esquema en esquema-gamma.md.
```

### Paso 3 — Generación

Claude genera la presentación en Gamma automáticamente.

### Paso 4 — Edición (10-15 min)

Revisá diapositiva por diapositiva:

- ¿Lo diría en voz alta así? Reescribilo si no.
- ¿Esta diapositiva se gana su lugar? Sacala si no.
- ¿El dato es correcto? Verificalo.

## Para equipos: lineamientos de marca

### Paso 1: creá tu tema de Gamma

1. Buscá tu plantilla de marca existente (PowerPoint o Google Slides).
2. gamma.app → Biblioteca → Temas → Nuevo tema → Importar tema.
3. Subí tu archivo .pptx.
4. Gamma extrae colores, tipografías y logo automáticamente.
5. Configuración → Valores por defecto del workspace → marcalo como predeterminado.

### Paso 2: armá tu archivo de reglas de marca

Soltá todos tus assets de marca en una carpeta. Abrí Claude Cowork. Prompt:

```
Leé todos los archivos de esta carpeta. Son los assets de marca de nuestra
empresa. Creá un único archivo markdown llamado reglas-marca.md que capture
todo lo necesario para armar una presentación on-brand.
Extraé: identidad visual, estructura de diapositivas, tono y lenguaje,
elementos recurrentes.
Escribilo como instrucciones para alguien nuevo que nunca vio nuestra marca.
```

### Paso 3: sumá la configuración de Gamma al archivo

Arriba del archivo:

```
## Configuración de Gamma
- Tema: [nombre del tema]
- Estilo de imagen por defecto: [fotografía limpia / ilustración minimalista / sin imágenes]
- Densidad de texto por defecto: [breve / media / detallada]
- Cantidad de diapositivas por defecto: [10-12]
```

### Paso 4: usalo

```
Leé primero reglas-marca.md. Creá una presentación de Gamma sobre [TEMA]
para [AUDIENCIA]. Usá nuestro tema de marca.
```

### Paso 5: actualizalo

Cuando la marca evoluciona: "Leé el archivo de marca actual y los nuevos assets. Actualizá lo que cambió. Dejá el resto igual."

---

*Contenido adaptado de la guía "Claude for slides" de Ruben Hassid ([claude101.com](https://claude101.com)).*
