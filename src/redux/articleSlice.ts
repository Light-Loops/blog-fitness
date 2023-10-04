import { createSlice } from '@reduxjs/toolkit'

export interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  imageUrl: string;
  tags: string[];
  date: number;
  url: string;
  category: string;
}

export interface AppState {
  articles: Article[];
  active: Article | null;
  isSaving: boolean;
}

const initialState: AppState = {
  articles: [],
  active: null,
  isSaving: false
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setActiveArticle: (state, action) =>{
      state.active = action.payload;
    },
    savingArticle: (state) => {
      state.isSaving = false;
    },
    addNewArticle: (state) => {
      state.isSaving = true;
    },
    updateArticle: (state, action) => {
      const updatedArticle = action.payload;
      const articleIndex = state.articles.findIndex(article => article.id === updatedArticle.id);
      if (articleIndex !== -1) {
        state.articles[articleIndex] = updatedArticle;
      }
      state.isSaving = true;
    },
  }
});

export const {setArticles,setActiveArticle,updateArticle, addNewArticle, savingArticle} = articleSlice.actions

export default articleSlice.reducer