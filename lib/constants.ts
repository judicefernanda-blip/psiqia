import { generateDummyPassword } from "./db/utils";

export const isProductionEnvironment = process.env.NODE_ENV === "production";
export const isDevelopmentEnvironment = process.env.NODE_ENV === "development";
export const isTestEnvironment = Boolean(
  process.env.PLAYWRIGHT_TEST_BASE_URL ||
    process.env.PLAYWRIGHT ||
    process.env.CI_PLAYWRIGHT
);

export const guestRegex = /^guest-\d+$/;

export const DUMMY_PASSWORD = generateDummyPassword();

export const suggestions = [
  "Paciente 38 anos, F, humor deprimido há 6 meses, insônia, anedonia, fadiga. Usando sertralina 100mg há 8 semanas com resposta parcial. Gere conduta completa.",
  "Paciente 45 anos, M, ansiedade generalizada, ataques de pânico semanais, sem medicação prévia. PHQ-9: 12, GAD-7: 16. Gere conduta e receituário.",
  "Paciente 29 anos, F, diagnóstico de TAB II, em uso de lamotrigina 200mg. Queixa de episódio depressivo atual. Gere conduta baseada nas diretrizes CANMAT 2023.",
  "Paciente 52 anos, M, esquizofrenia em acompanhamento, uso de risperidona 4mg. Relata sintomas residuais e ganho de peso. Sugira ajuste terapêutico.",
];
