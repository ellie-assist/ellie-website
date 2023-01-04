import { decode, encode } from "gpt-3-encoder";

import axios from "axios";
import dotenv from "dotenv";
import fs from "fs/promises";

dotenv.config({});

const outputLanguage = process.argv[2];
const outputLanguageCode = process.argv[3];

if (!outputLanguage || !outputLanguageCode) {
  console.log("Usage: node create-i18n.js <language> <language_code>");
  process.exit(1);
}
console.log(
  `Generating locale files for ${outputLanguage} (${outputLanguageCode})...`
);

try {
  await fs.access(`public/locales/${outputLanguageCode}/`);
  console.log(`Created new dir public/locales/${outputLanguageCode}/...`);
} catch (err) {
  await fs.mkdir(`public/locales/${outputLanguageCode}`);
}

function createPrompt(localeJsonNs, language) {
  return `You are a translator that creates JSON config files for the internationalisation of websites. 
Here is an example of a JSON configuration file for a website called ellieai.com, and the intended output when translated into French:
###
Input JSON config in English:
{
  "meta": {
     "description": "Sign up for Ellie - Your AI Email Assistant"
  },
  "hero": {
     "title": "Meet Ellie, your AI email assistant"
  }
}
Output JSON config in French: 
{
  "meta": {
     "description": "Inscrivez-vous à Ellie - Votre assistant de messagerie IA"
  },
  "hero": {
     "title": "Rencontrez Ellie, votre assistante de messagerie IA"
  }
}

###

Given the following language config:
${JSON.stringify(localeJsonNs, null, 2)}

Write a JSON config for ${language}. It doesn't have to be a direct translation, you should paraphrase if it would make more sense:`;
}

async function requestOpenAITranslation(p) {
  const apiKey = process.env.OPENAI_KEY;
  const tokens = encode(p).length;
  let data = {
    model: "text-davinci-003",
    prompt: p,
    max_tokens: 4000 - tokens,
    temperature: 0.2,
    frequency_penalty: 0.1,
    presence_penalty: 0.1,
    best_of: 2,
    top_p: 1,
  };
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    data,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  const { choices } = response.data;
  return choices[0]?.text;
}

async function run() {
  const files = await fs.readdir("public/locales/en");
  for (let file of files) {
    // const file = "faq.json";
    console.log(`${file}...`);
    const jsonConfig = await fs.readFile(`public/locales/en/${file}`);
    const content = jsonConfig.toString();
    const p = createPrompt(content, outputLanguage);
    const translation = await requestOpenAITranslation(p);
    fs.writeFile(`public/locales/${outputLanguageCode}/${file}`, translation);
  }

  console.log(`Done!`);
}

run();
