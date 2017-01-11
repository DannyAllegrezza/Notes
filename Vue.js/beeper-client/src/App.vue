<!--This is our root component. -->
<template>
  <transition name="scale">
    <router-view></router-view>
  </transition>
</template>

<script>

</script>
<!-- Specifying the CSS in the root component applies it to every page-->
<style src="./assets/beeper.css"></style>
