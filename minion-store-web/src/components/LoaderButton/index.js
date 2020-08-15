import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import "./style.css";

function LoaderButton({ isLoading, className = "", disabled = false, ...props }) {
    return (
        <Button className={`LoaderButton ${className}`} disabled={disabled} {...props} >
            {isLoading && <CircularProgress className={"spinning"} size={12} />}
            {props.children}
        </Button>
    );
}

export default LoaderButton;