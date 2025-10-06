export interface QuoteFormTemplateProps {
  formData: {
    projectType: string;
    websiteUrl: string;
    projectDescription: string;
    timeline: string;
    budget: string;
    fullName: string;
    email: string;
    phone: string;
    company: string;
  };
}

export function QuoteFormTemplate({ formData }: QuoteFormTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#333', fontSize: '24px', marginBottom: '10px' }}>
          New Quote Request Submission
        </h1>
        <p style={{ color: '#666', fontSize: '14px', margin: '0' }}>
          Submitted on {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>

      {/* Contact Information */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#333', fontSize: '20px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px' }}>
          Contact Information
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555', width: '30%' }}>Name:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.fullName}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555' }}>Email:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.email}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555' }}>Phone:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.phone}</td>
          </tr>
          {formData.company && (
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555' }}>Company:</td>
              <td style={{ padding: '8px 0', color: '#333' }}>{formData.company}</td>
            </tr>
          )}
        </table>
      </div>

      {/* Project Information */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#333', fontSize: '20px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px' }}>
          Project Details
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555', width: '30%', verticalAlign: 'top' }}>Project Type:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.projectType}</td>
          </tr>
          {formData.websiteUrl && (
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555', verticalAlign: 'top' }}>Current Website:</td>
              <td style={{ padding: '8px 0', color: '#333' }}>
                <a href={formData.websiteUrl} style={{ color: '#007bff' }}>{formData.websiteUrl}</a>
              </td>
            </tr>
          )}
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555', verticalAlign: 'top' }}>Timeline:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.timeline}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555', verticalAlign: 'top' }}>Budget:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.budget}</td>
          </tr>
        </table>
      </div>

      {/* Project Description */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#333', fontSize: '20px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px' }}>
          Project Description
        </h2>
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '15px', 
          borderRadius: '5px', 
          color: '#333',
          lineHeight: '1.6',
          whiteSpace: 'pre-wrap'
        }}>
          {formData.projectDescription}
        </div>
      </div>

      {/* Action Items */}
      <div style={{ 
        backgroundColor: '#e7f3ff', 
        padding: '20px', 
        borderRadius: '10px',
        border: '1px solid #b6d7ff'
      }}>
        <h3 style={{ color: '#333', fontSize: '18px', marginTop: '0', marginBottom: '15px' }}>
          📋 Next Steps
        </h3>
        <ul style={{ color: '#333', lineHeight: '1.6', marginBottom: '0' }}>
          <li>Review project requirements and prepare initial proposal</li>
          <li>Send personalized quote within 24 hours</li>
          <li>Schedule consultation call to discuss details</li>
          <li>Prepare project timeline and deliverables</li>
        </ul>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '30px', textAlign: 'center', color: '#666', fontSize: '12px' }}>
        <p>This quote request was submitted through the WEBCRAFTSMAN website.</p>
        <p style={{ margin: '0' }}>
          <a href="https://webcraftsman.co" style={{ color: '#007bff' }}>webcraftsman.co</a>
        </p>
      </div>
    </div>
  );
}