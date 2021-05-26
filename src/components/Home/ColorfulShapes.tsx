import ColorfulShapesItem from './ColorfulShapesItem';
import { useFilter } from '../../context/FilterContext';
import { Shapes } from '../../types';

const ColorfulShapes = () => {
  const { filteredShapesColors } = useFilter();

  return (
    <div className="colorful-shape--container">
      {filteredShapesColors && filteredShapesColors.map(({ color, id, shape }: Shapes) => <ColorfulShapesItem key={id} color={color} shape={shape} />)}
    </div>
  )
}

export default ColorfulShapes;
