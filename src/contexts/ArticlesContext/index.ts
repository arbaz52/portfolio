import { createContext } from "react";
import { IArticlesContext } from "./types";

const defaultValue: IArticlesContext = {
  articles: [],
  loading: false,
};

const ArticlesContext = createContext(defaultValue);

export default ArticlesContext;
