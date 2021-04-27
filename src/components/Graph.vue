<template>
  <div class="flex items-center justify-center mt-32">
      <graph-line 
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
        <legends :names="names"></legends>
        <guideline :tooltip-y="true"></guideline>
    </graph-line>
  </div>
</template>

<script>
export default {
    props: ['names','labels','values', 'min','max'],
}
</script>

