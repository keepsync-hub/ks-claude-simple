# No agotes los límites de uso de Claude

> 23 trucos para usar Claude mejor y no gastar de más.

**Nivel:** Avanzado | **Duración:** 12 minutos

---

## Cómo cuenta Claude los tokens

Claude relee toda tu conversación desde el principio en cada mensaje. El mensaje 30 cuesta 31 veces más tokens que el mensaje 1. Por eso los créditos desaparecen tan rápido.

## Hábitos que probablemente no conocías

1. **Convierte los archivos antes de subirlos.** Una página de PDF cuesta entre 1.500 y 3.000 tokens. Las capturas de pantalla, peor todavía: una imagen de 1000x1000 píxeles ronda los 1.300 tokens, pero si la recortas bien puede bajar a menos de 100. Extrae el texto → pégalo como texto plano o markdown. Recorta bien las capturas. Truco rápido: pega el texto en un documento de Google Docs nuevo (doc.new) y descárgalo como .md antes de subirlo a Claude — pesa mucho menos que el archivo original.

> ⚠ Aviso: subir el mismo PDF de 15 páginas en 4 chats distintos puede quemar más de 180.000 tokens. Convertido a texto plano una sola vez, ese mismo documento baja a unos 2.000 tokens.

2. **Planifica en el chat. Crea archivos en Cowork.** Crear archivos consume más límite que el chat normal. Piensa en Chat (barato) → construye en Cowork (caro).
3. **"Pregúntame" en vez de un prompt largo.** Un prompt de 500 palabras cuesta 500 tokens cada vez que se relee. Mi recurso favorito: "quiero [tarea] con [criterio de éxito]. Lee mi carpeta. Pregúntame con AskUserQuestion antes de empezar."
4. **Usa dictado por voz para respuestas más ricas.** Al escribir, los prompts salen perezosos → Claude adivina mal → más mensajes = más recargas de contexto. Al hablar, das más contexto de una sola vez, naturalmente. Hay apps de dictado por voz (como Wispr Flow) pensadas justo para esto.
5. **Deja de pedir que rehaga todo.** Di "rehaz solo la sección 3. Deja el resto igual para ahorrar tokens." Suma "sin comentarios, sin explicaciones, solo el resultado."
6. **Agrupa tareas en un solo mensaje.** Tres prompts separados = tres recargas completas de contexto. Un prompt con tres tareas = una sola recarga.
7. **Usa la misma estructura de prompt siempre.** Prompts parecidos se cachean parcialmente. Mantén una biblioteca de prompts estable y cambia solo la parte variable.
8. **Edita tu mensaje en vez de mandar uno nuevo.** En el chat, haz clic en Editar sobre tu mensaje original, corrígelo, regenera. El intercambio viejo se reemplaza, no se apila. (No disponible en Cowork.)
9. **Elige el producto correcto para la tarea.** Pregunta rápida → chat con el modelo más liviano. Informe desde archivos → Cowork con el modelo más potente. Un gráfico → Code con un modelo intermedio. Ojo con la función Research: investiga muy a fondo, pero por eso mismo gasta muchos tokens — actívala solo cuando de verdad necesites ese nivel de profundidad.

## Lo básico que sigue importando

10. **Mantén los archivos de SOBRE MÍ bajo 2.000 palabras cada uno.** Cowork los lee antes de cada tarea.
11. **Reinicia la conversación en vez de seguir sumando mensajes.** En Cowork, "Reiniciar la conversación desde aquí" sobre un mensaje anterior. Ve lo más atrás posible.

> ✓ Tip: antes de reiniciar, pídele a Claude "escribe un session-notes.md con lo esencial de esta sesión". Así te llevas el contexto importante sin arrastrar todo el historial pesado.

12. **Resume y arranca de nuevo cada 15-20 mensajes.** Pídele a Claude que resuma todo → copia el resumen → abre una sesión nueva → pégalo como primer mensaje.

> ★ Para recordar: un desarrollador midió esto en una sesión larga y encontró que el 98,5% de sus tokens se iban en releer el historial completo — solo el 1,5% correspondía a la respuesta real que necesitaba.

13. **Usa modelos livianos para tareas simples. Guarda el modelo potente para trabajo profundo.** Si la tarea le toma a Claude menos de 30 segundos, probablemente no necesita el modelo más caro. Revisar ortografía o hacer una lluvia de ideas no necesita el modelo más potente — resérvalo para lo que sí lo justifique.
14. **No tires toda tu carpeta dentro de Cowork.** Cada archivo que Cowork lee es gasto de tokens. Suma solo lo necesario para esa tarea. Para tareas sin archivos: selecciona cero carpetas.
15. **Empieza un chat nuevo cuando cambia el tema.** Tema nuevo = chat nuevo. Siempre.
16. **Apaga las funciones que no estás usando.** Búsqueda web, conectores (Slack, Google Drive, Notion, etc.) y modo exploración suman tokens. Por defecto: todo apagado, prende lo que necesites en cada tarea.
17. **Usa Proyectos para trabajo recurrente.** Subes el archivo una vez = queda cacheado. Cada conversación nueva dentro de ese Proyecto lo referencia sin gastar tokens de nuevo.
18. **Apaga la Memoria. Suma Preferencias de usuario.** Configuración → General → Preferencias personales. Configura también un Estilo (en el selector de modelo) — elige "Conciso" o crea uno personalizado.
19. **Usa tareas programadas para trabajo recurrente.** Busca el plugin de programación (/schedule) para informes semanales recurrentes.
20. **Dale a Claude Code un alcance claro.** Code tiende a expandirse solo. Sé específico: "crea un gráfico de barras desde este CSV con los ingresos mensuales de 2025. Guárdalo como grafico.png."
21. **Usa un archivo CLAUDE.md para contexto permanente.** Code lo lee antes de cada tarea. Pon ahí las instrucciones recurrentes. Mantenlo corto — un CLAUDE.md inflado hace que Claude ignore tus instrucciones reales.
22. **Reparte el trabajo durante el día.** Claude usa una ventana móvil de 5 horas. Divide en 2-3 sesiones: mañana, tarde, noche.
23. **Deja de usar Claude para lo que no es bueno.** Generación de imágenes → herramientas como Gemini. Búsqueda en tiempo real → herramientas como Grok. No gastes tokens en tareas que Claude nunca iba a resolver bien.

## Por dónde empezar

Elige tres según tu uso:

- **Si usas Cowork a diario:** empieza por los hábitos 1, 2 y 5.
- **Si usas sobre todo el chat:** empieza por 8, 15 y 17.
- **Si estás en el plan básico y siempre topas el límite:** empieza por 6, 13 y 22.

---

*Contenido adaptado de la guía "Stop hitting Claude usage limits" de Ruben Hassid ([claude101.com](https://claude101.com)).*
