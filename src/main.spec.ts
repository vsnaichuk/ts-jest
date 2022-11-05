import { getWelcomeMessage } from './main';

test('should show welcome message', () => {
  expect(getWelcomeMessage()).toMatchInlineSnapshot(
    `"Welcome to ts-jest!!!"`,
  );
});
