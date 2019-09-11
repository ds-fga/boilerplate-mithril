var React = { createElement: m };

var selectedTab = 0;

var tags = [
    {
        nome: "Primeira",
        conteudo: "Conteudo da tab 1!",
    },
    {
        nome: "Segunda",
        conteudo: "Conteudo da tab 2!",
    },
];


// PARA CASA: faça o código funcionar
// para listas de qualquer tamanho!
function makeTabs() {
    var tag1 = tags[0].nome;
    var tag2 = tags[1].nome;

    return <ul class="tab tab-block">
        <li class="tab-item">
            <a onclick={() => {selectedTab = 0}} href="#">{tag1}</a>
        </li>
        <li class="tab-item">
            <a onclick={() => {selectedTab = 1}} href="#">{tag2}</a>
        </li>
    </ul>
}  

function makeApp() {
    return <div>
        {makeTabs()}
        <p>{tags[selectedTab].conteudo}</p>
    </div>;
}

var appTag = document.querySelector('#app');

m.mount(appTag, {view: () => makeApp()});