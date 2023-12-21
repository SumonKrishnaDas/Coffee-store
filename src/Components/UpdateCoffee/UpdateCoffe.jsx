import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffe = () => {


const coffee = useLoaderData();

console.log(coffee)

const {name,quantity,supplier,taste,category,details,photo,_id } = coffee;


    const handleUpdate = event=>{


        event.preventDefault()
        
        
        const form=event.target;
        
        const name=form.name.value;
        
        const quantity=form.quantity.value;
        
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value
        
        const  updateCoffee = {name,quantity,supplier,taste,category,details,photo};

        console.log(updateCoffee);
        console.log(_id)
fetch(`http://localhost:10000/coffee/${_id}`,

{


    method:'PUT',

    headers:{

        'content-type':'application/json'
    },

  body: JSON.stringify(updateCoffee),


}


)

        
//         
        .then(res=>res.json())
        .then(data=> {

console.log(data);
            if(data.modifiedCount){


                Swal.fire({
                    title: 'Sucsess!',
                    text: 'SucessFully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }


        })
        
        .catch(error=> console.log(error.meesage))


    }
    
    return (
        <div className='bg-[#F4F3F0] text-center py-24 px-48'>
  <h4 className='text-3xl font-extralight'>Update Coffee {name}</h4>
        
           <p className='line-break mb-2'>
            
           It is a long established fact that a reader will be distraceted by the readable content of a page when looking at         {'\n'}
           It is a long established fact that a reader will be distraceted by the readable content of a page when looking at         {'\n'}
        
           using Content here.
             
             
              </p>
        
        <form onSubmit={handleUpdate}>
        
        
        {/* from row*/}
        
        <div className='md:flex '>
        
        <div className='form-control md:w-1/2 '>
        
        <label className='label'>
        
        <span className='label-text'>Name</span>
        </label>
        <label className="input-group">
        <input type="text" defaultValue={name}  name='name' placeholder="Enter coffee name"className="input input-bordered input-warning w-full "/>
        
        </label>
        
        
        </div>
        <div className='form-control   md:w-1/2 ml-4' >
        
        
        
        <label className='label'>
        
        <span className='label-text'>Chef</span>
        </label>
        <label className="input-group">
        <input type="text"name='quantity'  defaultValue={quantity}placeholder="Enter coffee chef" className="input input-bordered input-warning w-full "/>
        
        </label>
        
        
        </div>
        
        </div>
        {/* from row*/}
        
        <div className='md:flex '>
        
        <div className='form-control md:w-1/2 '>
        
        <label className='label'>
        
        <span className='label-text'>Supplier</span>
        </label>
        <label className="input-group">
        <input type="text"  name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier"className="input input-bordered input-warning w-full "/>
        
        </label>
        
        
        </div>
        <div className='form-control   md:w-1/2 ml-4' >
        
        
        
        <label className='label'>
        
        <span className='label-text'>Taste</span>
        </label>
        <label className="input-group">
        <input type="text"  name='taste'defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered input-warning w-full "/>
        
        </label>
        
        
        </div>
        
        </div>
        {/* from row*/}
        
        <div className='md:flex '>
        
        <div className='form-control md:w-1/2 '>
        
        <label className='label'>
        
        <span className='label-text'>Category</span>
        </label>
        <label className="input-group">
        <input type="text" name='category' defaultValue={category} placeholder="Enter coffee category"className="input input-bordered input-warning w-full "/>
        
        </label>
        
        
        </div>
        <div className='form-control   md:w-1/2 ml-4' >
        
        
        
        <label className='label'>
        
        <span className='label-text'>Details</span>
        </label>
        <label className="input-group">
        <input type="text" name='details' defaultValue={details}placeholder="Enter coffee details" className="input input-bordered input-warning w-full "/>
        
        </label>
        
        
        </div>
        
        </div>
        {/* from row*/}
        
        <div className=' '>
        
        <div className='form-control md:w-full'>
        
        <label className='label'>
        
        <span className='label-text'>Photo</span>
        </label>
        <label className="input-group">
        <input type="text" name='photo' defaultValue={photo}placeholder="Enter photo url"className="input input-bordered input-warning w-full "/>
        
        </label>
        
        
        </div>
        </div>
        <div className=' '>
        
        <div className='form-control md:w-full'>
        
        <label className='label'>
        
        </label>
        <label className="input-group">
        <input type="submit"  value="Update Coffee"className="bg-[#D2B48C] input  input-warning w-full btndesign "/>
        
        </label>
        
        
        </div>
        </div>
        
        
        
        
        </form>
        
        
        
                </div>
    );
};

export default UpdateCoffe;