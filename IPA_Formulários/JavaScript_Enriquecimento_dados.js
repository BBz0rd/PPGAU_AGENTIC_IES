
// --- Início do Código Completo para Enriquecimento de Dados ---

const item = items[0];
let dadosPrimarios;

// Tentativa de acessar os dados de forma robusta
if (typeof item.json.data === 'string') {
  try {
    dadosPrimarios = JSON.parse(item.json.data);
  } catch (e) {
    console.error("Erro ao fazer o parse da string JSON:", e);
    dadosPrimarios = {};
  }
} 
else if (item.json.output) {
    dadosPrimarios = item.json.output;
}
else {
    dadosPrimarios = item.json;
}

const dadosEnriquecidos = { ...dadosPrimarios };

// --- Bloco de Lógica 1: Fundação ---
const siglaNormalizada = dadosEnriquecidos.fundacao_sigla?.toLowerCase().trim();
switch (siglaNormalizada) {
  case "fepese":
    dadosEnriquecidos.Nome_Fundacao = "Fundação de Estudos e Pesquisas Socioeconômicos";
    dadosEnriquecidos.Data_Fundacao = "20/07/1962";
    dadosEnriquecidos.Ano_Fundacao = "1977";
    dadosEnriquecidos.Portaria = "nº 42, de 24 de julho de 2017";
    break;
  default:
    console.log(`Sigla "${siglaNormalizada}" não encontrada.`);
    dadosEnriquecidos.Nome_Fundacao = null;
    dadosEnriquecidos.Data_Fundacao = null;
    dadosEnriquecidos.Ano_Fundacao = null;
    dadosEnriquecidos.Portaria = null;
}

// --- Bloco de Lógica 2: Tipo do Projeto ---
const tipoNormalizado = dadosEnriquecidos.tipo?.toLowerCase().trim();
switch (tipoNormalizado) {
  case "projeto de desenvolvimento institucional":
  case "desenvolvimento institucional":
    dadosEnriquecidos.Pro_reitoria = "Pró-Reitor (a) de Administração";
    dadosEnriquecidos.Pro_reitor = "Vilmar Michereff Junior";
    break;
  case "projeto de ensino – graduação":
  case "ensino – graduação":
  case "graduação":
    dadosEnriquecidos.Pro_reitoria = "Pró-Reitor (a) de graduação e educação básica";
    dadosEnriquecidos.Pro_reitor = "Prof.ª Dilceane Carraro";
    break;
  case "projeto de ensino – pós-graduação":
  case "ensino – pós-graduação":
  case "pós-graduação":
    dadosEnriquecidos.Pro_reitoria = "Pró-Reitor (a) de Pós-Graduação";
    dadosEnriquecidos.Pro_reitor = "Prof. Werner Kraus Junior";
    break;
  case "projeto de pesquisa e inovação":
  case "pesquisa e inovação":
  case "pesquisa":
    dadosEnriquecidos.Pro_reitoria = "Pró-Reitor (a) de Pesquisa";
    dadosEnriquecidos.Pro_reitor = "Prof. Jacques Mick";
    break;
  case "extensão":
    dadosEnriquecidos.Pro_reitoria = "Pró-Reitor (a) de Extensão";
    dadosEnriquecidos.Pro_reitor = "Profª Olga Regina Zigelli Garcia";
    break;
  default:
    console.log(`O tipo de projeto "${dadosEnriquecidos.tipo}" não foi reconhecido.`);
    dadosEnriquecidos.Pro_reitoria = null;
    dadosEnriquecidos.Pro_reitor = null;
}

return [{ json: dadosEnriquecidos }];

// --- Fim do Código ---

