import * as Parse from 'parse/node';
import { paginateQuery } from '../src';

test('should return the right pagination parameters', async () => {
  const obj = new Parse.Object('TestObj');
  obj.id = '123';

  const query = new Parse.Query('TestClass');
  query.limit(20);
  query.skip(50);

  // Spy the query count function to return some value
  // and avoid network contact
  jest.spyOn(query, 'count').mockImplementationOnce(async () => 2000);

  // Spy the query find function to return some value
  // and avoid network contact
  jest.spyOn(query, 'find').mockImplementationOnce(async () => [obj]);

  // Call the function
  const result = await paginateQuery(query);
  
  expect(result).toEqual({
    total: 2000,
    results: [obj],
    limit: 20,
    skip: 50,
  });
});
