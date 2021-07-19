export interface IArticle {
  link: string;
  title: string;
  pubDate: string;
}
export interface IArticlesContext {
  articles: IArticle[];
  loading: boolean;
}
