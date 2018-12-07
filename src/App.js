import React, { Component } from 'react';
import Quadrant from './components/Quadrant';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="life-organizer">
        <Quadrant title="Important & Urgent" className="quadrant" bgColor="crimson" />
        <Quadrant title="Not Important but Urgent" className="quadrant" bgColor="aqua" />
        <Quadrant title="Important & Not Urgent" className="quadrant" bgColor="salmon" />
        <Quadrant title="Not Important & Not Urgent" className="quadrant" bgColor="lawngreen" />
      </div>
    );
  }
}

export default App;
