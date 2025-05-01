---
title: "Terremotos en el Perú"
date: "2024-04-16"
updated: "2024-11-21"
categories: 
  - desastre natural
  - choropleth
coverImage: 'peru-earthquakes-map.svg'
coverWidth: 150
coverHeight: 180
excerpt: "Visualización de Terremotos en el Perú a lo largo de nuestra historia"
---

# Terremotos en el Perú: Una Historia de Poder Destructivo

¿Te has preguntado alguna vez cuán devastadores pueden ser los terremotos en Perú? Estos eventos impredecibles han marcado nuestra historia, arrebatando vidas en minutos y dejando a los sobrevivientes la difícil tarea de reconstruir desde cero.

## Un vistazo al pasado

Aunque no tenemos registros incaicos, los relatos de clérigos coloniales nos cuentan con escalofriante detalle las tragedias que los peruanos hemos enfrentado desde siempre. El Instituto Geofísico del Perú (IGP) ha hecho un trabajo fascinante calculando las posibles magnitudes y epicentros de estos eventos históricos, que puedes revisar en la página 16 de este [boletín](https://github.com/ccalobeto/earthquakes/blob/main/data/information/C-003-Boletin-Historia_sismos_mas_notables_Peru.pdf).

Desde 1960, contamos con datos precisos medidos por instrumentos cada vez más avanzados. El IGP ofrece esta información en su [portal de descargas](https://ultimosismo.igp.gob.pe/descargar-datos-sismicos), donde encontrarás registros desde 1471 hasta la actualidad.

La medida que mejor representa el poder destructivo de estos fenómenos es la **<span style="color:red;">Magnitud Momento (M)</span>**. Si quieres entenderla mejor, estos videos ([video1](https://www.youtube.com/watch?v=yNN7eDXzlMo) y [video2](https://www.youtube.com/watch?v=e3uk7jU3RHo)) lo explican muy bien.

¿Y sabías que la escala de magnitud no es lineal? ¡Un terremoto de 7M es 31.6 veces más potente que uno de 6M, y uno de 8M es casi 1,000 veces más intenso que uno de 6M! Impresionante, ¿verdad?

## Explorando los datos

**[¡Haz click aquí para ver la visualización interactiva de terremotos en Perú!](https://ccalobeto.github.io/earthquakes/)**

Este proyecto muestra dos visualizaciones fascinantes:
- Un **timeline chart** que revela la cantidad de terremotos por departamento a lo largo de la historia
- Un **map chart** que muestra la ubicación geográfica, magnitud y profundidad de cada evento

Para crear estas visualizaciones, tuvimos que:
1. Trabajar con datos desde 1471 hasta febrero de 2024
2. Para los registros antiguos (1471-1959), seleccionamos la magnitud máxima entre las tres variables que ofrece el IGP
3. Como el IGP no proporciona la localidad exacta de cada evento, usamos la librería **turf** de JavaScript para determinar el distrito más cercano al epicentro

Si te interesa la parte técnica, puedes explorar todos los detalles de la preparación del dataset en este [repositorio](https://github.com/ccalobeto/earthquakes).

El análisis de los datos revela patrones sorprendentes:
- Arequipa lidera con 23 terremotos superiores a 7M, seguido de Lima con 21
- Los círculos verdes indican terremotos ocurridos después de 1960
- Arequipa ha tenido actividad sísmica más frecuente e intensa en los últimos 100 años
- Lima presenta un preocupante "silencio sísmico" que alertan las autoridades
- El terremoto más poderoso registrado fue en Ite, Tacna (1604) con una impactante magnitud de 9.4M, que se sintió a miles de kilómetros

Desde 1960, hemos registrado 1,208 eventos superiores a 5.5M, incluyendo 6 terremotos devastadores por encima de 7.8M. El más potente de la era moderna fue en Atico, Arequipa (2001) con 8.4M, seguido por un tsunami que arrasó sus principales balnearios.

## La lección pendiente

Visualizar estos datos nos ayuda a comprender la verdadera dimensión de nuestra actividad sísmica histórica. Aunque las autoridades intentan crear conciencia, seguimos enfrentando cierta indiferencia colectiva entre nosotros y nuestros líderes.

¿No crees que ya es hora de desarrollar una verdadera cultura de prevención como la de Chile o Japón? La historia sísmica nos dice que no es cuestión de "si" ocurrirá otro gran terremoto, sino de "cuándo".




