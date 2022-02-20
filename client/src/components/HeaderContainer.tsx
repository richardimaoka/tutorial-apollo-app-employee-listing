import { Link } from "react-router-dom";

export const HeaderContainer = () => {
  return (
    <header
      style={{
        backgroundColor: "#1470C3",
      }}
    >
      <div
        style={{
          height: "60px",
          width: "1080px",
          margin: "0 auto",
          display: "flex", //vertically center the company name
        }}
      >
        <div
          style={{
            margin: "auto 0", //vertically center the company name
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            <span
              style={{
                color: "#f3f3f3",
                fontSize: "28px",
                fontFamily: "'Zen Antique Soft', serif",
              }}
            >
              モンドリクソン・アンド・カンパニー・ジャパン株式会社
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
