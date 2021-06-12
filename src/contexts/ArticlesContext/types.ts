export interface IArticle {
	link: string;
	title: string;
	content: string;
}
export interface IArticlesContext {
	articles: IArticle[];
	loading: boolean;
}