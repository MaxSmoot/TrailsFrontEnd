import { reactive, toRefs } from "vue";
/**
 * Fetch data from a given url using the options passed
 * @param {String} url
 * @param {*} options
 */
export default function(url: string, options: object) {
  const state = reactive({
    response: [],
    error: null,
    fetching: false,
  });
  const fetchData = async () => {
    state.fetching = true;
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      state.response = json;
    } catch (errors) {
      state.error = errors;
    } finally {
      state.fetching = false;
    }
  };

  return { ...toRefs(state), fetchData };
}
