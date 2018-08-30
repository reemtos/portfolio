<template>
    <footer class="footer">
        <div class="footer__scroll-button">
            <a href="#" v-scroll-to="'#header'" class="footer__scroll--link" title="Back to top">
                <i class="fas fa-angle-double-up footer__scroll--icon"></i>
            </a>
        </div>
        <div class="footer__social">
            <a href="https://twitter.com/reemtos" target="_blank" class="footer__social--link" title="Twitter">
                <i class="fab fa-twitter footer__social--icon"></i>
            </a>
            <a href="https://instagram.com/reemtos" target="_blank" class="footer__social--link" title="Instagram">
                <i class="fab fa-instagram footer__social--icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/reemtos/" target="_blank" class="footer__social--link" title="LinkedIn">
                <i class="fab fa-linkedin-in footer__social--icon"></i>
            </a>
            <a href="https://github.com/reemtos" target="_blank" class="footer__social--link" title="GitHub">
                <i class="fab fa-github footer__social--icon"></i>
            </a>
            <a href="https://codepen.io/reemtos/" target="_blank" class="footer__social--link" title="Codepen">
                <i class="fab fa-codepen footer__social--icon"></i>
            </a>
            <a href="https://medium.com/@reemtos" target="_blank" class="footer__social--link" title="Medium">
                <i class="fab fa-medium-m footer__social--icon"></i>
            </a>
        </div>
        <div class="footer__copyright">
            <p class="paragraph small">Copyright &copy; {{date}} Tosin Orimogunje.</p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: function() {
    const dateFull = new Date();
    return {
      date: dateFull.getFullYear()
    };
  }
};
</script>
