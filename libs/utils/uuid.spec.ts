import { uuid } from './uuid';

describe('uuid function', () => {
  it('should generate a 36-character string with 32 alphanumeric characters and four dashes', () => {
    const result = uuid();
    const withoutDashes = result.split('-').join('');
    expect(result).toHaveLength(36);
    expect(withoutDashes).toHaveLength(32);
  });

  it('should always generate a unique uuid', () => {
    const uuids = new Array(1000).fill(0).map(uuid); // Array of 1000 UUID's
    const uniqueUuids = new Set(uuids); // Removes all duplicate values
    expect(uuids.length).toBe(1000);
    expect(uniqueUuids.size).toBe(1000);
  });
});
