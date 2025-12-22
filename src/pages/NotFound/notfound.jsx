import { Link } from "react-router-dom";

function NotFound() {
  const styles = {
    wrapper: {
      minHeight: "calc(100vh - 160px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "60px",
      padding: "40px 20px",
      textAlign: "center",
    },
    code: {
      margin: 0,
      color: "#FF6060",
      fontSize: "clamp(96px, 18vw, 288px)",
      fontWeight: 700,
      lineHeight: 1,
    },
    message: {
      margin: 0,
      color: "#FF6060",
      fontSize: "clamp(18px, 2.5vw, 36px)",
      fontWeight: 500,
      maxWidth: "900px",
    },
    link: {
      color: "#000",
      fontSize: "clamp(14px, 1.2vw, 18px)",
      textDecoration: "underline",
    },
  };

  return (
    <main className="kasa-container" style={styles.wrapper}>
      <h1 style={styles.code}>404</h1>

      <p style={styles.message}>
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link to="/" style={styles.link}>
        Return to home page
      </Link>
    </main>
  );
}

export default NotFound;