<template>
    <div class="about-page">
      <section class="section-portfolio">
        <div class="section-head">
            <h3 class="heading-primary">Project Highlights</h3>
            <p class="paragraph">A select collection of some of of my design and development works..</p>
        </div>
        <div class="portfolio">
            <div class="portfolio__item">
                <router-link to="/work/oluseguns-portfolio" title="View case study" class="portfolio__item-link">
                    <div class="portfolio__item-shape" :style="{ 'background-image': 'url(' + require('../assets/img/portfolio/segun/showcase.jpg') + ')' }">
                        <div class="portfolio__item-description">
                            <h4 class="portfolio__item--label">Olusegun's Portfolio</h4>
                            <h4 class="portfolio__item--sub-label">Portfolio design for Nigerian front-end developer and designer - Olusegun Omilabu.</h4>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="portfolio__item">
                <router-link to="/work/coursetro-redesign" title="View case study" class="portfolio__item-link">
                    <div class="portfolio__item-shape" :style="{ 'background-image': 'url(' + require('../assets/img/portfolio/coursetro/coursetro-showcase.png') + ')' }">
                        <div class="portfolio__item-description">
                            <h4 class="portfolio__item--label">Redesigning Gary Simon’s Coursetro</h4>
                            <h4 class="portfolio__item--sub-label">User interface and experience redesign of Gary Simon’s online learning platform - Coursetro.</h4>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="portfolio__item">
                <router-link to="/work/curated-memes" title="View case study" class="portfolio__item-link">
                    <div class="portfolio__item-shape" :style="{ 'background-image': 'url(' + require('../assets/img/portfolio/curated-memes/curated-memes-showcase.jpg') + ')' }">
                        <div class="portfolio__item-description">
                            <h4 class="portfolio__item--label">#DesignChallenge: Curated Memes</h4>
                            <h4 class="portfolio__item--sub-label">User interface and user experience redesign of a meme sharing and download website.</h4>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="portfolio__item">
                <router-link to="/work/yomi-the-poet" title="View case study" class="portfolio__item-link">
                    <div class="portfolio__item-shape" :style="{ 'background-image': 'url(' + require('../assets/img/portfolio/yomi-the-poet/yomi-the-poet-showcase.jpg') + ')' }">
                        <div class="portfolio__item-description">
                            <h4 class="portfolio__item--label">Yomi the Poet Website</h4>
                            <h4 class="portfolio__item--sub-label">Responsive website development for Nigerian poet and book reviewer - Yomi the Poet.</h4>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="portfolio__item">
                <router-link to="/work/natours" title="View case study" class="portfolio__item-link">
                    <div class="portfolio__item-shape" :style="{ 'background-image': 'url(' + require('../assets/img/portfolio/natours/natours-showcase.jpg') + ')' }">
                        <div class="portfolio__item-description">
                            <h4 class="portfolio__item--label">#CodeChallenge: Natours</h4>
                            <h4 class="portfolio__item--sub-label">A responsive landing page for a fictional company that offers tours and guides into Nature.</h4>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="portfolio__item">
                <router-link to="/work/trillo" title="View case study" class="portfolio__item-link">
                    <div class="portfolio__item-shape" :style="{ 'background-image': 'url(' + require('../assets/img/portfolio/trillo/trillo-showcase.jpg') + ')' }">
                        <div class="portfolio__item-description">
                            <h4 class="portfolio__item--label">#CodeChallenge: Trillo</h4>
                            <h4 class="portfolio__item--sub-label">A responsive landing page for a fictional company that offers booking services of various kinds.</h4>
                        </div>
                    </div>
                </router-link>
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
