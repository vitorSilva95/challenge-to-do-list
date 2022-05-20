import app from './app';
import connectToDatabase from '../database/connection';

const PORT = process.env.PORT || 3001;
connectToDatabase();
app.listen(PORT, ()=> {
  console.log(`Rodando na porta ${PORT}`);
});