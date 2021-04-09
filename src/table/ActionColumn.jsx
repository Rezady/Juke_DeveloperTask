import React, { useState } from "react";
import ModalUpdate from "../modal/ModalUpdate.jsx";
function ActionColumn(props) {
  return (
    <td
      id={props.idComponent}
      // onClick={(e) => alert(e.target.nodeName)}
    >
      <button
        type="button"
        class="btn btn-primary mr-3"
        data-toggle="modal"
        data-target="#updateModal"
      >
        Update
      </button>
      <ModalUpdate keyModal={props.idComponent} onUpdate={(valSubmitUpdate) => props.onUpdate(valSubmitUpdate)} />
      <button
        type="button"
        class="btn btn-danger"
        onClick={(e) => props.onDelete(e)}
      >
        Delete
      </button>
    </td>
  );
}
export default ActionColumn;
