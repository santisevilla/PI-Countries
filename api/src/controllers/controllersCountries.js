const axios = require('axios')
const { Country, Activity } = require('../db.js')

const apiInfo = async () => {
    const countriesApi = await axios.get('https://restcountries.com/v3/all')

    const infoCountries = countriesApi.data.map(el => {
        return {
            id: el.cca3,
            name: el.name.common,
            image: el.flags[1],
            continent: el.continents[0],
            capital: el.capital,
            subRegion: el.subregion,
            area: el.area,
            population: el.population
        }
    })
    return infoCountries
}

const dbInfo = async () => {
    return await Country.findAll({
        include: {
            model: Activity,
            attributes: [ 'name' ],
            through: {
                attributes: [],
            }
        }
    })
}

const allCountries = async () => {
    const getApiInfo = await apiInfo()
    const getDbInfo = await dbInfo()

    const infoTotal = getApiInfo.concat(getDbInfo)
    return infoTotal
}

const showAllCountries = async (req, res) => {
    const name = req.query.name
    const totalCountries = await allCountries()

    if(name) {
        const countrieName = await totalCountries.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        if(countrieName) {
            res.status(200).send(countrieName)
        } else {
            res.status(404).send("No existe país con ese nombre")
        }
    } else {
        res.status(200).send(totalCountries)
    }
}

const countriesId = async (req, res) => {
    const id = req.params.id
    const totalCountries = await allCountries()

    if(id) {
        const countrieId = await totalCountries.filter(el => el.id == id)
        if (countrieId) {
            res.status(200).send(countrieId)
        } else {
            res.status(404).send("No existe país con ese id")
        }
    } 
}

module.exports = {
    showAllCountries,
    countriesId
}