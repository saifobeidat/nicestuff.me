<template>
  <div class="text-center">
    <div>
      <h1 class="text-lg">
        {{ $t("home.meta.title") }}
      </h1>

      <br /><br />
      <div>
        <nuxt-link to="/online-note/" class="text-blue-600 text-xl">
          {{ $t("onlinenote.meta.title") }}
        </nuxt-link>
        <p>
          Write your notes or memo on a paper or board, so you can save your
          thoughts back to them anytime
        </p>
      </div>

      <br /><br />
      <div>
        <nuxt-link to="/online-board/" class="text-blue-600 text-xl">
          {{ $t("onlineboard.meta.title") }}
        </nuxt-link>
        <p>Draw or sketch on a whiteboard online and free without signup</p>
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
