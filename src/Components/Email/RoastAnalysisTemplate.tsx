interface RoastAnalysisTemplateProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    websiteUrl: string;
    source: string;
    timestamp: string;
  };
}

export function RoastAnalysisTemplate({ formData }: RoastAnalysisTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}>
          New Website Analysis Request
        </h1>
        <p style={{ color: "#666", fontSize: "14px", margin: "0" }}>
          Submitted on{" "}
          {new Date(formData.timestamp).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      {/* Contact Information */}
      <div style={{ marginBottom: "30px" }}>
        <h2
          style={{
            color: "#333",
            fontSize: "20px",
            borderBottom: "2px solid #e0e0e0",
            paddingBottom: "10px",
          }}
        >
          Contact Information
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tr>
            <td
              style={{
                padding: "8px 0",
                fontWeight: "bold",
                color: "#555",
                width: "30%",
              }}
            >
              Name:
            </td>
            <td style={{ padding: "8px 0", color: "#333" }}>{formData.name}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", fontWeight: "bold", color: "#555" }}>
              Email:
            </td>
            <td style={{ padding: "8px 0", color: "#333" }}>
              {formData.email}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", fontWeight: "bold", color: "#555" }}>
              Phone:
            </td>
            <td style={{ padding: "8px 0", color: "#333" }}>
              {formData.phone}
            </td>
          </tr>
        </table>
      </div>

      {/* Website Information */}
      <div style={{ marginBottom: "30px" }}>
        <h2
          style={{
            color: "#333",
            fontSize: "20px",
            borderBottom: "2px solid #e0e0e0",
            paddingBottom: "10px",
          }}
        >
          Website Analysis Request
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tr>
            <td
              style={{
                padding: "8px 0",
                fontWeight: "bold",
                color: "#555",
                width: "30%",
              }}
            >
              Website URL:
            </td>
            <td style={{ padding: "8px 0", color: "#333" }}>
              <a
                href={formData.websiteUrl}
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                {formData.websiteUrl}
              </a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", fontWeight: "bold", color: "#555" }}>
              Source:
            </td>
            <td style={{ padding: "8px 0", color: "#333" }}>
              {formData.source}
            </td>
          </tr>
        </table>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#666", fontSize: "12px", margin: "0" }}>
          This email was generated automatically from the Website Strategy
          Survey on webcraftsman.co
        </p>
      </div>
    </div>
  );
}
