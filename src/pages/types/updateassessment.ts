// To parse this data:
//
//   import { Convert, UpdateAssessment } from "./file";
//
//   const updateAssessment = Convert.toUpdateAssessment(json);

export interface UpdateAssessment {
  response: string;
  tools: string;
  document: string;
  rating: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUpdateAssessment(json: string): UpdateAssessment {
    return JSON.parse(json);
  }

  public static updateAssessmentToJson(value: UpdateAssessment): string {
    return JSON.stringify(value);
  }
}
