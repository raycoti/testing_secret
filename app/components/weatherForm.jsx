import React, { Component } from 'react';

const weatherForm = (props) => {
  console.log(props);
  const {handleChange, handleSubmit, inputValue} = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>SEARCH WEATHER</legend>
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            value={inputValue}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button
              type="submit"
              className="btn btn-success">
              SEARCH WEATHER
            </button>
          </div>
        </div> 
        </fieldset>
      </form>
    </div>
  )

}
export default weatherForm;
