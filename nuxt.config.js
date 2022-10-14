export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  head() {
    const i18nHead = this.$nuxtI18nHead
      ? this.$nuxtI18nHead({ addSeoAttributes: true, addDirAttribute: true })
      : { htmlAttrs: [], meta: [], link: [] };

    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width",
        },
        {
          hid: "description",
          name: "description",
          content: "Whiteboard Drawer, Note Taking",
        },
        ...i18nHead.meta,
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&display=swap",
        },
        ...i18nHead.link,
      ],
    };
  },
  i18n: {
    baseUrl: "http://nicestuff.me",
    locales: [
      { code: "en", iso: "en", file: "en.js", dir: "ltr" },
      // { code: "ar", iso: "ar", file: "ar.js", dir: "rtl" },
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
    },
    strategy: "prefix_except_default",
    langDir: "i18n/",
  },
  sitemap: {
    hostname: "http://nicestuff.me",
    // gzip: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/composition-api.js", "~/plugins/gtag.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["cookie-universal-nuxt", "@nuxtjs/i18n", "@nuxtjs/sitemap"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  router: {
    // middleware: "trailingSlashRedirect",
    trailingSlash: false,
  },
};
