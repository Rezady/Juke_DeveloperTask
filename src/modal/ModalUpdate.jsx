import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ModalUpdate(props) {
  const [classId, setClassId] = useState(props.className);
  const [fNameUpdate, setFnameUpdate] = useState("");
  const [phoneUpdate, setPhoneUpdate] = useState("");
  const [positionUpdate, setPositionUpdate] = useState("");
  const [dob, setDob] = useState(new Date());
  const submitDataUpdate = [
    fNameUpdate,
    phoneUpdate,
    dob.toString(),
    positionUpdate,
  ];
  return (
    <div
      class="modal fade"
      id="updateModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Update Employee
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group row">
                <label for="fName" class="col-sm-2 col-form-label">
                  FirstName
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="fNameUpdate"
                    onKeyUp={(e) => setFnameUpdate(e.target.value)}
                  />
                </div>
              </div>

              {/* Last Name */}
              <div class="form-group row">
                <label for="phone" class="col-sm-2 col-form-label">
                  Phone
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="lNameUpdate"
                    onKeyUp={(e) => setPhoneUpdate(e.target.value)}
                  />
                </div>
              </div>

              {/* DOB */}
              <div class="form-group row ">
                <label for="dOB" class="col-sm-2 col-form-label">
                  dob
                </label>
                <div class="col-sm-10">
                  <DatePicker
                    class="form-control float-left"
                    selected={dob}
                    closeOnScroll={true}
                    onChange={(date) => setDob(date)}
                  />
                </div>
              </div>

              {/* Province */}
              <div class="form-group row">
                <label for="province" class="col-sm-2 col-form-label">
                  Province
                </label>
                <div class="col-sm-10">
                  <select class="form-control">
                    <option>Jakarta</option>
                    <option>Jawa Barat</option>
                  </select>
                </div>
              </div>

              {/* City */}
              <div class="form-group row">
                <label for="city" class="col-sm-2 col-form-label">
                  City
                </label>
                <div class="col-sm-10">
                  <select class="form-control">
                    <option>Jakarta Selatan</option>
                    <option>Jakarta Barat</option>
                  </select>
                </div>
              </div>

              {/* Street */}
              <div class="form-group row">
                <label for="street" class="col-sm-2 col-form-label">
                  Street
                </label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="streetUpdate"
                    rows="3"
                  ></textarea>
                </div>
              </div>

              {/* current Position */}
              <div class="form-group row">
                <label for="currPosition" class="col-sm-2 col-form-label">
                  Update Position
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="currPositionUpdate"
                    onKeyUp={(e) => setPositionUpdate(e.target.value)}
                  />
                </div>
              </div>

              {/* upload File */}
              <div class="form-group row">
                <label for="uploadFile" class="col-sm-2 col-form-label">
                  upload File
                </label>
                <div class="col-sm-10">
                  <div class="file btn btn-lg btn-primary position-relative overflow-hidden float-left">
                    Upload
                    <input class="upload-file" type="file" name="file" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class={classId + " btn btn-primary"}
              onClick={() => props.onUpdate(submitDataUpdate)}
              // onClick = {(e) => alert(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id) }
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalUpdate;
