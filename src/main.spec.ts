import { getWelcomeMessage, deleteUserById } from './main';

// Functions for recurring actions

// beforeAll(() => { // Created the database
//   console.log('Running before all test');
// });

// beforeEach(() => { // Populates database
//   console.log('Running before each test');
// });

// afterEach(() => { // Usually to clear (Clear database)
//   console.log('Running after each test');
// });

// afterAll(() => { // Usually to clear (Clear database)
//   console.log('Running after all test');
// });

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

describe('Testing reference equality', () => {
  const user: any = {
    name: 'Ben',
  };

  user['age'] = 25;

  test('Should return a user object with age as 25', () => {
    expect(user).toEqual({
      name: 'Ben',
      age: 25,
    });
  });

  test('Should return a user object with name and age key', () => {
    expect(user).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number),
      }),
    );
  });

  test('Array equality', () => {
    const users = ['Ben', 'Adam', 'Andrew', 'Bob'];

    expect(users).not.toEqual([]);
    expect(users).toEqual(expect.arrayContaining(['Ben']));
    expect(users).toEqual(
      expect.arrayContaining([expect.any(String)]),
    );

    const arrayOfUserObjects = [
      {
        name: 'Ben',
        age: 25,
      },
      {
        name: 'Adam',
        age: 35,
      },
      {
        name: 'Andrew',
        age: 15,
      },
    ];

    arrayOfUserObjects.push({
      name: 'Bob',
      age: 18,
    });

    expect(arrayOfUserObjects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
        }),
      ]),
    );
  });
});

describe('Testing function - deleteUserById', () => {
  const users = [
    {
      id: 1,
      name: 'Ben',
    },
    {
      id: 2,
      name: 'Adam',
    },
    {
      id: 3,
      name: 'Andrew',
    },
  ];

  test('Should delete user with provided id', () => {
    expect(deleteUserById(users, 3)).not.toContainEqual({
      id: 3,
      name: 'Andrew',
    });
  });

  test("Should return initial array if user with provided id doesn't exist", () => {
    expect(deleteUserById(users, 10)).toEqual(users);
  });
});
