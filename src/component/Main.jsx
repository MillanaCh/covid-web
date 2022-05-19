import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { callToAPI } from "../store/reduxSlice";
// import { callData } from "../store/reduxData";
import * as actions from "../store/actions"
export default function Main() {
  const [input, setInput] = useState();
  const [select, setSelect] = useState("Kyrgyzstan");

//   const dispatch = useDispatch();
//   const countryInfo = useSelector((state) => state.country);
//   const dataInfo = useSelector((state) => state);
//   console.log(dataInfo);
//   let countrySlice = [...countryInfo.slice(200)];
  //   let dataSlice = [...dataInfo.slice(200)];
  //   console.log(dataInfo)

//   useEffect(() => {
//     dispatch(callToAPI());
//   }, []);

//   useEffect(() => {
//     dispatch(callData());
//   }, [input]);
//   const handleChange = (e) => {
//     setSelect(e.target.value);
//     localStorage.setItem("selected", JSON.stringify(e.target.value));
//   };

//   useEffect(() => {
//     const lastSelected = JSON.parse(localStorage.getItem("selected"));
//     setSelect(lastSelected);
//   }, [select]);

  return (
    <div>
      <h1>Millana</h1>
    </div>
  );
}
