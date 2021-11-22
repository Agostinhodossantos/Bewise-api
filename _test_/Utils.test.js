const {isEmpty, getDate} = require('../src/utils/utils');

test('isEmpty should be true', () => {
    expect(isEmpty("")).toBe(true)
    expect(isEmpty({})).toBe(true)
})

test('isEmpty should be false', () => {
    expect(isEmpty("value")).toBe(false)  
    expect(isEmpty({name: 'test'})).toBe(false)
})

