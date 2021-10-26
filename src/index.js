import React from 'react';
import ReactDOM from 'react-dom';

function BookList () {
  return <section>
    <Book/>
    <Title/>
    <Author/>
  </section>;
}

const Book = () => {
  return <article>
    <Image/>
  </article>
};

const Image = () => <img src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9783/9465/9783946571650.jpg" alt=""/>
const Title = () => <h1>Le petit prince</h1>
const Author = () => <h4>Antoine de Saint-Exupéry</h4>

ReactDOM.render(<BookList/>, document.getElementById('root'));