import React from "react";
import { useNavigate } from "react-router-dom";
import { createGlobalState } from 'react-hooks-global-state';
import { observer } from "mobx-react-lite"
import search from "../state/SearchState";
// const initialState = { search: '' };
// const { useGlobalState } = createGlobalState(initialState);



function Search(props) {
 
  const navigate = useNavigate();
  // const [search, setSearch] = useGlobalState('search');

  const handleChange = (e) => {
    search.setSearch(e.target.value);
    if (e.target.value.length === 0) {
        navigate('/');
    }
    if (e.target.value.length === 1) {
        navigate('/search');
    }
  };

 
  return (
    <input
      autoFocus="autofocus"
      onChange={(e) => handleChange(e)}
      defaultValue=""
      value={search.value}
      type="search"
      placeholder="Search"
    />
  );
}

export default observer(Search);
