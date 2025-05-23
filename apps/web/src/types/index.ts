export interface PhotoDetail {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export type PhotoGetResponse = PhotoDetail;
