import { openDrawer, closeDrawer } from "./slice";

export const openDrawerOp = () => (dispatch: any) => {
  return dispatch(openDrawer());
};

export const closeDrawerOp = () => (dispatch: any) => {
  return dispatch(closeDrawer());
};
