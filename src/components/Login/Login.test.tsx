import { render, screen } from "@testing-library/react";
import { Login } from './Login';

describe('Login component', () => {
  test('it renders', () => {
    render(<Login />);

    expect(screen.getByText(/SH▲PES/)).toBeInTheDocument();
    expect(screen.getByTestId(/userName/)).toBeInTheDocument();
    expect(screen.getByTestId(/password/)).toBeInTheDocument();
    expect(screen.getByText(/Login/)).toBeInTheDocument();
  });
})
