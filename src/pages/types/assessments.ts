// To parse this data:
//
//   import { Convert } from "./file";
//
//   const assessments = Convert.toAssessments(json);

export interface Assessments {
  id: string;
  areaId: AreaID;
  section: string;
  assessments: Assessment[];
}

export enum AreaID {
  The6528C00686F329D3C91B2Db1 = "6528c00686f329d3c91b2db1",
}

export interface Assessment {
  questionId: number;
  question: string;
  response: Response;
  tools: Tools;
  document: Document;
  rating: number;
}

export enum Document {
  Docs = "docs",
  Empty = "",
  TestDocument1 = "Test document1",
  TestdocDocProvidedUpdatedNow11 = "Testdoc.doc provided -- updated now11",
  WordDocument = "word document",
}

export enum Response {
  Empty = "",
  NewResponse = "new response",
  Ok = "OK",
  Response = "response",
  TestResponse1 = "Test Response1",
}

export enum Tools {
  Empty = "",
  TestTools1 = "Test tools1",
  TestToolsToBeUsedUpdatedNow11 = "Test Tools to be used --updated now11",
  Tools = "tools",
  WordPress = "word press",
}

// Converts JSON strings to/from your types
export class Convert {
  public static toAssessments(json: string): Assessments[] {
    return JSON.parse(json);
  }

  public static assessmentsToJson(value: Assessments[]): string {
    return JSON.stringify(value);
  }
}
