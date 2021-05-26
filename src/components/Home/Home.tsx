import { Navbar } from "../Navbar";
import ShapeCheckbox from './ShapeCheckbox';
import ColorCheckbox from './ColorCheckbox';
import ColorfulShapes from './ColorfulShapes';
import { useFilter } from '../../context/FilterContext';
import { getSelected } from '../../util';

import './Home.css';

const Home = () => {
  const { filteredShapesColors, filterTags, state } = useFilter();
  
  const { color, shape } = filterTags;
  const shapesLength = Object.keys(state.filters.shapes).length
  const colorsLength = Object.keys(state.filters.colors).length
  const colorTagLength = color.length;
  const shapeTagLength = shape.length;


  return (
    <>
      <Navbar />
      <div className="home-container">
        <h3>Filters</h3>
        <ShapeCheckbox />
        <ColorCheckbox />
        <h3>
          {getSelected(colorTagLength, colorsLength, shapeTagLength, shapesLength, color, shape)} ({filteredShapesColors.length})
        </h3>
        <ColorfulShapes />
      </div>
    </>
  )
}

export { Home };
