//using Tracery's 'actions' feature to manage agreement in gender and number in Spanish.

let story = {
    "historia" : ["#iLike.capitalize# #the# #cosa# #porque# #itIs# #adj#."],
    "setCosa" : ["[iLike:me gusta][the:la][cosa:#femCosa#][itIs:es][adj:#femAdj#]", 
                 "[iLike:me gusta][the:el][cosa:#mascCosa#][itIs:es][adj:#mascAdj#]",
                 "[iLike:me gustan][the:las][cosa:#femCosaS#][itIs:son][adj:#femAdjPlural#]",
                 "[iLike:me gustan][the:los][cosa:#mascCosaS#][itIs:son][adj:#mascAdjPlural#]",
                ],
    "femAdj" : ["buena", "chula", "estupenda"],
    "mascAdj" : ["bueno", "chulo", "estupendo"],
    "femAdjPlural" : ["buenas", "chulas", "estupendas"],
    "mascAdjPlural" : ["buenos", "chulos", "estupendos"],
    "femCosa" : ["música", "lectura", "filosofia"],
    "mascCosa" : ["cine", "deporte", "rugby"],
    "femCosaS" : ["fiestas", "vacaciónes", "golosinas"],
    "mascCosaS" : ["insectos", "perros", "videojuegos"],
    "porque" : ["porque", "ya que"],
    "origin" : ["#[#setCosa#]historia#"]
  }
