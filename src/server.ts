import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path  from 'path';

//Rotas
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//iniciando rotas
server.use(mainRoutes);

server.use((req, res)=>{
    res.send('Página não encontrada');
});

// Escutando a porta 80
server.listen(process.env.PORT);
