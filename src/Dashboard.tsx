import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
  const { data, isPending, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

    const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com" },
    { id: 4, name: "David Brown", email: "david@example.com" },
  ];

  const results = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Search Users
          </h1>
          <p className="mt-1 text-gray-500">
            Find a user by their name.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Results */}
        <div className="space-y-3">
          {results.length > 0 ? (
            results.map((user) => (
              <div
                key={user.id}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-900">
                  {user.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {user.email}
                </p>
              </div>
            ))
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
              <p className="text-gray-500">
                No users found.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}