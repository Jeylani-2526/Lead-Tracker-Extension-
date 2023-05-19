
let myLead = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("buttonclicked")
const deletebtn = document.getElementById("Delete-btn")
const TABbtn = document.getElementById("tab-btn")
let ulEl  = document.getElementById("ul-el")
let leadsFlclStorage= JSON.parse(localStorage.getItem("myLead"))



if(leadsFlclStorage){
    myLead=leadsFlclStorage
    render(myLead)
}

function render(lead)
{ let listItems = ""
for(let i = 0; i < lead.length; i++){
    listItems +=
    `<li>
    <a target = '_blank'                
    href='${lead[i]}'>   ${lead[i]} 
    </a>
    </li>`
}
ulEl.innerHTML = listItems
}


inputbtn.addEventListener("click",function(){
    myLead.push(inputEl.value)
inputEl.value=""
localStorage.setItem("myLead",JSON.stringify(myLead) )
render(myLead)
})

deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLead = []
    render(myLead)
})

TABbtn.addEventListener("click",function(){
    chrome.tabs.query({active: true , currentWindow:true},function(tabs){
        myLead.push(tabs[0].url)
    localStorage.setItem("myLead",JSON.stringify(myLead))
    render(myLead)
    })
    


})
