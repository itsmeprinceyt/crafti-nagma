export default function Loader() {
    return (
        <div className="absolute h-screen w-full flex flex-col items-center justify-center bg-white text-gray-800">
            <h1 className="text-4xl font-bold mb-2 animate-bounce">Loading</h1>
            <p className="text-lg text-center max-w-md mb-6 animate-pulse">
                Please wait . . .
            </p>
        </div>
    );
}
