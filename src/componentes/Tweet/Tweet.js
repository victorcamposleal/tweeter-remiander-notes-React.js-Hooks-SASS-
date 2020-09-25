import React, { useState } from "react";
import { Card, CardContent } from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone"
import moment from 'moment';
import "./Tweet.scss"


function Tweet(props) {

    // declaramos 
    const { name, tweet, time, index, borrar} = props


    const borrarTweet= ()=> {
    borrar(index)
    }


    return (
        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                        <h5>{name}</h5>

                        <DeleteTwoToneIcon onClick={ borrarTweet} />
                    </div>




                    <p>{tweet}</p>

                    <div className="tweet_date-add-tweet">
                        {moment(time).format('DD/MM/YYYY/HH')}
                    </div>



            </CardContent>
        </Card>
    )
}


export default Tweet;