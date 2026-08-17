# Claude Skills

> Cómo configurar Claude de la forma correcta (para dejar de promptear todo el tiempo).

**Nivel:** Intermedio | **Duración:** 6 minutos

---

## Niveles de uso de IA

- Nivel 1: ChatGPT gratis
- Nivel 2: ChatGPT pago + Thinking
- Nivel 3: Claude chat pago + Opus + Thinking
- Nivel 4: Claude premium + Cowork + Opus
- Nivel 5: Claude Team con Proyectos
- **Skills:** el siguiente nivel

## 1. ¿Qué cambia con las Skills?

Las Skills son flujos guardados que activas con un comando tipo `/brief`, `/linkedin` o `/contrato-x`. Viven dentro de Claude (o de sistemas compatibles) como contexto e instrucciones permanentes, y se pueden compartir con tu equipo o descargarse desde librerías de Skills online.

**Formas de darle contexto a la IA:**

1. Escribir un prompt larguísimo con contexto.
2. Escribir un archivo de texto para subir.
3. Subir ambos a un Proyecto.
4. **Skills** — todo eso, pero como un comando que se activa solo.

**La diferencia clave:** los archivos de contexto necesitan que digas "lee mi archivo primero" cada vez. Los Proyectos necesitan que abras el Proyecto correcto. **Las Skills se activan solas.** Claude reconoce la tarea y activa la Skill correcta por su cuenta.

## 2. Cómo crear tu primera Skill

### Opción 1: el creador de Skills de Claude

**Paso 1:** abre Cowork. Elige tu carpeta de trabajo. Asegúrate de estar en Opus + Thinking extendido. Escribe:

```
Usa el skill-creator para ayudarme a armar una skill para escribir posts de LinkedIn.
```

**Paso 2:** responde la entrevista. Sé específico. "Escribo informes" no sirve. "Escribo informes semanales que siempre empiezan con la métrica principal, usan máximo 3 secciones y terminan con los próximos pasos en viñetas" sí es una Skill que funciona.

**Paso 3:** Cowork genera todo:
- Una carpeta con el nombre correcto (minúsculas, con guiones)
- Un archivo SKILL.md con el disparador (/comando), la descripción y las instrucciones

Haz clic en "Permitir siempre" para autorizar la creación.

**Paso 4:** Claude corre una evaluación — revisa los resultados antes de guardar.

> ⚠ Aviso: este es el paso que más gente se salta, y es el más importante de todos. Sin evaluación no sabes si la Skill realmente funciona antes de instalarla.

**Paso 5:** guarda e instala:
- Configuración → Capacidades → Skills → Subir
- Aparece la Skill, haz clic en "Probar en el chat"

### Opción 2: herramientas gratuitas de generación de Skills

Existen herramientas web gratuitas donde describes la Skill (cuanto más detalle, mejor), la descargas y la subes a Claude. Una de ellas es [makemyskill.com](https://makemyskill.com), creada por el propio Ruben Hassid. Busca información en la web antes de armar la Skill y se salta la entrevista, así que es más rápida pero da menos control fino que el creador de Skills de Claude.

## 3. Accede a las Skills de equipo de Claude

Dentro de Claude Cowork: Personalizar → Plugins personales → Explorar plugins (+). Descarga colecciones de Skills ya armadas (plugins).

> ⚠ Aviso: esto solo está disponible en la app de escritorio, no en la versión web.

## 4. Siete trucos favoritos de Skills

1. **El truco de debugging.** ¿La Skill no se activa? Pregúntale a Claude: "¿cuándo usarías la skill [nombre]?" Claude repite la descripción. Ahí ves al instante qué es ambiguo.
2. **Los disparadores negativos importan más.** La línea "No usar para…" es más importante que "Usar cuando…". Agrega: "No usar para artículos de blog, newsletters, emails" o va a secuestrar conversaciones donde no debería.
3. **Las Skills se combinan con tu archivo de voz.** sobre-mi.md maneja el tono. La Skill maneja el proceso. Se activan juntas, al mismo tiempo — no hace falta repetir el tono dentro de las instrucciones de la Skill.
4. **Arma Skills a partir de conversaciones pasadas.** Clic en una sesión de Cowork > flecha junto al nombre > "Convertir en skill". Claude reconstruye el flujo a partir de tus prompts anteriores.
5. **Las Skills ahorran tokens.** Claude solo lee el encabezado de 3 líneas de cada Skill al principio. Las instrucciones completas se cargan solo cuando la tarea coincide. 30 Skills instaladas apenas ocupan tu ventana de contexto. Según datos de Anthropic, una tarea que normalmente pedía 15 idas y vueltas y 12.000 tokens sin Skills bajó a solo 2 preguntas y 6.000 tokens con la Skill correcta activada.
6. **El parche contra la "vagancia".** Si Claude recorta esquinas dentro de una Skill, suma al prompt: "Tómate tu tiempo. Calidad antes que velocidad. No te saltees pasos." Funciona mejor en el prompt del usuario que dentro del archivo de la Skill.
7. **Las Skills son portables.** El archivo SKILL.md es un estándar abierto pensado para funcionar en distintas plataformas. Una Skill que armaste hoy para Claude podría funcionar mañana en Gemini o ChatGPT si esas plataformas adoptan el mismo estándar — igual que ya pasa con los archivos de voz.

## 5. Dónde se quedan cortas las Skills

- **La descripción lo es todo** — una mala descripción significa que la Skill nunca se activa.
- **Pueden secuestrar conversaciones** — una descripción demasiado amplia se activa cuando no quieres.
- **Igual necesitan edición** — dan un punto de partida consistente del 80%, no la perfección.
- **El consumo sigue siendo alto** — las Skills no eliminan el gasto de tokens.

## Tus primeros 30 minutos

- **Minutos 0-5:** abre Cowork. Escribe: "Usa el skill-creator para ayudarme a armar una skill para [tu tarea más repetida]." Elige la tarea que más veces le tienes que volver a explicar a Claude.
- **Minutos 5-15:** responde la entrevista. Sé específico.
- **Minutos 15-20:** instala y prueba. Súbela desde Configuración → Capacidades → Skills. Prueba 5 formas distintas de pedirla para verificar que se active bien. Prueba pedidos sin relación para confirmar que no se active de más.
- **Minutos 20-25:** itera según lo que encontraste al probar.
- **Minutos 25-30:** explora los plugins de Claude para más Skills ya armadas.

---

*Contenido adaptado de la guía "Claude Skills" de Ruben Hassid ([claude101.com](https://claude101.com)).*
