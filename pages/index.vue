<script setup>
// definePageMeta({
//   layout: "default"
// })
</script>

<template>
  <main class='flex flex-col justify-center w-screen h-screen container'>
    <p id="name" class='font-yeseva text-7xl'>Gatum Erlangga</p>
    <div id="description" class='font-monstserrat text-base relative italic overflow-hidden'>
      A passionate&nbsp;
          <span id='passion' class='absolute leading-6'>
            <p id="passion-item">software developer</p>
            <p id="passion-item">tech enthusiast</p>
            <p id="passion-item">learner</p>
            <p id="passion-item">student</p>
          </span>
    </div>
    <div id='socmed'><SocialMediaIcons></SocialMediaIcons></div>
  </main>

</template>