import ServerComponent from "./ServerComponent";
import ClientComponent from "./ClientComponent";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white gap-8">
      <h1 className="text-3xl font-bold">React 19 Server Components Demo</h1>
      <ServerComponent /> {/* No extra JavaScript sent */}
      <ClientComponent /> {/* Fully interactive */}
    </div>
  );
}
