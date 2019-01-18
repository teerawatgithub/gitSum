const minus = require('./minus')
// 20 - 5 = 15
test('20 - 5 = 15', () => {
    expect(minus(20, 5)).toBe(15)
});
// 20 - 4 = 16
test('20 - 4 = 16', () => {
    expect(minus(20, 4)).toBe(16)
});
// 20 - 3 = 17
test('20 - 3 = 17', () => {
    expect(minus(20, 3)).toBe(17)
});
// 20 - 2 = 18
test('20 - 2 = 18', () => {
    expect(minus(20, 2)).toBe(18)
});
// 20 - 1 = 19
test('20 - 1 = 19', () => {
    expect(minus(20, 1)).toBe(19)
});