export interface Tech {
  name: string;
  /** devicon slug for logo CDN; null → monogram tile */
  icon: string | null;
  /** override icon variant, default "original" */
  variant?: string;
}

export interface TechCategory {
  id: string;
  label: string;
  accent: string;
  items: Tech[];
}

export const techStack: TechCategory[] = [
  {
    id: "ai-ml",
    label: "AI and Machine Learning",
    accent: "#5B3FC8",
    items: [
      { name: "Python", icon: "python" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "LangChain", icon: null },
      { name: "RAG", icon: null },
      { name: "Keras", icon: "keras" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "LlamaIndex", icon: null },
      { name: "LoRA", icon: null },
      { name: "OpenAI GPT", icon: null },
      { name: "Claude", icon: null },
      { name: "Gemini", icon: null },
      { name: "Hugging Face", icon: null },
      { name: "Stable Diffusion", icon: null },
      { name: "YOLOv8", icon: null },
      { name: "Bloom (BigScience)", icon: null },
      { name: "Flamingo", icon: null },
      { name: "PaliGemma", icon: null },
      { name: "OpenCV", icon: "opencv" },
      { name: "Blockchain", icon: null },
      { name: "Integrated ML", icon: null },
      { name: "Federated Learning", icon: null },
      { name: "MLOps", icon: null },
      { name: "ONNX", icon: null },
      { name: "Multimodal AI", icon: null },
      { name: "AI Solutions", icon: null },
      { name: "IoT Analytics", icon: null },
      { name: "Guardrails", icon: null },
      { name: "Phi", icon: null },
      { name: "ML Pipelines", icon: null },
      { name: "DPDP Compliance", icon: null },
      { name: "Prompt Engineering", icon: null },
      { name: "AI Security", icon: null },
      { name: "Mask R-CNN", icon: null },
      { name: "Real-time Video AI", icon: null },
      { name: "Multi-agent and LLM", icon: null },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    accent: "#1878F0",
    items: [
      { name: "Swift", icon: "swift" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Flutter", icon: "flutter" },
      { name: "React Native", icon: "react" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    id: "web-frontend",
    label: "Web Frontend",
    accent: "#F04830",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Angular", icon: "angularjs" },
      { name: "Vue.js", icon: "vuejs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Material UI", icon: "materialui" },
      { name: "Redux", icon: "redux" },
      { name: "Zustand", icon: null },
      { name: "SASS", icon: "sass" },
      { name: "CSS3", icon: "css3" },
      { name: "PHP", icon: "php" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    id: "backend",
    label: "Backend and APIs",
    accent: "#0E9384",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "PHP", icon: "php" },
      { name: ".NET Core", icon: "dotnetcore" },
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud and DevOps",
    accent: "#D4A643",
    items: [
      { name: "AWS", icon: "amazonwebservices", variant: "plain-wordmark" },
      { name: "Google Cloud", icon: "googlecloud" },
      { name: "Microsoft Azure", icon: "azure" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Terraform", icon: "terraform" },
      { name: "CI/CD", icon: null },
      { name: "Git", icon: "git" },
      { name: "Nginx", icon: "nginx" },
      { name: "Redis", icon: "redis" },
      { name: "SonarQube", icon: "sonarqube" },
      { name: "Prometheus", icon: "prometheus" },
      { name: "Grafana", icon: "grafana" },
      { name: "Loki", icon: null },
      { name: "Serverless Architecture", icon: null },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    accent: "#087443",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "SQLite", icon: "sqlite" },
      { name: "MariaDB", icon: "mariadb" },
      { name: "SQL Server", icon: "microsoftsqlserver" },
      { name: "DynamoDB", icon: "dynamodb" },
      { name: "Cassandra", icon: "cassandra" },
      { name: "Elasticsearch", icon: "elasticsearch" },
      { name: "Neo4j", icon: "neo4j" },
      { name: "Firebase", icon: "firebase" },
      { name: "Firestore", icon: null },
    ],
  },
];
