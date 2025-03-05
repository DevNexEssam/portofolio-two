export default function Footer() {
  return (
    <footer className="py-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="">
          © {new Date().getFullYear()} Essam Mohamed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
