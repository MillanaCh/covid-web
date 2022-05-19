import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callToAPI } from "../store/reduxSlice";
export default function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => console.log(state));
  useEffect(() => {
    dispatch(callToAPI());
  }, []);
  return <div>Main</div>;
}
