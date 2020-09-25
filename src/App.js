import React,{useState,useEffect} from 'react';
import Header from './componentes/Header';
import TweetWindow from'./componentes/TweetWindow';
import {Container, Snackbar} from '@material-ui/core';
import Modalcontainer from './componentes/ModalContainer';
import FormSendtweet from './componentes/FormSendTweet';
import{TWEETS_STORAGES} from './utils/constants';
import ListTweets from './componentes/ListTweets';
import Tweet from './componentes/Tweet';



function App() {
const [toastProps, setToastProps]=useState({
open:false,
text:null

})

//creamos un estado para recuperar todos los tweets
const [allTweets,setAlltTweets]=useState([]);

//hacemos esta variable para que mla pagina se recargue automaticamente
const[reloadTweets,setReloadTweets]=useState(false);
//utilizamos un use efect elcual extraemos los tweets apenas entremos a la pagina
useEffect(() => {
//guradamos en una constante todo lo que tiene el localstorage para despues mostrarlo en la pantalla
  const AllTweetsStored=localStorage.getItem(TWEETS_STORAGES);
  //lo parseamos a a lenguaje JSON antes de usarlos
  const AllTweetsArray=JSON.parse(AllTweetsStored);
  //lo guardamos en la variable y lo mandamos a tweet window que es donde los mostraremos
  setAlltTweets(AllTweetsArray);

// ponemos un estado inicial falso como es el detonate de hacer el refresh tiene que cambiar de estado reload tweets
setReloadTweets(false)

//reloadTweets es el que va cambiar de estado
}, [reloadTweets])


//agregamos la funcion para borrar todos los tweets
const borrar = index => {
  //utilizamos splice para borrar el tweet del array de objetos tweets que hemos creado antes que se llama all tweets
  allTweets.splice(index, 1);
  //utilizamos el hook para asignarle el nuevo valor sin el tweet borrado
  setAlltTweets(allTweets);
  //introducimos el valor con el array nuevo sin el tweet borrado a localStorage Y LO CONVERTIMOS PARA QUE LOCAL STORAGE LO ENTIENDA
localStorage.setItem(TWEETS_STORAGES,JSON.stringify(allTweets));

// al hacer un delete se cambiara el estado de reloadTweests
setReloadTweets(true)

}



  return (
   <Container className="tweet-simulator" maxWidth={false}>
 
<Header></Header>
<TweetWindow setToastProps={setToastProps} allTweets={allTweets} ></TweetWindow>
<ListTweets allTweets={allTweets}  borrar={borrar}/>
<Header></Header>
<Snackbar
anchorOrigin={{vertical:"top",
horizontal:"right"}}
open={toastProps.open}
autoHideDuration={1000}
  message={<span id="message-id">{toastProps.text}</span>}
/>



   </Container>
  );
}

export default App;
