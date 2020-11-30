import { interpolatePath } from '../../src/util/string';

describe('interpolatePath', () => {
	it('should replace wildcards with corresponding values', () => {
		expect(interpolatePath('abc/:def', { def: 'ghi' })).toEqual('abc/ghi');
	});
	it('should return original string if no wildcards match', () => {
		const originalString = 'abc/:def/:ghi';
		expect(interpolatePath(originalString, { abc: 'nope' })).toEqual(
			originalString
		);
	});
});
