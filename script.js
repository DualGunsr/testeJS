// Função para mover o botão "Sim" aleatoriamente dentro da área da mensagem
function moveYesButton() {
    const button = document.getElementById('yesButton');
    const container = document.getElementById('message');
    const containerRect = container.getBoundingClientRect(); // Dimensões da área branca
    const buttonRect = button.getBoundingClientRect();

    // Calcula os limites para a nova posição do botão dentro da área da mensagem
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    const newLeft = Math.random() * maxX;
    const newTop = Math.random() * maxY;

    // Move o botão para a nova posição com uma animação suave
    button.style.transition = 'left 0.3s ease, top 0.3s ease';
    button.style.position = 'absolute';
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
}

// Muda a posição do botão a cada 300 milissegundos (ajuste conforme necessário)
setInterval(moveYesButton, 300);

// Adiciona eventos de clique nos botões
document.getElementById('yesButton').addEventListener('click', function() {
    showPopup('taaa bom vc realmente é persistente 😄');
});
document.getElementById('noButton').addEventListener('click', function() {
    showPopup('Poxa, tudo bem! 😢');
});

// Função para mostrar uma mensagem de popup
function showPopup(message) {
    // Cria o elemento de popup
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>${message}</h2>
            <button id="closePopup">Fechar</button>
        </div>
    `;
    
    // Adiciona o popup ao corpo
    document.body.appendChild(popup);

    // Fecha o popup quando o botão "Fechar" é clicado
    document.getElementById('closePopup').addEventListener('click', function() {
        document.body.removeChild(popup);
    });
}