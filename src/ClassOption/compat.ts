import { createSome, createNone, Option as PlainOption, isSome } from '../PlainOption/Option';
import { unwrapOption } from '../PlainOption/unwrap';

import { ClassicOption, createClassicNone, createClassicSome } from './ClassicOption';

export function compatToPlainOption<T>(classic: ClassicOption<T>): PlainOption<T> {
    if (classic.isSome) {
        const val: T = classic.unwrap();
        const result = createSome<T>(val);
        return result;
    }

    const result = createNone();
    return result;
}

export function compatToClassicOption<T>(plain: PlainOption<T>): ClassicOption<T> {
    if (isSome(plain)) {
        const val: T = unwrapOption(plain);
        const result = createClassicSome<T>(val);
        return result;
    }

    const result = createClassicNone<T>();
    return result;
}
