// Banco dos Projetos
const meusProjetos = [
    {
        titulo: "Luminous Gym",
        subtitulo: "Arquitetura Back-end",
        tags: ["BACK-END", "POO", "MVC"],
        img: "img-luminous.jpg",
        desc: "Desenvolvimento do site para uma academia exclusiva para mulheres. Trabalhei no back-end com criação de classes, arquitetura MVC e correção de erros no Banco de Dados.",
        github: "https://github.com/seu-usuario/luminous-gym"
    },
    {
        titulo: "Projeto Decifra",
        subtitulo: "Arquitetura Back-end",
        tags: ["BACK-END", "IA", "CHATBOT"],
        img: "images/tela1decifra.png",
        desc: "Atuei no desenvolvimento da arquitetura back-end e no desenvolvimento dos jogos. O foco foi principalmente na criação de um chatbot com inteligência atificial para o auxílio dos alunos em seu estudo.",
        github: "https://github.com/seu-usuario/decifra"
    },
    {
        titulo: "Doom via XSS",
        subtitulo: "Segurança Web & PoC",
        tags: ["SEGURANÇA WEB", "XSS", "JAVASCRIPT", "PENTEST"],
        img: "img-doom-xss.jpg",
        desc: "Uma Prova de Conceito (PoC) demonstrando a exploração de uma vulnerabilidade de Cross-Site Scripting (XSS). O payload injetado foi utilizado para carregar e executar o clássico jogo Doom direto no navegador, provando o impacto da falha de forma criativa.",
        github: "https://github.com/seu-usuario/doom-xss"
    },
];

let indiceAtual = 0;
const track = document.getElementById('trackProjetos');

function renderizarCarrossel() {
    track.innerHTML = ''; 
    
    meusProjetos.forEach((projeto, index) => {
        const card = document.createElement('div');
        card.classList.add('card-projeto');
        
        if (index === indiceAtual) {
            card.classList.add('centro');
            card.onclick = () => abrirModal(projeto.titulo, projeto.desc, projeto.img, projeto.github);
        } else if (index === (indiceAtual - 1 + meusProjetos.length) % meusProjetos.length) {
            card.classList.add('esquerda');
            card.onclick = () => mudarProjeto(-1); 
        } else if (index === (indiceAtual + 1) % meusProjetos.length) {
            card.classList.add('direita');
            card.onclick = () => mudarProjeto(1); 
        } else {
            card.classList.add('oculto');
        }

        const img = document.createElement('img');
        img.src = projeto.img;
        img.alt = projeto.titulo;
        card.appendChild(img);
        track.appendChild(card);
    });

    atualizarInformacoes();
}

function atualizarInformacoes() {
    const projetoAtivo = meusProjetos[indiceAtual];
    
    document.getElementById('infoTitulo').innerText = projetoAtivo.titulo;
    document.getElementById('infoSubtitulo').innerText = projetoAtivo.subtitulo;
    
    const containerTags = document.getElementById('infoTags');
    containerTags.innerHTML = '';
    projetoAtivo.tags.forEach(tagTexto => {
        const span = document.createElement('span');
        span.classList.add('tag');
        span.innerText = tagTexto;
        containerTags.appendChild(span);
    });
}

function mudarProjeto(direcao) {
    indiceAtual = (indiceAtual + direcao + meusProjetos.length) % meusProjetos.length;
    renderizarCarrossel();
}

// Funções do Modal
const modal = document.getElementById('projetoModal');
function abrirModal(titulo, descricao, imagem, linkGithub) {
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalTexto').innerText = descricao;
    document.getElementById('modalImagem').src = imagem;
    document.getElementById('modalGithub').href = linkGithub;
    modal.style.display = 'block';
}
function fecharModal() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) { modal.style.display = 'none'; }
}

// Inicia tudo
renderizarCarrossel();