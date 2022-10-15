import events from "../events"

const actions = {
    incCounter: (data) => {
        return {
            type: events.INC,
            payload: data
        }
    },
    descCounter: () => {
        return {
            type: events.DESC,
            payload: 1
        }
    },
    resetCounter: () => {
        return {
            type: events.RESET
        }
    }
}

export default actions

// export const incCounter = () => {
//     return {
//         type: "INC"
//     }
// }

// export const descCounter = () => {
//     return {
//         type: "DESC"
//     }
// }

// export const resetCounter = () => {
//     return {
//         type: "RESET"
//     }
// }