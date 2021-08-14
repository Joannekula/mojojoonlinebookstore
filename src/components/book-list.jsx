import React,{useState,useEffect} from 'react';
import firebase from '../firebase';
import bookimg from '../asserts/atomic-habits.jpg';

function useBooks(){
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        //const unsubscribe = firebase;
        firebase
        .firestore()
        .collection('book')
        .onSnapshot((snapshot)=>{
            const newBooks = snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
            }))
            setBooks(newBooks);
        })
        //return () => unsubscribe()
    },[])
    return books;
}

const BookList = () =>{
    const books = useBooks();
    return (
        <div className="avbooklist">
            {books.map((book)=>
               <div className="bookentry" key={book.id}>
                <table>
                    <tr>
                        <td>
                            <img src={bookimg} className="bookimg"/>
                        </td>
                        <td>
                            <p>{book.book_name+"  "}</p>
                            <p>{book.author}</p>
                            <p><code className="isbn"> {book.isbn}</code></p>
                            <p><code className="price"> {book.price}$</code></p>
                        </td>
                    </tr>
                </table>
              </div>)
        } 
        </div>)
}

export default BookList;