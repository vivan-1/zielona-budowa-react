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
            textContent: <div>
                <p>Inwestycja obejmuje przebudowę istniejącego budynku biurowego na budynek socjalno-biurowy. Istniejący budynek powstawał etapowo i stanowi efekt złożenia dwóch budynków.</p>

                <p>Czas powstania tych budynków jest nieznany, jednakże na podstawie oględzin i analizy zastosowanych rozwiązań konstrukcyjnych i budowlanych szacuje się, iż pierwsza część powstała w latach pięćdziesiątych ubiegłego wieku, natomiast druga część na przełomie lat 70-tych i 80-tych ubiegłego wieku. Nie zachowała się żadna dokumentacja budowlana istniejącego obiektu, nie udało się jej odnaleźć również w powiatowym archiwum.</p>

                <p>Przebudowa będzie polegać na wyburzeniu zewnętrznej dobudówki (od strony wschodniej) z zachowaniem znajdującego się w niej biegu schodowego, a także na hydroizolacji i ociepleniu całego budynku, wymianie stolarki okiennej i drzwiowej, wymianie instalacji grzewczej i instalacji wentylacji, wymianie instalacji elektrycznej, przebudowie i wykończeniu wnętrz w taki sposób, iż na parterze w skrzydle wschodnim budynku powstanie węzeł szatni i natrysków dla 48 osób, kobiet i mężczyzn. Jednocześnie pozostałe pomieszczenia na parterze i piętrze zostaną zaaranżowane na nowo z przeznaczeniem na pomieszczenia biurowe i gospodarcze.</p>
                <h1>Zestawienie powierzchni zagospodarowania terenu</h1>
                <table>
                    <tr className="underlined">
                        <td>Całkowita powierzchnia działek:</td>
                        <td>28&nbsp;590,89 m<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Powierzchnia zabudowy kubaturowej istniejącej (bez obiektu do rozbiórki):
                        </td>
                        <td>393,5<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Powierzchnia zabudowy kubaturowej projektowanej:</td>
                        <td>397,3 m<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Powierzchnia utwardzonych nawierzchni:</td>
                        <td>5900 m<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Powierzchnia biologicznie czynna:</td>
                        <td>22690,89 m<sup>2</sup><br/>(79,3% pow. działki)</td>
                    </tr>

                </table>
                <p>Uwarunkowania ochrony konserwatorskiej:</p>

                <p>Wg załącznika graficznego do uchwały nr XLII/341/06 Rady Miejskiej w Łazach z dnia 25 października 2006 r. w sprawie miejscowego planu zagospodarowania przestrzennego miasta i gminy Łazy, teren inwestycji leży w strefie B pośredniej ochrony konserwatorskiej.</p>

            </div>,
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
            textContent: <div>
                <p>Założenia materiałowe:</p>
                <ol className="medium-margins">
                    <li>konstrukcja domów i budynków garażowych/gospodarczych z profili z drewna LSL (laminated strand lumber) - szybkie zestawienie poglądowe</li>
                    <li>łączenie konstrukcji - drewniane</li>
                    <li>więźba dachowa - wiązary lsl, pokrycie z płyty OSB</li>
                    <li>izolacja termiczna z włókien celulozowych (ekofiber lub równoważne) - dotyczy wszystkich przegród: dachu, ścian zewnętrznych i podłogi</li>
                    <li>podłoga lekka na legarach lsl, izolacja - wdmuchiwane włókna celulozowe</li>
                    <li>lekki fundament na ławach z bloczków lub na ławach rzymskich z kamienia łamanego wiązanego zaprawą</li>
                    <li>fasady szklane samonośne</li>
                    <li>warstwa wierzchnia pokrycia dachowego – blachodachówka lub gont tradycyjny, łupany</li>
                    <li>fasady - dom z ćwierćbala warstwowego, izolowanego (50-100 mm)</li>
                </ol>
            </div>,
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
            textContent: <div>
                <h1>Sportowa 20, Katowice</h1>
                <h2>Etap I: Przebudowa budynku przemysłowego z&nbsp;częścią socjalną na budynek magazynowy z częścią biurową</h2>

                <p className="centered">
                    Powierzchnia – 750 m<sup>2</sup><br/>
                    Kubatura – 6300<sup>3</sup>
                </p>


                <p>Istniejący budynek murowany z ceramiki pełnej na zaprawie wapiennej, zadaszony przekryciem deskowanym z izolacją bitumiczną wspartym na drewnianych kratownicach przestrzennych był w bardzo złym stanie i nie pełnił żadnych funkcji użytkowych.</p>

                <p>W czerwcu roku 2018 nasz projekt przebudowy otrzymał ostateczne pozwolenie na przebudowę. Zakres przebudowy obejmuje wzniesienie nowej konstrukcji wewnątrz starych murów ceramicznych. Jest to konstrukcja w postaci ram złożonych z żelbetowych słupów oraz stalowych naroży i rygli, które przejmują dotychczasowe obciążenia budynku. W końcu czerwca ruszyły prace wyburzeniowe, geodezyjne i ziemne.</p>

                <p>Zaproponowaliśmy minimalistyczne rozwiązania estetyczne: wnętrza będą piaskowane, słupy żelbetowe o wysokiej jakości faktury, elementy stalowe w kolorze naturalnym. Wszystkie przegrody, dotychczas pozbawione izolacji przeciwwilgociowej i termicznej zostały zaprojektowane w pobliżu wymagań właściwych dla standardu NF15. Nowoczesna stolarka aluminiowa oraz ciepła posadzka przemysłowa typu ciężkiego, wytłumione akustycznie ściany z dyli szklanych, stalowe podesty i schody oraz zieleń na ścianach wewnętrznych uzupełniają założenia minimalizmu wnętrz.</p>

                <p>Nasza firma oprócz wykonania projektu pełni na tej budowie funkcję Inwestora Zastępczego.<br/>
                    Planowany koniec przebudowy: lipiec 2019&nbsp;r.</p>

                <h2>Etap II: Przebudowa i zmiana sposobu użytkowania obiektu na obiekt w&nbsp;całości biurowy</h2>

                <p>Przebudowa zakłada wstawienie do wnętrza hali magazynowej kaskadowych pięter. Konstrukcja z prefabrykowanych słupów i belek żelbetowych, wypełnienia ścian biur – akrylowe. Dokumentacja projektowa jest aktualnie opracowywana.</p>


            </div>,
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

