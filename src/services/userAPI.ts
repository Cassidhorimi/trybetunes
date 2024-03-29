const USER_KEY = 'user';
const TIMEOUT = 300;
const SUCCESS_STATUS = 'OK';

const readUser = () => JSON.parse(localStorage.getItem(USER_KEY) ?? '');
const saveUser = (user: any) =>
  localStorage.setItem(USER_KEY, JSON.stringify(user));

// --------------------------------------------------------------------
// A função simulateRequest simula uma requisição para uma API externa
// Esse tipo de função que "chama outra função" é chamada de
// "currying function" https://javascript.info/currying-partials
// não se preocupe, estudaremos isso mais futuramente
// --------------------------------------------------------------------

const simulateRequest = (response: any) => (callback: any) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getUser = () =>
  new Promise(resolve => {
    let user = readUser();
    if (user === null) {
      user = {};
    }
    simulateRequest(user)(resolve);
  });

export const createUser = (user: { name: string }) =>
  new Promise(resolve => {
    const emptyUser = {
      name: '',
      email: '',
      image: '',
      description: ''
    };
    saveUser({ ...emptyUser, ...user });
    simulateRequest(SUCCESS_STATUS)(resolve);
  });

export const updateUser = (updatedUser: any) =>
  new Promise(resolve => {
    saveUser({ ...updatedUser });
    simulateRequest(SUCCESS_STATUS)(resolve);
  });
