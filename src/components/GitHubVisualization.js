import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GitHubVisualization = () => {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/keren5005/repos")
      .then(response => response.json())
      .then(data => {
        const filteredData = data.map(repo => ({
          name: repo.name,
          created_at: repo.created_at,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
        }));
        setRepoData(filteredData);
      });
  }, []);

  const groupReposByYear = (repoData) => {
    return repoData.reduce((acc, repo) => {
      const date = new Date(repo.created_at);
      const year = date.getFullYear();
      const month = date.toLocaleString('default', { month: 'long' });
      const key = `${month} ${year}`;

      // Initialize the entry if it doesn't exist
      if (!acc[key]) {
        acc[key] = { count: 0, stars: 0, forks: 0 };
      }

      // Increment counts for each repository
      acc[key].count += 1; // Count the repo itself
      acc[key].stars += repo.stars; // Sum the stars
      acc[key].forks += repo.forks; // Sum the forks
      return acc;
    }, {});
  };

  const RepoChart = () => {
    const groupedRepos = groupReposByYear(repoData);
    const data = Object.keys(groupedRepos)
      .map(month => ({
        month,
        ...groupedRepos[month],
      }))
      .sort((a, b) => new Date(a.month) - new Date(b.month)); // Sort by date

    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" name="Repositories" />
          <Line type="monotone" dataKey="stars" stroke="#8884d8" name="Stars" />
          <Line type="monotone" dataKey="forks" stroke="#ffc658" name="Forks" />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <section>
      <h2>Achievements Over the Years</h2>
      <RepoChart />
    </section>
  );
};

export default GitHubVisualization;
