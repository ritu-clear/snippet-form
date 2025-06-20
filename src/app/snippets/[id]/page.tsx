import Link from "next/link"
import { notFound } from "next/navigation";
import { db } from "@/db";

import * as actions from '@/app/actions/index';
interface SnippetShowPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage({
  params,
}: SnippetShowPageProps) {
  const id = parseInt(params.id); // Prisma expects number
  if (isNaN(id)) return notFound();
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id, 10) },
  });
  if (!snippet) {
    return notFound();
  }
  const deleteSnippetAction = actions.deleteSnippet.bind(null,snippet.id);
  return (
    <div>
      <div className="flex m-4 justify-between items-center gap-4">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div>
          <Link href={`/snippets/${snippet.id}/edit`} className="p-2  border rounded">Edit</Link>
<form action={deleteSnippetAction}>
<button className="p-2  border rounded">Delete</button>
</form>
          
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code }</code>
      </pre>
    </div>
  );
}
