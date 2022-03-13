const axios = require('axios')
const { Country, Activity } = require('../db.js')

const postActivity = async (req, res) => {
    const {
        name,
        difficulty,
        duration,
        season,
        countries
    } = req.body
    const activityCreated = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
    countries?.forEach(async (c) => {
        const countrySearch = await Country.findOne({
            where: {
            name: c,
            },
        });
              await activityCreated.addCountry(countrySearch);
            });
            res.status(200).json("Activity create successfully");
} 

const getActivities = async(req, res) => {
    try {
        const dbActInfo = await Activity.findAll({
            attributes: ['name'],
            include: Country                      
        })
        res.send(dbActInfo);               
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    postActivity,
    getActivities
}