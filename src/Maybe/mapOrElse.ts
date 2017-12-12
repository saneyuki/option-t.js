import { expectNotNullAndUndefined } from './expect';
import { ERR_MSG_MUST_NOT_RETURN_NULL_OR_UNDEF, ERR_MSG_SELECTOR } from './ErrorMessage';
import { MapFn, RecoveryFn } from '../utils/Function';
import { Maybe } from './Maybe';

export function mapOrElseForMaybe<T, U>(src: Maybe<T>, def: RecoveryFn<U>, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '';
    if (src !== undefined && src !== null) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR;
    }
    else {
        r = def();
        msg = '`def`' + ERR_MSG_MUST_NOT_RETURN_NULL_OR_UNDEF;
    }
    return expectNotNullAndUndefined(r, msg);
}