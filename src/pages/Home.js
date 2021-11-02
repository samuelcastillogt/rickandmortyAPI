import getData from "../utils/getData";
const Home = async()=>{
    const characters = await getData()
    const view = `
    <div class="row">
    <div class="col s12 m7">
        ${characters.results.map(character =>
            `
              <div class="card">
                <div class="card-image">
                  <img src="${character.image}">
                  
                </div>
                <div class="card-content">
                <span class="card-title">${character.name}</span>
                <a class="waves-effect waves-light btn" href="#${character.id}">Ver detalles</a>
              </div>
            </div>
            `
            ).join("")

        }
        </div>
    </div>
    `
    return view
}
export default Home