import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {TodoApp} from './components/TodoApp'

ReactDOM.render(<TodoApp/>, document.getElementById('app'));