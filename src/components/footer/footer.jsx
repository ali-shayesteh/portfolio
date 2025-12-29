import BottomAppBar from "../mobile/bottomAppBar";

export default function Footer() {
  return (
    <>
      <footer className="max-md:hidden mt-4">
        <div className="container">
          <div className="flex gap-4 items-center py-3 px-2 border-t border-accent/30 text-xs text-slate-500">
            <a href="mailto:ali.shayesteh@gmail.com">Email</a>
            <a target="_blank" href="https://www.linkedin.com/in/ali-shayesteh">
              LinkedIn
            </a>
            <a target="_blank" href="https://www.github.com/ali-shayesteh">
              GitHub
            </a>
          </div>
        </div>
      </footer>
      <div className="md:hidden">
        <BottomAppBar />
      </div>
    </>
  );
}
