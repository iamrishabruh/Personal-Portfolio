const GITHUB_API_URL = 'https://api.github.com';

// Cache duration in milliseconds (1 hour)
const CACHE_DURATION = 60 * 60 * 1000;

// Cache object
let cache = {
  data: null,
  timestamp: null
};

export const fetchGitHubRepos = async (username) => {
  // Check if we have cached data that's still valid
  if (cache.data && cache.timestamp && (Date.now() - cache.timestamp) < CACHE_DURATION) {
    return cache.data;
  }

  try {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Add GitHub token if available
    if (process.env.REACT_APP_GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.REACT_APP_GITHUB_TOKEN}`;
    }

    const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos?sort=updated&direction=desc`, {
      headers
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }

    const repos = await response.json();
    
    // Format and filter repositories
    const formattedRepos = repos
      .filter(repo => !repo.fork && !repo.private)
      .map(repo => ({
        name: repo.name,
        description: repo.description || 'No description available',
        stack: repo.topics || [],
        sourceCode: repo.html_url,
        livePreview: repo.homepage || null,
        updatedAt: new Date(repo.updated_at).toLocaleDateString(),
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        demo: null,
        images: [],
        videoDemo: null,
      }));

    // Update cache
    cache = {
      data: formattedRepos,
      timestamp: Date.now()
    };

    return formattedRepos;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    // Return cached data if available, even if expired
    return cache.data || [];
  }
}; 