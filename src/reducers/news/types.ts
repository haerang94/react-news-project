import * as actions from "reducers/news/actions";
import { ActionType } from "typesafe-actions";
import { Article } from "types/article";

export type NewsAction = ActionType<typeof actions>;

export type NewsState = {
  news: {
    loading: boolean;
    error: Error | null;
    data: Article[] | null;
  };
  text: string | null;
  totalResults: number | null;
};
