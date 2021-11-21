import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  approverActions,
  fetchImageSuccess,
  fetchImageFailure,
} from "../actions/approver.action";
import * as approverApi from "../api/approver.api";

export function* getImage(action) {
  yield takeLatest(approverActions.fetchImage, getImageFromAPI);
  yield takeLatest(approverActions.rejectImage, getImageFromAPI);
  yield takeLatest(approverActions.fetchExistingImage, getExistingImageFromAPI);
}

export const getApprovedAndRejectedImageIds = (state) => {
  const { approvedImages, rejectedImages } = state.approver;
  const approvedIds = approvedImages.map(img => img.id);
  const rejectedIds = rejectedImages.map(img => img.id);
  return [...approvedIds, ...rejectedIds];
}

function* getImageFromAPI(action) {
  try {
    let data;
    let validImage = false;
    /** In order to not load images that have already been accepted or rejected */
    const loadedImageIds = yield select(getApprovedAndRejectedImageIds);
    while(!validImage) {
      data = yield call(approverApi.fetchImage);
      validImage = loadedImageIds.indexOf(data.id) === -1;
    }
    yield put(fetchImageSuccess(data));
  } catch (e) {
    yield put(fetchImageFailure(e));
  }
}

function* getExistingImageFromAPI(action) {
  try {
    const data = yield call(approverApi.fetchExistingImage, {
      photoId: action.payload,
    });
    yield put(fetchImageSuccess(data));
  } catch (e) {
    yield put(fetchImageFailure(e));
  }
}
