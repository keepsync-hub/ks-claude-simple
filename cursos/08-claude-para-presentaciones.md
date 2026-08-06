# Claude para presentaciones

> Cómo usar IA para generar presentaciones (de verdad buenas).

**Nivel:** Intermedio | **Duración:** 7 minutos

---

Tres métodos para hacer presentaciones con IA. El tercero es el mejor.

## Método 1: Claude solo (3/10)

**Ideal para:** velocidad extrema y diseño de cero esfuerzo.

**Cómo:**

1. Abre Claude Cowork.
2. Selecciona tu carpeta.
3. Prompt:

```
Necesito un PowerPoint (.pptx) de 10 diapositivas sobre [TEMA] para [CRITERIO
DE ÉXITO]. Empieza usando AskUserQuestion. Pregunta lo necesario para tener
el panorama completo. Recién ahí, crea el .pptx.
```

También existe un complemento de Claude dentro de PowerPoint (Insertar > Obtener complementos > buscar "Claude by Anthropic").

**El problema:** Claude escribe bien, pero el diseño visual queda básico. Alcanza para una sincronización de equipo, se queda corto para una reunión con clientes.

## Método 2: Gamma (8/10)

**Ideal para:** presentaciones rápidas y prolijas, cuando importan la velocidad y el diseño juntos.

**Cómo:**

1. Anda a gamma.app (cuenta gratis).
2. Clic en "Crear nuevo" → "Generar".
3. Escribe el tema y el criterio de éxito.
4. Gamma muestra un esquema → ajústalo → elige tema visual → genera.
5. 60 segundos. Listo.

**Lo que Gamma hace bien:** layouts, espaciado y tipografía prolijos automáticamente, imágenes generadas por IA con más de 20 modelos, link web compartible con analíticas, exportación a PowerPoint, PDF o Google Slides.

**El problema:** el contenido es tan bueno como tu prompt de una línea. Sé específico.

## Método 3: Claude + Gamma (el mejor para lo que importa)

Presentaciones para clientes. Reuniones de directorio. Presentaciones de estrategia.

Claude piensa. Gamma diseña. Tú decides qué queda.

### Paso 1 — Investigación

```
Estoy armando una presentación. No generes diapositivas todavía.
Investiga [tema] para [criterio de éxito].
1. Lee todos los archivos de esta carpeta.
2. Busca en la web con al menos 5 búsquedas variadas (tendencias, datos,
   opiniones de expertos, casos, contraargumentos).
3. Revisa los hallazgos contra el criterio de éxito. Identifica vacíos.
   Vuelve a buscar para cubrirlos.
4. Guarda un brief de investigación estructurado en brief-investigacion.md
   — organizado por tema, con URLs y datos clave.
Prioriza fuentes de 2025-2026. Empieza usando AskUserQuestion.
```

### Paso 2 — Guion

```
Lee brief-investigacion.md y conviértelo en un esquema de presentación listo
para Gamma.
Objetivo de la presentación: [qué debería lograr]
Audiencia: [quién la va a ver]
1. Escribe un esquema diapositiva por diapositiva. Cada una con: título,
   2-3 puntos clave, algún dato de la investigación.
2. Máximo [X] diapositivas.
3. NO escribas párrafos completos — eso lo genera Gamma.
4. Guarda el esquema en esquema-gamma.md.
```

### Paso 3 — Generación

Claude genera la presentación en Gamma automáticamente.

### Paso 4 — Edición (10-15 min)

Revisa diapositiva por diapositiva:

- ¿Lo diría en voz alta así? Reescríbelo si no.
- ¿Esta diapositiva se gana su lugar? Sácala si no.
- ¿El dato es correcto? Verifícalo.

## Para equipos: lineamientos de marca

### Paso 1: crea tu tema de Gamma

1. Busca tu plantilla de marca existente (PowerPoint o Google Slides).
2. gamma.app → Biblioteca → Temas → Nuevo tema → Importar tema.
3. Sube tu archivo .pptx.
4. Gamma extrae colores, tipografías y logo automáticamente.
5. Configuración → Valores por defecto del workspace → márcalo como predeterminado.

### Paso 2: arma tu archivo de reglas de marca

Suelta todos tus assets de marca en una carpeta. Abre Claude Cowork. Prompt:

```
Lee todos los archivos de esta carpeta. Son los assets de marca de nuestra
empresa. Crea un único archivo markdown llamado reglas-marca.md que capture
todo lo necesario para armar una presentación on-brand.
Extrae: identidad visual, estructura de diapositivas, tono y lenguaje,
elementos recurrentes.
Escríbelo como instrucciones para alguien nuevo que nunca vio nuestra marca.
```

### Paso 3: suma la configuración de Gamma al archivo

Arriba del archivo:

```
## Configuración de Gamma
- Tema: [nombre del tema]
- Estilo de imagen por defecto: [fotografía limpia / ilustración minimalista / sin imágenes]
- Densidad de texto por defecto: [breve / media / detallada]
- Cantidad de diapositivas por defecto: [10-12]
```

### Paso 4: úsalo

```
Lee primero reglas-marca.md. Crea una presentación de Gamma sobre [TEMA]
para [AUDIENCIA]. Usa nuestro tema de marca.
```

### Paso 5: actualízalo

Cuando la marca evoluciona: "Lee el archivo de marca actual y los nuevos assets. Actualiza lo que cambió. Deja el resto igual."

---

*Contenido adaptado de la guía "Claude for slides" de Ruben Hassid ([claude101.com](https://claude101.com)).*
