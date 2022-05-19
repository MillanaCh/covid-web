import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LiveResult() {
  const data = useSelector((state) => state.reducers[0]);
  const result = data?.map((el) => Math.max(el.Active));
  console.log(result);
  return (
    <div className="result-container">
      <h3>Top recovered cases</h3>
    </div>
  );
}
