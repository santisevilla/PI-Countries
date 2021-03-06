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


const showAllCountries = async (req, res) => {
    const name = req.query.name
    const allCountries = await getApiInfo()

    if(name){
        let namePais = await allCountries.filter(p => p.name.toLowerCase().includes(name.toLocaleLowerCase()) );
        if(namePais.length >0){
            return res.status(200).send(namePais)
        }else{
            return res.status(404).send("No se encuentra el pais")
        }
    }
    return res.status(200).send(allCountries)
}

const countriesId = async (req, res) => {
    try {
        const { id } = req.params;
        let countryId = await Country.findByPk(id.toUpperCase(),{            
            attributes: ['image', 'name', 'continent', 'id', 'capital', 'subRegion', 'area', 'population'],
            include: Activity
        })
        countryId ? res.send(countryId): res.send('The entered country does not exist.');
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    showAllCountries,
    countriesId,
}