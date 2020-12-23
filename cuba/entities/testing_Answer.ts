import { StandardEntity } from "./base/sys$StandardEntity";
export class Answer extends StandardEntity {
  static NAME = "testing_Answer";
  text?: string | null;
}
export type AnswerViewName = "_base" | "_local" | "_minimal";
export type AnswerView<V extends AnswerViewName> = V extends "_base"
  ? Pick<Answer, "id" | "text">
  : V extends "_local"
  ? Pick<Answer, "id" | "text">
  : V extends "_minimal"
  ? Pick<Answer, "id" | "text">
  : never;
