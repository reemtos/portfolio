<template>
    <div class="single-project-page">
      <section class="section-single-project">
        <div class="project-details">
          <div class="project-details__heading">
            <h3 class="heading-primary">#CodeChallenge: Trillo</h3>
            <h4 class="sub-heading">Landing Page Development</h4>
          </div>
          <div class="project-details__body">
            <h4 class="heading-tertiary u-center-text">Background</h4>
            <p class="paragraph">Phoenix Seminary is expanding their online program as well as their overall enrollment so they reached out Brandon Riley, who is one of the top digital marketers in Phoenix. After coming up with a strategy for their digital marketing, Brandon brought me in to design and build a landing page to capture traffic from paid search. Our goal was to create a responsive landing page that loaded quickly and converted well.</p>
            <img src="../assets/img/portfolio/trillo/trillo-homepage.png" alt="Light theme image">
          </div>
          <div class="project-details__footer">
            <div class="pagination">
              <router-link to="/portfolio/natours" class="pagination__link">
                <i class="fas fa-chevron-left pagination__link--icon prev"></i>
                <span class="pagination__link--label">Prev</span>
              </router-link>
              <router-link to="/work" class="pagination__link">
                <span class="pagination__link--label">All works</span>
              </router-link>
              <router-link to="/portfolio/summitech" class="pagination__link">
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
