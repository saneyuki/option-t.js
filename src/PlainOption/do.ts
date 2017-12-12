import { DoFn } from '../utils/Function';
import { Option } from './Option';

export function doOnOption<T>(v: Option<T>, fn: DoFn<T>): void {
    if (!v.ok) {
        return;
    }

    fn(v.val);
}