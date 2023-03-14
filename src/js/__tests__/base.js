import healthStatus from '../health';

test.each(
  [
    ['Маг', 90, 'healthy'],
    ['Воин', 30, 'wounded'],
    ['Лучник', 10, 'critical'],
  ],
)('testing status health for %s and his health %i', (name, health, st) => {
  expect(st).toBe(healthStatus({ name, health }));
});
