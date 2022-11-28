const selectStudyPrograms = document.getElementById("selectStudyPrograms");
const studyProgram = document.getElementById("studyProgram");
const studyProgram2 = document.getElementById("studyProgram2");

selectStudyPrograms.addEventListener("click", (e) => {
    studyProgram.textContent = e.target.value
    studyProgram2.textContent = e.target.value
})

const selectYears = document.getElementById("selectYears");
const year = document.getElementById("year");

selectYears.addEventListener("click", (e) => {
    year.textContent = e.target.value
})
