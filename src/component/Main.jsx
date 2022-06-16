import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
export default function Main() {
  const data = useSelector((state) => state.reducers[0]);
  console.log(data);
  return (
    <div className="container">
      {data?.map((el, index) => (
        <>
          <div key={index} className="all-container">
            <div className="left-cont">
              <h4>{el.Date}</h4>
            </div>
            <div className="right-cont">
              <div className="top-part">
                <p>
                  Active <span>{el.Active}</span>
                </p>
                <p>
                  Confirmed <span>{el.Confirmed}</span>
                </p>
              </div>
              <div className="bottom-part">
                <p>
                  Deaths <span>{el.Deaths}</span>
                </p>
                <p>
                  Recovered <span>{el.Recovered}</span>
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
