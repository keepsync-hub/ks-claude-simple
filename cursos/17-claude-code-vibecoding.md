# Claude Code — Vibecoding

> Para personas que nunca, jamás, van a programar.

**Nivel:** Experto | **Duración:** 14 minutos

---

**Vibecoding:** construir un sitio web simplemente hablándole a una IA en lenguaje natural — "hacéme algo que haga esto" — y que ella escriba todo el código. "Vibrás" para crear cosas.

**Sirve para dos cosas:**

1. Construir una versión clickeable de tu idea para dársela a un desarrollador, así deja de adivinar.
2. Construir una herramienta chica que resuelve el trabajo mejor que un chatbot genérico — solo para vos o tu equipo.

## Cómo configurar Claude Code (7 pasos)

1. **Conseguí la app:** descargala, instalala, activá el plan pago, abrí la pestaña Code.
2. **Armá una carpeta limpia:** una carpeta vacía en tu computadora. Sin contraseñas ni archivos privados. Claude solo va a tocar esa carpeta.
3. **Activá el modo sin confirmaciones constantes:** Configuración → Claude Code → activar el modo de permisos ampliados. Sin esto, Claude te pide permiso antes de cada cambio (30 clics por sesión). *Nota: si estás en una empresa, consultá primero con IT.*
4. **Conectá tus herramientas de despliegue y base de datos (gratis):** "+" → Conectores → Agregar conectores → buscá tu herramienta de hosting y tu herramienta de base de datos. Una publica tu sitio en internet. La otra guarda tus datos y logins.
5. **Seleccioná la carpeta:** clic en el ícono de carpeta → elegí la tuya.
6. **Elegí tu modelo:** el más potente disponible, con esfuerzo alto.
7. **Listo. A construir.**

## El mega-prompt (copialo tal cual)

```
Sos mi CTO. Yo soy el CEO, no escribo código y no quiero leerlo. Los permisos
ampliados están activados, así que no te detengas a pedirme que apruebe pasos
técnicos. Simplemente construilo.

Hablame en español simple, solo sobre lo que puedo ver, clickear o decidir.
Nada de código, nada de jerga.

Quiero [tu objetivo final, ej.: "una página simple de reservas para mi
negocio de coaching donde la gente elija un horario"].

Antes de construir nada, entrevistame. Preguntame todo lo que necesites para
hacerlo bien, una pregunta a la vez, usando AskUserQuestion para que pueda
responder con clics. Mantené las preguntas sobre qué hace y cómo se ve.
Decidí vos las partes técnicas. Cuando tengas suficiente, contame el plan en
un par de frases simples, y después construilo.

Usá [herramienta de hosting] para publicarlo en vivo y darme un link que
cualquiera pueda abrir.
Usá [herramienta de base de datos] para los datos, con login de Google y
seguridad a nivel de fila activada.

Igualá el estilo de la captura de pantalla que te compartí.

Construí una pieza a la vez. Después de cada pieza, abrila vos mismo, revisá
que funcione (también en el celular), y arreglá lo que esté mal antes de
mostrármelo. Después decime qué mirar.
```

## Cómo ser mejor vibecodeando

**Empezá desde una captura de pantalla.** ¿Encontraste un sitio que te gusta? Sacale una captura, arrastrala a Claude: "construime esto, pero para lo mío."

Buenas fuentes de inspiración de diseño: galerías de diseño web, showcases de landing pages, colecciones de componentes UI.

**Describí el resultado final.** Decí qué querés que exista. Dejá que Claude elija los pasos.

**Andá de a una pieza.** Construí la página de inicio → dejala bien → recién ahí la próxima página.

**Corré el ciclo.** Mirá lo que Claude construyó. Anotá lo que está mal como lista numerada. Pegala de nuevo. Claude arregla cada punto. Repetí 5-6 veces por página.

## Que tu sitio no parezca "hecho por IA"

### Usá un archivo de sistema de diseño

Buscá archivos de sistema de diseño gratuitos de marcas conocidas (Stripe, Notion, Airbnb, Linear, etc.).

1. Buscá una marca que te guste.
2. Descargá su archivo de diseño.
3. Soltalo dentro de la carpeta de Claude Code.
4. Referencialo: "usá esto para todo el estilo visual."

### Pedí una librería de componentes real

Decile a Claude: "usá una librería de componentes profesional como shadcn/ui" — botones, menús y formularios con aspecto prolijo.

### Sé específico

Nombrá la tipografía. Pedí más espacio en blanco. Dale colores exactos. Dejá de escribir "que se vea lindo."

## Cuándo NO usar Claude Code

- Un widget chico que vas a mirar una sola vez → usá un artefacto interactivo dentro del chat normal de Claude.
- Escribir un documento o una planilla → usá Cowork.
- Una sola imagen → usá otra herramienta de generación de imágenes.

**Regla:** no tardes más en construirlo que en consumirlo.

## Cuánto cuesta en la práctica

- El plan pago básico alcanza para arrancar.
- Claude Code consume el límite de uso más rápido que el chat normal.
- Para mantener el costo bajo: empezá un chat nuevo por tarea, usá el modelo liviano en el plan básico, reservá el modelo potente para el plan más caro, apuntá a archivos en vez de pegar bloques enteros de texto.
- Revisá tu consumo con el comando `/usage` dentro de Claude Code.

## Prompts listos (completá entre corchetes)

```
Construí una landing page para [...]
```
```
Construí un mockup para mostrarle a mi desarrollador. [describí la función].
No hace falta que funcione. Solo mostrale las pantallas y el flujo a mi
desarrollador. Cuando esté listo, escribí una especificación en español
simple para poder entregarla.
```
```
Construí una herramienta que tome [mi export de pedidos] y [lo convierta en
un informe mensual prolijo con totales por producto]. Suelto el archivo,
me devuelve el informe.
```
```
Construí una app simple donde [mis estudiantes] inicien sesión con Google
y vean [su propio progreso y la próxima lección].
```
```
Construí un dashboard que lea [la planilla de esta carpeta] y muestre
[mis ingresos, clientes nuevos y reembolsos] en gráficos simples.
```

## Entrega a un desarrollador real

Cuando el proyecto se vuelve serio (necesita seguridad real, guarda datos privados):

```
Sos mi CTO, y estamos entregando este proyecto a un desarrollador real.
Escribile un archivo de entrega llamado HANDOFF.md y guardalo en esta carpeta:
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
