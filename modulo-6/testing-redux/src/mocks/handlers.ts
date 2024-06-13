import { rest } from 'msw';

export const handlers = [
  rest.post('https://digitalmoney.digitalhouse.com/api/login', (req, res, ctx) => {
    console.log("Desde el mock");
    const { email, password } = req.body as { email: string; password: string };

    if (email === 'humberto.rivero@digitalhouse.com' && password === 'Digital1234') {
      return res(
        ctx.status(200),
        ctx.json({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjE5IiwiZW1haWwiOiJodW1iZXJ0by5yaXZlcm9AZGlnaXRhbGhvdXNlLmNvbSIsImV4cCI6MTcxODI0MjI4N30.oyJDLSA8hIqTI1hvFlhHm1TjUYF0KqfJtUe3imuqPlk' })
      );
    }

    return res(
      ctx.status(401),
      ctx.json({ message: 'Invalid credentials' })
    );
  }),
];

