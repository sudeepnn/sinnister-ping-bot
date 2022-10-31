function getBotResponse(input) {
   
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }


    if (input == "hello" || input =="hi") {
        return "Hello there! How can i help you..";
    } else if (input == "goodbye" || input == "bye") {
        return "Talk to you later!";
    } 
    else if(input=="whts your name" || input == "who are you" || input=="whats your name"){
        return "Im your Assistant Dolphine"
    }
    else if(input =="I Love You" || input == "i love u" || input == "i love you" ||input == "love u" || input == "do you love me" || input == "do you love me?")
    {
        return "I can't feel romantic love but i think you are wonderful "
    }
    else if(input == "fuck you" || input == "fuck u" || input == "fuck" || input == "bvc" ){
        return "I'm a virtual assistant but your words are still very real. Please keep them respectful."
    }
    else if(input=="Heart clicked!")
    return "Thank You"
    else if(input == "who created u" || input == "who created you" || input == "team" || input =="team members" || input == "who are your team members")
    {
        return "Sudeep Created me and My Team Include Shamya, Ovin ,Mishal"
    }
    
    else {
        return "Try asking something else!";
    }

    
   
}