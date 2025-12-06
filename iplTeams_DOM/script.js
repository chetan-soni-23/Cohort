const arr = [{team: "CSK", primaryColor: "yellow", secondaryColor: "blue"},
             {team: "MI", primaryColor: "blue", secondaryColor: "silver"},
             {team: "RCB", primaryColor: "red", secondaryColor: "black"},
            {team: "KKR", primaryColor: "purple", secondaryColor: "gold"},
            {team: "SRH", primaryColor: "orange", secondaryColor: "grey"},
            {team: "DC", primaryColor: "blue", secondaryColor: "red"},
            {team: "RR", primaryColor: "pink", secondaryColor: "blue"},
            {team: "PBKS", primaryColor: "red", secondaryColor: "white"}          
];

const div = document.getElementById('box');
const btn = document.getElementById('btn');
const innerText = document.getElementById('insideText')

btn.addEventListener('click', () => {
    const randomTeam = Math.floor(Math.random()*arr.length)
    innerText.innerText = arr[randomTeam].team;
    div.style.backgroundColor= arr[randomTeam].primaryColor;
    innerText.style.color = arr[randomTeam].secondaryColor;
    innerText.style.fontSize = '10rem';
})
