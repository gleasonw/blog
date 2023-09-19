import fs from "node:fs/promises";

export async function GET({ params, request }: any) {
  try {
    const pdfData = await fs.readFile("src/culture_article.pdf");
    const headers = {
      "Content-Type": "application/pdf",
      "Content-Length": pdfData.length.toString(),
    };
    return new Response(pdfData, { headers });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
