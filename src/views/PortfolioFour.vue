<template>
    <div class="single-project-page">
      <section class="section-single-project">
        <div class="project-details">
          <div class="project-details__heading">
            <h3 class="heading-primary">#CodeChallenge: Natours</h3>
            <h4 class="sub-heading">Landing Page Development</h4>
          </div>
          <div class="project-details__body">
            <h4 class="heading-tertiary u-center-text">Background</h4>
            <p class="paragraph">Natours is a mobile-responsive landing page for a fictional company that offers touring services into nature. This project is courtesy of Jonas Schmedtmann's Advanced CSS and SASS course on Udemy. The site is built with HTML5 and CSS3 only, with implementations of animations, clip-paths, background video and a couple of other interesting features. Source code is available <a class="link" href="https://github.com/reemtos/pp1-natours" target="_blank">here</a> on GitHub with <a class="link" href="https://reemtos.github.io/pp1-natours/" target="_blank">live demo</a> published via GitHub's Page.</p>
            <img src="../assets/img/portfolio/natours/natours-home-page.jpg" alt="natours home page">
          </div>
          <div class="project-details__footer">
            <div class="pagination">
              <router-link to="/portfolio/yomi-the-poet" class="pagination__link">
                <i class="fas fa-chevron-left pagination__link--icon prev"></i>
                <span class="pagination__link--label">Prev</span>
              </router-link>
              <router-link to="/work" class="pagination__link">
                <span class="pagination__link--label">All works</span>
              </router-link>
              <router-link to="/portfolio/trillo" class="pagination__link">
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
