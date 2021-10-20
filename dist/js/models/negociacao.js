export class Negociacao {
    constructor(_data, /* public readonly data */ _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    /* programacao defensiva ex
    get data(): Date {
        const data: new Date(this._data.getTime());
        return data;
    }
    */
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
