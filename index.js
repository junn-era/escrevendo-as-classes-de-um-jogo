
class hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attackType() {
      let attack = ""
      switch (this.type) {
        case "Guerreiro":
          attack = "Espada"
          break
        case "Mago":
          attack = "Magia"
          break
        case "Monge":
          attack = "Artes Marciais"
          break
        case "Ninja":
          attack = "Shuriken"
          break
        default:
          console.log("Tipo de ataque inválido.")
          break
      }
      console.log(`${this.type} atacou usando ${attack}`);
    }
}
    let heroWarrior = new hero("Fulano", 24, "Guerreiro");
    let heroWizard = new hero("Ciclano", 45, "Mago");
    let heroMonk = new hero("Aquele", 50, "Monge");
    let heroNinja = new hero("Lee", 35, "Ninja");    
  
    heroWarrior.attackType();
    heroWizard.attackType();
    heroMonk.attackType();
    heroNinja.attackType();