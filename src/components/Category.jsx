import React, {useState, useEffect} from 'react';
import axios from 'axios';



export default function Category(props){

  const [product, setProduct] = useState('');

  useEffect(()=>{
    const {id} = props.match.params
    // same as below
    // const categoryId = props.match.params.id;
    // console.log('categoryId:',categoryId);
    console.log('id',id);
    getProductsOfCategory(id);

  },[]);

  // ********** 2) ***********
  // TESTED: click from other page to this category page, the useEffect runs first, also, if changes category, it will run again!
  // axios request to be embedded inside this useEffect()
  // useEffect(()=>{
  //   const categoryId = props.match.params.id;
  //   const {id} = props.match.params
  //   console.log('new categoryId:',categoryId);
  //   console.log('new id',id);
  //
  //   getProductsOfCategory02();
  //
  // },[props.match.params.id]);


  const getProductsOfCategory = ()=>{
    console.log('make axios request!');
    // setProduct('dummy setProduct');

    // const URL = `http://localhost:3000/categories/${this.projectId}`


  }

  // ********** 2) ***********
  // const getProductsOfCategory02 = ()=>{
  //   console.log('make new axios request!');
  //   setProduct('new dummy setProduct');
  // }

  console.log('component re-render');
  console.log('product:', product);


  return(
    <div>
      hello
    </div>
  )
}
