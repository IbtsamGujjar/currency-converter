export const loginUser = async (email) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(email);
    }, 500);
  });
};
