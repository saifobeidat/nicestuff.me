<template>
  <div>
    <!-- Tool Name  -->
    <h1 class="lg:text-xl font-medium">{{ $t("onlineboard.heading") }}</h1>

    <div class="mb-1 lg:mb-4">
      <!-- Space  -->
    </div>

    <div class="border border-slate-200">
      <vue-drawing-canvas
        ref="VueCanvasDrawing"
        line-join="bevel"
        :height="height"
        :width="width"
      />
    </div>

    <div class="flex mt-2">
      <button
        type="button"
        @click.prevent="$refs.VueCanvasDrawing.undo()"
        class="flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-counterclockwise"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
          />
          <path
            d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"
          />
        </svg>

        <span> {{ $t("actions.undo") }} </span>
      </button>

      <span class="mx-2"></span>
      <button
        type="button"
        @click.prevent="$refs.VueCanvasDrawing.redo()"
        class="flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-clockwise"
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
        <span> {{ $t("actions.redo") }} </span>
      </button>
    </div>

    <br />
    <br />
    <p class="text-xs lg:text-sm text-slate-500">
      {{ $t("onlinenote.paragragh") }}
    </p>
  </div>
</template>

<script type="module">
// import VueDrawingCanvas from "vue-drawing-canvas";
// import Vue from "vue";
// import VueCompositionApi from "@vue/composition-api";

// Vue.use(VueCompositionApi);
import VueDrawingCanvas from "vue-drawing-canvas/dist/vue-drawing-canvas.esm";

export default {
  components: {
    "vue-drawing-canvas": VueDrawingCanvas,
  },
  setup: () => {},
  head: {
    title: "Free online white board drawer",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Best digital online white board tool, Draw now on blank board or paper.",
      },
    ],
  },
  name: "MyComponent",

  data() {
    return {
      width: 0,
      height: 0,
    };
  },
  mounted() {
    this.width = window.innerWidth - 30;
    this.height = window.innerWidth < 1000 ? 400 : 450;
  },
};
</script>
