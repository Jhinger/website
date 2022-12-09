 
function getExperienceImage(type) {
    switch(type) {
        case "pixlworks":
            return {
                "src" : `/${type}.png`,
                "href": "https://pixlworks.com/",
                "name": "PixlWorks Productions",
                "positionTitle": "Software Developer Intern",
                "positionDuration": "January 2022 - April 2022"
            }
        case "later":
            return {
                "src": `/${type}.png`,
                "href": "https://later.com/",
                "name": "Later",
                "positionTitle": "Frontend Developer Intern",
                "positionDuration": "September 2022 - December 2022"
            }
    }
}

export {
    getExperienceImage
}
