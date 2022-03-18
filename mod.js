function PleromaModBiggerEmojis () {
  this.config = {
    "stylesheet": "style.css"
  };
}
[
  function onDestroy () {
    const styles = document.querySelectorAll("link[rel=\"stylesheet\"]");
    for (const style of styles) {
      if (style.getAttribute("href").endsWith("pleroma-mod-bigger-emojis/" + this.config.stylesheet)) {
        style.remove();
      }
    }
  },

  function run () {
    PleromaModLoader.includeModCss("pleroma-mod-bigger-emojis/" + this.config.stylesheet);
  }
].forEach((fn) => { PleromaModBiggerEmojis.prototype[fn.name] = fn; });

PleromaModLoader.registerMod(PleromaModBiggerEmojis);
