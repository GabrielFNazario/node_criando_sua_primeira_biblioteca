import pegaArquivo from "../index.js";

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });

    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('C:\Users\Adriel\Desktop\Cursos JavaScript\
        node_criando_sua_primeira_biblioteca\test\arquivos\texto1.md')
        expect(resultado).toEqual(arrayResult);
    });

    it('deve retornar mensagem "não há links"', async() => {
        const resultado = await pegaArquivo('C:\Users\Adriel\Desktop\Cursos JavaScript\node_criando_sua_primeira_biblioteca\
        test\arquivos\texto1_semlinks.md');
        expect(resultado).toBe('não há links');
    });

});