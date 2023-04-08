
const data = [
    {
        "last_name": "Malana",
        "first_name": "Byron",
        "section": "BSIT-1A",
        "advocacy": "Human Rights",
        "content": "Lorem Ipsum",
        "referemces": null
    },
    {
        "last_name": "De Jesus",
        "first_name": "Monica",
        "section": "BSIT-1A",
        "advocacy": "Human Rights",
        "content": "Lorem Ipsum",
        "referemces": null
    },
    {
        "last_name": "Echano",
        "first_name": "Brylle",
        "section": "BSIT-1A",
        "advocacy": "Human Rights",
        "content": "Lorem Ipsum",
        "referemces": null
    },
    {
        "last_name": "Nercua",
        "first_name": "Earl Andrei",
        "section": "BSCS-1A",
        "advocacy": "Human Rights",
        "content": "Lorem Ipsum",
        "referemces": null
    },
    ]
    



let selected = null;

function createStudentElement(dataIndex){
    let obj = data[dataIndex]

    let itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'student-item-container');
    

    let profilePic = document.createElement('img')
    let picURL = './images/profile_pictures/' + obj.last_name.replace(" ", "").toLowerCase() + '.jpeg';
    profilePic.setAttribute('class', 'student-image');
    profilePic.setAttribute('src', picURL)

    print(picURL);


    let studentInfo = document.createElement('div');
    studentInfo.setAttribute('class', 'student-info');

    let fullName = document.createElement('h4');
    fullName.setAttribute('class', 'full-name');
    fullName.textContent = obj.last_name + ", " + obj.first_name;

    let section = document.createElement('h6');
    section.setAttribute('class', 'section');
    section.textContent = 'Section:';

    let sectionInfo = document.createElement('p');
    sectionInfo.setAttribute('class', 'student-info-content');
    sectionInfo.textContent = obj.section;

    let advocacy = document.createElement('h6');
    advocacy.setAttribute('class', 'section');
    advocacy.textContent = 'Advocacy:';

    let advocacyInfo = document.createElement('p');
    advocacyInfo.setAttribute('class', 'student-info-content');
    advocacyInfo.textContent = obj.advocacy;



    itemContainer.addEventListener('click', ()=>{
        if(selected == itemContainer){
            selected = null
            itemContainer.style.height = "10vh";
            itemContainer.querySelector('.student-image').style.height = "95%";

            itemContainer.style.transition = "0.5s";
            profilePic.style.transition = "1s";

            print(selected);
        }
        else if(selected == null){
            selected = itemContainer;
            itemContainer.style.height = "500px";
            itemContainer.querySelector('.student-image').style.height = "50%";

            itemContainer.style.transition = "1s";
            profilePic.style.transition = "0.5s";

            print(selected);
        }
    })

    
    document.querySelector(".students-container").appendChild(itemContainer);
    itemContainer.appendChild(profilePic);
    itemContainer.appendChild(studentInfo);
    studentInfo.appendChild(fullName);
    studentInfo.appendChild(section);
    studentInfo.appendChild(sectionInfo);
    studentInfo.appendChild(advocacy);
    studentInfo.appendChild(advocacyInfo);

    




}

for(let i in data){
    createStudentElement(i)
}

// UTIL

function print(toPrint){
    console.log(toPrint);
}
