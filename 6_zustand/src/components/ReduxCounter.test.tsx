import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/counter/counterSlice';
import ReduxCounter from './ReduxCounter';

const createTestStore = () => configureStore({
  reducer: { counter: counterReducer }
});

describe('ReduxCounter', () => {
  it('renders initial count', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    );
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments count when + button clicked', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    );
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements count when - button clicked', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    );
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText('-1')).toBeInTheDocument();
  });
});
