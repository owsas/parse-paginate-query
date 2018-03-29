/**
 * Paginates
 * @param query 
 */
export async function paginateQuery(
  query: Parse.Query,
): Promise<{total: number, limit: number, skip: number, results: Parse.Object[]}> {
  const total = await query.count();
  const results = await query.find();
  const json = query.toJSON();

  return {
    total,
    results,
    limit: json.limit,
    skip: json.skip,
  };
}
