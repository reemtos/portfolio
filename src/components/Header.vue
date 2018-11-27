<template>
    <header class="header" id="header">
        <div class="header__container">
            <div class="logo-box">
                <router-link to="/" class="link">
                    <img src="../assets/img/logo.png" alt="My logo" class="logo">
                </router-link>
            </div>
            <nav class="navigation">
                <ul class="navigation__list">
                    <li class="navigation__item">
                        <router-link to="/about" class="navigation__link">About</router-link>
                    </li>
                    <li class="navigation__item">
                        <router-link to="/works" class="navigation__link">Works</router-link>
                    </li>
                    <li class="navigation__item">
                        <a href="mailto:tosinorimogunje@gmail.com" class="navigation__link">Say Hello</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>
