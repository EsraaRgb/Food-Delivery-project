
import axios from 'axios'
import React, { useEffect, useState } from 'react'
export default function People() {
  let baseImgUrl = 'https://image.tmdb.org/t/p/original';
  let [trendingPeople, setTrendingPeople] = useState([]);

  async function getTrendingPeople() {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=834566f81f0a156292a866e4d083327b`);
    setTrendingPeople(data.results);
    console.log(data);
  }
  //https://api.themoviedb.org/3/trending/movie/day?api_key=834566f81f0a156292a866e4d083327b
  useEffect(() => {
    getTrendingPeople();
  }, [])
  return (
    <>
    <div className="row">

<div className='col-md-4 d-flex align-items-center'>
  <div className='w-100'>
    <div className={` my-3 w-25 `}></div>
    <h2>Trending</h2>
    <h2>
      People
    </h2>
    <h2>To Watch Now</h2>
    <p className='secondcolor'>Most Watched People by Day</p>
    <div className={` my-3 w-100 `}></div>
  </div>
</div>

{trendingPeople.map((person, index) =>

  <div className="col-md-2 my-2" key={index}>

    <img className="w-100 mb-2" src={baseImgUrl + person.profile_path} alt='image' />
    <h5>{person.name}</h5>

  </div>)
}

</div>
    
    </>
  )
}
