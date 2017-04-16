import React, { Component } from 'react';

const weatherForm = ({handleChange, dirty, handleSubmit, inputValue}) => {
  return (
    <div className="col-md-12" >
      <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>SEARCH WEATHER</legend>
        <div className="form-group">
          <div className="col-xs-6">
          <input
            placeholder="Type Address Here"
            className="form-control"
            type="text"
            onChange={handleChange}
            value={inputValue}
            />
          </div>
          <div className="col-xs-2">
            <button
              type="submit"
              className="btn btn-success" disabled ={!dirty}>
              SEARCH
            </button>
          </div>
        </div>
 
        </fieldset>
      </form>
    </div>
  )

}
export default weatherForm;
