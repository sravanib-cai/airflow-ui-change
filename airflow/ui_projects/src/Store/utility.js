export const updateObject = (oldObject, newObject) => ({
  ...oldObject,
  ...newObject,
});
export const parseJwt = (token) => {
  try {
    return JSON.parse(Buffer.from(token.split('.')[1]).toString('base64'));
  } catch (e) {
    return null;
  }
};
