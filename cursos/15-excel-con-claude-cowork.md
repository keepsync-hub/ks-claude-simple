# Excel con Claude Cowork

> Cómo hacer planillas de cálculo (con IA).

**Nivel:** Avanzado | **Duración:** 7 minutos

---

## Ranking de IAs para planillas

Entre las opciones probadas para crear planillas desde cero, un patrón se repite: los asistentes integrados dentro de Excel o Sheets suelen quedarse cortos, las IAs generalistas dicen "listo" pero cuesta encontrar el archivo, y las herramientas de programación son excelentes pero caras.

**Claude Cowork es la mejor opción para crear planillas desde cero.**

Para **editar** planillas ya existentes, un asistente de IA integrado directamente en Google Sheets suele ser la mejor opción.

## Cómo genera Excel Cowork

**Preparación:**

- App de Claude → pestaña Cowork.
- Conecta Google Drive (más fácil para exportar después).
- Elige el modelo más potente disponible + razonamiento adaptativo.

**Plantilla de prompt:**

```
Crea una planilla de Excel a partir de:
[DATOS: ruta del archivo, carpeta, o datos pegados]

### Propósito:
[Quién la usa y qué decisión o tarea sostiene — 1 frase.]

### Hojas necesarias:
- "[Nombre de hoja]": [columnas, qué representa cada fila, cálculos/fórmulas]
- "[Nombre de hoja]": [ej.: resumen con totales, tabla dinámica, gráficos]

### Formato:
[Formatos de moneda/fecha, resaltado condicional, fila de encabezado fija,
fila de totales]

Antes de construir, lístame tus 10 principales supuestos para que los revise,
y después ejecuta.
```

La parte clave: pedir "los 10 principales supuestos para revisar antes de ejecutar" — así mantienes el control.

**Después:** haz clic en el botón "Google Drive" para abrirlo directamente en Google Sheets.

## Editar planillas existentes

Para editar lo que ya tienes, busca un complemento de IA dentro de Google Sheets:

1. Extensiones → Complementos → Obtener complementos.
2. Busca e instala el complemento oficial de IA que prefieras (gratis).
3. Conecta tu cuenta.
4. Elige el modelo más potente disponible si necesitas más precisión.

**Mejores casos de uso:**

- Visualizar una pestaña con gráficos.
- Resumir una pestaña.
- Editar la planilla (el mejor uso): "En @Supuestos, cambia el escenario 'Optimista' para que sea más agresivo."

## Alternativa: herramientas dedicadas a planillas

Si tu trabajo diario es armar planillas, considera una herramienta de IA dedicada exclusivamente a spreadsheets, con configuración de contexto (tu rol, tus preferencias, el modelo a usar).

## Configuración recomendada

Para la mayoría de las personas:

1. **Crear** con Claude Cowork → exportar a Google Sheets.
2. **Editar** con un complemento de IA dentro de Google Sheets.

Para usuarios avanzados de planillas: explora herramientas dedicadas o modelos de programación (muy buenos, pero más costosos).

## Ejemplo: proyección de ingresos lista para directorio

```
Crea una planilla de Excel: proyección de ingresos a 12 meses para una
consultora de IA, de julio 2026 a junio 2027.

Propósito: proyección lista para directorio, para planificar contrataciones
y runway.

Contexto del negocio: 4 líneas de servicio: talleres, implementaciones
completas de IA, sprints de IA, retainers de Chief of AI fraccional. Embudo
de audiencia: newsletter 600k y creciendo; redes sociales 1M+.

Hojas necesarias:
- "Supuestos": todas las entradas etiquetadas y editables (nunca hardcodeadas
  más adelante)
- "Embudo": audiencia mensual → leads → llamadas → propuestas → cierres
- "Ingresos": proyección a 12 meses por línea de servicio
- "P&L": ingresos, costo de ventas, margen bruto, gastos operativos básicos
- "Dashboard": KPIs y gráficos en una sola pantalla
- "Escenarios": alternar entre Base / Optimista / Pesimista

Formato: moneda USD, porcentajes, encabezados fijos, formato condicional,
paleta prolija para proyectar en directorio.

Antes de construir, lístame tus 10 principales supuestos para revisarlos.
```

Resultado esperado: varias pestañas conectadas, cientos de fórmulas funcionando de punta a punta.

---

*Contenido adaptado de la guía "Excel with Claude cowork" de Ruben Hassid ([claude101.com](https://claude101.com)).*
