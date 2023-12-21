import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const CoffeeCard = ({coffee}) => {

const {name,quantity,supplier,taste,category,details,photo,_id } = coffee;
console.log(name)


const handledle =_id=>{


  console.log('Button was clicked',_id);

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {


fetch(`http://localhost:10000/coffee/${_id}`,{

method:'DELETE'


})

.then(res=>res.json())
.then(data=>{
  console.log(data)
if(data.deletedCount > 0){


  Swal.fire({
    title: "Deleted!",
    text: "Your Coffee has been deleted.",
    icon: "success"
  });

  
}

})




     
    }
  });
  
}




    return (
        <div>
            
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Movie"/></figure>
  <div className="flex justify-between w-full pr-2 ">

<div>
<h2 className="card-title">{name}</h2>
    <p>{quantity}</p>
    <p> {supplier}</p>
    <p>{taste}</p>


</div>
  
    <div className="card-actions justify-end">
<div className="join join-vertical  space-y-4 ">
  <button className="btn join-item">View</button>
  <Link to={`/updatecoffee/${_id}`}>
  <button className="btn join-item">Edit</button>
  </Link>

  <button 
  onClick={()=>handledle(_id)}
  className="btn join-item bg ">X</button>
</div>

    </div>

  </div>
</div>

        </div>
    );
};

export default CoffeeCard;