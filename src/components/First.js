import React from "react";
import './style.css';
import config from "../config.json"
import { useState } from "react";
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';


function First(){

//console.log(config.components[0].column[0]);

const [table,settable]=useState(config.components[0].column)




return(
<div>

<div className="ag-theme-alpine  table" style={{ height: 400, width: 700 }}>
      <AgGridReact rowData={config.components[0].row} columnDefs={table}></AgGridReact>
    </div>


</div>
);


}
export default First;