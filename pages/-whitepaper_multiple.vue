<template>
  <div>
    <!-- Tool Name  -->
    <div class="text-xl font-medium">Whitepaper</div>

    <div class="mb-4">
      <!-- Space  -->
    </div>
    <div class="flex">
      <div
        v-if="paper.id"
        @click="deleteCurrentPage"
        class="w-6 self-center cursor-pointer"
      >
        x
      </div>
      <!-- Title Field  -->
      <div class="flex-grow">
        <input
          type="text"
          v-model="paper.title"
          placeholder="Untitled.."
          class="py-4 w-full focus:outline-0 text-2xl placeholder:text-slate-300 placeholder:font-medium"
          maxlength="30"
        />
      </div>

      <!-- Right  -->
      <div>
        <div class="flex"></div>
      </div>
    </div>

    <div class="relative h-[350px] flex justify-center">
      <textarea
        v-model="paper.body"
        class="border border-slate-200 rounded w-full focus:outline-0 p-4 h-full"
      ></textarea>

      <div class="min-w-[130px] text-sm text-slate-500">
        <div
          v-for="paperItem in papers"
          :key="paperItem.id"
          :class="paperItem.id == paper.id ? 'bg-slate-200' : ''"
          class="px-2 cursor-pointer"
          @click="changeActivePaper(paperItem.id)"
        >
          {{ paperItem.title || `Untitled` }}
        </div>

        <div
          @click="startNewPage"
          class="flex items-center justify-center cursor-pointer"
        >
          <button
            class="mr-2 active:scale-110 active:bg-color1/70 bg-color1 border-[2px] border-color1 active:border-yellow-600 text-black active:text-black/60 transition-colors flex items-center justify-center rounded-full h-4 w-4 text-lg font-normal"
          >
            +
          </button>
          <div class="text-sm text-center">Add paper</div>
        </div>
      </div>

      <span v-if="!paper.body" class="absolute text-slate-300 self-center">
        Start typing..
      </span>
    </div>

    <div class="py-4"></div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      paper: {
        id: null,
        title: null,
        body: null,
      },
      papers: [],
    };
  },
  methods: {
    changeActivePaper(val) {
      this.paper = this.papers.find((paper) => paper.id == val);
    },
    deleteCurrentPage() {
      let isSure = confirm("Are you sure?");
      if (isSure) {
        let currnetPaperIndex = this.papers.findIndex(
          (paper) => paper.id == this.paper.id
        );
        this.papers.splice(currnetPaperIndex, 1);
        this.paper = {
          id: null,
          title: null,
          body: null,
        };
      }
    },
    pushCurrentPaper() {
      this.paper.id = uuidv4();
      this.papers.push(this.paper);
    },
    startNewPage() {
      this.paper = {
        id: uuidv4(),
        title: null,
        body: null,
      };
      this.papers.push(this.paper);
    },
    createEmptyPage() {
      let newPaper = {
        id: uuidv4(),
        title: null,
        body: null,
      };
      this.papers.push(newPaper);
      this.paper = newPaper;
    },
  },
  watch: {
    paper: {
      deep: true,
      handler(val) {
        console.log({ val });
        if (val && val.title) {
          let foundPaper = this.papers.find(
            (paper) => paper.id == this.paper.id
          );
          if (foundPaper) {
            // already exists
            console.log("it updates automaticlly ");
          } else {
            // Doesn't exist in the papers list, so we need to add it
            console.log("push current player");
            this.pushCurrentPaper();
          }
        }
      },
    },
  },
};
</script>

<style></style>
