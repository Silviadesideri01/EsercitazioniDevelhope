import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  const { username:userNameParam } = useParams();
  return (
    <div>
      <GithubUser username={userNameParam} />
    </div>
  );
}
