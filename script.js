const API = "https://api.github.com/users/";

const form = document.getElementBuId("search-form");
const input = document.getElementById("search-input");

const statusLine = document.getElementById("status");

const profile = document.getElementById("profile");

const repositories = document.getElementById("repositories");

const repoHeading = document.getElementById("repo-heading");


function getUser(){
    const res = await fetch(`${API}`);
    const data = await res.json();

    console.log(data)
}
function showSkeletons(){
    
}

async function getUsers(username) {

}
async function getRepositories(username) {

    
}

function search(username) {

}

window.addEventListener("DOMContentLoaded", () => {
    input.value =  "PRAGNA098";

    search("PRAGNA098");
});