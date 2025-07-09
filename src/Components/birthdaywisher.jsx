import { useState } from "react"
import { GiphyImg } from "./list";
export const BdayWish = () => {
  const[bday , setbday] = useState('');

   function generatebday (){
    fetch(`https://api.giphy.com/v1/gifs/search?q=birthday&api_key=C0mRXOw7z3BHXNPODaERoGEQqYj2d74b`)
    .then(async function(res){
        const json = await res.json();
        console.log(json)
        setbday(json);
    })
  }
return(

    <div className="bday">
        <h2>Happy Birthday</h2>
        <div className="btn">
            <input type="text" placeholder="Enter your name" />
            <button onClick={generatebday}>happyBday</button>
            {bday ? (
                <GiphyImg images = {bday.images}/>) : <p></p>}
        </div>
    </div>
)
}