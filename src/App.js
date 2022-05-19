import "./App.css";
import Main from "./component/Main";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState();
  const [select, setSelect] = useState("Kyrgyzstan");
  const [data, setData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      `https://api.covid19api.com/country/kyrgyzstan/status/confirmed/live`
    );
    const data = await response.json();
    setData(data);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  const fetchCountries = async () => {
    const response = await fetch(`https://api.covid19api.com/countries`);
    const data = await response.json();
    setCountryData(countryData);
    return data;
  };

  useEffect(() => {
    fetchCountries();
  }, [select]);
  console.log(countryData);

  const handleChange = (e) => {
    setSelect(e.target.value);
    localStorage.setItem("selected", JSON.stringify(e.target.value));
  };

  // const countryInfo = useSelector((state) => state.country);
  // const dataInfo = useSelector((state) => state);
  // console.log(dataInfo);
  // let countrySlice = [...countryInfo.slice(200)];

  return (
    <div className="App">
      <div>
        <select
          value={select}
          onChange={(e) => handleChange(e)}
          className="select"
        >
          {/* {countrySlice.map((el) => (
            <option key={el.Country}>{el.Country}</option>
          ))} */}
        </select>
      </div>
      <Main />
    </div>
  );
}

export default App;
