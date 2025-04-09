const GITHUB_API_URL = 'https://api.github.com';

// Cache configuration
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const cache = {
  data: null,
  timestamp: null,
};

// Function to fetch GitHub repositories
const fetchGitHubRepos = async (username) => {
  try {
    // Check if we have valid cached data
    if (cache.data && cache.timestamp && Date.now() - cache.timestamp < CACHE_DURATION) {
      return cache.data;
    }

    const headers = {
      Accept: 'application/vnd.github.v3+json',
    };

    // Add authorization if token is available
    if (process.env.REACT_APP_GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.REACT_APP_GITHUB_TOKEN}`;
    } else {
      console.warn('No GitHub token found. Using unauthenticated requests with lower rate limits.');
    }

    const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos?sort=updated&direction=desc`, {
      headers,
      cache: 'no-cache',
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    
    // Fetch languages for each repository
    const reposWithLanguages = await Promise.all(
      repos.map(async (repo) => {
        const languagesResponse = await fetch(`${GITHUB_API_URL}/repos/${username}/${repo.name}/languages`, {
          headers: {
            'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!languagesResponse.ok) {
          return { ...repo, languages: [] };
        }

        const languages = await languagesResponse.json();
        return {
          ...repo,
          languages: Object.keys(languages),
        };
      })
    );

    // Filter and format repositories
    const formattedRepos = reposWithLanguages
      .filter((repo) => !repo.fork && !repo.archived)
      .map((repo) => ({
        name: repo.name,
        description: repo.description || 'No description available',
        stack: repo.languages || [],
        sourceCode: repo.html_url,
        livePreview: repo.homepage,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
      }));

    // Update cache
    cache.data = formattedRepos;
    cache.timestamp = Date.now();

    return formattedRepos;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    // Return cached data if available, otherwise empty array
    return cache.data || [];
  }
};

export default fetchGitHubRepos; 