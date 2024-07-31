import React from 'react';
import Header from './components/Header';
import MenuList from './components/MenuList';

function App() {
  const [menuItems, setMenuItems] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/api/Items', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        // console.log(data.docs[0].Photo.url);
        setMenuItems(data.docs);
      })
      .catch(error => console.error(error));
  }, []);
  

  return (
    <div>
      <Header />
      <MenuList items={menuItems}/>
    </div>
  );
}

export default App;
