import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testHelper";
import ApprovedImages from "./ApprovedImages";

test('With no images approved should show 0 images count', () => {
  renderWithProviders(<ApprovedImages/>);
  screen.getByRole('heading', { name: /approved images \(0\)/i });
  screen.getByText(/\+/i);
});

test('With one image should show display the image', () => {
  renderWithProviders(<ApprovedImages/>, {
    reduxState: {
      approver: {
        approvedImages: [{
          id: 'someImageId',
          thumb: 'https://image/url'
        }]
      }
    }
  });
  screen.getByRole('heading', { name: /approved images \(1\)/i });
  screen.getByTitle(/View image/i);
});