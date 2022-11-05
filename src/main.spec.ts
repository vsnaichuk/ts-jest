import { getWelcomeMessage } from './main';

// Basic tests

test('should show welcome message', () => {
  expect(getWelcomeMessage()).toMatchInlineSnapshot(
    `"Welcome to ts-jest!!!"`,
  );
});

test('1 plus 1 should equal to 2', () => {
  const a = 1;
  const b = 1;
  expect(a + b).toBe(2);
});

// Primitive tests

describe('Testing other mather methods', () => {
  test('Testing that the variable is undefined', () => {
    const number = undefined;

    // expect(number).not.toBeDefined();
    // expect(number).toBeFalsy();
    // expect(number).not.toBeTruthy();
    expect(number).toBeUndefined();
  });

  test('Number comparison', () => {
    const a = 1;
    const b = 2;

    // expect(a + b).toBeLessThan(10);
    expect(a + b).toBeGreaterThan(2);
  });

  test('There should be no I in team', () => {
    const string = 'team';

    // expect(string).toMatch(/tea/i);
    expect(string).not.toMatch(/s/i);
  });

  test("The array doesn't contain item", () => {
    const shoppingList = ['Milk', 'Trash bags', 'Iphone'];

    // expect(shoppingList).toContain('Milk');
    expect(shoppingList).not.toContain('PS4');
  });
});

// Reference equality tests

describe('', () => {});
