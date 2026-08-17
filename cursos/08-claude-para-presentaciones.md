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

También existe un complemento de Claude dentro de PowerPoint (Insertar > Obtener complementos > buscar "Claude by Anthropic"). Le chateas y edita tus diapositivas directamente — aparece en la barra lateral derecha, igual que Claude para Excel.

**El problema:** Claude escribe bien, pero el diseño visual queda básico. Alcanza para una sincronización de equipo, se queda corto para una reunión con clientes.

## Método 2: Gamma (8/10)

**Ideal para:** presentaciones rápidas y prolijas, cuando importan la velocidad y el diseño juntos.

**Cómo:**

1. Anda a gamma.app (cuenta gratis).
2. Clic en "Crear nuevo" → "Generar".
3. Escribe el tema y el criterio de éxito.
4. Gamma muestra un esquema → ajústalo → elige tema visual → genera.
5. 60 segundos. Listo.

**Lo que Gamma hace bien:** layouts, espaciado y tipografía prolijos automáticamente, imágenes generadas por IA con más de 20 modelos (incluido Nano-Banana 2), link web compartible con analíticas (quién lo abrió, cuánto scrolleó, cuánto tiempo pasó), exportación a PowerPoint, PDF o Google Slides (también puedes importarlos). Está pensado sobre todo para presentaciones, pero también sirve para documentos, sitios web y posts de redes sociales.

70 millones de usuarios, 400 millones de presentaciones generadas. Gratis para empezar; el plan Plus cuesta USD 8/mes y el Pro USD 15/mes.

**El problema:** el contenido es tan bueno como tu prompt de una línea. Sé específico.

## Método 3: Claude + Gamma (el mejor para lo que importa)

Presentaciones para clientes. Reuniones de directorio. Presentaciones de estrategia.

Claude piensa. Gamma diseña. Tú decides qué queda.

### El atajo (no recomendado)

Puedes conectar Gamma a Claude por "Conectores": clic en "+" → "Conectores" → "Gestionar conectores" → agrega "Gamma". Después le pides directamente a Claude que genere la presentación en Gamma.

> ⚠ Aviso: es literalmente Gamma dentro de Claude. Funciona, pero puedes hacerlo mucho mejor con el método de investigación → guion → generación de abajo.

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
Prioriza fuentes de 2025-2026. Marca si las fuentes se contradicen o si los datos son escasos. Empieza usando AskUserQuestion.
```

> ✓ Tip: el punto "Lee todos los archivos de esta carpeta" aplica solo si sueltas tu material de referencia (documentos, informes, datos, notas, páginas de la competencia) dentro de esa carpeta.

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
5. Después, pasa el esquema a Gamma como presentación usando textMode "generate".
```

### Paso 3 — Generación

Con el brief aprobado, Claude genera la presentación en Gamma usando el conector de Gamma.

### Paso 4 — Edición (10-15 min)

Abre el link de Gamma. Revisa diapositiva por diapositiva:

- ¿Lo diría en voz alta así? Reescríbelo si no.
- ¿Esta diapositiva se gana su lugar? Sácala si no.
- ¿El dato es correcto? Verifícalo.

> ✓ Tip: estos 10-15 minutos suelen ser la diferencia entre bueno y excelente. Sé excelente.

## Para equipos: lineamientos de marca

Si trabajas en una empresa con lineamientos de marca, esta sección es para ti. Vas a extraer tu marca en dos cosas: un tema de Gamma (para el diseño) y un archivo markdown (para Claude). Lo configuras una vez y todo el equipo hace presentaciones on-brand desde ahí en adelante.

### Paso 1: crea tu tema de Gamma

1. Busca tu plantilla de marca existente (PowerPoint o Google Slides, con los colores, tipografías y logo correctos).
2. gamma.app → Biblioteca → Temas → Nuevo tema → Importar tema.
3. Sube tu archivo .pptx o de Google Slides.
4. Gamma extrae colores, tipografías y logo automáticamente (toma unos segundos).
5. Revisa el resultado. Ajusta el color de acento principal, los fondos de tarjeta y los colores de página si hace falta.
6. Sube una versión más limpia de tu logo si el extraído se ve mal.
7. Clic en "Guardar y personalizar" para afinar tarjetas y botones, o "Guardar y finalizar" si ya se ve bien.
8. Ponle un nombre claro (ej: "Marca Acme 2026").
9. Configuración → Valores por defecto del workspace → márcalo como predeterminado.

A partir de ahí, cada Gamma nuevo arranca on-brand.

### Paso 2: arma tu archivo de reglas de marca

Junta todo lo relacionado a tu marca: PDF de lineamientos, tu mejor presentación existente, documento de tono de voz, lo que tengas. Suéltalo todo en una carpeta. Abre Claude Cowork, selecciona esa carpeta. Prompt:

```
Lee todos los archivos de esta carpeta. Son los assets de marca de nuestra
empresa.

Crea un único archivo markdown llamado reglas-marca.md que capture todo lo
necesario para armar una presentación on-brand.

Extrae y organiza:

Identidad visual:
- Colores primarios y secundarios de marca (códigos hexadecimales)
- Tipografías para títulos y cuerpo de texto
- Reglas de uso del logo (dónde va, versión clara vs. oscura)

Estructura de diapositivas:
- Qué va en la diapositiva de título
- Cómo estructuramos un mazo típico (apertura, cuerpo, cierre)
- Máximo de viñetas por diapositiva
- Cómo presentamos datos (tipos de gráfico, estilo de etiquetado)
- Frases completas o fragmentos cortos

Tono y lenguaje:
- Qué tan formal o informal
- Palabras y frases que siempre usamos
- Palabras y frases que evitamos
- Cómo nos referimos a la empresa, el producto y los clientes

Elementos recurrentes:
- ¿Cerramos con una diapositiva de CTA o próximos pasos?
- ¿Diapositiva de contacto o de equipo?
- ¿Avisos legales o disclaimers?

Escríbelo como instrucciones para alguien nuevo que nunca vio nuestra marca.
```

Claude lee tus assets y genera el .md. Revísalo. Agrega lo que Claude se haya saltado. Guárdalo en tu carpeta de Cowork.

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

Cada prompt arranca igual (una vez que seleccionaste la carpeta de Cowork con tu archivo .md):

```
Lee primero reglas-marca.md. Crea una presentación de Gamma sobre [TEMA]
para [AUDIENCIA]. Usa nuestro tema de marca. [Algo específico sobre esta
presentación].
```

Claude lee el archivo, aplica las reglas y se lo manda a Gamma con tu tema. On-brand desde el primer borrador.

Comparte la carpeta con tu equipo. Todos usan el mismo archivo, el mismo tema, la misma calidad de output — incluidas las contrataciones nuevas.

### Paso 5: actualízalo

Cuando la marca evoluciona:

1. Suelta el reglas-marca.md actual más los nuevos assets de marca en la carpeta.
2. Prompt: "Lee el archivo de marca actual y los nuevos assets. Actualiza lo que cambió. Deja el resto igual."
3. Revisa y guarda.

Una actualización y todas las presentaciones futuras la reflejan.

---

*Contenido adaptado de la guía "Claude for slides" de Ruben Hassid ([claude101.com](https://claude101.com)).*
