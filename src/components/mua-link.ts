
var template = document.createElement('template') as HTMLTemplateElement;
template.innerHTML = `
<style>
    a {
        color: var(--app-on-secondary);
        background-color: var(--app-primary-container);
        text-decoration: none;

        font-size: 20px;
        border-radius: 2px;
        padding: 2px 4px;
    }

    a:hover {
        text-decoration: underline;
    }

    a.accent {
        background-color: var(--app-ternary-container);
        color: var(--app-on-ternary);
    }

</style>

<a id="link" class="accent" href="/"><slot></slot></a>

</header>
`

class MuaLink extends HTMLElement {
    connectedCallback() {
        let root = this.attachShadow({mode: 'open'})
        root.append(template.content.cloneNode(true))

        const link = root.getElementById('link') as HTMLAnchorElement;
        link.href = this.getAttribute('href');
    }
}

customElements.define('mua-link', MuaLink)