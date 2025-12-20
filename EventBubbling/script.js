let data=[
    {
        "image": "https://i.pinimg.com/736x/be/09/81/be0981c4652679ab4db74f764d405132.jpg",
        "name": "Aarav Patel",
        "description": "A front-end developer who specializes in building responsive and accessible web interfaces.",
        "Role": "Front-End Developer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg",
        "name": "Sophia Nguyen",
        "description": "Experienced in designing scalable backend systems and RESTful APIs.",
        "Role": "Back-End Developer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/1200x/c9/19/2e/c9192eb573b0b721c5a0bab6def82fbf.jpg",
        "name": "Liam Johnson",
        "description": "Works on both client-side and server-side development using modern frameworks.",
        "Role": "Full Stack Developer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/7b/ee/e0/7beee03a673101945753c3a5b02bc8b5.jpg",
        "name": "Isabella Garcia",
        "description": "Focuses on improving software quality through automated and manual testing.",
        "Role": "Software Tester",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/41/83/7d/41837deb45987e224ba518b6bad4e48c.jpg",
        "name": "Noah Kim",
        "description": "Designs and maintains cloud infrastructure for high-availability applications.",
        "Role": "Cloud Engineer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/3a/e3/c1/3ae3c1d22d7dfe923a82d8240fa6ab90.jpg",
        "name": "Emma Brown",
        "description": "Analyzes user requirements and translates them into technical specifications.",
        "Role": "Business Analyst",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/6c/d0/66/6cd066eeadab12895f25bcf0d14077d6.jpg",
        "name": "Oliver Smith",
        "description": "Builds machine learning models to solve real-world problems.",
        "Role": "Machine Learning Engineer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/2c/85/25/2c85255a895e07476af7010c765dc21d.jpg",
        "name": "Mia Wilson",
        "description": "Creates intuitive user experiences through research and interface design.",
        "Role": "UI/UX Designer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/a3/ef/b9/a3efb9801a4b75deacd1d69995b3615a.jpg",
        "name": "Ethan Davis",
        "description": "Maintains CI/CD pipelines and ensures smooth software deployments.",
        "Role": "DevOps Engineer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/ce/00/0c/ce000c26b90bd20a7436a74fab62c56f.jpg",  
        "name": "Ava Martinez",
        "description": "Manages software projects and coordinates between technical teams.",
        "Role": "Project Manager",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/56/96/dd/5696dde5fc0f70ba39a9588d1ec26805.jpg",
        "name": "Lucas Anderson",
        "description": "Specializes in Android app development using Kotlin.",
        "Role": "Mobile App Developer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/a9/98/42/a9984271d6da6e4f701a11e10e3e0828.jpg",
        "name": "Charlotte Taylor",
        "description": "Develops iOS applications with a focus on performance and usability.",
        "Role": "iOS Developer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/1200x/0c/15/0f/0c150f8538dfbd4c3389966666a067f0.jpg",
        "name": "Benjamin Thomas",
        "description": "Protects systems by identifying vulnerabilities and improving security practices.",
        "Role": "Cybersecurity Engineer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/64/b3/30/64b330ed185b543af3fca57ca4d9e601.jpg",
        "name": "Amelia Hernandez",
        "description": "Works with large datasets to extract insights and support decision-making.",
        "Role": "Data Analyst",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/1200x/94/50/5d/94505dd52526d7a14082cc83c9d64059.jpg",
        "name": "Henry Moore",
        "description": "Designs and optimizes relational and non-relational databases.",
        "Role": "Database Administrator",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/cd/f9/87/cdf987c3475bbe14ecd17216ac9bb017.jpg",
        "name": "Evelyn Martin",
        "description": "Develops cross-platform applications using modern frameworks.",
        "Role": "Software Engineer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/da/0e/cc/da0ecc234782630806c4e1ff6f61e8d3.jpg",
        "name": "Jack Lee",
        "description": "Ensures applications run efficiently and meet performance standards.",
        "Role": "Performance Engineer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/00/69/30/006930ceb76146dff4ebb98497cdc1df.jpg",
        "name": "Harper Clark",
        "description": "Creates technical documentation and guides for software products.",
        "Role": "Technical Writer",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/ed/ae/cd/edaecd5af39bed040aa1e1ad48da5fe1.jpg",
        "name": "Daniel Lewis",
        "description": "Leads development teams and defines technical architecture.",
        "Role": "Tech Lead",
        "status": "Candidate"
    },
    {
        "image":"https://i.pinimg.com/736x/df/16/57/df165790d80fa38530f128f350fb315a.jpg",
        "name": "Ella Walker",
        "description": "Assists senior developers while learning best coding practices.",
        "Role": "Software Engineering Intern",
        "status": "Candidate"
    }
]

let main = document.querySelector("main");

function hireFunction(){
    let sum = '';
data.forEach((item,index)=>{
    sum += `<div class="card">
        <div id="profile">
            <img src="${item.image}" alt="profile">
        </div>
        <h2 id="name">${item.name}</h2>
        <h3 id="role">${item.Role}</h3>
        <p id="description">${item.description}</p>
        <h3 id="status" style="color: ${item.status === 'Employee' ? 'greenyellow' : 'red'}">${item.status}</h3>
        <button id= ${index} style="background-color: ${item.status === 'Employee' ? 'red' : ''};">${item.status === 'Employee' ? 'Fire' : 'Hire'}</button>
    </div>`

    main.innerHTML = sum;
});
}

hireFunction();


main.addEventListener("click",(dets)=>{
    if(dets.target.tagName === 'BUTTON'){
        let object = data[dets.target.id];
        object.status = object.status === 'Employee' ? 'Candidate' : 'Employee';
        hireFunction();
    }
});