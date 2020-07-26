export default class BlockTreeModel { 
    
    constructor(
        private _id: string,
        private _author: string,
        private _type: number
    ){}

    get Id(): string{
        return this._id  
    }

    set Id(newId: string){
        this._id = newId
    }

    get Author(): string{
        return this._author
    }

    set Author(newAuthor: string){
        this._author = newAuthor
    }

    get Type(): number{
        return this._type
    }

        
}   