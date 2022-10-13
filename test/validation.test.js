const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        name: "uno",
        car: "FIAT",
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        car: "FIAT"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
