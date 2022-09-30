<template>
  <div class="text-center">
    <h1>Nice stuff</h1>
    <div>
      {{ $t("home.heading") }}
    </div>

    <br />

    <div>
      <h2 class="font-semibold">{{ $t("home.ourstools") }}</h2>
      <div>
        <nuxt-link to="/online-note" class="text-blue-600">
          {{ $t("onlinenote.meta.title") }}
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/online-board" class="text-blue-600">
          {{ $t("onlineboard.meta.title") }}
        </nuxt-link>
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
  head() {
    return {
      title: `${this.$t("home.meta.title")}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.$t("home.meta.description")}`,
        },
      ],
    };
  },
};
</script>
