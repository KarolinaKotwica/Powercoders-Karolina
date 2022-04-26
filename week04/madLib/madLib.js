function Story (name, adj, adv, verb) {
    this.name = name;
    this.adj = adj;
    this.adv = adv;
    this.verb = verb;
}
var myStory = new Story("Karol", "good","fully","make")

var shotStory = `Many years ago in Denmark there was a prince called ${myStory.name}. One day Hamlet's father, the king, dies suddenly and Hamlet is very ${myStory.adj}. After this, Hamlet's mother, Gertrude, gets married again very ${myStory.adv}. She ${myStory.verb} her husband's brother, Claudius, and Claudius is now the king! 'Aargh! How could you do this to me!'`;


console.log(shotStory);