interface DemoTemplateProps {
  firstName: string;
}

export function DemoTemplate({ firstName }: DemoTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
}
