import { all, call, fork, takeEvery } from "redux-saga/effects";

// constants
import { LayoutActionTypes } from "./constants";

/**
 * Toggle the class on body
 * @param {*} cssClass
 */
function manageHtmlClass(cssClass: string, action = "toggle") {
  switch (action) {
    case "add":
      if (document.getElementsByTagName("html")[0])
        document.getElementsByTagName("html")[0].classList.add(cssClass);
      break;
    case "remove":
      if (document.getElementsByTagName("html")[0])
        document.getElementsByTagName("html")[0].classList.remove(cssClass);
      break;
    default:
      if (document.getElementsByTagName("html")[0])
        document.getElementsByTagName("html")[0].classList.toggle(cssClass);
      break;
  }
  return true;
}

/**
 * ---------------------------------------------------------------------------------------------------------------------------
 * Note: Following are the functions which allows you to save the user prefrences on backend side by making an api request.
 * For now, we are just applying the required logic on frontend side
 * ----------------------------------------------------------------------------------------------------------------------------
 */

/**
 * Show the rightsidebar
 */
function* showRightSidebar() {
  try {
    yield call(manageHtmlClass, "right-bar-enabled", "add");
  } catch (error) {}
}

/**
 * Hides the rightsidebar
 */
function* hideRightSidebar() {
  try {
    yield call(manageHtmlClass, "right-bar-enabled", "remove");
  } catch (error) {}
}

export function* watchShowRightSidebar(): any {
  yield takeEvery(LayoutActionTypes.SHOW_RIGHT_SIDEBAR, showRightSidebar);
}

export function* watchHideRightSidebar(): any {
  yield takeEvery(LayoutActionTypes.HIDE_RIGHT_SIDEBAR, hideRightSidebar);
}

function* LayoutSaga(): any {
  yield all([fork(watchShowRightSidebar), fork(watchHideRightSidebar)]);
}

export default LayoutSaga;
