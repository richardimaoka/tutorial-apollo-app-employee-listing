export const HeaderContainer = () => {
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        filter: "drop-shadow(6px 6px 6px #00000029)",
      }}
    >
      <div
        style={{
          width: "1080px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            padding: "4px",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                color: "#f3f3f3",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "28px",
                fontWeight: 900,
                backgroundColor: "#1470C3",
                padding: "2px 4px",
              }}
            >
              M
            </span>
            <span
              style={{
                display: "inline-block",
                color: "#1470C3",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "28px",
                fontWeight: 900,
              }}
            >
              ondrickson
            </span>
          </div>
          <div style={{ marginTop: "-6px" }}>
            <span
              style={{
                display: "inline-block",
                color: "#1470C3",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "8px",
                fontWeight: 900,
              }}
            >
              モンドリクソン・アンド・カンパニー・ジャパン株式会社
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
