import axios from "@/axios/index"
// eslint-disable-next-line
import { Posts } from "@/types";
export default async function useLoadPosts() {
  const posts = await axios.get<Array<Posts>>("/authenticated/post");
  return posts;
}