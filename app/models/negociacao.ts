export class Negociacao {
    constructor(
        private _data: Date, /* public readonly data */
        private _quantidade: number, 
        private _valor: number
    ){}

    /* programacao defensiva ex
    get data(): Date {
        const data: new Date(this._data.getTime());
        return data;
    }
    */

    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }
}