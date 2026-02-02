export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Welcome to BK Academy</h1>
        <p className="text-xl mb-8">
          Your Learning Platform
        </p>
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">
              Courses
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Explore our wide range of courses designed to help you learn and grow.
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">
              Resources
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Access learning materials, tutorials, and resources to support your journey.
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">
              Community
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Connect with fellow learners and instructors in our community.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
