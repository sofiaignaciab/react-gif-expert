import React, { useEffect } from 'react'
import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async() => {
    const newImages = await getGifs(category); //llama a la funcion getGifs
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(
    () => { getImages(); }, []
  )

  return{
    images,
    isLoading
  }
}
