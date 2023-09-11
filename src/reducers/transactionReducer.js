import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../actions/transactionAction";

const initialState = {
  loading: false,
  status: [],
  data: {
    balance: "",
  },
  message: "",
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        status: [],
        data: {
          balance: action.payload,
        },
        message: "",
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        status: [],
        data: {
          balance: action.payload,
        },
        message: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
