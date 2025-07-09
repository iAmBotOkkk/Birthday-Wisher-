



export const GiphyImg = (props) => {
    return(
        <div>
          
            <img src="https://media2.giphy.com/media/l4KibWpBGWchSqCRy/480w_s.jpg?cid=853d7868hbtzw7n6ptm1svx0dr43y3xyzouyluivxr54tpub&ep=v1_
            gifs_search&rid=480w_s.jpg&ct=g" alt="" style={{
                height : "300px" , width : "350px", borderRadius: "1rem"
            }}>{props.images}</img>
            
            <img src="https://media1.giphy.com/media/2Stxs72oZM0kjb91rU/480w_s.jpg?cid=853d7868wewtak7918qhvn5mw86lfuzo3u0n5lf5rlz22xot&ep=v1_gifs_search&rid=480w_s.jpg&ct=g" alt=""style={{
                height : "300px" , width : "350px", borderRadius: "1rem"
            }} >{props.images}</img>
        </div>
    )
    
}
