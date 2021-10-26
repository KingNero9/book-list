import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

//Setup variables
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71QKDKxL-jL.jpg',
  title: 'Le Petit Prince', 
  author:'Antoine de Saint-Exupéry'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX258_BO1,204,203,200_.jpg',
  title: 'I Love You to the Moon and Back', 
  author: 'Amelia Hepworth'
}

function BookList () {
  return (
  <section className="bookList">
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
  </section>
  );
}


const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} width='80%'/>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  ); 
};

ReactDOM.render(<BookList/>, document.getElementById('root'));