import { Epic } from 'redux-observable';
import 'rxjs';
import * as redux from 'redux';

type Action = { type: 'PING' } | { type: 'PONG' };

type ActionBase = { type: string };

export const ping = () => ({ type: 'PING' });
interface Store {
    isPinging: boolean;
}

export const pingEpic: Epic<ActionBase, Store> = 
(action$, store) => action$.ofType('PING').delay(1000).mapTo({ type: 'PONG' });

export const pingReducer: redux.Reducer<Store> = (state: Store = { isPinging: false }, action: Action) => {
    switch (action.type) {
        case 'PING':
            return { isPinging: true };

        case 'PONG':
            return { isPinging: false };

        default:
            return state;
    }
};