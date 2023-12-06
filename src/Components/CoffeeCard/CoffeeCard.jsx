import React from 'react';

const CoffeeCard = ({coffee}) => {

const {name,quantity,supplier,taste,category,details,photo,_id } = coffee;
console.log(name)





    return (
        <div>
            
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{quantity}</p>
    <p> {supplier}</p>
    <p>{taste}</p>
    <div className="card-actions justify-end">


    <div className="join join-vertical  space-y-4 ">
  <button className="btn join-item">View</button>
  <button className="btn join-item">Edit</button>
  <button className="btn join-item">X</button>
</div>


    </div>
  </div>
</div>

        </div>
    );
};

export default CoffeeCard;