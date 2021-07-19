export interface IItem {
  link: string;
  title: string;
  pubDate: string;
  description: string;
  categories: string[];
}
export interface IRSSFeedData {
  items: IItem[];
}
