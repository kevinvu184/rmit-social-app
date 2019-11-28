import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
  const { color, name, id } = props;
  return (
    <div>
      <a
        className="pin bounce"
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={name}
      />
      <div className="pulse" />
    </div>
  );
};

export default Marker;