export const FIRST_DOOR_IS_VALID = 'FIRST_DOOR_IS_VALID';
export const SECOND_DOOR_IS_VALID = 'SECOND_DOOR_IS_VALID';
export const THIRD_DOOR_IS_VALID = 'THIRD_DOOR_IS_VALID';
export const FOURTH_DOOR_IS_VALID = 'FOURTH_DOOR_IS_VALID';

export const FIRST_WINDOW_IS_VALID = 'FIRST_WINDOW_IS_VALID';
export const SECOND_WINDOW_IS_VALID = 'SECOND_WINDOW_IS_VALID';
export const THIRD_WINDOW_IS_VALID = 'THIRD_WINDOW_IS_VALID';
export const FOURTH_WINDOW_IS_VALID = 'FOURTH_WINDOW_IS_VALID';

export const firstDoorIsValid = (firstDoorIsValid) => ({
  type: FIRST_DOOR_IS_VALID,
  firstDoorIsValid,
});

export const secondDoorIsValid = (secondDoorIsValid) => ({
  type: SECOND_DOOR_IS_VALID,
  secondDoorIsValid,
});

export const thirdDoorIsValid = (thirdDoorIsValid) => ({
  type: THIRD_DOOR_IS_VALID,
  thirdDoorIsValid,
});

export const fourthDoorIsValid = (fourthDoorIsValid) => ({
  type: FOURTH_DOOR_IS_VALID,
  fourthDoorIsValid,
});

export const firstWindowIsValid = (firstWindowIsValid) => ({
  type: FIRST_WINDOW_IS_VALID,
  firstWindowIsValid,
});

export const secondWindowIsValid = (secondWindowIsValid) => ({
  type: SECOND_WINDOW_IS_VALID,
  secondWindowIsValid,
});

export const thirdWindowIsValid = (thirdWindowIsValid) => ({
  type: THIRD_WINDOW_IS_VALID,
  thirdWindowIsValid,
});

export const fourthWindowIsValid = (fourthWindowIsValid) => ({
  type: FOURTH_WINDOW_IS_VALID,
  fourthWindowIsValid,
});
