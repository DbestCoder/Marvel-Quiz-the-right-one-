// Create the questions
let questions = [
    {
    id: 1,
    question: "What's the name of Black Panther's kingdom?",
    answer: "Wakanda",
    options: [
    "Makanda",
    "Wakanda",
    "Lambina",
    "Waklanda"
    ]
    },
    {
    id: 2,
    question: "Who is Thanos the son of?",
    answer: "A'lars",
    options: [
    "Karen",
    "A'lars",
    "En Sabah Nur",
    "Joe"
    ]
    },
    {
    id: 3,
    question: "What is the name of Thor's mother?",
    answer: "Frigga",
    options: [
    "Karen",
    "Frigga",
    "Aegir",
    "Alfdis"
    ]
    },
    {
    id: 4,
    question: "What was Captain America's height before he was transformed into a super-soldier?",
    answer: "5'4",
    options: [
    "4'11",
    "5'1",
    "5'9",
    "5'4"
    ]
    },
    {
    id: 5,
    question: "What was the name of the dwarf on Nidavellir?",
    answer: "Eitri",
    options: [
    "Steve",
    "Walsh",
    "Eitri",
    "Erik"
    ]
    },
    {
    id: 6,
    question: "Finish this line from Captain America: And Hulk, ___",
    answer: "Smash",
    options: [
    "Smash",
    "Kick ass",
    "Do it",
    "Good Luck"
    ]
    }
    ];
    
    let value = JSON.stringify(questions);// Converts the JSON object to the string, we do this because we need to send the data to the server or API so in such case we need the data in the form of string
    /*LocalStorage is a datastore available in browsers.
    Data is stored as key/value pairs of strings, and each domain has access to
    its LocalStorage. When storing JavaScript objects,
    be sure to correctly convert them to a string with JSON. stringify()
    before saving.*/
    localStorage.setItem("question", value);
    
    
    let question_count = 0;
    let points = 0;
    
    window.onload = function() {
    show(question_count);
    };
    
    function next() {
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1)
    {
    location.href = "end.html";
    }
    console.log(question_count);
    
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points); //sessionstorage is similar to localstorage, except that the data gets cleared when a new session is created in session storage
    }
    else{
    points += 0;
    sessionStorage.setItem("points", points);
    }
    console.log(points);
    
    question_count++;
    show(question_count);
    }
    
    function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
    //${variable} -> it is a placeholder (basically value is converted to string and is concatenated)
    
    question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>
    `;
    toggleActive();
    }
    
    function toggleActive() {
    let option = document.querySelectorAll("li.option"); // returns a list of all the matching element
    for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
    for (let i = 0; i < option.length; i++) {
    if (option[i].classList.contains("active"))
    {
    option[i].classList.remove("active");
    }
    }
    option[i].classList.add("active");
    };
    }
    }