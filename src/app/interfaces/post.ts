export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  slug: string;
  date_post: string;
  date_udpdate: string;
  photo: string;
  comments: any[];
}
