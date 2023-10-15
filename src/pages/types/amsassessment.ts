// To parse this data:
//
//   import { Convert } from "./file";
//
//   const aMSAssessment = Convert.toAMSAssessment(json);

export interface AMSAssessment {
  section: string;
  assessments: Assessment[];
}

export interface Assessment {
  question: string;
  response: string;
  tools: string;
  document: string;
  rating: number;
}

// Converts JSON strings to/from your types
export class Convert {
  static toSubjectAreas(arg0: string) {
    throw new Error("Method not implemented.");
  }
  public static toAMSAssessment(json: string): AMSAssessment[] {
    return JSON.parse(json);
  }

  public static aMSAssessmentToJson(value: AMSAssessment[]): string {
    return JSON.stringify(value);
  }
}
