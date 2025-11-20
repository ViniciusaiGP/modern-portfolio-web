# Planning Guide

Um portfólio ultra-moderno e visualmente sofisticado que apresenta trabalhos profissionais com animações cinematográficas, design premium contemporâneo e integração com Firebase e LinkedIn.

**Experience Qualities**:
1. **Memorável** - O portfólio deve causar uma impressão duradoura com elementos visuais ousados, gradientes animados em tempo real, efeitos 3D sutis e micro-interações que demonstram maestria técnica
2. **Imersivo** - Transições fluidas, parallax suave e animações coreografadas criam uma experiência contínua que mantém o visitante engajado do início ao fim
3. **Refinado** - O design deve exalar sofisticação através de tipografia impecável, espaçamento meticuloso, paleta de cores vibrante mas elegante e atenção obsessiva aos detalhes

**Complexity Level**: Light Application (multiple features with basic state)
  - O site gerencia dados de projetos, integra com Firebase para imagens, possui links externos para LinkedIn, oferece recursos completos de administração para o proprietário, navegação moderna fixa e tudo com persistência via useKV

## Essential Features

### Navegação Moderna Fixa
- **Functionality**: Navbar superior com backdrop blur adaptativo, links de navegação suave e ícones sociais
- **Purpose**: Fornecer orientação constante e acesso rápido a seções e contatos
- **Trigger**: Sempre visível no topo
- **Progression**: Scroll → Background blur aumenta → Shadow aparece → Links funcionam com smooth scroll → Ícones sociais sempre acessíveis
- **Success criteria**: Backdrop blur fluido, shadow transitions suaves, scroll to sections funciona, sempre legível

### Hero Section Cinematográfica
- **Functionality**: Seção hero em tela cheia com gradientes animados em loop infinito, animações parallax, estatísticas dinâmicas e CTAs vibrantes
- **Purpose**: Criar uma primeira impressão inesquecível e comunicar valor profissional imediatamente
- **Trigger**: Carregamento da página
- **Progression**: Página carrega → Gradientes começam movimento orbital → Animações de fade-in escalonadas → Badge de status com pulse → Estatísticas aparecem em cascata → Scroll indicator animado
- **Success criteria**: Animações fluidas 60fps, gradientes orbitam suavemente, parallax funciona no scroll, scroll suave para projetos

### Background Animado Global
- **Functionality**: Blobs gradientes com movimento orbital contínuo que percorrem toda a página
- **Purpose**: Criar profundidade visual e movimento ambient que mantém a página viva
- **Trigger**: Sempre ativo em background
- **Progression**: Blobs movem em loops infinitos → Escalas pulsam → Cores transitam suavemente → Nunca interfere com conteúdo
- **Success criteria**: Performance otimizada, blur apropriado, z-index correto, movimento suave

### Seção Sobre Premium
- **Functionality**: Apresentação pessoal com cards de valores elevados com ícones duotone e skills organizadas em grid sofisticado
- **Purpose**: Humanizar o portfólio e demonstrar competências técnicas de forma visualmente atraente
- **Trigger**: Scroll até a seção
- **Progression**: Scroll → Header com badge animado → Cards de valores aparecem com hover scale → Grid de skills revela badges em cascata com preview live
- **Success criteria**: Animações ativam no viewport, cards responsivos com hover effects, badges agrupadas logicamente

### Grid de Projetos com Efeito 3D
- **Functionality**: Layout grid responsivo com cards que reagem ao mouse com rotação 3D, efeitos hover sofisticados e animações stagger
- **Purpose**: Mostrar trabalhos de forma premium e permitir navegação visual intuitiva
- **Trigger**: Scroll até seção de projetos
- **Progression**: Scroll → Header da seção anima → Cards aparecem em cascata → Mouse move cria rotação 3D → Hover revela overlay gradiente → Click abre modal
- **Success criteria**: Cards 3D responsivos ao mouse, imagens carregam com shimmer skeleton, grid adapta-se perfeitamente

### Modal de Detalhes Premium
- **Functionality**: Modal em duas colunas com imagem full-height e informações elegantes com animações coordenadas
- **Purpose**: Apresentar projetos de forma imersiva com storytelling visual e CTAs destacados
- **Trigger**: Click em qualquer project card
- **Progression**: Click → Modal desliza → Imagem fade-in suave → Conteúdo anima em sequência → Accent bar → Badges aparecem → CTAs gradientes
- **Success criteria**: Layout split responsivo, animações coordenadas, LinkedIn abre externamente, close suave

### Admin Project Management Polido
- **Functionality**: FAB gradiente com efeito glassmorphism, formulários elegantes com preview live e confirmação de exclusão contextual
- **Purpose**: Permitir gerenciamento de conteúdo sem edição de código de forma elegante
- **Trigger**: Proprietário visita o site (spark.user().isOwner)
- **Progression**: Owner carrega página → FAB anima com spring → Hover scale 1.1 → Click abre form → Preview de badges live → Salva → Toast confirma → Projeto aparece
- **Success criteria**: Apenas owner vê controles, CRUD completo, dados persistem, toasts elegantes, form com icons

### Footer Moderno com CTA
- **Functionality**: Footer com gradient background, CTA de contato e informações de copyright
- **Purpose**: Encerrar a experiência com call-to-action e informações finais
- **Trigger**: Scroll até o final
- **Progression**: Footer visível → CTA convida contato → Links sociais disponíveis → Copyright discreto
- **Success criteria**: Gradient sutil, hierarchy clara, links funcionam

## Edge Case Handling

- **Empty Portfolio**: Estado vazio super elegante com gradient card, ícone emoji grande e mensagem acolhedora moderna
- **Broken Image URLs**: Placeholder premium com emoji 3D e mensagem amigável quando Firebase URL falha, mantém estética
- **Long Project Titles/Descriptions**: Text truncate com line-clamp em cards mantém layout, conteúdo completo no modal sem restrições
- **Mobile Experience**: Hero adapta scales tipográficos, grid vira coluna única, modal split stack vertical, FAB permanece acessível, navbar compacta
- **No LinkedIn URL**: Botão LinkedIn oculto graciosamente se URL não fornecida, layout adapta
- **Slow Image Loading**: Shimmer skeleton animado premium com gradientes enquanto imagens carregam
- **Mouse vs Touch**: Efeito 3D apenas em dispositivos com mouse (hover media query), taps funcionam normalmente em touch sem 3D
- **Scroll Performance**: useScroll do Framer Motion otimizado com transforms, parallax apenas em desktop, requestAnimationFrame
- **Form Validation**: Preview live de badges, URLs validadas, campos required claros

## Design Direction

O design deve ser vibrante, moderno e energético—inspirado pelos melhores portfólios de design contemporâneos. Gradientes coloridos e dinâmicos, animações suaves mas impactantes, tipografia bold e hierarquia visual clara, micro-interações polidas, espaçamento generoso que respira qualidade. A experiência deve ser memorável e demonstrar maestria técnica através de cada detalhe visual e interativo.

## Color Selection

Paleta customizada vibrante e moderna com gradientes dinâmicos que transmitem inovação, energia criativa e profissionalismo.

- **Primary Color**: Vibrant Purple (oklch(0.45 0.25 280)) - Sofisticação, criatividade e tecnologia moderna, usado em gradientes e elementos principais
- **Secondary Colors**: Magenta/Pink (oklch(0.60 0.22 320)) para contraste vibrante e hierarquia visual dinâmica
- **Accent Color**: Bright Cyan/Blue (oklch(0.70 0.20 200)) - Energia, inovação e interatividade, usado em CTAs, highlights e animações
- **Gradients**: Combinações dinâmicas de accent cyan + primary purple + secondary magenta criam profundidade visual e movimento (hero, badges, FAB, CTAs, overlays)
- **Foreground/Background Pairings**:
  - Background (Off-white sutil oklch(0.98 0.005 270)): Deep charcoal (oklch(0.15 0.02 270)) - Ratio 18.5:1 ✓
  - Card (Pure white oklch(1 0 0)): Deep charcoal (oklch(0.15 0.02 270)) - Ratio 19.2:1 ✓
  - Primary (Vibrant purple oklch(0.45 0.25 280)): White text (oklch(0.99 0 0)) - Ratio 7.8:1 ✓
  - Secondary (Magenta oklch(0.60 0.22 320)): White text (oklch(0.99 0 0)) - Ratio 5.2:1 ✓
  - Accent (Bright cyan oklch(0.70 0.20 200)): White text (oklch(0.99 0 0)) - Ratio 4.9:1 ✓
  - Muted (Light gray oklch(0.97 0.01 270)): Medium gray text (oklch(0.50 0.02 270)) - Ratio 6.5:1 ✓

## Font Selection

Tipografia moderna e altamente legível que equilibra impacto visual dramático com clareza profissional cristalina.

- **Primary Font**: Inter - Sans-serif versátil e contemporâneo com excelente legibilidade e personalidade tech, usado para todo conteúdo
- **Secondary Font**: JetBrains Mono - Fonte monoespaçada para tags técnicas e URLs, adicionando identidade developer

- **Typographic Hierarchy**:
  - H1 (Hero Title): Inter ExtraBold/56-96px/letter-spacing -0.03em - Máximo impacto visual dramático
  - H2 (Section Headers): Inter Bold/40-64px/letter-spacing -0.02em - Estrutura clara e ritmo visual
  - H3 (Card Titles): Inter SemiBold/20-24px - Clareza e escaneabilidade rápida
  - H4 (Subsections): Inter SemiBold/16-18px/uppercase/tracking-wider - Organização e labels
  - Body (Descriptions): Inter Regular/16-20px/line-height 1.6-1.7 - Máximo conforto de leitura
  - Small (Captions/Labels): Inter Medium/12-14px/uppercase/tracking-wider - Hierarquia visual clara
  - Tech Tags: JetBrains Mono Medium/12-14px - Identidade técnica forte
  - Button Text: Inter SemiBold/16px/letter-spacing 0.01em - Ação clara e confiante

## Animations

Animações servem propósito funcional claro enquanto adicionam momentos de deleite genuíno—movimento natural e físico que guia atenção sem distrair, inspirado em motion design cinematográfico.

- **Purposeful Meaning**: Cada animação comunica estado, progresso ou relação espacial; orbital blobs criam vida, parallax cria profundidade, stagger revela hierarquia, 3D no hover convida interação física, spring physics comunicam naturalidade
- **Hierarchy of Movement**: 
  - Critical: Page transitions, modal open/close (300-500ms, cubic bezier [0.22, 1, 0.36, 1])
  - Primary: Card hover 3D com rotateX/Y suave, animações de entrada staggered, orbital blob movement
  - Secondary: Badge cascades, gradient shifts, shimmer loading, button hover scales
  - Tertiary: Button states, icon transforms, smooth scroll, focus rings
  - Ambient: Parallax blobs contínuos, subtle pulse em status badge, backdrop blur transitions

## Component Selection

- **Components**:
  - Dialog: Modal split-screen premium para detalhes de projeto com layout duas colunas e close button elegante
  - Card: Project cards com backdrop blur sutil e bordas adaptativas responsivas a hover
  - Button: CTAs com variantes (primary com gradiente vibrante, secondary, outline, destructive) e size scale
  - Input/Textarea/Label: Formulários admin estruturados com icons Phosphor e backgrounds sutis
  - Badge: Technology tags com hover states, mono font e preview live no form
  - Alert Dialog: Confirmação de exclusão com contexto claro e ações destacadas
  - Toaster (Sonner): Feedback de ações com animações suaves e messages contextuais
  - Navbar: Fixed header com backdrop blur progressivo e scroll detection
  
- **Customizations**:
  - GradientBlobs: Background animado global com movimento orbital infinito
  - Navbar com scroll-based blur e shadow
  - Hero com parallax blobs, orbital gradients e scroll progress
  - AboutSection com value cards elevados e skill grid sofisticado
  - ProjectCard com efeito 3D baseado em mouse position (useMotionValue)
  - ProjectForm com preview live de badges e icons por field
  - AdminFab com gradiente vibrante, glassmorphism e animação spring
  - Shimmer skeleton premium para image loading
  - Split-screen modal responsivo com coordinated animations
  
- **States**:
  - Buttons: Scale 1.05-1.1 on hover, 0.95 on tap, gradient shifts, disabled opacity 50%, focus ring accent
  - Cards: 3D rotation seguindo mouse (±7.5deg), border accent on hover, shadow elevation smooth
  - Inputs: Accent border + ring on focus, validation colors (green/red), height consistent 44px+
  - Images: Skeleton shimmer → blur fade → sharp reveal (600ms cubic bezier)
  - Badges: Scale 1.05 on hover, background transition smooth
  - Navbar: Backdrop blur 0→12px on scroll, shadow fade-in
  
- **Icon Selection** (Phosphor Icons):
  - Plus (bold): Adicionar projeto (FAB)
  - Pencil: Editar projeto
  - Trash: Excluir projeto
  - LinkedinLogo (fill): Redirect LinkedIn
  - GithubLogo (fill): Link GitHub
  - EnvelopeSimple (fill): Email contact
  - ArrowUpRight (bold): Links externos
  - ArrowDown (bold): Scroll indicator animado
  - X: Fechar modals
  - Code, Lightbulb, Rocket, Users (duotone): Value icons na About
  - Image, Link, Stack, TextT (bold): Form field icons
  
- **Spacing**:
  - Page margins: px-6 md:px-12 lg:px-24 (progressivo)
  - Section vertical: py-24 md:py-32 (breathing room generoso)
  - Section gaps: mb-16 (headers), mb-6/8 (subsections), mb-3/4 (form fields)
  - Card padding: p-6 (cards), p-8 md:p-12 (modals premium)
  - Grid gaps: gap-6 md:gap-8 (consistente)
  - Button padding: size variants sm/md/lg (44px+ touch targets)
  - Badge padding: px-2.5 py-0.5 (small), px-3 py-1.5 (medium)
  - Navbar height: h-20 (clear touch target)
  
- **Mobile**:
  - Grid: 1 col mobile → 2 tablet → 3 desktop (progressive enhancement)
  - Hero: text-5xl md:text-7xl lg:text-8xl, stats 2 cols → 4 cols, spacing adapta
  - Modal: Stack vertical em mobile, split horizontal em md+ (smooth transition)
  - AboutSection: 1 col → 2 → 4 progression fluida
  - Navbar: Compacta mas clara, icons sempre visíveis
  - FAB: bottom-8 right-8 sempre acessível, size reduz levemente em mobile
  - Touch targets: min 44x44px universal, cards inteiros clicáveis
  - Typography: Escala fluida via clamp() onde apropriado
  - 3D Effects: Desabilitados em touch devices (hover media query)
