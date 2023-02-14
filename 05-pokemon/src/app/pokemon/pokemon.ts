export class Pokemon {
    declare id: number;
    declare name: string;
    declare hp: number;
    declare cp: number;
    declare picture: string;
    declare types: string[];
    declare created: Date;

    constructor(
        name: string = 'Entrez un nom...',
        hp: number = 100,
        cp: number = 10,
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        types: string[] = ['Normal'],
        created: Date = new Date(),
    ){
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}