import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});

import axios from "axios";
import FullstackResume from "./fullstack.resume.js";

export default class FullstackAtsResume extends FullstackResume {
  profile = "fullstack-ats";
  language = "pt-BR";

  async getData() {
    const data = await super.getData();
    const jobDescription = this.getJobDescription();

    const text = [
      `- Melhore este currículo para ficar "ATS friendly" para a vaga que vou te mandar.`,
      `- É importante que a estrutura do JSON permaneça fiel à que você receberá abaixo.`,
      `- Retorne apenas o JSON.`,
      `Descrição da vaga: ${jobDescription}`,
      `Currículo em JSON Resume: ${JSON.stringify(data)}`,
    ].join("\n");

    try {
      const resp = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Explain how AI works in a few words",
      });

      // const resp = await axios({
      //   method: "post",
      //   url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
      //   headers: {
      //     "Content-Type": "application/json",
      //     "x-goog-api-key": process.env.GEMINI_API_KEY,
      //   },
      //   data: { contents: [{ parts: [{ text: "Quanto é 2+2?" }] }] },
      // });

      // const resp = await axios({
      //   method: "post",
      //   url: `https://api.abacus.ai/route-llm/chat/completions`,
      //   headers: {
      //     "Content-Type": "application/json",
      //     apiKey: process.env.GEMINI_API_KEY,
      //     // Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
      //   },
      //   data: {
      //     model: "openrouter/auto",
      //     temperature: 0.7,
      //     stream: false,
      //     messages: [
      //       { role: "system", content: "Você é um assistente útil." },
      //       { role: "user", content: "Explique o que é REST em 2 frases." },
      //     ],
      //   },
      // });

      console.log(resp);

      // if (resp.data.candidates[0]) {
      //   const candidate = resp.data.candidates[0];
      //   if (candidate.content.parts[0]) {
      //     let json = candidate.content.parts[0].text;
      //     json = json.replace(/\`\`\`json(.+?)\`\`\`/s, "$1").trim();
      //     json = JSON.parse(json);
      //     console.log(json);
      //     return json;
      //   }
      // }
    } catch (e) {
      console.log(e.message);
      // console.error(_);
    }

    return data;
  }

  getJobDescription() {
    return `
  Desenvolvedor(a) Back End



Empresa: MBRAS


Sobre a MBRAS:



A MBRAS é referência em soluções tecnológicas e inovação, reconhecida por transformar desafios complexos em produtos digitais eficientes e de alto valor agregado. Priorizamos criatividade, excelência técnica e desenvolvimento contínuo, incentivando um ambiente colaborativo e com crescimento real.

Descrição da Vaga: Buscamos um(a) Desenvolvedor(a) Full Stack apaixonado(a) por tecnologia, com sólida experiência em desenvolvimento de APIs, arquiteturas escaláveis e conhecimentos em infraestrutura cloud. Você integrará uma equipe dinâmica, trabalhando com projetos estratégicos que fazem diferença direta para nossos clientes e mercado.



Responsabilidades:



Desenvolver e manter APIs RESTful robustas, escaláveis e performáticas.
Projetar e implementar arquiteturas de backend eficientes e seguras.
Integrar sistemas externos e serviços de terceiros.
Otimizar consultas de banco de dados e performance de aplicações.
Colaborar ativamente com times de produto, front-end e infraestrutura para entregar soluções eficazes.
Garantir versionamento eficiente com Git e pipelines CI/CD.
Monitorar aplicações em produção e resolver incidentes técnicos.
Acompanhar tendências emergentes em backend e cloud computing.


Requisitos:



Formação superior em Ciência da Computação, Engenharia de Software, Sistemas de Informação ou áreas correlatas.
Proficiência em linguagens de programação backend (Python, Go).
Experiência comprovada no desenvolvimento de APIs REST e microserviços.
Conhecimento sólido em bancos de dados relacionais (PostgreSQL, MySQL) e NoSQL (MongoDB, Redis).
Familiaridade com frameworks backend (FastAPI, Gin, Fiber ou similar).
Experiência com ferramentas de containerização (Docker) e orquestração.
Noções sólidas em versionamento (Git) e integração contínua (CI/CD).
Capacidade de comunicação clara e trabalho em equipe multidisciplinar.
Inglês técnico para leitura e escrita.


Diferenciais:



Experiência com TypeScript e testes automatizados (Jest, PyTest, JUnit).
Conhecimento em mensageria (RabbitMQ, Kafka) e cache distribuído.
Vivência com metodologias ágeis (Scrum, Kanban).
Experiência com ORM/ODM (Prisma, Sequelize, SQLAlchemy, Mongoose).
Conhecimento em arquiteturas de microserviços e event-driven.
Experiência com GraphQL e WebSockets.
Conhecimento em Rust para projetos de alta performance.
Experiência sólida em infraestrutura cloud (AWS, Azure, GCP): deploy, monitoramento e escalabilidade.
Conhecimento em DevOps: Kubernetes, Terraform, monitoring e logging.
Projetos pessoais ou contribuições open source relevantes.


Benefícios:



Ambiente flexível e colaborativo
Oportunidades claras de desenvolvimento profissional
Programas contínuos de treinamento e capacitação


Se você deseja fazer parte de uma equipe que valoriza inovação, qualidade técnica e desenvolvimento constante, venha construir o futuro com a MBRAS!
    `;
  }
}
