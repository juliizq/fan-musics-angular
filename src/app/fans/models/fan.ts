export class Fan {
    public id: number;
    public name : string;
    public birthday : string;
    public musics : string[] = [];
    public image : string;
    
    constructor(){

    }

    fromJson(json  : any){
        this.id = json.id;
        this.name = json.name;
        this.birthday = json.birthday;
        this.musics = json.musics;
        this.image = json.image;
    }
}