import React, { useContext } from "react";
import CompC from "./CompC";
import { fName, sName } from "../App";

const CompB = () => {
    const firstName = useContext(fName)
    const secondName = useContext(sName)
    return (
        <>
            <h1>i m {firstName} {secondName}=== using useContext hook</h1>
            <CompC />
        </>
    );
}
export default CompB;