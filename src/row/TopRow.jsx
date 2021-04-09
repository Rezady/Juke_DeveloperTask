import React, { useState } from "react";
function TopRow(props) {
  return (
    <div class="row mt-4">
      <div class="col-3 px-0">
        <h3 class="float-left">Filter</h3>
        <div class="dropdown show">
          <a
            class="btn btn-outline-secondary dropdown-toggle px-5"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Name
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a
              class="dropdown-item"
              onClick={(e) => props.onClick(e.target.innerHTML)}
            >
              All
            </a>
            <a
              class="dropdown-item"
              onClick={(e) => props.onClick(e.target.innerHTML)}
            >
              Ardi
            </a>
            <a
              class="dropdown-item"
              onClick={(e) => props.onClick(e.target.innerHTML)}
            >
              Reza
            </a>
            <a
              class="dropdown-item"
              onClick={(e) => props.onClick(e.target.innerHTML)}
            >
              Isni
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRow;
