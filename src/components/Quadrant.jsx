import React from 'react'
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import classNames from 'classnames';

class Quadrant extends React.PureComponent {
  constructor(){
    super();

    this.state = {
      items: [],
      input: ''
    }
  }

  render() {
    const { title, bgColor } = this.props;
    const { items, input } = this.state;

    const style = {
      backgroundColor: bgColor
    }

    const quadrantStyle = classNames('quadrant')

    return (
      <Card style={style} className={quadrantStyle} title={title}>
        <InputText placeholder="Enter Task" value={input} onChange={(e) => this.setState({input: e.target.value})} onKeyPress={this._enterTask.bind(null, {items, input})}/>
        <ul>
            {this._renderItems(items)}
        </ul>
      </Card>
    )
  }

  _enterTask = (data, e) => {
    const { items, input } = data;
    if(e.key === 'Enter') {
      const newItems = [...items, input];
      this.setState({
        items: newItems,
        input: ''
      })
    }
  }

  _renderItems = (items) => {
    if(items && Array.isArray(items)) {
      return items.map((item) => (
        <li key={`${item}`}>{item}</li>
      ))
    }
  }
}

export default Quadrant
