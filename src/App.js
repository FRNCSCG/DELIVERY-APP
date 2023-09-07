import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [seccion, setSeccion] = useState("datos")

  const [encargo, setEncargo] = useState("")
  const [foto, setFoto] = useState(null)
  const [calle, setCalle] = useState("")
  const [numero, setNumero] = useState("")
  const [ciudad, setCiudad] = useState("")
  const [referencia, setReferencia] = useState("")


  const [miCalle, setMiCalle] = useState("")
  const [miNumero, setMiNumero] = useState("")
  const [miCiudad, setMiCiudad] = useState("")
  const [miReferencia, setMiReferencia] = useState("")


  const [total, setTotal] = useState("")

  const [formaPago, setFormaPago] = useState("")
  const [nroTarjeta, setNroTarjeta] = useState("")
  const [nombreTitular, setNombreTitular] = useState("")

  const [vtoTarjeta, setVtoTarjeta] = useState("")
  const [cvc, setCvc] = useState("")
  const [montoEfectivo, setMontoEfectivo] = useState("")

  const [fechaEntrega, setFechaEntrega] = useState("")
  const [antesPosible, setAntesPosible] = useState(false)

  const [prev, setPrev] = useState(null);




  // formato fecha
  const handleExpirationDateChange = (event) => {
    const inputValue = event.target.value;
    // Allow only numeric characters and a maximum length of 5
    const formattedValue = inputValue.replace(/\D/g, '').slice(0, 4);

    // Format the value as MM/YY
    if (formattedValue.length >= 2) {
      const formattedDate = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
      setVtoTarjeta(formattedDate);
    } else {
      setVtoTarjeta(formattedValue);
    }
  };



  // pa que muestre la foto
  useEffect(() => {
    if (foto) {
      setPrev (URL.createObjectURL(foto))
    }
    else {
      setPrev (null)
    }
    
  }, [foto])


  // form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("ahi ta")

    switch (seccion) {
      case "datos":
        setSeccion("pago")
        break;
      case "pago":
        setSeccion("resumen")
        break;
      default:
        break;
    }
  
  };

  const goBack = () => {
    switch (seccion) {
      case "pago":
        setSeccion("datos")
        break;
      case "resumen":
        setSeccion("pago")
        break;
      default:
        break;
    }
  }



  return (
    
    <div className="App">
      
      <div>
        <h1 style={{marginBlock:'1px'}}>Lo que sea!</h1>
      </div>
      

      <div className='container'>
        

        
      
      <form className='form' onSubmit={handleSubmit}>
          <button  type="button" onClick={() => goBack()} className="go-back-button">
            <svg data-darkreader-inline-stroke="" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
      
          {seccion === "datos" && (
            <>
              {/* Encargo */}
              <div className='form-item'>
                <label htmlFor='encargo'><b>Que necesitás?*</b></label>
                <input
                  className='input'
                  id='encargo'
                  name='encargo'
                  value={encargo}
                  onChange={event => setEncargo(event.target.value)}
                  type='text'
                  required
                />
              </div>

              {/* Foto */}
              <div className='form-item'>
                <label htmlFor='foto'>Foto del producto (opcional)</label>
                <input
                  id='foto'
                  name='foto'
                  type='file'
                  accept="image/*"
                  onChange={e => setFoto(e.target.files[0])}
                />
              </div>

              {/* direccion comercio */}
              <div className='form-item'>
                <div><b>Direccion del comercio</b></div>

                <label htmlFor='calle'>Calle</label>
                <input
                  className='input'
                  id='calle'
                  name='calle'
                  type='text'
                  value={calle}
                  onChange={event => setCalle(event.target.value)}
                  required
                />

                <label htmlFor='numero'>Nº</label>
                <input
                  className='input'
                  id='numero'
                  name='numero'
                  type='text'
                  value={numero}
                  onChange={event => setNumero(event.target.value)}
                  required
                />
                
                <label htmlFor='ciudad'>Ciudad</label>
                <select
                  className='input'
                  id='ciudad'
                  name='ciudad'
                  value={ciudad}
                  onChange={event => setCiudad(event.target.value)}
                  required
                >
                  <option value="">Selecciona tu ciudad</option>
                  <option value="Cordoba">Cordoba</option>
                  <option value="Mendiolaza">Mendiolaza</option>
                  <option value="Villa Allende">Villa Allende</option>
                  <option value="Bell Ville">Bell Ville</option>
                </select>

                <label htmlFor='referencia'>Referencia (opcional)</label>
                <input
                  className='input'
                  id='referencia'
                  name='referencia'
                  type='text'
                  value={referencia}
                  onChange={event => setReferencia(event.target.value)}              
                />
              </div>

              {/* domicilio comprador */}
              <div className='form-item'>
                <div><b>Tu domicilio</b></div>

                <label htmlFor='miCalle'>Calle</label>
                <input
                  className='input'
                  id='miCalle'
                  name='miCalle'
                  type='text'
                  value={miCalle}
                  onChange={event => setMiCalle(event.target.value)}
                  required
                />

                <label htmlFor='miNumero'>Nº</label>
                <input
                  className='input'
                  id='miNumero'
                  name='miNumero'
                  type='text'
                  value={miNumero}
                  onChange={event => setMiNumero(event.target.value)}
                  required
                />
                
                <label htmlFor='miCiudad'>Ciudad</label>
                <select
                  className='input'
                  id='miCiudad'
                  name='miCiudad'
                  value={miCiudad}
                  onChange={event => setMiCiudad(event.target.value)}
                  required
                >
                  <option value="">Selecciona tu ciudad</option>
                  <option value="Cordoba">Cordoba</option>
                  <option value="Mendiolaza">Mendiolaza</option>
                  <option value="Villa Allende">Villa Allende</option>
                  <option value="Bell Ville">Bell Ville</option>
                </select>

                <label htmlFor='miReferencia'>Referencia (opcional)</label>
                <input
                  className='input'
                  id='miReferencia'
                  name='miReferencia'
                  type='text'
                  value={miReferencia}
                  onChange={event => setMiReferencia(event.target.value)}
                />
              </div>

              {/* Fecha entrega */}
              <div className='form-item'>
                <div style={{display: 'flex', flexDirection:'row', gap:'60px'}}>
                  <b>Fecha de entrega</b> 
                  <div>
                    <input type="checkbox" checked={antesPosible} onChange={() => setAntesPosible(!antesPosible)}/>          
                    <label>Lo antes posible</label>
                  </div>
                </div>
                <input className='input' type='date' required disabled={antesPosible} value={fechaEntrega} onChange={event => setFechaEntrega(event.target.value)}/>
              </div>
            </>

          )}

          {seccion === "pago" && (
            <>
              {/* Pago */}
              <div className='form-item'>
                <div><b>Forma de pago</b></div>
                <div className='radio-group'>
                  <div>
                    <input
                      type="radio"
                      id="tarjeta"
                      name="tipopago"
                      value="tarjeta"
                      onChange={event => setFormaPago(event.target.value)}
                    />
                    <label htmlFor="tarjeta">Tarjeta debito/credito</label>
                  </div>
                
                  <div>
                    <input
                      type="radio"
                      id="efectivo"
                      name="tipopago"
                      value="efectivo"
                      onChange={event => setFormaPago(event.target.value)}
                    />
                    <label htmlFor="efectivo">Efectivo</label>
                  </div>
                </div>
                
                {formaPago === "efectivo" && 
                  <>
                    <label htmlFor='montoEfectivo'>Monto</label>
                    <input
                      className='input'
                      id='montoEfectivo'
                      name='montoEfectivo'
                      type='text'
                      value={montoEfectivo}
                      onChange={event => setMontoEfectivo(event.target.value)}
                      pattern="\d*"
                      required
                    />
                  </>
                }   

                {formaPago === "tarjeta" && 
                  <>
                    <label htmlFor='nroTarjeta'>Numero tarjeta</label>
                    <input
                      className='input'
                      id='nroTarjeta'
                      name='nroTarjeta'
                      type='text'
                      value={nroTarjeta}
                      onChange={event => setNroTarjeta(event.target.value)}
                      pattern="\d*"
                      maxLength="16"
                      minLength="16"
                      required

                    />

                    <label htmlFor='nombreTitular'>Nombre del titular</label>
                    <input
                      className='input'
                      id='nombreTitular'
                      name='nombreTitular'
                      type='text'
                      value={nombreTitular}
                      onChange={event => setNombreTitular(event.target.value)}
                      required
                    />

                    <div style={{display: 'flex', flexDirection:'row', gap:'60px', width:'300px'}}>
                      <div style={{width:'50%'}}>
                        <label htmlFor='vtoTarjeta'>Fecha Venc.</label>
                        <input
                          className='input'
                          id='vtoTarjeta'
                          name='vtoTarjeta'
                          style={{ width: '100%' }}
                          type='text'
                          placeholder='MM/YY'
                          value={vtoTarjeta}
                          onChange={handleExpirationDateChange}
                          required
                        />
                      </div>
                      
                      <div style={{width:'30%'}}>
                        <label htmlFor='cvc'>CVC</label>
                        <input
                          className='input'
                          id='cvc'
                          name='cvc'
                          style={{width:'100%'}}
                          value={cvc}
                          onChange={event => setCvc(event.target.value)}
                          type='text'
                          pattern="\d*"
                          maxLength="3"
                          minLength="3"
                          required
                        />
                      </div>
                    </div>
                  </>
                } 
              </div>
            </>

          )}

          {seccion === "resumen" && (
            <div className='summary'> 
              <h2>Resumen del pedido</h2>
              <div>Encargo: {encargo}</div>
              <div style={{display:'flex', flexDirection:'column'}}>
                Foto:
                <img src={prev} alt={foto} style={{height: "200px", width: "200px", objectFit:'cover', marginInline:'auto'}} />
              </div>
              <div>Domicilio del comercio: {calle} {numero}, {ciudad}</div>
              <div>Referencia: {referencia}</div>
              <div>Mi domicilio: {miCalle} {miNumero}, {miCiudad}</div>
              <div>Referencia: {miReferencia}</div>
              <div>Forma de Pago: {formaPago}</div>
              {/* <div>Número de Tarjeta: {nroTarjeta}</div> */}
              {/* <div>Nombre del Titular: {nombreTitular}</div>
              <div>Vencimiento de Tarjeta: {vtoTarjeta}</div> */}
              {/* <div>CVC: {cvc}</div> */}
              <div>Monto en Efectivo: {montoEfectivo}</div>
              <div>Total: {total}</div>
              <div>Fecha de Entrega: {antesPosible ? 'Lo antes posible' : fechaEntrega}</div>
            </div>
          )}

          {seccion !== "resumen" && (
            /* Boton submit */
            <div className='form-item'>
              <button type='submit'>ACEPTAR</button>          
            </div>
          )}
      </form>
      
      <div style={{height:'30px'}}/>

        {/* Total pagar */}
        <div className='total'>
          <div>TOTAL A PAGAR: {total}</div>
        </div>
      </div>
        
        

    

    </div>
  );
}

export default App;
