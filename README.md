# DebtHub - Backend
Link: [link a este design doc](#)

Author(s): Claudio S.

Status: Draft

Última actualización: 2023-06-23

## Contenido

- Goals
- Non-Goals
- Background
- Overview
- Detailed Design
  - Solución
    - Frontend
    - Backend 
- Consideraciones
- Métricas

Links
- [Un link](#)
- [Otro link](#)

<div style="text-align: justify">

## 1. Objetivo

El objetivo principal de esta solución es abordar los desafíos recurrentes que surgen en la gestión de las finanzas personales, con el fin de lograr la libertad financiera. Además, busca facilitar la gestión de deudas y préstamos, tanto con familiares como con amigos.

La gestión efectiva de las finanzas personales es fundamental para alcanzar la estabilidad económica y la independencia financiera. Sin embargo, a menudo nos encontramos con dificultades y dolores relacionados con esta tarea mensualmente.

## 2. Contexto

En este contexto, la solución que se propone tiene como objetivo proporcionar una herramienta que simplifique y agilice la gestión de las finanzas personales. Esto permitirá a los usuarios tener un mayor control sobre sus gastos, ingresos, ahorros y presupuesto general. Asimismo, la solución busca ofrecer funcionalidades específicas para facilitar el seguimiento y la administración de las deudas y préstamos que se mantienen con familiares y amigos.

Al alcanzar este objetivo, los usuarios podrán tomar decisiones financieras más informadas, identificar áreas de mejora en su presupuesto y tener una visión clara de su situación económica. En última instancia, la solución busca contribuir a mejorar la calidad de vida financiera de los usuarios y brindarles mayor tranquilidad en su día a día.

## 3. Background 

En la actualidad, me encuentro en una situación donde tengo préstamos pendientes que he solicitado a mis padres, así como también he permitido que otros utilicen mi tarjeta de crédito para realizar compras y aprovechar los beneficios que esta ofrece.

Para gestionar estas transacciones, he estado utilizando un método bastante básico y sencillo: una nota rápida en mi celular. En esta nota, registro las cuotas, pagos, deudas y otros detalles relacionados.

Por tanto, reconociendo la necesidad de mejorar mi sistema de gestión financiera personal, he decidido desarrollar una solución más eficiente y completa. Esta solución tiene como objetivo principal proporcionar una plataforma digital que simplifique y centralice la gestión de mis préstamos y deudas.

Con esta nueva solución, podré registrar y hacer un seguimiento de manera organizada de mis pagos, cuotas, saldos pendientes y fechas de vencimiento. Además, dispondré de funcionalidades adicionales, como la generación automática de informes financieros y el establecimiento de recordatorios para evitar pagos atrasados.

## 4. Overview

En este proyecto, desarrollaré una aplicación que me permitirá gestionar de manera eficiente mis deudas y préstamos, abordando las necesidades y desafíos que surgen al llevar un registro preciso de estas transacciones.

La aplicación se enfocará en registrar información relevante tanto del acreedor como del deudor involucrado en cada transacción. Los acreedores son aquellas personas o entidades que tienen el derecho de recibir un pago, mientras que los deudores son aquellos que tienen la obligación de efectuar dicho pago.

Para garantizar un control y seguimiento más efectivo de los compromisos financieros, la aplicación mantendrá un registro detallado de cada deuda o préstamo. Esto incluirá información como los datos de las tarjetas, las cuotas acordadas, los montos involucrados, las fechas de vencimiento y los pagos realizados.

## 5. Detailed Design 

#### Definiciones

##### Auth
Permitir el registro y acceso controlado de usuarios.

Usuarios: Cada perfil puede registrar información personal como nombre completo, fecha de nacimiento, correo electronico, número de contacto, dirección, cuenta bancaria (para deposito). 

##### Debt
Registro de las deudas.
* Funciones: Cada prestamo registrado tendra una configuración para establecer la fecha limite de pago a modo recordatorio. Esta notifiación sera emitida a deudor y acreedor.

##### Prestamos
Registro de los prestamos.
* Funciones: Cada prestamo registrado tendra una configuración para establecer la fecha limite de pago a modo recordatorio. Esta notifiación sera emitida a acreedor y deudor.

##### Pagos
Registro de pagos recibidos y efectuados. 
* Funciones: Se espera que por cada pago recibido o realizado se emita una notificación. 

##### Información detallada
 Para los items que seran listados se mostrara información relevante para cada usuario. 
* Fechas
* Acreedor
* Deudor
* Cuotas
* Cuenta
* Total pagado
* Monto total
* Interes

C.R.U.D's

* Crear, modificar y desactivar perfiles de **usuarios**. 
* Crear, modificar, desactivar y listar registro de **deudas**. 
* Crear, modificar, desactivar y listar registro de **prestamos**.
* Crear, modificar y desactivar **notificaciones**.
* Crear, modificar y desactivar **cuenta bancaria**.
   
## 6. Solución
### Frontend
Se esta utilizando ReactJs y Tailwindcss. 

Componentes:

### Backend

Se esta utilizando lenguaje JavaScript con la tecnología de NodeJs, Express, Prisma y PostgreSQL. Además, se piensa incluir Docker en un futuro. 

Se deben incluir las librerias o módulos necesarios para poder desarrollar la funcionalidad de notificaciones por WhatsApp y Correo Electronico.

Liberaria o módulo para generación de reportes PDF y Excel. 

##### Endpoint 
Se utiliza el prefijo de /api/ para todas las rutas de API Rest. 

En un futuro se considera documentar la API en Swagger.

##### Debts Ejemplo

``` javascript
get '/api/debts'

get '/api/debts/:id'

get '/api/debts/:dni'

post '/api/debts' 

put '/api/debts/:id'

delete '/api/debts/:id' 
```

## 7. Consideraciones
_(Preocupaciones / trade-offs /  tech debt)_

Por definir.

## 8. Métricas

Es necesario validar información legal. 

</div>
