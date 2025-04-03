import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import "./widget.css";

const render = createRender(() => {
	const [value, setValue] = useModelState<number>("value");
	return (
	    <div style={{height:100, width:100, border:"1px solid red"}} className={"ag-theme-alpine-dark"}>
                <span class="ag-sort-indicator-container" style={{color:"green", height:50, width:50, border:"3px solid orange" }}  data-ref="eSortIndicator">
                    <span data-ref="eSortOrder" class="ag-sort-indicator-icon ag-sort-order ag-hidden" aria-hidden="true">1</span>
                    <span data-ref="eSortAsc" class="ag-sort-indicator-icon ag-sort-ascending-icon" aria-hidden="true">
                    <span class="ag-icon ag-icon-asc" style={{color:"black"}} unselectable="on" role="presentation"></span>
                </span>
	  </span>
	  <span class="ag-icon ag-icon-asc" unselectable="on" role="presentation"></span>
     </div>);
});

export default { render };
