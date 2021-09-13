export const FIRST_WALL_HEIGHT_AND_WIDTH = 'FIRST_WALL_HEIGHT_AND_WIDTH';
export const SECOND_WALL_HEIGHT_AND_WIDTH = 'SECOND_WALL_HEIGHT_AND_WIDTH';
export const THIRD_WALL_HEIGHT_AND_WIDTH = 'THIRD_WALL_HEIGHT_AND_WIDTH';
export const FOURTH_WALL_HEIGHT_AND_WIDTH = 'FOURTH_WALL_HEIGHT_AND_WIDTH';

export const firstWallHeightAndWidth = (firstWallHeight, firstWallWidth) => ({
  type: FIRST_WALL_HEIGHT_AND_WIDTH,
  firstWallHeight,
  firstWallWidth,
});

export const secondWallHeightAndWidth = (secondWallHeight, secondWallWidth) => ({
  type: SECOND_WALL_HEIGHT_AND_WIDTH,
  secondWallHeight,
  secondWallWidth,
});

export const thirdWallHeightAndWidth = (thirdWallHeight, thirdWallWidth) => ({
  type: THIRD_WALL_HEIGHT_AND_WIDTH,
  thirdWallHeight,
  thirdWallWidth,
});

export const fourthWallHeightAndWidth = (fourthWallHeight, fourthWallWidth) => ({
  type: FOURTH_WALL_HEIGHT_AND_WIDTH,
  fourthWallHeight,
  fourthWallWidth,
});
