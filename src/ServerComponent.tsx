"use server";
// Server Component - Runs only on the server
export default async function ServerComponent() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (res) => res.json()
  );

  return (
    <div className="p-6 border border-white rounded bg-gray-900">
      <h2 className="text-xl font-bold">Server Fetched Data</h2>
      <p className="mt-2 text-gray-300">Task: {data.title}</p>
    </div>
  );
}
