
let userName = prompt('Please enter your name');
const userGender = prompt('Please enter your gender!\n(male or female)');

switch(userGender){
    case 'male':
        userAge = prompt(`Please enter your age Mr ${userName}!`)
        
        break;
    case 'female':
        userAge = prompt(`Please enter your age Ms ${userName}!`)
       
        break;
    default:
        userAge = prompt(`Please enter your age ${userName}!`)
        
}

if (parseInt(userAge)<=0) {
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

 const answers = [3];
    if(moreQuestions==true){
        let quistion1=prompt(`Do you know how to code?`)
        switch (quistion1) {
            case 'yes':
                quistion1=`yes`
                console.log(`yes`);
                break;
             case 'no':
                quistion1=`no`
                console.log(`no`);
                break;
        
            default:
                quistion1=`invalid`
                console.log(`invalid`);
                break;
        }
        let quistion2=prompt(`Have you ever fallen asleep in class and got called out by a teacher for it?`)
        switch (quistion2) {
            case 'yes':
                quistion2=`yes`
                console.log(`yes`);
               
                break;
             case 'no':
                quistion2=`no`
                console.log(`no`);
                break;
        
            default:
                quistion2=`invalid`
                console.log(`invalid`);
                break;
        }
      
    
        let quistion3=prompt(`Have you ever stolen a candy bar from a local corner store?`)
        switch (quistion3) {
            case 'yes':
                quistion3=`yes`
                console.log(`yes`);
                
                break;
             case 'no':
                quistion3=`no`
                console.log(`no`);
                break;
        
            default:
                quistion3=`invalid`
                console.log(`invalid`);
                break;
        }
        let answers=[quistion1,quistion2,quistion3]
      
        console.log(answers);
      }
      
    
     
    
     

    
    

 


