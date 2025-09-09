import { Feature, Stat, RuleFormat, InstallMethod } from '../types';

export const features: Feature[] = [
  {
    icon: 'Zap',
    title: 'Velocidad Real',
    description: 'Análisis paralelo en Rust. Menos de 100ms por archivo.',
    details: 'Arquitectura multi-threaded optimizada para grandes codebases'
  },
  {
    icon: 'Settings',
    title: 'Reglas Flexibles', 
    description: 'Compatible con Semgrep, YAML, JSON y formatos personalizados.',
    details: 'Sin vendor lock-in. Trae tus reglas existentes'
  },
  {
    icon: 'Code',
    title: 'Multi-lenguaje',
    description: 'C/C++, Go, Java, JavaScript/TypeScript, Python, Rust y más.',
    details: 'Un solo tool para todos tus proyectos'
  },
  {
    icon: 'GitBranch',
    title: 'CI Ready',
    description: 'Salida SARIF nativa. Integración perfecta con GitHub/GitLab.',
    details: 'Zero-config en tu pipeline existente'
  }
];

export const stats: Stat[] = [
  { value: '<100ms', label: 'por archivo', description: 'Tiempo de análisis promedio' },
  { value: 'SARIF', label: 'ready', description: 'Salida estándar para CI/CD' },
  { value: '8+', label: 'lenguajes', description: 'Soporte nativo' },
  { value: 'OSS', label: 'permisivo', description: 'Licencia Apache 2.0' }
];

export const ruleFormats: RuleFormat[] = [
  {
    name: 'Semgrep',
    description: 'Compatible con reglas Semgrep existentes',
    code: `rules:
  - id: sql-injection
    pattern: |
      $QUERY = "SELECT * FROM users WHERE id = " + $INPUT
    message: Potential SQL injection
    severity: ERROR
    languages: [java, python]`,
    example: 'String query = "SELECT * FROM users WHERE id = " + userId;'
  },
  {
    name: 'JSON',
    description: 'Formato estructurado para reglas complejas',
    code: `{
  "id": "hardcoded-secret",
  "pattern": {
    "regex": "password\\s*=\\s*['\"]\\w+['\"]"
  },
  "message": "Hardcoded password detected",
  "severity": "HIGH"
}`,
    example: 'password = "admin123"'
  },
  {
    name: 'YAML',
    description: 'Sintaxis limpia para reglas personalizadas',
    code: `id: buffer-overflow
pattern:
  ast: |
    strcpy($dst, $src)
message: Use strncpy instead of strcpy
severity: CRITICAL
languages: [c, cpp]`,
    example: 'strcpy(buffer, userInput);'
  }
];

export const installMethods: InstallMethod[] = [
  {
    name: 'macOS',
    command: 'brew install rootcause',
    description: 'Homebrew package'
  },
  {
    name: 'Linux', 
    command: 'curl -sSL https://get.rootcause.sh | sh',
    description: 'Universal installer'
  },
  {
    name: 'Windows',
    command: 'scoop install rootcause',
    description: 'Scoop package manager'
  },
  {
    name: 'Docker',
    command: 'docker run --rm -v $(pwd):/code rootcause/cli /code',
    description: 'Container-based analysis'
  },
  {
    name: 'Binary',
    command: 'wget https://github.com/rootCauseScan/releases/latest/download/rootcause-linux-x64',
    description: 'Direct download'
  }
];