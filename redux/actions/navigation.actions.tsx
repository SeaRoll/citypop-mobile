import { setCurrentRoute, routes } from "../reducers/navigation.reducer";
import { Dispatch } from "redux";
import { RootState } from "../store";

/**
 * Action to set next route
 * @param route route to set. should be one of the routes defined in navigation.reducer.tsx
 */
export const setCurrentRouteAction = (route: string) => (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(setCurrentRoute(route));
}

/**
 * Go back to the previous route depending on the current route
 */
export const goBack = () => (dispatch: Dispatch, getState: () => RootState) => {

  let nextRoute = routes.HOME;

  switch(getState().navigation.currentRoute) {
    case routes.SEARCH_COUNTRY_RESULTS:
      nextRoute = routes.SEARCH_COUNTRY;
      break;
    case routes.CITY_RESULTS:
      nextRoute = routes.SEARCH_CITY;
      break;
      case routes.SEARCH_CITY:
      case routes.SEARCH_COUNTRY:
        nextRoute = routes.HOME;
        break;
    default:
      break;
  }

  dispatch(setCurrentRoute(nextRoute));
}