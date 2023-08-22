const localStorageMiddleware = store => next => action => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem('theme', state.theme);
  return result;
};

export default localStorageMiddleware;
