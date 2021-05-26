import PropTypes from 'prop-types';
import { useFilter } from '../../context/FilterContext';


type ColorProp =  {
  color: string
}

const ColorCheckboxItem = ({ color }: ColorProp) => {
  const { updateFilter, state } = useFilter();

  return (
    <div className="color-checkbox" style={{ backgroundColor: color }}>
      <label>
        <input onChange={(e) => updateFilter(e, 'colors')} checked={state.filters.colors[color]} type="checkbox" name={color} /><span></span>
      </label>
    </div>
  )
}

ColorCheckboxItem.propTypes = {
  color: PropTypes.string
}

export default ColorCheckboxItem;
