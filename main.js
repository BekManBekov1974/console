let consol = new Consol('console')
let data = [{
    "title": "Bugungi ishlarmas",
    "colors": {
        "c1": "#D5F1E5",
        "c2": "#1E704D"
    },
    "icon": "&#127929;",
    "id": "G3490.2650747349029219",
    "subTasks": [{
        "title": "Aytilgan ishlar",
        "complete": true,
        "id": "S2780.991937861046434",
        "steps": [{
            "title": "Bazani tuzatish",
            "complete": true,
            "id": "SSID2060.5592966308360912"
        }, {
            "title": "Test tayyorlash",
            "complete": true,
            "id": "SSID4780.7970626050623764"
        }],
        "sana": "2021- yil 27- avgust",
        "vaqt": "15 : 19"
    }, {
        "title": "tushdan keyingi ishlar",
        "complete": true,
        "id": "S9260.6222230030261571",
        "steps": [{
            "title": "Nima qwilish",
            "complete": true,
            "id": "SSID2700.5684820128634183"
        }],
        "sana": "2021- yil 27- avgust",
        "vaqt": "15 : 19"
    }]
}, {
    "title": "Taqiqlangan ishlar",
    "colors": {
        "c1": "#FFE4E9",
        "c2": "#AC395D"
    },
    "icon": "&#9940;",
    "id": "G8980.8086892076613521",
    "subTasks": [{
        "title": "Qilmashlik",
        "complete": true,
        "id": "S6710.7373518805496864",
        "steps": [],
        "sana": "2021- yil 27- avgust",
        "vaqt": "15 : 20"
    }]
}]
consol.log(
        [{
            name: 'Mashina',
            color: 'white',
            number: {
                region: 25,
                letter: 'S',
                number: 957,
                tletter: [14, 151, 16]
            }
        }, {
            name: 'Byscle',
            color: 'black',
            number: {
                region: 1,
                letter: 'X',
                number: 700,
                tletter: {
                    item: '18',
                    item2: '24'
                }
            }
        }]
    )
    // consol.log(console)
    // console.log([{
    //     name: 'Mashina',
    //     color: 'white',
    //     number: {
    //         region: 25,
    //         letter: 'S',
    //         number: 957,
    //         tletter: [14, 151, 16]
    //     }
    // }, {
    //     name: 'Byscle',
    //     color: 'black',
    //     number: {
    //         region: 1,
    //         letter: 'X',
    //         number: 700,
    //         tletter: {
    //             item: '18',
    //             item2: '24'
    //         }
    //     }
    // }])

console.log(data)