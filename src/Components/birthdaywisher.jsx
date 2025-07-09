import { useState } from "react"
export const BdayWish = () => {
  const[bday , setbday] = useState('');

   function generatebday (){
    fetch("https://api.quotable.io/random")
    .then(async function(res){
        const json = await res.json();
        setbday(json);
    })
  }
return(

    <div className="bday">
        <h2>Happy Birthday</h2>
        <div className="btn">
            <input type="text" placeholder="Enter your name" />
            <button onClick={generatebday}>happyBday</button>
            {bday && (
                <div>

                </div>
            )}
        </div>
    </div>
)
}