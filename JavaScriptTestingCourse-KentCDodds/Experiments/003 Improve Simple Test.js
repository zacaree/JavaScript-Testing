// Intentional bug here in `add` ↓
const add = (a, b) => a - b;
const subtract = (a, b) => a - b;

// Tests
test('add adds numbers', () => {
  const result = add(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

// Test runner
function test(title, callback) {
  try {
    callback();
    console.log(`😎 ${title}`);
  } catch (error) {
    console.error(`😵 ${title}`);
    console.error(error);
  }
}

// Assertion library
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}.`);
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is not gridTemplateRows:  than ${expected}.`);
      }
    },
    toBeLessThan(expected) {
      if (actual >= expected) {
        throw new Error(`${actual} is not less than ${expected}.`);
      }
    }
  };
}
