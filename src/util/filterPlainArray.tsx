import {  ShapeFilterType, Shapes, IFilterTags } from '../types';

//ref: https://gist.github.com/jherax/f11d669ba286f21b7a2dcff69621eb72
/**
   * @remarks 
   * This function takes in an array to be filtered and an object of arrays of filter tags
   * 
   * @param  array: The array to filter
   * @param  filters: The object containing arrays of filter tags
   * @returns The filtered array
   */
 function filterPlainArray(arr: Shapes[], filters: IFilterTags) {
  const filterKeys = (Object.keys(filters) as string[]);
  return arr.filter((item: Shapes) => {
    //@ts-ignore
    return filterKeys.every((key: ShapeFilterType) => {
      // ignores an empty filter
      if (!filters[key].length) return true;
      return filters[key].find((filter: string) => filter === item[key]);
    });
  });
}

export { filterPlainArray }