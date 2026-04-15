export const profile = {
  name: 'Luciano Alves',
  handle: 'luas10c',
  avatar: 'https://avatars.githubusercontent.com/u/66514698?v=4&s=128',
  location: 'Sao Paulo, Brazil',
  timezone: 'UTC -03:00',
  hero: {
    title: 'Software Engineer',
    emphasis: 'building for',
    suffix: 'the web.',
    description:
      'Full-Stack Software Engineer building scalable systems, thoughtful product experiences, and reliable developer tooling. Based in Sao Paulo, Brazil, working remotely.'
  }
} as const

export const stats = [
  { value: '10+', label: 'years of exp.' },
  { value: '87', label: 'repositories' },
  { value: '129', label: 'followers' }
] as const

export const builds = [
  {
    index: '01',
    title: 'Modern interfaces',
    description:
      'desktop and web experiences with attention to detail and performance.'
  },
  {
    index: '02',
    title: 'Full-stack applications',
    description: 'clean architecture that stays scalable and easy to maintain.'
  },
  {
    index: '03',
    title: 'Internal tools',
    description: 'products focused on developer experience and productivity.'
  },
  {
    index: '04',
    title: 'APIs and dashboards',
    description: 'performance-oriented systems with coherent product design.'
  }
] as const

export const links = [
  { label: 'GitHub', href: 'https://github.com/luas10c' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/luas10c' },
  { label: 'X / Twitter', href: 'https://twitter.com/lucianoalvsdm' }
] as const

export const support = {
  title: 'Buy me a coffee',
  description:
    'If you enjoy my work and want to support what I build, you can buy me a coffee.',
  href: 'https://buymeacoffee.com/luas10c',
  cta: 'Support on Buy Me a Coffee'
} as const
