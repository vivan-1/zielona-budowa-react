//specifies the content of all section elements

export const portfolio = {
    restauracje: [

    ],
    przemyslowe: [
        {
            id: 'malarnia',
            name: 'malarnia proszkowa',
            numberOfViews: 10,
            textFrames: [9, 10],
            textContent: "",
            fileFrame: 0,
            fileContent: ""
        },
        {
            id: 'bazarowa',
            name: 'bazarowa',
            numberOfViews: 11,
            textFrames: [11],
            textContent: "",
            fileFrame: 0,
            fileContent: ""
        },
        {
            id: 'ecgolonog',
            name: 'ec gołonóg',
            numberOfViews: 20,
            textFrames: [],
            textContent: "",
            fileFrame: 0,
            fileContent: ""
        },
        {
            id: 'polimerplast',
            name: 'polimerplast',
            numberOfViews: 24,
            textFrames: [23, 24],
            textContent: "",
            fileFrame: 0,
            fileContent: ""
        }
    ],
    domy: [
        {
            id: 'dom-poreba',
            name: 'dom w porębie',
            numberOfViews: 17,
            textFrames: [],
            textContent: "",
            fileFrame: 0,
            fileContent: []
        },
        {
            id: 'dommodulowy',
            name: 'dom modułowy',
            numberOfViews: 9,
            textFrames: [8],
            textContent: "",
            fileFrame: 9,
            fileContent: [
                "instalacja do pompy ciepła 5kWp",
                "symulacja działania instalacji z pompą ciepła za pomocą WP-OPT"
            ]
        }
    ],
    renowacje: [
        {
            id: 'sportowa20',
            name: 'sportowa 20',
            numberOfViews: 17,
            textFrames: [16, 17],
            textContent: "",
            fileFrame: 0,
            fileContent: ""
        }
    ],
};

//specifies which sections are visible [empty sections are hidden]

export const sections = {
    restauracje: portfolio.restauracje.length > 0,
    przemyslowe: portfolio.przemyslowe.length > 0,
    domy: portfolio.domy.length > 0,
    renowacje: portfolio.renowacje.length > 0
};
