# No uses tu Claude personal en el trabajo

> A menos que quieras que te despidan o te demanden.

**Nivel:** Experto | **Duración:** 9 minutos

---

Según estudios recientes, las personas en más del 90% de las empresas usan chatbots personales para trabajar, casi siempre sin avisarle a su área de sistemas. Más de la mitad admite haber escrito información sensible al menos una vez. Y ojo: incluso en empresas que ya pagan una herramienta de IA, el 22% de la gente igual prefiere usar su cuenta personal.

Aquí va cómo seguir usando tu Claude personal sin exponerte.

## 1. Apaga el entrenamiento con tus datos

Por defecto, las empresas de IA pueden entrenar sus modelos con tus conversaciones.

Anthropic cambió sus términos para cuentas personales en agosto de 2025: ahora tus chats y sesiones de código se usan para mejorar Claude a menos que lo desactives tú mismo. Si lo dejas prendido, esas conversaciones se pueden guardar hasta 5 años. ChatGPT hace lo mismo por defecto.

**Apágalo en Claude:**

1. Ve a tu perfil → Configuración.
2. Ve a "Privacidad".
3. Apaga "Ayudar a mejorar nuestros modelos de IA".

**Apágalo en ChatGPT:** perfil → Configuración → "Controles de datos" → apaga "Mejorar el modelo para todos".

**Apágalo en Grok:** perfil → Configuración → "Controles de datos" → apaga todo lo que encuentres ahí.

**Apágalo en Gemini:** entra a la página de actividad de Gemini de tu cuenta de Google y desactívalo desde ahí.

> **Nota:** desactivarlo solo aplica hacia adelante. Los modelos no pueden "desaprender" datos ya incorporados. Apágalo ahora, no después.

## 2. ¿Te pueden despedir o demandar de verdad?

Sí. Pasaron los dos casos.

**Caso conocido (Samsung, abril de 2023):** a los ingenieros se les permitía usar ChatGPT en el trabajo. En apenas 20 días lo usaron tres veces para filtrar información interna: pegaron código fuente de semiconductores para revisar errores, subieron más código para corregir fallas, y compartieron la grabación de una reunión interna. Samsung prohibió la herramienta en toda la compañía y abrió investigaciones disciplinarias.

**Riesgos legales:**

- **Ruptura de acuerdos de confidencialidad:** un chatbot de otra empresa cuenta como un tercero externo, y los contratos casi siempre prohíben compartir secretos de la empresa con terceros.
- **Problemas de secretos comerciales:** las leyes de protección de secretos comerciales cubren estas filtraciones. Un secreto solo sigue siendo secreto legalmente mientras se mantiene en secreto — entregárselo a un tercero con condiciones laxas puede hacer que la empresa pierda esa protección.
- **Problema de protección de datos:** en muchas jurisdicciones, pegar datos de clientes en una IA personal puede ser una transferencia de datos no autorizada. En Europa ya hubo un caso judicial real: un vendedor grabó reuniones confidenciales con una IA y mantuvo el acceso después de dejar la empresa — terminó demandado.

**La pregunta antes de pegar algo:** "¿estaría cómodo si este texto exacto apareciera en el canal general de la empresa, con mi nombre?"

- Sí → pégalo tranquilo.
- No → anonimízalo primero, o usa la herramienta oficial de tu empresa.

## 3. Nunca pegues esto en una cuenta personal

- Código fuente o cualquier cosa del repositorio de tu empresa.
- Datos de clientes o pacientes: nombres, emails, teléfonos, direcciones, historial de pedidos, información de salud.
- Planes, roadmaps, diseños o prototipos no publicados.
- Información financiera no pública: ingresos, márgenes, presupuestos, condiciones de acuerdos.
- Cualquier cosa marcada como confidencial, de uso interno, o bajo NDA.
- Contraseñas, claves de acceso, configuraciones de seguridad.
- Contratos completos o documentos legales con nombres y condiciones reales.
- Grabaciones o transcripciones de reuniones internas.

> **Aviso:** si haces "vibecoding" de un proyecto personal usando la IA de tu empresa, tu empresa puede terminar siendo dueña de ese proyecto. Y si lo haces en la computadora de la empresa con tu IA personal, igual estás expuesto.

## 4. Anonimiza tus datos antes de pegarlos

**Anonimizar:** sacar los detalles que identifican a personas o empresas antes de pegar el texto.

**4 pasos:**

1. **Cambia nombres por roles:** persona real → "el cliente". Empresa → "Empresa A".
2. **Usa valores ficticios:** números reales → números ficticios parecidos. Emails reales → nombre@ejemplo.com.
3. **Pega solo lo necesario:** no subas el PDF o la planilla completa (tienen metadatos ocultos).
4. **No incluyas identificadores que no aportan nada** a la tarea.

**Mal:**

```
Redacta un email de renovación para Sara Gómez en Empresa XYZ. Su contrato
de $2.3M vence el 31 de agosto y están molestos por las demoras de soporte.
```

**Mejor:**

```
Redacta un email de renovación para un contacto cliente. Su contrato de $5M
vence a fin del próximo mes, y están molestos por las demoras de soporte.
```

## 5. Usa el chat temporal para tareas de trabajo

Incluso con el entrenamiento apagado, los chats normales se guardan en tu historial.

Para tareas de trabajo, usa el modo de **chat temporal / incógnito** que ofrecen la mayoría de las IAs (en Claude: arriba a la derecha → "Incógnito"). Un chat temporal no se guarda en el historial y no se usa para entrenar. Lo cierras, y desaparece.

## 6. Conectores: lo más peligroso

**La combinación riesgosa (documentada por investigadores):** el momento en que una IA puede acceder a tus datos privados + leer contenido que no controlas + mandar información hacia afuera → puede ser manipulada para filtrar tus propios datos.

**Cómo usar conectores de forma segura:**

1. **Nunca conectes cuentas de trabajo a tu IA personal.** Gmail, Drive o Slack del trabajo no van en tu cuenta personal.
2. **Conecta lo mínimo, con el acceso más acotado posible.** Prefiere solo lectura o una sola carpeta antes que "todo mi Drive".
3. **Conecta solo conectores oficiales.** Los que aparecen en el directorio oficial de tu IA.
4. **Revisa y desconecta mensualmente.** Chequea la configuración de tu IA y la página de "acceso de terceros" de Google/Microsoft.

## 7. La mejor solución

Consigue que tu empresa pague la mejor IA disponible (Claude) y entrene a todo el equipo — con las herramientas oficiales, no con cuentas personales. Esa es exactamente la propuesta de [Claude para equipos](./05-claude-para-equipos.md).

---

*Contenido adaptado de la guía "Stop using your own Claude at work" de Ruben Hassid ([claude101.com](https://claude101.com)).*
