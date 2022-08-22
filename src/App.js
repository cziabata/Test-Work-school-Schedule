import { GlobalStyles, AdditionalInfoContainer } from "./styled_components/common";
import * as S from "./styled_components/base_layout";
import { Table } from "./components/table/Table";
import { useFetch } from "./utils/useFetch";
import store from "./store/store";
import { useEffect } from "react";

function App() {

  const {data, isPending, error} = useFetch("http://localhost:8000/data");

  useEffect(()=> {
    data && store.setFifthClassWeeklySchedule(data);
    data && store.setData(data);
  }, [data])

  
  return (
    <S.BaseAppFlexWrapper>
      <GlobalStyles /> { /* Apply global styles created using styled-components library */ }
      { error && <AdditionalInfoContainer>
                    <div>{error}</div>
                    <div>Maybe you forgot start the json server</div>
                    <div>Run "npx json-server --watch data/db.json --port 8000" command</div>
                 </AdditionalInfoContainer> }
      { isPending && <AdditionalInfoContainer>Loading ...</AdditionalInfoContainer> }
      { store.data && 
          <S.BaseAppContainer>
            <Table />
          </S.BaseAppContainer>
      }
    </S.BaseAppFlexWrapper>
  );
}

export default App;
