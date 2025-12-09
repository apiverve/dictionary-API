declare module '@apiverve/dictionary' {
  export interface dictionaryOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface dictionaryResponse {
    status: string;
    error: string | null;
    data: DictionaryData;
    code?: number;
  }


  interface DictionaryData {
      word:            string;
      definitionCount: number;
      definitions:     string[];
  }

  export default class dictionaryWrapper {
    constructor(options: dictionaryOptions);

    execute(callback: (error: any, data: dictionaryResponse | null) => void): Promise<dictionaryResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: dictionaryResponse | null) => void): Promise<dictionaryResponse>;
    execute(query?: Record<string, any>): Promise<dictionaryResponse>;
  }
}
