import React from "react";

function FormEntry({ onInputData, form, handleDate, handleRange }) {

  return (
    <form className="form-entry">
      <div className="input-date">
        <label htmlFor="date">Дата ( ДД.ММ.ГГ )</label>
        <input type="date"
          name="date"
          value={form.date}
          onChange={handleDate}
        />
      </div>
      <div className="input-range">
        <label htmlFor="range">Пройдено км</label>
        <input type="number"
          name="range"
          value={form.range}
          onChange={handleRange}
        />
      </div>
      <button className="btn-steps" type="button" onClick={() => onInputData(form.date, form.range, form.id)}>OK</button>
    </form>
  )
}

export default FormEntry;
