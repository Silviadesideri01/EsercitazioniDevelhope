export function WelcomeUser({ name = "User" }) {
  return (
    <div className="welcome">
      <p>Welcome, {name}!</p>
    </div>
  );
}
