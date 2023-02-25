import { useRef } from "react"
import { FcLeft } from "react-icons/fc"
import './App.css'

function App() {
  
  const operacion = useRef();
  const resultado = useRef();
  
  //cuando hago click en una tecla, agrego un numero
  const agregar = (e) => {
      let numero = e.target.innerText
      operacion.current.innerHTML += numero
      
  }
  //cuando aprieto AC borro todo lo escrito
  const borrar = () => {
     operacion.current.innerText  = " ";
     resultado.current.innerText = 0;
    
  }
  //con la funcion eval hago la operacion
   const resFinal = () => {
      resultado.current.innerText = eval( operacion.current.innerText)
  } 
  //con slice puedo borrar el ultimo numero escrito
  const borrarNumero = () => {
      operacion.current.innerHTML = operacion.current.innerHTML.slice(0, -1)
  }
  

  return (  
      <>
     <div className="calculadora-background">
         
      <div className="container" >
         
          <div className="display-calculadora" >
              <div className="operacion" ref={ operacion }>

              </div>
              <div className="resultado" ref={ resultado } >

              </div>
          </div>
          <div className="body-calculadora" >

               <div className="row-4-buttons">
                    <button className="button red-color" onClick={ borrar }>
                        AC
                    </button>
                    <button className="button red-color" onClick={ borrarNumero }>
                        <FcLeft style={{ color: "red" }}/> 
                    </button>
                    <button className="button red-color" onClick={ agregar }>
                            .
                    </button>
                    <button className="button red-color" onClick={ agregar }>
                            /
                    </button>
               </div>
               <div className="row-4-buttons">
                    <button className="button" onClick={ agregar }>
                        7
                    </button>
                    <button className="button" onClick={ agregar }>
                        8
                    </button>
                    <button className="button" onClick={ agregar }>
                        9
                    </button>
                    <button className="button red-color" onClick={ agregar }>
                        *
                    </button>
               </div>
               <div className="row-4-buttons">
                    <button className="button" onClick={ agregar }>
                        4
                    </button>
                    <button className="button" onClick={ agregar }>
                        5
                    </button>
                    <button className="button" onClick={ agregar }>
                        6
                    </button>
                    <button className="button red-color" onClick={ agregar }>
                        -
                    </button>
               </div>
               <div className="row-4-buttons">
                    <button className="button" onClick={ agregar }>
                        1
                    </button>
                    <button className="button" onClick={ agregar }>
                        2
                    </button>
                    <button className="button" onClick={ agregar }>
                        3
                    </button> 
                    <button className="button red-color" onClick={ agregar }>
                        +
                    </button>  
               </div>  
               <div className="row-4-buttons">          
                    <button className="button red-color" onClick={ agregar }>
                        (
                    </button> 
                    <button className="button" onClick={ agregar }>
                        0
                    </button> 
                    <button className="button red-color" onClick={ agregar }>
                        )
                    </button> 
                    <button className="button" onClick={ resFinal }>
                        =
                    </button> 
               </div>
             
          </div>
      </div>
      </div>
      </>
      
   );
}

export default App
