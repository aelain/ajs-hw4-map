import ErrorRepository from '../errorRepository';

const errorRepository = new ErrorRepository();
errorRepository.list.set(100, 'Continue');
errorRepository.list.set(200, 'OK');
errorRepository.list.set(400, 'Bad Request');

test('Checking of translated code', () => {
    expect(errorRepository.translate(400)).toBe('Bad Request');
});

test('Checking of error', () => {
    expect(errorRepository.translate(600)).toBe('Unknown error');
});
