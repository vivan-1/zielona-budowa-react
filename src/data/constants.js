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
            textContent:
                <div>
                    <h1>Zestawienie powierzchni zagospodarowania działki</h1>
                    <table>
                        <tr className="underlined">
                            <td>Całkowita powierzchnia działki:</td>
                            <td>6088,19 m<sup>2</sup></td>
                            <td>(100%)</td>
                        </tr>
                        <tr>
                            <td>Powierzchnia zabudowy kubaturowej projektowanej:</td>
                            <td>2847,52 m<sup>2</sup></td>
                            <td>(46,77%)</td>
                        </tr>
                        <tr>
                            <td>Powierzchnia utwardzonych nawierzchni:</td>
                            <td>2022,17 m<sup>2</sup></td>
                            <td>(33,22%)</td>
                        </tr>
                        <tr>
                            <td>Powierzchnia biologicznie czynna:</td>
                            <td>1218,50 m<sup>2</sup></td>
                            <td>(20,01%)</td>
                        </tr>

                    </table>

                    <p className="wide-margins">
                        w tym:<br/>
                        - powierzchnia biologicznie czynna z trawników: 994,25 m<sup>2</sup><br/>
                        - w tym 50% obszaru 39 miejsc parkingowych o powierzchni ażurowej: 448,5 m<sup>2</sup> ˟ 50% = 224,25 m<sup>2</sup>
                    </p>


                    <p className="centered">Spełnia się zatem zasady kształtowania zabudowy oraz wskaźniki zagospodarowania terenu:</p>
                    <p className="wide-margins">
                        1) wskaźnik powierzchni zabudowy – do 80% powierzchni działki<br/>
                        2) intensywność zabudowy – od 0,2 do 2,0<br/>
                        3) minimalny udział procentowy powierzchni biologicznie czynnej - 20% powierzchni działki zagospodarowanej w formie zieleni urządzonej
                    </p>

                    <p className="small-text centered">UCHWAŁY NR 353/XXXIV/08 R. RADY MIEJSKIEJ W LUBLIŃCU z dnia 26 listopada 2008 r. w sprawie: miejscowego planu zagospodarowania przestrzennego dla terenu we wschodniej części Lublińca. (MPZP)</p>
                </div>,
            fileFrame: 0,
            fileContent: ""
        },
        {
            id: 'bazarowa',
            name: 'bazarowa',
            numberOfViews: 11,
            textFrame: 11,
            textContent: <div>
                <h1>Rybitwy, Kraków</h1>


                <p className="centered">
                    Powierzchnia magazynów – 2850 m<sup>2</sup><br/>
                    Powierzchnia biur – 1200 m<sup>2</sup><br/>
                    Kubatura – 31&nbsp;600<sup>3</sup><br/>
                    Wysokość – 11,95 m
                </p>


                <p className="centered">Projektowany od podstaw nowoczesny magazyn składowania przy ul. Bazarowej w Krakowie.<br/>
                    Budynek w konstrukcji całkowicie żelbetowej, aktualne stadium projektowe – projekt budowlany.
                </p>
            </div>,
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
