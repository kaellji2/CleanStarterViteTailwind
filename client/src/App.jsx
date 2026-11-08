function App() {
	return (
		<main className="min-h-screen bg-slate-950 p-4 text-white">
			<h1 className="mb-6 text-center text-2xl font-bold">
				CleanStarter Mobile
			</h1>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<div className="rounded-xl bg-blue-500 p-8 text-center">
					Card 1
				</div>
				<div className="rounded-xl bg-purple-500 p-8 text-center">
					Card 2
				</div>
				<div className="rounded-xl bg-pink-500 p-8 text-center">
					Card 3
				</div>
			</div>
		</main>
	);
}

export default App;
