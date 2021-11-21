import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testHelper";
import ImageViewer from "./ImageViewer";

test('With no image loaded should display the add icon', () => {
  renderWithProviders(<ImageViewer/>);
  screen.getByText(/click on the in order to get image recommendations/i);
});

test('With image loaded should display buttons', () => {
  renderWithProviders(<ImageViewer />, {
    reduxState: {
      approver: {
        currentImage: {
          id: 'someId',
          urls: {
            regular: 'http://regular-image-url',
            thumb: 'https://thumb-image-url',
          }
        }
      }
    }
  });
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'http://regular-image-url');
  screen.getByRole('button', { name: /✖/i });
  screen.getByRole('button', { name: /✔/i });
});
