# Ferramentas de IA na Educação — Módulo 3

Plataforma educativa interativa em **português europeu (PT-PT)** dedicada à formação de docentes na criação e utilização pedagógica de **imagem, áudio, vídeo, ética, proteção de dados (RGPD) e legislação (Regulamento Europeu de IA)**.

## Publicar no GitHub Pages (automático)

Este projeto já inclui um fluxo automático do **GitHub Actions** (`.github/workflows/deploy.yml`) pronto a publicar o site gratuitamente no **GitHub Pages**.

### Passos para publicar:

1. **Criar um repositório no GitHub** (ex.: `modulo3-ia-educacao`) e enviar os ficheiros do projeto para o ramo `main` (ou `master`):
   ```bash
   git init
   git add .
   git commit -m "Versão inicial do Módulo 3"
   git branch -M main
   git remote add origin https://github.com/<O-SEU-UTILIZADOR>/<O-SEU-REPOSITORIO>.git
   git push -u origin main
   ```
2. No GitHub, abrir o separador **Settings** → **Pages** do repositório.
3. Em **Build and deployment → Source**, selecionar **GitHub Actions**.
4. Aguardar cerca de 1 minuto até o workflow **Publicar no GitHub Pages** concluir no separador **Actions** (também pode ser iniciado manualmente através de *Run workflow*).
5. O endereço público ficará disponível em:
   - `https://<O-SEU-UTILIZADOR>.github.io/<O-SEU-REPOSITORIO>/`

> **Nota:** Não é necessário configurar chaves de API nem variáveis secretas para publicar esta versão no GitHub Pages, porque toda a plataforma funciona de forma estática no navegador.

---

## Desenvolvimento local

```bash
npm install
npm run dev
```

### Verificação e compilação

```bash
npm run lint   # Verificação de tipos TypeScript
npm test       # Testes unitários dos dados e pesquisa
npm run build  # Compilação para produção na pasta dist/
```
