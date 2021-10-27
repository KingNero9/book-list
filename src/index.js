import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

import {books} from './books.js';
//Setup variables



function BookList () {
  return (
  <section className="bookList">
    {books.map((book)=> {
      return <Book key={book.id} book = {book}></Book>;
    })}
  </section>
  );
}


const Book = (props) => {
  const {img, title, author, children} = props.book; //Destructing
  //attribute, eventHandler
  //onClick event, onMouseOver event
  const clickHandler = () => {
    alert ('Hello World');
  };
  const complexExample =(author) => {
    console.log(author);
  };
  return (
    <article className="book" onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={img} width='80%'/>
      <h1 onClick={()=>console.log('title')}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Reference example</button>
      <button type="button" onClick ={() =>complexExample(author)}>More complex example</button>
    </article>
  ); 
};

ReactDOM.render(<BookList/>, document.getElementById('root'));