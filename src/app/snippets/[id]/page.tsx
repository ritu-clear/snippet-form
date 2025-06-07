export default function SnippetShowPage(props: any){
  console.log(props);
  return <div> Show a snippet</div>
}







// import { db } from '@/db'; // ensure it's a named export

// interface SnippetShowPageProps {
//   params: {
//     id: string;
//   };
// }

// export default async function SnippetShowPage({ params }: SnippetShowPageProps) {
//   const snippet = await db.snippet.findUnique({
//     where: {
//       id: params.id,
//     },
//   });

//   if (!snippet) {
//     return <div>Snippet not found</div>;
//   }

//   return (
//     <div>
//       <h1>{snippet.title}</h1>

//     </div>
//   );
// }