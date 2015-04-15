var ElizaBot = require("elizabot");
var say = require("say");

var i = 0;

var chatbots = [{
  "name": "Alex",
  "voice": "Alex",
  "bot": new ElizaBot()
},{
  "name": "Victoria",
  "voice": "Victoria",
  "bot": new ElizaBot()
}];

var chat = function (chatbot, statement) {
  console.log(chatbot.name + ": ", statement);
  say.speak(chatbot.voice || chatbot.name, statement, function() {
    i = (i === chatbots.length-1) ? 0 : i+1;
    var nextBot = chatbots[i];
    var reply = nextBot.bot.transform(statement);
    chat(nextBot, reply);
  });
}

chat(
  chatbots[i],
  "Hi there, " + chatbots[i+1].name + ". How are you today?"
);
