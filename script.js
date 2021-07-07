const tagsEL = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.addEventListener("keyup",(e) => {
    createTags(e.target.value);
    if(e.keyCode === 13){
        setTimeout ( () => {
                e.target.value = " ";
        }, 10)
        randomSelect();

    }
});

function createTags(input){
    var tags = input.split(",").filter(tag => tag.trim()).map(tag => tag.trim());
    console.log(tags);
    tagsEL.innerHTML = "";
    tags.forEach(tag => {
        const tagEl = document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.innerText = tag;
        tagsEL.appendChild(tagEl);
    })
}


function randomSelect(){

    const times= 30;

    const interval = setInterval( () => {
        const randomTag = pickRandomTag()
        addHighlight(randomTag);
        setTimeout (() => {
            removeHighlight(randomTag)
        }, 100);

    }, 100);

    setTimeout(() => {
        clearInterval(interval);
            
        setTimeout(() => {
            const x = pickRandomTag();
            addHighlight(x);
        },100);

    }, times * 100)

}

function pickRandomTag(){
    const tags = document.querySelectorAll(".tag");
    var rand = Math.floor(Math.random() * tags.length);
    return tags[rand];
}

function addHighlight(tag){

    tag.classList.add("highlight");
}

function removeHighlight(tag){

    tag.classList.remove("highlight");
}