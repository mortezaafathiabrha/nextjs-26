export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>Hello World! 👋</h1>
      <p style={styles.text}>Welcome to your Next.js application</p>
      <p style={styles.meta}>Node.js {process.version}</p>
    </main>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#000",
    margin: "0 0 1rem 0",
  },
  text: {
    fontSize: "1.25rem",
    color: "#666",
    margin: 0,
  },
  meta: {
    fontSize: "1rem",
    color: "#444",
    margin: "0.75rem 0 0 0",
  },
};
