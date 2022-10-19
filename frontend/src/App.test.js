import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("Component test", () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("should check if app renders correctly", () => {
    render(<App />);

    const latestButton = screen.getByText("Último Lançamento");
    expect(latestButton).toHaveClass("active");
  })

  it("should show error message if fetch fails", async () => {
    global.fetch = jest.fn(() => Promise.reject());

    render(<App />);

    const errorDiv = await screen.findByText(/Não foi possível obter os dados do lançamento./i);
    expect(errorDiv).toBeInTheDocument();
  });

  it("should render information from mock fetch", async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ name: "Name", date_local: "2022-10-18", flight_number: "1" })
    }));

    render(<App />);

    const nameDiv = await screen.findByText(/Nome/i);
    expect(nameDiv).toBeInTheDocument();
    
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should render a select when there are multiple flighs", async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ "0": { name: "Name", date_local: "2022-10-18", flight_number: "1" }, "1": { name: "Name", date_local: "2022-10-18", flight_number: "2" }})
    }));

    render(<App />);

    const pastButton = screen.getByText("Lançamentos Passados");
    expect(pastButton).toBeInTheDocument();

    fireEvent.click(pastButton);

    const infoSelect = await screen.findByText("1");
    expect(infoSelect).toBeInTheDocument();
  });
});

describe("API test", () => {
  it("should get data from the API and render it on screen", async () => {
    render(<App />);

    const nameDiv = await screen.findByText(/Nome/i);
    expect(nameDiv).toBeInTheDocument();
  });

  it("should render a select when there are multiple flighs", async () => {
    render(<App />);

    const pastButton = screen.getByText("Lançamentos Passados");
    expect(pastButton).toBeInTheDocument();

    fireEvent.click(pastButton);

    const infoSelect = await screen.findByText("1");
    expect(infoSelect).toBeInTheDocument();
  });
});