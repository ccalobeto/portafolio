/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 
export const metaImagesUrl ={
  ogImage: 'https://www.carlosleon.dev/images/site-image.png',
  twitterImage: 'https://www.carlosleon.dev/images/site-image.png'
}
export const siteTitles = {
  aboutMe: 'Carlos León | Acerca de mi',
  contact: 'Carlos León | Contacto',
  utilities: 'Carlos León | Utilidades',
  projects: 'Carlos León | Proyectos',
  blog: 'Carlos León | Blog',
  home: 'Carlos León',
  category: 'Carlos León | Categoría',
  allCategories: 'Carlos León | Categorías',
}
export const siteURL = 'https://www.carlosleon.dev'
export const siteAuthor = '- find and change this text in src/lib/config.js'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = {
  home: {
    title: 'Inicio',
    route: '/'
  },
	blog:{
		title: 'Blog',
		route: '/blog'
	}, 
  projects:{
    title: 'Proyectos',
    route: '/projects'
  }, 
  about:{
		title: 'Acerca de mi',
		route: '/about-me'
	}, 
  contact:{
		title: 'Contacto',
		route: '/contact' 
	}, 
  uses:{
    title: 'Utilidades',
    route: '/uses'
  }
}