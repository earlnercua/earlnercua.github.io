import {data} from './data.js';

function createStudentElement(dataIndex){
    let obj = data[dataIndex]

    let itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'students-list-item');
    

    let profilePic = document.createElement('img');
    let picURL = './images/profile_pictures/' + obj.last_name.replace(" ", "").toLowerCase() + '.jpeg';

    profilePic.setAttribute('class', 'student-picture');
    profilePic.setAttribute('src', picURL)

    let advocaciesTextContainer = document.createElement('div');
    advocaciesTextContainer.setAttribute('class', 'advocacices-text-container')

    let fullName = document.createElement('p');
    fullName.setAttribute('class', 'full-name');
    fullName.textContent = obj.last_name + ", " + obj.first_name;

    let advocacy = document.createElement('p');
    advocacy.setAttribute('class', 'advocacy');
    advocacy.textContent = 'Advocacy: ' + obj.advocacy;

    let advocacyInfo = document.createElement('p');
    advocacyInfo.setAttribute('class', 'advocacy');
    advocacyInfo.textContent = obj.advocacy;


    
    document.querySelector(".students-list").appendChild(itemContainer);
    itemContainer.appendChild(profilePic);
    itemContainer.appendChild(advocaciesTextContainer);
    advocaciesTextContainer.appendChild(fullName);
    advocaciesTextContainer.appendChild(advocacy);

 

}


for(let i in data){
    createStudentElement(i)
}


let studentsListItems = document.getElementsByClassName('students-list-item');
let selected = null;
print(studentsListItems);
document.addEventListener('click', (e) => {
    let page = document.querySelector('.advocacy-viewer-container');
    page.style.color="black";
    const el = e.target;

    if(el.className == 'students-list-item'){
        let selectedArr = el.querySelector('.full-name').textContent.split(", ");
        selected = selectedArr[0];
        print("successfully selected " + selected);
        let obj = getStudent(selected);
        print(obj);
        let parsed = obj.first_name + obj.last_name + obj.content;

        let doc = document.createElement('iframe');
        doc.setAttribute('class', "document");
        doc.setAttribute('src', obj.content[0]);

        page.textContent = parsed;
        page.appendChild(doc);
        }
})



// UTIL

function getStudent(lastName){
    let obj = null;
    for(let i in data){
        if(data[i].last_name == lastName){
            obj = data[i];
            break;
        }
    }
    return obj;
}


function print(toPrint){
    console.log(toPrint);
}
