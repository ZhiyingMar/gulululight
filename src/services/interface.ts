export interface LoginServer {
  username: string;
  password: string;
}

/**
 * List
 * @pageIndex 页数
 * @pageSize 每页个数
 */
export interface List {
  pageIndex: number;
  pageSize: number;
}

export interface Content{
    content:String|Number
};
