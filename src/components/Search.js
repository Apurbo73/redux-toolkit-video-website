import React, { useState } from "react";
import searchImg from "../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../features/Filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";
const Search = () => {
  const { search } = useSelector(state => state.filter);
  const [input, setInput] = useState(search);
  const dispatch = useDispatch();
  const match = useMatch("/");
  const navigate = useNavigate();
  // console.log(match);
  //handle form Submit:
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searched(input));
    //if user is not in home page, redirect to home page:
    if (!match) {
      navigate("/");
    }
  };
  return (
    <div>
      <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
        {/* search */}
        <form onSubmit={handleSubmit}>
          <input
            className="outline-none border-none mr-2"
            type="search"
            name="search"
            placeholder="Search"
            // value={input}
            onChange={e => setInput(e.target.value)}
          />
        </form>
        <img
          className="inline h-4 cursor-pointer"
          src={searchImg}
          alt="Search"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Search;
