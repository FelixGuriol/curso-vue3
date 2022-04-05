const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa:{//agrega configuraciones al manifest.json y al index.html (dist) "https://cli.vuejs.org/core-plugins/pwa.html#configuration"
    name: "Gestor de Proyectos",
    themeColor: "#03a9f4",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent"
  }
})
