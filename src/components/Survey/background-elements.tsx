export const BackgroundElements = () => {
    return (
      <div className="absolute inset-0">
        {/* Floating geometric shapes with better colors */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-200/20 to-teal-300/20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-200/25 to-blue-300/20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-teal-200/15 to-emerald-300/15 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-300/20 to-teal-400/15 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    )
  }
  