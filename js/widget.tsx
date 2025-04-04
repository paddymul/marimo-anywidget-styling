import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";

const render = createRender(() => {
	const [value, setValue] = useModelState<number>("value");
	return (
	    <div className={"ag-theme-alpine-dark"}>
                <span class="ag-sort-indicator-container" data-ref="eSortIndicator">
                    <span data-ref="eSortOrder" class="ag-sort-indicator-icon ag-sort-order ag-hidden" aria-hidden="true">1</span>
                    <span data-ref="eSortAsc" class="ag-sort-indicator-icon ag-sort-ascending-icon" aria-hidden="true">
                    <span class="ag-icon ag-icon-asc"  unselectable="on" role="presentation"></span>
                </span>
	  </span>
	  <span class="ag-icon ag-icon-asc" unselectable="on" role="presentation"></span>
     </div>);
});

export default { render };
