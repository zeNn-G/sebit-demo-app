import { Post } from "@/types/endpoint";

export function groupByDate(posts: Post[]) {
  return posts.reduce((acc, post) => {
    const date = new Date(post.date);
    const month = date.getMonth();
    const day = date.getDate();
    const key = `Day:${day} Month:${month + 1}`;
    if (acc[key]) {
      acc[key].push(post);
    } else {
      acc[key] = [post];
    }
    return acc;
  }, {} as { [key: string]: typeof posts });
}
