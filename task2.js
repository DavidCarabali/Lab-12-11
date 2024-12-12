// Exportamos la clase FriendNames para que pueda ser importada en otros archivos
export class FriendNames {

  // El cosntructor recibe tres parametros: 
    constructor(name1, name2, name3){
     
      //Asigamos el valor de nombre1 al atributo nombre1 del objeto
      this.name1 = name1;
      this.name2 = name2;
      this.name3 = name3;

    }
  }
// Se esta instanciando un objeto (hijo) de tipo Player (papa que es la clase)
  const friend = new FriendNames("Karim", "Uli", "Georgina");

console.log(friend);