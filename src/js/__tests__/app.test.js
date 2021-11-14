import Validator from '../app';

const validator = new Validator();

test('проверка имени пользователя: допустимы только латинские буквы, символы: -, _ и цифры 0-9', () => {
  const received = validator.validateUserName('Mi-sha');
  expect(received).toBeTruthy();
});

test('проверка имени пользователя: допустимы только латинские буквы, символы: -, _ и цифры 0-9', () => {
  const received = validator.validateUserName('Яна');
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно начинаться с цифры ', () => {
  const received = validator.validateUserName('11_k');
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно начинаться с "-" ', () => {
  const received = validator.validateUserName('-11k');
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно начинаться с "_" ', () => {
  const received = validator.validateUserName('_11k');
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно начинаться с "_" ', () => {
  const received = validator.validateUserName('_11_-k');
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно заканчиваться "_" ', () => {
  const received = validator.validateUserName('f11k_');
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно заканчиваться "-" ', () => {
  const received = validator.validateUserName('f11k_-');
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно заканчиваться цифрой ', () => {
  const received = validator.validateUserName('f11k2');
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно содержать больше трёх цифр подряд ', () => {
  const received = validator.validateUserName('f11234k');
  expect(received).toBeFalsy();
});
