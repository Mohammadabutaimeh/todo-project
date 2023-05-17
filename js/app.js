
let userName = prompt('Please enter your name');
let userGender = prompt('Please enter your gender!\n(male or female)').toLowerCase();
switch(userGender){
    case 'male':
        userAge = prompt(`Please enter your age Mr ${userName}!`).parseInt();
        
        break;
    case 'female':
        userAge = prompt(`Please enter your age Ms ${userName}!`).parseInt();
       
        break;
    default:
        userAge = prompt(`Please enter your age ${userName}!`).parseInt();
        
}

if (userAge<=0) {
   alert(`The age ${userAge} is less than or equal to zero !! `);   
}

let confirmation=confirm(" if you want to skip the welcoming message please press ok");

if (confirmation==false) {
    switch(userGender){
        case 'male':
            welcomingMessage=`Hello Mr ${userName}\nWelcome to our website`
             break;
         case 'female':
             welcomingMessage=`Hello Ms ${userName}\nWelcome to our website`
             break;
         default:
             welcomingMessage=`Hello ${userName}\nWelcome to our website`
     }
         
         alert(welcomingMessage)
    
}

const moreQuestions = confirm('Do you want to Answer more questions ?');

 let answers = [3];

 function checkAnswers(quistion1) {
    switch (quistion1) {
        case 'yes':
            quistion1=`yes`
            break;
         case 'no':
            quistion1=`no`
            break;
        default:
            quistion1=`invalid`
            break;
    }
    return (quistion1)
 }
    if(moreQuestions==true)
    {
        let quistion1=prompt(`Do you know how to code?`).toLowerCase();
       
        let quistion2=prompt(`Have you ever fallen asleep in class and got called out by a teacher for it?`).toLowerCase();
        
        let quistion3=prompt(`Have you ever stolen a candy bar from a local corner store?`).toLowerCase();

         answers=[checkAnswers(quistion1),checkAnswers(quistion2),checkAnswers(quistion3)]
      
      }
      
    for (let i = 0; i < answers.length; i++) {

        console.log(answers[i]); 
        
    }
     
    
     

    
    

 


