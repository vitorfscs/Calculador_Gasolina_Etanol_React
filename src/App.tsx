import { useState, type FormEvent } from 'react'
import './App.css'/* import do CSS */
import logoImg from './assets/logo.png' /* import do Logo */

/* 
Calculo deve ser Alcool / Gasolina.
E se o resultado for menor que 0.7 compensa a usar o alcool. 
*/

interface infoProps{
  title: string
  gasolina: string|number
  alcool: string|number
}

function App() { /* Função principal main */
    const [gasolinaInput, setGasolinaInput]= useState(1)
    const [alcoolInput, setAlcoolInput]= useState(1)
    const [info, setInfo] = useState<infoProps>()
  function calcular(event: FormEvent){ /* Função de calculo */
    event.preventDefault(); /* Previne que a página não de F5 sozinha. */


    let calculo = (alcoolInput / gasolinaInput)

    if(calculo <= 0.7){
      setInfo({
        title: "Compensa utilizar Alcool",
        gasolina: moedaInput(gasolinaInput),
        alcool: moedaInput(alcoolInput)
      })
    } else{
      setInfo({
        title: "Compensa utilizar Gasolina",
        gasolina: moedaInput(gasolinaInput),
        alcool: moedaInput(alcoolInput)
      })    }

    console.log(calculo)


  }


    function moedaInput(valor: number) {
      let valorFormatado = valor.toLocaleString("pt-br",
        {
          style: "currency",
          currency: "BRL"
        }
      )
      return valorFormatado
    }

  return ( /* Retorna o HTML da página */
    <div>
      <main className='container'>
        <img
        className='logo' 
        src={logoImg}
        alt="Logo da Vale a pena."
        />
        <h1 className='title'>Qual vale mais a pena?</h1>

        <form action="METHOD" onSubmit={calcular}>
          <label>Alcool (Por Litro)</label>
          <input type="number" 
          className='input'
          placeholder='3.99'
          min="1"
          step="0.01"
          required
          value={alcoolInput}
          onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />


          <label>Gasolina (Por Litro)</label>
          <input type="number"
          className='input'
          placeholder='4.99'
          min="1"
          step="0.01"
          required
          value={gasolinaInput}
          onChange={(e) => setGasolinaInput(Number(e.target.value))}

          />
          
          <input className="button" type='submit' value="Calcular" />
        </form>

      {info && Object.keys(info).length > 0 && (
          <section className='result'>
          <h2 className='result-title'>{info.title} </h2>
          <span>Alcool: {info.alcool}</span>
          <span>Gasolina: {info.gasolina}</span>
        </section>

      )}

      </main>
    </div>
  )
}

export default App
