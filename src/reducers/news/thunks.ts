import { ThunkAction } from "redux-thunk";
import { RootState } from "reducers";
import { NewsAction } from "reducers/news/types";
import { getNews } from "utils/api";
import { getNewsAsync } from "reducers/news/actions";

export function getNewsThunk(): ThunkAction<void, RootState, null, NewsAction> {
  return async (dispatch) => {
    const { request, success, failure } = getNewsAsync;
    dispatch(request());
    try {
      const data = await getNews();
      console.log(data);
      dispatch(success(data));
      // dispatch(success(data));
    } catch (e) {
      console.log(e);
      dispatch(failure(e));
    }
  };
}
