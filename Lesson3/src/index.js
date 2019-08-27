import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Developer from './index2'

ReactDom.render( <
    App / > ,
    document.querySelector('#web-page')
);

let a = new Developer('alexey', '21');

a.setDeveloper();

console.log(a);