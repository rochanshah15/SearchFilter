import React, { useEffect, useState } from 'react'
import { data } from './data'
import Card from './card'

function Search() {
  const [store,setStore] = useState(data)
  const [search, setSearch] = useState('')
  useEffect(()=>{
  },[store])

  const getData = (e)=>{
    setSearch(e.target.value)
  }
  let filterout = store.filter((curvalue) => {
    if (!search.trim()) return true; // Show all items if search is empty
  
    const lowerSearch = search.toLowerCase();
  
    return (
      (curvalue.name?.toLowerCase().includes(lowerSearch)) || // Check if name exists before converting
      (curvalue.brand?.toLowerCase().includes(lowerSearch)) || 
      (curvalue.price?.toString().toLowerCase().includes(lowerSearch))
    );
  });
  
  return (
    <>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">EasySearch</a>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={getData} />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<div className="flex flex-wrap gap-4 justify-center">
  {filterout.map((item) => (
    <Card name={item.name} brand={item.brand} price={item.price} src={item.img}/>
  ))}
</div>
</>
  )
}

export default Search