var ElizaBot = require("elizabot");
var say = require("say");

var alex = {};
var victoria = {};

alex.eliza = new ElizaBot();
victoria.eliza = new ElizaBot();

var initial = alex.eliza.getInitial();
chat(initial);

function chat(statement) {
  say.speak('Alex', statement, function() {
    var reply = victoria.eliza.transform(statement);
    say.speak('Victoria', reply, function() {
      var newStatement = alex.eliza.transform(reply);
      chat(alex.eliza.transform(newStatement));
    });
  });
}
