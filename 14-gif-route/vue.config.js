const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa:{//agrega configuraciones al manifest.json y al index.html (dist) "https://cli.vuejs.org/core-plugins/pwa.html#configuration"
    name: "Gif Router",
    themeColor: "#444444",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent"
  }
})
