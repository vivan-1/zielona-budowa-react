//specifies the content of all section elements

export const portfolio = {
    restauracje: [

    ],
    przemyslowe: [
        {
            id: 'malarnia',
            name: 'malarnia proszkowa',
            numberOfViews: 11,
            videoFrame: 5,
            videoUrl: "https://www.youtube.com/watch?v=wxPkxKkHDgQ",
            textFrames: [9, 10]
        }
    ],
    domy: [
        {
            id: 'dom-poreba',
            name: 'dom w porębie',
            numberOfViews: 17,
            videoFrame: 0,
            videoUrl: "",
            textFrames: []
        }
    ],
    renowacje: [
        {
            id: 'sportowa20',
            name: 'sportowa 20',
            numberOfViews: 17,
            videoFrame: 0,
            videoUrl: "",
            textFrames: [16, 17]
        }
    ]
};

//specifies which sections are visible [empty sections are hidden]

export const sections = {
    restauracje: portfolio.restauracje.length > 0,
    przemyslowe: portfolio.przemyslowe.length > 0,
    domy: portfolio.domy.length > 0,
    renowacje: portfolio.renowacje.length > 0
};
