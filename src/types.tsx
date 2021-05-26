import { ChangeEvent } from 'react';

export type InputEvent = ChangeEvent<HTMLInputElement>;
export type FilterType = 'colors' | 'shapes'
export type ShapeFilterType = 'color' | 'shape'
export type Shapes = {
  id: string,
  shape: string,
  color: string,
}

export interface IUser {
  userName: string,
  password: string
}

export interface AuthContextValue {
  signin(data: IUser): void, 
  logout(): boolean,
  user: {},
  authenticated: boolean 
}

export interface FilterTypes {
  [key: string]: boolean
}

export interface FilterTags {
  color: string[],
  shape: string[]
}

export interface IInitialState {
  filters: {
    colors: FilterTypes,
    shapes: FilterTypes
  },
  data: Shapes[],
}

export interface FilterContextValue {
  state: IInitialState;
  updateFilter(e: InputEvent, filterType: FilterType): void;
  filteredShapesColors: Shapes[],
  filterTags: FilterTags
}
