/**
 *
 * @param n {[Point]}
 * @returns {[Line]}
 */
export function combination(n) {
  const result = []

  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (j <= i) {
        continue
      }

      result.push([
        n[i],
        n[j]
      ])
    }
  }

  return result
}

/**
 *
 * @param n {Number}
 */
export function isZero(n) {
  const MISTAKE = 1e-10

  return n >= -MISTAKE && n <= MISTAKE
}
