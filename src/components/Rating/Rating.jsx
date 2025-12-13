function Rating({ rating }) {
  const value = Number(rating);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {stars.map((star) => (
        <span
          key={star}
          style={{
            fontSize: "24px",
            color: star <= value ? "#FF6060" : "#E3E3E3",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;