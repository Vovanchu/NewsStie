import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { newsApi } from "../../api/newsApi";
import type { NewsArticle } from "../../types/news";
import type { Category } from "../../types/category";
import type { NewsState } from "../../types/newsStates";

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

export const fetchHeadlines = createAsyncThunk<
  NewsArticle[],
  void,
  { rejectValue: string }
>("news/fetchHeadlines", async (_, { rejectWithValue }) => {
  try {
    const data = await newsApi.getHeadlines();
    return data?.articles ?? [];
  } catch (err) {
    return rejectWithValue(`Failed to fetch headlines ${err}`);
  }
});

export const fetchArticlesByCategory = createAsyncThunk<
  NewsArticle[],
  Category,
  { rejectValue: string }
>("news/fetchByCategory", async (category, { rejectWithValue }) => {
  try {
    const data = await newsApi.getByCategory(category);
    return data?.articles ?? [];
  } catch (err) {
    return rejectWithValue(`Failed to fetch headlines ${err}`);
  }
});

export const fetchSearchResults = createAsyncThunk<
  NewsArticle[],
  string,
  { rejectValue: string }
>("news/fetchSearchResults", async (query, { rejectWithValue }) => {
  try {
    const data = await newsApi.search(query);
    return data?.articles ?? [];
  } catch (err) {
    return rejectWithValue(`Failed to fetch headlines ${err}`);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearArticles: (state) => {
      state.articles = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeadlines.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchHeadlines.fulfilled,
        (state, action: PayloadAction<NewsArticle[]>) => {
          state.articles = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchHeadlines.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchArticlesByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchArticlesByCategory.fulfilled,
        (state, action: PayloadAction<NewsArticle[]>) => {
          state.articles = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchArticlesByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSearchResults.fulfilled,
        (state, action: PayloadAction<NewsArticle[]>) => {
          state.articles = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearArticles } = newsSlice.actions;
export default newsSlice.reducer;
