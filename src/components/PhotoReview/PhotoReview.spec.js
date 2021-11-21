import { screen, fireEvent, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../testHelper';
import PhotoReview from './PhotoReview';

test('renders the page title',  () => {
  renderWithProviders(<PhotoReview />);
  screen.getByRole('heading', { name: /image approval application/i });
  cleanup();
});

test('should not update the list of approved images when current image is rejected', () => {
  renderWithProviders(<PhotoReview />, {
    reduxState: {
      approver: {
        currentImage: {
          id: 'someId',
          urls: {
            regular: 'http://regular-image-url',
            thumb: 'https://thumb-image-url',
          }
        },
        approvedImages: [],
        rejectedImages: [],
      }
    }
  });
  screen.getByRole('heading', { name: /approved images \(0\)/i });
  const rejectBtn = screen.getByRole('button', { name: /✖/i });
  fireEvent.click(rejectBtn);
  screen.getByRole('heading', { name: /approved images \(0\)/i });
  screen.getByText(/click on the in order to get image recommendations/i);
  cleanup();
});

test('should update the list of approved images when current image is approved', () => {
  renderWithProviders(<PhotoReview />, {
    reduxState: {
      approver: {
        currentImage: {
          id: 'someId',
          urls: {
            regular: 'http://regular-image-url',
            thumb: 'https://thumb-image-url',
          }
        },
        approvedImages: [],
        rejectedImages: [],
      }
    }
  });
  screen.getByRole('heading', { name: /approved images \(0\)/i });
  const approveBtn = screen.getByRole('button', { name: /✔/i });
  fireEvent.click(approveBtn);
  screen.getByRole('heading', { name: /approved images \(1\)/i });
  screen.getByText(/click on the in order to get image recommendations/i);
  cleanup();
});
