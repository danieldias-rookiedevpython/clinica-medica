import  express  from "express";    // Importando o Express
import { nan, number, string } from "zod";
import type { Express, Request, Response } from "express";
import { no } from "zod/locales";
import dotenv from "dotenv"
import pacienteRoutes from "./routes/pacienteRoutes.js";
import medicoRoutes from "./routes/medicoRoutes.js";
import consultaRoutes from "./routes/consultaRoutes.js";

dotenv.config()

const app = express(); //  Instância da API(Representa o Framework)
app.use(express.json()); //json como padrão requisições e responses HTTP

const PORT: number = Number(process.env.PORT || 3000);  //Porta da API

app.use(pacienteRoutes);
app.use(medicoRoutes);
app.use(consultaRoutes);


interface Usuario {
    id: number;
    nome: string;
    telefone: string;
};
/*
const usuarios: Usuario[] = [];
usuarios.push({id: 1, nome: "Daniel", telefone: "11111"});
usuarios.push({id: 2, nome: "Maria", telefone: "222222"});

//  ROUTES DA NOSSA API (GET, POST, PUT E DELETE)


// RETORNA UMA LISTA DE USUÁRIOS
app.get("/usuarios", (req, res) => {  // Rota que retorna uma lista de usuarios
    res.json(usuarios);
});

// RETORNA UM USUÁRIO ESPECÍFICO
app.get("/usuarios/:id", (req, res) => {    // id é um path variables
    const idProcurado: number = Number(req.params.id);  // Recebe os parâmetros da URL
    const userFound: Usuario | undefined = usuarios.find((usuario) => usuario.id === idProcurado); // Usa .find() em cada instancia de usuários
    if(userFound) res.json(userFound)   // Retorna um json
    else res.status(404).json(`Usuário não encontrado`);  // Retorna mensagem de erro 404
});

// CRIA UM USUÁRIO
app.post("/usuarios", (req: Request, res: Response) => {
    const { nome, telefone } = req.body;

    // Validação dos Campos
    if(typeof nome !== 'string' || nome.trim() === "") {
        return res.status(400).json({message :"Nome deve ser obrigatório"})
    }

    if(typeof telefone !== 'string' || telefone.trim() === "") {
        return res.status(400).json({message : "Número de telefone deve see obrigatório"})
    }

    // Verifica se u=o usuário já existe
    const isUserExist: Usuario | undefined = usuarios.find(u => u.nome.toLocaleLowerCase() === nome.toLocaleLowerCase());
    if(isUserExist) {
        return res.status(409).json({message: "Já existe um usuário com esse nome"})
    }

    let maxId: number = 0;
    for(const user of usuarios) {
        if(user.id > maxId) {
            maxId = user.id;
        }
    }

    const userWithId: Usuario = {id: maxId + 1, nome, telefone};

    usuarios.push(userWithId);
    res.status(201).json(usuarios)  // 201 .CREATED
});

// ATUALIZA UM USUÁRIO
app.put("/usuarios/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id); // Recebe o id da URL

    // VALIDAÇÃO DO ID
    if(isNaN(id) || id <= 0) {
        return res.status(400).json({message: "ID inválido. Deve ser maior que zero e um  número positivo"});
    }

    // Procurando o Id desejado com validação de erro
    const userIndex: number = usuarios.findIndex(u => u.id === id);
    if(userIndex === -1) {
        return res.status(404).json({message: "Usuário não encontrado"});
    }

    // Extraindo apenas o nome e telefone de uma instância de usuários
    const {nome, telefone} = req.body;
    const currentUser: Usuario = usuarios[userIndex];   // usuário atual recebe ID desejado

    // Validação dos Campos(se não houver erros, ocorrerá a atualização devida)
    if (nome !== undefined) {
        if (typeof nome !== 'string' || nome.trim() === "") {
            return res.status(400).json({ message: "O nome, se fornecido, não pode estar vazio." });
        }
        currentUser.nome = nome;
    }

    if (telefone !== undefined) {
        if (typeof telefone !== 'string' || telefone.trim() === "") {
            return res.status(400).json({ message: "A idade, se fornecida, deve ser um número inteiro positivo." });
        }
        currentUser.telefone = telefone;
    }

    // Não foram informados os valores
    if (nome === undefined && telefone === undefined) {
        return res.status(400).json({ message: "Nenhum dado para atualizar foi fornecido (nome ou idade)." });
    }

    usuarios[userIndex] = currentUser;
    res.json(currentUser);
})

// DELETA UM CERTO USUÁRIO
app.delete("/usuarios/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id);

    if (isNaN(id) || id <= 0) return res.status(400).json({ message: "ID inválido. Deve ser um número inteiro positivo." });
    
    const userIndex: number = usuarios.findIndex(u => u.id === id);

    if (userIndex === -1) return res.status(404).json({ message: "Usuário não encontrado" });

    usuarios.splice(userIndex, 1); // método de deletar ou substituir elementos : .splice(começo, elem_a_serem_remov, item)
    res.status(204).send;
});

// Quando a Aplicação subir
app.listen(PORT, () => {
    console.log(`A API subiu na porta ${PORT}`);
});
*/
