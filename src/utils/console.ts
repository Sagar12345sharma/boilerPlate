export const Log = (message: string): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message);
  }
};
