module.exports = {
   css: {
      loaderOptions: {
         sass: {
            prependData: `
               @import "@/sass/_variables.scss";
               @import "@/sass/_mixins.scss";
            `
         }
      }
   }
};