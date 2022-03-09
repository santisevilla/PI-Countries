const axios = require('axios')
const { Country, Activity } = require('../db.js')

const postActivity = async (req, res) => {
    const {
        name,
        difficulty,
        duration,
        season,
        country
    } = req.body
    const activityCreated = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
    country?.forEach(async (c) => {
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
    const activities = await Activity.findAll()
    return res.status(200).send(activities)
}

module.exports = {
    postActivity,
    getActivities
}