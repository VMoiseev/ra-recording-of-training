import React from "react";
import Step from "./Step";
import moment from "moment";

function RecordTable({ addSteps, onRemove, onEdit }) {
  return (
    <div className="record-table">
      <div className="board-header">
        <p className="board-date">Дата (ДД.ММ.ГГ)</p>
        <p className="board-range">Пройдено км</p>
        <p className="board-action">Действие</p>
      </div>
      <div className="board-body">
        {addSteps
          .sort((a, b) => moment(b.date) - moment(a.date))
          .map((el) => <Step
            key={el.id}
            id={el.id}
            date={el.date}
            range={el.range}
            onRemove={onRemove}
            onEdit={onEdit}
          />)}
      </div>
    </div>
  )
}

export default RecordTable;
