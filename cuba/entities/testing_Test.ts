import { StandardEntity } from "./base/sys$StandardEntity";
export class Test extends StandardEntity {
  static NAME = "testing_Test";
  name?: string | null;
}
export type TestViewName = "_base" | "_local" | "_minimal";
export type TestView<V extends TestViewName> = V extends "_base"
  ? Pick<Test, "id" | "name">
  : V extends "_local"
  ? Pick<Test, "id" | "name">
  : V extends "_minimal"
  ? Pick<Test, "id" | "name">
  : never;
