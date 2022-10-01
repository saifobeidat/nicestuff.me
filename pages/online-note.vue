<template>
  <div>
    <!-- Tool Name  -->
    <h1 class="lg:text-xl font-medium">
      {{ $t("onlinenote.heading") }}
    </h1>

    <!--  -->
    <div
      class="relative flex items-center justify-end text-slate-600"
      :class="showSaving ? 'opacity-100' : 'opacity-0'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="animate-spin w-4 h-4"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
        />
        <path
          d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
        />
      </svg>
      <span class="text-sm ml-1"> Saving.. </span>
    </div>
    <div class="relative h-[450px] flex justify-center">
      <textarea
        v-model="body"
        class="border border-slate-200 rounded w-full focus:outline-0 p-4 h-full"
      ></textarea>

      <span
        v-if="!body"
        class="absolute text-slate-300 self-center lg:text-3xl text-lg"
      >
        Start typing..
      </span>
    </div>

    <br />
    <p class="text-xs lg:text-sm text-slate-500">
      {{ $t("onlinenote.paragragh") }}
    </p>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  head() {
    return {
      title: `${this.$t("onlinenote.meta.title")}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.$t("onlinenote.meta.description")}`,
        },
      ],
    };
  },
  data() {
    return {
      body: null,
      showSaving: false,
      timer: null,
    };
  },
  methods: {},
  watch: {
    body(val) {
      let that = this;
      if (this.timer == null) {
        this.showSaving = true;
        this.timer = setTimeout(() => {
          that.showSaving = false;
          clearTimeout(this.timer);
          that.timer = null;
          that.$cookies.set("whitepaper", this.body);
        }, 1000);
      }
    },
  },
  mounted() {
    let cookie = this.$cookies.get("whitepaper");
    if (cookie) {
      this.body = cookie;
    }
  },
};
</script>

<style></style>
