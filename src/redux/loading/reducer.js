import { LoadingActionTypes } from "./actions";

export function loadingReducer(state = false, action) {
  switch (action.type) {
    case LoadingActionTypes.SET: {
      return action.isLoading;
    }

    default:
      return state;
  }
}
