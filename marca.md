# Guía de Estilo de Marca - RootCause.sh

## Paleta de Colores

### Tema Claro (Light Theme)

#### Colores Principales
- **Fondo Principal**: `#FFFFFF` (Blanco puro)
- **Fondo Secundario**: `#F6F7F9` (Gris muy claro)
- **Color Primario**: `#FFD700` (Dorado brillante)
- **Color de Acento**: `#FFE55C` (Dorado claro brillante)
- **Color Secundario**: `#E6C200` (Dorado más oscuro brillante)
- **Texto Principal**: `#151517` (Negro suave)
- **Texto Secundario**: `#53535A` (Gris medio)
- **Bordes**: `#E5E7EB` (Gris claro)

### Tema Oscuro (Dark Theme)

#### Colores Principales
- **Fondo Principal**: `#0B0B0C` (Negro profundo)
- **Fondo Secundario**: `#121214` (Gris muy oscuro)
- **Color Primario**: `#FFE55C` (Dorado brillante más intenso)
- **Color de Acento**: `#FFF176` (Dorado claro brillante más intenso)
- **Color Secundario**: `#FFD54F` (Dorado más oscuro brillante)
- **Texto Principal**: `#F2F2F3` (Blanco suave)
- **Texto Secundario**: `#B4B4B6` (Gris claro)
- **Bordes**: `#1E1E20` (Gris oscuro)

## Tipografía

### Fuentes
- **Fuente Principal**: Inter (Google Fonts)
  - Pesos disponibles: 400, 500, 600, 700, 800, 900
- **Fuente Monoespaciada**: JetBrains Mono (Google Fonts)
  - Pesos disponibles: 400, 500, 600, 700

### Tamaños de Texto
- **Texto Hero**: `clamp(3rem, 8vw, 6rem)` (Responsive)
- **Altura de línea**: 1.5 (general), 1.1 (hero)

## Efectos Visuales

### Gradientes
- **Texto con Gradiente**: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`
- **Dirección**: 135 grados (diagonal)

### Animaciones
- **Fade In Up**: 0.6s ease-out
- **Pulse Lento**: 3s cubic-bezier(0.4, 0, 0.6, 1) infinite

### Efectos de Desenfoque
- **Backdrop Blur Suave**: 8px
- **Backdrop Blur Extra Suave**: 2px

## Estados Interactivos

### Hover
- **Hover Acento**: Cambia al color de acento
- **Hover Borde**: Cambia al color de borde
- **Hover Texto**: Cambia al color de texto principal
- **Hover Primario**: Cambia al color primario

### Focus
- **Anillo de Enfoque**: `rgb(var(--color-primary) / 0.5)` con offset de 2px
- **Borde de Enfoque**: Color primario

### Selección
- **Fondo de Selección**: `rgb(var(--color-primary) / 0.2)`
- **Color de Selección**: Color de texto principal

## Scrollbar Personalizada

### Tema Claro
- **Ancho**: 6px
- **Track**: Color de superficie (`#F6F7F9`)
- **Thumb**: Color de borde (`#E5E7EB`)
- **Thumb Hover**: Color de texto secundario (`#53535A`)

### Tema Oscuro
- **Track**: Color de superficie (`#121214`)
- **Thumb**: Color de borde (`#1E1E20`)
- **Thumb Hover**: Color de texto secundario (`#B4B4B6`)

## Implementación CSS

Los colores se implementan usando variables CSS personalizadas:

```css
:root {
  --color-bg: #FFFFFF;
  --color-surface: #F6F7F9;
  --color-primary: #FFD700;
  --color-accent: #FFE55C;
  --color-secondary: #E6C200;
  --color-text: #151517;
  --color-text-secondary: #53535A;
  --color-border: #E5E7EB;
}

.dark {
  --color-bg: #0B0B0C;
  --color-surface: #121214;
  --color-primary: #FFE55C;
  --color-accent: #FFF176;
  --color-secondary: #FFD54F;
  --color-text: #F2F2F3;
  --color-text-secondary: #B4B4B6;
  --color-border: #1E1E20;
}
```

## Logo y Elementos Visuales

### Logo Adaptativo
- **Tema Claro**: `light-icon-512.png`
- **Tema Oscuro**: `dark-icon-512.png`
- **Transición**: Suave entre temas (0.3s)
- **Sin efectos**: Sin sombras ni bordes redondeados

### Botones
- **Botón Principal**: Fondo amarillo con texto negro para máximo contraste
- **Botón Alternativo**: Texto amarillo con borde amarillo, hover con fondo amarillo y texto negro
- **Contraste**: Optimizado para accesibilidad (texto negro sobre amarillo)

## Notas de Uso

- La marca utiliza un esquema de colores dorados brillantes como color principal
- El contraste está optimizado para accesibilidad en ambos temas
- Los colores se adaptan automáticamente entre tema claro y oscuro
- Se mantiene consistencia visual en todos los estados interactivos
- Los botones usan texto negro sobre fondo amarillo para legibilidad óptima
