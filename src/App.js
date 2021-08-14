import './App.css';
import firebase from './firebase';
import BookList from './components/book-list';
import AddBookEntryForm from './components/add-book-entry-form';


function App(props) {
  return (
    <div className='App'>
      <div className='navibar'> 
        <div className="navioptions">
          <ul>
              <li class="title"><h2>mojojo online bookstore</h2></li>
              <li class="nv"><a href="#contactus">CONTACT US</a></li>
              <li class="nv"><a href="#addbooks">ADD BOOKS</a></li>
              <li class="nv"><a href="#availablebooks">BOOK </a></li>
              <li class="nv"><a href="#landingpad">HOME</a></li>
          </ul>
        </div>
      </div>

      <div className='landingpad'>
        <p className="slogan">Slogan</p>
        <p className="para">sadassdjsaadjasdah asdadaaasda<br/>asdasfdaafaafasaa</p>
      </div>
        <h1 className="avbookshdr">Available Books</h1>
        <BookList/>       
      <div className='addbooks'>
       
        <table>
          <tr>
              <td id="a">
              <div id="#addbooklit">
                <p className="slogan">
                    ADD BOOK
                </p>
                <p className="para">
                    asdadfafaasfasaasfdafa<br/>asdafaasfasfasfa<br/>asdasda
                </p>
              </div> 
            </td>
            <td>
                <div id="entryform">
                  <AddBookEntryForm/>
               </div>
            </td>
          </tr>
        </table>
      </div>

       <div className='contactus'>
          <div id="howtofindus">
                <p>
                    How to find us?
                </p>
          </div>
          <div id="contactusdetails">
          </div>
       </div>

      <div className='footer'>
          <table id="b">
             <tr>
               <td>
                  sdsdsadfdsa
               </td>
               <td>
                    asdadasdada<br/>
                    asdadasdada<br/>
                    asdadasdada<br/>
                    asdadasdada
               </td>
               <td>
                 asdasfasfasfas
               </td>
               <td>
                   asdadasdada<br/>
                    asdadasdada<br/>
                    asdadasdada<br/>
                    asdadasdada
                </td>
             </tr>
          </table>
      </div>
    </div>
   );
}
export default App;
