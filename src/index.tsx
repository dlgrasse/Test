import { createElement, Suspense } from 'react';
import ReactDOM from "react-dom"

import App from "./JS/components/App"
import SetupRest from "./JS/utils/rest"

ReactDOM.render(<Suspense fallback={<p>Just Chillin</p>}><App/></Suspense>, document.getElementById('app'));
SetupRest();
