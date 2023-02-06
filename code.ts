//////////////////////////one//////////////////////////
type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
  }

const myCourses: Array<Course> = [ {
    courseNumber: "CIS 371",
    courseName: "Web Programming",
    semesterTaken: "Winter 2020"
    },
    {
    courseNumber: "CIS 290",
    courseName: "Introduction to Computer Science III",
    semesterTaken: "Winter 2020"
    },
    {
    courseNumber: "CIS 325",
    courseName: "Introduction to Computer Science II",
    semesterTaken: "Spring 2021"
    },
    {
    courseNumber: "CIS 350",
    courseName: "Introduction to Computer Science I",
    semesterTaken: "Fall 2021"
    },
]

const tArea4 = document.getElementsByClassName("area4")
const makeTable = (courses: Array<Course>) => {
    const table = document.createElement("table")
    table.className = "table"
    const header = document.createElement("tr")
    const header1 = document.createElement("th")
    const header2 = document.createElement("th")
    const header3 = document.createElement("th")
    header1.textContent = "Course Number"
    header2.textContent = "Course Name"
    header3.textContent = "Semester Taken"
    header.appendChild(header1)
    header.appendChild(header2)
    header.appendChild(header3)
    table.appendChild(header)
    for (let i = 0; i < courses.length; i++) {
        const row = document.createElement("tr")
        const courseNumber = document.createElement("td")
        const courseName = document.createElement("td")
        const semesterTaken = document.createElement("td")
        courseNumber.textContent = courses[i].courseNumber
        courseName.textContent = courses[i].courseName
        semesterTaken.textContent = courses[i].semesterTaken
        row.appendChild(courseNumber)
        row.appendChild(courseName)
        row.appendChild(semesterTaken)
        table.appendChild(row)
    }
    return table
}

const res =makeTable(myCourses)
tArea4[0].appendChild(res)

//////////////////////////two//////////////////////////
//area 6 
type Company = {
    name: string,           // Ex: "MSFT"
    abbreviation: string,   // Ex: Microsoft
    url: string             // Ex: https://microsoft.com
  }

    const companies: Array<Company> = [
    {
        name: "Microsoft",
        abbreviation: "MSFT",
        url: "https://microsoft.com"
    },
    {
        name: "Apple",
        abbreviation: "AAPL",
        url: "https://apple.com"
    },
    {
        name: "Google",
        abbreviation: "GOOG",
        url: "https://google.com"
    },
    {
        name: "Facebook",
        abbreviation: "FB",
        url: "https://facebook.com"
    }
    ]

    const tArea6 = document.getElementsByClassName("area6")
    const makeList = (companies: Array<Company>) => {
        const List = document.createElement("ul")
        List.className = "list"
        for (let i = 0; i < companies.length; i++) {
            const item = document.createElement("li")
            const link = document.createElement("a")
            link.textContent = companies[i].name
            link.href = companies[i].url
            item.appendChild(link)
            List.appendChild(item)
        }
        return List
    }
    const res2 = makeList(companies)
    tArea6[0].appendChild(res2)


  //////////////////////////three//////////////////////////
//area 8 
  type SocialMedia = {
    icon: string;   // this can be a name of a local image or a URL to a remote image
    url: string;    // URL of the said social media company
  }
  
    const socialMedia: Array<SocialMedia> = [
    {
        icon: "https://img.icons8.com/ios-filled/50/000000/instagram-new.png",
        url: "https://instagram.com"
    },
    {
        url: "https://twitter.com",
        icon: "https://img.icons8.com/ios-filled/50/000000/twitter.png"
    },
    {
        url: "https://facebook.com",
        icon: "https://img.icons8.com/ios-filled/50/000000/facebook-new.png"
    },
    {
        url: "https://linkedin.com",
        icon: "https://img.icons8.com/ios-filled/50/000000/linkedin.png"
    },
    {
        url: "https://youtube.com",
        icon: "https://img.icons8.com/ios-filled/50/000000/youtube-play.png"
    }
    ]

    const tArea8 = document.getElementsByClassName("area8")

const makeLinks = (socialMedia: Array<SocialMedia>) => {
    const item = document.createElement("a")
    for (let i = 0; i < socialMedia.length; i++) {
        const link = document.createElement("a")
        const icon = document.createElement("img")
        icon.src = socialMedia[i].icon
        link.href = socialMedia[i].url
        link.appendChild(icon)
        item.appendChild(link)
    }
    return item
}
const res3 = makeLinks(socialMedia)
tArea8[0].appendChild(res3)

