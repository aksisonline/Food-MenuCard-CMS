import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ items }) {
  return (
    <div className="menu-list">
      {items.map(item => (
        <MenuItem key={item.id} name={item.title} price={item.Price} img={item.Photo.url}/>
      ))}
    </div>
  );
}

export default MenuList;
