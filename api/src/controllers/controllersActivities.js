const axios = require('axios')
const { Activity } = require('../db.js')

const postActivity = async (req, res) => {
    const {
        name,
        difficulty,
        duration,
        season
    } = req.body

    const activityCreated = await Activity.create({
        name,
        difficulty,
        duration,
        season
    })
}