"use server";

export async function submitAuditForm(currentState: any, formData: FormData) {
  const formUrl = process.env.NEXT_PUBLIC_ROAST_FORM_URL as string;
  const keyValuePairs: string[] = [];

  formData.forEach((value, key) => {
    keyValuePairs.push(
      `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`
    );
  });

  const res = await fetch(formUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: keyValuePairs.join("&"),
  });

  if (!res.ok) {
    return {
      error:
        "Oops! There was an error. Please try again or contact us directly.",
    };
  }

  return { success: true };
}
