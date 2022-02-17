/* eslint-disable arrow-body-style */
export {};
export const AddToFinish = () => {
  return {
    type: 'ADD',
  };
};
export const getFailure = (err: any) => {
  return { type: 'FAILURE', err };
};
