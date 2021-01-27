import React from 'react';
import './daily-update-form.scss';

const DailyUpdateForm = props => {
    console.log(props)
    if (!props.attributes) {return <div></div>}
  return (
    <div className='daily-wrapper'>
      <div>
        <h3>New Update for {}</h3>
      </div>
      <form onSubmit={props.handleSubmit}>
        <div className='daily-field'>
          <input type='number' name='weight' placeholder='Weight' onChange={props.handleChange} value={props.daily_updates.weight}></input>
        </div>
        <div className='daily-field'>
          <input type='checkbox' name='ate_food' onChange={props.handleChange} value={props.daily_updates.ate_food}></input>
          <label>Ate Food</label>
        </div>
        <div className='daily-field'>
          <input type='checkbox' name='drank_water' onChange={props.handleChange} value={props.daily_updates.drank_water}></input>
          <label>Drank Water</label>
        </div>
        <div className='daily-field'>
          <label>Notes</label>
          <textarea name='notes' rows='10' cols='50' onChange={props.handleChange} value={props.daily_updates.notes}></textarea>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DailyUpdateForm;


// <div className='daily-field'>
// <label>Upload Photo</label>
// <input type='file' name='photo' onChange={props.handleChange}></input>
// </div>