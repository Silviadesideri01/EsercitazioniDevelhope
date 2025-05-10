import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
export function useGithubUser() {
  const { data, error, setLoading } = useSWR(
    `https://api.github.com/users`,
    fetcher
  );
  return (
    <div>
      {!data && !error && <h3>{setLoading} Loading...</h3>}
      {error && <h1>Error!</h1>}
      {data && !error && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
      ;
    </div>
  );
}
