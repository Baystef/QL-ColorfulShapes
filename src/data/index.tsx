
import { Shapes } from '../types';

const shapes: string[] = ['oval', 'round', 'triangle', 'square', 'rectangle'];
const colors: string[] = ['red', 'blue', 'green', 'yellow', 'lightblue', 'gray'];

const shapyColors: Shapes[] = [];

for (let i = 0; i < shapes.length; i++) {
  for (let j = 0; j < colors.length; j++) {
    shapyColors.push({ id: `${shapyColors.length + 1}`,  shape: shapes[i], color: colors[j]})
  }
}

export default shapyColors;
