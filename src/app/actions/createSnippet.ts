'use server';
import { db } from '@/db';
import { redirect , notFound } from 'next/navigation';

export async function createSnippet(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  await db.snippet.create({
    data: { title, code },
  });

  redirect('/');
  if (!title || !code) {
    notFound(); // Show 404 if required data is missing
  }
}