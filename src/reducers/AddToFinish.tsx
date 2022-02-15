const initialState = false;
type actionOptions = {
  type: string;
  data: any;
};

const AddToFinish = (action: actionOptions, state = initialState) => {
  switch (action?.type) {
    case 'ADD':
      return !state;
    case 'GET_STATE':
      return {
        ...action.data,
      };
    default:
      return state;
  }
};

export default AddToFinish;
