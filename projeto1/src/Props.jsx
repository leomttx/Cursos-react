// eslint-disable-next-line react/prop-types
function Props({animal}){
    return (
        <div>
            <h1> Miau eu sou {animal ? animal : "Calanguinho"}</h1>
        </div>
    )
}

export default Props;