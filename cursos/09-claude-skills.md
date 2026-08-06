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

Las Skills son flujos guardados que activás con un comando tipo `/brief`, `/linkedin` o `/contrato-x`.

**Formas de darle contexto a la IA:**

1. Escribir un prompt larguísimo con contexto.
2. Escribir un archivo de texto para subir.
3. Subir ambos a un Proyecto.
4. **Skills** — todo eso, pero como un comando que se activa solo.

**La diferencia clave:** los archivos de contexto necesitan que digas "leé mi archivo primero" cada vez. Los Proyectos necesitan que abras el Proyecto correcto. **Las Skills se activan solas.** Claude reconoce la tarea y activa la Skill correcta por su cuenta.

## 2. Cómo crear tu primera Skill

### Opción 1: el creador de Skills de Claude

**Paso 1:** abrí Cowork. Asegurate de estar en Opus + Thinking extendido. Escribí:

```
Usá el skill-creator para ayudarme a armar una skill para escribir posts de LinkedIn.
```

**Paso 2:** respondé la entrevista. Sé específico. "Escribo informes" no sirve. "Escribo informes semanales que siempre empiezan con la métrica principal, usan máximo 3 secciones y terminan con los próximos pasos en viñetas" sí es una Skill que funciona.

**Paso 3:** Cowork genera todo:
- Una carpeta con el nombre correcto (minúsculas, con guiones)
- Un archivo SKILL.md con el disparador (/comando), la descripción y las instrucciones

**Paso 4:** Claude corre una evaluación — revisá los resultados antes de guardar.

**Paso 5:** guardá e instalá:
- Configuración → Capacidades → Skills → Subir
- Aparece la Skill, hacé clic en "Probar en el chat"

### Opción 2: herramientas gratuitas de generación de Skills

Existen herramientas web gratuitas donde describís la Skill (cuanto más detalle, mejor), la descargás y la subís a Claude.

## 3. Accedé a las Skills de equipo de Claude

Dentro de Claude Cowork: Personalizar → Plugins personales → Explorar plugins (+). Descargá colecciones de Skills ya armadas (plugins).

## 4. Siete trucos favoritos de Skills

1. **El truco de debugging.** ¿La Skill no se activa? Preguntale a Claude: "¿cuándo usarías la skill [nombre]?" Claude repite la descripción. Ahí ves al instante qué es ambiguo.
2. **Los disparadores negativos importan más.** La línea "No usar para…" es más importante que "Usar cuando…". Agregá: "No usar para artículos de blog, newsletters, emails" o va a secuestrar conversaciones donde no debería.
3. **Las Skills se combinan con tu archivo de voz.** sobre-mi.md maneja el tono. La Skill maneja el proceso. Se activan juntas, al mismo tiempo.
4. **Armá Skills a partir de conversaciones pasadas.** Clic en una sesión de Cowork > flecha junto al nombre > "Convertir en skill". Claude reconstruye el flujo a partir de tus prompts anteriores.
5. **Las Skills ahorran tokens.** Claude solo lee el encabezado de 3 líneas de cada Skill al principio. Las instrucciones completas se cargan solo cuando la tarea coincide. 30 Skills instaladas apenas ocupan tu ventana de contexto.
6. **El parche contra la "vagancia".** Si Claude recorta esquinas dentro de una Skill, sumá al prompt: "Tomate tu tiempo. Calidad antes que velocidad. No te saltees pasos." Funciona mejor en el prompt del usuario que dentro del archivo de la Skill.
7. **Las Skills son portables.** El archivo SKILL.md es un estándar abierto pensado para funcionar en distintas plataformas.

## 5. Dónde se quedan cortas las Skills

- **La descripción lo es todo** — una mala descripción significa que la Skill nunca se activa.
- **Pueden secuestrar conversaciones** — una descripción demasiado amplia se activa cuando no querés.
- **Igual necesitan edición** — dan un punto de partida consistente del 80%, no la perfección.
- **El consumo sigue siendo alto** — las Skills no eliminan el gasto de tokens.

## Tus primeros 30 minutos

- **Minutos 0-5:** abrí Cowork. Escribí: "Usá el skill-creator para ayudarme a armar una skill para [tu tarea más repetida]."
- **Minutos 5-15:** respondé la entrevista. Sé específico.
- **Minutos 15-20:** instalá y probá. Subila desde Configuración → Capacidades → Skills. Probá 5 formas distintas de pedirla para verificar que se active bien. Probá pedidos sin relación para confirmar que no se active de más.
- **Minutos 20-25:** iterá según lo que encontraste al probar.
- **Minutos 25-30:** explorá los plugins de Claude para más Skills ya armadas.

---

*Contenido adaptado de la guía "Claude Skills" de Ruben Hassid ([claude101.com](https://claude101.com)).*
