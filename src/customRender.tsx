import { render } from "@testing-library/react";

import { FilterProvider } from "./context/FilterContext";

const Wrapper: React.FC = ({ children }) => {
  return (
    <FilterProvider>
      {children}
    </FilterProvider>
  );
};

// @ts-ignore
const customRender = (ui, options?) =>
  render(ui, { wrapper: Wrapper, ...options });


export * from "@testing-library/react";

// override render method
export { customRender as render };