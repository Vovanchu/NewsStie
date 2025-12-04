export const getHeadlines = async () => {
  const res = await fetch("http://localhost:5000/api/headlines");
  return res.json();
};

export const getByCategory = async (category: string) => {
  const res = await fetch(`http://localhost:5000/api/category/${category}`);
  return res.json();
};

export const searchNews = async (query: string) => {
  const res = await fetch(`http://localhost:5000/api/search/${query}`);
  return res.json();
};
