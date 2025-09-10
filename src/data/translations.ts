export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      rules: 'Reglas',
      docs: 'Docs',
      contact: 'Contacto'
    },
    hero: {
      badge: 'SAST Open Source • Apache 2.0',
      title: 'Find the root.',
      titleAccent: 'Fast.',
      subtitle: 'SAST open source en Rust. Rápido, extensible, multi-lenguaje.',
      description: 'Análisis en segundos, no minutos.',
      getStarted: 'Comenzar',
      viewGithub: 'Ver en GitHub',
      quickInstall: 'Instalación rápida:'
    },
    trust: {
      title: 'Confiado por equipos de seguridad en todo el mundo'
    },
    stats: {
      perFile: 'por archivo',
      avgAnalysis: 'Tiempo de análisis promedio',
      ready: 'ready',
      cicdOutput: 'Salida estándar para CI/CD',
      languages: 'lenguajes',
      nativeSupport: 'Soporte nativo',
      license: 'permisivo',
      apacheLicense: 'Licencia Apache 2.0'
    },
    features: {
      title: 'Construido para equipos modernos',
      subtitle: 'Un solo tool para todos tus proyectos. Sin vendor lock-in.',
      speed: {
        badge: 'Rust-powered',
        title: 'Velocidad Real',
        description: 'Análisis paralelo en Rust. Menos de 100ms por archivo.',
        details: 'Arquitectura multi-threaded optimizada para grandes codebases'
      },
      rules: {
        badge: 'Compatible',
        title: 'Reglas Flexibles',
        description: 'Compatible con Semgrep, YAML, JSON y formatos personalizados.',
        details: 'Sin vendor lock-in. Trae tus reglas existentes',
        supported: 'Formatos de reglas soportados:',
        ruleAgnostic: 'rule-agnostic'
      },
      multilang: {
        badge: '8+ lenguajes',
        title: 'Multi-lenguaje',
        description: 'C/C++, Go, Java, JavaScript/TypeScript, Python, Rust y más.',
        details: 'Un solo tool para todos tus proyectos'
      },
      ci: {
        badge: 'SARIF ready',
        title: 'CI Ready',
        description: 'Salida SARIF nativa. Integración perfecta con GitHub/GitLab.',
        details: 'Zero-config en tu pipeline existente'
      }
    },
    installation: {
      title: 'Comienza en segundos',
      subtitle: 'Un solo binario. Múltiples lenguajes.',
      installOn: 'Instalar en',
      quickStart: 'Inicio rápido:'
    },
    timeline: {
      title: 'Cómo funciona',
      subtitle: 'Cuatro pasos para un análisis de seguridad completo',
      steps: {
        fetch: {
          title: 'Obtener',
          description: 'Clonar repo o obtener reglas del registro'
        },
        parse: {
          title: 'Analizar',
          description: 'Análisis multi-hilo de archivos fuente'
        },
        match: {
          title: 'Coincidir',
          description: 'Coincidencia de patrones contra AST y texto'
        },
        report: {
          title: 'Reportar',
          description: 'Generar SARIF, JSON o formato personalizado'
        }
      }
    },
    cta: {
      title: 'Comienza a detectar bugs reales',
      titleAccent: 'hoy',
      subtitle: 'Únete a los desarrolladores que ya usan rootcause para asegurar su código. Open source. Sin vendor lock-in. Licencia Apache 2.0.',
      readDocs: 'Leer la Documentación',
      starGithub: 'Star en GitHub',
      footer: 'Gratis para siempre. Sin registro requerido.'
    },
    rules: {
      badge: 'Rule-agnostic',
      title: 'Trae tus reglas',
      subtitle: 'Trae tus reglas existentes o usa las nuestras. Compatible con Semgrep, YAML, JSON y formatos personalizados. Sin lock-in.',
      viewDocs: 'Ver documentación completa',
      backHome: 'Volver al inicio',
      formatsTitle: 'Formatos soportados',
      formatsSubtitle: 'Reutiliza reglas existentes o crea nuevas con sintaxis familiar',
      performance: {
        title: 'Rendimiento optimizado',
        description: 'Todos los formatos se procesan con la misma velocidad. El engine interno optimiza automáticamente las reglas para máximo rendimiento.',
        compilation: 'Compilación de reglas',
        cache: 'Cache inteligente',
        parallel: 'Análisis paralelo'
      },
      examples: {
        title: '¿Necesitas más ejemplos?',
        description: 'La documentación incluye reglas pre-construidas para casos comunes y guías para crear reglas personalizadas.',
        viewExamples: 'Ver ejemplos en Docs'
      },
      ruleLabel: 'Regla:',
      vulnerableCode: 'Código vulnerable detectado:'
    },
    docs: {
      title: 'Documentación',
      subtitle: 'La documentación completa vive en docs.rootcause.sh. Te redirigiremos automáticamente en unos segundos.',
      quickLinks: 'Enlaces rápidos:',
      openDocs: 'Abrir documentación',
      backHome: 'Volver al inicio',
      redirectNote: 'Si no te rediriges automáticamente, haz clic en el botón de arriba.',
      links: {
        gettingStarted: 'Comenzando',
        ruleWriting: 'Guía de Escritura de Reglas',
        cicd: 'Integración CI/CD',
        api: 'Referencia API'
      }
    },
    contact: {
      title: 'Ponte en contacto',
      subtitle: 'Soporte empresarial, preguntas técnicas, contribuciones. Estamos aquí para ayudar.',
      backHome: 'Volver al inicio',
      sendMessage: 'Envíanos un mensaje',
      messageSent: '¡Mensaje enviado!',
      messageSentDesc: 'Tu cliente de email se abrió con el mensaje preparado. Si no se abrió automáticamente, puedes escribir directamente a',
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu@ejemplo.com',
        messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
        send: 'Enviar mensaje'
      },
      otherWays: 'Otras formas de contacto',
      discussions: {
        title: 'GitHub Discussions',
        description: 'Preguntas de la comunidad y soporte'
      },
      issues: {
        title: 'GitHub Issues',
        description: 'Reportar bugs y solicitar features'
      },
      directEmail: {
        title: 'Email directo'
      },
      enterprise: {
        title: 'Enterprise support',
        description: '¿Necesitas soporte dedicado, SLA garantizado o consultoría personalizada? Contáctanos para opciones enterprise.',
        features: [
          'Respuesta prioritaria en 24h',
          'Reglas personalizadas',
          'Integración on-premise',
          'Training para equipos'
        ]
      },
      pgp: {
        title: 'PGP Encryption',
        description: 'Para comunicaciones sensibles, puedes usar nuestra clave PGP pública.'
      }
    },
    footer: {
      description: 'SAST open source en Rust. Rápido, extensible, multi-lenguaje.',
      copyright: '© 2025 rootcause. Licenciado bajo Apache 2.0.',
      builtWith: 'Construido con React, TypeScript, y Tailwind CSS',
      links: {
        github: 'GitHub',
        docs: 'Docs',
        blog: 'Blog',
        privacy: 'Privacidad'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      rules: 'Rules',
      docs: 'Docs',
      contact: 'Contact'
    },
    hero: {
      badge: 'Open Source SAST • Apache 2.0',
      title: 'Find the root.',
      titleAccent: 'Fast.',
      subtitle: 'Open source SAST in Rust. Fast, extensible, multi-language.',
      description: 'Analysis in seconds, not minutes.',
      getStarted: 'Get Started',
      viewGithub: 'View on GitHub',
      quickInstall: 'Quick install:'
    },
    trust: {
      title: 'Trusted by security teams worldwide'
    },
    stats: {
      perFile: 'per file',
      avgAnalysis: 'Average analysis time',
      ready: 'ready',
      cicdOutput: 'Standard output for CI/CD',
      languages: 'languages',
      nativeSupport: 'Native support',
      license: 'permissive',
      apacheLicense: 'Apache 2.0 License'
    },
    features: {
      title: 'Built for modern teams',
      subtitle: 'One tool for all your projects. No vendor lock-in.',
      speed: {
        badge: 'Rust-powered',
        title: 'Real Speed',
        description: 'Parallel analysis in Rust. Less than 100ms per file.',
        details: 'Multi-threaded architecture optimized for large codebases'
      },
      rules: {
        badge: 'Compatible',
        title: 'Flexible Rules',
        description: 'Compatible with Semgrep, YAML, JSON and custom formats.',
        details: 'No vendor lock-in. Bring your existing rules',
        supported: 'Rule formats supported:',
        ruleAgnostic: 'rule-agnostic'
      },
      multilang: {
        badge: '8+ languages',
        title: 'Multi-language',
        description: 'C/C++, Go, Java, JavaScript/TypeScript, Python, Rust and more.',
        details: 'One tool for all your projects'
      },
      ci: {
        badge: 'SARIF ready',
        title: 'CI Ready',
        description: 'Native SARIF output. Perfect integration with GitHub/GitLab.',
        details: 'Zero-config in your existing pipeline'
      }
    },
    installation: {
      title: 'Get started in seconds',
      subtitle: 'Single binary. Multiple languages.',
      installOn: 'Install on',
      quickStart: 'Quick start:'
    },
    timeline: {
      title: 'How it works',
      subtitle: 'Four steps to comprehensive security analysis',
      steps: {
        fetch: {
          title: 'Fetch',
          description: 'Clone repo or fetch rules from registry'
        },
        parse: {
          title: 'Parse',
          description: 'Multi-threaded parsing of source files'
        },
        match: {
          title: 'Match',
          description: 'Pattern matching against AST and text'
        },
        report: {
          title: 'Report',
          description: 'Generate SARIF, JSON, or custom format'
        }
      }
    },
    cta: {
      title: 'Start catching real bugs',
      titleAccent: 'today',
      subtitle: 'Join the developers already using rootcause to secure their code. Open source. No vendor lock-in. Apache 2.0 license.',
      readDocs: 'Read the Docs',
      starGithub: 'Star on GitHub',
      footer: 'Free forever. No registration required.'
    },
    rules: {
      badge: 'Rule-agnostic',
      title: 'Bring your rules',
      subtitle: 'Bring your existing rules or use ours. Compatible with Semgrep, YAML, JSON and custom formats. No lock-in.',
      viewDocs: 'View complete documentation',
      backHome: 'Back to home',
      formatsTitle: 'Supported formats',
      formatsSubtitle: 'Reuse existing rules or create new ones with familiar syntax',
      performance: {
        title: 'Optimized performance',
        description: 'All formats are processed at the same speed. The internal engine automatically optimizes rules for maximum performance.',
        compilation: 'Rule compilation',
        cache: 'Smart cache',
        parallel: 'Parallel analysis'
      },
      examples: {
        title: 'Need more examples?',
        description: 'The documentation includes pre-built rules for common cases and guides for creating custom rules.',
        viewExamples: 'View examples in Docs'
      },
      ruleLabel: 'Rule:',
      vulnerableCode: 'Vulnerable code detected:'
    },
    docs: {
      title: 'Documentation',
      subtitle: 'The complete documentation lives at docs.rootcause.sh. We\'ll redirect you automatically in a few seconds.',
      quickLinks: 'Quick links:',
      openDocs: 'Open documentation',
      backHome: 'Back to home',
      redirectNote: 'If you don\'t get redirected automatically, click the button above.',
      links: {
        gettingStarted: 'Getting Started',
        ruleWriting: 'Rule Writing Guide',
        cicd: 'CI/CD Integration',
        api: 'API Reference'
      }
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'Enterprise support, technical questions, contributions. We\'re here to help.',
      backHome: 'Back to home',
      sendMessage: 'Send us a message',
      messageSent: 'Message sent!',
      messageSentDesc: 'Your email client opened with the prepared message. If it didn\'t open automatically, you can write directly to',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'you@example.com',
        messagePlaceholder: 'Tell us how we can help you...',
        send: 'Send message'
      },
      otherWays: 'Other ways to contact',
      discussions: {
        title: 'GitHub Discussions',
        description: 'Community questions and support'
      },
      issues: {
        title: 'GitHub Issues',
        description: 'Report bugs and request features'
      },
      directEmail: {
        title: 'Direct email'
      },
      enterprise: {
        title: 'Enterprise support',
        description: 'Need dedicated support, guaranteed SLA or custom consulting? Contact us for enterprise options.',
        features: [
          'Priority response in 24h',
          'Custom rules',
          'On-premise integration',
          'Team training'
        ]
      },
      pgp: {
        title: 'PGP Encryption',
        description: 'For sensitive communications, you can use our public PGP key.'
      }
    },
    footer: {
      description: 'Open source SAST in Rust. Fast, extensible, multi-language.',
      copyright: '© 2025 rootcause. Licensed under Apache 2.0.',
      builtWith: 'Built with React, TypeScript, and Tailwind CSS',
      links: {
        github: 'GitHub',
        docs: 'Docs',
        blog: 'Blog',
        privacy: 'Privacy'
      }
    }
  }
};