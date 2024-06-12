import express, { Application, Request, Response } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Dynamically load and use all route files in the 'api' folder
const routesPath = join(__dirname, '/src/app/api');
readdirSync(routesPath).forEach((file) => {
  if (file.endsWith('.ts') || file.endsWith('.js')) {
    const route = require(join(routesPath, file)).default;
    app.use('/api', route);
  }
});

// Define a simple route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
