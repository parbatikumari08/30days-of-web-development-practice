import useFetch from "./useFetch";
import Loading from "./Loading";

export default function BlogRefactor() {
  const { data, loading } = useFetch("/api/blogs");

  if (loading) return <Loading />;

  return data?.map((b, i) => <p key={i}>{b.title}</p>);
}
