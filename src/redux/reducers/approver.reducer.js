import { approverActions } from '../actions/approver.action';

const initialState = {
  currentImage: {},
  approvedImages: [],
  rejectedImages: [],
}

const approverReducer = (state = initialState, action) => {
  switch (action.type) {
    case approverActions.fetchImageSuccess:
      return {
        ...state,
        currentImage: action.payload
      }
    case approverActions.approveImage:
      const { approvedImages: prevApprovedImages } = state;
      /** Add only when it doesn't already exist */
      const approvedImgs = prevApprovedImages.findIndex(img => img.id === action.payload.id) !== -1 ? prevApprovedImages : [...prevApprovedImages, {
        id: action.payload.id,
        thumb: action.payload.urls.thumb,
      }];
      localStorage.setItem('approved', JSON.stringify(approvedImgs));
      return {
        ...state,
        approvedImages: approvedImgs,
        currentImage: {},
      }
    case approverActions.restoreStorageData:
      return {
        ...state,
        approvedImages: JSON.parse(localStorage.getItem('approved') || '[]'),
        rejectedImages: JSON.parse(localStorage.getItem('rejected') || '[]'), 
      }
    case approverActions.rejectImage:
      const { rejectedImages: previousRejectedImages, approvedImages: previousApprovedImages } = state;
      const rejectedImages = [...previousRejectedImages, {
        id: action.payload,
      }];
      const approvedImages = previousApprovedImages.filter(img => img.id !== action.payload);
      localStorage.setItem('approved', JSON.stringify(approvedImages));
      localStorage.setItem('rejected', JSON.stringify(rejectedImages));
      return {
        ...state,
        rejectedImages,
        approvedImages,
        currentImage: {},
      };
    default:
      return state;
  }
}

export default approverReducer;
