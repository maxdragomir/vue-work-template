// vue.config.js
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/styles/helpers/helpers.scss";
        `,
      },
    }
  }
}
