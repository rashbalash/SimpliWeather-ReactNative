import { GET_NEW_LOCATION, REMOVE_LOCATION } from "../Actions/Actions";

let scrollView;

export const registerScrollView = (newScrollView) => {
  scrollView = newScrollView.current;
};

export const deRegisterScrollView = (scrollView) => {
  scrollView = null;
};

const validActions = [REMOVE_LOCATION, GET_NEW_LOCATION];

export default createPaginationMiddleware = (store) => (next) => (action) => {
  if (
    !validActions.includes(action.type) &&
    store.getState().reducer.allLocations.length === 0
  ) {
    next(action);
    return;
  }

  const preActionState = store.getState().reducer;
  // update the state first
  next(action);
  const postActionState = store.getState().reducer;

  if (
    preActionState.allLocations[preActionState.allLocations.length - 1].name !==
      postActionState.allLocations[postActionState.allLocations.length - 1]
        .name &&
    scrollView !== null
  ) {
    scrollView.scrollToEnd({ animated: true });
  }
};

// check action type --> return if wrong and call next(action);
// store.getState() --> it will give initial state
// next(action)
// store.getState() --> compare state (check if the last item in the page array has changed)
// if so, then you do: scrollView.scrollToEnd() IF scrollView isn't null
