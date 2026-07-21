import { ImageResponse } from "next/og";

export const alt =
  "Redefine Labs - Software and AI automation, built with taste";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#f7f7f7",
          color: "#090909",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -170,
            left: 335,
            width: 530,
            height: 530,
            borderRadius: 999,
            background: "rgba(145, 187, 252, 0.48)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            bottom: -230,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: "rgba(253, 210, 157, 0.56)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "68px 76px",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
            Redefine Labs
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 900,
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: 0,
            }}
          >
            Software and AI automation, built with taste.
          </div>
          <div style={{ display: "flex", fontSize: 24 }}>
            Custom software · Applied AI · Digital products
          </div>
        </div>
      </div>
    ),
    size,
  );
}
