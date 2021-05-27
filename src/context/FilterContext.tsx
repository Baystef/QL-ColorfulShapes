import { useContext, useState, createContext, FC } from 'react';
import { InputEvent, FilterType, IInitialState, FilterContextValue, FilterTags } from '../types';
import { filterPlainArray, updateState } from '../util';

import shapeColors from '../data';


const initialState = {
  filters: {
    colors: {
      red: true,
      blue: true,
      green: true,
      yellow: true,
      lightblue: true,
      gray: true
    },
    shapes: {
      oval: true,
      round: true,
      triangle: true,
      square: true,
      rectangle: true
    }
  },
  data: shapeColors
}

export const FilterContext = createContext<FilterContextValue>({
  state: initialState,
  updateFilter() { },
  filteredShapesColors: [],
  filterTags: {
    color: [],
    shape: [],
  },
});

export const FilterProvider: FC = ({ children }) => {
  const [state, setState] = useState<IInitialState>(initialState);
  let filterTags: FilterTags = {
    color: [],
    shape: [],
  };;

  const updateFilter = (e: InputEvent, filterType: FilterType) => {
    const { name } = e.target;
    updateState(setState, filterType, name)
  };


  // Loops through the colors and shapes state object and push all keys with
  // truthy value into the filterTags array
  const filteredTags = () => { 
    const { colors, shapes } = state.filters;
    for (let colorKey in colors) {
      if (colors[colorKey]) filterTags.color.push(colorKey);
    }
    for (let shapeKey in shapes) {
      if (shapes[shapeKey]) filterTags.shape.push(shapeKey);
    }
   
    return filterTags;
  };


  // The filterTags is applied on the array of colorful shape
  // objects and the returns a filtered array that passed the criterias
  const multiFilter = () => {
    const filteredShapes = filterPlainArray(
      state.data,
      filteredTags()
    );

    return filteredShapes;
  };

  // The filtered data array
  let filteredShapesColors = multiFilter();


  // When last item is deselected, reset tags and state
  if (filterTags.color.length === 0 && filterTags.shape.length === 0) {
    // Empty the arrays first
    filterTags.color.length = 0;
    filterTags.shape.length = 0;

    const { colors, shapes } = state.filters;

    for (let colorKey in colors) {
      filterTags.color.push(colorKey);
      updateState(setState, 'colors', colorKey);
    }

    for (let shapeKey in shapes) {
      filterTags.shape.push(shapeKey);
      updateState(setState, 'shapes', shapeKey);
    }
  }


  return (
    <FilterContext.Provider value={{ state, updateFilter, filteredShapesColors, filterTags }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext);
