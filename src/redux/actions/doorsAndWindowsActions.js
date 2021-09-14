export const FIRST_DOOR_AND_WINDOW_AREA = 'FIRST_DOOR_AND_WINDOW_AREA';
export const SECOND_DOOR_AND_WINDOW_AREA = 'SECOND_DOOR_AND_WINDOW_AREA';
export const THIRD_DOOR_AND_WINDOW_AREA = 'THIRD_DOOR_AND_WINDOW_AREA';
export const FOURTH_DOOR_AND_WINDOW_AREA = 'FOURTH_DOOR_AND_WINDOW_AREA';

export const firstDoorAndWindowArea = (firstAreaDoor, firstAreaWindow) => ({
  type: FIRST_DOOR_AND_WINDOW_AREA,
  firstAreaDoor,
  firstAreaWindow,
});

export const secondDoorAndWindowArea = (secondAreaDoor, secondAreaWindow) => ({
  type: SECOND_DOOR_AND_WINDOW_AREA,
  secondAreaDoor,
  secondAreaWindow,
});

export const thirdDoorAndWindowArea = (thirdAreaDoor, thirdAreaWindow) => ({
  type: THIRD_DOOR_AND_WINDOW_AREA,
  thirdAreaDoor,
  thirdAreaWindow,
});

export const fourthDoorAndWindowArea = (fourthAreaDoor, fourthAreaWindow) => ({
  type: FOURTH_DOOR_AND_WINDOW_AREA,
  fourthAreaDoor,
  fourthAreaWindow,
});
