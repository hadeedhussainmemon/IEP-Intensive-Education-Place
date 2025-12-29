import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "IEP – Intensive Education Place";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    // Fonts
    // const interSemiBold = await fetch(
    //     new URL("https://fonts.googleapis.com/css2?family=Inter:wght@600&text=IEP", import.meta.url)
    // ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0B0E14", // Dark background
                    backgroundImage: "linear-gradient(to bottom right, #0B0E14, #1a1f2e)",
                    position: "relative",
                }}
            >
                {/* Background Blobs (Simplified for OG) */}
                <div
                    style={{
                        position: "absolute",
                        top: "-20%",
                        left: "-10%",
                        width: "600px",
                        height: "600px",
                        backgroundColor: "rgba(37, 99, 235, 0.1)", // Primary/Blue
                        borderRadius: "50%",
                        filter: "blur(100px)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-20%",
                        right: "-10%",
                        width: "600px",
                        height: "600px",
                        backgroundColor: "rgba(124, 58, 237, 0.1)", // Secondary/Purple
                        borderRadius: "50%",
                        filter: "blur(100px)",
                    }}
                />

                {/* Content */}
                <div style={{ display: "flex", alignItems: "center", gap: "20px", zIndex: 10 }}>
                    {/* Logo Placeholder or Text */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: 130,
                            fontWeight: 800,
                            letterSpacing: "-0.05em",
                            backgroundClip: "text",
                            backgroundImage: "linear-gradient(to right, #2563EB, #7C3AED)",
                            color: "transparent",
                        }}
                    >
                        IEP
                    </div>
                </div>

                <div
                    style={{
                        fontSize: 40,
                        fontWeight: 500,
                        color: "#94A3B8", // text-muted
                        marginTop: 20,
                        letterSpacing: "0.02em",
                        zIndex: 10,
                    }}
                >
                    Intensive Education Place
                </div>

                <div
                    style={{
                        fontSize: 24,
                        fontWeight: 400,
                        color: "#64748B",
                        marginTop: 40,
                        zIndex: 10,
                    }}
                >
                    Empowering Students with Knowledge & Skills
                </div>
            </div>
        ),
        {
            ...size,
            // fonts: [
            //     {
            //         name: "Inter",
            //         data: interSemiBold,
            //         style: "normal",
            //         weight: 600,
            //     },
            // ],
        }
    );
}
