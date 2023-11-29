const Average = ({cake1, cake2, cake3}) => {

    return(
        <>
            <h2>Average Rating</h2>
            <p>Average rating of all cakes: {((cake1+cake2+cake3)/3).toFixed(1)} </p>
            
        </>
    )
}

export default Average;