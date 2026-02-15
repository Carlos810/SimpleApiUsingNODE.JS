/**
 * Factory para seleccionar el repositorio según el ambiente
 * IMPORTANTE: Cambiar ENV_MODE en las pruebas o en variables de entorno
 * 
 * Uso:
 * - LOCAL: usa taskRepository.js (en memoria)
 * - AWS: usa lamdaRepository.js (DynamoDB)
 */

const ENV_MODE = process.env.REPO_MODE || 'AWS'; // Cambiar a 'LOCAL' para desarrollo local

let repository;

if (ENV_MODE === 'LOCAL') {
  // Usar repositorio en memoria para desarrollo/pruebas locales
  repository = require('./taskRepository');
  console.log('⚙️  Usando repositorio en MEMORIA (LOCAL)');
} else if (ENV_MODE === 'AWS') {
  // Usar repositorio con DynamoDB para AWS
  repository = require('./lamdaRepository');
  console.log('⚙️  Usando repositorio en DYNAMODB (AWS)');
} else {
  throw new Error(`Ambiente desconocido: ${ENV_MODE}. Use 'LOCAL' o 'AWS'`);
}

module.exports = repository;
