const { createCard } = require('../js/game');

test('should create a card with data-character attribute', () => {
  const card = createCard('pikachu');
  expect(card.getAttribute('data-character')).toBe('pikachu');
});
