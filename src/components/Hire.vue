<template>
    <section class="section-hire" v-bind:class="additionalClass">
        <div class="hire">
            <div class="hire__wrapper">
                <h3 class="heading-secondary u-text-capitalize u-margin-bottom-small">I'm available for hire.</h3>
                <p class="paragraph u-margin-bottom-medium">If you’re on the lookout for a front-end developer who writes clean, maintainable and future-proof
                    code, someone who has an eye for tiny and important details, with concern for user experience,
                    visual design and usability, you should look no further.</p>
                <a href="mailto:tosinorimogunje@gmail.com" class="btn bounce-always">
                    <span class="btn__label--visible">let's talk</span>
                    <span class="btn__label--invisible">send a mail</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Hire',
  props: ['additionalClass']
};
</script>
