import React,{useState} from 'react';
import{FormControl,FormGroup,TextField,Button}from"@material-ui/core";
 
import './FormSendTweet.scss'

function FormSendtweet(props) {
    const{sendTweet}=props;
    let [formValue,setFormValue]=useState({
name:"",
tweet:""

    });
//hacemos una funcion a la cual le vamos a pasar un evento
    const onFormChange= event =>{
setFormValue({
    ...formValue,
    [event.target.name]:event.target.value

})

    }




    return(
<div className="form-send-tweet">
    <h2 className="form-send-tweet__title">
       Enviar Tweet
        </h2>

<form className="form-send-tweet__form"
onSubmit={event=>sendTweet(event,formValue)}
onChange={onFormChange}>
<FormControl>
    <FormGroup>
        <TextField
        className="form-send-tweet__form-name"
        type="text"
        name="name"
        placeholder="Your User Name"
        margin="normal"
        />
    </FormGroup>

    <FormGroup>
        <TextField
        className="form-send-tweet__form-textarea"
        rows="6"
        name="tweet"
        multiline
        placeholder="Write your tweet"
        margin="normal"
        />

    </FormGroup>
    <FormGroup>
<Button type="Submit">enviar</Button>

    </FormGroup>




</FormControl>



</form>


</div>


    )
}

export default FormSendtweet; 
