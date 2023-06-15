import { getMonth } from "../../task_17.6.2/getMonth.js";

describe('test for getMonth function', () => {
    it('should return the correctly month name', () => {
        expect(getMonth(1)).toBe('Январь');
        expect(getMonth(5)).toBe('Май');
        expect(getMonth(12)).toBe('Декабрь');
    });

    it('should throw an error if the month number is less than 1 and more than 12', () => {
        expect(() => {
            getMonth(-1);
        },).toThrow('Invalid parameter');
        expect(() => {
            getMonth(15);
        },).toThrow('Invalid parameter');
        expect(() => {
            getMonth(0);
        },).toThrow('Invalid parameter');
    });

    it('should throw an error if the month number is not a number', () => {
        expect(() => {
            getMonth(NaN);
        },).toThrow('Invalid parameter');
        expect(() => {
            getMonth(null);
        },).toThrow('Invalid parameter');
        expect(() => {
            getMonth('Декабрь');
        },).toThrow('Invalid parameter');
    });
})