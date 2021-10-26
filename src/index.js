import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

function BookList () {
  return <section className="bookList">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>;
}

const Book = () => {
  return (
    <article className="book">
      <Image/>
      <Title/>
      <Author/>
    </article>
  ); 
};

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71QKDKxL-jL.jpg" alt="" width='30%'/>
const Title = () => <h1>Le Petit Prince</h1>
const Author = () => <h4>Antoine de Saint-Exupéry</h4>

ReactDOM.render(<BookList/>, document.getElementById('root'));