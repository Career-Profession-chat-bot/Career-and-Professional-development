import { CareerUniverse } from '../types/careeros';
import { SOFTWARE_DEVELOPER_PRESET } from './careerPresets';

export const AI_ENGINEER_PRESET: CareerUniverse = {
  profession: 'AI Engineer',
  category: 'Technology',
  lastUpdated: '2026',
  identity: {
    profession: 'AI Engineer',
    category: 'Technology',
    mainPurpose: 'Design, build, evaluate, and deploy scalable machine learning models, retrieval-augmented generation (RAG) pipelines, and autonomous agentic workflows to automate high-cognition tasks.',
    problemSolved: 'Transforms raw foundation models and unstructured data into reliable, production-grade intelligence embedded into enterprise software.',
    whereTheyWork: ['AI research labs', 'Enterprise SaaS companies', 'Autonomous systems firms', 'Healthcare AI startups', 'FinTech quant teams'],
    hiringIndustries: ['Enterprise Software', 'Healthcare & Biotech', 'Finance & Banking', 'Autonomous Vehicles', 'Creative & Media'],
    titleVariations: ['Machine Learning Engineer', 'LLM Application Architect', 'Applied AI Scientist', 'GenAI Platform Engineer']
  },
  reality: {
    whatProfessionalsActuallyDo: [
      'Data preparation, vectorization, synthetic generation, and cleaning (takes 50% of the time).',
      'Experimenting with retrieval architectures, chunking strategies, and re-ranking models.',
      'Evaluating hallucination rates, precision/recall, and latency across foundation models.',
      'Optimizing inference costs, token budgets, and caching layers.'
    ],
    typicalResponsibilities: [
      'Building robust RAG pipelines with semantic search and hybrid keyword retrieval.',
      'Fine-tuning open-source models (Llama, Mistral) using LoRA/QLoRA on domain datasets.',
      'Setting up automated LLM-as-a-Judge evaluation harnesses.',
      'Preventing prompt injection, data exfiltration, and jailbreak vulnerabilities.'
    ],
    typicalWorkEnvironment: 'High-performance GPU cluster environments (CUDA, PyTorch), Python notebooks, vector databases, and containerized inference servers.',
    typicalWorkdayTimeline: [
      { time: '09:30 AM', task: 'Model Benchmark Review', detail: 'Inspect overnight automated evaluation runs on benchmark test sets.' },
      { time: '11:00 AM', task: 'RAG Pipeline Optimization', detail: 'Experiment with hybrid vector search and metadata filtering in Milvus/Pinecone.' },
      { time: '01:30 PM', task: 'Inference Cost & Latency Tuning', detail: 'Implement semantic caching (Redis) and prompt token minimization.' },
      { time: '03:30 PM', task: 'Safety & Guardrails Testing', detail: 'Audit model outputs for hallucinations, PII leakage, and red-team prompts.' },
      { time: '05:30 PM', task: 'Documentation & Dataset Versioning', detail: 'Log fine-tuning hyperparameters in Weights & Biases / MLflow.' }
    ],
    commonTasks: ['Prompt pipeline engineering', 'Vector embedding tuning', 'Inference latency optimization', 'Data curation and cleaning'],
    toolsUsed: ['Python', 'PyTorch', 'Hugging Face', 'LangChain / LlamaIndex', 'Pinecone / Qdrant', 'Weights & Biases', 'Docker'],
    peopleTheyWorkWith: ['Data Engineers', 'Product Managers', 'Backend Software Engineers', 'Domain Subject Matter Experts'],
    beginnerMisunderstandings: [
      'Beginners think AI engineering is typing clever prompts into a chatbot. In reality, it is rigorous software engineering, mathematical evaluation, and infrastructure design.',
      'Beginners assume AI produces deterministic code. Managing probabilistic, non-deterministic outputs requires deep testing discipline.'
    ],
    unromanticizedTruth: 'AI engineering is 80% systems engineering, data pipelines, and rigorous benchmarking. Foundation models are unpredictable black boxes; turning them into dependable enterprise tools requires relentless edge-case debugging.'
  },
  realityCheck: {
    whatLooksAttractive: ['Cutting-edge prestige', 'Sky-high compensation', 'Shaping the future of human-machine interaction'],
    whatIsActuallyDifficult: ['Models hallucinate unpredictably', 'GPU infrastructure is expensive and constrained', 'Fast-shifting tooling ecosystem with weekly obsolescence'],
    beginnerFrustrations: ['Getting a model to work in a notebook is easy; making it reliable at 99.9% uptime with sub-second latency is brutal.'],
    competitionLevel: 'Extremely high for prompt-wrapper hobbyists; desperate shortage of real systems engineers who understand vector search and evaluation.',
    learningCurveAnalysis: 'Steep: requires linear algebra, probability, Python systems, and distributed inference knowledge.',
    workPressureReality: 'High pace due to intense competitive race among tech companies to deploy AI capabilities.',
    continuousLearningRequirements: 'Extreme. New model architectures and evaluation papers publish daily.',
    commonMistakes: ['Building fragile wrappers around single API calls without fallback strategies or evaluation metrics.'],
    socialMediaVsReality: 'Social media claims anyone can become an AI engineer in 1 week with 3 prompts. Real AI engineering requires production Python, Docker, vector math, and ML evaluation.'
  },
  mythsVsReality: [
    { myth: 'You must build models from scratch with PhD-level math.', reality: 'Most commercial AI engineering focuses on applied engineering: orchestrating, fine-tuning, evaluating, and deploying existing foundation models.' },
    { myth: 'Prompt engineering is enough to get hired.', reality: 'Companies hire engineers who write production Python, build resilient retrieval systems, and measure precision mathematically.' }
  ],
  prosAndCons: {
    pros: ['Highest industry compensation packages', 'Massive global venture capital investment', 'Solving brand-new, intellectually exhilarating problems'],
    cons: ['Extreme pace of tooling changes', 'Debugging non-deterministic model errors can be frustrating', 'High compute costs limit hobbyist experimentation'],
    realityMatrix: [
      { area: 'Income Potential', reality: 'Extremely High', details: '$120k-$250k+ in US, 12-35 LPA in India for proven applied engineers.' },
      { area: 'Learning Difficulty', reality: 'High to Very High', details: 'Requires solid foundation in software engineering, statistics, and neural network concepts.' },
      { area: 'Competition', reality: 'High at surface level, Low at deep systems level', details: 'Tens of thousands can call an API; very few can build an offline evaluation framework.' }
    ]
  },
  audienceFit: {
    whoMayEnjoy: ['People who love the intersection of mathematics, linguistics, and software engineering.', 'Builders comfortable with probabilistic uncertainty.'],
    whoMayFindChallenging: ['Individuals who require 100% deterministic, predictable outputs from every line of code.'],
    tryBeforeCommit: {
      title: 'The 7-Day RAG & Evaluation Challenge',
      experimentDescription: 'Build an offline question-answering system over a 200-page complex PDF and measure answer hallucination rate mathematically.',
      testTasks: [
        'Day 1: Set up Python, LangChain/LlamaIndex, and an open-source embedding model.',
        'Day 2: Ingest a dense financial or legal PDF and experiment with chunk sizes (250 vs 1000 tokens).',
        'Day 3: Store chunks in a local vector database (Chroma/FAISS).',
        'Day 4: Build a retrieval query that returns top-k semantic matches with citations.',
        'Day 5: Write 20 ground-truth questions and evaluate retrieval precision.',
        'Day 6: Add a re-ranking model (Cohere or BGE) and measure accuracy jump.',
        'Day 7: Calculate cost per 1,000 queries and document hallucination mitigation.'
      ]
    }
  },
  educationAndEligibility: {
    traditionalRoute: { name: 'CS/Data Science Degree', sequence: ['B.S. in Computer Science/Math', 'Coursework in Linear Algebra & ML', 'AI Lab Research or Internship', 'Applied AI Engineer role'], detail: 'Strongest foundation for mathematical models.' },
    alternativeRoute: { name: 'Self-Taught Systems Engineer', sequence: ['Deep Python & backend mastery', 'Fast.ai / DeepLearning.ai courses', 'Building 2 production RAG/Agent platforms with public evaluations', 'Open source contributions'], detail: 'Requires transparent evaluation benchmarks in public GitHub repos.' },
    careerSwitchRoute: { name: 'Backend SWE to AI Engineer', sequence: ['Leverage existing distributed systems & API experience', 'Learn vector embeddings & LLM orchestration', 'Internal AI project migration'], detail: 'Fastest route for existing senior developers.' },
    advancedRoute: { name: 'Research to Production Track', sequence: ['M.S./Ph.D. in AI/ML', 'Publish papers', 'Staff AI Scientist'], detail: 'For foundational architecture innovation.' },
    requiredEducation: ['No legal license required.'],
    preferredEducation: ['B.S./M.S. in Computer Science, Data Science, or Mathematics.'],
    optionalEducation: ['Specialized AI certifications (DeepLearning.ai, AWS Machine Learning Specialty).'],
    certifications: [{ name: 'AWS Certified Machine Learning - Specialty', issuer: 'Amazon Web Services', valueScore: 'High' }],
    licensesOrExams: ['None'],
    mandatoryVsOptionalClarification: 'Coding competence in Python, vector search, and evaluation is mandatory. Formal AI degree is optional.'
  },
  skills: {
    technicalSkills: [
      { id: 'ai-1', name: 'Python & Async Concurrency', level: 'Level 1 — Must Know', category: 'Technical', description: 'Advanced Python, type hints, Pydantic, FastAPI, and async I/O for streaming tokens.', proofOfSkill: 'FastAPI service streaming tokens with backpressure handling.' },
      { id: 'ai-2', name: 'RAG & Vector Search Architecture', level: 'Level 1 — Must Know', category: 'Technical', description: 'Chunking strategies, embedding models, vector indexing (HNSW, IVFFlat), and hybrid BM25 search.', proofOfSkill: 'Evaluation matrix comparing chunk sizes and retrieval accuracy.' },
      { id: 'ai-3', name: 'LLM Evaluation & Guardrails', level: 'Level 2 — Should Know', category: 'Technical', description: 'Ragas, DeepEval, hallucination detection, prompt injection guards, and toxicity filters.', proofOfSkill: 'Automated CI pipeline that runs 100 test prompts and halts deploy if hallucination > 3%.' },
      { id: 'ai-4', name: 'Agentic Workflows & Tool Calling', level: 'Level 3 — Advanced', category: 'Technical', description: 'ReAct pattern, LangGraph, autonomous plan-and-execute loops, and function calling.', proofOfSkill: 'Multi-agent system that executes multi-step web scraping and financial report synthesis.' },
      { id: 'ai-5', name: 'Fine-Tuning & Model Quantization', level: 'Level 4 — Specialization', category: 'Technical', description: 'LoRA, QLoRA, Axolotl, vLLM, Ollama, and GGUF quantization for local deployment.', proofOfSkill: 'Fine-tuned 8B model with custom training dataset beating standard foundation model on domain task.' }
    ],
    softSkills: [
      { id: 'ai-s1', name: 'Managing Probabilistic Expectations', level: 'Level 1 — Must Know', category: 'Soft', description: 'Explaining non-deterministic AI behavior to business stakeholders honestly.', proofOfSkill: 'Clear executive SLA documentation stating confidence intervals rather than 100% guarantees.' }
    ],
    tools: [
      { id: 'ai-t1', name: 'PyTorch / Hugging Face', level: 'Level 1 — Must Know', category: 'Tool', description: 'Transformers library, tokenizer pipelines, and model checkpoints.', proofOfSkill: 'Local model inference script with quantization.' },
      { id: 'ai-t2', name: 'Vector Databases (Pinecone / Qdrant / pgvector)', level: 'Level 1 — Must Know', category: 'Tool', description: 'Index creation, metadata filtering, and semantic similarity queries.', proofOfSkill: 'pgvector query with composite filtering and cosine distance index.' }
    ],
    domainKnowledge: [
      { topic: 'Transformer Architecture & Self-Attention', whyItMatters: 'Understanding tokens, context windows, and quadratic attention memory limits informs optimization.' }
    ]
  },
  defaultSkillGaps: [
    {
      skill: 'Automated Offline Evaluation Harnesses',
      whyItMatters: 'Without automated testing, you cannot know if a prompt change improved or broke the system.',
      currentLikelyLevel: 'Manual spot-checking with 3 questions in a chat interface.',
      targetLevel: 'Automated evaluation suite running 200 diverse test queries measuring Faithfulness, Answer Relevance, and Context Precision.',
      howToLearn: 'Implement the Ragas or DeepEval framework on an existing dataset.',
      practiceMethod: 'Build a synthetic test set of 50 adversarial questions designed to trigger hallucinations.',
      projectToDemonstrate: 'RAG evaluation dashboard with automated regression alarms.'
    }
  ],
  learningRoadmap: [
    {
      stageNumber: 0,
      code: 'STAGE_0_ORIENTATION',
      title: 'Stage 0 — AI Landscape & Token Mechanics',
      duration: 'Weeks 1–2',
      whatToLearn: ['Tokenization, context windows, embeddings, and foundational model architectures', 'API gateways, temperature, top_p, and JSON mode constraints'],
      whyToLearn: 'Grasps how models ingest and generate token distributions.',
      suggestedPractice: 'Inspect token counts using tiktoken and test parameter variance.',
      expectedOutcome: 'Fluency in token economics and API parameters.',
      commonMistakes: ['Treating models like magical sentient beings rather than statistical token predictors.'],
      readyCriteria: 'Can calculate the exact API cost for a 100k-token batch processing workload.'
    },
    {
      stageNumber: 1,
      code: 'STAGE_1_FOUNDATION',
      title: 'Stage 1 — Python, Pydantic & FastAPI Microservices',
      duration: 'Weeks 3–6',
      whatToLearn: ['Type hints, Pydantic data validation, async FastAPI endpoints', 'SSE token streaming for conversational interfaces', 'Dockerizing Python apps'],
      whyToLearn: 'AI capabilities must be wrapped in production-grade web APIs.',
      suggestedPractice: 'Build a streaming AI proxy with token usage logging and rate limiting.',
      expectedOutcome: 'Production-ready Python API microservice.',
      commonMistakes: ['Blocking the main thread with synchronous model API calls.'],
      readyCriteria: 'FastAPI service deployed and streaming tokens at 60 tokens/sec.'
    },
    {
      stageNumber: 2,
      code: 'STAGE_2_CORE_SKILLS',
      title: 'Stage 2 — Retrieval-Augmented Generation (RAG)',
      duration: 'Weeks 7–10',
      whatToLearn: ['Document ingestion, chunking strategies, semantic embeddings', 'Vector databases (pgvector, Qdrant), HNSW indexing', 'Hybrid search (Dense vector + Sparse BM25) and re-ranking'],
      whyToLearn: 'RAG is the standard enterprise method for grounding models in private data without retraining.',
      suggestedPractice: 'Build a searchable knowledge base over 500 company policy documents.',
      expectedOutcome: 'High-precision semantic search engine with verified citations.',
      commonMistakes: ['Using arbitrary 1000-character chunks that split sentences in half.'],
      readyCriteria: 'Retrieval returns relevant context in top 3 results for 95% of queries.'
    },
    {
      stageNumber: 3,
      code: 'STAGE_3_PRACTICE',
      title: 'Stage 3 — Evaluation, Hallucination Audits & Guardrails',
      duration: 'Weeks 11–14',
      whatToLearn: ['RAG evaluation metrics: Context Recall, Context Precision, Faithfulness', 'LLM-as-a-Judge benchmarking', 'NeMo Guardrails / Llama Guard for safety and prompt injection defense'],
      whyToLearn: 'Enterprise companies refuse to deploy AI without mathematical reliability proof.',
      suggestedPractice: 'Write automated regression tests that verify answers cite source documents accurately.',
      expectedOutcome: 'Measurable, audited AI pipeline with safety guardrails.',
      commonMistakes: ['Relying on "vibe checks" instead of quantitative evaluation metrics.'],
      readyCriteria: 'CI pipeline tests 100 test queries and blocks deployment on hallucination spikes.'
    },
    {
      stageNumber: 4,
      code: 'STAGE_4_PROJECTS',
      title: 'Stage 4 — Autonomous Agents & Multi-Tool Calling',
      duration: 'Weeks 15–18',
      whatToLearn: ['Tool calling / function calling with structured outputs', 'Stateful agent loops (LangGraph / AutoGen)', 'Human-in-the-loop approvals and error recovery'],
      whyToLearn: 'Autonomous agents can execute multi-step workflows across external databases and APIs.',
      suggestedPractice: 'Build an autonomous market research agent that scrapes websites, checks financial filings, and generates an executive memo.',
      expectedOutcome: 'Multi-step autonomous agent with error self-correction.',
      commonMistakes: ['Infinite looping agents that rack up massive token bills when tools fail.'],
      readyCriteria: 'Agent successfully recovers when an external tool returns an error.'
    },
    {
      stageNumber: 5,
      code: 'STAGE_5_SPECIALIZATION',
      title: 'Stage 5 — Fine-Tuning, vLLM & Local Model Serving',
      duration: 'Weeks 19–22',
      whatToLearn: ['LoRA/QLoRA fine-tuning on domain datasets', 'vLLM and TensorRT-LLM for high-throughput serving', 'Quantization (4-bit, 8-bit, AWQ)'],
      whyToLearn: 'Reduces inference costs by 80% and keeps sensitive customer data on-premise.',
      suggestedPractice: 'Fine-tune an open-source 8B model on a custom legal/medical dataset and serve via vLLM.',
      expectedOutcome: 'Deployed, fine-tuned local model beating generic API on domain speed and cost.',
      commonMistakes: ['Fine-tuning when RAG or simple few-shot prompting would have solved the problem.'],
      readyCriteria: 'Served model achieves 150+ tokens/sec throughput on self-hosted GPU.'
    },
    {
      stageNumber: 6,
      code: 'STAGE_6_PROFESSIONAL_READINESS',
      title: 'Stage 6 — Production Portfolio & Job Readiness',
      duration: 'Weeks 23–24',
      whatToLearn: ['Architecture RFC documentation with latency and token cost analysis', 'Curating public benchmark evaluation charts', 'Technical interview prep for AI systems'],
      whyToLearn: 'Stand out from prompt-wrapper candidates by showcasing engineering rigor.',
      suggestedPractice: 'Publish an engineering blog post breaking down your RAG evaluation benchmarks.',
      expectedOutcome: 'Flagship AI system deployed with live URL and benchmark report.',
      commonMistakes: ['Failing to mention token costs and latency in project descriptions.'],
      readyCriteria: 'Can defend vector indexing choices and evaluation math in live interview.'
    }
  ],
  projects: {
    beginner: [
      {
        id: 'ai-b1',
        title: 'Streaming Semantic Document Q&A Tool',
        level: 'Beginner',
        problem: 'Users need to upload markdown or PDF documents and ask questions with exact page citations.',
        objective: 'Master embeddings, chunking, and SSE streaming token response.',
        skillsUsed: ['Python', 'FastAPI', 'ChromaDB', 'React'],
        tools: ['VS Code', 'Docker'],
        difficulty: 'Beginner',
        expectedTime: '15 hours',
        features: ['Document upload & chunking', 'Vector search with cosine distance', 'Streaming response with highlighted citations'],
        deliverables: ['GitHub repo with setup script', 'Live demo'],
        portfolioPresentation: 'Demonstrate chunking visualization and instant citation lookup.',
        resumeBulletPossibilities: ['Engineered semantic document Q&A service in Python and FastAPI with sub-800ms time-to-first-token and exact page citations.'],
        interviewQuestionsExpected: ['Why did you choose cosine distance over Euclidean distance for embeddings?']
      }
    ],
    intermediate: [
      {
        id: 'ai-i1',
        title: 'Enterprise Hybrid Search & Reranking Engine',
        level: 'Intermediate',
        problem: 'Standard vector search fails on exact product codes, acronyms, and part numbers.',
        objective: 'Combine dense vector search with sparse BM25 keyword search and a cross-encoder re-ranking model.',
        skillsUsed: ['Python', 'pgvector', 'BM25', 'FlashRank', 'FastAPI'],
        tools: ['PostgreSQL', 'Docker Compose'],
        difficulty: 'Intermediate',
        expectedTime: '35 hours',
        features: ['Reciprocal Rank Fusion (RRF)', 'Cross-encoder reranking', 'Automated precision/recall benchmarking'],
        deliverables: ['Dockerized hybrid search engine', 'Benchmark report showing 34% accuracy gain over pure vector search'],
        portfolioPresentation: 'Highlight the benchmark chart demonstrating failure cases of pure vector search resolved by BM25.',
        resumeBulletPossibilities: ['Implemented hybrid dense-sparse retrieval system with Reciprocal Rank Fusion, improving search recall by 34% on technical vocabulary.'],
        interviewQuestionsExpected: ['Explain how Reciprocal Rank Fusion mathematically combines disparate score scales.']
      }
    ],
    advanced: [
      {
        id: 'ai-a1',
        title: 'Autonomous Multi-Agent Financial Research System',
        level: 'Advanced',
        problem: 'Investment analysts spend 15 hours analyzing quarterly SEC 10-K filings, earnings calls, and news feeds.',
        objective: 'Build an autonomous multi-agent pipeline with LangGraph that plans, fetches, cross-references, and verifies financial claims.',
        skillsUsed: ['Python', 'LangGraph', 'Pydantic', 'FastAPI', 'Redis'],
        tools: ['Docker', 'LangSmith'],
        difficulty: 'Advanced',
        expectedTime: '55 hours',
        features: ['Planning agent, Retrieval agent, Fact-checker agent, and Synthesis agent', 'Human-in-the-loop review step', 'State checkpointing and replay in Redis'],
        deliverables: ['Full multi-agent platform', 'Sample generated financial dossiers with audit trails'],
        portfolioPresentation: 'Show the LangGraph execution graph and highlight how the fact-checker agent catches and corrects hallucinations.',
        resumeBulletPossibilities: ['Architected autonomous multi-agent research pipeline using LangGraph, reducing financial filing analysis time from 15 hours to 4 minutes with automated cross-verification.'],
        interviewQuestionsExpected: ['How do you prevent agents from drifting off-topic or entering infinite loops?']
      }
    ],
    flagship: {
      id: 'ai-flagship',
      title: 'AegisAI: Production Enterprise RAG Platform with Automated Offline Evaluation & Guardrails',
      level: 'Flagship',
      problem: 'Enterprises want to deploy AI over internal knowledge bases but are terrified of hallucinations, prompt injection, and regulatory compliance violations.',
      objective: 'Build a production-grade RAG operating platform featuring automated synthetic evaluation, hybrid search, semantic caching, and strict security guardrails.',
      skillsUsed: ['Python', 'FastAPI', 'Qdrant / pgvector', 'Ragas / DeepEval', 'Redis', 'Docker', 'React / TypeScript'],
      tools: ['GitHub Actions', 'Prometheus', 'Grafana', 'Weights & Biases'],
      difficulty: 'Flagship (5/5)',
      expectedTime: '90–120 hours',
      features: [
        'Multi-tenant vector ingestion with metadata filtering and document versioning.',
        'Hybrid Dense + Sparse Search pipeline with cross-encoder re-ranking.',
        'Semantic Caching layer in Redis, reducing duplicate query costs by 65% and latency to < 30ms.',
        'Automated CI/CD Evaluation Harness: runs 150 test queries with Ragas on every PR to verify Faithfulness > 0.92.',
        'Security Guardrail filter: detects and neutralizes prompt injection, PII data leakage, and jailbreaks in real time.',
        'Comprehensive telemetry dashboard tracking token usage, latency percentiles (p50, p95, p99), and user feedback ratings.'
      ],
      deliverables: [
        'Production deployed web application with live demo access.',
        'Full public GitHub repository with Docker Compose and architectural diagrams.',
        'Published technical whitepaper / blog post detailing evaluation methodology and latency optimization.',
        'Automated test suite with 85%+ coverage.'
      ],
      portfolioPresentation: 'The crown jewel of your technical identity. Present it with live latency metrics, interactive prompt injection tests that get blocked, and automated evaluation graphs.',
      resumeBulletPossibilities: [
        'Architected AegisAI, an enterprise RAG platform with hybrid vector search and semantic caching, cutting inference costs by 65% while maintaining 0.94 Faithfulness score across 10k documents.',
        'Engineered automated evaluation CI pipeline using Ragas and DeepEval, catching prompt regressions and reducing hallucination incidents by 80% prior to deployment.'
      ],
      interviewQuestionsExpected: [
        'How did you calculate and maintain your semantic cache similarity threshold without serving stale or irrelevant answers?',
        'Walk me through how you protect your embedding index from adversarial poisoning.',
        'What specific trade-offs did you make between cross-encoder reranking latency and retrieval accuracy?'
      ]
    }
  },
  professionalIdentity: {
    headlineTemplates: [
      'AI Engineer | RAG Architectures, Vector Systems & LLM Evaluation | Built AegisAI',
      'Applied Machine Learning Engineer | Foundation Model Deployment, Python & FastAPI | Systems & Evaluation Focus',
      'AI Systems Engineer | LangGraph Agents, pgvector & Production Optimization'
    ],
    careerPositioning: 'Position yourself as an applied systems engineer who treats AI as an engineering discipline with metrics, benchmarks, and cost constraints—not a novelty toy.',
    linkedInProfileDirection: {
      aboutSectionTemplate: 'I am an AI Systems Engineer specializing in building production-grade LLM applications, hybrid RAG pipelines, and automated evaluation harnesses.\n\nRecently, I created AegisAI—an enterprise RAG platform with hybrid dense-sparse search, semantic caching, and automated hallucination testing via Ragas. I focus on building reliable, cost-efficient, and secure AI infrastructure that enterprises can trust.\n\nTechnical Stack:\n• Core: Python, FastAPI, TypeScript, PyTorch, Hugging Face\n• AI/RAG: LangChain, LangGraph, LlamaIndex, Qdrant, pgvector, BM25\n• Evaluation & Safety: Ragas, DeepEval, Guardrails AI, NeMo\n• Infra: Docker, Redis, PostgreSQL, Prometheus, AWS/GCP\n\nOpen to discussing applied AI architecture, inference optimization, and engineering opportunities.',
      featuredRecommendations: ['Pin Flagship Project AegisAI with live demo link and architecture diagram.'],
      skillsToHighlight: ['Python', 'FastAPI', 'RAG (Retrieval-Augmented Generation)', 'Vector Databases', 'LLM Evaluation', 'LangGraph']
    },
    portfolioStructure: {
      recommendedPages: ['Hero & Architecture Summary', 'Flagship Project with Interactive Demo', 'Evaluation Benchmarks & Methodology', 'GitHub & Contact'],
      proofOfWorkStrategy: 'Include benchmark charts proving precision, recall, and cost numbers with source code.'
    },
    elevatorPitch30s: 'Hi, I’m an AI Engineer specializing in production RAG systems and autonomous agent workflows. Recently, I built AegisAI, an enterprise retrieval system that combines hybrid search and semantic caching with automated offline hallucination testing, cutting query costs by 65% while keeping precision above 92%. I focus on turning unpredictable foundation models into dependable, measurable software products.',
    networkingIntroduction: 'Hi [Name], loved your recent article on vector quantization at scale. I recently built an evaluation harness for hybrid RAG pipelines with pgvector and BM25 and would love to follow your team’s applied AI research. Best, [Your Name]',
    proofOfSkillFormula: 'Model Understanding → Hybrid Retrieval Pipeline → Automated Evaluation Benchmark → Live Deployed System → Resume Metric'
  },
  resumeIntelligence: {
    recommendedSections: ['Header', 'Technical Skills (AI/ML, Systems, Databases, Languages)', 'Featured AI Projects (with Metrics)', 'Experience', 'Education'],
    professionSpecificKeywords: ['Python', 'RAG', 'Vector Search', 'pgvector', 'FastAPI', 'LangGraph', 'Ragas', 'Evaluation', 'Hallucination Mitigation', 'Embeddings', 'Docker', 'Redis Cache', 'Semantic Search', 'PyTorch'],
    bulletPointFormula: 'Action Verb + AI Architecture / Tool + Specific Metric (Latency, Cost, Accuracy) = High-Impact Bullet',
    bulletExamples: [
      {
        role: 'AI Engineer Project',
        before: 'Created a chatbot that answers questions using company docs.',
        after: 'Architected hybrid RAG pipeline with dense-sparse reciprocal rank fusion in FastAPI, reducing search latency to 280ms and boosting context precision by 38% across 5,000 documents.',
        impactExplanation: 'Highlights hybrid architecture, concrete latency reduction, and measurable precision jump.'
      }
    ],
    atsChecklist: ['Standard single-column layout', 'Include quantitative metrics (tokens, latency, accuracy scores)', 'Text-searchable PDF format'],
    antiFabricationNotice: 'CAREEROS AI WARNING: Never claim to have trained or fine-tuned multi-billion parameter models from scratch if you have only called an API. Interviewers will drill into loss curves, hyperparameter tuning, and gradient accumulation.'
  },
  interviewSpec: {
    modes: [
      { id: 'beginner', name: 'AI Fundamentals & Tokenomics', description: 'Tokens, embeddings, temperature, context limits, and basic Python.' },
      { id: 'technical', name: 'RAG & Vector Architecture', description: 'Chunking tradeoffs, vector indexing (HNSW), hybrid search, and semantic similarity.' },
      { id: 'behavioral', name: 'Behavioral & Stakeholder Alignment', description: 'Handling model failure in front of clients, ethical AI, and cross-team collaboration.' },
      { id: 'situational', name: 'Model Failure & Production Incidents', description: 'Mitigating sudden hallucination spikes, prompt injection attacks, and API cost overruns.' },
      { id: 'hr', name: 'HR & Vision', description: 'Motivation, staying current in fast-moving fields, and work-life boundaries.' },
      { id: 'expert', name: 'System Design for AI Systems', description: 'Architecting multi-agent workflows, distributed model serving, and high-throughput vector clusters.' }
    ],
    sampleBank: [
      {
        id: 'ai-q1',
        category: 'technical',
        question: 'When building a RAG pipeline, why might standard semantic vector search fail on technical documentation, and how would you architect a hybrid retrieval system to fix it?',
        hint: 'Discuss out-of-vocabulary terms, specific error codes, BM25 keyword matching, Reciprocal Rank Fusion, and cross-encoder re-ranking.',
        keyAspectsExpected: ['Dense vs sparse search strengths', 'Reciprocal Rank Fusion (RRF)', 'Re-ranking with cross-encoders to eliminate noise'],
        difficulty: 'Hard'
      },
      {
        id: 'ai-q2',
        category: 'technical',
        question: 'How do you quantitatively measure whether a prompt or retrieval change improved your AI application, without relying on manual spot checks?',
        hint: 'Explain synthetic dataset creation, ground truth comparison, and metrics like Faithfulness, Context Recall, and Answer Relevance (Ragas/DeepEval).',
        keyAspectsExpected: ['Synthetic evaluation datasets', 'Key metrics (Faithfulness, Context Recall)', 'Automated CI/CD regression gating'],
        difficulty: 'Hard'
      }
    ]
  },
  jobReadinessAudit: {
    categories: [
      { id: 'ai-cat-tech', name: 'Python & AI Engineering Core', weight: 30, keyChecklist: ['FastAPI async microservice', 'Hybrid search implementation', 'Ragas evaluation harness'] },
      { id: 'ai-cat-proj', name: 'Deployed Flagship System', weight: 30, keyChecklist: ['Working deployed RAG application with live URL', 'Public GitHub repo with architecture diagrams', 'Documented latency and evaluation benchmark'] },
      { id: 'ai-cat-interview', name: 'System Design & Articulation', weight: 20, keyChecklist: ['Can explain vector indexing and RAG tradeoffs out loud', 'Can explain hallucination prevention strategies'] },
      { id: 'ai-cat-resume', name: 'ATS Resume with Metrics', weight: 20, keyChecklist: ['Metrics-driven bullets (cost, latency, precision)', 'Portfolio with live demos'] }
    ],
    jobReadyActionPlan: [
      { priority: 'Critical', task: 'Deploy Flagship RAG project with live evaluation dashboard.', targetProof: 'Live URL demonstrating hybrid search and benchmark metrics.' },
      { priority: 'High', task: 'Publish a technical writeup analyzing chunking strategy tradeoffs with benchmark charts.', targetProof: 'Published technical post on LinkedIn / Substack / Dev.to.' }
    ]
  },
  entryAndJobSearch: {
    entryStrategies: [
      { channel: 'Targeted Demo Outreach to AI Startup Founders', realismScore: 'High (30–45%)', approach: 'Send a 60-second video demo showing how your flagship project solves a known hallucination problem in their product domain.' },
      { channel: 'Open Source AI Frameworks', realismScore: 'High Signal', approach: 'Submit PRs to LangChain, LlamaIndex, Qdrant, or Ragas documentation and bug trackers.' }
    ],
    whereToSearch: [
      { platform: 'Y Combinator Work at a Startup', strategy: 'Dozens of high-growth AI startups actively hiring hungry applied engineers.' },
      { platform: 'Wellfound (AngelList)', strategy: 'Filter by Seed/Series A AI companies.' }
    ],
    recruiterMessagingTemplates: [
      {
        scenario: 'Reaching out to an AI Engineering Lead',
        subject: 'Quick question on [Company]\'s RAG evaluation architecture',
        message: 'Hi [Name],\n\nI’ve been following [Company]\'s work on AI-assisted enterprise workflows. I’m an AI Engineer who recently built AegisAI—a production RAG engine combining hybrid dense-sparse search with automated Ragas evaluation harnesses, achieving 94% faithfulness across 10k documents.\n\nHere is a 90-second video breakdown of the architecture: [Demo Link].\n\nWould love 10 minutes to learn about your current inference scaling roadmap if your team is expanding.\n\nBest regards,\n[Your Name]'
      }
    ],
    applicationStrategy: ['Lead with live benchmark proof and system design clarity. Differentiate from superficial prompt-tinkering candidates.']
  },
  growthMap: {
    timeline: [
      { stage: 'Years 0–1', years: '0–1 Years', focus: 'Junior / Applied AI Engineer', title: 'Applied AI Engineer', responsibilities: ['Building ingestion and chunking pipelines', 'Writing evaluation tests and prompt templates', 'Monitoring inference logs and user ratings'] },
      { stage: 'Years 1–3', years: '1–3 Years', focus: 'Mid-Level AI Engineer', title: 'AI Systems Engineer', responsibilities: ['Architecting end-to-end RAG and agent platforms', 'Implementing semantic caching and inference cost reduction', 'Fine-tuning domain models and optimizing latency'] },
      { stage: 'Years 3–5', years: '3–5 Years', focus: 'Senior AI Engineer', title: 'Senior AI Architect', responsibilities: ['Leading enterprise AI system architecture', 'Designing multi-agent orchestration and security guardrails', 'Mentoring engineers and guiding executive AI strategy'] },
      { stage: 'Years 5–10+', years: '5–10+ Years', focus: 'Staff / Principal / AI Leadership', title: 'Head of AI / VP of Applied AI', responsibilities: ['Setting multi-year AI technical roadmap', 'Directing foundation model partnerships and compute budgets', 'Bridging research breakthroughs into enterprise value'] }
    ],
    careerTree: [
      { branch: 'Applied Systems Track', roles: ['Applied AI Engineer', 'Senior AI Engineer', 'Staff AI Architect', 'Principal AI Scientist'], requiredAdvancementSkills: ['Deep distributed systems', 'GPU cluster orchestration', 'Evaluation rigor'] },
      { branch: 'Research & Model Development', roles: ['Research Engineer', 'Foundation Model Scientist', 'Post-Training Specialist'], requiredAdvancementSkills: ['Mathematical ML research', 'CUDA kernel optimization', 'Pre-training at scale'] }
    ]
  },
  pivotAndAlternatives: {
    transferableSkillsTemplate: ['Software engineering & backend APIs', 'Data analysis & SQL', 'Domain knowledge in finance, law, or medicine'],
    transitionRoadmapSequence: ['Step 1: Master Python & FastAPI', 'Step 2: Learn vector search & RAG architectures', 'Step 3: Build a production RAG system with automated evaluation benchmarks', 'Step 4: Position yourself as an AI systems engineer'],
    alternativeCareers: [
      { title: 'Data Engineer', relationType: 'Adjacent', whyRelated: 'Focuses on large-scale ETL data pipelines and distributed data warehouses.' },
      { title: 'Full Stack Software Engineer', relationType: 'Similar', whyRelated: 'Focuses on application features, web UI, and relational backend systems.' },
      { title: 'AI Product Manager', relationType: 'Less Technical', whyRelated: 'Translates business needs into AI capabilities, prioritizing roadmaps and ethics.' }
    ],
    decisionMatrix: [
      { dimension: 'Math vs Systems', realityInThisCareer: '65% software systems, 35% applied math and statistics.' }
    ]
  },
  risksAndSustainability: {
    careerRisks: [
      {
        risk: 'Tooling Churn Fatigue',
        whyItMatters: 'Frameworks come and go every 6 months; chasing every shiny GitHub repo causes burnout.',
        earlyWarningSign: 'Rewriting your codebase every 3 weeks because a new library was announced.',
        prevention: 'Anchor on timeless fundamentals: Python, vector indexing math, HTTP APIs, and evaluation principles.'
      }
    ],
    sustainabilityCheck: {
      learningWorkloadHours: '12–15 hours/week for steady progression without mental exhaustion.',
      burnoutPreventionAdvice: 'Focus on 1 core project and ship it completely before jumping to the newest trendy model.',
      skillMaintenanceRoutine: 'Review 1 arXiv paper per week and implement 1 small prototype.'
    }
  },
  missionsPlan: {
    days30: [
      { week: 'Week 1', goal: 'Tokenomics & Foundation APIs', tasks: ['Master token count calculation', 'Test temperature, top_p, and JSON structured output schema'], learning: 'Token mechanics', practice: 'Write CLI script estimating token costs across 5 models', output: 'Token calculator script', milestone: 'Token mechanics mastery', selfCheck: 'Can I explain how BPE tokenization works?' },
      { week: 'Week 2', goal: 'Python Async FastAPI Microservice', tasks: ['Build streaming token endpoint with FastAPI and SSE', 'Add Pydantic validation'], learning: 'Async Python streaming', practice: 'Stream tokens to browser client', output: 'Deployed streaming microservice', milestone: 'Streaming API running', selfCheck: 'Does token streaming work without blocking?' },
      { week: 'Week 3', goal: 'Vector Embeddings & Ingestion', tasks: ['Test chunking strategies (200 vs 500 vs 1000 tokens)', 'Store vectors in pgvector / Chroma'], learning: 'Vector search principles', practice: 'Ingest 50 articles and run cosine similarity search', output: 'Ingestion pipeline with clean chunks', milestone: 'Vector database working', selfCheck: 'Are sentences split cleanly?' },
      { week: 'Week 4', goal: 'First Beginner Project: Document Q&A', tasks: ['Connect FastAPI backend to vector database', 'Build minimal UI with citations'], learning: 'End-to-end RAG basics', practice: 'Test edge cases where context does not contain the answer', output: 'Deployed Document Q&A App', milestone: 'Beginner Project Shipped', selfCheck: 'Does the model state "I don\'t know" when context is missing?' }
    ],
    days60: [
      { week: 'Week 5', goal: 'Hybrid Search & BM25', tasks: ['Implement BM25 sparse keyword search', 'Combine dense + sparse with Reciprocal Rank Fusion'], learning: 'Hybrid retrieval mechanics', practice: 'Benchmark acronym and product code retrieval', output: 'Hybrid search module', milestone: 'Hybrid search achieved', selfCheck: 'Does it find exact part numbers that vector search missed?' },
      { week: 'Week 6', goal: 'Cross-Encoder Re-Ranking', tasks: ['Add FlashRank / Cohere reranker', 'Filter top 20 candidates down to top 3'], learning: 'Re-ranking precision', practice: 'Measure retrieval precision gain', output: 'Two-stage retrieval pipeline', milestone: 'Re-ranking in place', selfCheck: 'Is latency under 300ms?' },
      { week: 'Week 7', goal: 'Semantic Caching in Redis', tasks: ['Store question embeddings in Redis', 'Return cached responses for semantically identical questions'], learning: 'Cost reduction architectures', practice: 'Simulate 1,000 queries with 30% duplicates', output: 'Semantic cache module with 65% cost savings', milestone: 'Semantic caching active', selfCheck: 'Does cache return in < 30ms?' },
      { week: 'Week 8', goal: 'Intermediate Project: Hybrid Search Engine', tasks: ['Dockerize hybrid search, reranker, and cache', 'Write benchmark report'], learning: 'Systems integration', practice: 'Benchmark accuracy improvement', output: 'Shipped Intermediate Project', milestone: 'Intermediate Project Complete', selfCheck: 'Is the benchmark repeatable?' }
    ],
    days90: [
      { week: 'Week 9', goal: 'Automated Evaluation Harnesses (Ragas)', tasks: ['Create 100-question ground truth test set', 'Measure Faithfulness and Context Recall automatically'], learning: 'Quantitative evaluation science', practice: 'Run automated evaluation in GitHub Actions', output: 'Automated CI test suite', milestone: 'Evaluation pipeline online', selfCheck: 'Does CI fail if faithfulness drops below 0.90?' },
      { week: 'Week 10', goal: 'Flagship AegisAI Core & Guardrails', tasks: ['Build AegisAI multi-tenant RAG platform', 'Add prompt injection and PII guardrails'], learning: 'Production security hardening', practice: 'Attempt red-team jailbreaks on your own API', output: 'Secured RAG platform', milestone: 'Flagship Core Deployed', selfCheck: 'Does the guardrail block prompt leaks?' },
      { week: 'Week 11', goal: 'Flagship Telemetry & Interactive UI', tasks: ['Add Grafana/Prometheus token tracking', 'Build clean web UI with benchmark view'], learning: 'Observability & UX', practice: 'Record 2-minute video walkthrough', output: 'Complete Flagship Project', milestone: 'Flagship Project Shipped', selfCheck: 'Would this impress a Principal AI Engineer?' },
      { week: 'Week 12', goal: 'Resume, Portfolio & Targeted Outreach', tasks: ['Format ATS resume with metrics', 'Reach out to 10 AI startup founders with customized demo links'], learning: 'Strategic market entry', practice: 'Simulate technical interview on CareerOS', output: 'Job-Ready Application Dossier', milestone: 'Full Market Readiness', selfCheck: 'Can I defend every architectural choice?' }
    ]
  },
  postHiringDevelopment: {
    first30DaysAtWork: ['Audit existing AI pipelines and calculate token spend per feature.', 'Document latency bottlenecks and identify low-hanging semantic caching wins.'],
    first90DaysAtWork: ['Implement automated offline evaluation so the team stops making prompt changes blindly.', 'Reduce inference costs by at least 25% through prompt optimization and caching.'],
    longTermCareerMobility: ['Lead the transition toward autonomous agentic workflows.', 'Present company AI architectural achievements at conferences.'],
    essentialProfessionalSkills: [
      { skill: 'Cost-Conscious Architecture', howItApplies: 'Treating tokens as real dollars earns instant executive trust.' }
    ]
  },
  dailyCoachTemplate: {
    learn: 'Read 1 recent technical paper or engineering blog on vector retrieval or agentic planning.',
    practice: 'Write an evaluation test case or benchmark an embedding model variant.',
    build: 'Spend 60 minutes writing clean Python code on your active AI project.',
    document: 'Log your benchmark findings or commit code with descriptive commit messages.',
    reflect: 'Did today’s code improve actual measurable precision, or was it just subjective tweaking?'
  }
};
