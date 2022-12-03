import { useState } from "react";
import { toast } from "react-toastify";

export default function CreateListing() {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    latitude: 0,
    longitude: 0,
    images: {}
  });
  const {type, name, bedrooms, bathrooms, parking, furnished, address, description, offer, regularPrice, discountedPrice, latitude, longitude, images} = formData;


  function onChange(e) {
    let boolean = null;
    if(e.target.value === "true"){
      boolean = true;
    }
    if(e.target.value === "false"){
      boolean = false;
    }
    //files
    if(e.target.files){
      setFormData((prevState)=>({
        ...prevState,
        images: e.target.files
      }));
    }
    // text/boolean/number
      if(!e.target.files){
        setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  function onSubmit(e) {
  e.preventDefault();
  setLoading(true);
  if(discountedPrice >= regularPrice) {
    setLoading(false)
    toast.error('Discounted price must be a reduced price')
    return;
  }
  if(images.length > 6){
    setLoading(false);
    toast.error("Max of 6 images allowed")
    return;
  }
  let geolocation = {}
  let location
  if(geolocationEnabled){
    
  }
  }

  if(loading){
    return (<div>Loading...</div>)
  }

  return (
    <main className="max-w-md px-4 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold ">Create a Listing</h1>
      <form onSubmit={onSubmit}>
       
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex">
          <button type="button" id="type" value="rent" onClick={onChange}
          className={`px-7 py-3 font-medium text-sm uppercase shadow-lg rounded-lg hover:shadow-xl 
          focus:shadow-xl transition duration-200 ease-in-out w-full ${
            type === "rent" ? "bg-white text-gray-400" : " bg-blue-200 "
          }`}>
            Sell
          </button>
          <button type="button" id="type" value="sale" onClick={onChange}
          className={`px-7 py-3 font-medium text-sm uppercase shadow-lg rounded-lg hover:shadow-xl 
          focus:shadow-xl transition duration-200 ease-in-out w-full ${
            type === "sale" ? "bg-white text-gray-400":"  bg-blue-200 "
          }`}>
            Rent
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Name</p>
        <input type="text" name="name" value={name} id="name" onChange={onChange} placeholder="Name" maxLength="32" minLength="10" required
        className="shadow-lg rounded-lg hover:shadow-xl text-xl text-gray-700 border border-gray-300 transition duration-200 ease-in-out
          focus:shadow-xl focus:text-gray-800  focus:bg-white w-full focus:border-gray-100 mb-6" />
          <div className="flex space-x-10 mb-6">
            <div>
              <p className="text-lg font-semibold">Beds</p>
              <input type="number" name="" id="bedrooms" value={bedrooms} onChange={onChange} min="1" max="50" required
              className="px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-gray-100 mb-6 text-center w-full"/>
            </div>
            <div>
              <p className="text-lg font-semibold">Baths</p>
              <input type="number" name="" id="bathrooms" value={bathrooms} onChange={onChange} min="1" max="50" required
              className="px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-gray-100 mb-6 text-center w-full"/>
            </div>
            
          </div>

          <p className="text-lg mt-6 font-semibold">Parking Spot</p>
        <div className="flex">
          <button type="button" id="parking" value={true} onClick={onChange}
          className={`px-7 py-3 font-medium text-sm uppercase shadow-lg rounded-lg hover:shadow-xl 
          focus:shadow-xl transition duration-200 ease-in-out w-full ${
            !parking ? "bg-white text-gray-400" : " bg-blue-200 "
          }`}>
            Yes
          </button>
          <button type="button" id="parking" value={false} onClick={onChange}
          className={`px-7 py-3 font-medium text-sm uppercase shadow-lg rounded-lg hover:shadow-xl 
          focus:shadow-xl transition duration-200 ease-in-out w-full ${
            parking ? "bg-white text-gray-400" : " bg-blue-200 "
          }`}>
            No
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex">
          <button type="button" id="furnished" value={true} onClick={onChange}
          className={`px-7 py-3 font-medium text-sm uppercase shadow-lg rounded-lg hover:shadow-xl 
          focus:shadow-xl transition duration-200 ease-in-out w-full ${
            !furnished ? "bg-white text-gray-400" : " bg-blue-200 "
          }`}>
            Yes
          </button>
          <button type="button" id="furnished" value={false} onClick={onChange}
          className={`px-7 py-3 font-medium text-sm uppercase shadow-lg rounded-lg hover:shadow-xl 
          focus:shadow-xl transition duration-200 ease-in-out w-full ${
            furnished ? "bg-white text-gray-400" : " bg-blue-200 "
          }`}>
            No
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea type="text" name="address" value={address} id="address" onChange={onChange} placeholder="Address..." minLength="10"  required
        className="shadow-lg rounded-lg hover:shadow-xl text-xl text-gray-700 border border-gray-300 transition duration-200 ease-in-out
          focus:shadow-xl focus:text-gray-800  focus:bg-white w-full focus:border-gray-100 mb-2" />

          {!geolocationEnabled && (
            <div className="flex space-x-10 justify-start mb-6">
              <div>
                <p>Latitude</p>
                <input type="number" min="-90" max="90" name="" id="latitude" value={latitude} onChange={onChange} required className="w-full px-4 py-2 
                text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 
                ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center " />
              </div>
              <div>
                <p>Longitude</p>
                <input type="number" min="-180" max="180" name="" id="longitude" value={longitude} onChange={onChange} required className="w-full px-4 py-2 
                text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 
                ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center " />
              </div>
            </div>
          )}

<p className="text-lg font-semibold">Description</p>
        <textarea type="text" name="description" value={description} id="description" onChange={onChange} placeholder="description..." minLength="10"  required
        className="shadow-lg rounded-lg hover:shadow-xl text-xl text-gray-700 border border-gray-300 transition duration-200 ease-in-out
          focus:shadow-xl focus:text-gray-800  focus:bg-white w-full focus:border-gray-100 mb-2" />


<p className="text-lg font-semibold">Offer</p>
        <div className="flex mb-6">
          <button type="button" id="offer" value={true} onClick={onChange}
          className={`px-7 py-3 font-medium text-sm uppercase shadow-lg rounded-lg hover:shadow-xl 
          focus:shadow-xl transition duration-200 ease-in-out w-full ${
            !offer ? "bg-white text-gray-400" : " bg-blue-200 "
          }`}>
            Yes
          </button>
          <button type="button" id="offer" value={false} onClick={onChange}
          className={`px-7 py-3 font-medium text-sm uppercase shadow-lg rounded-lg hover:shadow-xl 
          focus:shadow-xl transition duration-200 ease-in-out w-full ${
            offer ? "bg-white text-gray-400" : " bg-blue-200 "
          }`}>
            No
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div>
            <p className="text-lg font-semibold">Regular Price</p>
           <div  className="flex w-full justify-center items-center">
            <input type="number" id="regularPrice" value={regularPrice} onChange={onChange} min="50" max="400000000" required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-lg 
            transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-300 text-center space-x-6 " />
                {type === "rent" && (
             <div>
              <p className="text-md w-full whitespace-nowrap">$ / Month</p>
             </div>
            )}
            </div>
        
          </div>
        </div>

        {offer && (
                <div className="flex items-center mb-6">
                <div>
                  <p className="text-lg font-semibold">Discounted Price</p>
                 <div  className="flex w-full justify-center items-center">
                  <input type="number" id="discountedPrice" value={discountedPrice} onChange={onChange} min="50" max="400000000" required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-lg 
                  transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-300 text-center space-x-6 " />
                      {type === "rent" && (
                   <div>
                    <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                   </div>
                  )}
                  
                  </div>
              
                </div>
              </div>
        ) }

<div className="mb-6">
                    <p className="text-lg font-semibold">Images</p>
                    <p className="text-gray-400">The first image will be the cover (max 6)</p>
                    <input type="file" name="" id="images" onChange={onChange} accept=".jpg,.png,.jpeg,.gif" multiple required
                    className="w-full px-3 py-2 text-gray-400 rounded transition durantion-200 ease-in-out focus:bg-white focus:border-slate-600"/>
                  </div>
                  <button type="submit" className="text-white mb-5 w-full px-7 py-3 bg-blue-600 font-medium text-sm uppercase rounded-lg shadow-lg
                  hover:bg-blue-700 hover:bg-blue-700 active:bg-blue-800 shadow-xl transition duration-200 ease-in-out" >Create Listing</button>

      </form>
    </main>
  )
}
