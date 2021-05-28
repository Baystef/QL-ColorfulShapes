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

export interface IAuthContextValue {
  signin(data: IUser): void, 
  logout(): boolean,
  user: {},
  authenticated: boolean 
}

export interface IFilterTypes {
  [key: string]: boolean
}

export interface IFilterTags {
  color: string[],
  shape: string[]
}

export interface IInitialState {
  filters: {
    colors: IFilterTypes,
    shapes: IFilterTypes
  },
  data: Shapes[],
}

export interface IFilterContextValue {
  state: IInitialState;
  updateFilter(e: InputEvent, filterType: FilterType): void;
  filteredShapesColors: Shapes[],
  filterTags: IFilterTags
}
