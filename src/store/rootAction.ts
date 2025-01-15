import type { ActionType } from 'typesafe-actions';
import * as weather from './weatherActions';

const rootActions = {
  weather,
};

export type RootAction = ActionType<typeof rootActions>;

export default rootActions;
