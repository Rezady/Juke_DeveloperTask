import "./App.css";
import React, { useState } from "react";

import ModalAdd from "./modal/ModalAdd.jsx";
import TopRow from "./row/TopRow.jsx";

import ActionColumn from "./table/ActionColumn.jsx";
import KTPColumn from "./table/KTPColumn.jsx";
import TitleTable from "./table/TitleTable.jsx";

function App() {
  const [arr, setArr] = useState([
    ["Ardi", "081225452652", "0", "staff it", 0],
    ["Reza", "082341342", "5", "QA", 1],
    ["Ardi", "01221313", "1", "QA", 2],
    ["Isni", "021213431", "2", "QC", 3],
  ]);
  const lengthArr = arr.length;
  const [arrFilter, setArrFilter] = useState([]);
  const [flagFilter, setFlagFilter] = useState(false);
  const arrData = flagFilter === false ? arr.slice() : arrFilter.slice();

  return (
    <div className="App">
      {console.log("arr ", arr)}
      <div class="container">
        <TopRow
          onClick={(valName) => {
            if (valName === "All") {
              setFlagFilter(false);
            } else {
              const arrNew = arr.slice();
              setArrFilter(arrNew.filter((val) => val[0] === valName));
              setFlagFilter(true);
            }
          }}
        />
        <div class="row">
          <div class="col">
            <button
              type="button"
              class="btn btn-info float-right mb-2"
              data-toggle="modal"
              data-target="#addModal"
            >
              Add Employee
            </button>
            <ModalAdd
              onClick={(valInput) => setArr([...arr, valInput])}
              idxAdd={lengthArr}
            />
          </div>

          <table class="table table-striped">
            <TitleTable />
            <tbody>
              {arrData.map((val, key) => (
                <tr id={key}>
                  <th>{val[0]}</th>
                  <td>{val[1]}</td>
                  <td>{val[2]}</td>
                  <td>{val[3]}</td>
                  <KTPColumn />
                  <ActionColumn
                    order={val[4]}
                    idComponent={key}
                    onUpdate={(valUpdate) =>
                      setArr(
                        arr.map((val, key) =>
                          key === 2 ? (val = valUpdate) : (val = val)
                        )
                      )
                    }
                    onDelete={(e) =>
                      setArr(
                        arr.filter((val) => val !== arr[e.target.parentNode.id])
                      )
                    }
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
