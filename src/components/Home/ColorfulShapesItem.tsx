import PropTypes from 'prop-types';

type ColorShape = {
  shape: string,
  color: string,
}

const ColorfulShapesItem = ({ shape, color }: ColorShape) => {
  return (
    <div data-testid="color-shapes" className="color-shape--container">
      {shape === 'triangle' ?
        <div className={`${shape}`} style={{ borderBottomColor: color }}></div>
        :
        <div className={`${shape} ${color}`}></div>
      }
    </div>
  )
}

ColorfulShapesItem.propTypes = {
  shape: PropTypes.string,
  color: PropTypes.string,
}

export default ColorfulShapesItem;
