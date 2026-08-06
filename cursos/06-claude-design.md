# Claude Design

> Cómo acceder y usar Claude Design.

**Nivel:** Intermedio | **Duración:** 9 minutos

---

Claude Design es un producto aparte — diseña. Vive en **claude.ai/design**. Corre sobre el mejor modelo de visión disponible. Incluye un botón "Enviar a Canva".

## 1. Cómo acceder

Claude Design tiene su propia URL: **claude.ai/design**

- **Plan Pro o Max:** entra a claude.ai/design e inicia sesión.
- **Team o Enterprise:** un admin debe habilitarlo: Configuración de la organización → Capacidades → Anthropic Labs → activar.

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

### Prueba 2: armar una presentación

Vuelve al inicio → pestaña "Presentación".

```
Crea una presentación para [propósito].
[Breve descripción del producto/servicio]
```

Responde las preguntas de Claude → obtienes la presentación completa.

### Prueba 3: crear un video animado

Clic en "Desde plantilla". Escribe un prompt corto con una historia visual. Obtienes un video animado completo (45 segundos).

## 3. El truco del video (para conseguir mejores diapositivas)

1. Usa Claude Research (clic en "+" → "Investigación") para generar un informe sobre un tema → descárgalo en markdown.
2. Sube ese markdown a Claude Design:

```
Arma un video animado de 30 segundos que resuma este texto para alguien
que lo ve por primera vez.
```

3. Después: "ahora convierte ese video en una presentación de diapositivas."

Las diapositivas salen mejor que si pides la presentación directamente — porque el paso del video obliga a pensar visualmente primero.

## 4. Flujo avanzado: de 0 a 1 (Cowork + Claude Design)

### Paso 1: extrae tu sistema de marca con Cowork

Suelta todos tus assets de marca (logos, presentaciones, PDFs) en una carpeta. Abre Cowork. Prompt:

```
Analiza esta carpeta y arma un documento completo del sistema de diseño:
tipografías, colores, estilos gráficos, patrones de componentes, tono,
convenciones de layout. Guárdalo como DISEÑO.md en mi carpeta.
```

### Paso 2: sube DISEÑO.md a Claude Design

Cárgalo como contexto. Cada prompt futuro lo aplica automáticamente.

### Paso 3: genera con un buen prompt

Todo buen prompt tiene 4 entradas: **objetivo, layout, contenido, restricciones.**

```
Arma una página de precios para [producto]. 3 planes, toggle anual/mensual,
CTA fijo en mobile. Mobile-first y responsive. Usa nuestro componente de
botón primario.
```

### Paso 4: itera

- Cambios estructurales → por chat.
- Cambios de detalle (píxeles) → clic en editar sobre el lienzo.

### Paso 5: valida

```
Revisa esto en términos de contraste y accesibilidad. Lista cualquier
violación de WCAG 2.1 AA.
```
```
Genera las versiones de escritorio, tablet y mobile.
```

### Paso 6: exporta

Botón Exportar (arriba a la derecha): enviar a Canva, PPTX, PDF, HTML independiente, o paquete para Claude Code.

## 5. Copia cualquier diseño

Existen sitios con archivos DISEÑO.md gratuitos de marcas conocidas (Mastercard, Airbnb, Ferrari, etc.).

1. Busca una marca (ej.: "Stripe").
2. Descarga su DISEÑO.md.
3. Súbelo a Claude Design.
4. Suma el brief de tu producto.

Ahora tu producto se ve con el sistema de diseño de esa marca.

## 6. El gusto es lo único que no se automatiza

Claude Design puede armar 10 dashboards en 10 minutos. Lo que no puede hacer es decirte cuál conviene lanzar. Eso requiere **criterio** — la capacidad de decir que no a 9 versiones y sí a 1.

**Limitaciones actuales:** consume muchos tokens, todavía tiene errores, control limitado.

---

*Contenido adaptado de la guía "Claude Design" de Ruben Hassid ([claude101.com](https://claude101.com)).*
