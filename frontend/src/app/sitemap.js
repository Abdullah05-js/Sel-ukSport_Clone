export default function sitemap() {
    return [
      {
        url: 'https://thodex.live/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://thodex.live/Watch/1',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://thodex.live/Watch/2',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://thodex.live/Watch/3',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://thodex.live/matches',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://thodex.live/DMCA',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
    ]
  }