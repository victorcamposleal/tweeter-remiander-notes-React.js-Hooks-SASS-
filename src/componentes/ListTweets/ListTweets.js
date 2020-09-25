import React,{ useState} from "react";
import {Grid} from "@material-ui/core";
import Tweet from '../Tweet';
import "./ListTweets.scss";

function ListTweets(props) {
const{allTweets, borrar}=props
console.log(allTweets)
// en caso de que no haya ningunn tweet se pone esta condicional para que aparezca en pantalla
if (!allTweets||allTweets.length===0) {
    
    return(
        <div className="list-tweet-empty">

        <p>no hay ningun tweet...</p>
        </div>
    )
}
    
// let allTweetsJXS=allTweets.map(function(tweet){
//     <ul>
// <li>tweet.name</li>
// <li>tweet.tweet</li>
//     </ul>
// });

return(

    // el Grid es un elemento de material ui le damos un tipo como container y un spacing que tendra  que tener
    <Grid container spacing={3} className="list-tweets">
       {allTweets.map((tweet,index)=>(
    <Grid key={index} item xs={4} >
<Tweet name={tweet.name} tweet={tweet.tweet} time={tweet.time}  index={index} borrar={borrar}/>
    
    </Grid >
    ))}
       
        </Grid>
)

}

export default ListTweets