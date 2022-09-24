<template>
  <div>
    <!-- Tool Name  -->
    <h1 class="lg:text-xl font-medium">Online Note</h1>
    <p class="text-sm text-slate-500">
      We offer you the free online tool, without signup. that helps you to write
      on a white paper or board so you can save your thoughts and memos and back
      to them anytime since we store them on your browser.
    </p>

    <div class="mb-4">
      <!-- Space  -->
    </div>
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

      <span v-if="!body" class="absolute text-slate-300 self-center text-3xl">
        Start typing..
      </span>
    </div>

    <p></p>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  head: {
    title: "Free online note taking writer",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Best digital online notepad taking tool, with ability to write on a white paper board. Save and dark modes supported",
      },
    ],
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
