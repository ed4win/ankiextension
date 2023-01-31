import { printLine } from './modules/print';
import React from 'react';
import { createRoot } from 'react-dom/client';

import Content from './Content';
import './index.css';
import '../../assets/styles/tailwind.css';


console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

// Create new div attached to body
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);
const root = createRoot(newDiv); // createRoot(container!) if you use TypeScript
const popup = React.createElement(Content, {});
root.render(popup);
