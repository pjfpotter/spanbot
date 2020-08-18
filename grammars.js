 var story = {
    origin: "Pues, #opinion# #activity# #coz# es #mod# #posadj#",
    opinion: ["Me gusta", "Me encanta", "Me mola", "Me flipa"],
    activity: ["jugar a los videojuegos", "tocar la guitarra", "chatear con mis amigos", "ir de compras en el centro"],
    coz: ["porque", "ya que", "dado que"],
    mod: ["absolutamente", "indudablemente", "extremadamente", "verdaderamente"],
    posadj: ["guay", "la leche entera ", "la bomba", "superdivertido", "alucinante"]
  };

//alternative grammars
 var story = {
    origin: "#mascSing# #mascPlur# #femSing# #femPlur#",
    mascSing: [El #nm# #adjm# #verbsingular#.],
  };

 var story = {
    origin: "#origin1# #origin2#",
    origin1:    ["#suborigin1#", "#suborigin2#"],
    origin2:    ["#suborigin3#", "#suborigin4#"],
    suborigin1: ["does"],
    suborigin2: ["this"],
    suborigin3: ["actually"],
    suborigin4: ["work?"],
  };

 var story = {
    origin: "#origin1# #origin2#",
    origin1:    "La #nf# #adjf#",
    origin2:    "El #nm# #adjm#",
    nf:        ["mesa", "tortilla", "campana"],
    nm:        ["perro", "gato", "cuchillo"],
    adjf:      ["gorda", "timida", "ondulada"],
    adjm:      ["gordo", "timido", "ondulado"],
    
  };
