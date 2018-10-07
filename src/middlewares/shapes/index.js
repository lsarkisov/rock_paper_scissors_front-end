import { API_SHAPE_URL } from '../../const';
import { onComputerSelection } from '../../actions/shapes';

export const onShapeSelection = (action, next) => {
    console.log('Request...', action.shape, API_SHAPE_URL)
    fetch(API_SHAPE_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(action.shape),
    })
    .then(shape => shape.json())
    .then(shape => next(onComputerSelection({
        shape,
    })));
};