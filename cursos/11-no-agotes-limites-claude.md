# No agotes los límites de uso de Claude

> 23 trucos para usar Claude mejor y no gastar de más.

**Nivel:** Avanzado | **Duración:** 12 minutos

---

## Cómo cuenta Claude los tokens

Claude relee toda tu conversación desde el principio en cada mensaje. El mensaje 30 cuesta 31 veces más tokens que el mensaje 1. Por eso los créditos desaparecen tan rápido.

## Hábitos que probablemente no conocías

1. **Convertí los archivos antes de subirlos.** Una página de PDF cuesta entre 1.500 y 3.000 tokens. Las capturas de pantalla, peor todavía. Extraé el texto → pegalo como texto plano o markdown. Recortá bien las capturas.
2. **Planificá en el chat. Creá archivos en Cowork.** Crear archivos consume más límite que el chat normal. Pensá en Chat (barato) → construí en Cowork (caro).
3. **"Preguntame" en vez de un prompt largo.** Un prompt de 500 palabras cuesta 500 tokens cada vez que se relee. Mi recurso favorito: "quiero [tarea] con [criterio de éxito]. Leé mi carpeta. Preguntame con AskUserQuestion antes de empezar."
4. **Usá dictado por voz para respuestas más ricas.** Al escribir, los prompts salen perezosos → Claude adivina mal → más mensajes = más recargas de contexto. Al hablar, das más contexto de una sola vez, naturalmente.
5. **Dejá de pedir que rehaga todo.** Decí "rehacé solo la sección 3. Dejá el resto igual para ahorrar tokens." Sumá "sin comentarios, sin explicaciones, solo el resultado."
6. **Agrupá tareas en un solo mensaje.** Tres prompts separados = tres recargas completas de contexto. Un prompt con tres tareas = una sola recarga.
7. **Usá la misma estructura de prompt siempre.** Prompts parecidos se cachean parcialmente. Mantené una biblioteca de prompts estable y cambiá solo la parte variable.
8. **Editá tu mensaje en vez de mandar uno nuevo.** En el chat, hacé clic en Editar sobre tu mensaje original, corregilo, regenerá. El intercambio viejo se reemplaza, no se apila. (No disponible en Cowork.)
9. **Elegí el producto correcto para la tarea.** Pregunta rápida → chat con el modelo más liviano. Informe desde archivos → Cowork con el modelo más potente. Un gráfico → Code con un modelo intermedio.

## Lo básico que sigue importando

10. **Mantené los archivos de SOBRE MÍ bajo 2.000 palabras cada uno.** Cowork los lee antes de cada tarea.
11. **Reiniciá la conversación en vez de seguir sumando mensajes.** En Cowork, "Reiniciar la conversación desde acá" sobre un mensaje anterior. Andá lo más atrás posible.
12. **Resumí y arrancá de nuevo cada 15-20 mensajes.** Pedile a Claude que resuma todo → copiá el resumen → abrí una sesión nueva → pegalo como primer mensaje.
13. **Usá modelos livianos para tareas simples. Guardá el modelo potente para trabajo profundo.** Si la tarea le toma a Claude menos de 30 segundos, probablemente no necesita el modelo más caro.
14. **No tires toda tu carpeta dentro de Cowork.** Cada archivo que Cowork lee es gasto de tokens. Sumá solo lo necesario para esa tarea. Para tareas sin archivos: seleccioná cero carpetas.
15. **Empezá un chat nuevo cuando cambia el tema.** Tema nuevo = chat nuevo. Siempre.
16. **Apagá las funciones que no estás usando.** Búsqueda web, conectores y modo exploración suman tokens. Por defecto: todo apagado, prendés lo que necesitás en cada tarea.
17. **Usá Proyectos para trabajo recurrente.** Subís el archivo una vez = queda cacheado. Cada conversación nueva dentro de ese Proyecto lo referencia sin gastar tokens de nuevo.
18. **Apagá la Memoria. Sumá Preferencias de usuario.** Configuración → General → Preferencias personales. Configurá también un Estilo (en el selector de modelo) — elegí "Conciso" o creá uno personalizado.
19. **Usá tareas programadas para trabajo recurrente.** Buscá el plugin de programación para informes semanales recurrentes.
20. **Dale a Claude Code un alcance claro.** Code tiende a expandirse solo. Sé específico: "creá un gráfico de barras desde este CSV con los ingresos mensuales de 2025. Guardalo como grafico.png."
21. **Usá un archivo CLAUDE.md para contexto permanente.** Code lo lee antes de cada tarea. Poné ahí las instrucciones recurrentes. Mantenelo corto — un CLAUDE.md inflado hace que Claude ignore tus instrucciones reales.
22. **Repartí el trabajo durante el día.** Claude usa una ventana móvil de 5 horas. Dividí en 2-3 sesiones: mañana, tarde, noche.
23. **Dejá de usar Claude para lo que no es bueno.** Generación de imágenes → otra herramienta. Búsqueda en tiempo real → otra herramienta. No gastes tokens en tareas que Claude nunca iba a resolver bien.

## Por dónde empezar

Elegí tres según tu uso:

- **Si usás Cowork a diario:** empezá por los hábitos 1, 2 y 5.
- **Si usás sobre todo el chat:** empezá por 8, 15 y 17.
- **Si estás en el plan básico y siempre topeás el límite:** empezá por 6, 13 y 22.

---

*Contenido adaptado de la guía "Stop hitting Claude usage limits" de Ruben Hassid ([claude101.com](https://claude101.com)).*
