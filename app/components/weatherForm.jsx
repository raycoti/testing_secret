import React, { Component } from 'react';

const weatherForm = ({handleChange, dirty, handleSubmit, handleSelect, inputValue, history}) => {
  let searches = history;
  if(searches.length > 10){
    searches = searches.slice(9);
  }

  return (
    <div className="col-md-12" >
      <form className="form-inline" onSubmit={handleSubmit}>
        <fieldset className="col-md-12">
          <legend>SEARCH WEATHER</legend>
          <div className="form-group">
            <div className="col-md-12">
              <input
                placeholder="Type Address Here"
                className="form-control"
                type="text"
                onChange={handleChange}
                value={inputValue}
                />
            </div>
            </div>
            <div className="form-group">
              <div className="col-md-2">
                <button 
                  type="submit"
                  className="btn btn-default" disabled ={!dirty}>
                  SEARCH
                </button>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <select id="soflow" onChange={handleSelect}>
                  <option value="searches">Previous Searches</option>
                  {searches.map(search=>{
                    return <option value={search}>{search}</option>
                  })}
                </select>
              </div>
            </div>
        </fieldset>
      </form>
    </div>
  )

}
export default weatherForm;
