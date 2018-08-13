<template>
    <div class="single-project-page">
      <section class="section-single-project">
        <div class="project-details">
          <div class="project-details__heading">
            <h3 class="heading-primary">#CodeChallenge: Developer Portfolio</h3>
            <h4 class="sub-heading">Landing Page Development</h4>
          </div>
          <div class="project-details__body">
            <h4 class="heading-tertiary u-center-text">Background</h4>
            <p class="paragraph">This project is a simple web developer portfolio built with VueJs. It was my first attempt at learning Vue and the project is courtesy of Gary Simon's VueJs crash course on <b>coursetro</b>. The focus was to learn and understand Vue's syntax, style, components, animations and routing; hence, the nature of the (dummy) contents. Source code is available <a class="link" href="https://github.com/reemtos/pp3-portfolio" target="_blank">here</a> on GitHub with <a class="link" href="https://reemtos.github.io/pp3-portfolio/" target="_blank">live demo</a> published via GitHub's Page.
            </p>
            <h4 class="heading-tertiary u-center-text">Home Page</h4>
            <img src="../assets/img/portfolio/vue-portfolio/portfolio-homepage.png" alt="Light theme image">
            <h4 class="heading-tertiary u-center-text">Portfolio Page 1</h4>
            <img src="../assets/img/portfolio/vue-portfolio/portfolio-work-1.png" alt="Dark theme image">
            <h4 class="heading-tertiary u-center-text">Portfolio Page 2</h4>
            <img src="../assets/img/portfolio/vue-portfolio/portfolio-work-2.png" alt="Dark theme image">
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
              <router-link to="/portfolio/natours" class="pagination__link">
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
