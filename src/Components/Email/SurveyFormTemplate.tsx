interface SurveyFormTemplateProps {
  formData: {
    // businessName: string;
    // businessDescription: string;
    currentWebsiteUrl: string;
    // mainGoal: string;
    biggestChallenge: string;
    timeline: string;
    budget: string;
    monthlyRevenue: string;
    // contentReady: string;
    fullName: string;
    email: string;
    phone: string;
  };
}

export function SurveyFormTemplate({ formData }: SurveyFormTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#333', fontSize: '24px', marginBottom: '10px' }}>
          New Website Strategy Survey Submission
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
        </table>
      </div>

      {/* Website Information */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#333', fontSize: '20px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px' }}>
          Website Information
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          {/* Disabled business fields */}
          {/* <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555', width: '30%' }}>Business Name:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.businessName}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555', verticalAlign: 'top' }}>Description:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.businessDescription}</td>
          </tr> */}
          {formData.currentWebsiteUrl && (
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555' }}>Current Website:</td>
              <td style={{ padding: '8px 0', color: '#333' }}>
                <a href={formData.currentWebsiteUrl} style={{ color: '#0066cc' }}>
                  {formData.currentWebsiteUrl}
                </a>
              </td>
            </tr>
          )}
        </table>
      </div>

      {/* Project Details */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#333', fontSize: '20px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px' }}>
          Project Requirements
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          {/* Disabled main goal field */}
          {/* <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555', width: '30%' }}>Main Goal:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.mainGoal}</td>
          </tr> */}
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555', verticalAlign: 'top' }}>Biggest Challenge:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.biggestChallenge}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555' }}>Timeline:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.timeline}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555' }}>Budget:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.budget}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555' }}>Monthly Revenue:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.monthlyRevenue}</td>
          </tr>
          {/* Disabled content ready field */}
          {/* <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#555' }}>Content Ready:</td>
            <td style={{ padding: '8px 0', color: '#333' }}>{formData.contentReady}</td>
          </tr> */}
        </table>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: '12px', margin: '0' }}>
          This email was generated automatically from the Website Strategy Survey on webcraftsman.co
        </p>
      </div>
    </div>
  );
}
