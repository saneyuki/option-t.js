import { EffectFn } from '../internal/Function';
import { Nullable } from './Nullable';

/**
 *  * Return _input_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _effector_.
 *  * Call _effector_ with _input_ if _input_ is not `null`.
 *
 *  * This was added to sort with others or future enhancement to accept chaining functions.
 *    We recommend to use simple `if` statement or similar way and they would be more efficient.
 */
export function tapNullable<T>(input: Nullable<T>, effector: EffectFn<T>): Nullable<T> {
    if (input !== null) {
        effector(input);
    }

    return input;
}
