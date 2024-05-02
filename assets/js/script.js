const form = document.querySelector("#form");
const dailyNote = document.querySelector("#dailyNote");
const container = document.querySelector(".container");
let dailyNotes = JSON.parse(localStorage.getItem("dailyNotes")) || [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    const nowDate = new Date();
    const newDate = nowDate.toLocaleString("tr")

    dailyNotes.push({
        note: dailyNote.value,
        created_at: newDate
    });
    dailyNote.value = "";
    localStorage.setItem("dailyNotes", JSON.stringify(dailyNotes));
    displayDailyNotes();
});

function displayDailyNotes(){
    container.innerHTML = dailyNotes.reverse().map(dailyNote => `
        <div class="card">${dailyNote.note} - ${dailyNote.created_at}</div>
    `).join("");
}

displayDailyNotes();
