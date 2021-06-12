import React from "react";
import { IArticlesContext } from "./types";

const defaultValue: IArticlesContext = {
  articles: [],
  loading: false,
};

const ArticlesContext = React.createContext(defaultValue);

export default ArticlesContext;
