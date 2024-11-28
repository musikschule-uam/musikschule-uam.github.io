
var template = document.createElement('template') as HTMLTemplateElement;
template.innerHTML = `
<style>
    header {
        padding: 8px 16px 8px 16px;
        color: var(--app-primary);
        background-color: var(--app-surface-container-low);

        font: var(--app-font);

        display: flex;
        flex-direction: column; 
        gap: 8px;
        border-bottom: 2px solid var(--app-primary);
    }

    @media(min-width: 1000px) {
        header {
            padding-left: 64px;
        }
    }

    #title {
    	display: flex;
    	flex-direction: row;
    	align-items: center;
    	gap: 8px;
        font: var(--app-font-title);
    }

    nav {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
    }

    nav a {
        color: var(--app-on-secondary);
        background-color: var(--app-primary);
        text-decoration: none;
        
        font-size: 20px;
        border-radius: 2px;
        padding: 2px 4px;
    }

    nav a:hover {
        text-decoration: underline;
    }

    nav a.accent {
        background-color: var(--app-ternary-container);
        color: var(--app-on-ternary);
    }

    nav a.current {
        box-shadow: var(--app-on-secondary) 0 0 1px 1px;
    }

    nav a.accent.current {
        box-shadow: var(--app-on-ternary) 0 0 1px 1px;
    }

</style>

<header>
	<div id="title">
    	<img width="32px" height="32px" src="/images/logo.png">
   		<div>Musikschule Unterallgäu</div>
	</div>
	
    <nav id="nav">
        <a href="/">Home</a>
        <a class="accent" href="/anmeldungen.html">Anmeldung</a>
        <a href="/vorstand.html">Vorstand</a>
        <a href="/faq.html">FAQs</a> 
        <a href="/impressum.html">Impressum</a>
        <a href="/datenschutz.html">Datenschutz</a>

    </nav>
</header>
`

class MuaHeader extends HTMLElement {
    constructor() {
        super()
        let root = this.attachShadow({mode: 'open'})
        root.append(template.content.cloneNode(true))

        let links = root.querySelectorAll('a');
        for (let link of links) {
            if (link.getAttribute('href') == window.location.pathname) {
                link.classList.add('current');
            }
        }
    }
}

customElements.define('mua-header', MuaHeader)
