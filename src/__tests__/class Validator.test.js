import Validator from '../class Validator';

test('should return false', () => {
  expect(Validator.validateUsername('4ink')).toBeFalsy();
});
