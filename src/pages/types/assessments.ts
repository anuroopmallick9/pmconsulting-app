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
  TestdocDocProvided = "Testdoc.doc provided",
}

export enum Response {
  Empty = "",
  Ok = "OK",
  Response = "response",
  TestResponse1 = "Test Response1",
}

export enum Tools {
  Empty = "",
  TestTools1 = "Test tools1",
  TestToolsToBeUsed = "Test Tools to be used",
  Tools = "tools",
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
