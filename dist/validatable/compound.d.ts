import Value from "../infer/value";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * base for creating compound wrapper for {@template Validatables}
 */
export default abstract class Compound<Validatables extends Iterable<Validatable>> implements Readonly<Validatable>, Iterable<Value<Validatables>> {
    subjects: Validatables;
    defaults: boolean;
    /**
     * {@param subjects} multiple {@link Validatable} to be processed by subclass
     *
     * {@param defaults} is used if {@param subjects} is empty
     */
    constructor(subjects: Validatables, defaults?: boolean);
    [Symbol.iterator](): Iterator<Value<Validatables>>;
    abstract readonly valid: boolean;
}
