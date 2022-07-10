
const coollib = require('../mylibs/coollib')
jest.mock('fs');

test('Encontrar arquivo', ()=>{
    const result = coollib.findTestTxt();
    expect(result).toBeTruthy();
})