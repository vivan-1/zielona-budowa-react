import React from "react";

//specifies the content of all section elements

export const portfolio = {
    restauracje: [],
    przemyslowe: [
        {
            id: 'malarnia',
            name: 'malarnia proszkowa',
            numberOfViews: 9,
            textFrame: 9,
            textContent: <div><h1>Commodi doloribus expedita natus quam soluta</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi corporis cupiditate ex fugiat harum incidunt minima nam nisi omnis praesentium saepe, voluptatem, voluptatum. Aut, dicta excepturi. Ab dolor, itaque!</p><p className="centered">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, magnam, reiciendis!</p></div>,
            fileFrame: 0,
            fileContent: ""
        },
        {
            id: 'bazarowa',
            name: 'bazarowa',
            numberOfViews: 11,
            textFrame: 11,
            textContent: <div><h1>Commodi doloribus expedita natus quam soluta</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi corporis cupiditate ex fugiat harum incidunt minima nam nisi omnis praesentium saepe, voluptatem, voluptatum. Aut, dicta excepturi. Ab dolor, itaque!</p><p className="centered">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, magnam, reiciendis!</p></div>,
            fileFrame: 0,
            fileContent: ""
        },
        {
            id: 'ecgolonog',
            name: 'ec gołonóg',
            numberOfViews: 20,
            textFrame: 0,
            textContent: "",
            fileFrame: 0,
            fileContent: ""
        },
        {
            id: 'polimerplast',
            name: 'polimerplast',
            numberOfViews: 23,
            textFrame: 23,
            textContent: <div><h1>Commodi doloribus expedita natus quam soluta</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi corporis cupiditate ex fugiat harum incidunt minima nam nisi omnis praesentium saepe, voluptatem, voluptatum. Aut, dicta excepturi. Ab dolor, itaque!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, magnam, reiciendis!</p></div>,
            fileFrame: 0,
            fileContent: ""
        }
    ],
    domy: [
        {
            id: 'dom-poreba',
            name: 'dom w porębie',
            numberOfViews: 17,
            textFrame: 0,
            textContent: "",
            fileFrame: 0,
            fileContent: []
        },
        {
            id: 'dommodulowy',
            name: 'dom modułowy',
            numberOfViews: 9,
            textFrame: 8,
            textContent: <div><h1>Commodi doloribus expedita natus quam soluta</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi corporis cupiditate ex fugiat harum incidunt minima nam nisi omnis praesentium saepe, voluptatem, voluptatum. Aut, dicta excepturi. Ab dolor, itaque!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, magnam, reiciendis!</p></div>,
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
            numberOfViews: 16,
            textFrame: 16,
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
