# Claude Code — Vibecoding

> Para personas que nunca, jamás, van a programar.

**Nivel:** Experto | **Duración:** 14 minutos

---

**Vibecoding:** construir un sitio web simplemente hablándole a una IA en lenguaje natural — "hazme algo que haga esto" — y que ella escriba todo el código. Programas guiándote por el resultado que quieres, no por el código.

**Sirve para dos cosas:**

1. Construir una versión clickeable de tu idea para dársela a un desarrollador, así deja de adivinar.
2. Construir una herramienta chica que resuelve el trabajo mejor que un chatbot genérico — solo para ti o tu equipo.

## Cómo configurar Claude Code (7 pasos)

1. **Consigue la app:** descárgala, instálala, activa el plan pago, abre la pestaña Code.
2. **Arma una carpeta limpia:** una carpeta vacía en tu computadora. Sin contraseñas ni archivos privados. Claude solo va a tocar esa carpeta.
3. **Activa el modo sin confirmaciones constantes:** Configuración → Claude Code → activar el modo de permisos ampliados. Sin esto, Claude te pide permiso antes de cada cambio (30 clics por sesión). *Nota: si estás en una empresa, consulta primero con IT.*
4. **Conecta tus herramientas de despliegue y base de datos (gratis):** "+" → Conectores → Agregar conectores → busca tu herramienta de hosting y tu herramienta de base de datos. Una publica tu sitio en internet. La otra guarda tus datos y logins.
5. **Selecciona la carpeta:** clic en el ícono de carpeta → elige la tuya.
6. **Elige tu modelo:** el más potente disponible, con esfuerzo alto.
7. **Listo. A construir.**

## El mega-prompt (cópialo tal cual)

```
Eres mi CTO. Yo soy el CEO, no escribo código y no quiero leerlo. Los permisos
ampliados están activados, así que no te detengas a pedirme que apruebe pasos
técnicos. Simplemente constrúyelo.

Háblame en español simple, solo sobre lo que puedo ver, clickear o decidir.
Nada de código, nada de jerga.

Quiero [tu objetivo final, ej.: "una página simple de reservas para mi
negocio de coaching donde la gente elija un horario"].

Antes de construir nada, entrevístame. Pregúntame todo lo que necesites para
hacerlo bien, una pregunta a la vez, usando AskUserQuestion para que pueda
responder con clics. Mantén las preguntas sobre qué hace y cómo se ve.
Decide tú las partes técnicas. Cuando tengas suficiente, cuéntame el plan en
un par de frases simples, y después constrúyelo.

Usa [herramienta de hosting] para publicarlo en vivo y darme un link que
cualquiera pueda abrir.
Usa [herramienta de base de datos] para los datos, con login de Google y
seguridad a nivel de fila activada.

Iguala el estilo de la captura de pantalla que te compartí.

Construye una pieza a la vez. Después de cada pieza, ábrela tú mismo, revisa
que funcione (también en el celular), y arregla lo que esté mal antes de
mostrármelo. Después dime qué mirar.
```

## Cómo mejorar tu vibecoding

**Empieza desde una captura de pantalla.** ¿Encontraste un sitio que te gusta? Sácale una captura, arrástrala a Claude: "constrúyeme esto, pero para lo mío."

Buenas fuentes de inspiración de diseño: galerías de diseño web, showcases de landing pages, colecciones de componentes UI.

**Describe el resultado final.** Di qué quieres que exista. Deja que Claude elija los pasos.

**Ve de a una pieza.** Construye la página de inicio → déjala bien → recién ahí la próxima página.

**Corre el ciclo.** Mira lo que Claude construyó. Anota lo que está mal como lista numerada. Pégala de nuevo. Claude arregla cada punto. Repite 5-6 veces por página.

## Que tu sitio no parezca "hecho por IA"

### Usa un archivo de sistema de diseño

Busca archivos de sistema de diseño gratuitos de marcas conocidas (Stripe, Notion, Airbnb, Linear, etc.).

1. Busca una marca que te guste.
2. Descarga su archivo de diseño.
3. Suéltalo dentro de la carpeta de Claude Code.
4. Referéncialo: "usa esto para todo el estilo visual."

### Pide una librería de componentes real

Dile a Claude: "usa una librería de componentes profesional como shadcn/ui" — botones, menús y formularios con aspecto prolijo.

### Sé específico

Nombra la tipografía. Pide más espacio en blanco. Da colores exactos. Deja de escribir "que se vea lindo."

## Cuándo NO usar Claude Code

- Un widget chico que vas a mirar una sola vez → usa un artefacto interactivo dentro del chat normal de Claude.
- Escribir un documento o una planilla → usa Cowork.
- Una sola imagen → usa otra herramienta de generación de imágenes.

**Regla:** no tardes más en construirlo que en consumirlo.

## Cuánto cuesta en la práctica

- El plan pago básico alcanza para arrancar.
- Claude Code consume el límite de uso más rápido que el chat normal.
- Para mantener el costo bajo: empieza un chat nuevo por tarea, usa el modelo liviano en el plan básico, reserva el modelo potente para el plan más caro, apunta a archivos en vez de pegar bloques enteros de texto.
- Revisa tu consumo con el comando `/usage` dentro de Claude Code.

## Prompts listos (completa entre corchetes)

```
Construye una landing page para [...]
```
```
Construye un mockup para mostrarle a mi desarrollador. [describe la función].
No hace falta que funcione. Solo muéstrale las pantallas y el flujo a mi
desarrollador. Cuando esté listo, escribe una especificación en español
simple para poder entregarla.
```
```
Construye una herramienta que tome [mi export de pedidos] y [lo convierta en
un informe mensual prolijo con totales por producto]. Suelto el archivo,
me devuelve el informe.
```
```
Construye una app simple donde [mis estudiantes] inicien sesión con Google
y vean [su propio progreso y la próxima lección].
```
```
Construye un dashboard que lea [la planilla de esta carpeta] y muestre
[mis ingresos, clientes nuevos y reembolsos] en gráficos simples.
```

## Entrega a un desarrollador real

Cuando el proyecto se vuelve serio (necesita seguridad real, guarda datos privados):

```
Eres mi CTO, y estamos entregando este proyecto a un desarrollador real.
Escríbele un archivo de entrega llamado HANDOFF.md y guárdalo en esta carpeta:
- Qué hace esta app y para quién es
- Qué está construido y funcionando, y qué sigue siendo rústico
- Qué herramientas usaste y dónde viven las piezas importantes
- Qué necesita saber un desarrollador: cómo funcionan los logins, dónde
  viven los datos, qué claves existen
- Nota honesta: esto es un prototipo que construí describiéndolo, no es
  código de producción
Que se lea en cinco minutos.
```

---

*Contenido adaptado de la guía "Claude Code — Vibecoding" de Ruben Hassid ([claude101.com](https://claude101.com)).*
