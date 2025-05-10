import { CustomCounter } from "../Components/CustomCounter";
import { CustomInput } from "../Components/CustomInput";
import { FilteredList } from "../Components/FilteredList";
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
      <FilteredList list={{id: 1, nome: 'Luca', età: 20 }}/>
    </>
  );
}

export default App;
