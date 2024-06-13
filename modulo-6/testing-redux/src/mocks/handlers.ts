import { rest } from 'msw';

export const handlers = [
  rest.post('https://digitalmoney.digitalhouse.com/api/login', (req, res, ctx) => {
    console.log("Desde el mock");
    const { email, password } = req.body as { email: string; password: string };

    if (email === 'prueba@pruebas.com' && password === 'Hola1234') {
      return res(
        ctx.status(200),
        ctx.json({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjE2NiIsImVtYWlsIjoicHJ1ZWJhQHBydWViYXMuY29tIiwiZXhwIjoxNzE4MzIyNjg1fQ.dqzCmIRO279r73k9xTNKvm54mAm684KYUACAO9SpTRA' })
      );
    }

    return res(
      ctx.status(401),
      ctx.json({ message: 'Invalid credentials' })
    );
  }),
];

