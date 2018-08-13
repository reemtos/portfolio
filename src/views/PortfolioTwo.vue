<template>
    <div class="single-project-page">
      <section class="section-single-project">
        <div class="project-details">
          <div class="project-details__heading">
            <h3 class="heading-primary">Yomi the Poet Website</h3>
            <h4 class="sub-heading">Website Development</h4>
          </div>
          <div class="project-details__body">
            <h4 class="heading-tertiary u-center-text">Background</h4>
            <p class="paragraph">Yomi the Poet is an online "community of literary lovers", where books of various kinds are shared and reviewed from time to time. The website had already been designed, I only came in to translate the design into pixel-perfect and interactive web screens. My job started and ended at the conversion aspect, and the screens provided below are what I handed over to the team for back-end to integrate with. Live demo available <a class="link" href="https://memes.curatedbits.com/" target="_blank">here</a>.</p>
            <img src="../assets/img/portfolio/yomi-the-poet/yomi-the-poet-homepage.png" alt="Light theme image">
            <img src="../assets/img/portfolio/yomi-the-poet/yomi-the-poet-about.png" alt="Dark theme image">
          </div>
          <div class="project-details__footer">
            <div class="pagination">
              <router-link to="/portfolio/curated-memes" class="pagination__link">
                <i class="fas fa-chevron-left pagination__link--icon prev"></i>
                <span class="pagination__link--label">Prev</span>
              </router-link>
              <router-link to="/work" class="pagination__link">
                <span class="pagination__link--label">All works</span>
              </router-link>
              <router-link to="/portfolio/dev-portfolio-vue" class="pagination__link">
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
