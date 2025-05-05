import { CustomCounter } from "../Components/CustomCounter";
import { CustomInput } from "../Components/CustomInput";
import { GithubUser } from "../Components/GithubUser";
import GithubUsers from "../Components/GithubUsers";


function App() {
  return (
    <>
      <GithubUser username="Silviadesideri01" />
      <GithubUsers/>
      <CustomCounter/>
      <CustomInput/>
    </>
  );
}

export default App;
