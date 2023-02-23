export interface IBlog {
  ID: string;
  title: string;
  description: string;
  userID: string;
  content: string;
  created: string;
  mainImageURL: string;
  published: boolean;
  tags: string[];
}

export class blog implements IBlog {
  ID: string;
  title: string;
  description: string;
  userID: string;
  content: string;
  created: string;
  mainImageURL: string;
  published: boolean;
  tags: string[];

  constructor(
    ID: string,
    title: string,
    description: string,
    userID: string,
    content: string,
    created: string,
    mainImageURL: string,
    published: boolean,
    tags: string[]
  ) {
    (this.ID = ID),
      (this.title = title),
      (this.description = description),
      (this.userID = userID),
      (this.content = content),
      (this.created = created),
      (this.mainImageURL = mainImageURL),
      (this.published = published),
      (this.tags = tags);
  }
}
