import React from "react";
import {createRoot} from "react-dom/client";
export {App} from './App';

const root = createRoot(document.getElementById("Container"));
root.render(<App/>);