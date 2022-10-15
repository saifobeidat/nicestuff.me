<template>
  <div>
    <!-- Top Icons -->
    <div class="icons absolute top-6 ltr:right-6 rtl:left-6 z-30">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="w-5 h-5 text-slate-600 hover:text-color1 cursor-pointer"
        @click="toggleMenu"
      >
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          fill="currentColor"
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </div>

    <!-- Menu  -->
    <aside
      class="fixed h-full top-0 w-52 bg-white z-20 transition-all"
      :class="
        isMenuShown ? 'ltr:right-0 rtl:left-0' : 'ltr:-right-52 rtl:-left-52'
      "
    >
      <nav class="pt-16 px-4">
        <div>
          <nuxt-link to="/online-note/" class="text-blue-600">
            {{ $t("menu.onlinenote") }}
          </nuxt-link>
        </div>
        <div class="my-3"></div>
        <div>
          <nuxt-link to="/online-board/" class="text-blue-600">
            {{ $t("menu.onlineboard") }}
          </nuxt-link>
        </div>
      </nav>
    </aside>

    <!-- Core  -->
    <div class="relative h-screen p-5 lg:p-10">
      <Transition name="fade">
        <span
          v-if="isMenuShown"
          class="absolute h-full w-full left-0 top-0 bg-black/40 z-10"
          @click="toggleMenu"
        ></span>
      </Transition>

      <!-- Top Section  -->
      <div>
        <Logo />
      </div>
      <div class="py-3"></div>
      <Nuxt />

      <nav v-if="$route.path !== '/'" class="flex py-4 justify-center">
        <nuxt-link to="/online-note/" class="text-blue-600 text-sm px-2">
          {{ $t("menu.onlinenote") }}
        </nuxt-link>
        <nuxt-link to="/online-board/" class="text-blue-600 text-sm px-2">
          {{ $t("menu.onlineboard") }}
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuShown: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuShown = !this.isMenuShown;
    },
  },
  watch: {
    $route(val) {
      if (this.isMenuShown) {
        this.isMenuShown = false;
      }
    },
  },
};
</script>

<style></style>
