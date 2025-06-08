export interface TestCase {
  id: number;
  title: string;
  description: string;
  steps: string[];
  expectedResult: string;
}
