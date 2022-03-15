
var template = document.createElement('template') as HTMLTemplateElement;
template.innerHTML = `
<style>

#register {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background-color: lightgrey;

    height: calc(5 * 32px);
    width: calc(10 * 32px);
    padding: 8px;
    border-radius: 2px;

    filter: brightness(1.1);

    cursor: pointer;
    user-select: none;
}

#register:hover {
    filter: brightness(1.25);
}

#modal {
    display: none;
}

details {

    color: white;
    background-color: black;    
    padding: 2px 4px;
    border-radius: 2px;

    word-break: break-word;
}

slot[name=details] {
    display: block;
    margin: 8px 0;
}

</style>

<div id="register">
    <details id="details">
        <summary id="name"></summary>
        <slot name="details"></slot>
    </details>
</div>

`

class MuaRegister extends HTMLElement {
    connectedCallback() {
        let root = this.attachShadow({mode: 'closed'})
        root.append(template.content.cloneNode(true))

        const register = root.getElementById('register') as HTMLDivElement;
        const src = this.getAttribute('backgroundsrc');
        register.style.backgroundImage = `url(${src})`;
        register.style.backgroundSize = `cover`;

        const details = root.getElementById('details') as HTMLDetailsElement;
        register.addEventListener('click', e => {
            details.open = !details.open;
            e.preventDefault();
        });
        

        const name = root.getElementById('name') as HTMLDivElement;
        name.innerText = this.getAttribute('name');
    }
}

customElements.define('mua-register', MuaRegister)