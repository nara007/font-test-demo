import { CumulioDashboardComponent } from "@cumul.io/react-cumulio-dashboard";
import React, { useRef } from "react";

function CumulioWrapper(props) {
    const ref = useRef(null);
    return (
        <CumulioDashboardComponent
            ref={ref}
            dashboardSlug="siaanalyticsprod"
            loaderSpinnerColor="rgb(0, 81, 126)"
            loaderSpinnerBackground="rgb(236 248 255)"
            {...props}
        />
    );
}

export default CumulioWrapper;
