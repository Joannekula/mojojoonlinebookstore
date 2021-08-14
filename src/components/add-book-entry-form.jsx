import React,{useState} from 'react';
import firebase from '../firebase';

const AddBookEntryForm = () =>{
    const [book_name,setBookName] = useState('');
    const [author,setAuthor] = useState('');
    const [isbn,setISBN] = useState('');
    const [price,setPrice] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [err,setErr] = useState('');

    function onSubmit(e){
        e.preventDefault();
        if(username==="mojojo" && password==="mojojo1234"){
            firebase
            .firestore()
            .collection('book')
            .add({
                book_name:book_name,
                author:author,
                isbn: parseInt(isbn),
                price: parseInt(price)
            })
            .then(()=>{
                setBookName('');
                setAuthor('');
                setISBN('');
                setPrice('');
                setUsername('');
                setPassword('');
                setErr('');
            })
        }else{
            setErr('invalid authentication entry!!!');
            setPassword('');
            setUsername('');
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <table className="bookentryform">
            <tr>
                <td className="labelbef">
                    <label>Book Name</label>
                </td>
                <td>
                    <input type="text" value={book_name} onChange={e=>setBookName(e.currentTarget.value)}/>
                </td>
            </tr>
            <tr>
                <td className="labelbef">
                    <label>Author</label>
                </td>
                <td>
                    <input type="text" value={author} onChange={e=>setAuthor(e.currentTarget.value)}/>
                </td>
            </tr>
            <tr>
                <td className="labelbef">
                    <label>ISBN</label>
                </td>
                <td>
                    <input type="number" value={isbn} onChange={e=>setISBN(e.currentTarget.value)}/>
                </td>
            </tr>
            <tr>
                <td className="labelbef">
                    <label>Price</label>
                </td>
                <td>
                    <input type="number" value={price} onChange={e=>setPrice(e.currentTarget.value)}/>
                </td>
            </tr>
            <tr>
                <td className="labelbef">
                    <label>Username</label>
                </td>
                <td>
                    <input type="text" value={username} onChange={e=>setUsername(e.currentTarget.value)}/>
                </td>
            </tr>
            <tr>
                <td className="labelbef">
                    <label>Password</label>
                </td>
                <td>
                    <input type="password" value={password} onChange={e=>setPassword(e.currentTarget.value)}/>
                </td>
            </tr>
            <tr>
                <td>
                    <button className="buttonclr">Add Book Entry</button>
                </td>
                <td>
                     <p className="warn">{err}</p>
                </td>
            </tr>
            </table>
        </form>
    )
}

export default AddBookEntryForm;