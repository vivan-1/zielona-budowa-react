//specifies which sections are visible [empty sections are hidden]

export const sections = {
    restauracje: false,
    przemyslowe: true,
    domy: true,
    renowacje: true
};


//specifies the content of all section elements

export const portfolio = {
    restauracje: [
    ],
    przemyslowe: [
        {
            id: 'malarnia',
            name: 'malarnia proszkowa',
            numberOfViews: 10,
            videoFrame: 5,
            videoUrl: "https://www.youtube.com/watch?v=wxPkxKkHDgQ&t=3s",
            textFrames: [9, 10]
        }
    ],
    domy: [
        {
            id: 'dom-poreba',
            name: 'dom w porębie',
            numberOfViews: 16,
            videoFrame: 1000,
            videoUrl: "",
            textFrames: []
        }
    ],
    renowacje: [
        {
            id: 'sportowa20',
            name: 'sportowa 20',
            numberOfViews: 17,
            videoFrame: 1000,
            videoUrl: "",
            textFrames: []
        }
    ]
};