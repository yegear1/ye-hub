import fs from 'fs/promises';
import path from 'path';

export async function load() {
    try {
        const filePath = path.resolve(process.cwd(), 'data', 'projects.json');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const projects = JSON.parse(fileContent);

        return { projects };
        
    } catch (error) {
        console.error("Erro ao ler o arquivo JSON de projetos:", error);
        // Se der erro, retorna array vazio para não quebrar o site
        return { projects: [] }; 
    }
}