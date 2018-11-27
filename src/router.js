import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Works from './views/Works.vue'
import CuratedMemes from './views/works/CuratedMemes.vue'
import YomiThePoet from './views/works/YomiThePoet.vue'
import Natours from './views/works/Natours.vue'
import Trillo from './views/works/Trillo.vue'
import Coursetro from './views/works/Coursetro.vue'
import SegunsPortfolio from './views/works/SegunsPortfolio.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: ' '
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About Me | '
      }
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
      meta: {
        title: 'My Works | '
      }
    },
    {
      path: '/work/curated-memes',
      name: 'curated-memes',
      component: CuratedMemes,
      meta: {
        title: '#DesignChallenge: Curated Memes | '
      }
    },
    {
      path: '/work/yomi-the-poet',
      name: 'yomi-the-poet',
      component: YomiThePoet,
      meta: {
        title: 'Yomi the Poet Website | '
      }
    },
    {
      path: '/work/natours',
      name: 'natours',
      component: Natours,
      meta: {
        title: '#CodeChallenge: Natours | '
      }
    },
    {
      path: '/work/trillo',
      name: 'trillo',
      component: Trillo,
      meta: {
        title: '#CodeChallenge: Trillo | '
      }
    },
    {
      path: '/work/coursetro-redesign',
      name: 'coursetro',
      component: Coursetro,
      meta: {
        title: 'Redesigning Gary Simon\'s Coursetro | '
      }
    },
    {
      path: '/work/oluseguns-portfolio',
      name: 'oluseguns-portfolio',
      component: SegunsPortfolio,
      meta: {
        title: 'Portfolio Design for Olusegun Omilabu | '
      }
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})