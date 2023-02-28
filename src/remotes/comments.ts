import { api } from '@remotes/supabaseClient';

export interface Comment {
  id: number;
  feedId: number;
  message: string;
  createAt: string;
}

export async function getComments(feedId: number) {
  const { data } = await api
    .from<Comment>('comments')
    .select('id, feedId, message, createAt')
    // .eq('feedId', feedId)
    .order('id', { ascending: false });

  // const data = [
  //   {
  //   'id': '1',
  //   'feedId': '999',
  //   'message': 'test',
  //   'createAt': '2023-02-07 18:19:00'
  // }
// ]

  return data;
}

export async function addComment(
  feedId: number,
  { message }: Pick<Comment, 'message'>
) {
  return api.from<Comment>('comments').upsert({
    feedId,
    message,
    createAt: new Date().toISOString(),
  });
}
