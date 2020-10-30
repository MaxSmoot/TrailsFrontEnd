import { reactive, toRefs, Ref } from "vue";
import useFetch from "../../../compositions/use-fetch";
export default function useLoadPosts() {
  interface FetchData {
    (): Promise<void>;
  }
  interface FetchType {
    posts: Ref<object>;
    error: Ref<null>;
    fetching: Ref<boolean>;
    fetchData: FetchData;
  }
  const { response, error, fetching, fetchData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );
  fetchData();
  const posts = reactive<FetchType>({
    posts: response,
    error,
    fetching,
    fetchData,
  });
  return { ...toRefs(posts) };
}
