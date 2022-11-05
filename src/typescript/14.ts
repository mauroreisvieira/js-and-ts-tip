import { GlobalReducer } from './types';

declare global {
    interface GlobalReducerEvent {
        ADD_TODO: {
            text: string;
        }
    }
}

export const todoReducer: GlobalReducer<{ todos: { id : string }[] }> = (state, event) => {
    console.log(event.type === 'ADD_TODO');
    return state;
}
