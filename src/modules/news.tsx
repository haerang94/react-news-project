const GET_NEWS = "news/GET_NEWS" as const;

export const getNews = () => ({ type: GET_NEWS });

type newsAction = ReturnType<typeof getNews>;

type newsState = {
  news: Array<any>;
};

const initialState: newsState = {
  news: [],
};

function news(state: newsState = initialState, action: newsAction): newsState {
  switch (action.type) {
    case GET_NEWS:
      return { ...state };
    default:
      return state;
  }
}

export default news;
