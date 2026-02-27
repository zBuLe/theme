---
layout: default
title: Code
permalink: /code/
---

# Verbose “add two numbers” examples (5 languages)

## JavaScript (JS)

```js
/**
 * Adds two numbers with verbose logging and basic validation.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addTwoNumbersVerbose(a, b) {
  console.log("[addTwoNumbersVerbose] Starting addition.");
  console.log(`[addTwoNumbersVerbose] Input a: ${a} (type: ${typeof a})`);
  console.log(`[addTwoNumbersVerbose] Input b: ${b} (type: ${typeof b})`);

  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    console.error("[addTwoNumbersVerbose] Invalid inputs: both a and b must be valid numbers.");
    throw new TypeError("Both inputs must be valid numbers.");
  }

  const result = a + b;

  console.log(`[addTwoNumbersVerbose] Computed result: ${result}`);
  console.log("[addTwoNumbersVerbose] Addition complete.");

  return result;
}

// Example:
// console.log(addTwoNumbersVerbose(2, 3));
````

## GML (GameMaker Language)

```gml
/// @function add_two_numbers_verbose(a, b)
/// @desc Adds two numbers with verbose debug output and basic validation.
/// @param a
/// @param b
function add_two_numbers_verbose(a, b)
{
    show_debug_message("[add_two_numbers_verbose] Starting addition.");
    show_debug_message("[add_two_numbers_verbose] Input a: " + string(a));
    show_debug_message("[add_two_numbers_verbose] Input b: " + string(b));

    // In GML, many values are numeric, but we can still check for NaN.
    if (is_nan(a) || is_nan(b))
    {
        show_debug_message("[add_two_numbers_verbose] Invalid inputs: a or b is NaN.");
        return undefined;
    }

    var result = a + b;

    show_debug_message("[add_two_numbers_verbose] Computed result: " + string(result));
    show_debug_message("[add_two_numbers_verbose] Addition complete.");

    return result;
}

// Example:
// var r = add_two_numbers_verbose(2, 3);
// show_debug_message("Result: " + string(r));
```

## Python

```python
from typing import Union

Number = Union[int, float]

def add_two_numbers_verbose(a: Number, b: Number) -> Number:
    print("[add_two_numbers_verbose] Starting addition.")
    print(f"[add_two_numbers_verbose] Input a: {a} (type: {type(a).__name__})")
    print(f"[add_two_numbers_verbose] Input b: {b} (type: {type(b).__name__})")

    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError("Both inputs must be numbers (int or float).")

    result = a + b

    print(f"[add_two_numbers_verbose] Computed result: {result}")
    print("[add_two_numbers_verbose] Addition complete.")

    return result

# Example:
# print(add_two_numbers_verbose(2, 3))
```

## Java

```java
public class VerboseAdder {
    public static double addTwoNumbersVerbose(double a, double b) {
        System.out.println("[addTwoNumbersVerbose] Starting addition.");
        System.out.println("[addTwoNumbersVerbose] Input a: " + a + " (type: double)");
        System.out.println("[addTwoNumbersVerbose] Input b: " + b + " (type: double)");

        if (Double.isNaN(a) || Double.isNaN(b)) {
            System.err.println("[addTwoNumbersVerbose] Invalid inputs: a or b is NaN.");
            throw new IllegalArgumentException("Inputs must be valid numbers.");
        }

        double result = a + b;

        System.out.println("[addTwoNumbersVerbose] Computed result: " + result);
        System.out.println("[addTwoNumbersVerbose] Addition complete.");

        return result;
    }

    public static void main(String[] args) {
        System.out.println(addTwoNumbersVerbose(2.0, 3.0));
    }
}
```

## Go

```go
package main

import (
	"errors"
	"fmt"
	"math"
)

func addTwoNumbersVerbose(a, b float64) (float64, error) {
	fmt.Println("[addTwoNumbersVerbose] Starting addition.")
	fmt.Printf("[addTwoNumbersVerbose] Input a: %v (type: float64)\n", a)
	fmt.Printf("[addTwoNumbersVerbose] Input b: %v (type: float64)\n", b)

	if math.IsNaN(a) || math.IsNaN(b) {
		fmt.Println("[addTwoNumbersVerbose] Invalid inputs: a or b is NaN.")
		return 0, errors.New("inputs must be valid numbers")
	}

	result := a + b

	fmt.Printf("[addTwoNumbersVerbose] Computed result: %v\n", result)
	fmt.Println("[addTwoNumbersVerbose] Addition complete.")

	return result, nil
}

func main() {
	r, err := addTwoNumbersVerbose(2, 3)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println("Result:", r)
}
```

## End of File

This is the end of the file.
