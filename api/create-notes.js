// POST /api/create-note
export default async function handler(req) {
    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }
  
    const body = await req.json();
  
    return new Response(
      JSON.stringify({
        message: 'Note created!',
        note: body,
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
  