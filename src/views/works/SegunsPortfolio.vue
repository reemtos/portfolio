<template>
    <div class="single-project-page">
      <section class="section-single-project">
        <div class="project-details">
          <div class="project-details__heading">
            <h3 class="heading-primary">Portfolio design for Olusegun Omilabu</h3>
            <h4 class="sub-heading">UI Design</h4>
          </div>
          <div class="project-details__body">
            <h4 class="heading-tertiary u-center-text">Background</h4>
            <p class="paragraph"><b>Olusegun Omilabu</b> is a front-end developer and designer, a colleague in the industry and a very good friend of mine. He wanted to work on his personal online portfolio and urged me to help him create a "a clean and simple design" for him to develop. He wanted something that was "less of him" and "more of his work". Basically, something to showcase his works, describe him briefly, highlight what he does, and provide a means of contacting him.</p>

            <p class="paragraph">Personally, I always wanted to do something with switching themes, considering it was the latest trend, so I decided it was going to have two (2) variants - a dark and a light version.  I started the design by wireframing and transitioned to sketch afterwards, completing the design a couple hours later. The designs are provided below along with the mobile screens with the <a class="link" href="https://olusegun-portfolio.herokuapp.com/" target="_blank">live version</a> published on his Heroku.</p>
            
            <h4 class="heading-tertiary u-center-text">The Dark Theme</h4>
            <img src="../../assets/img/portfolio/segun/desktop-dark.jpg" alt="new coursetro design">
            
            <h4 class="heading-tertiary u-center-text">The Light Theme</h4>
            <img src="../../assets/img/portfolio/segun/desktop-light.jpg" alt="new coursetro design">
            
            <h4 class="heading-tertiary u-center-text">Mobile View</h4>
            <img src="../../assets/img/portfolio/segun/mobile-presentation-light.jpg" alt="new coursetro design">
          </div>
          <div class="project-details__footer">
            <div class="pagination">
              <router-link to="/work/trillo" class="pagination__link">
                <i class="fas fa-chevron-left pagination__link--icon prev"></i>
                <span class="pagination__link--label">Prev</span>
              </router-link>
              <router-link to="/work" class="pagination__link">
                <span class="pagination__link--label">All works</span>
              </router-link>
              <router-link to="/work/coursetro-redesign" class="pagination__link">
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
import Hire from '../../components/Hire';

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
