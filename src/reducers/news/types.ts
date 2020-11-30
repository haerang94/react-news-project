import * as actions from "reducers/news/actions";
import { ActionType } from "typesafe-actions";
import { Welcome } from "types/article";

export type NewsAction = ActionType<typeof actions>;

export type NewsState = {
  news: {
    loading: boolean;
    error: Error | null;
    data: Welcome | null;
  };
};
