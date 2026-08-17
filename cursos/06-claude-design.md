# Claude Design

> Cómo acceder y usar Claude Design.

**Nivel:** Intermedio | **Duración:** 9 minutos

---

Claude Design es un producto aparte — diseña. Vive en **claude.ai/design**. Corre sobre Opus 4.7, el mejor modelo de visión disponible. Incluye un botón "Enviar a Canva".

> ★ Para recordar: el anuncio de Claude Design tuvo 55 millones de vistas en 2 días — y Figma perdió $730M de valoración de mercado en el proceso.

## 1. Cómo acceder

Claude Design tiene su propia URL: **claude.ai/design**

- **Plan Pro o Max:** entra a claude.ai/design e inicia sesión.
- **Team o Enterprise:** un admin debe habilitarlo: Configuración de la organización → Capacidades → Anthropic Labs → activar.

> ⚠ Aviso: es un research preview con lanzamiento gradual. Si no te deja entrar, reintenta en unos días.

Consume tokens muy rápido. Úsalo con cuidado.

## 2. Pruebas rápidas (menos de 2 min cada una)

### Prueba 1: crear un sitio web

1. Anda a la pestaña "Wireframe" → selecciona "Alta fidelidad".
2. Pega este prompt:

```
Crea una landing page de alta fidelidad para recaudar $[MONTO] de [INVERSORES]
para "[NOMBRE DEL PRODUCTO]" - [descripción].
Público objetivo: [tu público objetivo].
Tono: [cómo debería sentirse el visitante] - mezcla de [sitio] + [sitio].
```

**Ejemplo real:**

```
Crea una landing page de alta fidelidad para recaudar $100 millones de VCs
israelíes para "Data Centers Submarinos Gubernamentales" — infraestructura
soberana de data center submarino, exclusiva para cada nación, construida
específicamente para cargas de IA y robótica. Público objetivo: firmas
serias de venture capital israelíes e inversores tecnológicos de gobierno.
Tono: premium, estratégico, ligeramente futurista pero muy creíble y
seguro — mezcla de la pulcritud de Stripe + la seriedad defensa-tech de
Anduril + el pragmatismo de las startups israelíes.
```

Resultado: un sitio web profesional completo, de una sola pasada.

### Prueba 2: armar una presentación

Vuelve al inicio → pestaña "Presentación".

```
Crea una presentación para [propósito].
[Breve descripción del producto/servicio]
```

**Ejemplo real:** "Crea un pitch deck para mi equipo de ventas. Nuestra empresa tiene data centers submarinos con GPUs, exclusivos para empresas israelíes, para asegurar soberanía total."

Responde las preguntas de Claude → clic en "Continuar" → obtienes la presentación completa, con búsqueda visual integrada y estilo apropiado.

### Prueba 3: crear un video animado

Clic en "Desde plantilla". Escribe un prompt con una historia visual (o dibuja tu idea). Obtienes un video animado completo.

**Ejemplo real (video de 45 segundos):**

```
Crea un video animado de 45 segundos explicando cómo Israel está
construyendo data centers submarinos frente a la costa mediterránea
para enfriar la próxima ola de cómputo de IA. Formato 16:9.
Estructura:
0-5s: Apertura. Título "La carrera del cómputo de IA se va bajo el
agua." Animación de olas de fondo.
5-15s: El problema. Estadística animada: "Los data centers de IA
consumirán 945 TWh para 2030." Fila de data centers terrestres con
overlay térmico.
15-30s: La solución. Corte transversal animado de una cápsula de
servidores sellada descendiendo frente a la costa de Tel Aviv. El agua
de mar fluye alrededor como enfriamiento pasivo. Peces nadan cerca.
Suben burbujas.
30-40s: Tres tarjetas de estadísticas entran deslizándose: "40% menos
costo de enfriamiento." "Cero agua dulce usada." "8x más cerca de los
usuarios europeos."
40-45s: Tarjeta de cierre. "La carrera de los data centers submarinos
de Israel. Comienza en 2026." Espacio para logo abajo a la derecha.
Estilo visual: tech limpio, ilustraciones de línea fina, paleta azul
mediterráneo + beige arena + blanco puro. Tipografía cinética para las
estadísticas. Paneos de cámara suaves, sin cortes duros. Sin stock
footage. Sin emojis. Serif para títulos, sans-serif para el cuerpo.
```

## 3. El truco del video (para conseguir mejores diapositivas)

1. Usa Claude Research (clic en "+" → "Investigación") para generar un informe sobre un tema. Después de unos 13 minutos, descárgalo en markdown.
2. Sube ese markdown a Claude Design:

```
Arma un video animado de 30 segundos que resuma este texto para alguien
que lo ve por primera vez.
```

3. Después: "ahora convierte ese video en una presentación de diapositivas."

Las diapositivas salen mejor que si pides la presentación directamente — porque el paso del video obliga a pensar visualmente primero.

## 4. Flujo avanzado: de 0 a 1 (Cowork + Claude Design)

### Paso 1: extrae tu sistema de marca con Cowork

Suelta todos tus assets de marca (logos, presentaciones, fotografía, landing pages, PDF de marca, capturas de producto) en una carpeta. Abre Cowork. Prompt:

```
Analiza esta carpeta y arma un documento completo del sistema de diseño:
tipografías, colores, estilos gráficos, patrones de componentes, tono,
convenciones de layout. Marca cualquier cosa que falte. Guárdalo como
DISEÑO.md en mi carpeta.
```

### Paso 2: sube DISEÑO.md a Claude Design

Cárgalo como contexto. Cada prompt futuro lo aplica automáticamente — no necesitas repetir colores ni tipografías.

*(Alternativa: si tu sistema de diseño ya vive en código, puedes enlazar el repositorio directamente en vez de subir el markdown.)*

### Paso 3: genera con un buen prompt

Todo buen prompt tiene 4 entradas: **objetivo, layout, contenido, restricciones.**

```
Arma una página de precios para [producto]. 3 planes, toggle anual/mensual,
CTA fijo en mobile. Mobile-first y responsive. Usa nuestro componente de
botón primario. Que coincida con el tono de nuestra homepage actual.
```

### Paso 4: itera

- **Cambios estructurales → por chat.** Ej.: "Muéstrame 3 layouts alternativos." Clic en "Variaciones" para obtener varias versiones en segundos.
- **Cambios de detalle (píxeles) → clic en editar sobre el lienzo.** Selecciona lo que quieres cambiar (se resalta en verde).
- **Antes de experimentos riesgosos → guarda una rama.** Prompt: "Guarda lo que tenemos, y prueba un enfoque completamente distinto."

### Paso 5: valida

```
Revisa esto en términos de contraste y accesibilidad. Lista cualquier
violación de WCAG 2.1 AA.
```
```
Genera las versiones de escritorio, tablet y mobile.
```
```
Sugiere 2 variantes A/B del hero, cada una con un ángulo distinto.
```

### Paso 6: exporta

Botón Exportar (arriba a la derecha): enviar a Canva, PPTX, PDF, HTML independiente, o paquete para Claude Code.

> ⚠ Aviso: el botón "Enviar a Canva" todavía no funciona.

Una página sola toma cerca de 1 hora; un sitio completo con varias pestañas, 2-3 horas. Antes esto tomaba un día entero.

## 5. Copia cualquier diseño

Existe un sitio gratuito — **getdesign.md** — con archivos DISEÑO.md de marcas conocidas (Mastercard, Airbnb, Ferrari, etc.).

1. Busca una marca (ej.: "Stripe").
2. Descarga su DISEÑO.md.
3. Súbelo a Claude Design.
4. Suma el brief de tu producto.

Ahora tu producto se ve con el sistema de diseño de esa marca.

## 6. El gusto es lo único que no se automatiza

Claude Design puede armar 10 dashboards en 10 minutos. Lo que no puede hacer es decirte cuál conviene lanzar. Eso requiere **criterio** — la capacidad de decir que no a 9 versiones y sí a 1.

> ★ Para recordar: "Las herramientas se abarataron. El buen gusto se volvió mucho más caro." Si eres diseñador y te preocupa quedar obsoleto, estás mirando el momento al revés — los diseñadores con buen criterio están por vivir la mejor década de su carrera.

**Limitaciones actuales:** consume muchos tokens, todavía tiene errores, control limitado.

Es el mismo patrón que ya viste con Claude Code (cambió cómo se programa) y Claude Cowork (llegó por los trabajadores de conocimiento): ahora Claude Design llega por los diseñadores.

---

*Contenido adaptado de la guía "Claude Design" de Ruben Hassid ([claude101.com](https://claude101.com)).*
