import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para entender JSON
app.use(express.json());

// Ruta de prueba (con tipado explícito de Request y Response)
app.get('/', (req: Request, res: Response) => {
    res.json({ message: '¡Bienvenido a mi API con Express y TypeScript!' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});