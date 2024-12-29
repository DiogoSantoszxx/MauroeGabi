const text = `Nossa história começou de uma forma bem inusitada, lá em agosto de 2023. Eu estava fazendo uma apresentação sozinho da Atlética Arautos na sala dos calouros, mas, confesso, estava muito chapado. Quando fui escrever o Instagram da atlética no quadro, acabei escrevendo "aratos" em vez de "arautos". Todo mundo caiu na risada, inclusive ela. Foi nesse momento que trocamos nossos primeiros olhares.

Naquela época, a situação era meio complicada. Eu ainda namorava, e ela também estava envolvida com um cara meio "lerdão". Mas, sempre que a gente se encontrava nos trotes, nos eventos ou até mesmo pela faculdade, dava para sentir aquela conexão entre nós. Era uma paixão que estava ali, mas nenhum de nós levava muito adiante.

Depois de um tempo, meu relacionamento chegou ao fim, e as coisas começaram a mudar. No dia 29 de dezembro, tomei coragem e mandei mensagem para ela, chamando-a para tomar uma cerveja. Ela respondeu que a gente podia ir em janeiro, mas eu achei isso muito longe e logo perguntei o que ela ia fazer no Ano Novo. Ela disse que passaria em casa, e então eu soltei: "Então agora você vai passar comigo."

E foi o que aconteceu. No dia 1º de janeiro, às 00h30, saí do Buraco do Boi de carro para buscar ela no Sargento Roncalli. Desde então, nunca mais nos desgrudamos. Kkkksks.

Essa foi a virada que marcou o início do nosso amor, e agora, prestes a completar 1 ano juntos, só consigo pensar em como tudo aconteceu do jeito certo.`;
const textContainer = document.getElementById("text-container");
const actionButton = document.getElementById("action-button");
let index = 0;

function typeText() {
    if (index < text.length) {
        textContainer.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50); // Controla a velocidade da digitação (100ms por caractere)
    } else {
        showButton(); // Chama a função para exibir o botão
    }
}

function showButton() {
    actionButton.style.display = "block"; // Exibe o botão
}

typeText();
