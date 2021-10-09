const Contador = () => {
    const [contador, setContador] = React.useState(0);
    const aumentar = () => {
        return setContador(contador + 1)
    }
    const disminuir = () => {
        return setContador(contador - 1)
    }
 
    return (
        <div>
            <h1>Contador: {contador}</h1>
  
            <button class='buttonAumentar' onClick={aumentar}>Aumentar</button>
            <button class='buttonDisminuir' onClick={disminuir}>Disminuir</button>
        </div>

    )
};