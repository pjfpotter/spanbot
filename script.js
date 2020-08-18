/* globals tracery */

window.addEventListener("load", () => {
 
  var story = {
    origin: "Pues, #opinion# #activity# #coz# es #mod# #posadj#",
    opinion: ["Me gusta", "Me encanta", "Me mola", "Me flipa"],
    activity: ["jugar a los videojuegos", "tocar la guitarra", "chatear con mis amigos", "ir de compras en el centro"],
    coz: ["porque", "ya que", "dado que"],
    mod: ["absolutamente", "indudablemente", "extremadamente", "verdaderamente"],
    posadj: ["guay", "la leche entera ", "la bomba", "superdivertido", "alucinante"]
  }; 
  
    var grammar = tracery.createGrammar(story);

  function firstRoll() {
    var result = grammar.flatten("#origin#");
    document.getElementById("result").innerHTML = result;
  }

  firstRoll(); //this outputs the first story

  document.getElementById("reroll").addEventListener("click", function() {
    var result = grammar.flatten("#origin#");
    document.getElementById("result").innerHTML = result;
  });
});
