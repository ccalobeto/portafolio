<script>
  import FontTester from '$lib/components/demos/FontTester.svelte'
  import SiteColors from '$lib/components/demos/SiteColors.svelte'
</script>

## Desarrollo de Software

### Lenguajes y frameworks
Los proyectos presentados en este blog usan código abierto. Su gran ventaja *a mi concepto* es que de lejos tienen un ecosistema más colaborativo y un pipeline de datos más corto.

- **CSS** y **HTML** son la base para comprender a fondo el desarrollo web; aprende los fundamentos básicos ya que interactuan con *javascript*.

- El siguiente paso es familiarizarte con **javascript** hay un sin número de tutoriales en la web como [midudev](https://www.youtube.com/@midudev). Si quieres ir mas allá abre tu cuenta en [observablehq](https://observablehq.com/) (de pago); el cual es una plataforma en la nube donde encontrarás muchos ejemplos de todos los calibres para practicar en tus propios notebooks. La plataforma soporta importación de archivos, conexión a bd, tiene una potente herramienta de visualización de sintaxis reducida llamada **Framework** y puedes desplegar tu propia visualización en un site. Tambien puedes usar **d3.js** en la plataforma.

- [d3.js](https://d3js.org/) es una librería de javascript que te permite desarrollar cualquier tipo de visualización, personalmente lo uso con [svelte](https://svelte.dev/) que es un framework de fuerte aceptación en la comunidad. **Svelte** hace lo mismo que *React* o *Vue*; posee una sintaxis muy intuitiva y un compilador que te ayudará a detectar no sólo errores en tu código sino *typos* indetectables sin ayuda de librerías externas. Para el desarrollo de este blog usé [SvelteKit](https://kit.svelte.dev/), que posee los mismos fundamentos de svelte aplicado para desarrollo web.
- [TypeScript](https://www.typescriptlang.org/) es un superconjunto de JavaScript que añade tipado estático opcional y funciones avanzadas a JavaScript. Tomate el tiempo de conocerlo, verás todo su potencial cuando tus proyectos se vuelvan cada vez más complejos. 

- [Python](https://www.python.org/) es una herramienta poderosa cuyas librerías ocupan todo el pipeline de datos desde la extracción hasta el despliegue. Sin embargo en mis proyectos lo usaré para preparar y transformar los datos. [R](https://www.r-project.org/) tambien tiene la misma funcionalidad pero a diferencia de **Python** su catálogo de librerías es menor.

### Herramientas de Código

- [Visual Studio Code](https://code.visualstudio.com/): mi editor favorito por lejos. Antes solía utilizar *pycharm* y *jupyter notebooks* pero la cantidad de configuraciones y extensiones ha hecho de **VsCode** un estandard. 
  - **Configuraciones**: Te dejo un enlace de [midudev](https://www.youtube.com/watch?v=uyEUVgNMvGI) con algunos consejos que te ayudarán a agilizar el desarrollo de tus proyectos.

  - **Extensiones**: Te menciono algunos:

    - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): es una extraordinaria herramienta en la que observas el estado de tu git, sus ramas y el histórico de commits.

    - [Codeium](https://marketplace.visualstudio.com/items?itemName=Codeium.codeium): es un autocompletador de código que usa la IA y que está disponible para Python, Javascript, Typescript, Svelte y otros más.

    - [Conventional Commits for VSCode](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits): Haz commits como todo un profesional. Te ayudará a sumergirte en las [mejores prácticas](https://www.conventionalcommits.org/en/v1.0.0/) sobre como etiquetar los cambios en tu código.

- [Markdown](https://www.markdownguide.org/): es un lenguaje de marcado que sirve para documentar tu código de manera [profesional](https://github.com/orgs/community/discussions/16925). Al seguir sus lineamientos tus colegas te lo agraderán cuando desees contribuir o elaborar una herramienta de software.

- [Chrome](hhttps://www.google.com/chrome/):
   Es un excelente navegador que posee gran privacidad y extensiones increíbles. Otro navegador muy utilizado cuando necesitas hacer algo de web scraping es [thor](https://www.torproject.org/) ;).

- [Cloudflare](https://www.cloudflare.com/): también son fan de *Github Pages* y *Netlify* porque su configuración es simple para un despliegue de proyecto ligero.
  Sin embargo **Clouflare** es una plataforma global en la nube diseñada para que todos los recursos conectados a Internet sean seguros, privados, rápidos y confiables. Tiene una capa gratuita mucho más benévola que Amazon, Azure ó Google. Puedes hacer todo lo que hace Amazon desde alojamiento, archivar archivos super pesados (como los usados en cartografía) y configurarlo para que la respuesta de tu página (usualmente tu landing page) lo haga el servidor (CDN) más cercano. 


## Hardware
Desde que me cambié a Mac (hoy Apple M2) hace algunos años, no he vuelto a usar otro hardware. Es veloz, no tienes problemas de "reseteos" inesperados y muy seguro ante los virus. En caso te decidas por un equipo así pero aún manejas *PowerBI*, lamento decirte que la aplicación aún no está disponible para IOS. Te recomiendo usar [Parallels](https://www.parallels.com/) (algo parecido a una maquina virtual instalada en tu mac) para que puedas usar el **PowerBI** en windows, pero tiene costo.


## Productividad y Utilitarios
- [FreeOTP Authenticator](https://apps.apple.com/us/app/freeotp-authenticator/id872559395?platform=iphone): Es una aplicación de autenticación de dos factores para sistemas que utilizan protocolos de contraseña de un solo uso. Lo uso en el móvil con mi cuenta de **GitHub** cada vez que hago una operación delicada como borrar algún repositorio, cambio de nombre de repositorio o cambio de contraseña.

- [Harvest](https://www.getharvest.com/): una manera fácil de realizar un seguimiento del tiempo en todos tus proyectos, posee informes instantáneos, facturación y pagos fluidos. También tiene una capa gratuita.

- [Obsidian](https://obsidian.md/):
  Mi aplicación de notas favorita. Estas pueden crecer y volverse tan complejas como lo necesites. La compatibilidad con Markdown y la opción de resaltar código es fantástico.

- [PhotoScape X](http://x.photoscape.org/): Editor gratuito de Imágenes y videos. Lo uso en conjunto con **Obsidian** para hacer mejores notas.


## This site

<p class="details">Esta es la tercera versión de mi marca personal. Comparado con la última versión le he cambiado colores y diseño.</p>

### Colors

<SiteColors />

### Fonts

<FontTester
  font="Alkes"
  label="Alkes"
  link="https://www.myfonts.com/fonts/font-fabric/alkes/"
  italic={true}
  bold={true}
/>
<FontTester
  font="Averta-Std"
  label="Averta Std"
  link="https://www.myfonts.com/fonts/intelligent-foundry/averta-standard/"
  bold={true}
/>
<FontTester
  font="MonoLisa"
  label="MonoLisa
  Regular"
  link="https://www.monolisa.dev/"
/>

<p class="details">
  Other fonts I've used previously:
  <a href="https://www.myfonts.com/fonts/jcfonts/korb/" rel="external">Korb</a>
  (both on its own and paired with <a href="https://fonts.google.com/specimen/Bitter/" rel="external">Bitter</a>);
  <a href="https://www.myfonts.com/fonts/bitstream/clarendon/" rel="external">Clarendon BT Pro</a> +
  <a href="https://www.myfonts.com/fonts/latinotype/texta/" rel="external">Texta</a>; and
  <a href="https://www.myfonts.com/fonts/stawix/amsi-pro/" rel="external">Amsi Pro</a> +
  <a href="https://www.myfonts.com/search/sagona/" rel="external">Sagona</a>;
  <a href="https://www.myfonts.com/fonts/typemates/pensum-display/" rel="external">Pensum Display.</a>
  (I know you do not care, but this is here mostly just for my own memory.)
</p>
