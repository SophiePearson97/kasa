function TitleLocation({ title, location }) {
  return (
    <div>
      <h1 style={{ margin: 0, color: "#FF6060", fontSize: "36px", fontWeight: 500 }}>
        {title}
      </h1>
      <p style={{ margin: "6px 0 0", fontSize: "18px" }}>{location}</p>
    </div>
  );
}

export default TitleLocation;