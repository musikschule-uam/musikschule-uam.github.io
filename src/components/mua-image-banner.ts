
var template = document.createElement('template') as HTMLTemplateElement;
template.innerHTML = `
<style>

#banner {
    background-size: cover;
    background-position: 50% top;
    padding: 148px 16px 16px 16px;
    backdrop-filter: blur(1000px); 
}

#text {
    color: var(--app-on-surface-variant);
    background-color: var(--app-surface-variant-transparent);
    padding: 4px 16px;
    backdrop-filter: blur(6px);

    box-sizing: border-box;
    max-width: 768px;
    margin: 0 auto;
}


</style>

<div id="banner">
        <div id="text">
        <slot></slot>
        </div>
</div>
`

class MuaImageBanner extends HTMLElement {
    connectedCallback() {
        let root = this.attachShadow({mode: 'open'})
        root.append(template.content.cloneNode(true))

        let banner = root.getElementById('banner') as HTMLDivElement;
        banner.style.backgroundImage = `url(${this.getAttribute('src')})`;
    }
}

customElements.define('mua-image-banner', MuaImageBanner)