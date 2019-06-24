import React, { Component } from 'react';

class Library extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">Exquisite Corpse</h1>
          <p className="App__intro-text">
            Exquisite corpse, also known as exquisite cadaver (from the original French term cadavre exquis), is a method by which a collection of words or images is collectively assembled. Each collaborator adds to a composition in sequence, either by following a rule (e.g. "The adjective noun adverb verb the adjective noun." as in "The green duck sweetly sang the dreadful dirge.") or by being allowed to see only the end of what the previous person contributed.
          </p>
        </header>
      </div>
    );
  }
}

export default Library;