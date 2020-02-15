const correspondingCalls = ["love", "15", "30", "40"];

/**
 * Check is the game score valid.
 * @param {number} pointsServer Points won by the server.
 * @param {number} pointsReceiver Points won by the receiver.
 * @return {boolean}
 */
function isGameScoreValid(pointsServer, pointsReceiver) {
  if (!Number.isInteger(pointsServer) || !Number.isInteger(pointsReceiver)) {
    return false;
  }

  if (pointsServer < 0 || pointsReceiver < 0) {
    return false;
  }

  // before deuce, no player can have more than 4 points
  if (
    (pointsServer < 3 && pointsReceiver > 4) ||
    (pointsServer > 4 && pointsReceiver < 3)
  ) {
    return false;
  }

  // after deuce, a player can only win by 2 points
  if (
    pointsServer > 2 &&
    pointsReceiver > 2 &&
    Math.abs(pointsServer - pointsReceiver) > 2
  ) {
    return false;
  }

  return true;
}

/**
 * Describe the game score.
 * @param {number} pointsServer Points won by the server.
 * @param {number} pointsReceiver Points won by the receiver.
 * @return {string}
 */
function describeGameScore(pointsServer, pointsReceiver) {
  if (!isGameScoreValid(pointsServer, pointsReceiver)) {
    throw "Invalid score!";
  }

  if (pointsServer === pointsReceiver) {
    if (pointsServer > 2) {
      return "deuce";
    }
    return `${correspondingCalls[pointsServer]}-all`;
  }

  if (pointsServer < 4 && pointsReceiver < 4) {
    return `${correspondingCalls[pointsServer]}-${correspondingCalls[pointsReceiver]}`;
  }

  if (Math.abs(pointsServer - pointsReceiver) === 1) {
    return pointsServer > pointsReceiver ? "advantage in" : "advantage out";
  }

  if (Math.abs(pointsServer - pointsReceiver) === 2) {
    return pointsServer > pointsReceiver ? "server won" : "receiver won";
  }
}

module.exports = describeGameScore;
