export const approverActions = {
  fetchImage: 'FETCH_IMAGE',
  fetchImageSuccess: 'FETCH_IMAGE_SUCCESS',
  fetchImageFailure: 'FETCH_IMAGE_FAILURE',
  approveImage: 'APPROVE_IMAGE',
  rejectImage: 'REJECT_IMAGE',
  rejectApprovedImage: 'REJECT_APPROVED_IMAGE',
  fetchExistingImage: 'FETCH_EXISTING_IMAGE',
  restoreStorageData: 'RESTORE_STORAGE_DATA',
}

export const fetchImage = () => {
  return {
    type: approverActions.fetchImage,
  }
};

export const fetchExistingImage = (data) => {
  return {
    type: approverActions.fetchExistingImage,
    payload: data,
  }
};

export const fetchImageSuccess = (data) => {
  return {
    type: approverActions.fetchImageSuccess,
    payload: data,
  }
};

export const fetchImageFailure = (data) => {
  return {
    type: approverActions.fetchImageFailure,
    payload: data,
  }
};

export const approveImage = (data) => {
  return {
    type: approverActions.approveImage,
    payload: data,
  }
};

export const rejectImage = (data) => {
  return {
    type: approverActions.rejectImage,
    payload: data,
  }
};

export const restoreStorageData = () => {
  return {
    type: approverActions.restoreStorageData,
  }
};
