
var template = document.createElement('template') as HTMLTemplateElement;
template.innerHTML = `
<style>
#card {
    padding: 8px 16px;
    max-width: 768px;
    margin: 0 auto;
}

</style>
<div id="card">
    <slot></slot>
</div>
`

class MuaCard extends HTMLElement {
    constructor() {
        super()
        let root = this.attachShadow({mode: 'open'})
        root.append(template.content.cloneNode(true))
    }
}

customElements.define('mua-card', MuaCard)