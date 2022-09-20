customElements.define('custom-tag',
    class extends HTMLElement {
        connectedCallback() {
            const temp = this.attachShadow({ mode: 'open' })
            temp.innerHTML = `<p class='error'>This is a real shadow dom example</p>,<h1>${this.getAttribute('data')}</h1>`
        }
    }
)

console.log('hrllo')