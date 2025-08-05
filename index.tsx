import { useState } from "react";
import { Home, Film, Tv, Settings, User, Play, Info } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showPlayer, setShowPlayer] = useState(false);

  const sidebarItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "movies", label: "Movies", icon: Film },
    { id: "shows", label: "TV Shows", icon: Tv },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-700 flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-purple-400">Jellyfin</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full justify-start gap-3 ${
                  activeSection === item.id
                    ? "bg-purple-500 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <Button className="w-full justify-start gap-3 text-gray-300 hover:bg-gray-800">
            <User className="h-5 w-5" />
            User Profile
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center px-6">
          <h2 className="text-xl font-semibold capitalize">
            {activeSection === "home" ? "Home" : activeSection}
          </h2>
        </header>

        <main className="p-6 overflow-y-auto h-[calc(100vh-4rem)]">
          {activeSection === "home" && (
            <div className="space-y-8">
              <Section title="Recently Added" />
              <Section title="Continue Watching" />
            </div>
          )}

          {activeSection === "movies" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Movies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <MovieCard onPlay={() => setShowPlayer(true)} />
              </div>
            </div>
          )}

          {activeSection === "shows" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">TV Shows</h3>
              <div className="text-gray-400 text-center py-12">No TV shows available</div>
            </div>
          )}

          {activeSection === "settings" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Settings</h3>
              <Card className="p-6">
                <p className="text-gray-400">Server settings and configuration</p>
              </Card>
            </div>
          )}
        </main>
      </div>

      {/* Movie Player Dialog */}
      {showPlayer && (
        <Dialog onClose={() => setShowPlayer(false)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Smurfs 2025</DialogTitle>
            </DialogHeader>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://mega.nz/embed/SZ1SmKgQ#ic5T7OiFk_WoUpXImFUbNK1uNh_UjE7FP_WkjJRMDik"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );

  function Section({ title }: { title: string }) {
    return (
      <section>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <MovieCard onPlay={() => setShowPlayer(true)} />
        </div>
      </section>
    );
  }

  function MovieCard({ onPlay }: { onPlay: () => void }) {
    return (
      <Card className="group cursor-pointer overflow-hidden bg-gray-800 hover:bg-gray-700 transition-colors">
        <div className="relative aspect-[2/3] bg-gray-700 flex items-center justify-center text-gray-400 text-sm">
          Poster
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <Button size="sm" onClick={onPlay} className="bg-purple-500 hover:bg-purple-600">
              <Play className="h-4 w-4 mr-1" />
              Play
            </Button>
            <Button size="sm" className="bg-gray-600 hover:bg-gray-500">
              <Info className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="p-3">
          <h4 className="font-medium text-sm truncate">Smurfs 2025</h4>
          <p className="text-xs text-gray-400">2025 • Animation</p>
        </div>
      </Card>
    );
  }

  function Button({ children, className = "", onClick }: any) {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center px-3 py-2 rounded ${className}`}
      >
        {children}
      </button>
    );
  }

  function Card({ children, className = "" }: any) {
    return <div className={`rounded border border-gray-700 ${className}`}>{children}</div>;
  }

  function Dialog({ children, onClose }: { children: any; onClose: () => void }) {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    );
  }

  function DialogContent({ children }: any) {
    return <div className="bg-gray-900 p-6 rounded-lg max-w-4xl w-full">{children}</div>;
  }

  function DialogHeader({ children }: any) {
    return <div className="mb-4">{children}</div>;
  }

  function DialogTitle({ children }: any) {
    return <h2 className="text-xl font-semibold">{children}</h2>;
  }
};

export default Index;
