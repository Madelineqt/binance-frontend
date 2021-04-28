<template>
<div>
  <div class="bg-indigo-100 py-6 md:py-12">
          <div class="container px-4 mx-auto">
            <div class="text-center max-w-2xl mx-auto">
              <h1 class="text-3xl md:text-4xl font-medium mb-2">Cool graph for big money.</h1>
            </div>
          </div>
        </div>
        <div class="flex space-x-10 justify-center">
          <figure class="content-center w-96 bg-gray-100 rounded-xl ring-indigo-200 ring-4">
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-center text-black-500 text-2xl font-semibold">
                Total gain
              </p>
              <p v-bind:class="{['text-red-500']:totalgain < 0, ['text-green-500']:totalgain > 0}" class="text-center text-green-500 text-3xl font-semibold">
                {{totalgain}}%
              </p>
            </blockquote>
          </div>
          </figure>
          <figure class="content-center w-96 bg-gray-100 rounded-xl ring-indigo-200 ring-4">
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-center text-black-500 text-2xl font-semibold">
                24h gain
              </p>
              <p v-bind:class="{['text-red-500']:gain < 0, ['text-green-500']:gain > 0}" class="text-center text-3xl font-semibold " >
                {{gain}}%
              </p>
            </blockquote>
          </div>
          </figure>
        </div>
        <div class="flex items-center justify-center mt-16 ">
      <figure class="content-center rounded-xl bg-white ring-indigo-200 ring-4">
      <graph-line
            class="m-4" 
            :width="600"
            :height="400"
            :shape="'normal'"
            :axis-min="min"
            :axis-max="max"
            :axis-full-mode="true"
            :labels="labels"
            :names="names"
            :values="values">
        <note :text="'Bot account value overtime'"></note>
        <tooltip :names="names" :position="'right'"></tooltip>
        <guideline :tooltip-y="true"></guideline>
    </graph-line>
    </figure>
    
  </div>
</div>
  
</template>

<script>
export default {
    props: ['names','labels','values', 'min','max', 'gain', 'totalgain'],
}
</script>

