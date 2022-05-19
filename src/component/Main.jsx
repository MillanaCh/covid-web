import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
export default function Main() {
  const data = useSelector((state) => state.reducers[0]);
  return (
    <div>
      {data?.map((el, index) => (
        <div key={index}>
          <h4>{el.Date}</h4>
          <h4>{el.Cases}</h4>
        </div>
      ))}
    </div>
  );
}
