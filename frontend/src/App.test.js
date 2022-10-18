import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders information from the server', async () => {
  render(<App />);

  const latestButton = screen.getByText("Último Lançamento");
  expect(latestButton).toHaveClass("active");

  const nameDiv = await screen.findByText(/Nome/i);
  expect(nameDiv).toBeInTheDocument();
});

test('renders select when there is an array of data', async () => {
  render(<App />);

  const pastButton = screen.getByText("Lançamentos Passados");
  expect(pastButton).toBeInTheDocument();

  fireEvent.click(pastButton);

  const infoSelect = await screen.findByText("1");
  expect(infoSelect).toBeInTheDocument();
});
