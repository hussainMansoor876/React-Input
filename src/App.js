import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      obj: {},
      numOfLinks: 0,
      createLink: false,
      disable: true,
      list: []
    }
  }

  process(value) {
    this.setState({ numOfLinks: value, disable: value ? false : true })
  }

  submit() {
    let { list, numOfLinks } = this.state
    let obj1 = Object.assign({}, this.state.obj);
    for (var i = 0; i < numOfLinks; i++) {
      list[i] = i
      obj1[`label${i + 1}`] = ''
    }
    console.log(obj1)
    this.setState({ createLink: true, obj: obj1 })
  }

  changeObject(e) {
    console.log(e.name)
    const { name, value } = e
    let obj1 = Object.assign({}, this.state.obj);
    obj1[name] = value
    this.setState({ obj: obj1 });
  }

  render() {
    const { numOfLinks, obj, createLink, disable, list } = this.state
    return (
      <div>
        <center>
          <div className="form-group form-inline container" style={{ paddingLeft: '20%', paddingTop: '25px' }} >
            <input style={{ width: '50%', marginRight: '5px' }} type="number" value={numOfLinks} onChange={(e) => this.process(e.target.value)} className="form-control" />
            <button disabled={disable} className="btn btn-success" onClick={() => this.submit()}>Submit</button>
          </div>
          {createLink &&
            <form id="regForm">
              {list.map((v, i) => {
                return <div className="form-group form-inline" key={i}>
                  <label>Label {i + 1}&nbsp;&nbsp;&nbsp;</label>
                  <input style={{ width: '70%' }} value={obj[`label${i + 1}`]} name={`label${i + 1}`} onChange={(e) => this.changeObject(e.target)} className="form-control" />
                </div>
              })}
            </form>}
        </center>
      </div>
    );
  }
}

export default App;