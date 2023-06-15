import { revertString } from "../../task_17.6.1/revertString.js";

describe ('test for revertString function', () => {
    it ('should reverse string', () => {
        expect(revertString('hello')).toBe('olleh');
        expect(revertString('skillfactory')).toBe('yrotcaflliks');
        expect(revertString('abc')).toBe('cba');
        expect(revertString('привет')).toBe('тевирп');
    });

    it ('should throw an error when input is not a string', () => {
        expect(() => {
            revertString(111);
        },).toThrow('Parameter is not a string!');
        expect(() => {
            revertString(false);
        },).toThrow('Parameter is not a string!');
        expect(() => {
            revertString(undefined);
        },).toThrow('Parameter is not a string!');
        expect(() => {
            revertString(null);
        },).toThrow('Parameter is not a string!');
    });
})