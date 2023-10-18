/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  if (!password || password == null) return 0;
  if (typeof password !== "string") password = String(password);

  // the following code checks if the sequences has two or more consecutive characters
  const regex = /([a-zA-Z0-9])\1{1,}/g;
  const match = password.match(regex);

  const points = match?.reduce((acc, val) => {
    return acc + val.length <= 2 ? 1 : 2;
  }, 0);

  return points || 0;
}
