const { startTimer } = require('../js/game');

test('should increment the timer by 1 second', () => {
  // Simula o DOM com o timer
  document.body.innerHTML = `<div class="timer">0</div>`;

  // Mocka o setInterval para evitar o tempo real
  jest.useFakeTimers();

  // Inicia o timer
  startTimer();

  // Avança o tempo em 1 segundo
  jest.advanceTimersByTime(1000);

  // Verifica se o tempo foi incrementado corretamente
  const timer = document.querySelector('.timer');
  expect(timer.innerHTML).toBe('1');

  // Restaura os temporizadores reais após o teste
  jest.useRealTimers();
});
