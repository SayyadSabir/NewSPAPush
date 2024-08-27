  // reducer.ts
  import { UserState } from './types';
  import { initialState } from './initialState';
  
  type Action = { type: 'SET_USER'; payload: UserState };
  
  export const userReducer = (state: UserState = initialState, action: Action): UserState => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };