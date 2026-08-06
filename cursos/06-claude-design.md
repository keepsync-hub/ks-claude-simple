# Claude Design

> Cómo acceder y usar Claude Design.

**Nivel:** Intermedio | **Duración:** 9 minutos

---

Claude Design es un producto aparte — diseña. Vive en **claude.ai/design**. Corre sobre el mejor modelo de visión disponible. Incluye un botón "Enviar a Canva".

## 1. Cómo acceder

Claude Design tiene su propia URL: **claude.ai/design**

- **Plan Pro o Max:** entrá a claude.ai/design e iniciá sesión.
- **Team o Enterprise:** un admin debe habilitarlo: Configuración de la organización → Capacidades → Anthropic Labs → activar.

Consume tokens muy rápido. Usalo con cuidado.

## 2. Pruebas rápidas (menos de 2 min cada una)

### Prueba 1: crear un sitio web

1. Andá a la pestaña "Wireframe" → seleccioná "Alta fidelidad".
2. Pegá este prompt:

```
Creá una landing page de alta fidelidad para recaudar $[MONTO] de [INVERSORES]
para "[NOMBRE DEL PRODUCTO]" - [descripción].
Público objetivo: [tu público objetivo].
Tono: [cómo debería sentirse el visitante] - mezcla de [sitio] + [sitio].
```

### Prueba 2: armar una presentación

Volvé al inicio → pestaña "Presentación".

```
Creá una presentación para [propósito].
[Breve descripción del producto/servicio]
```

Respondé las preguntas de Claude → obtenés la presentación completa.

### Prueba 3: crear un video animado

Clic en "Desde plantilla". Escribí un prompt corto con una historia visual. Obtenés un video animado completo (45 segundos).

## 3. El truco del video (para conseguir mejores diapositivas)

1. Usá Claude Research (clic en "+" → "Investigación") para generar un informe sobre un tema → descargalo en markdown.
2. Subí ese markdown a Claude Design:

```
Armá un video animado de 30 segundos que resuma este texto para alguien
que lo ve por primera vez.
```

3. Después: "ahora convertí ese video en una presentación de diapositivas."

Las diapositivas salen mejor que si pedís la presentación directamente — porque el paso del video obliga a pensar visualmente primero.

## 4. Flujo avanzado: de 0 a 1 (Cowork + Claude Design)

### Paso 1: extraé tu sistema de marca con Cowork

Soltá todos tus assets de marca (logos, presentaciones, PDFs) en una carpeta. Abrí Cowork. Prompt:

```
Analizá esta carpeta y armá un documento completo del sistema de diseño:
tipografías, colores, estilos gráficos, patrones de componentes, tono,
convenciones de layout. Guardalo como DISEÑO.md en mi carpeta.
```

### Paso 2: subí DISEÑO.md a Claude Design

Cargalo como contexto. Cada prompt futuro lo aplica automáticamente.

### Paso 3: generá con un buen prompt

Todo buen prompt tiene 4 entradas: **objetivo, layout, contenido, restricciones.**

```
Armá una página de precios para [producto]. 3 planes, toggle anual/mensual,
CTA fijo en mobile. Mobile-first y responsive. Usá nuestro componente de
botón primario.
```

### Paso 4: iterá

- Cambios estructurales → por chat.
- Cambios de detalle (píxeles) → clic en editar sobre el lienzo.

### Paso 5: validá

```
Revisá esto en términos de contraste y accesibilidad. Listá cualquier
violación de WCAG 2.1 AA.
```
```
Generá las versiones de escritorio, tablet y mobile.
```

### Paso 6: exportá

Botón Exportar (arriba a la derecha): enviar a Canva, PPTX, PDF, HTML independiente, o paquete para Claude Code.

## 5. Copiá cualquier diseño

Existen sitios con archivos DISEÑO.md gratuitos de marcas conocidas (Mastercard, Airbnb, Ferrari, etc.).

1. Buscá una marca (ej.: "Stripe").
2. Descargá su DISEÑO.md.
3. Subilo a Claude Design.
4. Sumá el brief de tu producto.

Ahora tu producto se ve con el sistema de diseño de esa marca.

## 6. El gusto es lo único que no se automatiza

Claude Design puede armar 10 dashboards en 10 minutos. Lo que no puede hacer es decirte cuál conviene lanzar. Eso requiere **criterio** — la capacidad de decir que no a 9 versiones y sí a 1.

**Limitaciones actuales:** consume muchos tokens, todavía tiene errores, control limitado.

---

*Contenido adaptado de la guía "Claude Design" de Ruben Hassid ([claude101.com](https://claude101.com)).*
