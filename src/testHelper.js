import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "./redux/reducers/root.reducer";

export function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(rootReducer, reduxState || {});
  return render(<Provider store={store}>{ui}</Provider>);
}
