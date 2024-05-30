/* Do Not Touch Zone */
'use server'
import 'server-only'
import courses from './data/courses.json'

/**
 * Gets course data from the 'database'.
 * @async
 * @function getCourseData
 * @param {number} [page=1] Page of results to return.
 * @param {number} [count=3] Number of results to return per page.
 * @returns {Promise<Course[] | null>} {@link Course} array or null if page < 1
 */
export async function getCourseData(
  page: number = 1,
  count: number = 3
): Promise<Course[] | null> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.ceil(Math.random() * 2000 + 250))
  })

  if (page < 1) {
    return null
  }

  const start = count * (page - 1)
  const end = start + count

  return courses.slice(start, end)
}

/**
 * Gets the total number of courses in the 'database'.
 * @async
 * @function getCourseCount
 * @returns {Promise<number>} The number of courses in the 'database'.
 */
export async function getCourseCount(): Promise<number> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.ceil(Math.random() * 250 + 250))
  })

  return courses.length
}

/* End Of Do Not Touch Zone */
