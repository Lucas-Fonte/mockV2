/* eslint-disable @typescript-eslint/interface-name-prefix */
const BASE_STATS_URL = 'https://github-readme-stats.vercel.app/api/pin/';
const GITHUB_BASE_URL = 'https://github.com';

interface IUrlResolver {
  resolveGithubStats: Function;
  resolveGithubRepositories: Function;

}
const urlResolver = (
  username: string,
  theme: string,
): IUrlResolver => ({
  resolveGithubStats: (repo: string) => `${BASE_STATS_URL}?username=${username}&repo=${repo}&theme=${theme}`,
  resolveGithubRepositories: (repo: string) => `${GITHUB_BASE_URL}/${username}/${repo}`,

});

export { urlResolver };
