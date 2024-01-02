import React from "react";
import Welcome from "./Welcome";
import Code from "./Code";

export default function TernaryOperator() {
  let display = false;
  return display ? <Welcome /> : <Code />;
}
