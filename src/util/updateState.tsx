import { FilterType, IInitialState } from '../types';

/**
   * @remarks 
   * This function updates state using the functional setState,
   * depending on the key and value passed in as the argument
   * 
   * @param  setState - The hook setState function
   * @param  key - The key is a string of either 'colors' | 'shapes'
   * @param  value - The color or shape key to be updated in the state object 
   */
const updateState = (setState: React.Dispatch<React.SetStateAction<IInitialState>>, key: FilterType, value: string) => {
  setState((prevState: IInitialState) => ({
    filters: {
      ...prevState.filters,
      [key]: {
        ...prevState.filters[key],
        [value]: !prevState.filters[key][value]
      }
    },
    data: [...prevState.data]
  }));
}

export { updateState }
