# Planning Guide

Um portfólio moderno e visualmente impactante que apresenta trabalhos profissionais com animações suaves, design contemporâneo e integração com Firebase e LinkedIn.

**Experience Qualities**:
1. **Impactante** - O portfólio deve causar uma primeira impressão marcante com hero sections dinâmicas, gradientes animados e micro-interações que demonstram atenção aos detalhes
2. **Fluído** - Todas as transições e animações devem ser suaves e naturais, criando uma experiência contínua enquanto o visitante navega pelo conteúdo
3. **Profissional** - O design deve transmitir competência técnica e excelência criativa através de tipografia bem hierarquizada, espaçamento generoso e composições visuais equilibradas

**Complexity Level**: Light Application (multiple features with basic state)
  - O site gerencia dados de projetos, integra com Firebase para imagens, possui links externos para LinkedIn, e oferece recursos completos de administração para o proprietário, tudo com persistência via useKV

## Essential Features

### Hero Section Impactante
- **Functionality**: Seção hero em tela cheia com animações parallax, gradientes animados, estatísticas dinâmicas e CTAs destacados
- **Purpose**: Criar uma primeira impressão memorável e comunicar valor imediatamente
- **Trigger**: Carregamento da página
- **Progression**: Página carrega → Animações de fade-in escalonadas → Blobs gradientes com parallax → Estatísticas aparecem → Scroll suave para projetos
- **Success criteria**: Animações fluidas 60fps, gradientes renderizam corretamente, scroll suave funciona, links sociais abrem em nova aba

### Seção Sobre com Skills
- **Functionality**: Apresentação pessoal com valores, skills organizadas por categoria e badges animadas
- **Purpose**: Humanizar o portfólio e demonstrar competências técnicas de forma visual
- **Trigger**: Scroll até a seção
- **Progression**: Scroll → Animações de entrada → Cards de valores aparecem → Grid de skills revela badges em cascata
- **Success criteria**: Animações ativam no viewport, cards responsivos, badges organizadas logicamente

### Grid de Projetos Moderno
- **Functionality**: Layout grid responsivo com cards 3D interativos, efeitos hover sofisticados e animações stagger
- **Purpose**: Mostrar trabalhos de forma atraente e permitir navegação visual rápida
- **Trigger**: Scroll até seção de projetos
- **Progression**: Scroll → Header da seção anima → Cards aparecem em cascata → Hover revela efeito 3D e overlay → Click abre modal detalhado
- **Success criteria**: Cards 3D responsivos ao mouse, imagens carregam com skeleton, grid adapta-se a diferentes telas

### Modal de Detalhes Split-Screen
- **Functionality**: Modal em duas colunas com imagem em tela cheia e informações detalhadas do projeto
- **Purpose**: Apresentar projetos de forma imersiva com espaço para storytelling e CTAs claros
- **Trigger**: Click em qualquer project card
- **Progression**: Click → Modal desliza com animação → Imagem fade-in à esquerda → Conteúdo anima à direita → Badges aparecem em sequência → CTAs destacados
- **Success criteria**: Layout split responsivo (stack em mobile), animações coordenadas, LinkedIn abre externamente

### Admin Project Management
- **Functionality**: FAB gradiente flutuante para adicionar projetos, formulários de edição e confirmação de exclusão
- **Purpose**: Permitir gerenciamento de conteúdo sem edição de código
- **Trigger**: Proprietário visita o site (spark.user().isOwner)
- **Progression**: Owner carrega página → FAB anima com spring → Click FAB → Form modal → Preenche dados Firebase URL → Salva → Projeto aparece no grid
- **Success criteria**: Apenas owner vê controles, CRUD completo funciona, dados persistem via useKV, toasts confirmam ações

## Edge Case Handling

- **Empty Portfolio**: Estado vazio elegante com ícone grande, mensagem acolhedora e visual moderno (admin vê CTA destacado)
- **Broken Image URLs**: Placeholder com ícone emoji e mensagem amigável quando Firebase URL falha
- **Long Project Titles/Descriptions**: Text truncate com line-clamp em cards, conteúdo completo no modal
- **Mobile Experience**: Hero adapta tamanhos, grid vira coluna única, modal split vira stack vertical, FAB permanece acessível
- **No LinkedIn URL**: Botão LinkedIn oculto graciosamente se URL não fornecida
- **Slow Image Loading**: Skeleton shimmer animado com gradientes enquanto imagens carregam
- **Mouse vs Touch**: Efeito 3D só em hover de mouse, taps funcionam normalmente em touch
- **Scroll Performance**: useScroll do Framer Motion otimizado, parallax apenas em desktop

## Design Direction

O design deve parecer premium e contemporâneo—como os melhores portfólios de design e desenvolvimento da atualidade. Gradientes sutis mas vibrantes, micro-interações polidas, espaçamento generoso e tipografia impactante criam uma experiência que coloca o trabalho em evidência enquanto demonstra maestria técnica e visual.

## Color Selection

Paleta customizada com gradientes vibrantes que transmitem modernidade e criatividade profissional.

- **Primary Color**: Midnight blue profundo (oklch(0.25 0.05 250)) - Âncora de confiança e profissionalismo, usado em textos e elementos estruturais
- **Secondary Colors**: Slate cinza (oklch(0.45 0.01 250)) para hierarquia visual suave e elementos secundários
- **Accent Color**: Cyan vibrante (oklch(0.70 0.15 200)) - Energia e inovação, usado em gradientes, CTAs e destaques interativos
- **Gradients**: Combinações de accent + primary criam profundidade e movimento visual (hero blobs, badges, FAB)
- **Foreground/Background Pairings**:
  - Background (Branco puro oklch(1 0 0)): Charcoal text (oklch(0.15 0 0)) - Ratio 14.5:1 ✓
  - Card (Cinza suave oklch(0.98 0 0)): Charcoal text (oklch(0.15 0 0)) - Ratio 14.2:1 ✓
  - Primary (Midnight blue oklch(0.25 0.05 250)): White text (oklch(1 0 0)) - Ratio 12.8:1 ✓
  - Secondary (Slate gray oklch(0.45 0.01 250)): White text (oklch(1 0 0)) - Ratio 5.2:1 ✓
  - Accent (Cyan vibrante oklch(0.70 0.15 200)): Charcoal text (oklch(0.15 0 0)) - Ratio 9.1:1 ✓
  - Muted (Light gray oklch(0.96 0 0)): Medium gray text (oklch(0.50 0 0)) - Ratio 5.8:1 ✓

## Font Selection

Tipografia moderna e altamente legível que equilibra impacto visual com clareza profissional.

- **Primary Font**: Inter - Sans-serif versátil e contemporâneo com excelente legibilidade, usado para todo conteúdo
- **Secondary Font**: JetBrains Mono - Fonte monoespaçada para tags técnicas, adicionando personalidade tech

- **Typographic Hierarchy**:
  - H1 (Hero Title): Inter Bold/56-96px/letter-spacing -0.03em - Máximo impacto visual
  - H2 (Section Headers): Inter Bold/40-64px/letter-spacing -0.02em - Estrutura e ritmo
  - H3 (Card Titles): Inter SemiBold/20-24px - Clareza e escaneabilidade
  - Body (Descriptions): Inter Regular/16-18px/line-height 1.6-1.7 - Conforto de leitura
  - Small (Captions/Labels): Inter Medium/12-14px/uppercase tracking-wider - Hierarquia visual
  - Tech Tags: JetBrains Mono Regular/12-14px - Identidade técnica
  - Button Text: Inter Medium/16px - Ação clara

## Animations

Animações servem propósito funcional claro enquanto adicionam momentos de deleite—movimento natural e fluido que guia atenção sem distrair.

- **Purposeful Meaning**: Cada animação comunica estado, progresso ou relação espacial; parallax no hero cria profundidade, stagger revela hierarquia, 3D no hover convida interação
- **Hierarchy of Movement**: 
  - Critical: Transições de página/modal (300-500ms, ease cubic bezier)
  - Primary: Card hover 3D com rotateX/Y, animações de entrada staggered
  - Secondary: Badge cascades, gradient shifts, shimmer loading
  - Tertiary: Button states, icon transforms, smooth scroll
  - Ambient: Parallax blobs, subtle pulse em status indicators

## Component Selection

- **Components**:
  - Dialog: Modal split-screen para detalhes de projeto com layout duas colunas
  - Card: Project cards com backdrop blur e bordas adaptativas
  - Button: CTAs com variantes (primary gradient, secondary, destructive) e tamanhos
  - Input/Textarea/Label: Formulários admin estruturados
  - Badge: Technology tags com hover states e mono font
  - Alert Dialog: Confirmação de exclusão com contexto claro
  - Toaster (Sonner): Feedback de ações com animações suaves
  
- **Customizations**:
  - Hero com parallax blobs e scroll progress
  - AboutSection com value cards e skill grid
  - ProjectCard com efeito 3D baseado em mouse position
  - FAB com gradiente e animação spring
  - Shimmer skeleton para image loading
  - Split-screen modal responsivo
  
- **States**:
  - Buttons: Scale 1.1 on hover, 0.95 on tap, gradient shifts, disabled opacity 50%
  - Cards: 3D rotation seguindo mouse, border accent on hover, shadow elevation
  - Inputs: Accent border + ring on focus, validation colors (green/red)
  - Images: Skeleton shimmer → blur fade → sharp reveal (600ms)
  - Badges: Scale 1.05 on hover, background transition
  
- **Icon Selection** (Phosphor Icons):
  - Plus (bold): Adicionar projeto
  - Pencil: Editar projeto
  - Trash: Excluir projeto
  - LinkedinLogo (fill): Redirect LinkedIn
  - GithubLogo (fill): Link GitHub
  - EnvelopeSimple (fill): Email contact
  - ArrowUpRight (bold): Links externos
  - ArrowDown (bold): Scroll indicator
  - X: Fechar modals
  - Code, Lightbulb, Rocket, Users (duotone): Value icons
  
- **Spacing**:
  - Page margins: px-6 md:px-12 lg:px-24
  - Section vertical: py-24 md:py-32
  - Section gaps: mb-16 (headers), mb-6/8 (subsections)
  - Card padding: p-6 (small), p-8 md:p-12 (modals)
  - Grid gaps: gap-6 md:gap-8
  - Button padding: size variants (sm/md/lg)
  - Badge padding: px-2.5 py-0.5 (small), px-3 py-1 (medium)
  
- **Mobile**:
  - Grid: 1 col mobile → 2 tablet → 3-4 desktop
  - Hero: text-5xl md:text-7xl lg:text-8xl, stats 2 cols → 4 cols
  - Modal: Stack vertical em mobile, split horizontal em md+
  - AboutSection: 1 col → 2 → 4 progression
  - FAB: bottom-8 right-8 sempre visível
  - Touch targets: min 44x44px, cards inteiros clicáveis
  - Typography: Escala fluida via viewport units onde apropriado
