import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['Kimetsu'])

const onAddCategory = (newCategory) => {
  if(categories.includes(newCategory)) return;

 setCategories([newCategory, ...categories])
}

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory onNewCategory={ onAddCategory }/>
            {
            categories.map(category => 
                (
                  <GifGrid key={category} category={category}/>
                  // <div key={category}>
                  //   <li>{category}</li>
                  // </div>
                ))
            }
    </>
  )
}
