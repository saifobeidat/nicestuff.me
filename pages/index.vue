<template>
  <div class="text-center">
    <h1>Nice stuff</h1>
    <div>
      This is nice stuff website, we will be offering you multiple cool online
      tools
    </div>

    <br />

    <div>
      <h2 class="font-semibold">Our tools:</h2>
      <div>
        <nuxt-link to="/online-note" class="text-blue-600"> Paper </nuxt-link>
      </div>
      <div>
        <span>
          Whiteboard <span class="text-slate-600 text-sm">(Soon)</span>
        </span>
      </div>

      <div>
        <span> Piano <span class="text-slate-600 text-sm">(Soon)</span> </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
