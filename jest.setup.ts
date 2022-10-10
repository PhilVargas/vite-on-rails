import '@testing-library/jest-dom/extend-expect';

const error = console.error;
console.error = (...args) => {
  error(...args);
};

// beforeAll(() => {
// // Establish API mocking before all tests.
// });

// afterEach(() => {
// // Reset any request handlers that we may add during the tests,
// // so they don't affect other tests.
// });

// afterAll(() => {
// // Clean up after the tests are finished.

// });
