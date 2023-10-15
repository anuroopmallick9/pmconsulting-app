// To parse this data:
//
//   import { Convert } from "./file";
//
//   const subjectAreas = Convert.toSubjectAreas(json);

export interface SubjectAreas {
  id: string;
  name: string;
  status: Status;
  score: number;
}

export enum Status {
  Pending = "pending",
}

// Converts JSON strings to/from your types
export class Convert {
  public static toSubjectAreas(json: string): SubjectAreas[] {
    return JSON.parse(json);
  }

  public static subjectAreasToJson(value: SubjectAreas[]): string {
    return JSON.stringify(value);
  }
}
