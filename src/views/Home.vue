<template>
  <div class="home-page">
    <section class="section-intro">
        <div class="about">
            <div class="about__image-box">
                <img src="../assets/img/image7.jpg" alt="Picture of me" class="image">
            </div>
            <div class="about__info">
                <h3 class="heading-secondary">Hi! I’m Tosin :)</h3>
                <h3 class="heading-tertiary">Front-end developer and designer from Lagos, Nigeria; with over 3 years of professional experience in software design and development across different industries.</h3>
                <p class="paragraph">I collaborate with creative people to develop smart solutions that are both beautiful and functional; mostly on the web, and every so often on mobile devices.</p>
                <router-link to="/about" class="btn">
                    <span class="btn__label--visible">more about me</span>
                    <span class="btn__label--invisible">i mean, why not?</span>
                </router-link>
            </div>
        </div>
    </section>

    <section class="section-portfolio">
        <div class="section-head">
          <h3 class="sub-heading">portfolio</h3>
          <h3 class="main-heading">Project Highlights</h3>
        </div>
        <div class="portfolio">
            <div class="portfolio__item">
                <router-link to="/portfolio/curated-memes" title="View case study" class="portfolio__item-link">
                    <div class="portfolio__item-shape" :style="{ 'background-image': 'url(' + require('../assets/img/portfolio/curated-memes/curated-memes-showcase.jpg') + ')' }">
                        <div class="portfolio__item-description">
                            <h4 class="portfolio__item--label">#DesignChallenge: Curated Memes</h4>
                            <h4 class="portfolio__item--sub-label">User interface and user experience redesign of a meme sharing and download website.</h4>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="portfolio__item">
                <router-link to="/portfolio/yomi-the-poet" title="View case study" class="portfolio__item-link">
                    <div class="portfolio__item-shape" :style="{ 'background-image': 'url(' + require('../assets/img/portfolio/yomi-the-poet/yomi-the-poet-showcase.jpg') + ')' }">
                        <div class="portfolio__item-description">
                            <h4 class="portfolio__item--label">Yomi the Poet</h4>
                            <h4 class="portfolio__item--sub-label">Responsive website development for Nigerian poet and book reviewer - Yomi the Poet.</h4>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="portfolio__item">
                <router-link to="/portfolio/dev-portfolio-vue" title="View case study" class="portfolio__item-link">
                    <div class="portfolio__item-shape" :style="{ 'background-image': 'url(' + require('../assets/img/portfolio/vue-portfolio/portfolio-showcase.jpg') + ')' }">
                        <div class="portfolio__item-description">
                            <h4 class="portfolio__item--label">#CodeChallenge: Developer Portfolio</h4>
                            <h4 class="portfolio__item--sub-label">A landing page design and development of a web developer portfolio built with Vue JS.</h4>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="portfolio__item">
                <router-link to="/portfolio/natours" title="View case study" class="portfolio__item-link">
                    <div class="portfolio__item-shape" :style="{ 'background-image': 'url(' + require('../assets/img/portfolio/natours/natours-showcase.jpg') + ')' }">
                        <div class="portfolio__item-description">
                            <h4 class="portfolio__item--label">#CodeChallenge: Natours</h4>
                            <h4 class="portfolio__item--sub-label">A responsive landing page for a fictional company that offers tours and guides into Nature.</h4>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>

    <section class="section-services">
        <div class="section-head">
          <h3 class="sub-heading">services</h3>
          <h3 class="main-heading">Area of Expertise</h3>
        </div>
        <div class="service">
            <div class="service__item">
                <div class="service__item--icon-box" :style="{ 'background-image': 'url(' + require('../assets/img/circles.png') + ')' }">
                    <img src="../assets/img/icons/laptop.png" class="service__item--icon laptop" alt="laptop icon">
                </div>
                <div class="service__item--description">
                    <h4 class="heading-tertiary">Web Development</h4>
                    <p class="paragraph small">Whether it’s a website, an eCommerce platform or an enterprise application, I create bespoke, responsive and mobile-friendly web solutions that conform with product
                        and/or design specifications.
                    </p>
                </div>
            </div>
            <div class="service__item">
                <div class="service__item--icon-box" :style="{ 'background-image': 'url(' + require('../assets/img/circles.png') + ')' }">
                    <img src="../assets/img/icons/layout.png" class="service__item--icon layout" alt="layout icon">
                </div>
                <div class="service__item--description">
                    <h4 class="heading-tertiary">UI/UX Design</h4>
                    <p class="paragraph small">With modern-day tools like Sketch and Marvel App, I enjoy creating design mockups, wireframes,
                        as well as prototyping; with adequate attention to the tiniest of details. </p>
                </div>
            </div>
            <div class="service__item">
                <div class="service__item--icon-box" :style="{ 'background-image': 'url(' + require('../assets/img/circles.png') + ')' }">
                    <img src="../assets/img/icons/mobile.png" class="service__item--icon mobile" alt="mobile icon">
                </div>
                <div class="service__item--description">
                    <h4 class="heading-tertiary">Mobile Apps</h4>
                    <p class="paragraph small">As a newbie in the mobile development environment, I develop cross-platform (iOS and Android)
                        mobile applications with hybrid technologies such as Nativescript, that look great and also
                        function efficiently.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-testimonial">
        <div class="section-head">
          <h3 class="sub-heading">testimonials</h3>
          <h3 class="main-heading">working with me</h3>
        </div>
        <div class="testimonial">
            <div class="testimonial__item">
                <div class="testimonial__item-wrapper">
                    <p class="paragraph u-text-italic">&OpenCurlyDoubleQuote;When you work with Tosin, you get his vast knowledge of coding, best practices,
                        accessibility expertise, and cutting edge approaches. What you also get is someone who cares
                        about the overall health and quality of the work from every angle: user experience, visual design,
                        usability, and much more.&CloseCurlyDoubleQuote;</p>
                    <h4 class="heading-tertiary">-
                        <a href="#" title="Adekunle's LinkedIn Profile">Adekunle, Kunle-Hassan</a>
                    </h4>
                    <p class="paragraph small u-text-italic">Founder/CEO,
                        <a href="#" title="Summitech's Website">Summitech Computing Ltd.</a>
                    </p>
                </div>
            </div>
            <div class="testimonial__item">
                <div class="testimonial__item-wrapper">
                    <p class="paragraph u-text-italic">“When you work with Tosin, you get his vast knowledge of coding, best practices, accessibility expertise, and cutting edge approaches. What you also get is someone who cares about the overall health and quality of the work from every angle: user experience, visual design, usability, and much more.”
                    </p>
                    <h4 class="heading-tertiary">-
                        <a href="#" title="Adekunle's LinkedIn Profile">Adekunle, Kunle-Hassan</a>
                    </h4>
                    <p class="paragraph small u-text-italic">Founder/CEO,
                        <a href="#" title="Summitech's Website">Summitech Computing Ltd.</a>
                    </p>
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
      additionalClass: 'u-padding-top-none'
    };
  }
};
</script>
