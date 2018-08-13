<template>
    <div class="single-project-page">
      <section class="section-single-project">
        <div class="project-details">
          <div class="project-details__heading">
            <h3 class="heading-primary">#DesignChallenge: Curated Memes</h3>
            <h4 class="sub-heading">UI/UX Design</h4>
          </div>
          <div class="project-details__body">
            <h4 class="heading-tertiary u-center-text">Background</h4>
            <p class="paragraph"><a class="link" href="https://memes.curatedbits.com/" target="_blank">Curated Memes</a> is a “basic website where people can create account, upload and freely download memes for their use”, and was launched in June, 2018. The developer and owner had just announced the launch on his Instagram when I stumbled on his post. He wanted ideas, criticisms and insights as to how to improve the site’s look and feel, as well as usability. I thought the project was an interesting idea, and considering I was up for a #DesignChanllenge where I refactor a site’s look and feel, I decided I was going to hop on it.</p>
            <img src="../assets/img/portfolio/curated-memes/curated-memes-original.jpg" alt="curated memes original">
            
            <h4 class="heading-tertiary u-center-text">Current Design</h4>
            <p class="paragraph">The Layout and presentation appears nice. The preciseness of the platform was a yes for me, there were no distractions or unnecessary engagements. I loved the metrics features implemented; like the tracking of views and downloads. I thought that was a brilliant feature really.</p>
            
            <h4 class="heading-tertiary u-center-text">Revamping The Head/Intro Section</h4>
            <p class="paragraph">The head(er) section was a bit clustered, everything struggled for attention. The forms (search and upload) to the left and right of the logo, the logo itself and the navigation links beneath the logo, all of them could use some breathing space. Also, I thought it was important to implement separation of concerns (SOC) in the navigation links by separating meme (content) dependencies (trending, all, categories, search) from the site’s attributes / controls (about, login, upload, theme switch).</p>
            <p class="paragraph">I also felt the intro (jumbotron) section was being under-utilised. A catchy phrase that describes or introduces the platform would be a lot nicer, while the entire story of how the platform was birthed would be exclusive to the about page. The choice of yellow colour here, for me, felt detached from the site's colour scheme too. The site had a white, grey and navy blue colour going on, so there was a need to be consistent; especially considering the light and dark theme options.</p>
            <img src="../assets/img/portfolio/curated-memes/curated-memes-new-head.jpg" alt="curated memes new head">
            
            <h4 class="heading-tertiary u-center-text">The Search and Filter Section</h4>
            <p class="paragraph">Currently, the search appeared further away from the memes, which creates a detachment impression. So I decided to move it down, above the memes. Also, it was important to introduce a Filter Option for the displayed memes so as to group the meme-dependent attributes (as pointed out earlier) along with the memes so everything stays together at all times. This would enable ease of access and search of memes.</p>
            <img src="../assets/img/portfolio/curated-memes/curated-memes-search.jpg" alt="curated memes search">
            
            <h4 class="heading-tertiary u-center-text">Final Touches / New look</h4>
            <p class="paragraph">The meme section didn’t need tweaks, everything was right here, so I left it as is. The footer had the details restructured, not so much of a difference, just reordering and prioritisation of information. This closes up the entire process and the complete new look is provided as below.</p>
            <img src="../assets/img/portfolio/curated-memes/curated-memes-light-theme.jpg" alt="Light theme image">
            
            <h4 class="heading-tertiary u-center-text">The Dark Mode</h4>
            <p class="paragraph">The dark mode is pretty much the same as before, except for the yellow colour in the intro section which is now dark blue, leaving the introductory phrase bold and legible.</p>
            <img src="../assets/img/portfolio/curated-memes/curated-memes-dark-theme.jpg" alt="Light theme image">
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
              <router-link to="/portfolio/yomi-the-poet" class="pagination__link">
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
