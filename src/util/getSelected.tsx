const isMultiple = (tagLength: number, itemLength: number) => tagLength >= 2 && tagLength < itemLength
const isAllSelected = (tagLength: number, itemLength: number) => tagLength === itemLength


/**
   * @remarks 
   * This function determines the appropriate title based on selected filters
   * 
   * @param  colorTagLength - The number of color filter tags
   * @param  colorsLength - The number of colors
   * @param  shapeTagLength - The number of shape filter tags
   * @param  shapesLength - The number of shapes
   * @param  color - Array of selected color filter tags
   * @param  shape - Array of selected shape filter tags
   * @returns The matching title string
   */
const getSelected = (colorTagLength: number, colorsLength: number, shapeTagLength: number, shapesLength: number, color: string[], shape: string[]) => {
  // All colors and all shapes
  if (isAllSelected(colorTagLength, colorsLength) && isAllSelected(shapeTagLength, shapesLength)) {
    return 'All Items:'

    // All colors & multiple shapes || All shapes & multiple colors
  } else if ((isAllSelected(colorTagLength, colorsLength) && isMultiple(shapeTagLength, shapesLength)) || (isAllSelected(shapeTagLength, shapesLength) && (isMultiple(colorTagLength, colorsLength)))) {
    return 'Multiple Items:';

    // All shapes & a single color
  } else if (isAllSelected(shapeTagLength, shapesLength) && colorTagLength === 1) {
    return `All ${color[0]} Items:`;

    // All colors & a single shape
  } else if (isAllSelected(colorTagLength, colorsLength) && shapeTagLength === 1) {
    return `All ${shape[0]} Items:`;

    // Multiple shapes & a single color
  } else if ((isMultiple(shapeTagLength, shapesLength)) && colorTagLength === 1) {
    return `Multiple ${color[0]} Items:`;

    // Multiple colors & a single shape
  } else if ((isMultiple(colorTagLength, colorsLength)) && shapeTagLength === 1) {
    return `Multiple ${shape[0]} Items:`;

    // Single color & a single shape
  } else if (colorTagLength === 1 && shapeTagLength === 1) {
    return `${shape[0]} ${color[0]} Item`
  } else {
    return ''
  }
}

export { getSelected }
