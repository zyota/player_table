export default function Header() {
  const count = 0;
  return (
    <div className="container">
      <h2>Total players: {count}</h2>
      <div className="btn">
        <button>By Name</button>
        <button>By Score</button>
      </div>
    </div>
  );
}
