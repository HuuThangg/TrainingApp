import axios from "axios";
import { population } from ".";
//https://datausa.io/api/data?drilldowns=Nation&measures=Population
async function getPopulation({ drilldowns, measures }) {
    const urlGetPopulation = `https://datausa.io/api/data?drilldowns=${drilldowns}&measures=${measures}`
    try {
        let result = []
        let responseData = await axios.get(urlGetPopulation)
        responseData.data.data.forEach(function (item) {
            let myObject = {}
            myObject.nationID = item['ID Nation']
            myObject.year = item['year']
            myObject.population = item['Population']
            result.push(myObject)
        })
        return result
    } catch (error) {
        throw error
    }
}
export default {
    getPopulation
}