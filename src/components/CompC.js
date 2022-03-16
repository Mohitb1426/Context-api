import React from "react";
import { fName, sName } from "../App";

const CompC = () => {
    return (
        <>
            <fName.Consumer>
                {(name) => {
                    return (
                        <sName.Consumer>
                            {(sName) => {
                                return (
                                    <h1>i m {name}{sName}</h1>
                                )
                            }}
                        </sName.Consumer>
                    )
                }}
            </fName.Consumer>
        </>
    );
}
export default CompC;