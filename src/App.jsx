import React, { useState } from 'react';
import { Button, Card, Input, SearchBar } from '@bendarte/bensbib';
import '../node_modules/@bendarte/bensbib/dist/style.css';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div className="app-container" style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem'
    }}>
      <Card 
        className="card-container _shadow-lg_1hazb_13 _hover-lift_1hazb_18 _large_1hazb_56 _padding-large_1hazb_69"
      >
        <div className="_header_1hazb_79">
          <h1 className="title _title_1hazb_93">Bensbib Demo App</h1>
        </div>
        
        <div className="_content_1hazb_74">
          <div className="section" style={{ marginBottom: '2rem' }}>
            <h3 className="subtitle _subtitle_1hazb_100">Search Component</h3>
            <SearchBar 
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search something..."
              className="_theme-light_lafna_54 _medium_lafna_39"
            />
          </div>

          <div className="section" style={{ marginBottom: '2rem' }}>
            <h3 className="subtitle _subtitle_1hazb_100">Add New Item</h3>
            <div className="input-group _form_lafna_1">
              <div className="_inputWrapper_lafna_7" style={{ flexGrow: 1 }}>
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Add an item..."
                  onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
                />
              </div>
              <Button 
                variant="primary" 
                onClick={handleAddItem}
              >
                Add
              </Button>
            </div>
          </div>

          <div className="section" style={{ marginBottom: '2rem' }}>
            <h3 className="subtitle _subtitle_1hazb_100">Item List</h3>
            {items.length > 0 ? (
              <div className="item-list _flex_1hazb_107 _flex-col_1hazb_111" style={{ gap: '0.75rem' }}>
                {items.map((item, index) => (
                  <Card 
                    key={index} 
                    className="list-item _card_1hazb_1 _shadow_1hazb_9 _hover-glow_1hazb_22 _padding-small_1hazb_61"
                  >
                    {item}
                  </Card>
                ))}
              </div>
            ) : (
              <p className="empty-message" style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
                No items added yet. Add your first item above!
              </p>
            )}
          </div>

          <div className="section">
            <h3 className="subtitle _subtitle_1hazb_100">Button Variants</h3>
            <div className="button-group _flex_1hazb_107 _items-center_1hazb_115" style={{ gap: '1rem', justifyContent: 'center' }}>
              <Button className="_theme-light_1hazb_124">Default</Button>
              <Button className="_theme-primary_1hazb_138" variant="primary">Primary</Button>
              <Button className="_theme-dark_1hazb_131" variant="dark">Dark</Button>
            </div>
          </div>
        </div>

        <div className="_footer_1hazb_86">
          <p style={{ textAlign: 'center', color: '#666' }}>
            Built with Bensbib Components
          </p>
        </div>
      </Card>
    </div>
  );
}

export default App;
