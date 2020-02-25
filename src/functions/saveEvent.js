import { postToServer } from '../gateways/gateways.js'

const saveEvent = (event) => {
    postToServer(event)
    // .then(() => renderDates())
}

export default saveEvent;