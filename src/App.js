import "./App.css";
import Main from "./component/Main";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./store/actions";
import { act } from "@testing-library/react";
import LiveResult from "./component/LiveResult";

function App() {
  const [input, setInput] = useState();
  const [select, setSelect] = useState("Kyrgyzstan");
  const [data, setData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  let dispatch = useDispatch();
  const fetchData = async () => {
    const response = await fetch(
      `https://api.covid19api.com/live/country/${select}/status/confirmed`
    );
    const data = await response.json();
    let dataSlice = [...data.splice(data.length - 5, 5)];
    setData(dataSlice);
    dispatch({ type: actions.DATA, payload: dataSlice });
    return data;
  };

  useEffect(() => {
    fetchData();
  }, [select]);
  console.log(data);

  const fetchCountries = async () => {
    const response = await fetch(`https://api.covid19api.com/countries`);
    const data = await response.json();
    let countrySlice = [...data.slice(200)];
    setCountryData(countrySlice);
    return data;
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleChange = (e) => {
    setSelect(e.target.value);
    localStorage.setItem("selected", JSON.stringify(e.target.value));
  };

  return (
    <div className="App">
      <header>
        <select
          value={select}
          onChange={(e) => handleChange(e)}
          className="select"
        >
          {countryData.map((el) => (
            <option key={el.Country}>{el.Country}</option>
          ))}
        </select>
      </header>
      <div className="box-container">
        <Main />
        <LiveResult/>
      </div>
    </div>
  );
}

export default App;
