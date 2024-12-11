export const userLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw Error("Failed to fetch users");
  }
  const data = await res.json();
  return data;
};

export const userSingleLoader = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  if (!res.ok) {
    throw Error("User details not found ");
  }
  const data = await res.json();
  return data;
};
