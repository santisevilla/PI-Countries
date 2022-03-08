const axios = require('axios')
const { Country, Activity } = require('../db.js')

const getApiInfo = async () => {
    const apiUrl = await axios.get("https://restcountries.com/v3/all")

    const apiInfo = await apiUrl.data.map(el => {
        return {
            id: el.cca3,
            name: el.name.common,
            image: el.flags[1],
            continent: el.continents[0],
            capital: el.capital ? el.capital.join(", ") : "No existe capital",
            subRegion: el.subregion,
            area: el.area,
            population: el.population
        }
    })
    apiInfo.forEach(p => {
        Country.findOrCreate({
            where: { id: p.id},
                defaults:{
                    id: p.id,
                    name: p.name,
                    image: p.image,
                    continent: p.continent,
                    capital: p.capital,
                    subRegion: p.subRegion,
                    area: p.area,
                    population: p.population
                }
        })
    })
    let countryData = await Country.findAll({ 
        include:{ 
            model: Activity, 
            attributes: ["name", "difficulty", "duration", "season"], 
            through:{
                attributes: [],
            }
        }
    }); 
    return countryData; 
}


const showAllCountries = async (req, res, next) => {
    const name = req.query.name
    const allCountries = await getApiInfo()

    if(name){
        let namePais = await allCountries.filter(p => p.name.toLowerCase().includes(name.toLocaleLowerCase()) );
        if(namePais.length >0){
            return res.status(200).send(namePais)
        }else{
            return res.status(404).send("no se encuentra el pais")
        }
    }
    // console.log(paises)
    // paises.forEach(p => console.log(p.id))
    // paises.forEach(p => console.log(p.maps))
    return res.status(200).send(allCountries)
}
    // if(name) {
    //     const countrieName = totalCountries.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
    //     if(countrieName) {
    //         res.status(200).send(countrieName)
    //     } else {
    //         res.status(404).send("No existe país con ese nombre")
    //     }
    // } else {
    //     res.status(200).send(totalCountries)
    // }

const countriesId = async (req, res) => {
    const id = req.params.id
    const totalCountries = await getApiInfo()

    if(id) {
        const countrieId = totalCountries.find(p => p.id.toLocaleLowerCase() === id.toLocaleLowerCase())
        if (countrieId) {
            res.status(200).json(countrieId)
        } else {
            res.status(404).json("No existe país con ese id")
        }
    } 
}

module.exports = {
    showAllCountries,
    countriesId,
}