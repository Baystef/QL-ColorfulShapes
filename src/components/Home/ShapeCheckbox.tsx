import ShapeCheckboxItem from './ShapeCheckboxItem';
import { useFilter } from '../../context/FilterContext';


const ShapeCheckbox = () => {
  const { state } = useFilter();

  const shapes = Object.keys(state.filters.shapes)

  return (
    <div className="shape-checkbox--container">
      <h5 className="filter-title">Shapes</h5>
      <div>
        {shapes.map((shape: string, i: number) => <ShapeCheckboxItem key={`${i + 1}`} shape={shape} />)}
      </div>
    </div>
  )
}

export default ShapeCheckbox;
