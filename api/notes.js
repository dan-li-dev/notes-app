
// GET /api/notes
export function GET(req) {
  if (req.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  const notes = [
    { id: 1, value: 'First note' },
    { id: 2, value: 'Second note' },
  ];

  return new Response(JSON.stringify(notes), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}