const { checkEndGame } = require('../js/game');

test('should not throw error when called', () => {
  // Simula o DOM com 24 cartas desativadas
  document.body.innerHTML = `
    <span class="player">Player 1</span>
    <div class="timer">0</div>
    <div class="disabled-card"></div>`.repeat(24);  // Simula 24 cartas desativadas

  // Simula a estrutura necessária
  const spanPlayer = document.querySelector('.player');
  const timer = document.querySelector('.timer');
  
  // Adiciona mock do alert
  global.alert = jest.fn();

  // Chama a função e verifica se não ocorre erro
  expect(() => checkEndGame()).not.toThrow();

  // Verifica se o alert foi chamado
  expect(global.alert).toHaveBeenCalled();
});
