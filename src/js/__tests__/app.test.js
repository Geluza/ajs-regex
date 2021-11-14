import Validator from '../app';


test('проверка имени пользователя: допустимы только латинские буквы, символы: -, _ и цифры 0-9', () => {
  const validator = new Validator('Mi_9sha');
  const received = validator.validateUserName();
  expect(received).toBeTruthy();
});

test('проверка имени пользователя: допустимы только латинские буквы, символы: -, _ и цифры 0-9', () => {
  const validator = new Validator('Яна');
  const received = validator.validateUserName();
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно начинаться с цифры ', () => {
  const validator = new Validator('11_k');
  const received = validator.validateUserName();
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно начинаться с "-" ', () => {
  const validator = new Validator('-11k');
  const received = validator.validateUserName();
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно начинаться с "_" ', () => {
  const validator = new Validator('_nik');
  const received = validator.validateUserName();
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно заканчиваться "_" ', () => {
  const validator = new Validator('f11k_');
  const received = validator.validateUserName();
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно заканчиваться "-" ', () => {
  const validator = new Validator('f11k_-');
  const received = validator.validateUserName();
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно заканчиваться цифрой ', () => {
  const validator = new Validator('f11k2');
  const received = validator.validateUserName();
  expect(received).toBeFalsy();
});

test('проверка имени пользователя: имя не должно содержать больше трёх цифр подряд ', () => {
  const validator = new Validator('f11234k');
  const received = validator.validateUserName();
  expect(received).toBeFalsy();
});
