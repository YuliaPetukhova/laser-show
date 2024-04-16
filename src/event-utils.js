let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: 'Lazer',
        start: todayStr,
        iconUrl: 'uzb.png',
        progress: '200$/2200$',
        isNew: false,
    },
    {
        id: createEventId(),
        title: 'Lazer',
        start: '2024-04-10T20:00:00',
        iconUrl: 'korean.png',
        progress: '300$',
        isNew: false,
    },
    {
        id: createEventId(),
        title: 'Lazer',
        start: '2024-04-10T20:00:00',
        iconUrl: 'korean.png',
        progress: '300$',
        isNew: false,
    },
    {
        id: createEventId(),
        title: 'Lazer',
        start: '2024-04-10T20:00:00',
        iconUrl: 'uzb.png',
        progress: '300$',
        isNew: false,
    },
    {
        id: createEventId(),
        title: 'Lazer',
        start: '2024-04-13T20:00:00',
        iconUrl: 'japan.png',
        progress: '400$',
        isNew: false,
    },

]

export function createEventId() {
    return String(eventGuid++)
}