
PleromaModCustomStyles = function () {
    this.config = {
        'stylesheet': 'style.css'
    };
}

PleromaModCustomStyles.prototype.run = function() {
    var head = document.getElementsByTagName('head')[0];
    var stylesheet = document.createElement('link');
    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute('href', window.__pleromaModLoader.config.modDirectory + 'pleroma-mod-custom-styles/' + this.config.stylesheet);
    head.appendChild(stylesheet);
};

window.__pleromaModLoader.registerClass('PleromaModCustomStyles', PleromaModCustomStyles);
