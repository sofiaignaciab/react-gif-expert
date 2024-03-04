import React, { useEffect, useState } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { GrifItem } from './GrifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
  console.log({images, isLoading})

  return(
    <>
      <h3>{category}</h3>
      {
        isLoading ? (<h2>Cargando...</h2>) : null
      }
      <div className='card-grid'>
        {
          images.map( (image) =>(
            <GrifItem 
            key={image.id}
            {...image}
            />
          ))
        }
      </div>
    </>
  )

}
