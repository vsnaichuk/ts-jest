export const getWelcomeMessage = (): string => {
  const str = 'Welcome to ts-jest!!!';

  return str;
};

export const deleteUserById = (array: any[], id: number) => {
  return array.filter((i) => i.id !== id);
};

export const findUserById = (array: any[], id: number) => {
  return array.find((i) => i.id === id);
};
