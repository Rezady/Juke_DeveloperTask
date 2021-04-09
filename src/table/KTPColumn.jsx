import React, { useState } from "react";
import ModalView from "../modal/ModalView.jsx";
function KTPColumn(props) {
  return (
    <td>
    <button
      type="button"
      class="btn btn-success float-right mb-3"
      data-toggle="modal"
      data-target="#foto"
    >
      view
    </button>
    {/* modalView */}
    <ModalView />
  </td>

  )
}
export default KTPColumn