
export default function() {
    var head = document.getElementsByTagName('head')[0];
    var stylesheet = document.createElement('link');
    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute('href', '/instance/pleroma-mods/pleroma-mod-custom-styles.css');
    head.appendChild(stylesheet);
}
