import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negociacao> /* Negociacao[] */ = [];

    adicionar(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    listar(): ReadonlyArray<Negociacao> /* readonly Negociacao[] */ {
        return this.negociacoes;
    }
}