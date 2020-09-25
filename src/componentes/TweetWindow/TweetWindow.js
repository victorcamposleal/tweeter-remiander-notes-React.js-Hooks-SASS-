import React,{ useState} from "react";
import "./TweetWindow.scss";
import moment from "moment";
import {Fab} from "@material-ui/core";
import AddIcon from"@material-ui/icons/Add"
import ModalContainer from "../ModalContainer"
import FormSendtweet from"../FormSendTweet"
import{TWEETS_STORAGES} from"../../utils/constants";

function TweetWindow(props) {
//mediante props extraemos el valor del objeto que es el mismo que se utiliza para cambiar el estado de props
    const{setToastProps,allTweets}=props

let [isOpenModal,setIsOpenModal]=useState(false);

const OpenModal=()=>{
    setIsOpenModal(true)
}
const closeModal=()=>{
    setIsOpenModal(false)
}

const sendTweet=(event,formValue)=>{
    // para que no se actulize automaticamente
    event.preventDefault()
//traemos los valores del fromulario y lo desestructuramos para poder utilizarlos
    const {name,tweet}=formValue;
    let allTweetsArray=[];
//esta condicional de abajo significa si allTweets tiene contenido osea es true enonces
    if(allTweets){
        allTweetsArray=allTweets
    }


if (!name || !tweet) {

    console.log('Warning its empty')
setToastProps({
    open:true,
    text:'Warning its empty'
})

}
    else{
        //al objeto form value le aniadimos el moment que es la fecha
formValue.time=moment();
//aniadimos el objeto a nuestro array vacio
allTweetsArray.push(formValue)
//guardamos el array objeto en local storage
localStorage.setItem(TWEETS_STORAGES,JSON.stringify(allTweetsArray))
setToastProps({
    open:true,
    text:'sent successfully'
})

closeModal()

    }
    allTweetsArray=[]
};

    return(

<div className="sendtweet">
    <Fab 
    className="sendtweet_open-modal"
    color="primary"
    aria-label="add"
    onClick={OpenModal}>
    <AddIcon/>
    </Fab>
  

<ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>

<FormSendtweet sendTweet={sendTweet}/>

</ModalContainer>
 

</div>
    )
}

export default TweetWindow;