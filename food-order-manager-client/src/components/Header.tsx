export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-zinc-950/95
        backdrop-blur
        border-b
        border-zinc-800
        p-4
      "
    >
      <h1 className="text-lg font-semibold text-amber-500">
        Food Order Manager
      </h1>

      <p className="text-sm text-zinc-400">
        12 mesas activas
      </p>
    </header>
  )
}