import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Work from './views/Work.vue'
import PortfolioOne from './views/PortfolioOne.vue'
import PortfolioTwo from './views/PortfolioTwo.vue'
import PortfolioThree from './views/PortfolioThree.vue'
import PortfolioFour from './views/PortfolioFour.vue'
import PortfolioFive from './views/PortfolioFive.vue'
import PortfolioSix from './views/PortfolioSix.vue'

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
      path: '/work',
      name: 'work',
      component: Work,
      meta: {
        title: 'My Works | '
      }
    },
    {
      path: '/portfolio/curated-memes',
      name: 'curated-memes',
      component: PortfolioOne,
      meta: {
        title: '#DesignChallenge: Curated Memes | '
      }
    },
    {
      path: '/portfolio/yomi-the-poet',
      name: 'yomi-the-poet',
      component: PortfolioTwo,
      meta: {
        title: 'Yomi the Poet Website | '
      }
    },
    {
      path: '/portfolio/dev-portfolio-vue',
      name: 'dev-portfolio-vue',
      component: PortfolioThree,
      meta: {
        title: '#CodeChallenge: Developer Portfolio | '
      }
    },
    {
      path: '/portfolio/natours',
      name: 'natours',
      component: PortfolioFour,
      meta: {
        title: '#CodeChallenge: Natours | '
      }
    },
    {
      path: '/portfolio/trillo',
      name: 'trillo',
      component: PortfolioFive,
      meta: {
        title: '#CodeChallenge: Trillo | '
      }
    },
    {
      path: '/portfolio/summitech',
      name: 'summitech',
      component: PortfolioSix,
      meta: {
        title: '#DesignChallenge: Summitech | '
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