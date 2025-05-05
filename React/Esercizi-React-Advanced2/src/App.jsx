import { CustomCounter } from "../Components/CustomCounter";
import { CustomInput } from "../Components/CustomInput";
import { GithubUser } from "../Components/GithubUser";
import GithubUsers from "../Components/GithubUsers";
import LocationDisplay from "../Components/LocationDisplay";


function App() {
  return (
    <>
      <GithubUser username="Silviadesideri01" />
      <GithubUsers/>
      <CustomCounter/>
      <CustomInput/>
      <LocationDisplay/>
    </>
  );
}

export default App;
