# Conectores de Claude

> Cómo conectar Claude a tus aplicaciones.

**Nivel:** Experto | **Duración:** 8 minutos

---

Un Conector es un puente de un clic entre Claude y una app que ya usás.

## Cómo conectar tu app a Claude

1. Abrí Claude → clic en "+" dentro del cuadro de chat.
2. Buscá "Conectores" → clic en "Agregar conector".
3. Buscá tu app (Gmail, Gamma, Google Drive, herramientas de notas de reuniones...).
4. En cada chat nuevo: clic en "+" → Conectores → activá tu app.

## 9 conectores recomendados

### 1. Notas de reuniones (Granola, Otter, etc.)

Capturan automáticamente las transcripciones de Zoom, Teams, Meet.

**Prompt:**

```
Traé mi última reunión. Resumila en 5 viñetas.
Después listá cada acción asignada a mí, con sus plazos.
Después marcá entre 2 y 5 obstáculos que podría tener para completarlas.
```

**Tip:** combiná notas de reuniones + Slack + Gmail para preparar una negociación.

### 2. CRM (HubSpot, Salesforce)

**Prompt:**

```
Leé mi pipeline de CRM.
Listá cada oportunidad en etapa "Propuesta enviada" que no se movió en 7+ días.
Para cada una: escribí un email de seguimiento que pueda mandar hoy.
Tono: directo, cálido pero sin vueltas. Nada de "solo quería consultar cómo va".
```

**Tip:** preguntale a Claude "según mis últimos 5 tratos cerrados, ¿cuál es el patrón en común?"

### 3. Notion (base de conocimiento del equipo)

**Prompt:**

```
Andá a Notion, al Calendario de Contenido. Extraé el contenido de [FECHA]
(brief de diseño, copy). Creá 2 nuevos con las mismas ideas y técnicas.
```

### 4. Microsoft 365 (Teams, Outlook, Calendario, OneDrive)

Un solo interruptor = 4 apps.

**Prompt:**

```
Leé mi Outlook + Calendario del próximo lunes.
Listá cada reunión donde todavía no tengo notas de preparación.
Para cada una: traé el hilo de Teams o el documento de OneDrive relevante.
Generá un brief de 1 página por reunión.
```

### 5. Slack

**Prompt:**

```
Leé #canal-1, #canal-2 de las últimas 48 horas.
Mostrame las 3 cosas a las que tengo que reaccionar.
Saltate chistes, GIFs, y actualizaciones de standup.
```

### 6. Google Drive

**Mejor flujo:**

1. Andá a Claude Cowork.
2. Pedí una planilla sobre [X].
3. Seguí refinando con mensajes de seguimiento.
4. Clic en el botón "Google Drive".
5. Se abre en Google Sheets con todos los datos automáticamente.

### 7. Gamma (presentaciones)

**Prompt:**

```
Andá a Gamma. Creá una presentación de [NÚMERO] diapositivas sobre [TEMA]
para [AUDIENCIA].
Objetivo: [qué querés que hagan o entiendan].
Cubrí: [listá 5-8 puntos clave].
Tono: confiado / basado en datos / conciso.
Que sea visual, prolijo, una idea por diapositiva.
```

### 8. Gmail

**Prompt:**

```
Leé mi Gmail de esta semana.
Agrupá cada email en 3 categorías:
1. Necesita mi respuesta hoy.
2. Puede esperar hasta el viernes.
3. Newsletter / informativo / se puede ignorar.
Resultado: 3 listas. Sin comentarios adicionales.
```

**Tip:** sumá "Guardá las 5 respuestas como borradores en mi Gmail" para crear los borradores directo en tu casilla.

## Si solo activás 3 conectores hoy

**Elegí:** notas de reuniones + Gmail/Outlook + Slack/Teams.

Este trío se combina: reuniones → emails → canales del equipo. Tenés el panorama completo.

## Cuándo NO usar un conector

1. **No los dejes todos prendidos por defecto.** Los Conectores gastan tokens antes de que escribas nada. Activalos por chat, desactivalos por chat.
2. **No uses Conectores para trabajo creativo.** Al redactar un post o un guion, querés un espacio limpio. El ruido de Slack/Gmail contamina el resultado. Mi chat de escritura por defecto: todos los Conectores apagados.
3. **No des permiso de escritura hasta confiar en el flujo de lectura.** Primero solo lectura. Observá una semana. Después dale permiso de escritura.

## Directorio completo

Explorá el directorio oficial de Conectores dentro de Claude: Administrar conectores → + → Explorar conectores.

## Armá tu propio Conector (para developers)

Un Conector es simplemente un servidor MCP con una URL pública.

Configuración rápida con Claude Code:

```
Armame un servidor MCP en Python usando FastMCP.
Una herramienta: obtener_[cosa](args).
Usá transporte Streamable HTTP.
Destino de despliegue: Cloudflare Workers.

Entregame:
1. El código completo del servidor.
2. El comando de despliegue.
3. El patrón de URL que voy a pegar en la Configuración de Claude.
```

Después: Configuración → Conectores → Personalizar → Agregar conector personalizado → Pegá la URL terminada en /mcp.

---

*Contenido adaptado de la guía "Claude Connectors" de Ruben Hassid ([claude101.com](https://claude101.com)).*
