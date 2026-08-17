# Excel con Claude Cowork

> Cómo hacer planillas de cálculo (con IA).

**Nivel:** Avanzado | **Duración:** 7 minutos

---

## Ranking de IAs para planillas

Ruben probó 11 opciones distintas para crear planillas desde cero. Este es el veredicto de cada una:

| Herramienta | Veredicto |
|---|---|
| Copilot | "Absolutamente terrible, ni siquiera lograba armar una planilla." |
| Copilot dentro de Excel | No funcionó tras varios intentos. |
| Claude | Bien, pero no tan efectivo como Claude Cowork. |
| Claude dentro de Microsoft Excel | Buena opción, pero no la favorita. |
| Gemini (app y navegador) | Por debajo de Claude Cowork o ChatGPT. |
| Gemini dentro de Google Sheets | Sin acceso disponible (por ahora). |
| Grok | Dice "listo", pero el archivo no se puede abrir ni encontrar. |
| ChatGPT | Funciona, pero se prefiere dentro de Google Sheets. |
| ChatGPT dentro de Google Sheets | Mejor para editar que para crear desde cero. |
| Codex (OpenAI) | "Es el mejor, pero se me acabaron los tokens en 2 prompts." |
| **Claude Cowork** | **La mejor opción para crear planillas desde cero.** |

En resumen: los asistentes integrados dentro de Excel o Sheets suelen quedarse cortos, las IAs generalistas dicen "listo" pero cuesta encontrar el archivo, y las herramientas de programación son excelentes pero caras.

**Claude Cowork es la mejor opción para crear planillas desde cero.**

Para **editar** planillas ya existentes, un asistente de IA integrado directamente en Google Sheets suele ser la mejor opción.

## Cómo genera Excel Cowork

**Preparación:**

- Descarga la app de Claude (claude.com/download) — necesitas una suscripción Pro (US$20/mes).
- App de Claude → pestaña Cowork.
- Conecta Google Drive (más fácil para exportar después).
- Elige el modelo más potente disponible (hoy, Opus) + razonamiento adaptativo.

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

> ★ Para recordar: la parte clave del prompt es pedir "los 10 principales supuestos para revisar antes de ejecutar". El que controla a la IA eres tú, no al revés.

**Después:** haz clic en el botón "Google Drive" para abrirlo directamente en Google Sheets.

## Editar planillas existentes

Para editar lo que ya tienes, busca un complemento de IA dentro de Google Sheets:

1. Extensiones → Complementos → Obtener complementos.
2. Busca el complemento oficial de ChatGPT (de OpenAI) — o el que prefieras — e instálalo (gratis).
3. Otorga los permisos la primera vez que lo uses y conecta tu cuenta.
4. Elige el modelo más potente disponible ("Heavy", si está disponible) si necesitas más precisión.

**Mejores casos de uso:**

- Visualizar una pestaña con gráficos.
- Resumir una pestaña (incluso sin abrirla).
- Editar la planilla (el mejor uso): "En @Supuestos, cambia el escenario 'Optimista' para que sea más agresivo." La planilla completa se actualiza en un par de minutos.

> ✓ Tip: este es el flujo favorito de Ruben — crear con Claude Cowork y después abrir Google Sheets + el complemento de ChatGPT para editar.

## Alternativa: herramientas dedicadas a planillas

Si tu trabajo diario es armar planillas, considera una herramienta de IA dedicada exclusivamente a spreadsheets, con configuración de contexto (tu rol, tus preferencias, el modelo a usar).

Un ejemplo es **Shortcut.ai**: prompts en un panel lateral, opciones para configurar antes de ejecutar, y la posibilidad de elegir qué modelo de IA usar (incluido Claude). Funciona bien, aunque todavía no tiene el mismo nivel de contexto que Claude Cowork desarrolla en el proceso. Como resume Ruben: "Shortcut quiere reemplazar tanto a Microsoft como a Google. Una movida audaz."

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

Resultado esperado: 6 pestañas conectadas, más de 700 fórmulas — todo funcionando de punta a punta.

---

*Contenido adaptado de la guía "Excel with Claude cowork" de Ruben Hassid ([claude101.com](https://claude101.com)).*
