<template>
    <div class="single-project-page">
      <section class="section-single-project">
        <div class="project-details">
          <div class="project-details__heading">
            <h3 class="heading-primary">#DesignChallenge: Summitech</h3>
            <h4 class="sub-heading">UI Design (WEB)</h4>
          </div>
          <div class="project-details__body">
            <h4 class="heading-tertiary u-center-text">Background</h4>
            <p class="paragraph">So, my workplace wanted a redesign of the current website, and they threw it open to the entire engineering team for ideas and options. This particular challenge was an interesting one for me, because it was my first end-to-end design challenge. I took the time to design all required pages, as there was a need to thoroughly convey my thought process and considerations. It was a collaborative effort between myself and a colleague, and the process lasted exactly two weeks.</p>
            <h4 class="heading-tertiary u-center-text">The Current Design</h4>
            <img src="../assets/img/portfolio/summitech/summitech-original-homepage.png" alt="Light theme image">
            <h4 class="heading-tertiary u-center-text">The New Home Page</h4>
            <p class="paragraph">So, I opted for a simple, clean and minimalistic design. I did away with unnecessary slides (mostly javascript dependencies) and killed a lot of arcade contents that somehow affect page performance and mobile experience.  I placed emphasis on the company, their services and their products.</p>
            <img src="../assets/img/portfolio/summitech/home-page.jpg" alt="Light theme image">
          </div>
          <div class="project-details__footer">
            <div class="pagination">
              <router-link to="/portfolio/trillo" class="pagination__link">
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
