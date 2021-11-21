import reducer from './approver.reducer';
import { approverActions } from '../actions/approver.action';

describe('Approver reducer', () => {
  it('should handle fetchImageSuccess', () => {
    const successAction = {
      type: approverActions.fetchImageSuccess,
      payload: { id: 'someId', data: 'data' },
    }
    expect(reducer({}, successAction)).toEqual({
      currentImage: { id: 'someId', data: 'data' }
    });
  });

  it('should handle approveImage', () => {
    const approveImageAction = {
      type: approverActions.approveImage,
      payload: { id: 'someId', urls: { thumb: 'https://thumbnail.url' } },
    }
    expect(reducer({ approvedImages: [] }, approveImageAction)).toEqual({
      currentImage: {},
      approvedImages: [{ id: 'someId', thumb: 'https://thumbnail.url' }],
    });
  });

  it('should handle approveImage when image already exists', () => {
    const approveImageAction = {
      type: approverActions.approveImage,
      payload: { id: 'someId', urls: { thumb: 'https://thumbnail.url' } },
    }
    expect(reducer({ approvedImages: [{ id: 'someId', thumb: 'https://thumbnail.url' }] }, approveImageAction)).toEqual({
      currentImage: {},
      approvedImages: [{ id: 'someId', thumb: 'https://thumbnail.url' }],
    });
  });
});