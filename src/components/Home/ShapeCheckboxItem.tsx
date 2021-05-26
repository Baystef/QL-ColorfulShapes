import PropTypes from 'prop-types';
import { useFilter } from '../../context/FilterContext';

import './shapes.css';

type ShapeProps =  {
  shape: string,
}

const ShapeCheckboxItem = ({ shape }: ShapeProps) => {
  const { updateFilter, state } = useFilter()

  return (
    <div className="custom-checkbox shape-checkbox">
      <label>
        <input onChange={(e) => updateFilter(e, 'shapes')} data-testid={`shape-${shape}`} checked={state.filters.shapes[shape]} type="checkbox" name={shape} /><span>{shape}</span>
      </label>
    </div>
  )
}

ShapeCheckboxItem.propTypes = {
  shape: PropTypes.string
}

export default ShapeCheckboxItem;
