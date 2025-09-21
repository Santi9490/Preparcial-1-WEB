import { redirect } from 'next/navigation';
import { AuthorChange } from './_components/AuthorChange';
import { headers } from 'next/headers';

export default async function AuthorEdit(
  { params }: { params: Promise<{ id: string }> }   
) {
  const { id } = await params;                     
  const idNum = Number(id);
  if (Number.isNaN(idNum)) {
    redirect('/authors');
  }
  const h = headers();
  const proto = (await h).get('x-forwarded-proto') ?? 'http';
  const host  = (await h).get('x-forwarded-host') ?? (await h).get('host');
  if (!host) {
    redirect('/authors');
  }
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/authors/${idNum}`, { cache: 'no-store' });
  if (!res.ok) {
    redirect('/authors');
  }
  

  return (
    <div>
      <h1>Autor #{idNum}</h1>
      <AuthorChange id={String(idNum)} />
    </div>
  );
}
