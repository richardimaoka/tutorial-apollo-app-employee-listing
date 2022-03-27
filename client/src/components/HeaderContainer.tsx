import { Link } from "react-router-dom";

export const HeaderContainer = () => {
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          width: "1080px",
          margin: "0 auto",
          display: "flex", //vertically center the company name
        }}
      >
        <div
          style={{
            margin: "auto 0", //vertically center the company name
            padding: "4px",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
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
          </Link>
        </div>
      </div>
    </header>
  );
};
