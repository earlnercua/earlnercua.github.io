import {data} from './data.js';

function createStudentElement(dataIndex){
    let obj = data[dataIndex]

    let itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'students-list-item');
    

    let profilePic = document.createElement('img');
    let picURL = './images/profile_pictures';
    let tryURL = new File([],'./images/profile_pictures/' + obj.last_name.replace(" ", "").toLowerCase() + '.jpeg', {
        type: "image"
    });


    if(tryURL.exists()){
        picURL = tryURL;
    }
    
   
    
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

let currentDisplay = null;

let studentsListItems = document.getElementsByClassName('students-list-item');
let selected = null;

document.addEventListener('click', (e) => {
    let page = document.querySelector('.advocacy-viewer-container');
    page.style.color="black";
    const el = e.target;

    if(el.className == 'students-list-item'){
        currentDisplay = el;
        removeAllChildren(page);

        let selectedArr = el.querySelector('.full-name').textContent.split(", ");
        selected = selectedArr[0];
        print("successfully selected " + selected);
        let obj = getStudent(selected);
        print(obj);
        let parsed = obj.first_name + obj.last_name + obj.content;

        const tabsArray = document.querySelectorAll(".advocacy-tab-btn");

        const tabsContainer = document.querySelector('.advocacy-tab-container');
        const essayTab = tabsArray[0];
        const videoTab = tabsArray[1];
        const infoTab = tabsArray[2];
        const essay = document.createElement('iframe');
        const video = document.createElement('video');
        const infographic = document.createElement('img');


        
        essay.setAttribute('class', "student-essay");
        essay.setAttribute('src', obj.content[0]);
        video.setAttribute('src', obj.content[1]);
        infographic.setAttribute('src', obj.content[2]);

       
    }
    if(currentDisplay != null){
        if(el == essayTab){
            page.appendChild(essay);
        }
        else if(el == videoTab){
            page.appendChild(video);
        }
        else if(el == infoTab){
            page.appendChild(infographic);
        }   
    }
    
})



// UTIL

function removeAllChildren(parent){

    if(parent.hasChildNodes()){
        for(let i = 0; i < parent.children; i++){
            if(parent.children[i].className == "advocacy-tab-container"){
                continue;
            }
            else{
                parent.removeChild(parent.children[i]);
            }
          
        }
    }
}

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
