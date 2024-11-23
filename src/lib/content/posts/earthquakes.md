---
title: "Terremotos en el Perú"
date: "2024-04-16"
updated: "2024-11-21"
categories: 
  - desastre natural
  - choropleth
coverImage: 'earthquakes-350.png'
coverWidth: 320
coverHeight: 180
excerpt: "Visualización de Terremotos en el Perú a lo largo de nuestra historia"
---

Siempre nos ha atormentado el poder destructivo de los terremotos, un fenómeno impredecible que causa la pérdida de vidas humanas en pocos minutos y a los sobrevivientes nos hace pensar en ese oscuro mañana de empezar con nuestras vidas nuevamente. 

## Historia
Aunque no se tienen registros de estos eventos en el incanato si tenemos documentado los más importantes ocurridos en la colonia narrados por clérigos de la época, quienes indican con precisión las desgracias que los peruanos pasamos desde siempre, vease pag. 16 de este [boletín](https://ccalobeto.github.io/earthquakes/data/information/C-003-Boletin-Historia_sismos_mas_notables_Peru.pdf). Basados en estos testimonios coloniales, el Instituto Geofísico del Perú (IGP) ha realizado un estupendo trabajo calculando la magnitud que pudieron haber alcanzado y la posible ubicación del epicentro del evento.

A partir de 1960 se tienen registros de los eventos sísmicos ocurridos en nuestro país medidos por instrumentos cada vez más sofisticados. El IGP provee el siguiente [enlace](https://ultimosismo.igp.gob.pe/descargar-datos-sismicos) desde dónde se puede descargar los datos de movimientos sísmicos desde 1471 - 2024. Estos datos muestran la ubicación del epicentro y la cantidad de energía liberada llamada **<span style="color:red;"> Magnitud Momento(M)</span>** que es la medida que mejor representa el poder destructivo de estos fenómenos. Aquí les dejo dos videos [video1](https://www.youtube.com/watch?v=yNN7eDXzlMo) y [video2](https://www.youtube.com/watch?v=e3uk7jU3RHo), explicando este concepto. 
Lo más sorprendente sobre el poder destructivo de un terremoto es que la intensidad se multiplica entre escala y escala; digamos de 6M a 7M es 31.6 veces más; mientras que de 6M a 8M su poder se incrementa a 31.6 x 31.6 casi 1,000 veces más!. 

## Visualización
Hacer click en la imagen para mostrar la visualización de los datos.
 [![Image of missing](/images/post_images/earthquakes-350.png)](https://ccalobeto.github.io/earthquakes/)
Este proyecto de visualización tuvo las siguientes etapas:
- Se realizaron dos visualizaciones: Un **timeline chart** histórico mostrando la cantidad de terremotos ocurridos por departamento y un **map chart** mostrando la ubicación geográfica de los movimientos, su Magnitud Momento y su profundidad.
- Los datos descargados corresponden de **1471 - 2024(19/02)**. Sobre la preparación, el IGP catalogó 3 variables relacionadas a la magnitud entre los años 1471-1959, en este proyecto se tomó la magnitud máxima para esos años.
Asimismo el IGP no proporciona los datos de la localidad donde ocurrió el evento, por ello se usó la librería estadística **turf** de javascript cuyas funciones nos ayudan a determinar la localidad más próxima al evento; primero calculando el **centroide del polígono** que representa los límites geográficos de cada distrito de la costa para luego calcular **el centroide más cercano** al evento. Los detalles de la preparación del dataset los puedes encontrar en este [repositorio](https://github.com/ccalobeto/wr-earthquakes).
- El timeline chart muestra la cantidad histórica de **terremotos superiores a 7M** por departamento. Se observa que Arequipa posee la mayor cantidad (23) seguido de Lima (21). El color verde del círculo indica terremotos sucedidos a partir de 1960. Asimismo se muestra que la actividad sísmica de Arequipa ha sido más frecuente e intensa que Lima en los últimos 100 años con terremotos de esta magnitud. Sin embargo estos fenómenos son cíclicos y por ello nuestras autoridades nos alertan de un **silencio sísmico** preocupante en la capital de grandes terremotos. Finalmente se resalta quizás el **terremoto más poderoso** registrado en nuestro país con una magnitud de 9.4M en Ite Tacna en 1604 y sentido a miles de kilómetros del epicentro.
- El map chart muestra la actividad sísmica desde 1960 con **1,228** eventos superiores a 5.5M. El gráfico también resalta 6 poderosos terremotos superiores a 7.8M entre los cuales el más poderoso fue en Atico, Arequipa en el 2001 con una magnitud de 8.4M seguido de un poderoso tsunami que arrasó las costas de sus principales balnearios. El tamaño de cada círculo representa la **Magnitud Momento(M)** y el color del círculo la **Profundidad** en kms. 

## Code Focus
D3 tiene una biblioteca muy versátil de funciones matemáticas que transforman variables. En nuestro caso es necesario construir una función que determine el radio del círculo de acuerdo a la magnitud momento de entrada. <p>
```
function powerScale(
  magnitude,
  timesPerScale = 31.62,
  maxMagnitude = 10,
) {
  const maxPower = Math.pow(timesPerScale, maxMagnitude)
  const scaler = d3.scaleSqrt().domain([0, maxPower]).range([0, maxRadius])
  return scaler(Math.pow(timesPerScale, magnitude))
}
```
*Explicación*

`magnitude`: es la magnitud momento.<p>
`timesPerSquale`: multiplicador de intensidad entre escalas.<p>
`maxMagnitude`: máxima escala del terremoto = 10M.<p>
`maxPower`: máxima intensidad calculada para un terremoto de 10M.<p>
`scaler`: función que devuelve el radio del círculo de acuerdo a la intensidad de la magnitud momento. El método *domain* es el rango de entrada de 0 - 10M y *range* es el rango del radio del circulo entre 0 y MaxRadius. Este último valor es configurable, en nuestro caso se configuró para que los eventos de 5.5M se visualizen como puntos y eventos de 10M con un radio de 1000 pixeles.


 ## Conclusiones
La visualización de los datos es una poderosa herramienta para entender nuestra histórica actividad sísmica y la real dimensión de los desastres.
Las autoridades que conocen del tema hacen lo posible en informar y formar conciencia colectiva pero aún hay indiferencia entre nosotros mismos y nuestros líderes para encauzar verdaderas iniciativas de cambio que nos lleven hacia una cultura de prevención, como sucede en países con historias similares a la nuestra como Chile o Japón. 




