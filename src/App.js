import React from 'react';
import List from './List';
import store from './store';
import './App.css';

function App() {
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        
        {/* Copy/paste */}
        {store.lists.map(list => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])} 
          />
        ))}
      
      </div>
    </main>
  );
}

export default App;