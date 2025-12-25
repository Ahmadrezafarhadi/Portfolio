export default function Loading() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-white bg-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mx-auto animation-delay-300"></div>
          <div className="absolute inset-2 w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto animation-delay-600"></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="text-gradient">در حال بارگذاری</span>
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">لطفاً کمی صبر کنید...</p>

        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </section>
  );
}
