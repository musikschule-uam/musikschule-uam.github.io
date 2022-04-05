
var template = document.createElement('template') as HTMLTemplateElement;
template.innerHTML = `
<style>
#container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
}

#avatar {
    height: calc(2 * 32px);
    width: calc(2 * 32px) ;
    border-radius: 2px;
    object-fit: cover;
}


#info {
    width: calc(6 * 32px) ;
    display: flex;
    flex-direction: column;
}

#name {
    font-weight: 600;
}

</style>
<div id="container">
    <img id="avatar">
    <div id="info">
        <div id="name"></div>
        <div id="role"></div>
    </div>
</div>
`

class ContactInfo extends HTMLElement {

    connectedCallback() {
        let root = this.attachShadow({mode: 'open'})
        root.append(template.content.cloneNode(true))

        const avatar = root.getElementById('avatar') as HTMLImageElement;
        avatar.src = this.getAttribute('avatarsrc');

        const name = root.getElementById('name') as HTMLSpanElement;
        name.innerText = this.getAttribute('name');

        const role = root.getElementById('role') as HTMLSpanElement;
        role.innerText = this.getAttribute('role');


    }
}

customElements.define('contact-info', ContactInfo)