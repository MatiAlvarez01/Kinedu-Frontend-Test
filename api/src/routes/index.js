const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/physicalData", async (req, res, next) => {
    try {
        const physicalData = await axios.get(process.env.PHYSICAL_URL, {
            headers: {
                "Authorization": `Token ${process.env.AXIOS_TOKEN}`
            }
        })
        return res.status(200).send(physicalData.data)
    } catch (err) {
        return next(err)
    }
})

router.get("/socialEmotionalData", async (req, res, next) => {
    try {
        const socialEmotionalData = await axios.get(process.env.SOCIAL_EMOTIONAL_URL, {
            headers: {
                "Authorization": `Token ${process.env.AXIOS_TOKEN}`
            }
        })
        return res.status(200).send(socialEmotionalData.data)
    } catch (err) {
        return next(err)
    }
})

router.post("/finishAssessment", (req, res, next) => {
    const { answers } = req.body;
    if (answers) {
        console.log(answers)
        return res.status(200).send("Results received!")
    } else {
        return res.status(500).send("Something went wrong, we didn't get the results.")
    }
})

module.exports = router;