import React, { Component } from 'react';
import axios from 'axios';

const axiosGitHubGraphQL=axios.create({
  baseURL:'https://api.github.com/graphql',
  headers:{
    Authorization:'bearer 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'
  }
});
const TITLE = 'React GraphQL GitHub Client';

class App extends Component {
    state = {
      path: 'the-road-to-learn-react/the-road-to-learn-react',
    };
   
    componentDidMount() {
      // fetch data
    }
   
    onChange = event => {
      this.setState({ path: event.target.value });
    };
   
    onSubmit = event => {
      // fetch data
   
      event.preventDefault();
    };
   
    render() {
      const { path } = this.state;
   
      return (
        <div>
          <h1>{TITLE}</h1>
   
          <form onSubmit={this.onSubmit}>
            <label htmlFor="url">
              Show open issues for https://github.com/
            </label>
            <input
              id="url"
              type="text"
              value={path}
              onChange={this.onChange}
              style={{ width: '300px' }}
            />
            <button type="submit">Search</button>
          </form>
   
          <hr />
   
          {/* Here comes the result! */}
        </div>
      );
    }
  }
export default App;