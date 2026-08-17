# Conectores de Claude

> Cómo conectar Claude a tus aplicaciones.

**Nivel:** Experto | **Duración:** 8 minutos

---

Un Conector es un puente de un clic entre Claude y una app que ya usas.

## Cómo conectar tu app a Claude

1. Abre Claude → clic en "+" dentro del cuadro de chat.
2. Busca "Conectores" → clic en "Agregar conector".
3. Busca tu app (Gmail, Gamma, Google Drive, herramientas de notas de reuniones...).
4. En cada chat nuevo: clic en "+" → Conectores → activa tu app.

**Ejemplos de uso real:**

- Con Gmail activado: pregúntale "¿Qué está pendiente en mi bandeja de esta semana?" y Claude responde con tus datos reales, sin que copies y pegues nada.
- Con una app de notas de reuniones activada: pídele "Necesito un resumen de todas las transcripciones de la semana pasada" y las lee todas sin que abras ningún dashboard.
- Con Slack activado: dile "Extrae este hilo completo y dame los pendientes" y Claude trae todo el contexto sin que visites ninguna pestaña.

Todo el trabajo pasa dentro de Claude, con contexto, y conectado en vivo a tus apps.

## 9 conectores recomendados

### 1. Notas de reuniones (Granola, Otter, etc.)

Capturan automáticamente las transcripciones de Zoom, Teams, Meet.

**Prompt:**

```
Trae mi última reunión. Resúmela en 5 viñetas.
Después lista cada acción asignada a mí, con sus plazos.
Después marca entre 2 y 5 obstáculos que podría tener para completarlas.
```

**Tip:** combina notas de reuniones + Slack + Gmail para preparar una negociación.

### 2. CRM (HubSpot, Salesforce)

**Prompt:**

```
Lee mi pipeline de CRM.
Lista cada oportunidad en etapa "Propuesta enviada" que no se movió en 7+ días.
Para cada una: escribe un email de seguimiento que pueda mandar hoy.
Tono: directo, cálido pero sin vueltas. Nada de "solo quería consultar cómo va".
```

**Tip:** pregúntale a Claude "según mis últimos 5 tratos cerrados, ¿cuál es el patrón en común?"

### 3. Notion (base de conocimiento del equipo)

**Prompt:**

```
Ve a Notion, al Calendario de Contenido. Extrae el contenido de [FECHA]
(brief de diseño, copy). Crea 2 nuevos con las mismas ideas y técnicas.
```

> ✓ Tip: el objetivo no es usar la IA para externalizar tu pensamiento, sino tener acceso a ideas ilimitadas para elegir entre ellas.

Si tu empresa es más grande, seguramente usa Microsoft o Atlassian (Jira, Confluence) en vez de Notion — Claude también se conecta a esas herramientas.

### 4. Microsoft 365 (Teams, Outlook, Calendario, OneDrive)

Un solo interruptor = 4 apps.

**Prompt:**

```
Lee mi Outlook + Calendario del próximo lunes.
Lista cada reunión donde todavía no tengo notas de preparación.
Para cada una: trae el hilo de Teams o el documento de OneDrive relevante.
Genera un brief de 1 página por reunión.
```

**Tip:** este conector funciona mejor cuando toda la empresa lo adopta, porque la gente empieza a comunicarse de forma más clara sabiendo que la IA puede leerlo.

### 5. Slack

**Prompt:**

```
Lee #canal-1, #canal-2 de las últimas 48 horas.
Muéstrame las 3 cosas a las que tengo que reaccionar.
Sáltate chistes, GIFs, y actualizaciones de standup.
```

### 6. Google Drive

**Mejor flujo:**

1. Ve a Claude Cowork.
2. Pide una planilla sobre [X].
3. Sigue refinando con mensajes de seguimiento.
4. Clic en el botón "Google Drive".
5. Se abre en Google Sheets con todos los datos automáticamente.

### 7. Gamma (presentaciones)

**Prompt:**

```
Ve a Gamma. Crea una presentación de [NÚMERO] diapositivas sobre [TEMA]
para [AUDIENCIA].
Objetivo: [qué quieres que hagan o entiendan].
Cubre: [lista 5-8 puntos clave].
Tono: confiado / basado en datos / conciso.
Que sea visual, prolijo, una idea por diapositiva.
```

### 8. Gmail

**Prompt:**

```
Lee mi Gmail de esta semana.
Agrupa cada email en 3 categorías:
1. Necesita mi respuesta hoy.
2. Puede esperar hasta el viernes.
3. Newsletter / informativo / se puede ignorar.
Resultado: 3 listas. Sin comentarios adicionales.
```

**Tip:** suma "Guarda las 5 respuestas como borradores en mi Gmail" para crear los borradores directo en tu casilla.

## Si solo activas 3 conectores hoy

**Elige:** notas de reuniones + Gmail/Outlook + Slack/Teams.

Este trío se combina: reuniones → emails → canales del equipo. Tienes el panorama completo.

## Cuándo NO usar un conector

1. **No los dejes todos prendidos por defecto.** Los Conectores gastan tokens antes de que escribas nada. Actívalos por chat, desactívalos por chat.
2. **No uses Conectores para trabajo creativo.** Al redactar un post o un guion, quieres un espacio limpio. El ruido de Slack/Gmail contamina el resultado. Mi chat de escritura por defecto: todos los Conectores apagados.
3. **No des permiso de escritura hasta confiar en el flujo de lectura.** Primero solo lectura. Observa una semana. Después dale permiso de escritura.

> ⚠ Aviso: la mayoría de los accidentes con datos pasan el primer día, cuando alguien activa un conector con permiso de escritura completo sin haberlo probado antes.

## Directorio completo

Hay más de 200 conectores disponibles y la lista sigue creciendo. Puedes explorarlos de dos formas:

- Dentro de Claude: Administrar conectores → + → Explorar conectores.
- Directorio online: [claude.com/connectors](https://claude.com/connectors#connectors)

## Arma tu propio Conector (para developers)

Un Conector es simplemente un servidor MCP con una URL pública.

**Tiempo estimado:** 3-4 horas si nunca tocaste código; 15 minutos si ya tienes experiencia.

**Qué necesitas:**

- Plan Claude Pro, Team o Enterprise (los conectores personalizados no están disponibles en el plan Free).
- La API de la app que quieres conectar.
- Una cuenta de Cloudflare Workers (la capa gratuita cubre 100.000 solicitudes por día, de sobra para empezar).

**Paso 1 — Configuración rápida con Claude Code:**

```
Créame un servidor MCP en Python usando FastMCP.
Una herramienta: obtener_[cosa](args).
Usa transporte Streamable HTTP.
Destino de despliegue: Cloudflare Workers.

Entrégame:
1. El código completo del servidor.
2. El comando de despliegue.
3. El patrón de URL que voy a pegar en la Configuración de Claude.
```

Reemplaza `[cosa]` por la acción que necesitas, por ejemplo: `obtener_ultimo_email_de_remitente`, `obtener_tratos_abiertos_sobre_monto`, `obtener_ingresos_del_mes`.

**Paso 2 — Despliega.** Ejecuta el comando de despliegue y vas a obtener una URL pública terminada en `/mcp` (por ejemplo `tu-servidor.workers.dev/mcp`). La ruta `/mcp` es obligatoria.

**Paso 3 — Agrégalo a Claude.** Configuración → Conectores → Personalizar → Agregar conector personalizado → pega la URL terminada en `/mcp` → ponle nombre → guarda. Abre un chat nuevo, activa el conector y prueba la herramienta.

**Problemas comunes en el primer intento:**

- Olvidar el `/mcp` al final de la URL.
- Timeout por arranque en frío en hosts de capa gratuita (para esto, Cloudflare Workers rinde mejor que Vercel).
- Headers CORS bloqueando la llamada.

> ✓ Tip: usa esto para envolver tu propia herramienta interna — tu base de datos privada, la wiki del equipo, esa planilla que llevas actualizando hace 3 años. El Conector es simplemente una capa de permisos entre Claude y cualquier sistema que controles.

---

*Contenido adaptado de la guía "Claude Connectors" de Ruben Hassid ([claude101.com](https://claude101.com)).*
