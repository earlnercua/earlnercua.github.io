import {data} from './data.js';

function createStudentElement(dataIndex){
    let obj = data[dataIndex]

    let itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'students-list-item');
    

    let profilePic = document.createElement('img');
    let picURL = './images/profile_pictures/abreu.jpeg';
    //let aaa = './images/profile_pictures/' + obj.last_name.replace(" ", "").toLowerCase() + '.jpeg'
    
   
    
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
let selectedStudent = null;
let studentsListItems = document.getElementsByClassName('students-list-item');
let selected = null;
let previousStudent = null;

document.addEventListener('click', (e) => {
    let page = document.querySelector('.content-container');
    page.style.color="black";
    const el = e.target;

    const classList = ["students-list-item", "full-name", "advocacy", "student-picture"];

    if(classList.includes(e.className)){

        if(classList.includes(e.className) && el.className != classList[0]){
            selectedStudent = el.parentElement;
        }
        else{
            selectedStudent = el;
        }

        removeAllChildren(page);

        print("Successfully selected " + selectedStudent.textContent);
        




        //RESET
        document.getElementById("essay-btn").style.borderBottom = "3pt solid var(--main-accent)"
        document.getElementById("media-btn").style.borderBottom = "3pt solid var(--main-accent)"
        document.getElementById("infographic-btn").style.borderBottom = "3pt solid var(--main-accent)"
    }

    const arr = selectedStudent.querySelector('.full-name').textContent.split(', ');
    selected = arr[0];

    const obj = getStudent(selected);

    if(selectedStudent != null){



        const essayContent = obj.content[0];
        const mediaContent = obj.content[1];
        const infographicContent = obj.content[2];

        const essay = document.createElement('iframe');
        const media = document.createElement('iframe');
        const infographic = document.createElement('iframe');

        essay.setAttribute('src', essayContent);
        essay.setAttribute('class', "advocacy-content");
        media.setAttribute('src', mediaContent);
        media.setAttribute('class', "advocacy-content");
        infographic.setAttribute('src', infographicContent);
        infographic.setAttribute('class', "advocacy-content");


        if(el.className == "btn-container advocacy-tab-btn" || el.className == "btn-text"){
            if(el.className == "btn-container advocacy-tab-btn"){
                currentDisplay = el;
            }
            else{
                currentDisplay = el.parentElement;
            }
            

            if(currentDisplay.id == "essay-btn"){
                print("essay");
                removeAllChildren(page);

                document.getElementById("essay-btn").style.borderBottom = "5pt solid var(--main-accent)"
                document.getElementById("media-btn").style.borderBottom = "5pt solid rgb(120, 50, 100)"
                document.getElementById("infographic-btn").style.borderBottom = "5pt solid rgb(120, 50, 100)"
                page.appendChild(essay);
            }
            else if(currentDisplay.id == "media-btn"){
                print("media");
                removeAllChildren(page);


                document.getElementById("essay-btn").style.borderBottom = "5pt solid rgb(120, 50, 100)"
                document.getElementById("media-btn").style.borderBottom = "5pt solid var(--main-accent)"
                document.getElementById("infographic-btn").style.borderBottom = "5pt solid rgb(120, 50, 100)"
                page.appendChild(media);
            }
            else if(currentDisplay.id == "infographic-btn"){
                print("info");
                removeAllChildren(page);

                document.getElementById("essay-btn").style.borderBottom = "5pt solid rgb(120, 50, 100)"
                document.getElementById("media-btn").style.borderBottom = "5pt solid rgb(120, 50, 100)"
                document.getElementById("infographic-btn").style.borderBottom = "5pt solid var(--main-accent)"
                page.appendChild(infographic);
            }
            



        }
    }



    // if(el.className == 'students-list-item'){
    //     currentDisplay = el;
    //     removeAllChildren(page);

    //     let selectedArr = el.querySelector('.full-name').textContent.split(", ");
    //     selected = selectedArr[0];
    //     print("successfully selected " + selected);
    //     let obj = getStudent(selected);
    //     print(obj);
    //     let parsed = obj.first_name + obj.last_name + obj.content;

    //     const tabsArray = document.querySelectorAll(".advocacy-tab-btn");

    //     const tabsContainer = document.querySelector('.advocacy-tab-container');
    //     const essayTab = tabsArray[0];
    //     const mediaTab = tabsArray[1];
    //     const infoTab = tabsArray[2];
    //     const essay = document.createElement('iframe');
    //     const media = document.createElement('media');
    //     const infographic = document.createElement('img');


        
    //     essay.setAttribute('class', "student-essay");
    //     essay.setAttribute('src', obj.content[0]);
    //     media.setAttribute('src', obj.content[1]);
    //     infographic.setAttribute('src', obj.content[2]);


    //     if(currentDisplay != null){
    //         if(el == document.getElementById("essay-btn")){
    //             page.appendChild(essay);
    //         }
    //         else if(el == document.getElementById("media-btn")){
    //             page.appendChild(media);
    //         }
    //         else if(el == document.getElementById("infographic-btn")){
    //             page.appendChild(infographic);
    //         }   
    //     }
    // }
    
    
})



// UTIL

function removeAllChildren(parent){

    if(parent.hasChildNodes()){
        print("Has " + parent.children.length + " Children")
        for(let i = 0; i < parent.children.length; i++){
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
