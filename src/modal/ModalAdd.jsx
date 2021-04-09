import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Modal for Add Employee into table
function ModalAdd(props) {
  const [dob, setDob] = useState(new Date());
  const [fName, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const submitData = [fName, phone, dob.toString(), position, props.idxAdd];
  return (
    <div
      class="modal fade"
      id="addModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add New Employee
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
                  Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="fName"
                    onKeyUp={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div class="form-group row">
                <label for="phone" class="col-sm-2 col-form-label">
                  Phone
                </label>
                <div class="col-sm-10">
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    onKeyUp={(e) => setPhone(e.target.value)}
                    required
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
                    id="street"
                    rows="3"
                  ></textarea>
                </div>
              </div>

              {/* current Position */}
              <div class="form-group row">
                <label for="currPosition" class="col-sm-2 col-form-label">
                  current Position
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="currPosition"
                    onKeyUp={(e) => setPosition(e.target.value)}
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
              type="submit"
              class="btn btn-primary"
              onClick={() => props.onClick(submitData)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalAdd;
