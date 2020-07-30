// eslint-disable-next-line arrow-body-style
export const timeout = async (miliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
};
