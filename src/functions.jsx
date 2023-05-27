import React from "react";

function FunctionalProps({ image, name, price, cat }) {
  return (
    <div className="card" style={{ backgroundColor: '#252152', color: 'White', width:'40vh' ,height:'50VH', padding:'1%', textAlign:'center', margin:'10VH'}}>
    
      <img src={image} alt="all ends"  width="82" height="82"/>
      <h5>{name}</h5>
      <h3>{price}<span> $</span></h3>
      <h4>{cat}</h4>
      <button>Add</button>
    </div>
  );
}

export default FunctionalProps;