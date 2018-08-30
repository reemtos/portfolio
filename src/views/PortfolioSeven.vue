<template>
    <div class="single-project-page">
      <section class="section-single-project">
        <div class="project-details">
          <div class="project-details__heading">
            <h3 class="heading-primary">Redesigning Gary Simon’s Coursetro</h3>
            <h4 class="sub-heading">UI/UX Design (WEB)</h4>
          </div>
          <div class="project-details__body">
            <h4 class="heading-tertiary u-center-text">Background</h4>
            <p class="paragraph"><a class="link" href="https://memes.curatedbits.com/" target="_blank">Coursetro</a> (dot com) is an online learning platform founded by <b>Gary Simon</b> where he teaches design and code. Gary himself is the instructor, and his lectures and tutorials cover a wide range of topics; from mobile development, to web development and many more. I stumbled on his platform about six months ago, while I was searching for <b>Vue.js</b> tutorials. I went ahead to purchase a number of courses on the site, and I have since become a fan of Gary himself, his courses and his tutorials.</p>
            
            <p class="paragraph">Recently, I realised how much improvements his site could use, so I decided to give it a well-deserved makeover. A detailed breakdown of how I achieved this, my thought-process and considerations is published via <a class="link" href="https://medium.com/@reemtos" target="_blank">my Medium account</a> tagged <a class="link" href="https://medium.com/@reemtos/redesigning-gary-simons-coursetro-69ee49d77aa8" target="_blank">“Redesigning Gary Simon’s Coursetro”</a>. Please take some time to check it out so you have an understanding of how I arrived at the new design.</p>
            
            <h4 class="heading-tertiary u-center-text">The Current Design</h4>
            <img src="../assets/img/portfolio/coursetro/coursetro-current-home-page.png" alt="coursetro current homepage">
            
            <h4 class="heading-tertiary u-center-text">The New Design</h4>
            <p class="paragraph">The new design takes the current design, the user experience and data presentation from good to better, and to great. It gives Coursetro the refreshing new look and feel that it deserves, and it also highlights how tiny improvements can play vital roles on a site’s overall look and feel.</p>
            <img src="../assets/img/portfolio/coursetro/new-coursetro-design.jpg" alt="new coursetro design">
          </div>
          <div class="project-details__footer">
            <div class="pagination">
              <router-link to="/portfolio/summitech" class="pagination__link">
                <i class="fas fa-chevron-left pagination__link--icon prev"></i>
                <span class="pagination__link--label">Prev</span>
              </router-link>
              <router-link to="/work" class="pagination__link">
                <span class="pagination__link--label">All works</span>
              </router-link>
              <router-link to="/portfolio/curated-memes" class="pagination__link">
                <span class="pagination__link--label">Next</span>
                <i class="fas fa-chevron-right pagination__link--icon next"></i>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <Hire :additionalClass="additionalClass"/>
  </div>
</template>

<script>
import Hire from '../components/Hire';

export default {
  components: {
    Hire
  },
  data: function() {
    return {
      additionalClass: ''
    };
  }
};
</script>
