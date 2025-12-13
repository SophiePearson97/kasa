function Collapses({ description, equipments }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "76px", marginTop: "24px" }}>
      <div style={{ background: "#FF6060", borderRadius: "10px", color: "#fff", padding: "10px 15px" }}>
        <strong>Description</strong>
      </div>

      <div style={{ background: "#FF6060", borderRadius: "10px", color: "#fff", padding: "10px 15px" }}>
        <strong>Amenities</strong>
      </div>

      <div style={{ gridColumn: "1 / span 1" }}>{description}</div>
      <ul style={{ margin: 0, paddingLeft: "20px" }}>
        {equipments.map((eq) => (
          <li key={eq}>{eq}</li>
        ))}
      </ul>
    </div>
  );
}

export default Collapses;