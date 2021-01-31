import axios from "@/axios/index"
import { posts } from "@/types";
export default async function useLoadPosts() {
  const posts = await axios.get<Array<posts>>("/authenticated/post");
  return posts;
}