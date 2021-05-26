
import { render, screen, cleanup } from '../../customRender';
import userEvent from '@testing-library/user-event'
import { Home } from './Home';

describe('Home component', () => {
  afterEach(() => {
    cleanup()
  })
  test('it renders', () => {
    render(<Home />);

    expect(screen.getByText(/Log out/)).toBeInTheDocument();
    expect(screen.getByText(/Filters/)).toBeInTheDocument();
    expect(screen.getByText(/Colors/)).toBeInTheDocument();
    expect(screen.getByText(/Shapes/)).toBeInTheDocument();
    const colorShapesList = screen.queryAllByTestId(/color-shapes/);
    expect(colorShapesList).toHaveLength(30);
  });

  test('it filters', () => {
    render(<Home />);

    expect(screen.getByTestId(/shape-oval/)).toBeInTheDocument()
    userEvent.click(screen.getByTestId(/shape-oval/))
    const colorShapesList = screen.queryAllByTestId(/color-shapes/);
    expect(colorShapesList).toHaveLength(24);
  });
})