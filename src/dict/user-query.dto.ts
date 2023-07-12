export class UserQueryDTO {
  q: string;
  limit = 10;
  type: 'search' | 'lookalike' | 'topic-tags';
  platform: 'instagram' | 'tiktok' | 'youtube' = 'instagram';
}
