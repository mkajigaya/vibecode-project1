import { test, expect, request } from '@playwright/test';

test.describe('API Endpoints', () => {
  let apiContext;

  test.beforeAll(async ({ playwright }) => {
    apiContext = await request.newContext({
      baseURL: 'http://localhost:3000/api',
    });
  });

  test('Create and retrieve a bug', async () => {
    const newBug = {
      title: 'Sample Bug',
      description: 'Bug description',
      status: 'open',
    };

    const createResponse = await apiContext.post('/bugs', { data: newBug });
    expect(createResponse.ok()).toBeTruthy();
    const createdBug = await createResponse.json();
    expect(createdBug.title).toBe(newBug.title);

    const getResponse = await apiContext.get(`/bugs/${createdBug.id}`);
    expect(getResponse.ok()).toBeTruthy();
    const fetchedBug = await getResponse.json();
    expect(fetchedBug.id).toBe(createdBug.id);
  });

  test('Create and retrieve a test case', async () => {
    const newTestCase = {
      title: 'Sample Test Case',
      description: 'Test case description',
      steps: ['Step 1', 'Step 2'],
      expectedResult: 'Expected outcome',
    };

    const createResponse = await apiContext.post('/testcases', { data: newTestCase });
    expect(createResponse.ok()).toBeTruthy();
    const createdTestCase = await createResponse.json();
    expect(createdTestCase.title).toBe(newTestCase.title);

    const getResponse = await apiContext.get(`/testcases/${createdTestCase.id}`);
    expect(getResponse.ok()).toBeTruthy();
    const fetchedTestCase = await getResponse.json();
    expect(fetchedTestCase.id).toBe(createdTestCase.id);
  });
});
