import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Insert from './pages/insert';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import ViewAll from './pages/viewAll';
import { User } from './models/User';
import axios from 'axios';

interface AppProps {}
interface AppState {
  focusON: string;
  allUsers: User[];
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      focusON: 'viewAll',
      allUsers: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((data: any) => {
        this.setState({ allUsers: data.data });
      })
      .catch((e) => {
        console.log('ERROR: ' + e);
      });
  }

  pushOnArray = (currentUser: User) => {
    //Con la Arrow function funziona mentre senza no, DC.
    const currentUsers = this.state.allUsers.slice();
    currentUsers.push(currentUser);
    this.setState({ allUsers: currentUsers });
  };

  renderView() {
    if (this.state.focusON == 'insert') {
      console.log('all users array ' + this.state);
      return <Insert users={this.pushOnArray} />;
    } else if (this.state.focusON == 'viewAll') {
      console.log(this.state.allUsers);
      return <ViewAll users={this.state.allUsers} />;
    } else {
      return <p> Already I don't know what I have to do</p>;
    }
  }

  render() {
    return (
      <div>
        <div className="tabsOnTop">
          <span className="p-buttonset">
            <Button
              label="Insert"
              icon="pi pi-user-plus"
              onFocus={() => {
                this.setState({ focusON: 'insert' });
              }}
            />
            <Button
              label="View All"
              icon="pi pi-list"
              onFocus={() => {
                this.setState({ focusON: 'viewAll' });
              }}
            />
            <Button
              label="IDK"
              icon="pi pi-times"
              onFocus={() => {
                this.setState({ focusON: 'IDK' });
              }}
            />
          </span>
        </div>

        <div className="content">{this.renderView()}</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
