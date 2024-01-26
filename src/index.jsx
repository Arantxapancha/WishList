// import React from "react";
// import  ReactDOM  from "react-dom";

// ReactDOM.render(
//     <div>Hola mundo!!!</div>,
//     document.getElementById("root")
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';

const container = document.getElementById('root');

// root es la raíz de la aplicación que se monta en el div#root
const root = createRoot(container);

// renderiza algo en la raíz de la aplicación
root.render(<React.StrictMode><App /></React.StrictMode>);
