<template>
  <header class='w-full h-11 bg-white shadow-sm'>
      <div class='h-full container flex text justify-between'>
        <div class='flex items-center'>
          <NuxtLink to="/"><p class='font-yeseva text-2xl'>GE</p></NuxtLink>
        </div>
        <div class='flex gap-x-1 items-center'>
          <NuxtLink></NuxtLink>
          <NuxtLink to="/"><button class='hover:underline hover:underline-offset-4 py-2 px-2'>Home</button></NuxtLink>
          <NuxtLink to="/about"><button class='hover:underline hover:underline-offset-4 py-2 px-2'>About</button></NuxtLink>
          <NuxtLink to="/works"><button class='hover:underline hover:underline-offset-4 py-2 px-2'>Works</button></NuxtLink>
        </div>
      </div>
    </header>
</template>