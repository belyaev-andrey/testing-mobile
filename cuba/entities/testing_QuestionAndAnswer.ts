import { StandardEntity } from "./base/sys$StandardEntity";
import { Question } from "./testing_Question";
import { Answer } from "./testing_Answer";
export class QuestionAndAnswer extends StandardEntity {
  static NAME = "testing_QuestionAndAnswer";
  question?: Question | null;
  answer?: Answer | null;
  correct?: boolean | null;
}
export type QuestionAndAnswerViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "questionAndAnswer-view";
export type QuestionAndAnswerView<
  V extends QuestionAndAnswerViewName
> = V extends "_base"
  ? Pick<QuestionAndAnswer, "id" | "correct">
  : V extends "_local"
  ? Pick<QuestionAndAnswer, "id" | "correct">
  : V extends "questionAndAnswer-view"
  ? Pick<QuestionAndAnswer, "id" | "correct" | "question" | "answer">
  : never;
