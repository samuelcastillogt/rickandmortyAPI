import getHash from "../utils/getHash"
import getData from "../utils/getData"
const Character= async()=>{
    const id = await getHash()
    const datos = await getData(id)
    const view = `
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="${datos.image}">
          
        </div>
        <div class="card-content">
        <span class="card-title">${datos.name}</span>
        <h2 class="card-title">Detalles</h2>
        <ul>
        <li>Genero: ${datos.gender}</li>
        <li>Especie: ${datos.species}</li>
        <li>Ubicacion: ${datos.location.name}</li>
        <li>Tipo: ${datos.type}</li>
        <li>Estatus: ${datos.status}</li>
        <li>Episodios: ${datos.episode.length}</li>
        </ul>
      </div>
    </div>
  </div>
    `
    return view
}
export default Character