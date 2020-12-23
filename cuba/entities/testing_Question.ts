import { StandardEntity } from "./base/sys$StandardEntity";
export class Question extends StandardEntity {
  static NAME = "testing_Question";
  text?: string | null;
}
export type QuestionViewName = "_base" | "_local" | "_minimal";
export type QuestionView<V extends QuestionViewName> = V extends "_base"
  ? Pick<Question, "id" | "text">
  : V extends "_local"
  ? Pick<Question, "id" | "text">
  : V extends "_minimal"
  ? Pick<Question, "id" | "text">
  : never;
