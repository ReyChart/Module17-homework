import { countDown } from "../../task_17.6.2/countDown.js";

describe('test for countDown function', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        console.log.mockRestore();
    });

    it('should log numbers in descending order for positive parameters', () => {
        countDown(3);
        expect(console.log.mock.calls.length).toBe(3);
        expect(console.log.mock.calls[0][0]).toBe(3);
        expect(console.log.mock.calls[1][0]).toBe(2);
        expect(console.log.mock.calls[2][0]).toBe(1);
    });

    it('should not log anything if parameters is zero', () => {
        countDown(0);
        expect(console.log.mock.calls.length).toBe(0);
    });

    it('should log numbers in ascending order for negative parameters', () => {
        countDown(-3);
        expect(console.log.mock.calls.length).toBe(3);
        expect(console.log.mock.calls[0][0]).toBe(-3);
        expect(console.log.mock.calls[1][0]).toBe(-2);
        expect(console.log.mock.calls[2][0]).toBe(-1);
    });

    it('should throw an error if parameters is not a number', () => {
        expect(() => {
            countDown('321');
        }).toThrow('Invalid parameter');
        expect(() => {
            countDown(NaN);
        }).toThrow('Invalid parameter');
    });
})