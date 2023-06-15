import { getPercents } from "../../task_17.6.2/getPercents.js";

describe('test for getPercent function', () => {
    it('should return the correctly percentages of the number', () => {
        expect(getPercents(30, 200)).toBe(60);
        expect(getPercents(80, 100)).toBe(80);
        expect(getPercents(1, 100)).toBe(1);
    });

    it('should throw an error if percent parameter is not a number', () => {
        expect(() => {
            getPercents('123', 15);
        }).toThrow('Invalid percent parameter');
        expect(() => {
            getPercents(NaN, 15);
        }).toThrow('Invalid percent parameter');
    });

    it('should throw an error if number parameter is not a number', () => {
        expect(() => {
            getPercents(60, '125');
        }).toThrow('Invalid number parameter');
        expect(() => {
            getPercents(60, NaN);
        }).toThrow('Invalid number parameter');
    });

    it('should throw an error if percent and number parameters is not a number', () => {
        expect(() => {
            getPercents(NaN, NaN);
        }).toThrow('Invalid percent and number parameter');
        expect(() => {
            getPercents('60', NaN);
        }).toThrow('Invalid percent and number parameter');
        expect(() => {
            getPercents('60', '183');
        }).toThrow('Invalid percent and number parameter');
    });
})