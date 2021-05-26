import ColorCheckboxItem from './ColorCheckboxItem';
import { useFilter } from '../../context/FilterContext';


const ColorCheckbox = () => {
  const { state } = useFilter();

  const colors = Object.keys(state.filters.colors);

  return (
    <div className="color-checkbox--container">
      <h5 className="filter-title">Colors</h5>
      <div>
        {colors.map((color: string, i: number) => <ColorCheckboxItem key={`${i + 1}`} color={color}/>)}
      </div>
    </div>
  )
}


export default ColorCheckbox;
