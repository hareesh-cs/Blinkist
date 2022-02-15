/* eslint-disable arrow-body-style */
export {};
export const AddToFinish = () => {
  return {
    type: 'ADD',
  };
};
export const getState = (data: any) => {
  return { type: 'GET_STATE', data };
};

export const getFailure = (err: any) => {
  return { type: 'FAILURE', err };
};
