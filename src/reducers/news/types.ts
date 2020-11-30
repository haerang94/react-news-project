import * as actions from "reducers/news/actions";
import { ActionType } from "typesafe-actions";
import { Welcome } from "utils/api";

export type NewsAction = ActionType<typeof actions>;

export type NewsState = {
  news: {
    loading: boolean;
    error: Error | null;
    data: Welcome | null;
  };
};
