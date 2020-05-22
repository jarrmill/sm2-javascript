const sm2 = (quality, reps, previousEaseFactor, previousInterval) => {
  let repetitions = reps;
  let interval;
  let easeFactor;

  if (quality >= 3) {
    switch (repetitions) {
      case 0:
        interval = 1;
        break;
      case 1:
        interval = 6;
        break;
      default:
        interval = Math.round(previousInterval * previousEaseFactor);
        break;
    }

    repetitions += 1;
    // EF':=EF+(0.1-(5-q)*(0.08+(5-q)*0.02))
    easeFactor = previousEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  } else {
    repetitions = 0;
    interval = 1;
    easeFactor = previousEaseFactor;
  }
  if (easeFactor < 1.3) {
    // this is done to prevent hard problems from being prevented too often
    easeFactor = 1.3;
  }

  return {
    interval,
    repetitions,
    easeFactor,
  };
};

module.exports = sm2;
